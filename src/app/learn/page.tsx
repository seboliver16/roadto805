"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { Section, SECTION_LABELS } from "@/types";
import { getChaptersBySection } from "@/data/chapters";
import { PageSkeleton } from "@/components/loading-skeleton";
import { SectionTabs } from "@/components/section-tabs";
import { ChapterCard } from "@/components/chapter-card";

export default function LearnPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [activeSection, setActiveSection] = useState<Section | "all">("quant");

  if (loading) return <PageSkeleton />;

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">Please sign in to access lessons.</p>
      </div>
    );
  }

  const sections: Section[] = activeSection === "all"
    ? ["quant", "verbal", "data-insights"]
    : [activeSection as Section];

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Learn</h1>
        <SectionTabs
          value={activeSection}
          onChange={(v) => setActiveSection(v)}
          showAll={false}
        />
      </div>

      {sections.map((section) => {
        const chapters = getChaptersBySection(section);
        return (
          <div key={section} className="mb-8">
            {sections.length > 1 && (
              <h2 className="text-lg font-semibold mb-4">{SECTION_LABELS[section]}</h2>
            )}
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {chapters.map((chapter) => (
                <ChapterCard
                  key={chapter.id}
                  chapter={chapter}
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
