import { Question } from "@/types";
import { quantQuestions } from "./quant";
import { verbalQuestions } from "./verbal";
import { dataInsightsQuestions } from "./data-insights";

export const gmatQuestions: Question[] = [
  ...quantQuestions,
  ...verbalQuestions,
  ...dataInsightsQuestions,
];

export const gmatQuestionMap: Record<string, Question> = Object.fromEntries(
  gmatQuestions.map((q) => [q.id, q])
);
