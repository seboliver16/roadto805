"use client";

import dynamic from "next/dynamic";
import { Question, QUESTION_TYPE_LABELS } from "@/types";
import { Badge } from "../badge";
import { SourceBadge } from "../source-badge";
import { SelectablePassage } from "../selectable-passage";

const ChartRenderer = dynamic(
  () => import("../chart-renderer").then((m) => ({ default: m.ChartRenderer })),
  {
    ssr: false,
    loading: () => <div className="h-[280px] rounded-lg bg-[#fafafa] animate-pulse" />,
  }
);

interface Props {
  question: Question;
  selectedAnswer: number | null;
  showResult: boolean;
  onSelectAnswer: (index: number) => void;
}

function extractQuestionText(text: string): string {
  const separators = [
    "Based on the graph described above,",
    "Based on the graph described above",
    "Based on the chart described above,",
  ];
  for (const sep of separators) {
    const idx = text.indexOf(sep);
    if (idx !== -1) {
      return text.substring(idx).trim();
    }
  }
  return text;
}

export function GraphicsInterpretation({ question, selectedAnswer, showResult, onSelectAnswer }: Props) {
  const hasChart = !!question.chartData;
  const questionText = hasChart ? extractQuestionText(question.text) : question.text;

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

      {/* Chart + Question area */}
      {hasChart ? (
        <div className="mb-3 space-y-3">
          <div className="rounded-lg bg-white p-4 border border-[#e5e7eb]">
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-[#374151]">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              {question.chartData!.title ?? "Graph / Chart Data"}
            </div>
            <ChartRenderer chartData={question.chartData!} />
          </div>
          <div className="rounded-lg bg-white p-4 border border-[#e5e7eb]">
            <SelectablePassage passage={questionText} className="text-base" />
          </div>
        </div>
      ) : (
        <div className="mb-3 rounded-lg bg-white p-4 border border-[#e5e7eb]">
          <div className="mb-3 flex items-center gap-2 text-sm text-[#6b7280]">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Graph / Chart Data
          </div>
          <SelectablePassage passage={question.text} className="text-base" />
        </div>
      )}

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

      {showResult && (
        <div className="mt-3 space-y-3">
          <div className="rounded-xl border-l-4 border-l-emerald-400 border border-[#e5e7eb] bg-white p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-2.5">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                </svg>
              </div>
              <h3 className="font-semibold text-[#0d0d0d] text-sm">Why this is the answer</h3>
            </div>
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
