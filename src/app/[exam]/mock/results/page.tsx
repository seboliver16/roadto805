"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { getSession } from "@/lib/store";
import { PracticeSession } from "@/types";
import { PageSkeleton } from "@/components/loading-skeleton";
import { ProgressRing } from "@/components/progress-ring";
import { useExam } from "@/exams/exam-context";
import { questionMap } from "@/data/questions";

function MockResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user, profile, loading: authLoading } = useAuth();
  const exam = useExam();
  const sessionId = searchParams.get("session");
  const awaScoreParam = searchParams.get("awa");
  const basePath = `/${exam.slug}`;

  const [session, setSession] = useState<PracticeSession | null>(null);
  const [loading, setLoading] = useState(true);

  const firstName = (profile?.displayName ?? user?.displayName ?? "").split(" ")[0] || "";

  useEffect(() => {
    if (!sessionId) return;
    getSession(sessionId)
      .then(setSession)
      .finally(() => setLoading(false));
  }, [sessionId]);

  useEffect(() => {
    if (!authLoading && !user) router.push("/");
  }, [user, authLoading, router]);

  if (loading || !session) {
    return <PageSkeleton label="Loading results..." />;
  }

  // Build default section breakdown from exam config
  const defaultBreakdown: Record<string, { score: number; total: number }> = {};
  for (const s of exam.sections) {
    defaultBreakdown[s.id] = { score: 0, total: 0 };
  }
  const sectionBreakdown = session.sectionBreakdown ?? defaultBreakdown;

  const overallPercent = session.total > 0 ? Math.round((session.score / session.total) * 100) : 0;
  const estimated = exam.estimateScore(sectionBreakdown);

  // Build question type breakdown from session questions
  const questionTypeBreakdown: Record<string, { correct: number; total: number }> = {};
  for (const qId of session.questionIds) {
    const q = questionMap[qId];
    if (!q) continue;
    const userAns = session.answers[qId];
    const isCorrect = userAns === q.correctAnswer;
    const typeKey = q.type;
    if (!questionTypeBreakdown[typeKey]) questionTypeBreakdown[typeKey] = { correct: 0, total: 0 };
    questionTypeBreakdown[typeKey].total++;
    if (isCorrect) questionTypeBreakdown[typeKey].correct++;
  }

  // Detect adaptive difficulty tiers from subsection data
  const hasSubsections = "verbal-1" in sectionBreakdown || "quant-1" in sectionBreakdown;
  const isGre = exam.slug === "gre";

  // For GRE: only show Verbal + Quant as scored sections (AWA is separate)
  const scoredSections = exam.sections.filter(s => s.id !== "awa");

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      {/* Hero */}
      <div className="text-center mb-10 animate-fade-in">
        <p className="text-sm text-[#6b7280] mb-2">Mock Exam Complete</p>
        <h1 className="text-4xl font-bold text-[#0d0d0d] mb-2">
          {firstName ? `${firstName}, your` : "Your"} estimated score
        </h1>
        <div className="mt-6 flex justify-center">
          <div className="relative">
            <ProgressRing percent={(estimated.total - exam.scoreRange.min) / (exam.scoreRange.max - exam.scoreRange.min) * 100} size={140} strokeWidth={10} color="text-[#0d0d0d]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-[#0d0d0d]">{estimated.total}</span>
              <span className="text-xs text-[#6b7280]">{exam.scoreRange.label}</span>
            </div>
          </div>
        </div>
        <p className="mt-4 text-[#374151]">
          {session.score} out of {session.total} correct ({overallPercent}%)
        </p>
      </div>

      {/* Section Scores (V + Q) */}
      <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in">
        {scoredSections.map((sec) => {
          const data = sectionBreakdown[sec.id] ?? { score: 0, total: 0 };
          const percent = data.total > 0 ? Math.round((data.score / data.total) * 100) : 0;
          const sectionScore = estimated.sections[sec.id] ?? (exam.sectionScoreRange?.min ?? 0);
          const diffTier = (estimated as { difficultyTiers?: Record<string, string> }).difficultyTiers?.[sec.id];
          const colors = exam.sectionColors[sec.id];

          return (
            <div key={sec.id} className={`rounded-xl border bg-white p-5 text-center ${colors?.border ?? "border-[#e5e7eb]"}`}>
              <p className="text-sm font-medium text-[#374151] mb-1">{sec.label}</p>
              {diffTier && (
                <p className="mb-3 text-xs font-medium">
                  Section 2 difficulty:{" "}
                  <span className={`rounded-full px-2 py-0.5 ${
                    diffTier === "hard" ? "bg-red-50 text-red-700" :
                    diffTier === "medium" ? "bg-yellow-50 text-yellow-700" :
                    "bg-green-50 text-green-700"
                  }`}>
                    {diffTier.charAt(0).toUpperCase() + diffTier.slice(1)}
                  </span>
                </p>
              )}
              <p className="text-4xl font-bold text-[#0d0d0d] mb-1">{sectionScore}</p>
              <p className="text-sm text-[#6b7280]">out of 170</p>
              <p className="mt-2 text-xs text-[#9ca3af]">
                {data.score}/{data.total} correct ({percent}%)
              </p>
            </div>
          );
        })}
      </div>

      {/* AWA Score (separate from V+Q total) */}
      {isGre && (
        <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-5 text-center animate-fade-in">
          <p className="text-sm font-medium text-amber-700 mb-1">Analytical Writing</p>
          <p className="text-2xl font-bold text-amber-800">
            {awaScoreParam ? parseFloat(awaScoreParam).toFixed(1) : "—"}
          </p>
          <p className="text-sm text-amber-600">out of 6.0</p>
          <p className="mt-1 text-xs text-amber-500">Scored separately — not included in 260–340 total</p>
        </div>
      )}

      {/* Subsection Breakdown (GRE adaptive) */}
      {isGre && hasSubsections && (
        <div className="mb-8 rounded-xl border border-[#e5e7eb] bg-white p-6 animate-fade-in">
          <h2 className="text-lg font-bold text-[#0d0d0d] mb-4">Section Breakdown</h2>
          <div className="grid grid-cols-2 gap-4">
            {exam.mockSections.map((cfg, i) => {
              const key = cfg.subsection ? `${cfg.section}-${cfg.subsection}` : cfg.section;
              const data = sectionBreakdown[key] ?? { score: 0, total: 0 };
              const percent = data.total > 0 ? Math.round((data.score / data.total) * 100) : 0;
              const isWeak = percent < 60;

              return (
                <div key={`${cfg.section}-${i}`} className="rounded-lg border border-[#e5e7eb] p-3">
                  <p className="text-xs font-medium text-[#6b7280] mb-1">{cfg.label}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 rounded-full bg-gray-100 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${isWeak ? "bg-red-500" : "bg-green-500"}`}
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                    <span className={`text-sm font-bold ${isWeak ? "text-red-600" : "text-green-600"}`}>
                      {data.score}/{data.total}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Question Type Breakdown */}
      {Object.keys(questionTypeBreakdown).length > 0 && (
        <div className="mb-8 rounded-xl border border-[#e5e7eb] bg-white p-6 animate-fade-in">
          <h2 className="text-lg font-bold text-[#0d0d0d] mb-4">Question Type Breakdown</h2>
          <div className="space-y-3">
            {Object.entries(questionTypeBreakdown)
              .sort(([, a], [, b]) => (a.total > 0 ? a.correct / a.total : 0) - (b.total > 0 ? b.correct / b.total : 0))
              .map(([type, data]) => {
                const percent = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
                const isWeak = percent < 75;
                return (
                  <div key={type} className="flex items-center gap-3">
                    <span className="w-44 text-sm text-[#374151] truncate">
                      {exam.questionTypes[type] ?? type}
                    </span>
                    <div className="flex-1 h-2 rounded-full bg-gray-100 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${isWeak ? "bg-red-500" : "bg-green-500"}`}
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                    <span className={`w-16 text-right text-sm font-medium ${isWeak ? "text-red-600" : "text-green-600"}`}>
                      {data.correct}/{data.total} ({percent}%)
                    </span>
                  </div>
                );
              })}
          </div>
        </div>
      )}

      {/* Topic Breakdown */}
      {Object.keys(session.themeBreakdown).length > 0 && (
        <div className="mb-8 rounded-xl border border-[#e5e7eb] bg-white p-6 animate-fade-in">
          <h2 className="text-lg font-bold text-[#0d0d0d] mb-4">Topic Breakdown</h2>
          <div className="space-y-3">
            {Object.entries(session.themeBreakdown)
              .sort(([, a], [, b]) => (a.total > 0 ? a.correct / a.total : 0) - (b.total > 0 ? b.correct / b.total : 0))
              .map(([theme, data]) => {
                const percent = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
                const isWeak = percent < 75;
                return (
                  <div key={theme} className="flex items-center gap-3">
                    <span className="w-44 text-sm text-[#374151] truncate">
                      {exam.themes[theme] ?? theme}
                    </span>
                    <div className="flex-1 h-2 rounded-full bg-gray-100 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${isWeak ? "bg-red-500" : "bg-green-500"}`}
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                    <span className={`w-12 text-right text-sm font-medium ${isWeak ? "text-red-600" : "text-green-600"}`}>
                      {percent}%
                    </span>
                  </div>
                );
              })}
          </div>
        </div>
      )}

      {/* Score interpretation */}
      <div className="mb-8 rounded-xl border border-[#e5e7eb] bg-[#fafafa] p-6 animate-fade-in">
        <h3 className="text-sm font-semibold text-[#0d0d0d] mb-2">About this estimate</h3>
        <p className="text-sm text-[#6b7280] leading-relaxed">
          {isGre ? (
            <>
              This estimate uses a non-linear score conversion that accounts for the adaptive difficulty
              of your Section 2. A harder Section 2 gives access to higher scores. The real GRE uses
              a similar section-level adaptive mechanism.
            </>
          ) : (
            <>
              This is a rough estimate based on your accuracy across all sections.
              The real {exam.shortName} uses adaptive question selection which affects scoring.
              Use this as a directional indicator, not an exact prediction.
            </>
          )}
        </p>
      </div>

      {/* Actions */}
      <div className="space-y-3 animate-fade-in">
        <button
          onClick={() => router.push(`${basePath}/practice?mode=review`)}
          className="w-full rounded-xl bg-[#0d0d0d] py-3.5 text-base font-semibold text-white hover:bg-[#1a1a1a] transition-colors"
        >
          Review Missed Questions
        </button>
        <button
          onClick={() => router.push(`${basePath}/mock`)}
          className="w-full rounded-xl border border-[#e5e7eb] bg-white py-3 text-base font-medium text-[#0d0d0d] hover:bg-[#fafafa] transition-colors"
        >
          Take Another Mock Exam
        </button>
        <button
          onClick={() => router.push(`${basePath}/dashboard`)}
          className="w-full rounded-xl border border-[#e5e7eb] bg-white py-3 text-base font-medium text-[#6b7280] hover:bg-[#fafafa] transition-colors"
        >
          Back to Dashboard
        </button>
      </div>
    </main>
  );
}

export default function MockResultsPage() {
  return (
    <Suspense fallback={<PageSkeleton label="Loading results..." />}>
      <MockResultsContent />
    </Suspense>
  );
}
