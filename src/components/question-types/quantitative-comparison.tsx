"use client";

import { Question } from "@/types";
import { useExam } from "@/exams/exam-context";
import { Badge } from "../badge";
import { SourceBadge } from "../source-badge";
import { SelectablePassage } from "../selectable-passage";

interface Props {
  question: Question;
  selectedAnswer: number | null;
  showResult: boolean;
  onSelectAnswer: (index: number) => void;
}

const QC_CHOICES = [
  "Quantity A is greater.",
  "Quantity B is greater.",
  "The two quantities are equal.",
  "The relationship cannot be determined from the information given.",
];

/**
 * GRE Quantitative Comparison renderer.
 *
 * Displays Quantity A and Quantity B in a formatted comparison box,
 * optionally with given information above. Always uses the 4 standard QC choices.
 */
export function QuantitativeComparison({
  question,
  selectedAnswer,
  showResult,
  onSelectAnswer,
}: Props) {
  const exam = useExam();
  const typeLabel = exam.questionTypes[question.type] ?? "Quantitative Comparison";

  // Use the fixed QC choices (ignore question.choices for display — they should match anyway)
  const choices = question.choices.length === 4 ? question.choices : QC_CHOICES;

  return (
    <div>
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <Badge variant="purple">{typeLabel}</Badge>
        <Badge
          variant={question.difficulty === "easy" ? "green" : question.difficulty === "medium" ? "yellow" : "red"}
        >
          {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
        </Badge>
      </div>

      {/* Given information / question context */}
      {question.givenInfo && (
        <div className="mb-3 rounded-lg bg-[#fafafa] p-4 border border-[#e5e7eb]">
          <SelectablePassage passage={question.givenInfo} className="text-sm text-[#374151]" />
        </div>
      )}

      {/* Question text (if any additional context) */}
      {question.text && !question.quantityA && (
        <div className="mb-3 rounded-lg bg-white p-4 border border-[#e5e7eb]">
          <SelectablePassage passage={question.text} className="text-base" />
        </div>
      )}

      {/* Quantity A vs Quantity B comparison box */}
      {question.quantityA && question.quantityB && (
        <div className="mb-4 rounded-xl border border-[#e5e7eb] overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-2 bg-[#0d0d0d] text-white">
            <div className="px-4 py-2.5 text-sm font-semibold text-center border-r border-[#374151]">Quantity A</div>
            <div className="px-4 py-2.5 text-sm font-semibold text-center">Quantity B</div>
          </div>
          {/* Values */}
          <div className="grid grid-cols-2">
            <div className="px-4 py-4 text-center border-r border-[#e5e7eb] bg-white">
              <SelectablePassage passage={question.quantityA} className="text-base font-medium text-[#0d0d0d]" />
            </div>
            <div className="px-4 py-4 text-center bg-white">
              <SelectablePassage passage={question.quantityB} className="text-base font-medium text-[#0d0d0d]" />
            </div>
          </div>
        </div>
      )}

      {/* Extra context below quantities */}
      {question.text && question.quantityA && (
        <div className="mb-3 rounded-lg bg-white p-4 border border-[#e5e7eb]">
          <SelectablePassage passage={question.text} className="text-sm text-[#374151]" />
        </div>
      )}

      {/* The 4 standard QC answer choices */}
      <div className="space-y-1.5">
        {choices.map((choice, i) => {
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
              className={`w-full rounded-md border ${borderColor} ${bg} p-2.5 text-left transition-colors ${!showResult ? "hover:bg-[#fafafa]" : ""}`}
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
          {question.conceptExplanation && (
            <div className="rounded-xl border-l-4 border-l-violet-400 border border-[#e5e7eb] bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2.5">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-50 text-violet-600">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#0d0d0d] text-sm">Key Concept</h3>
              </div>
              <p className="text-[#374151] text-sm leading-relaxed whitespace-pre-line">
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
