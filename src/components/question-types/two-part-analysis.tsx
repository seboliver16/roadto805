"use client";

import { Question, QUESTION_TYPE_LABELS } from "@/types";
import { Badge } from "../badge";
import { SourceBadge } from "../source-badge";

interface Props {
  question: Question;
  selectedAnswer: number | null;
  selectedAnswerB?: number | null;
  showResult: boolean;
  onSelectAnswer: (index: number) => void;
  onSelectAnswerB?: (index: number) => void;
}

export function TwoPartAnalysis({ question, selectedAnswer, selectedAnswerB, showResult, onSelectAnswer, onSelectAnswerB }: Props) {
  const columns = question.twoPartColumns ?? ["Column 1", "Column 2"];
  const correctA = question.correctAnswer;
  const correctB = question.correctAnswerB ?? -1;

  return (
    <div className="animate-fade-in">
      {/* Badges */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Badge variant="purple">{QUESTION_TYPE_LABELS[question.type]}</Badge>
        <Badge
          variant={
            question.difficulty === "easy" ? "green" : question.difficulty === "medium" ? "yellow" : "red"
          }
        >
          {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
        </Badge>
      </div>

      {/* Question text */}
      <div className="mb-6 rounded-xl bg-white p-6 shadow-sm border">
        <p className="text-base leading-relaxed whitespace-pre-line">{question.text}</p>
      </div>

      {/* Two-column header */}
      <div className="mb-2 grid grid-cols-[80px_80px_1fr] gap-2 px-4">
        <span className="text-xs font-semibold text-gray-500 text-center">{columns[0]}</span>
        <span className="text-xs font-semibold text-gray-500 text-center">{columns[1]}</span>
        <span className="text-xs font-semibold text-gray-500">Answer Choices</span>
      </div>

      {/* Choices as rows with independent radio buttons per column */}
      <div className="space-y-2">
        {question.choices.map((choice, i) => {
          // Determine row background based on result state
          let bg = "bg-white";
          let borderColor = "border-gray-200";

          if (showResult) {
            const isCorrectA = i === correctA;
            const isCorrectB = i === correctB;
            const isWrongA = i === selectedAnswer && i !== correctA;
            const isWrongB = i === selectedAnswerB && i !== correctB;

            if (isCorrectA || isCorrectB) {
              bg = "bg-green-50";
              borderColor = "border-green-300";
            } else if (isWrongA || isWrongB) {
              bg = "bg-red-50";
              borderColor = "border-red-300";
            }
          }

          // Column A radio state
          const isSelectedA = selectedAnswer === i;
          const isCorrectACell = showResult && i === correctA;
          const isWrongACell = showResult && i === selectedAnswer && i !== correctA;

          // Column B radio state
          const isSelectedB = selectedAnswerB === i;
          const isCorrectBCell = showResult && i === correctB;
          const isWrongBCell = showResult && i === selectedAnswerB && i !== correctB;

          function radioClasses(selected: boolean, isCorrect: boolean, isWrong: boolean) {
            if (isCorrect) return "border-green-500 bg-green-500";
            if (isWrong) return "border-red-500 bg-red-500";
            if (selected && !showResult) return "border-blue-500 bg-blue-500";
            return "border-gray-300";
          }

          return (
            <div
              key={i}
              className={`grid grid-cols-[80px_80px_1fr] gap-2 items-center rounded-lg border-2 ${borderColor} ${bg} p-3 transition-colors`}
            >
              {/* Column A radio */}
              <button
                type="button"
                onClick={() => !showResult && onSelectAnswer(i)}
                disabled={showResult}
                className="flex justify-center"
                aria-label={`${columns[0]}: ${choice}`}
              >
                <div className={`h-5 w-5 rounded-full border-2 transition-colors ${radioClasses(isSelectedA, isCorrectACell, isWrongACell)}`}>
                  {(isSelectedA || isCorrectACell) && (
                    <div className="flex h-full w-full items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white" />
                    </div>
                  )}
                </div>
              </button>

              {/* Column B radio */}
              <button
                type="button"
                onClick={() => !showResult && onSelectAnswerB?.(i)}
                disabled={showResult}
                className="flex justify-center"
                aria-label={`${columns[1]}: ${choice}`}
              >
                <div className={`h-5 w-5 rounded-full border-2 transition-colors ${radioClasses(isSelectedB, isCorrectBCell, isWrongBCell)}`}>
                  {(isSelectedB || isCorrectBCell) && (
                    <div className="flex h-full w-full items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white" />
                    </div>
                  )}
                </div>
              </button>

              {/* Choice text */}
              <span className="text-sm">{choice}</span>
            </div>
          );
        })}
      </div>

      {/* Result labels */}
      {showResult && (
        <div className="mt-4 space-y-1 text-sm">
          <p>
            <span className="font-medium">{columns[0]}:</span>{" "}
            {selectedAnswer === correctA ? (
              <span className="text-green-600 font-medium">Correct</span>
            ) : (
              <span className="text-red-600 font-medium">
                Incorrect (you chose {question.choices[selectedAnswer ?? 0]}, correct is {question.choices[correctA]})
              </span>
            )}
          </p>
          <p>
            <span className="font-medium">{columns[1]}:</span>{" "}
            {selectedAnswerB === correctB ? (
              <span className="text-green-600 font-medium">Correct</span>
            ) : (
              <span className="text-red-600 font-medium">
                Incorrect (you chose {question.choices[selectedAnswerB ?? 0]}, correct is {question.choices[correctB]})
              </span>
            )}
          </p>
        </div>
      )}

      {/* Explanation */}
      {showResult && (
        <div className="mt-6 space-y-4">
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-6">
            <h3 className="font-semibold text-amber-800 mb-2">Explanation</h3>
            <p className="text-amber-900 text-sm leading-relaxed whitespace-pre-line">
              {question.explanation}
            </p>
          </div>
          <div className="flex justify-end">
            <SourceBadge source={question.source} />
          </div>
        </div>
      )}
    </div>
  );
}
