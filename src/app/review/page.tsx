"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { getSession, getUserAttempts } from "@/lib/store";
import { questions } from "@/data/questions";
import { Question, Theme, THEME_LABELS } from "@/types";
import { generateWalkthrough, generateThemeSummary } from "@/lib/gemini";
import { PageSkeleton } from "@/components/loading-skeleton";
import { Markdown } from "@/components/markdown";

interface ReviewItem {
  question: Question;
  userAnswer: number;
}

function ReviewContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();

  const sessionId = searchParams.get("session");

  const [reviewItems, setReviewItems] = useState<ReviewItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [walkthroughs, setWalkthroughs] = useState<Record<number, { content: string; error: boolean }>>({});
  const [themeSummary, setThemeSummary] = useState<string>("");
  const [showThemeSummary, setShowThemeSummary] = useState(true);
  const [weakThemes, setWeakThemes] = useState<Theme[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    async function loadReview() {
      if (sessionId) {
        // Review from specific session
        const session = await getSession(sessionId);
        if (!session) return;

        const items: ReviewItem[] = [];
        session.questionIds.forEach((qId) => {
          const q = questions.find((x) => x.id === qId);
          if (q && session.answers[qId] !== q.correctAnswer) {
            items.push({ question: q, userAnswer: session.answers[qId] });
          }
        });
        setReviewItems(items);

        // Find weak themes from this session (< 75%)
        const weak = Object.entries(session.themeBreakdown)
          .filter(([, data]) => data.correct / data.total < 0.75)
          .map(([theme]) => theme as Theme);
        setWeakThemes(weak);
      } else {
        // General review — find weak themes from all attempts
        const attempts = await getUserAttempts(user!.uid, 200);
        const themeStats: Record<string, { correct: number; total: number }> = {};

        attempts.forEach((a) => {
          a.themes.forEach((theme) => {
            if (!themeStats[theme]) themeStats[theme] = { correct: 0, total: 0 };
            themeStats[theme].total++;
            if (a.correct) themeStats[theme].correct++;
          });
        });

        const weak = Object.entries(themeStats)
          .filter(([, data]) => data.correct / data.total < 0.75)
          .sort(([, a], [, b]) => a.correct / a.total - b.correct / b.total)
          .map(([theme]) => theme as Theme);

        setWeakThemes(weak);

        // Get recent wrong answers
        const wrongAttempts = attempts.filter((a) => !a.correct).slice(0, 10);
        const items: ReviewItem[] = wrongAttempts
          .map((a) => {
            const q = questions.find((x) => x.id === a.questionId);
            if (!q) return null;
            return { question: q, userAnswer: a.selectedAnswer };
          })
          .filter(Boolean) as ReviewItem[];

        setReviewItems(items);
      }
      setLoading(false);
    }

    loadReview();
  }, [user, sessionId]);

  const currentItem = reviewItems[currentIndex];

  useEffect(() => {
    if (!currentItem || walkthroughs[currentIndex]) return;
    let cancelled = false;
    generateWalkthrough(
      currentItem.question.text,
      currentItem.question.choices,
      currentItem.question.correctAnswer,
      currentItem.userAnswer,
      currentItem.question.explanation
    )
      .then((content) => {
        if (!cancelled) setWalkthroughs((prev) => ({ ...prev, [currentIndex]: { content, error: false } }));
      })
      .catch(() => {
        if (!cancelled) setWalkthroughs((prev) => ({ ...prev, [currentIndex]: { content: currentItem.question.explanation, error: true } }));
      });
    return () => { cancelled = true; };
  }, [currentItem, currentIndex, walkthroughs]);

  // Load theme summary when we first enter
  useEffect(() => {
    if (weakThemes.length === 0) return;
    const topWeakTheme = weakThemes[0];
    const missedForTheme = reviewItems
      .filter((item) => item.question.themes.includes(topWeakTheme))
      .map((item) => ({
        text: item.question.text,
        correctAnswer: item.question.choices[item.question.correctAnswer],
      }));

    if (missedForTheme.length > 0) {
      generateThemeSummary(THEME_LABELS[topWeakTheme], missedForTheme)
        .then(setThemeSummary)
        .catch(() => setThemeSummary(""));
    }
  }, [weakThemes, reviewItems]);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/");
    }
  }, [user, authLoading, router]);

  if (!user || loading) {
    return <PageSkeleton label="Loading review..." />;
  }

  if (reviewItems.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <p className="text-lg text-gray-600">No questions to review. Great job!</p>
        <button
          onClick={() => router.push("/")}
          className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
          <button onClick={() => router.push("/")} className="text-sm text-gray-500 hover:text-gray-700">
            &larr; Home
          </button>
          <h1 className="text-lg font-semibold">Review Mode</h1>
          <span className="text-sm text-gray-500">
            {currentIndex + 1} of {reviewItems.length}
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-8">
        {/* Weak themes banner -- always visible */}
        {weakThemes.length > 0 && (
          <div className="mb-6 rounded-xl bg-red-50 border border-red-200 p-5">
            <h3 className="font-semibold text-red-800 mb-2">Your Weak Areas</h3>
            <div className="flex flex-wrap gap-2">
              {weakThemes.map((theme) => (
                <span key={theme} className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-700">
                  {THEME_LABELS[theme]}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Theme summary -- collapsible */}
        {themeSummary && (
          <div className="mb-6 rounded-xl bg-blue-50 border border-blue-200">
            <button
              onClick={() => setShowThemeSummary((v) => !v)}
              className="flex w-full items-center justify-between p-5 text-left"
            >
              <h3 className="font-semibold text-blue-800">Theme Summary</h3>
              <span className="text-blue-600 text-sm">
                {showThemeSummary ? "Hide" : "Show"}
              </span>
            </button>
            {showThemeSummary && (
              <div className="px-5 pb-5">
                <Markdown className="text-blue-900">{themeSummary}</Markdown>
              </div>
            )}
          </div>
        )}

        {/* Question */}
        {currentItem && (
          <div key={currentIndex} className="animate-fade-in">
            <div className="mb-4 flex items-center gap-2">
              {currentItem.question.themes.map((theme) => (
                <span key={theme} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  {THEME_LABELS[theme]}
                </span>
              ))}
            </div>

            <div className="mb-6 rounded-xl bg-white p-6 shadow-sm border">
              <p className="text-lg leading-relaxed whitespace-pre-line">{currentItem.question.text}</p>
            </div>

            {/* Choices with correct/wrong highlights */}
            <div className="mb-6 space-y-3">
              {currentItem.question.choices.map((choice, i) => {
                let style = "border-gray-200 bg-white";
                if (i === currentItem.question.correctAnswer) {
                  style = "border-green-500 bg-green-50";
                } else if (i === currentItem.userAnswer) {
                  style = "border-red-500 bg-red-50";
                }

                return (
                  <div key={i} className={`rounded-lg border-2 ${style} p-4`}>
                    <span className="mr-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold">
                      {String.fromCharCode(65 + i)}
                    </span>
                    {choice}
                    {i === currentItem.question.correctAnswer && (
                      <span className="ml-2 text-green-600 text-sm font-medium">Correct</span>
                    )}
                    {i === currentItem.userAnswer && i !== currentItem.question.correctAnswer && (
                      <span className="ml-2 text-red-600 text-sm font-medium">Your answer</span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* AI Walkthrough */}
            {(() => {
              const cached = walkthroughs[currentIndex];
              const isLoading = !cached;
              return (
                <div className="mb-8 rounded-xl bg-amber-50 border border-amber-200 p-6">
                  <h3 className="font-semibold text-amber-800 mb-3">
                    {cached?.error ? "Explanation" : "Step-by-Step Walkthrough"}
                  </h3>
                  {cached?.error && (
                    <div className="mb-3 flex items-center gap-2 rounded-lg bg-amber-100 px-3 py-2 text-sm text-amber-700">
                      <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      AI walkthrough unavailable. Showing static explanation.
                    </div>
                  )}
                  {isLoading ? (
                    <div className="flex items-center gap-2 text-amber-700">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-amber-700 border-t-transparent" />
                      Generating personalized walkthrough...
                    </div>
                  ) : (
                    <Markdown className="text-amber-900">{cached.content}</Markdown>
                  )}
                </div>
              );
            })()}

            {/* Navigation */}
            <div className="flex gap-3">
              {currentIndex > 0 && (
                <button
                  onClick={() => setCurrentIndex((i) => i - 1)}
                  className="flex-1 rounded-xl border border-gray-300 bg-white py-4 text-lg font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Previous
                </button>
              )}
              {currentIndex < reviewItems.length - 1 ? (
                <button
                  onClick={() => setCurrentIndex((i) => i + 1)}
                  className="flex-1 rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white hover:bg-blue-700"
                >
                  Next Question
                </button>
              ) : (
                <button
                  onClick={() => {
                    const themeList = weakThemes.join(",");
                    router.push(`/practice?themes=${themeList}`);
                  }}
                  className="flex-1 rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white hover:bg-blue-700"
                >
                  Drill These Themes
                </button>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default function ReviewPage() {
  return (
    <Suspense fallback={<PageSkeleton label="Loading review..." />}>
      <ReviewContent />
    </Suspense>
  );
}
