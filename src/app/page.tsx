"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import { Section, SECTION_SHORT_LABELS, SECTION_COLORS, ThemeCategory, THEME_CATEGORIES, THEME_LABELS, getCategoriesBySection } from "@/types";
import { getUserStudyPlan } from "@/lib/store";
import { StudyPlan } from "@/types";
import { PageSkeleton } from "@/components/loading-skeleton";
import { ProgressRing } from "@/components/progress-ring";
import { StatCard } from "@/components/stat-card";
import { SectionTabs } from "@/components/section-tabs";

export default function Home() {
  const { user, profile, loading, signInWithGoogle, refreshProfile } = useAuth();
  const router = useRouter();
  const [studyPlan, setStudyPlan] = useState<StudyPlan | null>(null);
  const [activeSection, setActiveSection] = useState<Section | "all">("all");
  const [planLoading, setPlanLoading] = useState(false);

  useEffect(() => {
    if (user) {
      refreshProfile();
    }
  }, [user, refreshProfile]);

  useEffect(() => {
    if (!user || !profile?.currentStudyPlanId) return;
    let cancelled = false;
    getUserStudyPlan(user.uid)
      .then((plan) => { if (!cancelled) setStudyPlan(plan); })
      .finally(() => { if (!cancelled) setPlanLoading(false); });
    return () => { cancelled = true; };
  }, [user, profile?.currentStudyPlanId]);

  if (loading) {
    return <PageSkeleton />;
  }

  // === State 1: Not signed in ===
  if (!user) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-4 bg-white">
        <div className="animate-fade-in text-center max-w-lg">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-[#0d0d0d]">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-[#0d0d0d]">
            Road to <span className="text-[#0d0d0d]">805</span>
          </h1>
          <p className="mt-4 text-lg text-[#6b7280] leading-relaxed">
            GMAT Focus Edition prep with diagnostic tests, personalized study plans, and AI-powered walkthroughs.
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <span className="rounded-full bg-[#fafafa] border border-[#e5e7eb] px-3.5 py-1.5 text-xs font-semibold text-[#374151]">Quant</span>
            <span className="rounded-full bg-[#fafafa] border border-[#e5e7eb] px-3.5 py-1.5 text-xs font-semibold text-[#374151]">Verbal</span>
            <span className="rounded-full bg-[#fafafa] border border-[#e5e7eb] px-3.5 py-1.5 text-xs font-semibold text-[#374151]">Data Insights</span>
          </div>
          <button
            onClick={signInWithGoogle}
            className="mt-8 flex items-center gap-3 mx-auto rounded-xl border border-[#e5e7eb] bg-white px-8 py-4 text-base font-semibold text-[#0d0d0d] hover:bg-[#fafafa] transition-colors"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  const accuracy = profile && profile.totalQuestions > 0
    ? Math.round((profile.totalCorrect / profile.totalQuestions) * 100)
    : 0;

  const hasDiagnostic = profile?.hasTakenDiagnostic ?? false;

  // === State 2: Signed in, no diagnostic ===
  if (!hasDiagnostic) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-12 bg-white">
        <div className="animate-fade-in rounded-lg bg-white border border-[#e5e7eb] p-10 text-center">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#0d0d0d]">
            <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-[#0d0d0d]">Welcome to Road to 805!</h2>
          <p className="mt-3 text-[#374151] max-w-lg mx-auto leading-relaxed">
            Start with a diagnostic test to assess your strengths across all three GMAT sections.
            We&apos;ll create a personalized study plan based on your results.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <div className="rounded-lg bg-[#fafafa] border border-[#e5e7eb] px-4 py-2.5 text-sm text-[#374151] font-medium">
              18 questions
            </div>
            <div className="rounded-lg bg-[#fafafa] border border-[#e5e7eb] px-4 py-2.5 text-sm text-[#374151] font-medium">
              3 sections
            </div>
            <div className="rounded-lg bg-[#fafafa] border border-[#e5e7eb] px-4 py-2.5 text-sm text-[#374151] font-medium">
              ~25 minutes
            </div>
          </div>
          <button
            onClick={() => router.push("/diagnostic")}
            className="mt-8 rounded-lg px-10 py-4 text-lg font-semibold text-white bg-[#0d0d0d] hover:bg-[#1a1a1a] transition-colors"
          >
            Start Diagnostic Test
          </button>
        </div>

        {/* Quick Practice for impatient users */}
        <div className="mt-8 text-center animate-fade-in">
          <p className="text-sm text-[#9ca3af] mb-3">Or jump straight into practice</p>
          <button
            onClick={() => router.push("/practice")}
            className="rounded-lg border border-[#e5e7eb] bg-white px-6 py-3 text-sm font-medium text-[#0d0d0d] hover:bg-[#fafafa] transition-colors"
          >
            Quick Practice Session
          </button>
        </div>
      </main>
    );
  }

  // === State 3: Signed in, has diagnostic ===
  const sectionStats = profile?.sectionStats;
  const planProgress = studyPlan
    ? Math.round(
        (studyPlan.recommendedChapters.filter((ch) => ch.completed).length /
          studyPlan.recommendedChapters.length) *
          100
      )
    : 0;

  const filteredCategories =
    activeSection === "all"
      ? Object.entries(THEME_CATEGORIES) as [ThemeCategory, { label: string; section: Section; themes: string[] }][]
      : getCategoriesBySection(activeSection) as [ThemeCategory, { label: string; section: Section; themes: string[] }][];

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-8">
        {/* Section Score Cards */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3 animate-fade-in">
          {(["quant", "verbal", "data-insights"] as Section[]).map((section) => {
            const stats = sectionStats?.[section];
            const sectionAccuracy = stats && stats.totalQuestions > 0
              ? Math.round((stats.totalCorrect / stats.totalQuestions) * 100)
              : 0;

            return (
              <div key={section} className="rounded-lg bg-white border border-[#e5e7eb] p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-[#6b7280] uppercase tracking-wide">{SECTION_SHORT_LABELS[section]}</p>
                    <p className="mt-2 text-3xl font-bold text-[#0d0d0d]">{sectionAccuracy}%</p>
                    <p className="mt-1 text-xs text-[#6b7280]">
                      {stats?.totalQuestions ?? 0} questions practiced
                    </p>
                  </div>
                  <ProgressRing percent={sectionAccuracy} size={72} strokeWidth={6} color="text-[#0d0d0d]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Overall Stats */}
        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4 animate-fade-in">
          <StatCard label="Questions" value={profile?.totalQuestions ?? 0} accent="blue" />
          <StatCard label="Accuracy" value={`${accuracy}%`} accent="green" />
          <StatCard label="Sessions" value={profile?.totalSessions ?? 0} accent="purple" />
          <StatCard label="Plan Progress" value={`${planProgress}%`} accent="amber" />
        </div>

        {/* Study Plan Progress */}
        {studyPlan && !planLoading && (
          <div className="mb-8 rounded-lg bg-white p-6 border border-[#e5e7eb]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-[#0d0d0d]">Study Plan</h2>
              <button
                onClick={() => router.push("/study-plan")}
                className="text-sm text-[#374151] hover:text-[#0d0d0d] font-semibold"
              >
                View Full Plan &rarr;
              </button>
            </div>
            <div className="h-3 rounded-full bg-[#f3f4f6] overflow-hidden">
              <div
                className="h-full rounded-full bg-[#0d0d0d] transition-all duration-700 ease-out"
                style={{ width: `${planProgress}%` }}
              />
            </div>
            <p className="mt-3 text-sm text-[#6b7280]">
              {studyPlan.recommendedChapters.filter((ch) => ch.completed).length} of{" "}
              {studyPlan.recommendedChapters.length} chapters completed
            </p>
          </div>
        )}

        {/* Quick Actions */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <button
            onClick={() => router.push("/practice")}
            className="rounded-lg px-6 py-5 text-lg font-bold text-white bg-[#0d0d0d] hover:bg-[#1a1a1a] transition-colors"
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
              </svg>
              Start Practice Session
            </span>
          </button>
          <button
            onClick={() => router.push("/learn")}
            className="rounded-lg border border-[#e5e7eb] bg-white px-6 py-5 text-lg font-bold text-[#0d0d0d] hover:bg-[#fafafa] transition-colors"
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
              Continue Learning
            </span>
          </button>
        </div>

        {/* Practice by Theme */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#0d0d0d]">Practice by Theme</h2>
            <SectionTabs value={activeSection} onChange={setActiveSection} />
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {filteredCategories.map(([key, category]) => {
              return (
                <button
                  key={key}
                  onClick={() => router.push(`/practice?category=${key}`)}
                  className="rounded-lg bg-white border border-[#e5e7eb] hover:bg-[#fafafa] transition-colors p-5 text-left"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#0d0d0d]" />
                    <h3 className="text-base font-bold text-[#0d0d0d]">{category.label}</h3>
                  </div>
                  <p className="text-sm text-[#6b7280] leading-relaxed">
                    {category.themes.map((t) => THEME_LABELS[t as keyof typeof THEME_LABELS]).join(", ")}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Review */}
        {profile && profile.totalQuestions > 0 && (
          <div className="mt-8">
            <button
              onClick={() => router.push("/review")}
              className="w-full rounded-lg border border-[#e5e7eb] bg-white px-8 py-5 text-lg font-bold text-[#0d0d0d] hover:bg-[#fafafa] transition-colors"
            >
              Review Weak Themes
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
