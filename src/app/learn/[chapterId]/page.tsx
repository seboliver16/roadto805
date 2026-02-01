"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { SECTION_LABELS, THEME_LABELS } from "@/types";
import { getChapterById, getChaptersBySection } from "@/data/chapters";
import { PageSkeleton } from "@/components/loading-skeleton";
import { Badge } from "@/components/badge";
import { FrequencyBadge } from "@/components/frequency-badge";
import { InteractiveChapter } from "@/components/interactive-chapter";
import { ExplanationPanel } from "@/components/explanation-panel";
import { markChapterComplete, getChapterProgress } from "@/lib/store";
import { generateExplanation } from "@/lib/mistral";

// Dynamic content imports
function getChapterContent(chapterId: string): string {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const mod = require(`@/data/chapters/content/${chapterId}`);
    return mod.content ?? "";
  } catch {
    return "# Chapter content coming soon\n\nThis chapter is being developed.";
  }
}

export default function ChapterPage() {
  const params = useParams();
  const router = useRouter();
  const { user, loading } = useAuth();
  const chapterId = params.chapterId as string;
  const [completed, setCompleted] = useState(false);
  const [marking, setMarking] = useState(false);

  // Explanation panel state (lifted up)
  const [explanationText, setExplanationText] = useState("");
  const [highlightedText, setHighlightedText] = useState("");
  const [explanationLoading, setExplanationLoading] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    if (!user) return;
    getChapterProgress(user.uid, chapterId).then((p) => {
      if (p?.completed) setCompleted(true);
    });
  }, [user, chapterId]);

  const chapter = getChapterById(chapterId);
  const content = chapter ? getChapterContent(chapterId) : "";

  const handleExplain = useCallback(async (selectedText: string) => {
    if (!chapter) return;
    setHighlightedText(selectedText);
    setShowPanel(true);
    setExplanationLoading(true);
    setExplanationText("");
    try {
      const result = await generateExplanation(selectedText, content, chapter.title, chapter.section);
      setExplanationText(result);
    } catch {
      setExplanationText("Could not generate explanation. Try again later.");
    } finally {
      setExplanationLoading(false);
    }
  }, [chapter, content]);

  const dismissPanel = useCallback(() => {
    setShowPanel(false);
    setExplanationText("");
    setHighlightedText("");
  }, []);

  if (loading) return <PageSkeleton />;

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-[#6b7280]">Please sign in to access lessons.</p>
      </div>
    );
  }

  if (!chapter) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <p className="text-lg text-[#374151]">Chapter not found.</p>
        <button
          onClick={() => router.push("/learn")}
          className="rounded-lg bg-[#0d0d0d] px-6 py-3 text-white hover:bg-[#1a1a1a] transition-colors"
        >
          Back to Learn
        </button>
      </div>
    );
  }

  const sectionChapters = getChaptersBySection(chapter.section);
  const currentIdx = sectionChapters.findIndex((ch) => ch.id === chapterId);
  const prevChapter = currentIdx > 0 ? sectionChapters[currentIdx - 1] : null;
  const nextChapter = currentIdx < sectionChapters.length - 1 ? sectionChapters[currentIdx + 1] : null;

  const handleMarkComplete = async () => {
    if (!user) return;
    setMarking(true);
    try {
      await markChapterComplete(user.uid, chapterId, chapter.title);
      setCompleted(true);
    } catch { /* ignore */ }
    setMarking(false);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex gap-6 items-start">
        {/* Main content */}
        <main className={`min-w-0 transition-all duration-200 ${showPanel ? "flex-1" : "mx-auto max-w-3xl w-full"}`}>
          {/* Back link */}
          <button
            onClick={() => router.push("/learn")}
            className="mb-4 text-sm text-[#6b7280] hover:text-[#0d0d0d] transition-colors"
          >
            &larr; All Chapters
          </button>

          {/* Chapter Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge variant={chapter.section === "quant" ? "blue" : chapter.section === "verbal" ? "green" : "purple"}>
                {SECTION_LABELS[chapter.section]}
              </Badge>
              <FrequencyBadge frequency={chapter.frequency} percent={chapter.frequencyPercent} />
              <span className="text-sm text-[#9ca3af]">{chapter.estimatedMinutes} min read</span>
              {completed && (
                <span className="flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Completed
                </span>
              )}
            </div>
            <h1 className="text-3xl font-bold text-[#0d0d0d]">{chapter.title}</h1>
            <p className="mt-2 text-[#6b7280]">{chapter.description}</p>
            <div className="mt-3 flex flex-wrap gap-1">
              {chapter.topics.map((topic) => (
                <span key={topic} className="rounded-full bg-[#f3f4f6] px-2.5 py-0.5 text-xs font-medium text-[#374151]">
                  {THEME_LABELS[topic]}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Lesson Content */}
          <InteractiveChapter
            content={content}
            chapterId={chapterId}
            chapterTitle={chapter.title}
            section={chapter.section}
            onExplain={handleExplain}
          />

          {/* Mark Complete + Practice CTA */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {!completed ? (
              <button
                onClick={handleMarkComplete}
                disabled={marking}
                className="flex items-center gap-2 rounded-lg bg-[#0d0d0d] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1a1a1a] transition-colors disabled:opacity-50"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {marking ? "Saving..." : "Mark as Complete"}
              </button>
            ) : (
              <span className="flex items-center gap-2 text-sm font-medium text-green-600">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Chapter completed
              </span>
            )}

            {chapter.practiceQuestionIds.length > 0 && (
              <button
                onClick={() => {
                  const themes = chapter.topics.join(",");
                  router.push(`/practice?themes=${themes}`);
                }}
                className="flex items-center gap-2 rounded-lg border border-[#e5e7eb] bg-white px-5 py-2.5 text-sm font-semibold text-[#0d0d0d] hover:bg-[#fafafa] transition-colors"
              >
                Practice These Topics
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            )}
          </div>

          {/* Prev/Next Navigation */}
          <div className="mt-8 flex gap-3">
            {prevChapter && (
              <button
                onClick={() => router.push(`/learn/${prevChapter.id}`)}
                className="flex-1 rounded-lg border border-[#e5e7eb] bg-white py-4 px-5 text-left hover:bg-[#fafafa] transition-colors"
              >
                <span className="text-xs text-[#9ca3af]">Previous</span>
                <p className="text-sm font-semibold text-[#0d0d0d] truncate">{prevChapter.title}</p>
              </button>
            )}
            {nextChapter && (
              <button
                onClick={() => router.push(`/learn/${nextChapter.id}`)}
                className="flex-1 rounded-lg border border-[#e5e7eb] bg-white py-4 px-5 text-right hover:bg-[#fafafa] transition-colors"
              >
                <span className="text-xs text-[#9ca3af]">Next</span>
                <p className="text-sm font-semibold text-[#0d0d0d] truncate">{nextChapter.title}</p>
              </button>
            )}
          </div>
        </main>

        {/* Explanation side panel */}
        {showPanel && (
          <ExplanationPanel
            selectedText={highlightedText}
            explanation={explanationText}
            loading={explanationLoading}
            onDismiss={dismissPanel}
            section={chapter.section}
          />
        )}
      </div>
    </div>
  );
}
