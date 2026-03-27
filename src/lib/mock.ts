import { Question, Difficulty } from "@/types";
import { ExamConfig, MockSectionConfig } from "@/exams/types";

export type { MockSectionConfig } from "@/exams/types";

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
 * If `excludeIds` is provided, those questions are excluded from the pool.
 */
function selectSectionQuestions(
  questionPool: Question[],
  section: string,
  count: number,
  distribution: { easy: number; medium: number; hard: number },
  excludeIds?: Set<string>
): Question[] {
  let pool = questionPool.filter((q) => q.section === section);
  if (excludeIds) {
    pool = pool.filter((q) => !excludeIds.has(q.id));
  }

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
 * Select questions for an adaptive Section 2 based on Section 1 performance.
 * Used by the GRE mock exam.
 *
 * @param difficultyTier - "easy" | "medium" | "hard" based on S1 accuracy
 */
function selectAdaptiveQuestions(
  questionPool: Question[],
  section: string,
  count: number,
  difficultyTier: Difficulty,
  excludeIds: Set<string>
): Question[] {
  let pool = questionPool.filter((q) => q.section === section && !excludeIds.has(q.id));

  if (difficultyTier === "hard") {
    // Hard tier: 60% hard, 30% medium, 10% easy
    const hard = shuffleArray(pool.filter((q) => q.difficulty === "hard"));
    const medium = shuffleArray(pool.filter((q) => q.difficulty === "medium"));
    const easy = shuffleArray(pool.filter((q) => q.difficulty === "easy"));
    const hardCount = Math.round(count * 0.6);
    const medCount = Math.round(count * 0.3);
    const easyCount = count - hardCount - medCount;
    const selected = [...hard.slice(0, hardCount), ...medium.slice(0, medCount), ...easy.slice(0, easyCount)];
    // Backfill
    if (selected.length < count) {
      const usedIds = new Set(selected.map((q) => q.id));
      const remaining = shuffleArray(pool.filter((q) => !usedIds.has(q.id)));
      selected.push(...remaining.slice(0, count - selected.length));
    }
    return shuffleArray(selected);
  }

  if (difficultyTier === "easy") {
    // Easy tier: 60% easy, 30% medium, 10% hard
    const easy = shuffleArray(pool.filter((q) => q.difficulty === "easy"));
    const medium = shuffleArray(pool.filter((q) => q.difficulty === "medium"));
    const hard = shuffleArray(pool.filter((q) => q.difficulty === "hard"));
    const easyCount = Math.round(count * 0.6);
    const medCount = Math.round(count * 0.3);
    const hardCount = count - easyCount - medCount;
    const selected = [...easy.slice(0, easyCount), ...medium.slice(0, medCount), ...hard.slice(0, hardCount)];
    if (selected.length < count) {
      const usedIds = new Set(selected.map((q) => q.id));
      const remaining = shuffleArray(pool.filter((q) => !usedIds.has(q.id)));
      selected.push(...remaining.slice(0, count - selected.length));
    }
    return shuffleArray(selected);
  }

  // Medium tier: standard distribution
  return selectSectionQuestions(questionPool, section, count, { easy: 0.3, medium: 0.4, hard: 0.3 }, excludeIds);
}

/**
 * Determine adaptive difficulty tier based on Section 1 score.
 */
export function getAdaptiveTier(s1Correct: number, s1Total: number): Difficulty {
  const accuracy = s1Total > 0 ? s1Correct / s1Total : 0;
  if (accuracy >= 0.67) return "hard";
  if (accuracy >= 0.33) return "medium";
  return "easy";
}

/**
 * Generate S1 questions upfront for an adaptive exam (GRE).
 * Returns questions only for sections without adaptiveRef.
 * S2 questions are generated later once S1 scores are known.
 */
export function getMockExamS1Questions(
  config: ExamConfig,
  questionPool: Question[]
): { questions: Question[][]; s1Indices: number[]; s2Indices: number[] } {
  const questions: Question[][] = [];
  const s1Indices: number[] = [];
  const s2Indices: number[] = [];

  const hasAdaptive = config.mockSections.some((cfg) => cfg.adaptiveRef !== undefined);

  if (!hasAdaptive) {
    // No adaptive sections — generate all upfront
    return {
      questions: config.mockSections.map((cfg) =>
        selectSectionQuestions(questionPool, cfg.section, cfg.questionCount, config.difficultyDistribution)
      ),
      s1Indices: config.mockSections.map((_, i) => i),
      s2Indices: [],
    };
  }

  for (let i = 0; i < config.mockSections.length; i++) {
    const cfg = config.mockSections[i];
    if (cfg.adaptiveRef !== undefined) {
      // Placeholder — will be filled after S1
      questions.push([]);
      s2Indices.push(i);
    } else if (cfg.isEssay) {
      // AWA section — pick 1 Issue + 1 Argument
      questions.push(selectAWAQuestions(questionPool));
      s1Indices.push(i);
    } else {
      questions.push(
        selectSectionQuestions(questionPool, cfg.section, cfg.questionCount, config.difficultyDistribution)
      );
      s1Indices.push(i);
    }
  }

  return { questions, s1Indices, s2Indices };
}

/**
 * Generate adaptive S2 questions after S1 is complete.
 */
export function getMockExamS2Questions(
  config: ExamConfig,
  questionPool: Question[],
  s2Index: number,
  s1Score: number,
  s1Total: number,
  usedQuestionIds: Set<string>
): Question[] {
  const cfg = config.mockSections[s2Index];
  const tier = getAdaptiveTier(s1Score, s1Total);
  return selectAdaptiveQuestions(questionPool, cfg.section, cfg.questionCount, tier, usedQuestionIds);
}

/**
 * Select AWA (Analytical Writing) questions: 1 Issue + 1 Argument task.
 */
function selectAWAQuestions(questionPool: Question[]): Question[] {
  const awaPool = questionPool.filter((q) => q.type === "analytical-writing");
  const issues = shuffleArray(awaPool.filter((q) => q.essayType === "issue"));
  const args = shuffleArray(awaPool.filter((q) => q.essayType === "argument"));
  const selected: Question[] = [];
  if (issues.length > 0) selected.push(issues[0]);
  if (args.length > 0) selected.push(args[0]);
  return selected;
}

/**
 * Generate mock exam questions using an exam config.
 * Returns an array of arrays, one per section in config order.
 *
 * For non-adaptive exams (GMAT), generates all sections upfront.
 * For adaptive exams (GRE), also generates all upfront with standard distribution
 * (the mock page can choose to use the adaptive flow instead).
 */
export function getMockExamQuestionsForExam(
  config: ExamConfig,
  questionPool: Question[]
): Question[][] {
  const usedIds = new Set<string>();
  return config.mockSections.map((cfg) => {
    // Essay sections get special handling
    if (cfg.isEssay) {
      const qs = selectAWAQuestions(questionPool);
      qs.forEach((q) => usedIds.add(q.id));
      return qs;
    }
    const qs = selectSectionQuestions(
      questionPool, cfg.section, cfg.questionCount, config.difficultyDistribution, usedIds
    );
    qs.forEach((q) => usedIds.add(q.id));
    return qs;
  });
}


/**
 * Format seconds into MM:SS display string.
 */
export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}
