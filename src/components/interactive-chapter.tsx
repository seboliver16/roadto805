"use client";

import { useState, useEffect, useCallback } from "react";
import { splitChapterContent } from "@/lib/chapter-utils";
import { SelectableMarkdown } from "./selectable-markdown";
import { KnowledgeCheck } from "./knowledge-check";
import { Section } from "@/types";

interface InteractiveChapterProps {
  content: string;
  chapterId: string;
  chapterTitle: string;
  section: Section;
  onExplain?: (selectedText: string) => void;
}

export function InteractiveChapter({ content, chapterId, chapterTitle, section, onExplain }: InteractiveChapterProps) {
  const sections = splitChapterContent(content);
  const storageKey = `chapter-progress-${chapterId}`;

  const [expandedSections, setExpandedSections] = useState<Set<number>>(() => {
    if (typeof window === "undefined") return new Set([0]);
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) return new Set(JSON.parse(saved) as number[]);
    } catch { /* ignore */ }
    return new Set([0]);
  });

  // Persist expanded state
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify([...expandedSections]));
    } catch { /* ignore */ }
  }, [expandedSections, storageKey]);

  const toggleSection = useCallback((index: number) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }, []);

  const expandNext = useCallback((currentIndex: number) => {
    const nextIdx = sections.findIndex((s) => s.index > currentIndex && !expandedSections.has(s.index));
    if (nextIdx !== -1) {
      setExpandedSections((prev) => new Set([...prev, sections[nextIdx].index]));
      setTimeout(() => {
        document.getElementById(`section-${sections[nextIdx].index}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [sections, expandedSections]);

  const visitedCount = expandedSections.size;
  const totalSections = sections.length;
  const progressPercent = totalSections > 0 ? Math.round((visitedCount / totalSections) * 100) : 0;

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-6 rounded-lg border border-[#e5e7eb] bg-white p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-[#6b7280]">
            {visitedCount} of {totalSections} sections
          </span>
          <span className="text-xs font-medium text-[#9ca3af]">{progressPercent}%</span>
        </div>
        <div className="h-1.5 rounded-full bg-[#f3f4f6]">
          <div
            className="h-1.5 rounded-full bg-[#0d0d0d] transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-3">
        {sections.map((sec, idx) => {
          const isExpanded = expandedSections.has(sec.index);
          const isLast = idx === sections.length - 1;

          return (
            <div
              key={sec.index}
              id={`section-${sec.index}`}
              className="rounded-xl border border-[#e5e7eb] bg-white overflow-hidden"
            >
              {/* Section header */}
              <button
                onClick={() => toggleSection(sec.index)}
                className="flex w-full items-center justify-between px-5 py-4 text-left hover:bg-[#fafafa] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f3f4f6] text-xs font-bold text-[#6b7280]">
                    {idx + 1}
                  </span>
                  <span className="text-sm font-semibold text-[#0d0d0d]">{sec.title}</span>
                </div>
                <svg
                  className={`h-4 w-4 shrink-0 text-[#9ca3af] transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {/* Section content */}
              {isExpanded && (
                <div className="border-t border-[#e5e7eb] px-5 py-5 animate-fade-in">
                  <SelectableMarkdown
                    fullContext={content}
                    chapterId={chapterId}
                    chapterTitle={chapterTitle}
                    sectionTitle={sec.title}
                    section={section}
                    className="text-[#374151]"
                    onExplain={onExplain}
                  >
                    {sec.markdown}
                  </SelectableMarkdown>

                  {/* Knowledge check */}
                  <KnowledgeCheck sectionContent={sec.markdown} section={section} />

                  {/* Continue button */}
                  {!isLast && (
                    <div className="mt-6 flex justify-end">
                      <button
                        onClick={() => expandNext(sec.index)}
                        className="flex items-center gap-1.5 rounded-lg bg-[#0d0d0d] px-4 py-2 text-sm font-medium text-white hover:bg-[#333] transition-colors"
                      >
                        Continue
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
