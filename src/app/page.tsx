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
      <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-4">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight">
            Road to <span className="text-blue-600">805</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-md mx-auto">
            GMAT Focus Edition prep with diagnostic tests, personalized study plans, and AI-powered walkthroughs.
          </p>
          <div className="mt-3 flex justify-center gap-3">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">Quant</span>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">Verbal</span>
            <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700">Data Insights</span>
          </div>
        </div>
        <button
          onClick={signInWithGoogle}
          className="flex items-center gap-3 rounded-lg bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
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
    );
  }

  const accuracy = profile && profile.totalQuestions > 0
    ? Math.round((profile.totalCorrect / profile.totalQuestions) * 100)
    : 0;

  const hasDiagnostic = profile?.hasTakenDiagnostic ?? false;

  // === State 2: Signed in, no diagnostic ===
  if (!hasDiagnostic) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-12">
        <div className="rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50 p-10 text-center">
          <h2 className="text-3xl font-bold text-blue-900">Welcome to Road to 805!</h2>
          <p className="mt-3 text-blue-700 max-w-lg mx-auto">
            Start with a diagnostic test to assess your strengths across all three GMAT sections.
            We&apos;ll create a personalized study plan based on your results.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <div className="rounded-lg bg-white px-4 py-2 text-sm text-gray-600 shadow-sm">
              18 questions
            </div>
            <div className="rounded-lg bg-white px-4 py-2 text-sm text-gray-600 shadow-sm">
              3 sections
            </div>
            <div className="rounded-lg bg-white px-4 py-2 text-sm text-gray-600 shadow-sm">
              ~25 minutes
            </div>
          </div>
          <button
            onClick={() => router.push("/diagnostic")}
            className="mt-8 rounded-xl bg-blue-600 px-10 py-4 text-lg font-semibold text-white shadow-md hover:bg-blue-700 transition-colors btn-press"
          >
            Start Diagnostic Test
          </button>
        </div>

        {/* Quick Practice for impatient users */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 mb-3">Or jump straight into practice</p>
          <button
            onClick={() => router.push("/practice")}
            className="rounded-lg border border-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
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
    <main className="mx-auto max-w-5xl px-4 py-8">
      {/* Section Score Cards */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {(["quant", "verbal", "data-insights"] as Section[]).map((section) => {
          const stats = sectionStats?.[section];
          const sectionAccuracy = stats && stats.totalQuestions > 0
            ? Math.round((stats.totalCorrect / stats.totalQuestions) * 100)
            : 0;
          const colors = SECTION_COLORS[section];
          const ringColor = section === "quant"
            ? "text-blue-600"
            : section === "verbal"
            ? "text-emerald-600"
            : "text-purple-600";

          return (
            <div key={section} className={`rounded-xl ${colors.bg} border ${colors.border} p-5`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${colors.text}`}>{SECTION_SHORT_LABELS[section]}</p>
                  <p className="mt-1 text-2xl font-bold text-gray-900">{sectionAccuracy}%</p>
                  <p className="text-xs text-gray-500">
                    {stats?.totalQuestions ?? 0} questions
                  </p>
                </div>
                <ProgressRing percent={sectionAccuracy} size={64} strokeWidth={5} color={ringColor} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Overall Stats */}
      <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard label="Questions" value={profile?.totalQuestions ?? 0} />
        <StatCard label="Accuracy" value={`${accuracy}%`} />
        <StatCard label="Sessions" value={profile?.totalSessions ?? 0} />
        <StatCard label="Plan Progress" value={`${planProgress}%`} />
      </div>

      {/* Study Plan Progress */}
      {studyPlan && !planLoading && (
        <div className="mb-8 rounded-xl bg-white p-5 shadow-sm border">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold">Study Plan</h2>
            <button
              onClick={() => router.push("/study-plan")}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              View Full Plan
            </button>
          </div>
          <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-500"
              style={{ width: `${planProgress}%` }}
            />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            {studyPlan.recommendedChapters.filter((ch) => ch.completed).length} of{" "}
            {studyPlan.recommendedChapters.length} chapters completed
          </p>
        </div>
      )}

      {/* Quick Actions */}
      <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <button
          onClick={() => router.push("/practice")}
          className="rounded-xl bg-blue-600 px-6 py-4 text-lg font-semibold text-white shadow-md hover:bg-blue-700 transition-colors btn-press"
        >
          Start Practice Session
        </button>
        <button
          onClick={() => router.push("/learn")}
          className="rounded-xl border-2 border-blue-600 bg-white px-6 py-4 text-lg font-semibold text-blue-600 hover:bg-blue-50 transition-colors btn-press"
        >
          Continue Learning
        </button>
      </div>

      {/* Practice by Theme */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Practice by Theme</h2>
          <SectionTabs value={activeSection} onChange={setActiveSection} />
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {filteredCategories.map(([key, category]) => {
            const colors = SECTION_COLORS[category.section];
            return (
              <button
                key={key}
                onClick={() => router.push(`/practice?category=${key}`)}
                className="rounded-xl bg-white p-5 text-left shadow-subtle border card-hover"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className={`h-2 w-2 rounded-full ${colors.accent}`} />
                  <h3 className="text-base font-semibold">{category.label}</h3>
                </div>
                <p className="text-sm text-gray-500">
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
            className="w-full rounded-xl border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Review Weak Themes
          </button>
        </div>
      )}
    </main>
  );
}
