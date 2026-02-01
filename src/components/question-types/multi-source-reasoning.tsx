"use client";

import { useState } from "react";
import { Question, QUESTION_TYPE_LABELS } from "@/types";
import { Badge } from "../badge";
import { SourceBadge } from "../source-badge";
import { SelectablePassage } from "../selectable-passage";

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

      <div className="flex flex-col lg:flex-row lg:gap-4 lg:items-start">
        {sources.length > 0 && (
          <div className="mb-3 lg:mb-0 lg:w-1/2 rounded-lg border border-[#e5e7eb] bg-white overflow-hidden">
            <div className="flex border-b border-[#e5e7eb]">
              {sources.map((source, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`flex-1 px-4 py-2.5 text-sm font-medium transition-colors -mb-px ${
                    activeTab === i
                      ? "text-[#0d0d0d] border-b-2 border-[#0d0d0d]"
                      : "text-[#6b7280] hover:text-[#0d0d0d]"
                  }`}
                >
                  {source.title}
                </button>
              ))}
            </div>
            <div className="p-4 lg:max-h-[calc(100vh-12rem)] lg:overflow-y-auto">
              <SelectablePassage
                passage={sources[activeTab]?.content ?? ""}
                questionContext={question.text}
              />
            </div>
          </div>
        )}

        <div className={sources.length > 0 ? "lg:w-1/2" : "w-full"}>
          <div className="mb-3 rounded-lg bg-white p-4 border border-[#e5e7eb]">
            <SelectablePassage passage={question.text} className="text-base font-medium" />
          </div>

          <div className="space-y-1.5">
            {question.choices.map((choice, i) => {
              let borderColor = "border-[#e5e7eb]";
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
                borderColor = "border-[#0d0d0d]";
                bg = "bg-[#fafafa]";
              }

              return (
                <button
                  key={i}
                  onClick={() => !showResult && onSelectAnswer(i)}
                  disabled={showResult}
                  className={`w-full rounded-md border ${borderColor} ${bg} p-2.5 text-left transition-colors ${
                    !showResult ? "hover:bg-[#fafafa]" : ""
                  }`}
                >
                  <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#f3f4f6] text-xs font-semibold">
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
        </div>
      </div>

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
