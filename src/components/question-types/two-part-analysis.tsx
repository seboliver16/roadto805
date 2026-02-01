"use client";

import { Question, QUESTION_TYPE_LABELS } from "@/types";
import { Badge } from "../badge";
import { SourceBadge } from "../source-badge";

interface Props {
  question: Question;
  selectedAnswer: number | null;
  showResult: boolean;
  onSelectAnswer: (index: number) => void;
}

export function TwoPartAnalysis({ question, selectedAnswer, showResult, onSelectAnswer }: Props) {
  const columns = question.twoPartColumns ?? ["Column 1", "Column 2"];

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

      {/* Choices as rows -- simplified: select one answer that best fits */}
      <div className="space-y-2">
        {question.choices.map((choice, i) => {
          let borderColor = "border-gray-200";
          let bg = "bg-white";

          if (showResult) {
            if (i === question.correctAnswer) {
              borderColor = "border-green-500";
              bg = "bg-green-50";
            } else if (i === selectedAnswer && i !== question.correctAnswer) {
              borderColor = "border-red-500";
              bg = "bg-red-50";
            }
          } else if (selectedAnswer === i) {
            borderColor = "border-blue-500";
            bg = "bg-blue-50";
          }

          return (
            <button
              key={i}
              onClick={() => !showResult && onSelectAnswer(i)}
              disabled={showResult}
              className={`w-full grid grid-cols-[80px_80px_1fr] gap-2 items-center rounded-lg border-2 ${borderColor} ${bg} p-3 text-left transition-colors ${
                !showResult ? "hover:border-blue-300 hover:bg-blue-50" : ""
              }`}
            >
              <div className="flex justify-center">
                <div className={`h-4 w-4 rounded-full border-2 ${
                  selectedAnswer === i || (showResult && i === question.correctAnswer)
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-300"
                }`} />
              </div>
              <div className="flex justify-center">
                <div className={`h-4 w-4 rounded-full border-2 ${
                  showResult && i === question.correctAnswer
                    ? "border-green-500 bg-green-500"
                    : "border-gray-300"
                }`} />
              </div>
              <span className="text-sm">{choice}</span>
            </button>
          );
        })}
      </div>

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
