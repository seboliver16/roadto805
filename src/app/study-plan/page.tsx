"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { getUserStudyPlan } from "@/lib/store";
import { StudyPlan, Section, SECTION_LABELS, SECTION_COLORS } from "@/types";
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

  const completed = plan.recommendedChapters.filter((ch) => ch.completed).length;
  const total = plan.recommendedChapters.length;
  const overallPercent = total > 0 ? Math.round((completed / total) * 100) : 0;

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

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Your Study Plan</h1>
          <p className="mt-1 text-gray-500">Based on your diagnostic results</p>
        </div>
        <ProgressRing percent={overallPercent} size={80} strokeWidth={6} />
      </div>

      {/* Overall progress */}
      <div className="mb-8 rounded-xl bg-white p-5 shadow-sm border">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Overall Progress</span>
          <span className="text-sm text-gray-500">{completed} / {total} chapters</span>
        </div>
        <div className="h-3 rounded-full bg-gray-100 overflow-hidden">
          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-500"
            style={{ width: `${overallPercent}%` }}
          />
        </div>
      </div>

      {/* Weak Areas */}
      {plan.weakAreas.length > 0 && (
        <div className="mb-8 rounded-xl bg-red-50 border border-red-200 p-5">
          <h2 className="font-semibold text-red-800 mb-3">Focus Areas</h2>
          <div className="space-y-2">
            {plan.weakAreas.map((area) => (
              <div key={area.section} className="flex items-center gap-2">
                <Badge variant={area.priority === "high" ? "red" : area.priority === "medium" ? "yellow" : "default"}>
                  {area.priority}
                </Badge>
                <span className="text-sm text-red-900">{SECTION_LABELS[area.section]}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Chapters by Section */}
      {(["quant", "verbal", "data-insights"] as Section[]).map((section) => {
        const chapters = sectionGroups[section];
        if (chapters.length === 0) return null;
        const colors = SECTION_COLORS[section];

        return (
          <div key={section} className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className={`h-3 w-3 rounded-full ${colors.accent}`} />
              <h2 className="text-lg font-semibold">{SECTION_LABELS[section]}</h2>
              <span className="text-sm text-gray-400">
                {chapters.filter((ch) => ch.completed).length} / {chapters.length}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {chapters.map((rec) => {
                const chapter = chapterMap[rec.chapterId];
                if (!chapter) return null;
                return (
                  <ChapterCard
                    key={rec.chapterId}
                    chapter={chapter}
                    completed={rec.completed}
                    onClick={() => router.push(`/learn/${rec.chapterId}`)}
                  />
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
          className="rounded-xl bg-blue-600 px-6 py-4 text-base font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          Practice Now
        </button>
        <button
          onClick={() => router.push("/diagnostic")}
          className="rounded-xl border border-gray-300 bg-white px-6 py-4 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Retake Diagnostic
        </button>
      </div>
    </main>
  );
}
