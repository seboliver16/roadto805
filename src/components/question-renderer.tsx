"use client";

import { Question } from "@/types";
import { ProblemSolving } from "./question-types/problem-solving";
import { CriticalReasoning } from "./question-types/critical-reasoning";
import { ReadingComprehension } from "./question-types/reading-comprehension";
import { MultiSourceReasoning } from "./question-types/multi-source-reasoning";
import { TwoPartAnalysis } from "./question-types/two-part-analysis";
import { GraphicsInterpretation } from "./question-types/graphics-interpretation";
import { TableAnalysis } from "./question-types/table-analysis";
import { TextCompletion } from "./question-types/text-completion";
import { SentenceEquivalence } from "./question-types/sentence-equivalence";
import { QuantitativeComparison } from "./question-types/quantitative-comparison";
import { NumericEntry } from "./question-types/numeric-entry";

interface QuestionRendererProps {
  question: Question;
  selectedAnswer: number | null;
  selectedAnswerB?: number | null;
  selectedAnswerC?: number | null;
  showResult: boolean;
  onSelectAnswer: (index: number) => void;
  onSelectAnswerB?: (index: number) => void;
  onSelectAnswerC?: (index: number) => void;
  numericValue?: string;
  onNumericChange?: (value: string) => void;
}

export function QuestionRenderer(props: QuestionRendererProps) {
  switch (props.question.type) {
    // GMAT types
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
    // GRE types
    case "text-completion":
      return <TextCompletion {...props} />;
    case "sentence-equivalence":
      return <SentenceEquivalence {...props} />;
    case "quantitative-comparison":
      return <QuantitativeComparison {...props} />;
    case "numeric-entry":
      return <NumericEntry {...props} />;
    // GRE data-interpretation uses the same renderer as problem-solving (chart/table shown via passage/chartData)
    case "data-interpretation":
      return <ProblemSolving {...props} />;
    default:
      return <ProblemSolving {...props} />;
  }
}
