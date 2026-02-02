"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { getSession, createStudyPlan, updateProfile } from "@/lib/store";
import { generateStudyPlanFromDiagnostic } from "@/lib/diagnostic";
import { Section, SECTION_LABELS, THEME_LABELS, Theme, PracticeSession } from "@/types";
import { PageSkeleton } from "@/components/loading-skeleton";
import { ProgressRing } from "@/components/progress-ring";

function DiagnosticResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const sessionId = searchParams.get("session");

  const [session, setSession] = useState<PracticeSession | null>(null);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    if (!sessionId) return;
    getSession(sessionId)
      .then(setSession)
      .finally(() => setLoading(false));
  }, [sessionId]);

  useEffect(() => {
    if (!authLoading && !user) router.push("/");
  }, [user, authLoading, router]);

  const handleGeneratePlan = async () => {
    if (!user || !session || !sessionId) return;
    setGenerating(true);

    const sectionScores = session.sectionBreakdown ?? {
      quant: { score: 0, total: 0 },
      verbal: { score: 0, total: 0 },
      "data-insights": { score: 0, total: 0 },
    };

    const plan = generateStudyPlanFromDiagnostic(user.uid, sessionId, {
      sectionScores,
      themeBreakdown: session.themeBreakdown,
    });

    const planId = await createStudyPlan(plan);
    await updateProfile(user.uid, { currentStudyPlanId: planId });
    setGenerating(false);
    router.push("/study-plan");
  };

  if (loading || !session) {
    return <PageSkeleton label="Loading results..." />;
  }

  const sectionBreakdown: Partial<Record<Section, { score: number; total: number }>> = session.sectionBreakdown ?? {};
  const overallPercent = session.total > 0 ? Math.round((session.score / session.total) * 100) : 0;

  return (
    <main className="mx-auto max-w-3xl px-4 py-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#0d0d0d]">Diagnostic Results</h1>
        <p className="mt-2 text-[#374151]">
          You scored {session.score} out of {session.total} ({overallPercent}%)
        </p>
      </div>

      {/* Section Scores */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {(["quant", "verbal", "data-insights"] as Section[]).map((section) => {
          const data = sectionBreakdown[section] ?? { score: 0, total: 0 };
          const percent = data.total > 0 ? Math.round((data.score / data.total) * 100) : 0;

          return (
            <div key={section} className="rounded-lg bg-[#fafafa] border border-[#e5e7eb] p-5 text-center">
              <p className="text-sm font-medium text-[#374151] mb-3">{SECTION_LABELS[section]}</p>
              <div className="flex justify-center mb-2">
                <ProgressRing percent={percent} size={80} strokeWidth={6} color="text-[#0d0d0d]" />
              </div>
              <p className="text-sm text-[#6b7280]">
                {data.score} / {data.total} correct
              </p>
            </div>
          );
        })}
      </div>

      {/* Theme Breakdown */}
      <div className="mb-8 rounded-lg bg-white p-6 border border-[#e5e7eb]">
        <h2 className="text-lg font-semibold text-[#0d0d0d] mb-4">Topic Breakdown</h2>
        <div className="space-y-3">
          {Object.entries(session.themeBreakdown)
            .sort(([, a], [, b]) => (a.correct / a.total) - (b.correct / b.total))
            .map(([theme, data]) => {
              const percent = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
              const isWeak = percent < 75;
              return (
                <div key={theme} className="flex items-center gap-3">
                  <span className="w-40 text-sm text-[#374151] truncate">
                    {THEME_LABELS[theme as Theme] ?? theme}
                  </span>
                  <div className="flex-1 h-2 rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${isWeak ? "bg-red-500" : "bg-green-500"}`}
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

      {/* Generate Study Plan */}
      <button
        onClick={handleGeneratePlan}
        disabled={generating}
        className="w-full rounded-lg bg-[#0d0d0d] py-4 text-lg font-semibold text-white hover:bg-[#1a1a1a] transition-colors disabled:opacity-60"
      >
        {generating ? "Generating Study Plan..." : "Generate Personalized Study Plan"}
      </button>

      <button
        onClick={() => router.push("/dashboard")}
        className="mt-3 w-full rounded-lg border border-[#e5e7eb] bg-white py-3 text-base font-medium text-[#0d0d0d] hover:bg-[#fafafa] transition-colors"
      >
        Back to Home
      </button>
    </main>
  );
}

export default function DiagnosticResultsPage() {
  return (
    <Suspense fallback={<PageSkeleton label="Loading results..." />}>
      <DiagnosticResultsContent />
    </Suspense>
  );
}
