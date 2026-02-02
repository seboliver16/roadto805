import { Question, Section } from "@/types";
import { allQuestions } from "@/data/questions";

export interface MockSectionConfig {
  section: Section;
  label: string;
  questionCount: number;
  timeMinutes: number;
}

export const MOCK_SECTIONS: MockSectionConfig[] = [
  { section: "quant", label: "Quantitative Reasoning", questionCount: 21, timeMinutes: 45 },
  { section: "verbal", label: "Verbal Reasoning", questionCount: 23, timeMinutes: 45 },
  { section: "data-insights", label: "Data Insights", questionCount: 20, timeMinutes: 45 },
];

export const MOCK_TOTAL_QUESTIONS = MOCK_SECTIONS.reduce((s, c) => s + c.questionCount, 0);

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Select questions for a mock section with proportional difficulty distribution:
 * ~30% easy, ~40% medium, ~30% hard
 */
function selectSectionQuestions(section: Section, count: number): Question[] {
  const pool = allQuestions.filter((q) => q.section === section);
  const easy = shuffleArray(pool.filter((q) => q.difficulty === "easy"));
  const medium = shuffleArray(pool.filter((q) => q.difficulty === "medium"));
  const hard = shuffleArray(pool.filter((q) => q.difficulty === "hard"));

  const easyCount = Math.round(count * 0.3);
  const hardCount = Math.round(count * 0.3);
  const mediumCount = count - easyCount - hardCount;

  const selected = [
    ...easy.slice(0, easyCount),
    ...medium.slice(0, mediumCount),
    ...hard.slice(0, hardCount),
  ];

  // Backfill if any bucket was short
  if (selected.length < count) {
    const usedIds = new Set(selected.map((q) => q.id));
    const remaining = shuffleArray(pool.filter((q) => !usedIds.has(q.id)));
    selected.push(...remaining.slice(0, count - selected.length));
  }

  return shuffleArray(selected);
}

/**
 * Generate the full set of questions for a mock exam, grouped by section.
 * Returns an array of arrays, one per section in MOCK_SECTIONS order.
 */
export function getMockExamQuestions(): Question[][] {
  return MOCK_SECTIONS.map((cfg) => selectSectionQuestions(cfg.section, cfg.questionCount));
}

/**
 * Estimate a GMAT Focus Edition score (205-805) from section results.
 *
 * GMAT Focus Edition: each section 60-90, total 205-805.
 * We use a linear mapping from accuracy percentage.
 */
export function estimateGmatScore(
  sectionResults: Record<Section, { score: number; total: number }>
): { total: number; sections: Record<Section, number> } {
  const sections = {} as Record<Section, number>;

  for (const [section, data] of Object.entries(sectionResults)) {
    const accuracy = data.total > 0 ? data.score / data.total : 0;
    // Map 0–100% accuracy to 60–90 section score
    sections[section as Section] = Math.round(60 + accuracy * 30);
  }

  const sectionSum = Object.values(sections).reduce((a, b) => a + b, 0);
  // Section scores range 180 (3×60) to 270 (3×90), map to 205-805
  const total = Math.round(205 + ((sectionSum - 180) / 90) * 600);

  return {
    total: Math.min(805, Math.max(205, total)),
    sections,
  };
}

/**
 * Format seconds into MM:SS display string.
 */
export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}
