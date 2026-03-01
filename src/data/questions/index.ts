import { Question, Section, Theme } from "@/types";
import { quantQuestions } from "./quant";
import { verbalQuestions } from "./verbal";
import { dataInsightsQuestions } from "./data-insights";
import { greQuestions } from "@/exams/gre/questions";
import { ExamConfig } from "@/exams/types";
import { gmatConfig } from "@/exams/gmat/config";

// GMAT questions (backward compatible)
export const gmatQuestionList: Question[] = [
  ...quantQuestions,
  ...verbalQuestions,
  ...dataInsightsQuestions,
];

// All questions across all exams (used by questionMap for analytics)
export const allQuestions: Question[] = [
  ...gmatQuestionList,
  ...greQuestions,
];

// Backward-compatible export
export const questions = allQuestions;

export const questionMap: Record<string, Question> = Object.fromEntries(
  allQuestions.map((q) => [q.id, q])
);

export function getQuestionsBySection(section: Section): Question[] {
  return allQuestions.filter((q) => q.section === section);
}

export function getQuestionsByThemes(themes: Theme[]): Question[] {
  return allQuestions.filter((q) =>
    q.themes.some((t) => themes.includes(t))
  );
}

export function getQuestionById(id: string): Question | undefined {
  return questionMap[id];
}

/**
 * Get diagnostic questions for a specific exam config.
 * Selects questions per section with balanced difficulty.
 */
export function getDiagnosticQuestionsForExam(
  config: ExamConfig,
  questionPool: Question[]
): Question[] {
  const diagnosticSet: Question[] = [];
  const perSection = config.diagnosticQuestionsPerSection;

  for (const section of config.sections) {
    const sectionQs = questionPool.filter((q) => q.section === section.id);
    const easy = sectionQs.filter((q) => q.difficulty === "easy");
    const medium = sectionQs.filter((q) => q.difficulty === "medium");
    const hard = sectionQs.filter((q) => q.difficulty === "hard");

    const pick = (arr: Question[], n: number) => {
      const shuffled = [...arr].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, n);
    };

    const easyCount = Math.ceil(perSection / 3);
    const hardCount = Math.floor(perSection / 3);
    const mediumCount = perSection - easyCount - hardCount;

    diagnosticSet.push(
      ...pick(easy, easyCount),
      ...pick(medium, mediumCount),
      ...pick(hard, hardCount)
    );
  }

  return diagnosticSet;
}

/**
 * Backward-compatible: Get diagnostic questions for GMAT.
 */
export function getDiagnosticQuestions(): Question[] {
  return getDiagnosticQuestionsForExam(gmatConfig, gmatQuestionList);
}
