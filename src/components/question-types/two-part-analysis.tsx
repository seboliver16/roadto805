"use client";

import { Question, QUESTION_TYPE_LABELS } from "@/types";
import { Badge } from "../badge";
import { SourceBadge } from "../source-badge";
import { SelectablePassage } from "../selectable-passage";

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
    <div>
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <Badge variant="purple">{QUESTION_TYPE_LABELS[question.type]}</Badge>
        <Badge
          variant={
            question.difficulty === "easy" ? "green" : question.difficulty === "medium" ? "yellow" : "red"
          }
        >
          {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
        </Badge>
      </div>

      <div className="mb-3 rounded-lg bg-white p-4 border border-[#e5e7eb]">
        <SelectablePassage passage={question.text} className="text-base" />
      </div>

      <div className="mb-2 grid grid-cols-[80px_80px_1fr] gap-2 px-4">
        <span className="text-xs font-semibold text-[#6b7280] text-center">{columns[0]}</span>
        <span className="text-xs font-semibold text-[#6b7280] text-center">{columns[1]}</span>
        <span className="text-xs font-semibold text-[#6b7280]">Answer Choices</span>
      </div>

      <div className="space-y-1.5">
        {question.choices.map((choice, i) => {
          let bg = "bg-white";
          let borderColor = "border-[#e5e7eb]";

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

          const isSelectedA = selectedAnswer === i;
          const isCorrectACell = showResult && i === correctA;
          const isWrongACell = showResult && i === selectedAnswer && i !== correctA;

          const isSelectedB = selectedAnswerB === i;
          const isCorrectBCell = showResult && i === correctB;
          const isWrongBCell = showResult && i === selectedAnswerB && i !== correctB;

          function radioClasses(selected: boolean, isCorrect: boolean, isWrong: boolean) {
            if (isCorrect) return "border-green-500 bg-green-500";
            if (isWrong) return "border-red-500 bg-red-500";
            if (selected && !showResult) return "border-[#0d0d0d] bg-[#0d0d0d]";
            return "border-[#d1d5db]";
          }

          return (
            <div
              key={i}
              className={`grid grid-cols-[80px_80px_1fr] gap-2 items-center rounded-md border ${borderColor} ${bg} p-2.5 transition-colors`}
            >
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

              <span className="text-sm">{choice}</span>
            </div>
          );
        })}
      </div>

      {showResult && (
        <div className="mt-3 space-y-1 text-sm">
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

      {showResult && (
        <div className="mt-3 space-y-3">
          <div className="rounded-lg bg-[#fafafa] border border-[#e5e7eb] p-4">
            <h3 className="font-semibold text-[#0d0d0d] mb-2">Explanation</h3>
            <p className="text-[#374151] text-sm leading-relaxed whitespace-pre-line">
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
