import { Question, Section, Theme } from "@/types";
import { quantQuestions } from "./quant";
import { verbalQuestions } from "./verbal";
import { dataInsightsQuestions } from "./data-insights";

export const allQuestions: Question[] = [
  ...quantQuestions,
  ...verbalQuestions,
  ...dataInsightsQuestions,
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

export function getDiagnosticQuestions(): Question[] {
  // Select 6 questions per section (2 easy, 2 medium, 2 hard)
  const diagnosticSet: Question[] = [];

  const sections: Section[] = ["quant", "verbal", "data-insights"];
  for (const section of sections) {
    const sectionQs = allQuestions.filter((q) => q.section === section);
    const easy = sectionQs.filter((q) => q.difficulty === "easy");
    const medium = sectionQs.filter((q) => q.difficulty === "medium");
    const hard = sectionQs.filter((q) => q.difficulty === "hard");

    // Pick 2 from each difficulty, shuffled
    const pick = (arr: Question[], n: number) => {
      const shuffled = [...arr].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, n);
    };

    diagnosticSet.push(...pick(easy, 2), ...pick(medium, 2), ...pick(hard, 2));
  }

  return diagnosticSet;
}
