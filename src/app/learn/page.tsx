"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { Section, SECTION_LABELS } from "@/types";
import { getChaptersBySection } from "@/data/chapters";
import { getAllChapterProgress } from "@/lib/store";
import { PageSkeleton } from "@/components/loading-skeleton";
import { SectionTabs } from "@/components/section-tabs";
import { ChapterCard } from "@/components/chapter-card";

export default function LearnPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [activeSection, setActiveSection] = useState<Section | "all">("quant");
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!user) return;
    getAllChapterProgress(user.uid).then((items) => {
      setCompletedIds(new Set(items.filter((i) => i.completed).map((i) => i.chapterId)));
    });
  }, [user]);

  if (loading) return <PageSkeleton />;

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-[#6b7280]">Please sign in to access lessons.</p>
      </div>
    );
  }

  const sections: Section[] = activeSection === "all"
    ? ["quant", "verbal", "data-insights"]
    : [activeSection as Section];

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#0d0d0d]">Learn</h1>
        <SectionTabs
          value={activeSection}
          onChange={(v) => setActiveSection(v)}
          showAll={false}
        />
      </div>

      {sections.map((section) => {
        const chapters = getChaptersBySection(section);
        const completedCount = chapters.filter((ch) => completedIds.has(ch.id)).length;
        return (
          <div key={section} className="mb-8">
            {sections.length > 1 && (
              <h2 className="text-lg font-semibold text-[#0d0d0d] mb-4">{SECTION_LABELS[section]}</h2>
            )}
            {/* Section progress */}
            <div className="mb-4 flex items-center gap-3">
              <div className="h-1.5 flex-1 rounded-full bg-[#f3f4f6]">
                <div
                  className="h-1.5 rounded-full bg-[#0d0d0d] transition-all duration-300"
                  style={{ width: `${chapters.length > 0 ? (completedCount / chapters.length) * 100 : 0}%` }}
                />
              </div>
              <span className="text-xs font-medium text-[#9ca3af] shrink-0">
                {completedCount}/{chapters.length} complete
              </span>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {chapters.map((chapter) => (
                <ChapterCard
                  key={chapter.id}
                  chapter={chapter}
                  completed={completedIds.has(chapter.id)}
                  onClick={() => router.push(`/learn/${chapter.id}`)}
                />
              ))}
            </div>
          </div>
        );
      })}
    </main>
  );
}
