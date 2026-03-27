"use client";

import { Question } from "@/types";
import { useExam } from "@/exams/exam-context";
import { Badge } from "../badge";
import { SourceBadge } from "../source-badge";
import { SelectablePassage } from "../selectable-passage";
import { InstructionBanner, SelectionFooter } from "./instruction-banner";

interface Props {
  question: Question;
  selectedAnswer: number | null;
  selectedAnswerB?: number | null;
  showResult: boolean;
  onSelectAnswer: (index: number) => void;
  onSelectAnswerB?: (index: number) => void;
}

/**
 * GRE Sentence Equivalence renderer.
 *
 * Displays 6 answer choices as checkboxes. The test-taker must select exactly 2
 * that each produce a coherent sentence with similar meaning. No partial credit.
 * Uses correctAnswer + correctAnswerB to store the two correct indices.
 */
export function SentenceEquivalence({
  question,
  selectedAnswer,
  selectedAnswerB,
  showResult,
  onSelectAnswer,
  onSelectAnswerB,
}: Props) {
  const exam = useExam();
  const typeLabel = exam.questionTypes[question.type] ?? "Sentence Equivalence";
  const correctA = question.correctAnswer;
  const correctB = question.correctAnswerB ?? -1;
  const correctSet = new Set([correctA, correctB]);

  // Handle toggle: selecting/deselecting checkboxes
  const handleToggle = (index: number) => {
    if (showResult) return;

    // If this index is already selected as A, deselect it
    if (selectedAnswer === index) {
      onSelectAnswer(-1);
      return;
    }
    // If this index is already selected as B, deselect it
    if (selectedAnswerB === index) {
      onSelectAnswerB?.(-1);
      return;
    }
    // If slot A is empty or -1, fill A
    if (selectedAnswer === null || selectedAnswer === -1) {
      onSelectAnswer(index);
      return;
    }
    // If slot B is empty or -1, fill B
    if (selectedAnswerB === null || selectedAnswerB === -1) {
      onSelectAnswerB?.(index);
      return;
    }
    // Both slots full — replace B
    onSelectAnswerB?.(index);
  };

  const isSelected = (i: number) => i === selectedAnswer || i === selectedAnswerB;
  const selectedCount = [selectedAnswer, selectedAnswerB].filter((v) => v !== null && v !== -1).length;

  return (
    <div>
      <InstructionBanner>
        Select the <span className="underline font-medium">two</span> answer choices that, when used to complete the sentence, fit the meaning of the sentence as a whole <span className="underline font-medium">and</span> produce completed sentences that are alike in meaning.
      </InstructionBanner>

      <div className="mb-2 flex flex-wrap items-center gap-2">
        <Badge variant="blue">{typeLabel}</Badge>
        <Badge
          variant={question.difficulty === "easy" ? "green" : question.difficulty === "medium" ? "yellow" : "red"}
        >
          {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
        </Badge>
      </div>

      <div className="mb-4 rounded-lg bg-white p-4 border border-[#e5e7eb]">
        <SelectablePassage passage={question.text} className="text-base leading-relaxed" />
      </div>

      <div className="space-y-1.5">
        {question.choices.map((choice, i) => {
          const selected = isSelected(i);
          const isCorrect = correctSet.has(i);
          const isUserWrong = showResult && selected && !isCorrect;
          const isCorrectHighlight = showResult && isCorrect;

          let borderColor = "border-[#e5e7eb]";
          let bg = "bg-white";

          if (showResult) {
            if (isCorrectHighlight) {
              borderColor = "border-green-500";
              bg = "bg-green-50";
            } else if (isUserWrong) {
              borderColor = "border-red-500";
              bg = "bg-red-50";
            }
          } else if (selected) {
            borderColor = "border-[#0d0d0d]";
            bg = "bg-[#fafafa]";
          }

          return (
            <button
              key={i}
              onClick={() => handleToggle(i)}
              disabled={showResult}
              className={`w-full rounded-md border ${borderColor} ${bg} p-2.5 text-left transition-colors ${!showResult ? "hover:bg-[#fafafa]" : ""}`}
            >
              <span className="mr-3 inline-flex h-5 w-5 items-center justify-center rounded border-2 text-xs font-semibold transition-colors
                ${selected && !showResult ? 'border-[#0d0d0d] bg-[#0d0d0d] text-white' : ''}
                ${isCorrectHighlight ? 'border-green-500 bg-green-500 text-white' : ''}
                ${isUserWrong ? 'border-red-500 bg-red-500 text-white' : ''}
                ${!selected && !showResult ? 'border-[#d1d5db] bg-white' : ''}
              ">
                {/* Checkbox rendering */}
                <span className={`inline-flex h-5 w-5 items-center justify-center rounded border-2 text-xs font-bold shrink-0 ${
                  showResult && isCorrect
                    ? "border-green-500 bg-green-500 text-white"
                    : showResult && selected && !isCorrect
                      ? "border-red-500 bg-red-500 text-white"
                      : selected && !showResult
                        ? "border-[#0d0d0d] bg-[#0d0d0d] text-white"
                        : "border-[#d1d5db] bg-white text-transparent"
                }`}>
                  {(selected || (showResult && isCorrect)) ? "✓" : ""}
                </span>
              </span>
              <span className="text-sm">{choice}</span>
              {showResult && isCorrect && selected && (
                <span className="ml-2 text-sm font-medium text-green-600">Correct</span>
              )}
              {showResult && isCorrect && !selected && (
                <span className="ml-2 text-sm font-medium text-green-600">Correct answer</span>
              )}
              {showResult && isUserWrong && (
                <span className="ml-2 text-sm font-medium text-red-600">Your answer</span>
              )}
            </button>
          );
        })}
      </div>

      {!showResult && (
        <>
          <p className="mt-2 text-xs text-[#9ca3af]">
            {selectedCount}/2 selected
          </p>
          <SelectionFooter text="Select two answer choices." />
        </>
      )}

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
