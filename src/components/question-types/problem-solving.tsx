"use client";

import { Question, THEME_LABELS, QUESTION_TYPE_LABELS } from "@/types";
import { Badge } from "../badge";
import { SourceBadge } from "../source-badge";

interface Props {
  question: Question;
  selectedAnswer: number | null;
  showResult: boolean;
  onSelectAnswer: (index: number) => void;
}

export function ProblemSolving({ question, selectedAnswer, showResult, onSelectAnswer }: Props) {
  return (
    <div className="animate-fade-in">
      {/* Badges */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Badge variant={question.type === "data-sufficiency" ? "purple" : "blue"}>
          {QUESTION_TYPE_LABELS[question.type]}
        </Badge>
        <Badge
          variant={
            question.difficulty === "easy" ? "green" : question.difficulty === "medium" ? "yellow" : "red"
          }
        >
          {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
        </Badge>
        {question.themes.map((theme) => (
          <Badge key={theme} variant="default">
            {THEME_LABELS[theme]}
          </Badge>
        ))}
      </div>

      {/* Question text */}
      <div className="mb-6 rounded-xl bg-white p-6 shadow-sm border">
        <p className="text-lg leading-relaxed whitespace-pre-line">{question.text}</p>
      </div>

      {/* Choices */}
      <div className="space-y-3">
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
              className={`w-full rounded-lg border-2 ${borderColor} ${bg} p-4 text-left transition-colors ${
                !showResult ? "hover:border-blue-300 hover:bg-blue-50" : ""
              }`}
            >
              <span className="mr-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold">
                {String.fromCharCode(65 + i)}
              </span>
              {choice}
              {showResult && i === question.correctAnswer && (
                <span className="ml-2 text-sm font-medium text-green-600">Correct</span>
              )}
              {showResult && i === selectedAnswer && i !== question.correctAnswer && (
                <span className="ml-2 text-sm font-medium text-red-600">Your answer</span>
              )}
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
          {question.conceptExplanation && (
            <div className="rounded-xl bg-blue-50 border border-blue-200 p-6">
              <h3 className="font-semibold text-blue-800 mb-2">Concept Review</h3>
              <p className="text-blue-900 text-sm leading-relaxed whitespace-pre-line">
                {question.conceptExplanation}
              </p>
            </div>
          )}
          <div className="flex justify-end">
            <SourceBadge source={question.source} />
          </div>
        </div>
      )}
    </div>
  );
}
