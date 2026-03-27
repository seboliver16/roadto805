import { Question } from "@/types";
import { greVerbalQuestions } from "./verbal";
import { greQuantQuestions } from "./quant";
import { greAWAQuestions } from "./awa";

export const greQuestions: Question[] = [
  ...greAWAQuestions,
  ...greVerbalQuestions,
  ...greQuantQuestions,
];

export const greQuestionMap: Record<string, Question> = Object.fromEntries(
  greQuestions.map((q) => [q.id, q])
);
