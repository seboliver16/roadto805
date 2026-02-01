"use client";

import { useState } from "react";
import { generateHint, generateWalkthrough } from "@/lib/mistral";
import { Question } from "@/types";
import { Markdown } from "./markdown";

interface AiHelpButtonProps {
  question: Question;
  showResult: boolean;
  selectedAnswer?: number | null;
}

export function AiHelpButton({ question, showResult, selectedAnswer }: AiHelpButtonProps) {
  const [hintContent, setHintContent] = useState<string>("");
  const [walkthroughContent, setWalkthroughContent] = useState<string>("");
  const [hintLoading, setHintLoading] = useState(false);
  const [walkthroughLoading, setWalkthroughLoading] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  const handleGetHint = async () => {
    if (hintContent) {
      setShowPanel(true);
      return;
    }
    setShowPanel(true);
    setHintLoading(true);
    try {
      const content = await generateHint(
        question.text,
        question.choices,
        question.section,
        question.passage
      );
      setHintContent(content);
    } catch {
      setHintContent("Could not generate hint. Try again later.");
    } finally {
      setHintLoading(false);
    }
  };

  const handleGetWalkthrough = async () => {
    if (walkthroughContent) {
      setShowPanel(true);
      return;
    }
    if (selectedAnswer === null || selectedAnswer === undefined) return;
    setShowPanel(true);
    setWalkthroughLoading(true);
    try {
      const content = await generateWalkthrough(
        question.text,
        question.choices,
        question.correctAnswer,
        selectedAnswer,
        question.explanation,
        question.section
      );
      setWalkthroughContent(content);
    } catch {
      setWalkthroughContent(question.explanation);
    } finally {
      setWalkthroughLoading(false);
    }
  };

  return (
    <div className="mt-4">
      {/* Buttons */}
      <div className="flex gap-2">
        {!showResult && (
          <button
            onClick={handleGetHint}
            className="flex items-center gap-2 rounded-lg border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 hover:bg-purple-100 transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
            </svg>
            Get a Hint
          </button>
        )}
        {showResult && (
          <button
            onClick={handleGetWalkthrough}
            className="flex items-center gap-2 rounded-lg border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 hover:bg-purple-100 transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
            </svg>
            AI Walkthrough
          </button>
        )}
        {showPanel && (
          <button
            onClick={() => setShowPanel(false)}
            className="rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50 transition-colors"
          >
            Hide
          </button>
        )}
      </div>

      {/* Panel */}
      {showPanel && (
        <div className="mt-3 rounded-xl border border-purple-200 bg-purple-50 p-5 animate-fade-in">
          <h4 className="text-sm font-semibold text-purple-800 mb-2">
            {showResult ? "AI Walkthrough" : "AI Hint"}
          </h4>
          {(hintLoading || walkthroughLoading) ? (
            <div className="flex items-center gap-2 text-purple-700">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-purple-700 border-t-transparent" />
              <span className="text-sm">{showResult ? "Generating walkthrough..." : "Thinking..."}</span>
            </div>
          ) : (
            <Markdown className="text-purple-900 text-sm">
              {showResult ? walkthroughContent : hintContent}
            </Markdown>
          )}
        </div>
      )}
    </div>
  );
}
