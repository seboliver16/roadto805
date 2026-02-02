"use client";

import { useEffect, useState, useMemo } from "react";
import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import { Section, SECTION_SHORT_LABELS, THEME_LABELS, StudyPlan, UserAttempt, PracticeSession } from "@/types";
import { getUserStudyPlan, getUserAttempts, getUserSessions } from "@/lib/store";
import { PageSkeleton } from "@/components/loading-skeleton";
import { ProgressRing } from "@/components/progress-ring";
import { DiagnosticIcon, LearnIcon, PracticeIcon, ReviewIcon, ArrowRightIcon } from "@/components/icons";

function formatRelativeTime(timestamp: number): string {
  const diff = Date.now() - timestamp;
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return new Date(timestamp).toLocaleDateString();
}

export default function DashboardPage() {
  const { user, profile, loading, refreshProfile } = useAuth();
  const router = useRouter();
  const [studyPlan, setStudyPlan] = useState<StudyPlan | null>(null);
  const [planLoading, setPlanLoading] = useState(false);
  const [attempts, setAttempts] = useState<UserAttempt[]>([]);
  const [recentSessions, setRecentSessions] = useState<PracticeSession[]>([]);

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

  useEffect(() => {
    if (!user) return;
    getUserAttempts(user.uid, 500).then(setAttempts);
    getUserSessions(user.uid, 5).then(setRecentSessions);
  }, [user]);

  const weakThemes = useMemo(() => {
    const stats = new Map<string, { correct: number; total: number }>();
    for (const a of attempts) {
      for (const t of a.themes) {
        const s = stats.get(t) || { correct: 0, total: 0 };
        s.total++;
        if (a.correct) s.correct++;
        stats.set(t, s);
      }
    }
    return [...stats.entries()]
      .map(([theme, s]) => ({
        theme,
        ...s,
        accuracy: s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0,
      }))
      .filter((t) => t.total >= 2)
      .sort((a, b) => a.accuracy - b.accuracy)
      .slice(0, 5);
  }, [attempts]);

  const missedCount = useMemo(() => {
    const missed = new Set<string>();
    for (const a of attempts) {
      if (!a.correct) missed.add(a.questionId);
    }
    return missed.size;
  }, [attempts]);

  if (loading) {
    return <PageSkeleton />;
  }

  if (!user) {
    router.push("/");
    return <PageSkeleton />;
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
            <DiagnosticIcon className="h-7 w-7 text-white" />
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

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-8">

        {/* ── Hero ── */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-[#0d0d0d]">
            Welcome back{profile?.displayName ? `, ${profile.displayName.split(" ")[0]}` : ""}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <ProgressRing percent={accuracy} size={56} strokeWidth={5} />
              <div>
                <p className="text-2xl font-bold text-[#0d0d0d]">{accuracy}%</p>
                <p className="text-xs text-[#6b7280]">Overall accuracy</p>
              </div>
            </div>
            <div className="h-10 w-px bg-[#e5e7eb] hidden sm:block" />
            <div className="flex gap-6">
              <div>
                <p className="text-2xl font-bold text-[#0d0d0d]">{profile?.totalQuestions ?? 0}</p>
                <p className="text-xs text-[#6b7280]">Questions</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#0d0d0d]">{profile?.totalSessions ?? 0}</p>
                <p className="text-xs text-[#6b7280]">Sessions</p>
              </div>
              {studyPlan && (
                <div>
                  <p className="text-2xl font-bold text-[#0d0d0d]">{planProgress}%</p>
                  <p className="text-xs text-[#6b7280]">Study plan</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── Smart Practice CTA ── */}
        <div className="mb-6 animate-fade-in">
          <button
            onClick={() => router.push("/practice?mode=review")}
            className="w-full rounded-xl bg-[#0d0d0d] p-6 text-left hover:bg-[#1a1a1a] transition-colors group"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <ReviewIcon className="h-5 w-5 text-white" />
                  <h2 className="text-lg font-bold text-white">Practice Missed Questions</h2>
                </div>
                <p className="text-sm text-[#9ca3af]">
                  {missedCount > 0
                    ? `${missedCount} questions to review — weighted by recency and frequency`
                    : "Complete some practice sessions to build your review queue"}
                </p>
              </div>
              <ArrowRightIcon className="h-5 w-5 text-[#6b7280] group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" />
            </div>
          </button>
        </div>

        {/* ── Section Review Cards ── */}
        <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3 animate-fade-in">
          {(["quant", "verbal", "data-insights"] as Section[]).map((section) => {
            const stats = sectionStats?.[section];
            const sectionAccuracy = stats && stats.totalQuestions > 0
              ? Math.round((stats.totalCorrect / stats.totalQuestions) * 100)
              : 0;

            return (
              <button
                key={section}
                onClick={() => router.push(`/practice?mode=review&section=${section}`)}
                className="rounded-xl border border-[#e5e7eb] bg-white p-5 text-left hover:bg-[#fafafa] transition-colors group"
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold text-[#6b7280] uppercase tracking-wide">{SECTION_SHORT_LABELS[section]}</p>
                  <ProgressRing percent={sectionAccuracy} size={40} strokeWidth={4} showLabel={false} />
                </div>
                <p className="text-2xl font-bold text-[#0d0d0d]">{sectionAccuracy}%</p>
                <p className="mt-1 text-xs text-[#6b7280]">{stats?.totalQuestions ?? 0} questions practiced</p>
                <div className="mt-3 flex items-center gap-1 text-xs font-medium text-[#374151] group-hover:text-[#0d0d0d]">
                  Review {SECTION_SHORT_LABELS[section]}
                  <ArrowRightIcon className="h-3 w-3" />
                </div>
              </button>
            );
          })}
        </div>

        {/* ── Weak Areas ── */}
        {weakThemes.length > 0 && (
          <div className="mb-8 rounded-xl border border-[#e5e7eb] bg-white p-6 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-[#0d0d0d]">Weak Areas</h2>
              <button
                onClick={() => router.push("/review")}
                className="text-sm font-medium text-[#6b7280] hover:text-[#0d0d0d] transition-colors"
              >
                View all &rarr;
              </button>
            </div>
            <div className="space-y-3">
              {weakThemes.map(({ theme, accuracy: themeAcc, correct, total }) => (
                <button
                  key={theme}
                  onClick={() => router.push(`/practice?themes=${theme}`)}
                  className="w-full text-left group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-[#374151] group-hover:text-[#0d0d0d] transition-colors">
                      {THEME_LABELS[theme as keyof typeof THEME_LABELS] ?? theme}
                    </span>
                    <span className="text-xs text-[#9ca3af]">{correct}/{total} correct</span>
                  </div>
                  <div className="h-2 rounded-full bg-[#f3f4f6]">
                    <div
                      className="h-2 rounded-full transition-all duration-500"
                      style={{
                        width: `${themeAcc}%`,
                        backgroundColor: themeAcc < 40 ? "#ef4444" : themeAcc < 60 ? "#f59e0b" : themeAcc < 80 ? "#6b7280" : "#0d0d0d",
                      }}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── Recent Sessions ── */}
        {recentSessions.length > 0 && (
          <div className="mb-8 rounded-xl border border-[#e5e7eb] bg-white p-6 animate-fade-in">
            <h2 className="text-lg font-bold text-[#0d0d0d] mb-4">Recent Sessions</h2>
            <div className="divide-y divide-[#f3f4f6]">
              {recentSessions.map((session) => {
                const pct = session.total > 0 ? Math.round((session.score / session.total) * 100) : 0;
                return (
                  <div key={session.id} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-[#9ca3af] w-16 shrink-0">{formatRelativeTime(session.timestamp)}</span>
                      {session.section && (
                        <span className="rounded-md bg-[#f3f4f6] px-2 py-0.5 text-xs font-medium text-[#374151]">
                          {SECTION_SHORT_LABELS[session.section]}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-[#6b7280]">
                        {session.score}/{session.total}
                      </span>
                      <span className={`text-sm font-bold ${pct >= 80 ? "text-[#0d0d0d]" : pct >= 60 ? "text-[#6b7280]" : "text-[#ef4444]"}`}>
                        {pct}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Study Plan Progress ── */}
        {studyPlan && !planLoading && (
          <div className="mb-8 rounded-xl border border-[#e5e7eb] bg-white p-6 animate-fade-in">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold text-[#0d0d0d]">Study Plan</h2>
              <button
                onClick={() => router.push("/study-plan")}
                className="text-sm font-medium text-[#6b7280] hover:text-[#0d0d0d] transition-colors"
              >
                View plan &rarr;
              </button>
            </div>
            <div className="h-2 rounded-full bg-[#f3f4f6] overflow-hidden">
              <div
                className="h-full rounded-full bg-[#0d0d0d] transition-all duration-700 ease-out"
                style={{ width: `${planProgress}%` }}
              />
            </div>
            <p className="mt-2 text-sm text-[#6b7280]">
              {studyPlan.recommendedChapters.filter((ch) => ch.completed).length} of{" "}
              {studyPlan.recommendedChapters.length} chapters completed
            </p>
          </div>
        )}

        {/* ── Quick Actions ── */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 animate-fade-in">
          <button
            onClick={() => router.push("/learn")}
            className="flex items-center gap-3 rounded-xl border border-[#e5e7eb] bg-white px-5 py-4 text-left hover:bg-[#fafafa] transition-colors"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f3f4f6]">
              <LearnIcon className="h-5 w-5 text-[#374151]" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#0d0d0d]">Continue Learning</p>
              <p className="text-xs text-[#6b7280]">Pick up where you left off</p>
            </div>
          </button>
          <button
            onClick={() => router.push("/practice")}
            className="flex items-center gap-3 rounded-xl border border-[#e5e7eb] bg-white px-5 py-4 text-left hover:bg-[#fafafa] transition-colors"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f3f4f6]">
              <PracticeIcon className="h-5 w-5 text-[#374151]" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#0d0d0d]">Quick Practice</p>
              <p className="text-xs text-[#6b7280]">Random questions, all sections</p>
            </div>
          </button>
          <button
            onClick={() => router.push("/mock")}
            className="flex items-center gap-3 rounded-xl border border-[#e5e7eb] bg-white px-5 py-4 text-left hover:bg-[#fafafa] transition-colors"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f3f4f6]">
              <svg className="h-5 w-5 text-[#374151]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-[#0d0d0d]">Mock Exam</p>
              <p className="text-xs text-[#6b7280]">Full timed GMAT simulation</p>
            </div>
          </button>
          <button
            onClick={() => {
              if (window.confirm("Retaking the diagnostic will generate a new study plan, replacing your current one. Your history is preserved. Continue?")) {
                router.push("/diagnostic");
              }
            }}
            className="flex items-center gap-3 rounded-xl border border-[#e5e7eb] bg-white px-5 py-4 text-left hover:bg-[#fafafa] transition-colors"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f3f4f6]">
              <DiagnosticIcon className="h-5 w-5 text-[#374151]" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#0d0d0d]">Retake Diagnostic</p>
              <p className="text-xs text-[#6b7280]">Reassess and update study plan</p>
            </div>
          </button>
        </div>

      </div>
    </main>
  );
}
