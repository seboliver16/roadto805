"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { getSession } from "@/lib/store";
import { PracticeSession, THEME_LABELS, Theme, Section, SECTION_LABELS, SECTION_COLORS } from "@/types";
import { questionMap } from "@/data/questions";
import { PageSkeleton } from "@/components/loading-skeleton";
import { ProgressRing } from "@/components/progress-ring";

function ResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const sessionId = searchParams.get("session");

  const [session, setSession] = useState<PracticeSession | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) router.push("/");
  }, [user, authLoading, router]);

  useEffect(() => {
    if (!sessionId || !user) return;
    getSession(sessionId).then((s) => {
      setSession(s);
      setLoading(false);
    });
  }, [sessionId, user]);

  if (!user || loading || !session) {
    return <PageSkeleton label="Loading results..." />;
  }

  const percentage = Math.round((session.score / session.total) * 100);

  // Section breakdown if available
  const sectionBreakdown = session.sectionBreakdown;

  // Find weak themes (< 75% accuracy)
  const weakThemes = Object.entries(session.themeBreakdown)
    .filter(([, data]) => data.correct / data.total < 0.75)
    .sort(([, a], [, b]) => a.correct / a.total - b.correct / b.total);

  const strongThemes = Object.entries(session.themeBreakdown)
    .filter(([, data]) => data.correct / data.total >= 0.75);

  // Get missed question count
  const missedCount = session.questionIds.filter((qId) => {
    const q = questionMap[qId];
    return q && session.answers[qId] !== q.correctAnswer;
  }).length;

  return (
    <div className="min-h-screen">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
          <button onClick={() => router.push("/")} className="text-sm text-gray-500 hover:text-gray-700">
            &larr; Home
          </button>
          <h1 className="text-lg font-semibold">Session Results</h1>
          <div />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-8">
        {/* Score */}
        <div className="mb-8 rounded-xl bg-white p-8 shadow-sm border text-center">
          <ProgressRing
            percent={percentage}
            size={120}
            strokeWidth={8}
            color={percentage >= 75 ? "text-green-600" : percentage >= 50 ? "text-yellow-600" : "text-red-600"}
          />
          <p className="mt-4 text-gray-500">
            {session.score} out of {session.total} correct
          </p>
        </div>

        {/* Section Breakdown */}
        {sectionBreakdown && (
          <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {(["quant", "verbal", "data-insights"] as Section[]).map((section) => {
              const data = sectionBreakdown[section];
              if (!data || data.total === 0) return null;
              const pct = Math.round((data.score / data.total) * 100);
              const colors = SECTION_COLORS[section];
              return (
                <div key={section} className={`rounded-xl ${colors.bg} border ${colors.border} p-4 text-center`}>
                  <p className={`text-sm font-medium ${colors.text}`}>{SECTION_LABELS[section]}</p>
                  <p className="text-2xl font-bold">{pct}%</p>
                  <p className="text-xs text-gray-500">{data.score}/{data.total}</p>
                </div>
              );
            })}
          </div>
        )}

        {/* Weak Themes */}
        {weakThemes.length > 0 && (
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-red-700">Needs Work</h2>
            <div className="space-y-3">
              {weakThemes.map(([theme, data]) => {
                const pct = Math.round((data.correct / data.total) * 100);
                return (
                  <div key={theme} className="rounded-lg bg-white p-4 shadow-sm border">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{THEME_LABELS[theme as Theme] || theme}</span>
                      <span className="text-sm text-red-600 font-semibold">{pct}% ({data.correct}/{data.total})</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-gray-100">
                      <div className="h-2 rounded-full bg-red-500 transition-all" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Strong Themes */}
        {strongThemes.length > 0 && (
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold text-green-700">Strong Areas</h2>
            <div className="flex flex-wrap gap-2">
              {strongThemes.map(([theme]) => (
                <span key={theme} className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                  {THEME_LABELS[theme as Theme] || theme}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="space-y-3">
          {missedCount > 0 && (
            <button
              onClick={() => router.push(`/review?session=${sessionId}`)}
              className="w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white shadow-md hover:bg-blue-700 transition-colors"
            >
              Review Missed Questions ({missedCount})
            </button>
          )}
          {weakThemes.length > 0 && (
            <button
              onClick={() => {
                const themeList = weakThemes.map(([t]) => t).join(",");
                router.push(`/practice?themes=${themeList}`);
              }}
              className="w-full rounded-xl border-2 border-blue-600 bg-white py-4 text-lg font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Drill Weak Themes
            </button>
          )}
          <button
            onClick={() => router.push("/practice")}
            className="w-full rounded-xl border border-gray-300 bg-white py-4 text-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            New Practice Session
          </button>
        </div>
      </main>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<PageSkeleton label="Loading results..." />}>
      <ResultsContent />
    </Suspense>
  );
}
