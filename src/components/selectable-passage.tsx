"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { generateExplanation } from "@/lib/mistral";
import { Markdown } from "./markdown";

interface SelectablePassageProps {
  passage: string;
  questionContext?: string;
}

export function SelectablePassage({ passage, questionContext }: SelectablePassageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedText, setSelectedText] = useState("");
  const [tooltipPos, setTooltipPos] = useState<{ top: number; left: number } | null>(null);
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleMouseUp = useCallback(() => {
    const selection = window.getSelection();
    const text = selection?.toString().trim() ?? "";

    if (text.length < 5) {
      setTooltipPos(null);
      setSelectedText("");
      return;
    }

    const range = selection?.getRangeAt(0);
    if (!range || !containerRef.current) return;

    // Check if selection is within our container
    if (!containerRef.current.contains(range.commonAncestorContainer)) {
      setTooltipPos(null);
      setSelectedText("");
      return;
    }

    const rect = range.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    setSelectedText(text);
    setTooltipPos({
      top: rect.bottom - containerRect.top + 8,
      left: Math.min(
        rect.left - containerRect.left + rect.width / 2,
        containerRect.width - 80
      ),
    });
  }, []);

  const handleExplain = async () => {
    if (!selectedText) return;
    setShowExplanation(true);
    setLoading(true);
    setTooltipPos(null);
    try {
      const result = await generateExplanation(selectedText, passage, questionContext);
      setExplanation(result);
    } catch {
      setExplanation("Could not generate explanation. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Dismiss tooltip on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setTooltipPos(null);
        setSelectedText("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <p
        className="text-sm leading-relaxed text-slate-800 whitespace-pre-line select-text cursor-text"
        onMouseUp={handleMouseUp}
        onTouchEnd={handleMouseUp}
      >
        {passage}
      </p>

      {/* Floating tooltip */}
      {tooltipPos && selectedText && (
        <div
          className="absolute z-10 animate-fade-in"
          style={{ top: tooltipPos.top, left: tooltipPos.left, transform: "translateX(-50%)" }}
        >
          <button
            onClick={handleExplain}
            className="flex items-center gap-1.5 rounded-lg bg-purple-600 px-3 py-1.5 text-xs font-medium text-white shadow-lg hover:bg-purple-700 transition-colors"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
            Explain this
          </button>
        </div>
      )}

      {/* Explanation panel */}
      {showExplanation && (
        <div className="mt-3 rounded-lg border border-purple-200 bg-purple-50 p-4 animate-fade-in">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-xs font-semibold text-purple-800">AI Explanation</h4>
            <button
              onClick={() => { setShowExplanation(false); setExplanation(""); }}
              className="text-xs text-purple-500 hover:text-purple-700"
            >
              Dismiss
            </button>
          </div>
          {loading ? (
            <div className="flex items-center gap-2 text-purple-700">
              <div className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-purple-700 border-t-transparent" />
              <span className="text-xs">Analyzing...</span>
            </div>
          ) : (
            <Markdown className="text-purple-900 text-xs">{explanation}</Markdown>
          )}
        </div>
      )}
    </div>
  );
}
