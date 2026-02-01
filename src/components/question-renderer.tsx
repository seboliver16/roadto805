"use client";

import { Question } from "@/types";
import { ProblemSolving } from "./question-types/problem-solving";
import { CriticalReasoning } from "./question-types/critical-reasoning";
import { ReadingComprehension } from "./question-types/reading-comprehension";
import { MultiSourceReasoning } from "./question-types/multi-source-reasoning";
import { TwoPartAnalysis } from "./question-types/two-part-analysis";
import { GraphicsInterpretation } from "./question-types/graphics-interpretation";
import { TableAnalysis } from "./question-types/table-analysis";

interface QuestionRendererProps {
  question: Question;
  selectedAnswer: number | null;
  selectedAnswerB?: number | null;
  showResult: boolean;
  onSelectAnswer: (index: number) => void;
  onSelectAnswerB?: (index: number) => void;
}

export function QuestionRenderer(props: QuestionRendererProps) {
  switch (props.question.type) {
    case "problem-solving":
    case "data-sufficiency":
      return <ProblemSolving {...props} />;
    case "critical-reasoning":
      return <CriticalReasoning {...props} />;
    case "reading-comprehension":
      return <ReadingComprehension {...props} />;
    case "multi-source-reasoning":
      return <MultiSourceReasoning {...props} />;
    case "two-part-analysis":
      return <TwoPartAnalysis {...props} />;
    case "graphics-interpretation":
      return <GraphicsInterpretation {...props} />;
    case "table-analysis":
      return <TableAnalysis {...props} />;
    default:
      return <ProblemSolving {...props} />;
  }
}
