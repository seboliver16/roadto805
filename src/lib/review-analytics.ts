import { questionMap } from "@/data/questions";
import {
  Section,
  Theme,
  Difficulty,
  QuestionType,
  THEME_LABELS,
  QUESTION_TYPE_LABELS,
  UserAttempt,
  PracticeSession,
} from "@/types";

// === Types ===

export type TimeRange = "24h" | "7d" | "30d" | "all";

export interface ThemeStat {
  theme: Theme;
  total: number;
  correct: number;
  accuracy: number;
}

export interface ReviewAnalytics {
  totalAttempted: number;
  totalCorrect: number;
  totalMissed: number;
  overallAccuracy: number;
  sectionBreakdown: Record<Section, { total: number; correct: number; accuracy: number }>;
  themeBreakdown: ThemeStat[];
  difficultyBreakdown: Record<Difficulty, { total: number; correct: number; accuracy: number }>;
  questionTypeBreakdown: { type: QuestionType; label: string; total: number; correct: number; accuracy: number }[];
}

export interface Recommendation {
  id: string;
  title: string;
  reason: string;
  practiceUrl: string;
}

export interface TrendPoint {
  label: string;
  accuracy: number;
  total: number;
  correct: number;
  timestamp: number;
}

// === Time filtering ===

const TIME_CUTOFFS: Record<TimeRange, number> = {
  "24h": 24 * 60 * 60 * 1000,
  "7d": 7 * 24 * 60 * 60 * 1000,
  "30d": 30 * 24 * 60 * 60 * 1000,
  all: 0,
};

export function filterByTime(attempts: UserAttempt[], range: TimeRange): UserAttempt[] {
  if (range === "all") return attempts;
  const cutoff = Date.now() - TIME_CUTOFFS[range];
  return attempts.filter((a) => a.timestamp >= cutoff);
}

export function filterBySection(attempts: UserAttempt[], section: Section | "all"): UserAttempt[] {
  if (section === "all") return attempts;
  return attempts.filter((a) => {
    const q = questionMap[a.questionId];
    return q && q.section === section;
  });
}

export function filterByQuestionType(attempts: UserAttempt[], type: QuestionType | "all"): UserAttempt[] {
  if (type === "all") return attempts;
  return attempts.filter((a) => {
    const q = questionMap[a.questionId];
    return q && q.type === type;
  });
}

// === Analytics computation ===

export function computeAnalytics(attempts: UserAttempt[]): ReviewAnalytics {
  const sectionBreakdown: Record<Section, { total: number; correct: number; accuracy: number }> = {
    quant: { total: 0, correct: 0, accuracy: 0 },
    verbal: { total: 0, correct: 0, accuracy: 0 },
    "data-insights": { total: 0, correct: 0, accuracy: 0 },
  };

  const themeMap: Record<string, { total: number; correct: number }> = {};
  const difficultyBreakdown: Record<Difficulty, { total: number; correct: number; accuracy: number }> = {
    easy: { total: 0, correct: 0, accuracy: 0 },
    medium: { total: 0, correct: 0, accuracy: 0 },
    hard: { total: 0, correct: 0, accuracy: 0 },
  };
  const qtMap: Record<string, { total: number; correct: number }> = {};

  let totalCorrect = 0;

  for (const attempt of attempts) {
    const q = questionMap[attempt.questionId];
    if (!q) continue;

    if (attempt.correct) totalCorrect++;

    // Section
    sectionBreakdown[q.section].total++;
    if (attempt.correct) sectionBreakdown[q.section].correct++;

    // Themes
    for (const theme of q.themes) {
      if (!themeMap[theme]) themeMap[theme] = { total: 0, correct: 0 };
      themeMap[theme].total++;
      if (attempt.correct) themeMap[theme].correct++;
    }

    // Difficulty
    difficultyBreakdown[q.difficulty].total++;
    if (attempt.correct) difficultyBreakdown[q.difficulty].correct++;

    // Question type
    if (!qtMap[q.type]) qtMap[q.type] = { total: 0, correct: 0 };
    qtMap[q.type].total++;
    if (attempt.correct) qtMap[q.type].correct++;
  }

  // Compute accuracies
  for (const s of Object.values(sectionBreakdown)) {
    s.accuracy = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
  }
  for (const d of Object.values(difficultyBreakdown)) {
    d.accuracy = d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0;
  }

  const themeBreakdown: ThemeStat[] = Object.entries(themeMap)
    .map(([theme, data]) => ({
      theme: theme as Theme,
      total: data.total,
      correct: data.correct,
      accuracy: Math.round((data.correct / data.total) * 100),
    }))
    .sort((a, b) => a.accuracy - b.accuracy);

  const questionTypeBreakdown = Object.entries(qtMap)
    .map(([type, data]) => ({
      type: type as QuestionType,
      label: QUESTION_TYPE_LABELS[type as QuestionType] || type,
      total: data.total,
      correct: data.correct,
      accuracy: Math.round((data.correct / data.total) * 100),
    }))
    .sort((a, b) => a.accuracy - b.accuracy);

  return {
    totalAttempted: attempts.length,
    totalCorrect,
    totalMissed: attempts.length - totalCorrect,
    overallAccuracy: attempts.length > 0 ? Math.round((totalCorrect / attempts.length) * 100) : 0,
    sectionBreakdown,
    themeBreakdown,
    difficultyBreakdown,
    questionTypeBreakdown,
  };
}

