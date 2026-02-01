"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { getSession } from "@/lib/store";
import { PracticeSession, THEME_LABELS, Theme } from "@/types";
import { questions } from "@/data/questions";

function ResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const sessionId = searchParams.get("session");

  const [session, setSession] = useState<PracticeSession | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/");
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    if (!sessionId || !user) return;
    getSession(sessionId).then((s) => {
      setSession(s);
      setLoading(false);
    });
  }, [sessionId, user]);

  if (!user || loading || !session) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-pulse text-lg text-gray-500">Loading results...</div>
      </div>
    );
  }

  const percentage = Math.round((session.score / session.total) * 100);

  // Find weak themes (< 100% accuracy)
  const weakThemes = Object.entries(session.themeBreakdown)
    .filter(([, data]) => data.correct < data.total)
    .sort(([, a], [, b]) => a.correct / a.total - b.correct / b.total);

  const strongThemes = Object.entries(session.themeBreakdown)
    .filter(([, data]) => data.correct === data.total);

  // Get missed question IDs
  const missedQuestionIds = session.questionIds.filter((qId) => {
    const q = questions.find((x) => x.id === qId);
    return q && session.answers[qId] !== q.correctAnswer;
  });

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
          <div className={`text-6xl font-bold ${percentage >= 70 ? "text-green-600" : percentage >= 50 ? "text-yellow-600" : "text-red-600"}`}>
            {percentage}%
          </div>
          <p className="mt-2 text-gray-500">
            {session.score} out of {session.total} correct
          </p>
        </div>

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
                      <div
                        className="h-2 rounded-full bg-red-500 transition-all"
                        style={{ width: `${pct}%` }}
                      />
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
          {missedQuestionIds.length > 0 && (
            <button
              onClick={() => router.push(`/review?session=${sessionId}`)}
              className="w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white shadow-md hover:bg-blue-700 transition-colors"
            >
              Review Missed Questions ({missedQuestionIds.length})
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
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <div className="animate-pulse text-lg text-gray-500">Loading...</div>
        </div>
      }
    >
      <ResultsContent />
    </Suspense>
  );
}
