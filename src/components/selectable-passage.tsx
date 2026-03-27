"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { generateExplanation, sendFollowUp } from "@/lib/mistral";
import { ChatMessage } from "@/types";
import { Markdown } from "./markdown";
import { FollowUpInput } from "./follow-up-input";

interface SelectablePassageProps {
  passage: string;
  questionContext?: string;
  className?: string;
}

function ExplanationSidePanel({
  selectedText,
  explanation,
  loading,
  messages,
  followUpLoading,
  onFollowUp,
  onDismiss,
}: {
  selectedText: string;
  explanation: string;
  loading: boolean;
  messages: ChatMessage[];
  followUpLoading: boolean;
  onFollowUp: (msg: string) => void;
  onDismiss: () => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, followUpLoading]);

  return createPortal(
    <div className="fixed inset-y-0 right-0 z-50 flex animate-slide-in-right">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/20" onClick={onDismiss} />

      {/* Panel */}
      <div className="relative ml-auto flex h-full w-[380px] max-w-[90vw] flex-col bg-white shadow-2xl border-l border-[#e5e7eb]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#e5e7eb] px-5 py-3.5 shrink-0">
          <h4 className="text-sm font-semibold text-[#0d0d0d] flex items-center gap-2">
            <svg className="h-4 w-4 text-[#6b7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
            AI Explanation
          </h4>
          <button
            onClick={onDismiss}
            className="rounded-md p-1.5 text-[#9ca3af] hover:text-[#0d0d0d] hover:bg-[#f3f4f6] transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Selected text */}
        {selectedText && (
          <div className="border-b border-[#e5e7eb] px-5 py-3 bg-[#fafafa] shrink-0">
            <p className="text-[11px] font-medium text-[#9ca3af] uppercase tracking-wide mb-1">Selected text</p>
            <p className="text-sm text-[#374151] italic line-clamp-4">&ldquo;{selectedText}&rdquo;</p>
          </div>
        )}

        {/* Body */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
          {loading ? (
            <div className="flex items-center gap-2 text-[#6b7280]">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#9ca3af] border-t-transparent" />
              <span className="text-sm">Analyzing...</span>
            </div>
          ) : (
            <>
              <Markdown className="text-sm text-[#374151]">{explanation}</Markdown>

              {messages.slice(2).map((msg, i) => (
                <div
                  key={i}
                  className={msg.role === "user" ? "border-t border-[#e5e7eb] pt-3" : ""}
                >
                  {msg.role === "user" ? (
                    <p className="text-sm font-medium text-[#6b7280]">{msg.content}</p>
                  ) : (
                    <Markdown className="text-sm text-[#374151]">{msg.content}</Markdown>
                  )}
                </div>
              ))}

              {followUpLoading && (
                <div className="flex items-center gap-2 text-[#6b7280]">
                  <div className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-[#9ca3af] border-t-transparent" />
                  <span className="text-xs">Thinking...</span>
                </div>
              )}
            </>
          )}
        </div>

        {/* Follow-up input */}
        {!loading && explanation && (
          <div className="border-t border-[#e5e7eb] px-5 py-3 shrink-0">
            <FollowUpInput onSend={onFollowUp} loading={followUpLoading} />
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}

export function SelectablePassage({ passage, questionContext, className }: SelectablePassageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedText, setSelectedText] = useState("");
  const [tooltipPos, setTooltipPos] = useState<{ top: number; left: number } | null>(null);
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [followUpLoading, setFollowUpLoading] = useState(false);

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
    setMessages([]);
    try {
      const result = await generateExplanation(selectedText, passage, questionContext);
      setExplanation(result);
      setMessages([
        { role: "user", content: `Explain this text: "${selectedText}"` },
        { role: "assistant", content: result },
      ]);
    } catch {
      setExplanation("Could not generate explanation. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleFollowUp = async (userMessage: string) => {
    const updated = [...messages, { role: "user" as const, content: userMessage }];
    setMessages(updated);
    setFollowUpLoading(true);
    try {
      const response = await sendFollowUp(updated);
      setMessages((prev) => [...prev, { role: "assistant" as const, content: response }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant" as const, content: "Sorry, I couldn't process that. Try again." }]);
    } finally {
      setFollowUpLoading(false);
    }
  };

  const handleDismiss = () => {
    setShowExplanation(false);
    setExplanation("");
    setMessages([]);
  };

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
      <div
        className="select-text cursor-text"
        onMouseUp={handleMouseUp}
        onTouchEnd={handleMouseUp}
      >
        <Markdown className={`leading-relaxed text-[#374151] ${className ?? "text-sm"}`}>
          {passage}
        </Markdown>
      </div>

      <p className="mt-2 flex items-center gap-1 text-[11px] text-[#9ca3af] select-none">
        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
        Highlight any text to ask AI
      </p>

      {tooltipPos && selectedText && (
        <div
          className="absolute z-10 animate-fade-in"
          style={{ top: tooltipPos.top, left: tooltipPos.left, transform: "translateX(-50%)" }}
        >
          <button
            onClick={handleExplain}
            className="flex items-center gap-1.5 rounded-lg bg-[#0d0d0d] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#1a1a1a] transition-colors"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
            Explain this
          </button>
        </div>
      )}

      {showExplanation && (
        <ExplanationSidePanel
          selectedText={selectedText}
          explanation={explanation}
          loading={loading}
          messages={messages}
          followUpLoading={followUpLoading}
          onFollowUp={handleFollowUp}
          onDismiss={handleDismiss}
        />
      )}
    </div>
  );
}
