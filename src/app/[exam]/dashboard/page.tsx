"use client";

import { useEffect, useState, useMemo } from "react";
import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import { StudyPlan, UserAttempt, PracticeSession } from "@/types";
import { getUserStudyPlan, getUserAttempts, getUserSessions, updateProfile } from "@/lib/store";
import { getExamQuestions } from "@/exams/registry";
import { PageSkeleton } from "@/components/loading-skeleton";
import { ProgressRing } from "@/components/progress-ring";
import { DiagnosticIcon, LearnIcon, PracticeIcon, ReviewIcon, ArrowRightIcon } from "@/components/icons";
import { useExam } from "@/exams/exam-context";

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
  const exam = useExam();
  const [studyPlan, setStudyPlan] = useState<StudyPlan | null>(null);
  const [planLoading, setPlanLoading] = useState(false);
  const [attempts, setAttempts] = useState<UserAttempt[]>([]);
  const [recentSessions, setRecentSessions] = useState<PracticeSession[]>([]);

  const sectionLabels = Object.fromEntries(exam.sections.map((s) => [s.id, s.shortLabel]));
  const basePath = `/${exam.slug}`;
  const examQuestionIds = useMemo(() => new Set(getExamQuestions(exam.slug).map(q => q.id)), [exam.slug]);

  useEffect(() => {
    if (user) {
      refreshProfile();
      if (profile?.activeExam !== exam.slug) {
        updateProfile(user.uid, { activeExam: exam.slug });
      }
    }
  }, [user, refreshProfile, exam.slug, profile?.activeExam]);

  useEffect(() => {
    if (!user || !profile?.currentStudyPlanId) return;
    let cancelled = false;
    getUserStudyPlan(user.uid, exam.slug)
      .then((plan) => { if (!cancelled) setStudyPlan(plan); })
      .finally(() => { if (!cancelled) setPlanLoading(false); });
    return () => { cancelled = true; };
  }, [user, profile?.currentStudyPlanId]);

  useEffect(() => {
    if (!user) return;
    getUserAttempts(user.uid, 500).then((all) =>
      setAttempts(all.filter((a) => examQuestionIds.has(a.questionId)))
    );
    getUserSessions(user.uid, 20).then((all) =>
      setRecentSessions(all.filter((s) => s.questionIds?.some((qId) => examQuestionIds.has(qId))).slice(0, 5))
    );
  }, [user, examQuestionIds]);

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

  const mockSessions = useMemo(() => {
    return recentSessions.filter((s) => s.sessionType === "mock");
  }, [recentSessions]);

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
  const firstName = profile?.displayName?.split(" ")[0] ?? "";

  // === Pre-diagnostic state ===
  if (!hasDiagnostic) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-12 bg-white">
        <div className="animate-fade-in rounded-xl bg-white border border-[#e5e7eb] p-10 text-center">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#0d0d0d]">
            <DiagnosticIcon className="h-7 w-7 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-[#0d0d0d]">
            {firstName ? `Welcome, ${firstName}!` : `Welcome to ${exam.shortName}!`}
          </h2>
          <p className="mt-3 text-[#374151] max-w-lg mx-auto leading-relaxed">
            Start with a quick diagnostic to assess your strengths across all {exam.sections.length} {exam.shortName} sections.
            We&apos;ll create a personalized study plan from your results.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <div className="rounded-lg bg-[#fafafa] border border-[#e5e7eb] px-4 py-2.5 text-sm text-[#374151] font-medium">
              {exam.diagnosticQuestionsPerSection * exam.sections.length} questions
            </div>
            <div className="rounded-lg bg-[#fafafa] border border-[#e5e7eb] px-4 py-2.5 text-sm text-[#374151] font-medium">
              ~15 min
            </div>
          </div>
          <button
            onClick={() => router.push(`${basePath}/diagnostic`)}
            className="mt-8 rounded-xl px-10 py-4 text-lg font-semibold text-white bg-[#0d0d0d] hover:bg-[#1a1a1a] transition-colors"
          >
            Start Diagnostic
          </button>
        </div>

        {/* Quick access even without diagnostic */}
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 animate-fade-in">
          <button
            onClick={() => router.push(`${basePath}/mock`)}
            className="flex items-center gap-3 rounded-xl border border-[#e5e7eb] bg-white p-4 text-left hover:bg-[#fafafa] transition-colors"
          >
            <svg className="h-5 w-5 text-[#6b7280] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <div>
              <p className="text-sm font-semibold text-[#0d0d0d]">Take a Mock Exam</p>
              <p className="text-xs text-[#6b7280]">Full timed simulation</p>
            </div>
          </button>
          <button
            onClick={() => router.push(`${basePath}/practice`)}
            className="flex items-center gap-3 rounded-xl border border-[#e5e7eb] bg-white p-4 text-left hover:bg-[#fafafa] transition-colors"
          >
            <PracticeIcon className="h-5 w-5 text-[#6b7280] shrink-0" />
            <div>
              <p className="text-sm font-semibold text-[#0d0d0d]">Quick Practice</p>
              <p className="text-xs text-[#6b7280]">10 random questions</p>
            </div>
          </button>
          <button
            onClick={() => router.push(`${basePath}/learn`)}
            className="flex items-center gap-3 rounded-xl border border-[#e5e7eb] bg-white p-4 text-left hover:bg-[#fafafa] transition-colors"
          >
            <LearnIcon className="h-5 w-5 text-[#6b7280] shrink-0" />
            <div>
              <p className="text-sm font-semibold text-[#0d0d0d]">Learn Concepts</p>
              <p className="text-xs text-[#6b7280]">Browse chapters</p>
            </div>
          </button>
        </div>
      </main>
    );
  }

  // === Main dashboard (post-diagnostic) ===
  const sectionStats = profile?.sectionStats;
  const planProgress = studyPlan
    ? Math.round(
        (studyPlan.recommendedChapters.filter((ch) => ch.completed).length /
          studyPlan.recommendedChapters.length) *
          100
      )
    : 0;

  return (
    <main className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-8">

        {/* Header with stats */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-2xl font-bold text-[#0d0d0d]">
            {firstName ? `${firstName}'s Dashboard` : "Dashboard"}
          </h1>
          <p className="mt-1 text-sm text-[#6b7280]">{exam.name}</p>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-xl border border-[#e5e7eb] bg-white p-4 text-center">
              <p className="text-2xl font-bold text-[#0d0d0d]">{accuracy}%</p>
              <p className="text-xs text-[#6b7280]">Accuracy</p>
            </div>
            <div className="rounded-xl border border-[#e5e7eb] bg-white p-4 text-center">
              <p className="text-2xl font-bold text-[#0d0d0d]">{profile?.totalQuestions ?? 0}</p>
              <p className="text-xs text-[#6b7280]">Questions</p>
            </div>
            <div className="rounded-xl border border-[#e5e7eb] bg-white p-4 text-center">
              <p className="text-2xl font-bold text-[#0d0d0d]">{mockSessions.length}</p>
              <p className="text-xs text-[#6b7280]">Mock Exams</p>
            </div>
            <div className="rounded-xl border border-[#e5e7eb] bg-white p-4 text-center">
              <p className="text-2xl font-bold text-[#0d0d0d]">{planProgress}%</p>
              <p className="text-xs text-[#6b7280]">Study Plan</p>
            </div>
          </div>
        </div>

        {/* Primary Actions - the 6 core concepts */}
        <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 animate-fade-in">
          {/* Take a Mock Exam */}
          <button
            onClick={() => router.push(`${basePath}/mock`)}
            className="flex items-start gap-4 rounded-xl border border-[#e5e7eb] bg-white p-5 text-left hover:border-[#0d0d0d]/20 hover:shadow-sm transition-all group"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0d0d0d]">
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-[#0d0d0d]">Take a Mock Exam</p>
              <p className="mt-0.5 text-xs text-[#6b7280] leading-relaxed">
                Full timed {exam.shortName} simulation with {exam.mockSections.reduce((s, c) => s + c.questionCount, 0)} questions across {exam.sections.length} sections
              </p>
            </div>
            <ArrowRightIcon className="h-4 w-4 text-[#d1d5db] group-hover:text-[#0d0d0d] transition-colors shrink-0 mt-1" />
          </button>

          {/* Practice missed questions */}
          <button
            onClick={() => router.push(`${basePath}/practice?mode=review`)}
            className="flex items-start gap-4 rounded-xl border border-[#e5e7eb] bg-white p-5 text-left hover:border-[#0d0d0d]/20 hover:shadow-sm transition-all group"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0d0d0d]">
              <ReviewIcon className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-[#0d0d0d]">Practice Weak Areas</p>
              <p className="mt-0.5 text-xs text-[#6b7280] leading-relaxed">
                {missedCount > 0
                  ? `${missedCount} missed questions — practice weighted by weakness`
                  : "Complete sessions to build your review queue"}
              </p>
            </div>
            <ArrowRightIcon className="h-4 w-4 text-[#d1d5db] group-hover:text-[#0d0d0d] transition-colors shrink-0 mt-1" />
          </button>

          {/* Learn concepts */}
          <button
            onClick={() => router.push(`${basePath}/learn`)}
            className="flex items-start gap-4 rounded-xl border border-[#e5e7eb] bg-white p-5 text-left hover:border-[#0d0d0d]/20 hover:shadow-sm transition-all group"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f3f4f6]">
              <LearnIcon className="h-5 w-5 text-[#374151]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-[#0d0d0d]">Learn Concepts</p>
              <p className="mt-0.5 text-xs text-[#6b7280] leading-relaxed">
                Interactive lessons with practice questions for each topic
              </p>
            </div>
            <ArrowRightIcon className="h-4 w-4 text-[#d1d5db] group-hover:text-[#0d0d0d] transition-colors shrink-0 mt-1" />
          </button>

          {/* Practice sections */}
          <button
            onClick={() => router.push(`${basePath}/practice`)}
            className="flex items-start gap-4 rounded-xl border border-[#e5e7eb] bg-white p-5 text-left hover:border-[#0d0d0d]/20 hover:shadow-sm transition-all group"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f3f4f6]">
              <PracticeIcon className="h-5 w-5 text-[#374151]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-[#0d0d0d]">Practice by Section</p>
              <p className="mt-0.5 text-xs text-[#6b7280] leading-relaxed">
                Filter by {exam.sections.map(s => s.shortLabel).join(", ")} or specific topics
              </p>
            </div>
            <ArrowRightIcon className="h-4 w-4 text-[#d1d5db] group-hover:text-[#0d0d0d] transition-colors shrink-0 mt-1" />
          </button>

          {/* Review analytics */}
          <button
            onClick={() => router.push(`${basePath}/review`)}
            className="flex items-start gap-4 rounded-xl border border-[#e5e7eb] bg-white p-5 text-left hover:border-[#0d0d0d]/20 hover:shadow-sm transition-all group"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f3f4f6]">
              <svg className="h-5 w-5 text-[#374151]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-[#0d0d0d]">Review & Analytics</p>
              <p className="mt-0.5 text-xs text-[#6b7280] leading-relaxed">
                See what went well and wrong, track progress over time
              </p>
            </div>
            <ArrowRightIcon className="h-4 w-4 text-[#d1d5db] group-hover:text-[#0d0d0d] transition-colors shrink-0 mt-1" />
          </button>

          {/* Study guide */}
          <button
            onClick={() => router.push(`${basePath}/study-guide`)}
            className="flex items-start gap-4 rounded-xl border border-[#e5e7eb] bg-white p-5 text-left hover:border-[#0d0d0d]/20 hover:shadow-sm transition-all group"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f3f4f6]">
              <svg className="h-5 w-5 text-[#374151]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-[#0d0d0d]">Study Guide</p>
              <p className="mt-0.5 text-xs text-[#6b7280] leading-relaxed">
                Your saved notes, missed questions, and weakness drills
              </p>
            </div>
            <ArrowRightIcon className="h-4 w-4 text-[#d1d5db] group-hover:text-[#0d0d0d] transition-colors shrink-0 mt-1" />
          </button>
        </div>

        {/* Section Accuracy */}
        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3 animate-fade-in">
          {exam.sections.map((section) => {
            const stats = sectionStats?.[section.id];
            const sectionAccuracy = stats && stats.totalQuestions > 0
              ? Math.round((stats.totalCorrect / stats.totalQuestions) * 100)
              : 0;

            return (
              <button
                key={section.id}
                onClick={() => router.push(`${basePath}/practice?section=${section.id}`)}
                className="rounded-xl border border-[#e5e7eb] bg-white p-4 text-left hover:bg-[#fafafa] transition-colors group"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-semibold text-[#6b7280] uppercase tracking-wide">{section.shortLabel}</p>
                  <ProgressRing percent={sectionAccuracy} size={36} strokeWidth={3} showLabel={false} />
                </div>
                <p className="text-xl font-bold text-[#0d0d0d]">{sectionAccuracy}%</p>
                <p className="text-xs text-[#6b7280]">{stats?.totalQuestions ?? 0} practiced</p>
              </button>
            );
          })}
        </div>

        {/* Weak Areas */}
        {weakThemes.length > 0 && (
          <div className="mb-6 rounded-xl border border-[#e5e7eb] bg-white p-5 animate-fade-in">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-bold text-[#0d0d0d]">Focus Areas</h2>
              <button
                onClick={() => router.push(`${basePath}/review`)}
                className="text-xs font-medium text-[#6b7280] hover:text-[#0d0d0d] transition-colors"
              >
                Full analytics &rarr;
              </button>
            </div>
            <div className="space-y-2.5">
              {weakThemes.map(({ theme, accuracy: themeAcc, correct, total }) => (
                <button
                  key={theme}
                  onClick={() => router.push(`${basePath}/practice?themes=${theme}`)}
                  className="w-full text-left group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-[#374151] group-hover:text-[#0d0d0d] transition-colors">
                      {exam.themes[theme] ?? theme}
                    </span>
                    <span className="text-xs text-[#9ca3af]">{correct}/{total}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[#f3f4f6]">
                    <div
                      className="h-1.5 rounded-full transition-all duration-500"
                      style={{
                        width: `${themeAcc}%`,
                        backgroundColor: themeAcc < 40 ? "#ef4444" : themeAcc < 60 ? "#f59e0b" : "#6b7280",
                      }}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Recent Activity */}
        {recentSessions.length > 0 && (
          <div className="mb-6 rounded-xl border border-[#e5e7eb] bg-white p-5 animate-fade-in">
            <h2 className="text-sm font-bold text-[#0d0d0d] mb-3">Recent Activity</h2>
            <div className="divide-y divide-[#f3f4f6]">
              {recentSessions.map((session) => {
                const pct = session.total > 0 ? Math.round((session.score / session.total) * 100) : 0;
                const typeLabel = session.sessionType === "mock" ? "Mock" : session.sessionType === "diagnostic" ? "Diagnostic" : "Practice";
                return (
                  <div key={session.id} className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-[#9ca3af] w-14 shrink-0">{formatRelativeTime(session.timestamp)}</span>
                      <span className="rounded-md bg-[#f3f4f6] px-2 py-0.5 text-xs font-medium text-[#374151]">
                        {typeLabel}
                      </span>
                      {session.section && (
                        <span className="text-xs text-[#6b7280]">
                          {sectionLabels[session.section] || session.section}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#6b7280]">{session.score}/{session.total}</span>
                      <span className={`text-xs font-bold ${pct >= 80 ? "text-green-600" : pct >= 60 ? "text-[#6b7280]" : "text-red-500"}`}>
                        {pct}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Study Plan */}
        {studyPlan && !planLoading && (
          <div className="mb-6 rounded-xl border border-[#e5e7eb] bg-white p-5 animate-fade-in">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-bold text-[#0d0d0d]">Study Plan</h2>
              <button
                onClick={() => router.push(`${basePath}/study-plan`)}
                className="text-xs font-medium text-[#6b7280] hover:text-[#0d0d0d] transition-colors"
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
            <p className="mt-1.5 text-xs text-[#6b7280]">
              {studyPlan.recommendedChapters.filter((ch) => ch.completed).length} of{" "}
              {studyPlan.recommendedChapters.length} chapters completed
            </p>
          </div>
        )}

        {/* Retake Diagnostic */}
        <div className="animate-fade-in">
          <button
            onClick={() => {
              if (window.confirm("Retaking the diagnostic will generate a new study plan. Your history is preserved. Continue?")) {
                router.push(`${basePath}/diagnostic`);
              }
            }}
            className="text-xs text-[#9ca3af] hover:text-[#6b7280] transition-colors"
          >
            Retake diagnostic test &rarr;
          </button>
        </div>
      </div>
    </main>
  );
}
