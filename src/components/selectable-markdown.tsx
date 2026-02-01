"use client";

import { useState } from "react";
import { useTextSelection } from "@/hooks/use-text-selection";
import { addStudyGuideItem } from "@/lib/store";
import { useAuth } from "@/lib/auth-context";
import { Markdown } from "./markdown";
import { Section } from "@/types";

interface SelectableMarkdownProps {
  children: string;
  fullContext: string;
  chapterId?: string;
  chapterTitle?: string;
  sectionTitle?: string;
  section?: Section;
  className?: string;
  onExplain?: (selectedText: string) => void;
}

export function SelectableMarkdown({
  children,
  chapterId,
  chapterTitle,
  sectionTitle,
  className,
  onExplain,
}: SelectableMarkdownProps) {
  const { user } = useAuth();
  const { containerRef, selectedText, tooltipPos, clearSelection, handleMouseUp } = useTextSelection();
  const [saved, setSaved] = useState(false);

  const handleExplain = () => {
    if (!selectedText || !onExplain) return;
    onExplain(selectedText);
    clearSelection();
  };

  const handleSave = async () => {
    if (!selectedText || !user || !chapterId) return;
    try {
      await addStudyGuideItem({
        userId: user.uid,
        chapterId,
        chapterTitle: chapterTitle ?? "",
        sectionTitle: sectionTitle ?? "",
        selectedText,
        createdAt: Date.now(),
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
      clearSelection();
    } catch {
      // silently fail
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <div
        onMouseUp={handleMouseUp}
        onTouchEnd={handleMouseUp}
        className="select-text cursor-text"
      >
        <Markdown className={className}>{children}</Markdown>
      </div>

      {/* Hint */}
      <p className="mt-3 flex items-center gap-1.5 text-[11px] text-gray-400 select-none">
        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
        Highlight text to ask AI or save to study guide
      </p>

      {/* Floating tooltip */}
      {tooltipPos && selectedText && (
        <div
          className="absolute z-10 animate-fade-in flex gap-1.5"
          style={{ top: tooltipPos.top, left: tooltipPos.left, transform: "translateX(-50%)" }}
        >
          {onExplain && (
            <button
              onClick={handleExplain}
              className="flex items-center gap-1.5 rounded-lg bg-[#0d0d0d] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#1a1a1a] transition-colors"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
              Explain
            </button>
          )}
          {chapterId && user && (
            <button
              onClick={handleSave}
              className="flex items-center gap-1.5 rounded-lg bg-white border border-[#e5e7eb] px-3 py-1.5 text-xs font-medium text-[#374151] hover:bg-[#fafafa] transition-colors"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
              </svg>
              Save
            </button>
          )}
        </div>
      )}

      {/* Save confirmation toast */}
      {saved && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-lg bg-[#0d0d0d] px-4 py-2 text-sm text-white animate-fade-in">
          Saved to Study Guide
        </div>
      )}
    </div>
  );
}
