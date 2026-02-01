"use client";

import { useParams, useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { SECTION_LABELS, SECTION_COLORS, THEME_LABELS } from "@/types";
import { getChapterById, getChaptersBySection } from "@/data/chapters";
import { PageSkeleton } from "@/components/loading-skeleton";
import { Markdown } from "@/components/markdown";
import { Badge } from "@/components/badge";
import { FrequencyBadge } from "@/components/frequency-badge";

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

  if (loading) return <PageSkeleton />;

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">Please sign in to access lessons.</p>
      </div>
    );
  }

  const chapter = getChapterById(chapterId);
  if (!chapter) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <p className="text-lg text-gray-600">Chapter not found.</p>
        <button
          onClick={() => router.push("/learn")}
          className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Back to Learn
        </button>
      </div>
    );
  }

  const content = getChapterContent(chapterId);
  const colors = SECTION_COLORS[chapter.section];
  const sectionChapters = getChaptersBySection(chapter.section);
  const currentIdx = sectionChapters.findIndex((ch) => ch.id === chapterId);
  const prevChapter = currentIdx > 0 ? sectionChapters[currentIdx - 1] : null;
  const nextChapter = currentIdx < sectionChapters.length - 1 ? sectionChapters[currentIdx + 1] : null;

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      {/* Back link */}
      <button
        onClick={() => router.push("/learn")}
        className="mb-4 text-sm text-gray-500 hover:text-gray-700"
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
          <span className="text-sm text-gray-400">{chapter.estimatedMinutes} min read</span>
        </div>
        <h1 className="text-3xl font-bold">{chapter.title}</h1>
        <p className="mt-2 text-gray-600">{chapter.description}</p>
        <div className="mt-3 flex flex-wrap gap-1">
          {chapter.topics.map((topic) => (
            <span key={topic} className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${colors.bg} ${colors.text}`}>
              {THEME_LABELS[topic]}
            </span>
          ))}
        </div>
      </div>

      {/* Lesson Content */}
      <div className="mb-12 rounded-xl bg-white p-6 shadow-sm border">
        <Markdown>{content}</Markdown>
      </div>

      {/* Practice Questions CTA */}
      {chapter.practiceQuestionIds.length > 0 && (
        <div className="mb-8 rounded-xl bg-blue-50 border border-blue-200 p-6 text-center">
          <h3 className="text-lg font-semibold text-blue-800">Test Your Understanding</h3>
          <p className="mt-1 text-sm text-blue-600">
            {chapter.practiceQuestionIds.length} practice questions for this chapter
          </p>
          <button
            onClick={() => {
              const themes = chapter.topics.join(",");
              router.push(`/practice?themes=${themes}`);
            }}
            className="mt-4 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Practice These Topics
          </button>
        </div>
      )}

      {/* Prev/Next Navigation */}
      <div className="flex gap-3">
        {prevChapter && (
          <button
            onClick={() => router.push(`/learn/${prevChapter.id}`)}
            className="flex-1 rounded-xl border border-gray-300 bg-white py-4 px-5 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="text-xs text-gray-400">Previous</span>
            <p className="text-sm font-semibold text-gray-900 truncate">{prevChapter.title}</p>
          </button>
        )}
        {nextChapter && (
          <button
            onClick={() => router.push(`/learn/${nextChapter.id}`)}
            className="flex-1 rounded-xl border border-gray-300 bg-white py-4 px-5 text-right hover:bg-gray-50 transition-colors"
          >
            <span className="text-xs text-gray-400">Next</span>
            <p className="text-sm font-semibold text-gray-900 truncate">{nextChapter.title}</p>
          </button>
        )}
      </div>
    </main>
  );
}
