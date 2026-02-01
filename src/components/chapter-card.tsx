"use client";

import { Chapter, THEME_LABELS, SECTION_COLORS } from "@/types";
import { FrequencyBadge } from "./frequency-badge";

interface ChapterCardProps {
  chapter: Chapter;
  completed?: boolean;
  onClick?: () => void;
}

export function ChapterCard({ chapter, completed = false, onClick }: ChapterCardProps) {
  const colors = SECTION_COLORS[chapter.section];

  return (
    <button
      onClick={onClick}
      className={`w-full rounded-xl bg-white p-5 text-left shadow-sm border hover:shadow-md transition-shadow ${
        completed ? "opacity-75" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white ${colors.accent}`}>
              {chapter.order}
            </span>
            <h3 className="text-base font-semibold text-gray-900">{chapter.title}</h3>
            {completed && (
              <svg className="h-5 w-5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </div>
          <p className="text-sm text-gray-500 line-clamp-2 mb-3">{chapter.description}</p>
          <div className="flex flex-wrap items-center gap-2">
            <FrequencyBadge frequency={chapter.frequency} percent={chapter.frequencyPercent} />
            <span className="text-xs text-gray-400">
              {chapter.estimatedMinutes} min
            </span>
            <span className="text-xs text-gray-400">
              {chapter.practiceQuestionIds.length} questions
            </span>
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            {chapter.topics.slice(0, 4).map((topic) => (
              <span key={topic} className={`rounded-full px-2 py-0.5 text-xs ${colors.bg} ${colors.text}`}>
                {THEME_LABELS[topic]}
              </span>
            ))}
            {chapter.topics.length > 4 && (
              <span className="text-xs text-gray-400">+{chapter.topics.length - 4} more</span>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}
