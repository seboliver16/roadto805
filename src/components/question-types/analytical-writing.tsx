"use client";

import { useState, useCallback } from "react";
import { Question } from "@/types";
import { Badge } from "../badge";

interface Props {
  question: Question;
  showResult: boolean;
  onSelectAnswer: (index: number) => void;
  essayText?: string;
  onEssayChange?: (text: string) => void;
  essayScore?: { score: number; feedback: string } | null;
}

/**
 * GRE Analytical Writing renderer.
 *
 * Displays the essay prompt and a timed text area for the student to write.
 * On submission, AI scoring is handled by the parent (mock exam page).
 */
export function AnalyticalWriting({
  question,
  showResult,
  onSelectAnswer,
  essayText = "",
  onEssayChange,
  essayScore,
}: Props) {
  const [localText, setLocalText] = useState(essayText);

  const isIssue = question.essayType === "issue";
  const taskLabel = isIssue ? "Analyze an Issue" : "Analyze an Argument";

  const wordCount = localText.trim() ? localText.trim().split(/\s+/).length : 0;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const val = e.target.value;
      setLocalText(val);
      onEssayChange?.(val);
      // Mark as "answered" if there's substantial content
      if (val.trim().split(/\s+/).length >= 10) {
        onSelectAnswer(1);
      } else {
        onSelectAnswer(-1);
      }
    },
    [onEssayChange, onSelectAnswer]
  );

  return (
    <div>
      {/* Task type badge */}
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Badge variant="yellow">{taskLabel}</Badge>
        <Badge variant="default">30 minutes</Badge>
      </div>

      {/* Essay prompt */}
      <div className="mb-4 rounded-lg bg-white p-5 border border-[#e5e7eb]">
        <p className="text-base leading-relaxed text-[#0d0d0d] whitespace-pre-line">
          {question.essayPrompt}
        </p>
      </div>

      {/* Directions */}
      <div className="mb-4 rounded-lg bg-[#f0f0f0] border border-[#d4d4d4] px-4 py-3">
        <p className="text-sm text-[#374151] leading-relaxed">
          {question.essayDirections}
        </p>
      </div>

      {/* Essay text area */}
      {!showResult && (
        <div>
          <textarea
            value={localText}
            onChange={handleChange}
            placeholder="Begin writing your essay here..."
            className="w-full min-h-[400px] rounded-lg border border-[#e5e7eb] bg-white p-4 text-base leading-relaxed text-[#0d0d0d] outline-none focus:border-[#0d0d0d] resize-y font-serif"
          />
          <div className="mt-2 flex justify-between text-xs text-[#9ca3af]">
            <span>{wordCount} words</span>
            <span>Recommended: 400–600 words</span>
          </div>
        </div>
      )}

      {/* Show submitted essay + score */}
      {showResult && (
        <div className="space-y-4">
          {/* Submitted essay */}
          <div className="rounded-lg bg-[#fafafa] border border-[#e5e7eb] p-4">
            <p className="text-xs font-medium text-[#6b7280] uppercase tracking-wide mb-2">
              Your Essay ({wordCount} words)
            </p>
            <div className="text-sm leading-relaxed text-[#374151] whitespace-pre-wrap font-serif">
              {localText || essayText || "(No essay submitted)"}
            </div>
          </div>

          {/* AI Score */}
          {essayScore && (
            <div className="rounded-xl border border-[#e5e7eb] bg-white overflow-hidden shadow-sm">
              {/* Score header */}
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium opacity-90">AWA Score</p>
                    <p className="text-3xl font-bold">{essayScore.score.toFixed(1)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm opacity-90">out of 6.0</p>
                    <p className="text-sm font-medium">
                      {essayScore.score >= 5
                        ? "Outstanding"
                        : essayScore.score >= 4
                          ? "Strong"
                          : essayScore.score >= 3
                            ? "Adequate"
                            : essayScore.score >= 2
                              ? "Limited"
                              : "Fundamentally Deficient"}
                    </p>
                  </div>
                </div>
                {/* Score bar */}
                <div className="mt-3 h-2 rounded-full bg-white/20">
                  <div
                    className="h-2 rounded-full bg-white transition-all"
                    style={{ width: `${(essayScore.score / 6) * 100}%` }}
                  />
                </div>
              </div>

              {/* Feedback */}
              <div className="p-5">
                <h3 className="font-semibold text-[#0d0d0d] text-sm mb-2">Detailed Feedback</h3>
                <div className="text-sm text-[#374151] leading-relaxed whitespace-pre-line">
                  {essayScore.feedback}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
