import { Question } from "@/types";
import { greVerbalQuestions } from "./verbal";
import { greQuantQuestions } from "./quant";

export const greQuestions: Question[] = [
  ...greVerbalQuestions,
  ...greQuantQuestions,
];

export const greQuestionMap: Record<string, Question> = Object.fromEntries(
  greQuestions.map((q) => [q.id, q])
);
