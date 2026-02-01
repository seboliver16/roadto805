"use client";

import { useState } from "react";
import { generateQuickCheck } from "@/lib/mistral";
import { Markdown } from "./markdown";
import { Section } from "@/types";

interface KnowledgeCheckProps {
  sectionContent: string;
  section: Section;
}

export function KnowledgeCheck({ sectionContent, section }: KnowledgeCheckProps) {
  const [quiz, setQuiz] = useState<{
    question: string;
    choices: string[];
    correctIndex: number;
    explanation: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    setSelected(null);
    setRevealed(false);
    try {
      const result = await generateQuickCheck(sectionContent, section);
      setQuiz(result);
    } catch {
      setQuiz(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (idx: number) => {
    if (revealed) return;
    setSelected(idx);
  };

  const handleCheck = () => {
    if (selected === null) return;
    setRevealed(true);
  };

  const handleReset = () => {
    setQuiz(null);
    setSelected(null);
    setRevealed(false);
  };

  if (!quiz && !loading) {
    return (
      <button
        onClick={handleGenerate}
        className="mt-4 flex items-center gap-2 rounded-lg border border-[#e5e7eb] bg-white px-4 py-2.5 text-sm font-medium text-[#0d0d0d] hover:bg-[#fafafa] transition-colors"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
        Test Yourself
      </button>
    );
  }

  if (loading) {
    return (
      <div className="mt-4 rounded-xl border border-[#e5e7eb] bg-white p-5">
        <div className="flex items-center gap-2 text-[#6b7280]">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#9ca3af] border-t-transparent" />
          <span className="text-sm">Generating question...</span>
        </div>
      </div>
    );
  }

  if (!quiz) return null;

  return (
    <div className="mt-4 rounded-xl border border-[#e5e7eb] bg-white p-5 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-xs font-semibold text-[#6b7280] uppercase tracking-wide flex items-center gap-1.5">
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
          </svg>
          Quick Check
        </h4>
        <button
          onClick={handleReset}
          className="text-xs text-[#9ca3af] hover:text-[#6b7280] font-medium"
        >
          Dismiss
        </button>
      </div>

      <p className="text-sm font-medium text-[#0d0d0d] mb-3">{quiz.question}</p>

      <div className="space-y-2 mb-4">
        {quiz.choices.map((choice, idx) => {
          let style = "border-[#e5e7eb] bg-white hover:bg-[#fafafa]";
          if (revealed && idx === quiz.correctIndex) {
            style = "border-green-300 bg-green-50";
          } else if (revealed && idx === selected && idx !== quiz.correctIndex) {
            style = "border-red-300 bg-red-50";
          } else if (selected === idx && !revealed) {
            style = "border-[#0d0d0d] bg-[#fafafa]";
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              className={`w-full rounded-lg border p-3 text-left text-sm transition-colors ${style}`}
            >
              <span className="font-medium text-[#6b7280] mr-2">{String.fromCharCode(65 + idx)}.</span>
              {choice}
            </button>
          );
        })}
      </div>

      {!revealed ? (
        <button
          onClick={handleCheck}
          disabled={selected === null}
          className="rounded-lg bg-[#0d0d0d] px-4 py-2 text-sm font-medium text-white hover:bg-[#333] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Check Answer
        </button>
      ) : (
        <div className="rounded-lg border border-[#e5e7eb] bg-[#fafafa] p-4">
          <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-wide mb-2">
            {selected === quiz.correctIndex ? "Correct!" : "Not quite."}
          </p>
          <Markdown className="text-sm text-[#374151]">{quiz.explanation}</Markdown>
          <button
            onClick={handleGenerate}
            className="mt-3 text-xs font-medium text-[#6b7280] hover:text-[#0d0d0d] transition-colors"
          >
            Try another question
          </button>
        </div>
      )}
    </div>
  );
}