// === Recommendations ===

export function computeRecommendations(analytics: ReviewAnalytics): Recommendation[] {
  const recs: Recommendation[] = [];

  // Top weak themes (accuracy < 60% with >= 2 attempts)
  const weakThemes = analytics.themeBreakdown.filter((t) => t.accuracy < 60 && t.total >= 2);
  for (const t of weakThemes.slice(0, 3)) {
    recs.push({
      id: `theme-${t.theme}`,
      title: `Practice ${THEME_LABELS[t.theme]}`,
      reason: `${t.accuracy}% accuracy across ${t.total} questions`,
      practiceUrl: `/practice?themes=${t.theme}`,
    });
  }

  // If we have fewer than 3 recs, look at themes with < 75% accuracy
  if (recs.length < 3) {
    const mediumWeak = analytics.themeBreakdown
      .filter((t) => t.accuracy >= 60 && t.accuracy < 75 && t.total >= 2)
      .slice(0, 3 - recs.length);
    for (const t of mediumWeak) {
      recs.push({
        id: `theme-${t.theme}`,
        title: `Strengthen ${THEME_LABELS[t.theme]}`,
        reason: `${t.accuracy}% accuracy — room for improvement`,
        practiceUrl: `/practice?themes=${t.theme}`,
      });
    }
  }

  // Weakest section recommendation
  const weakestSection = (Object.entries(analytics.sectionBreakdown) as [Section, { total: number; accuracy: number }][])
    .filter(([, data]) => data.total >= 3 && data.accuracy < 70)
    .sort(([, a], [, b]) => a.accuracy - b.accuracy)[0];

  if (weakestSection && recs.length < 4) {
    const [section, data] = weakestSection;
    recs.push({
      id: `section-${section}`,
      title: `Focus on ${section === "data-insights" ? "Data Insights" : section.charAt(0).toUpperCase() + section.slice(1)}`,
      reason: `${data.accuracy}% overall section accuracy`,
      practiceUrl: `/practice?section=${section}`,
    });
  }

  return recs;
}

// === Utilities ===

export function formatRelativeTime(timestamp: number): string {
  const diff = Date.now() - timestamp;
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
}

export function getQuestionTypesForSection(section: Section): { value: QuestionType; label: string }[] {
  const map: Record<Section, QuestionType[]> = {
    quant: ["problem-solving", "data-sufficiency"],
    verbal: ["critical-reasoning", "reading-comprehension"],
    "data-insights": ["multi-source-reasoning", "two-part-analysis", "graphics-interpretation", "table-analysis"],
  };
  return map[section].map((t) => ({ value: t, label: QUESTION_TYPE_LABELS[t] }));
}

export function countSessionsInRange(sessions: PracticeSession[], range: TimeRange): number {
  if (range === "all") return sessions.length;
  const cutoff = Date.now() - TIME_CUTOFFS[range];
  return sessions.filter((s) => s.timestamp >= cutoff).length;
}

// === Progress over time ===

function formatDateShort(ts: number): string {
  const d = new Date(ts);
  return `${d.getMonth() + 1}/${d.getDate()}`;
}

function startOfDay(ts: number): number {
  const d = new Date(ts);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

function startOfWeek(ts: number): number {
  const d = new Date(ts);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - d.getDay());
  return d.getTime();
}

/**
 * Groups attempts into time buckets and computes accuracy per bucket.
 * Buckets are daily for ranges <= 30d, weekly for "all".
 * Returns points sorted oldest-first.
 */
export function computeProgressTrend(attempts: UserAttempt[], range: TimeRange): TrendPoint[] {
  if (attempts.length === 0) return [];

  const useWeekly = range === "all";
  const bucketFn = useWeekly ? startOfWeek : startOfDay;

  const buckets: Record<number, { total: number; correct: number }> = {};

  // Attempts are already sorted newest-first from Firestore; iterate all
  for (const a of attempts) {
    const key = bucketFn(a.timestamp);
    if (!buckets[key]) buckets[key] = { total: 0, correct: 0 };
    buckets[key].total++;
    if (a.correct) buckets[key].correct++;
  }

  return Object.entries(buckets)
    .map(([ts, data]) => ({
      label: formatDateShort(Number(ts)),
      accuracy: Math.round((data.correct / data.total) * 100),
      total: data.total,
      correct: data.correct,
      timestamp: Number(ts),
    }))
    .sort((a, b) => a.timestamp - b.timestamp);
}
