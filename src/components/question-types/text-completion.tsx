"use client";

import React from "react";
import { Question } from "@/types";
import { useExam } from "@/exams/exam-context";
import { Badge } from "../badge";
import { SourceBadge } from "../source-badge";
import { SelectablePassage } from "../selectable-passage";
import { InstructionBanner, SelectionFooter } from "./instruction-banner";

const BLANK_UNDERLINE_COLORS = ["text-blue-600", "text-violet-600", "text-amber-600"];

/**
 * Render question text with styled blank markers.
 * Replaces _______(i)_______ or _______ with a colored underline blank.
 */
function BlankHighlightedText({ text, selectedChoices }: { text: string; selectedChoices?: Record<string, string> }) {
  // Replace combined patterns like "_____(i)_____" with just "(i)",
  // then replace remaining standalone underscores with numbered blanks
  let cleaned = text.replace(/_{2,}\s*\((i{1,3})\)\s*_{2,}/g, "($1)");
  cleaned = cleaned.replace(/_{2,}\((i{1,3})\)/g, "($1)");
  cleaned = cleaned.replace(/\((i{1,3})\)_{2,}/g, "($1)");

  // Now split on (i), (ii), (iii) or remaining standalone underscores
  const parts = cleaned.split(/(\(i{1,3}\)|_{3,})/g);

  let blankIdx = 0;
  return (
    <span className="text-base leading-relaxed">
      {parts.map((part, idx) => {
        const blankMatch = part.match(/^\((i{1,3})\)$/);
        if (blankMatch) {
          const label = blankMatch[1];
          const colorIdx = label === "i" ? 0 : label === "ii" ? 1 : 2;
          const color = BLANK_UNDERLINE_COLORS[colorIdx];
          const chosen = selectedChoices?.[label];
          return (
            <span key={idx} className={`inline-block border-b-2 border-current ${color} font-semibold min-w-[5rem] text-center mx-0.5`}>
              {chosen || "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
            </span>
          );
        }
        if (/^_{3,}$/.test(part)) {
          const color = BLANK_UNDERLINE_COLORS[blankIdx % 3];
          const label = blankIdx === 0 ? "i" : blankIdx === 1 ? "ii" : "iii";
          blankIdx++;
          const chosen = selectedChoices?.[label];
          return (
            <span key={idx} className={`inline-block border-b-2 border-current ${color} font-semibold min-w-[5rem] text-center mx-0.5`}>
              {chosen || "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
            </span>
          );
        }
        return <React.Fragment key={idx}>{part}</React.Fragment>;
      })}
    </span>
  );
}

interface Props {
  question: Question;
  selectedAnswer: number | null;
  selectedAnswerB?: number | null;
  selectedAnswerC?: number | null;
  showResult: boolean;
  onSelectAnswer: (index: number) => void;
  onSelectAnswerB?: (index: number) => void;
  onSelectAnswerC?: (index: number) => void;
}

/**
 * GRE Text Completion renderer.
 *
 * Single-blank: 5 choices, standard radio selection.
 * Double-blank: Two columns of 3 choices each (uses twoPartColumns).
 * Triple-blank: Three columns of 3 choices each (uses threePartColumns).
 */
export function TextCompletion({
  question,
  selectedAnswer,
  selectedAnswerB,
  selectedAnswerC,
  showResult,
  onSelectAnswer,
  onSelectAnswerB,
  onSelectAnswerC,
}: Props) {
  const exam = useExam();
  const blankCount = question.threePartColumns ? 3 : question.twoPartColumns ? 2 : 1;

  const typeLabel = exam.questionTypes[question.type] ?? "Text Completion";

  // === Single-blank (5 choices, standard radio) ===
  if (blankCount === 1) {
    return (
      <div>
        <InstructionBanner>
          Select one entry for the blank. Fill the blank in the way that best completes the text.
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
          <BlankHighlightedText
            text={question.text}
            selectedChoices={selectedAnswer !== null && selectedAnswer >= 0 ? { i: question.choices[selectedAnswer] } : undefined}
          />
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
                className={`w-full rounded-md border ${borderColor} ${bg} p-2.5 text-left transition-colors ${!showResult ? "hover:bg-[#fafafa]" : ""}`}
              >
                <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#f3f4f6] text-xs font-semibold">
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

        {!showResult && <SelectionFooter text="Select one answer choice." />}

        {showResult && renderExplanation(question)}
      </div>
    );
  }

  // === Double-blank (2 columns of 3 choices) ===
  if (blankCount === 2) {
    const columns = question.twoPartColumns ?? ["Blank (i)", "Blank (ii)"];
    const correctA = question.correctAnswer;
    const correctB = question.correctAnswerB ?? -1;

    // Choices: indices 0-2 = blank (i), indices 3-5 = blank (ii)
    const choicesA = question.choices.slice(0, 3);
    const choicesB = question.choices.slice(3, 6);

    // Build selected choices for blank highlighting
    const selectedChoices2: Record<string, string> = {};
    if (selectedAnswer !== null && selectedAnswer >= 0) selectedChoices2.i = choicesA[selectedAnswer];
    if (selectedAnswerB != null && selectedAnswerB >= 3) selectedChoices2.ii = choicesB[selectedAnswerB - 3];

    return (
      <div>
        <InstructionBanner>
          For each blank select one entry from the corresponding column of choices. Fill all blanks in the way that best completes the text.
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
          <BlankHighlightedText text={question.text} selectedChoices={selectedChoices2} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Blank (i) */}
          <div>
            <p className="mb-2 text-sm font-semibold text-[#374151]">
              <span className="inline-block w-2.5 h-2.5 rounded-sm bg-blue-400 mr-1.5 align-middle" />
              {columns[0]}
            </p>
            <div className="space-y-1.5">
              {choicesA.map((choice, i) => {
                let borderColor = "border-[#e5e7eb]";
                let bg = "bg-white";

                if (showResult) {
                  if (i === correctA) {
                    borderColor = "border-green-500";
                    bg = "bg-green-50";
                  } else if (i === selectedAnswer && i !== correctA) {
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
                    className={`w-full rounded-md border ${borderColor} ${bg} p-2.5 text-left text-sm transition-colors ${!showResult ? "hover:bg-[#fafafa]" : ""}`}
                  >
                    {choice}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Blank (ii) */}
          <div>
            <p className="mb-2 text-sm font-semibold text-[#374151]">
              <span className="inline-block w-2.5 h-2.5 rounded-sm bg-violet-400 mr-1.5 align-middle" />
              {columns[1]}
            </p>
            <div className="space-y-1.5">
              {choicesB.map((choice, i) => {
                const globalIdx = i + 3;
                let borderColor = "border-[#e5e7eb]";
                let bg = "bg-white";

                if (showResult) {
                  if (globalIdx === correctB) {
                    borderColor = "border-green-500";
                    bg = "bg-green-50";
                  } else if (selectedAnswerB === globalIdx && globalIdx !== correctB) {
                    borderColor = "border-red-500";
                    bg = "bg-red-50";
                  }
                } else if (selectedAnswerB === globalIdx) {
                  borderColor = "border-[#0d0d0d]";
                  bg = "bg-[#fafafa]";
                }

                return (
                  <button
                    key={i}
                    onClick={() => !showResult && onSelectAnswerB?.(globalIdx)}
                    disabled={showResult}
                    className={`w-full rounded-md border ${borderColor} ${bg} p-2.5 text-left text-sm transition-colors ${!showResult ? "hover:bg-[#fafafa]" : ""}`}
                  >
                    {choice}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {!showResult && <SelectionFooter text="Select one entry from each column." />}

        {showResult && (
          <div className="mt-3 space-y-1 text-sm">
            <p>
              <span className="font-medium">{columns[0]}:</span>{" "}
              {selectedAnswer === correctA ? (
                <span className="text-green-600 font-medium">Correct</span>
              ) : (
                <span className="text-red-600 font-medium">
                  Incorrect (you chose &quot;{choicesA[selectedAnswer ?? 0]}&quot;, correct is &quot;{choicesA[correctA]}&quot;)
                </span>
              )}
            </p>
            <p>
              <span className="font-medium">{columns[1]}:</span>{" "}
              {selectedAnswerB === correctB ? (
                <span className="text-green-600 font-medium">Correct</span>
              ) : (
                <span className="text-red-600 font-medium">
                  Incorrect (you chose &quot;{choicesB[(selectedAnswerB ?? 3) - 3]}&quot;, correct is &quot;{choicesB[correctB - 3]}&quot;)
                </span>
              )}
            </p>
          </div>
        )}

        {showResult && renderExplanation(question)}
      </div>
    );
  }

  // === Triple-blank (3 columns of 3 choices) ===
  const columns = question.threePartColumns ?? ["Blank (i)", "Blank (ii)", "Blank (iii)"];
  const correctA = question.correctAnswer;
  const correctB = question.correctAnswerB ?? -1;
  const correctC = question.correctAnswerC ?? -1;

  // Choices: 0-2 = blank (i), 3-5 = blank (ii), 6-8 = blank (iii)
  const choicesA = question.choices.slice(0, 3);
  const choicesB = question.choices.slice(3, 6);
  const choicesC = question.choices.slice(6, 9);

  // Build selected choices for blank highlighting
  const selectedChoices3: Record<string, string> = {};
  if (selectedAnswer !== null && selectedAnswer >= 0) selectedChoices3.i = choicesA[selectedAnswer];
  if (selectedAnswerB != null && selectedAnswerB >= 3) selectedChoices3.ii = choicesB[selectedAnswerB - 3];
  if (selectedAnswerC != null && selectedAnswerC >= 6) selectedChoices3.iii = choicesC[selectedAnswerC - 6];

  return (
    <div>
      <InstructionBanner>
        For each blank select one entry from the corresponding column of choices. Fill all blanks in the way that best completes the text.
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
        <BlankHighlightedText text={question.text} selectedChoices={selectedChoices3} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Blank (i) */}
        <div>
          <p className="mb-2 text-sm font-semibold text-[#374151]">
            <span className="inline-block w-2.5 h-2.5 rounded-sm bg-blue-400 mr-1.5 align-middle" />
            {columns[0]}
          </p>
          <div className="space-y-1.5">
            {choicesA.map((choice, i) => {
              let borderColor = "border-[#e5e7eb]";
              let bg = "bg-white";

              if (showResult) {
                if (i === correctA) {
                  borderColor = "border-green-500";
                  bg = "bg-green-50";
                } else if (i === selectedAnswer && i !== correctA) {
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
                  className={`w-full rounded-md border ${borderColor} ${bg} p-2.5 text-left text-sm transition-colors ${!showResult ? "hover:bg-[#fafafa]" : ""}`}
                >
                  {choice}
                </button>
              );
            })}
          </div>
        </div>

        {/* Blank (ii) */}
        <div>
          <p className="mb-2 text-sm font-semibold text-[#374151]">
            <span className="inline-block w-2.5 h-2.5 rounded-sm bg-violet-400 mr-1.5 align-middle" />
            {columns[1]}
          </p>
          <div className="space-y-1.5">
            {choicesB.map((choice, i) => {
              const globalIdx = i + 3;
              let borderColor = "border-[#e5e7eb]";
              let bg = "bg-white";

              if (showResult) {
                if (globalIdx === correctB) {
                  borderColor = "border-green-500";
                  bg = "bg-green-50";
                } else if (selectedAnswerB === globalIdx && globalIdx !== correctB) {
                  borderColor = "border-red-500";
                  bg = "bg-red-50";
                }
              } else if (selectedAnswerB === globalIdx) {
                borderColor = "border-[#0d0d0d]";
                bg = "bg-[#fafafa]";
              }

              return (
                <button
                  key={i}
                  onClick={() => !showResult && onSelectAnswerB?.(globalIdx)}
                  disabled={showResult}
                  className={`w-full rounded-md border ${borderColor} ${bg} p-2.5 text-left text-sm transition-colors ${!showResult ? "hover:bg-[#fafafa]" : ""}`}
                >
                  {choice}
                </button>
              );
            })}
          </div>
        </div>

        {/* Blank (iii) */}
        <div>
          <p className="mb-2 text-sm font-semibold text-[#374151]">
            <span className="inline-block w-2.5 h-2.5 rounded-sm bg-amber-400 mr-1.5 align-middle" />
            {columns[2]}
          </p>
          <div className="space-y-1.5">
            {choicesC.map((choice, i) => {
              const globalIdx = i + 6;
              let borderColor = "border-[#e5e7eb]";
              let bg = "bg-white";

              if (showResult) {
                if (globalIdx === correctC) {
                  borderColor = "border-green-500";
                  bg = "bg-green-50";
                } else if (selectedAnswerC === globalIdx && globalIdx !== correctC) {
                  borderColor = "border-red-500";
                  bg = "bg-red-50";
                }
              } else if (selectedAnswerC === globalIdx) {
                borderColor = "border-[#0d0d0d]";
                bg = "bg-[#fafafa]";
              }

              return (
                <button
                  key={i}
                  onClick={() => !showResult && onSelectAnswerC?.(globalIdx)}
                  disabled={showResult}
                  className={`w-full rounded-md border ${borderColor} ${bg} p-2.5 text-left text-sm transition-colors ${!showResult ? "hover:bg-[#fafafa]" : ""}`}
                >
                  {choice}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {!showResult && <SelectionFooter text="Select one entry from each column." />}

      {showResult && (
        <div className="mt-3 space-y-1 text-sm">
          <p>
            <span className="font-medium">{columns[0]}:</span>{" "}
            {selectedAnswer === correctA ? (
              <span className="text-green-600 font-medium">Correct</span>
            ) : (
              <span className="text-red-600 font-medium">
                Incorrect (you chose &quot;{choicesA[selectedAnswer ?? 0]}&quot;, correct is &quot;{choicesA[correctA]}&quot;)
              </span>
            )}
          </p>
          <p>
            <span className="font-medium">{columns[1]}:</span>{" "}
            {selectedAnswerB === correctB ? (
              <span className="text-green-600 font-medium">Correct</span>
            ) : (
              <span className="text-red-600 font-medium">
                Incorrect (you chose &quot;{choicesB[(selectedAnswerB ?? 3) - 3]}&quot;, correct is &quot;{choicesB[correctB - 3]}&quot;)
              </span>
            )}
          </p>
          <p>
            <span className="font-medium">{columns[2]}:</span>{" "}
            {selectedAnswerC === correctC ? (
              <span className="text-green-600 font-medium">Correct</span>
            ) : (
              <span className="text-red-600 font-medium">
                Incorrect (you chose &quot;{choicesC[(selectedAnswerC ?? 6) - 6]}&quot;, correct is &quot;{choicesC[correctC - 6]}&quot;)
              </span>
            )}
          </p>
        </div>
      )}

      {showResult && renderExplanation(question)}
    </div>
  );
}

function renderExplanation(question: Question) {
  return (
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
  );
}
