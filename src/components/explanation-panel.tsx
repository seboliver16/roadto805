"use client";

import { Markdown } from "./markdown";

interface ExplanationPanelProps {
  selectedText: string;
  explanation: string;
  loading: boolean;
  onDismiss: () => void;
}

export function ExplanationPanel({ selectedText, explanation, loading, onDismiss }: ExplanationPanelProps) {
  return (
    <div className="sticky top-20 h-fit w-80 shrink-0">
      <div className="rounded-xl border border-[#e5e7eb] bg-white overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#e5e7eb] px-4 py-3">
          <h4 className="text-xs font-semibold text-[#6b7280] flex items-center gap-1.5 uppercase tracking-wide">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
            AI Explanation
          </h4>
          <button
            onClick={onDismiss}
            className="rounded-md p-1 text-[#9ca3af] hover:text-[#0d0d0d] hover:bg-[#f3f4f6] transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Selected text */}
        {selectedText && (
          <div className="border-b border-[#e5e7eb] px-4 py-3 bg-[#fafafa]">
            <p className="text-[11px] font-medium text-[#9ca3af] uppercase tracking-wide mb-1">Selected text</p>
            <p className="text-sm text-[#374151] italic line-clamp-4">&ldquo;{selectedText}&rdquo;</p>
          </div>
        )}

        {/* Body */}
        <div className="px-4 py-4 max-h-[60vh] overflow-y-auto">
          {loading ? (
            <div className="flex items-center gap-2 text-[#6b7280]">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#9ca3af] border-t-transparent" />
              <span className="text-sm">Analyzing...</span>
            </div>
          ) : (
            <Markdown className="text-sm">{explanation}</Markdown>
          )}
        </div>
      </div>
    </div>
  );
}
