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
  userName?: string;
}

export function AiHelpButton({ question, showResult, selectedAnswer, userName }: AiHelpButtonProps) {
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
        question.passage,
        userName
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
        question.section,
        userName
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
      const response = await sendFollowUp(updated, question.section, userName);
      setMessages((prev) => [...prev, { role: "assistant" as const, content: response }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant" as const, content: "Sorry, I couldn't process that. Try again." }]);
    } finally {
      setFollowUpLoading(false);
    }
  };

  const currentContent = showResult ? walkthroughContent : hintContent;
  const isGenerating = hintLoading || walkthroughLoading;
  const isWalkthrough = showResult;

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
            {userName ? `Need a nudge, ${userName}?` : "Get a Hint"}
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
            Walk Me Through It
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
        <div className={`mt-3 rounded-xl border-l-4 ${isWalkthrough ? "border-l-blue-400" : "border-l-amber-400"} border border-[#e5e7eb] bg-white p-5 animate-fade-in shadow-sm`}>
          <div className="flex items-center gap-2.5 mb-3">
            <div className={`flex h-7 w-7 items-center justify-center rounded-full ${isWalkthrough ? "bg-blue-50 text-blue-600" : "bg-amber-50 text-amber-600"}`}>
              {isWalkthrough ? (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              )}
            </div>
            <h4 className="text-sm font-semibold text-[#0d0d0d]">
              {isWalkthrough
                ? (userName ? `Let's break this down, ${userName}` : "Step-by-Step Walkthrough")
                : (userName ? `Here's a nudge, ${userName}` : "Hint")}
            </h4>
          </div>

          {isGenerating ? (
            <div className="flex items-center gap-3 py-4 text-[#6b7280]">
              <div className="flex gap-1">
                <div className="h-2 w-2 animate-bounce rounded-full bg-[#9ca3af]" style={{ animationDelay: "0ms" }} />
                <div className="h-2 w-2 animate-bounce rounded-full bg-[#9ca3af]" style={{ animationDelay: "150ms" }} />
                <div className="h-2 w-2 animate-bounce rounded-full bg-[#9ca3af]" style={{ animationDelay: "300ms" }} />
              </div>
              <span className="text-sm">{isWalkthrough ? "Working through the solution..." : "Thinking of a good nudge..."}</span>
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
                  className={msg.role === "user" ? "border-t border-[#e5e7eb] pt-3 mt-4" : "mt-2"}
                >
                  {msg.role === "user" ? (
                    <p className="text-sm font-medium text-[#6b7280] italic">&ldquo;{msg.content}&rdquo;</p>
                  ) : (
                    <Markdown className="text-[#374151] text-sm">{msg.content}</Markdown>
                  )}
                </div>
              ))}

              {followUpLoading && (
                <div className="flex items-center gap-3 text-[#6b7280] mt-3">
                  <div className="flex gap-1">
                    <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#9ca3af]" style={{ animationDelay: "0ms" }} />
                    <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#9ca3af]" style={{ animationDelay: "150ms" }} />
                    <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#9ca3af]" style={{ animationDelay: "300ms" }} />
                  </div>
                  <span className="text-xs">Thinking...</span>
                </div>
              )}

              {currentContent && (
                <FollowUpInput onSend={handleFollowUp} loading={followUpLoading} placeholder={userName ? `Ask a follow-up, ${userName}...` : "Ask a follow-up..."} />
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
