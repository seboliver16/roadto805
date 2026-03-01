import { Question, Section } from "@/types";
import { ExamConfig, MockSectionConfig } from "@/exams/types";
import { allQuestions } from "@/data/questions";
import { gmatConfig } from "@/exams/gmat/config";

// Re-export for backward compatibility
export type { MockSectionConfig } from "@/exams/types";
export const MOCK_SECTIONS = gmatConfig.mockSections;
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
 * Select questions for a mock section with proportional difficulty distribution.
 */
function selectSectionQuestions(
  questionPool: Question[],
  section: string,
  count: number,
  distribution: { easy: number; medium: number; hard: number }
): Question[] {
  const pool = questionPool.filter((q) => q.section === section);
  const easy = shuffleArray(pool.filter((q) => q.difficulty === "easy"));
  const medium = shuffleArray(pool.filter((q) => q.difficulty === "medium"));
  const hard = shuffleArray(pool.filter((q) => q.difficulty === "hard"));

  const easyCount = Math.round(count * distribution.easy);
  const hardCount = Math.round(count * distribution.hard);
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
 * Generate mock exam questions using an exam config.
 * Returns an array of arrays, one per section in config order.
 */
export function getMockExamQuestionsForExam(
  config: ExamConfig,
  questionPool: Question[]
): Question[][] {
  return config.mockSections.map((cfg) =>
    selectSectionQuestions(questionPool, cfg.section, cfg.questionCount, config.difficultyDistribution)
  );
}

/**
 * Backward-compatible: Generate mock exam using GMAT config and default question pool.
 */
export function getMockExamQuestions(): Question[][] {
  return getMockExamQuestionsForExam(gmatConfig, allQuestions);
}

/**
 * Backward-compatible: Estimate a GMAT score.
 */
export function estimateGmatScore(
  sectionResults: Record<string, { score: number; total: number }>
): { total: number; sections: Record<string, number> } {
  return gmatConfig.estimateScore(sectionResults);
}

/**
 * Format seconds into MM:SS display string.
 */
export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}
