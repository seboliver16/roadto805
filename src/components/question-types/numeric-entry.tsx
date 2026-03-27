"use client";

import { useState, useCallback } from "react";
import { Question } from "@/types";
import { useExam } from "@/exams/exam-context";
import { Badge } from "../badge";
import { SourceBadge } from "../source-badge";
import { SelectablePassage } from "../selectable-passage";
import { InstructionBanner } from "./instruction-banner";

interface Props {
  question: Question;
  selectedAnswer: number | null;
  showResult: boolean;
  onSelectAnswer: (index: number) => void;
  numericValue?: string;
  onNumericChange?: (value: string) => void;
}

/**
 * GRE Numeric Entry renderer.
 *
 * Displays a text input where the test-taker types their answer.
 * Accepts integers, decimals, and fractions (e.g., "3", "3.5", "7/4").
 * Validates against question.numericAnswer.
 *
 * For integration with the existing answer system (which uses number indices),
 * we use selectedAnswer === 1 to mean "answered" and 0 for "incorrect shown".
 * The actual validation is done by comparing the typed value to numericAnswer.
 */
export function NumericEntry({
  question,
  selectedAnswer,
  showResult,
  onSelectAnswer,
  numericValue = "",
  onNumericChange,
}: Props) {
  const exam = useExam();
  const typeLabel = exam.questionTypes[question.type] ?? "Numeric Entry";
  const [localValue, setLocalValue] = useState(numericValue);

  const isFraction = question.numericAnswer?.includes("/") ?? false;

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setLocalValue(val);
    onNumericChange?.(val);

    // Mark as "answered" if there's input, so the submit button enables
    if (val.trim()) {
      onSelectAnswer(1);
    } else {
      onSelectAnswer(-1);
    }
  }, [onNumericChange, onSelectAnswer]);

  // Check if the user's answer matches
  const isCorrect = showResult && checkNumericAnswer(localValue, question.numericAnswer ?? "");

  return (
    <div>
      <InstructionBanner>
        {isFraction
          ? "Enter your answer as a fraction. Equivalent forms of the correct answer, such as 2.5 and 2.50, are all correct."
          : "Enter your answer as an integer or a decimal."}
      </InstructionBanner>

      <div className="mb-2 flex flex-wrap items-center gap-2">
        <Badge variant="purple">{typeLabel}</Badge>
        <Badge
          variant={question.difficulty === "easy" ? "green" : question.difficulty === "medium" ? "yellow" : "red"}
        >
          {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
        </Badge>
      </div>

      <div className="mb-4 rounded-lg bg-white p-4 border border-[#e5e7eb]">
        <SelectablePassage passage={question.text} className="text-base leading-relaxed" />
      </div>

      <div className="flex items-center gap-3">
        <input
          type="text"
          value={localValue}
          onChange={handleChange}
          disabled={showResult}
          placeholder={isFraction ? "e.g., 7/4" : "e.g., 42"}
          className={`w-48 rounded-lg border px-4 py-3 text-base font-medium transition-colors outline-none ${
            showResult
              ? isCorrect
                ? "border-green-500 bg-green-50 text-green-700"
                : "border-red-500 bg-red-50 text-red-700"
              : "border-[#e5e7eb] bg-white text-[#0d0d0d] focus:border-[#0d0d0d]"
          }`}
        />
        {showResult && (
          <span className={`text-sm font-medium ${isCorrect ? "text-green-600" : "text-red-600"}`}>
            {isCorrect ? "Correct" : `Incorrect — answer is ${question.numericAnswer}`}
          </span>
        )}
      </div>

      {showResult && (
        <div className="mt-4 space-y-3">
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

/**
 * Check if a user's numeric input matches the expected answer.
 * Supports integers, decimals, and fractions.
 */
function checkNumericAnswer(userInput: string, expected: string): boolean {
  const userVal = parseNumericValue(userInput.trim());
  const expectedVal = parseNumericValue(expected.trim());

  if (userVal === null || expectedVal === null) return false;

  // Allow small floating-point tolerance
  return Math.abs(userVal - expectedVal) < 0.0001;
}

function parseNumericValue(s: string): number | null {
  if (!s) return null;

  // Handle fraction format: "a/b"
  if (s.includes("/")) {
    const parts = s.split("/");
    if (parts.length !== 2) return null;
    const num = parseFloat(parts[0]);
    const den = parseFloat(parts[1]);
    if (isNaN(num) || isNaN(den) || den === 0) return null;
    return num / den;
  }

  // Handle integer or decimal
  const val = parseFloat(s);
  return isNaN(val) ? null : val;
}
