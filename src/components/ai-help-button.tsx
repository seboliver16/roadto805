"use client";

import { useState } from "react";
import { generateHint, generateWalkthrough, sendFollowUp } from "@/lib/mistral";
import { ChatMessage, Question } from "@/types";
import { Markdown } from "./markdown";
import { FollowUpInput } from "./follow-up-input";

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
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [followUpLoading, setFollowUpLoading] = useState(false);

  const handleGetHint = async () => {
    if (hintContent) {
      setShowPanel(true);
      return;
    }
    setShowPanel(true);
    setHintLoading(true);
    setMessages([]);
    try {
      const content = await generateHint(
        question.text,
        question.choices,
        question.section,
        question.passage
      );
      setHintContent(content);
      setMessages([
        { role: "user", content: `Give me a hint for this question: "${question.text.slice(0, 200)}"` },
        { role: "assistant", content },
      ]);
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
    setMessages([]);
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
      setMessages([
        { role: "user", content: `Walk me through this question: "${question.text.slice(0, 200)}"` },
        { role: "assistant", content },
      ]);
    } catch {
      setWalkthroughContent(question.explanation);
    } finally {
      setWalkthroughLoading(false);
    }
  };

  const handleFollowUp = async (userMessage: string) => {
    const updated = [...messages, { role: "user" as const, content: userMessage }];
    setMessages(updated);
    setFollowUpLoading(true);
    try {
      const response = await sendFollowUp(updated, question.section);
      setMessages((prev) => [...prev, { role: "assistant" as const, content: response }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant" as const, content: "Sorry, I couldn't process that. Try again." }]);
    } finally {
      setFollowUpLoading(false);
    }
  };

  const currentContent = showResult ? walkthroughContent : hintContent;
  const isGenerating = hintLoading || walkthroughLoading;

  return (
    <div className="mt-3">
      <div className="flex gap-2">
        {!showResult && (
          <button
            onClick={handleGetHint}
            className="flex items-center gap-2 rounded-lg border border-[#e5e7eb] bg-white px-4 py-2 text-sm font-medium text-[#0d0d0d] hover:bg-[#f3f4f6] transition-colors"
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
            className="flex items-center gap-2 rounded-lg border border-[#e5e7eb] bg-white px-4 py-2 text-sm font-medium text-[#0d0d0d] hover:bg-[#f3f4f6] transition-colors"
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
            className="rounded-lg border border-[#e5e7eb] px-3 py-2 text-sm text-[#6b7280] hover:bg-[#f3f4f6] transition-colors"
          >
            Hide
          </button>
        )}
      </div>

      {showPanel && (
        <div className="mt-3 rounded-lg border border-[#e5e7eb] bg-[#fafafa] p-4 animate-fade-in">
          <h4 className="text-sm font-semibold text-[#0d0d0d] mb-2">
            {showResult ? "AI Walkthrough" : "AI Hint"}
          </h4>
          {isGenerating ? (
            <div className="flex items-center gap-2 text-[#6b7280]">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#0d0d0d] border-t-transparent" />
              <span className="text-sm">{showResult ? "Generating walkthrough..." : "Thinking..."}</span>
            </div>
          ) : (
            <>
              <Markdown className="text-[#374151] text-sm">
                {currentContent}
              </Markdown>

              {/* Follow-up messages */}
              {messages.slice(2).map((msg, i) => (
                <div
                  key={i}
                  className={msg.role === "user" ? "border-t border-[#e5e7eb] pt-2 mt-3" : "mt-2"}
                >
                  {msg.role === "user" ? (
                    <p className="text-sm font-medium text-[#6b7280]">{msg.content}</p>
                  ) : (
                    <Markdown className="text-[#374151] text-sm">{msg.content}</Markdown>
                  )}
                </div>
              ))}

              {followUpLoading && (
                <div className="flex items-center gap-2 text-[#6b7280] mt-2">
                  <div className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-[#0d0d0d] border-t-transparent" />
                  <span className="text-xs">Thinking...</span>
                </div>
              )}

              {currentContent && (
                <FollowUpInput onSend={handleFollowUp} loading={followUpLoading} placeholder="Ask a follow-up..." />
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
