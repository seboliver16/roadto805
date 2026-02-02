"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { getUserStudyPlan, updateStudyPlanProgress, markChapterComplete, unmarkChapterComplete } from "@/lib/store";
import { StudyPlan, Section, SECTION_LABELS } from "@/types";
import { chapterMap } from "@/data/chapters";
import { PageSkeleton } from "@/components/loading-skeleton";
import { ProgressRing } from "@/components/progress-ring";
import { ChapterCard } from "@/components/chapter-card";
import { Badge } from "@/components/badge";

export default function StudyPlanPage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const [plan, setPlan] = useState<StudyPlan | null>(null);
  const [loading, setLoading] = useState(true);
  const [toggledChapters, setToggledChapters] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!user) return;
    getUserStudyPlan(user.uid)
      .then(setPlan)
      .finally(() => setLoading(false));
  }, [user]);

  useEffect(() => {
    if (!authLoading && !user) router.push("/");
  }, [user, authLoading, router]);

  if (loading || !plan) {
    return <PageSkeleton label="Loading study plan..." />;
  }

  const total = plan.recommendedChapters.length;

  // Group chapters by section
  const sectionGroups: Record<Section, typeof plan.recommendedChapters> = {
    quant: [],
    verbal: [],
    "data-insights": [],
  };

  plan.recommendedChapters.forEach((rec) => {
    const chapter = chapterMap[rec.chapterId];
    if (chapter) {
      sectionGroups[chapter.section].push(rec);
    }
  });

  const isChapterCompleted = (rec: { chapterId: string; completed: boolean }) =>
    toggledChapters[rec.chapterId] ?? rec.completed;

  const handleToggleChapter = async (chapterId: string, currentlyCompleted: boolean) => {
    if (!user || !plan?.id) return;
    const newState = !currentlyCompleted;
    setToggledChapters((prev) => ({ ...prev, [chapterId]: newState }));
    try {
      await updateStudyPlanProgress(plan.id, chapterId, newState);
      const ch = chapterMap[chapterId];
      if (newState) {
        await markChapterComplete(user.uid, chapterId, ch?.title ?? chapterId);
      } else {
        await unmarkChapterComplete(user.uid, chapterId);
      }
    } catch {
      setToggledChapters((prev) => ({ ...prev, [chapterId]: currentlyCompleted }));
    }
  };

  const effectiveCompleted = plan.recommendedChapters.filter((ch) => isChapterCompleted(ch)).length;
  const effectivePercent = total > 0 ? Math.round((effectiveCompleted / total) * 100) : 0;

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#0d0d0d]">Your Study Plan</h1>
          <p className="mt-1 text-[#6b7280]">Based on your diagnostic results</p>
        </div>
        <ProgressRing percent={effectivePercent} size={80} strokeWidth={6} />
      </div>

      {/* Overall progress */}
      <div className="mb-8 rounded-lg bg-white p-5 border border-[#e5e7eb]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-[#374151]">Overall Progress</span>
          <span className="text-sm text-[#6b7280]">{effectiveCompleted} / {total} chapters</span>
        </div>
        <div className="h-3 rounded-full bg-[#f3f4f6] overflow-hidden">
          <div
            className="h-full rounded-full bg-[#0d0d0d] transition-all duration-500"
            style={{ width: `${effectivePercent}%` }}
          />
        </div>
      </div>

      {/* Weak Areas */}
      {plan.weakAreas.length > 0 && (
        <div className="mb-8 rounded-lg bg-[#fafafa] border border-[#e5e7eb] p-5">
          <h2 className="font-semibold text-[#0d0d0d] mb-3">Focus Areas</h2>
          <div className="space-y-2">
            {plan.weakAreas.map((area) => (
              <div key={area.section} className="flex items-center gap-2">
                <Badge variant={area.priority === "high" ? "red" : area.priority === "medium" ? "yellow" : "default"}>
                  {area.priority}
                </Badge>
                <span className="text-sm text-[#374151]">{SECTION_LABELS[area.section]}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Chapters by Section */}
      {(["quant", "verbal", "data-insights"] as Section[]).map((section) => {
        const chapters = sectionGroups[section];
        if (chapters.length === 0) return null;

        return (
          <div key={section} className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-3 w-3 rounded-full bg-[#0d0d0d]" />
              <h2 className="text-lg font-semibold text-[#0d0d0d]">{SECTION_LABELS[section]}</h2>
              <span className="text-sm text-[#9ca3af]">
                {chapters.filter((ch) => isChapterCompleted(ch)).length} / {chapters.length}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {chapters.map((rec) => {
                const chapter = chapterMap[rec.chapterId];
                if (!chapter) return null;
                const done = isChapterCompleted(rec);
                return (
                  <div key={rec.chapterId} className="relative">
                    <ChapterCard
                      chapter={chapter}
                      completed={done}
                      onClick={() => router.push(`/learn/${rec.chapterId}`)}
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToggleChapter(rec.chapterId, done);
                      }}
                      className={`absolute top-3 right-3 z-10 rounded-full p-1.5 transition-colors ${
                        done
                          ? "bg-green-100 text-green-600 hover:bg-red-100 hover:text-red-500"
                          : "bg-[#f3f4f6] text-[#9ca3af] hover:bg-green-100 hover:text-green-600"
                      }`}
                      title={done ? "Unmark complete" : "Mark complete"}
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Actions */}
      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <button
          onClick={() => router.push("/practice")}
          className="rounded-lg bg-[#0d0d0d] px-6 py-4 text-base font-semibold text-white hover:bg-[#1a1a1a] transition-colors"
        >
          Practice Now
        </button>
        <button
          onClick={() => router.push("/diagnostic")}
          className="rounded-lg border border-[#e5e7eb] bg-white px-6 py-4 text-base font-semibold text-[#0d0d0d] hover:bg-[#fafafa] transition-colors"
        >
          Retake Diagnostic
        </button>
      </div>
    </main>
  );
}
