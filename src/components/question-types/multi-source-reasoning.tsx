"use client";

import { useState } from "react";
import { Question, QUESTION_TYPE_LABELS } from "@/types";
import { Badge } from "../badge";
import { SourceBadge } from "../source-badge";

interface Props {
  question: Question;
  selectedAnswer: number | null;
  showResult: boolean;
  onSelectAnswer: (index: number) => void;
}

export function MultiSourceReasoning({ question, selectedAnswer, showResult, onSelectAnswer }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const sources = question.dataSources ?? [];

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

      {/* Data Sources Tabs */}
      {sources.length > 0 && (
        <div className="mb-6 rounded-xl border bg-white overflow-hidden">
          <div className="flex border-b">
            {sources.map((source, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === i
                    ? "bg-blue-50 text-blue-700 border-b-2 border-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {source.title}
              </button>
            ))}
          </div>
          <div className="p-5">
            <p className="text-sm leading-relaxed whitespace-pre-line text-gray-800">
              {sources[activeTab]?.content}
            </p>
          </div>
        </div>
      )}

      {/* Question */}
      <div className="mb-6 rounded-xl bg-white p-6 shadow-sm border">
        <p className="text-base leading-relaxed font-medium">{question.text}</p>
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
              <span className="text-sm">{choice}</span>
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
          <div className="flex justify-end">
            <SourceBadge source={question.source} />
          </div>
        </div>
      )}
    </div>
  );
}
