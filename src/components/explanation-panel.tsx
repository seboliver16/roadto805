"use client";

import { useState, useEffect, useRef } from "react";
import { ChatMessage, Section } from "@/types";
import { sendFollowUp } from "@/lib/mistral";
import { Markdown } from "./markdown";
import { FollowUpInput } from "./follow-up-input";

interface ExplanationPanelProps {
  selectedText: string;
  explanation: string;
  loading: boolean;
  onDismiss: () => void;
  section?: Section;
}

export function ExplanationPanel({ selectedText, explanation, loading, onDismiss, section }: ExplanationPanelProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [followUpLoading, setFollowUpLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Seed message history when initial explanation arrives
  useEffect(() => {
    if (explanation && !loading) {
      setMessages([
        { role: "user", content: `Explain this text: "${selectedText}"` },
        { role: "assistant", content: explanation },
      ]);
    }
  }, [explanation, loading, selectedText]);

  // Reset on new selection
  useEffect(() => {
    setMessages([]);
  }, [selectedText]);

  // Auto-scroll on new messages
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, followUpLoading]);

  const handleFollowUp = async (userMessage: string) => {
    const updated = [...messages, { role: "user" as const, content: userMessage }];
    setMessages(updated);
    setFollowUpLoading(true);
    try {
      const response = await sendFollowUp(updated, section);
      setMessages((prev) => [...prev, { role: "assistant" as const, content: response }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant" as const, content: "Sorry, I couldn't process that. Try again." }]);
    } finally {
      setFollowUpLoading(false);
    }
  };

  return (
    <div className="sticky top-20 h-fit w-80 shrink-0">
      <div className="rounded-xl border border-[#e5e7eb] bg-white overflow-hidden flex flex-col">
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

        {/* Body - scrollable message area */}
        <div ref={scrollRef} className="px-4 py-4 max-h-[60vh] overflow-y-auto space-y-3">
          {loading ? (
            <div className="flex items-center gap-2 text-[#6b7280]">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#9ca3af] border-t-transparent" />
              <span className="text-sm">Analyzing...</span>
            </div>
          ) : (
            <>
              {/* Initial explanation */}
              <Markdown className="text-sm">{messages[1]?.content ?? explanation}</Markdown>

              {/* Follow-up messages */}
              {messages.slice(2).map((msg, i) => (
                <div
                  key={i}
                  className={msg.role === "user" ? "border-t border-[#e5e7eb] pt-3" : ""}
                >
                  {msg.role === "user" ? (
                    <p className="text-sm font-medium text-[#6b7280]">{msg.content}</p>
                  ) : (
                    <Markdown className="text-sm">{msg.content}</Markdown>
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
          <div className="border-t border-[#e5e7eb] px-4 py-3">
            <FollowUpInput onSend={handleFollowUp} loading={followUpLoading} />
          </div>
        )}
      </div>
    </div>
  );
}
