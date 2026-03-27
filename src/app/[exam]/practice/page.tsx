"use client";

import { useState, useEffect, useCallback, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { useExam } from "@/exams/exam-context";
import { getExamQuestions } from "@/exams/registry";
import { Question, Section, Theme, ThemeCategory } from "@/types";
import { createSession, updateSession, saveAttempt, updateProfileStats, getUserAttempts } from "@/lib/store";
import { PageSkeleton } from "@/components/loading-skeleton";
import { QuestionRenderer } from "@/components/question-renderer";
import { Badge } from "@/components/badge";

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/** Build a smart review session from user's missed questions */
async function buildReviewSession(
  userId: string,
  sectionFilter: Section | null,
  examQuestions: Question[]
): Promise<Question[]> {
  const examQMap = Object.fromEntries(examQuestions.map((q) => [q.id, q]));
  const examQIds = new Set(examQuestions.map((q) => q.id));
  const attempts = await getUserAttempts(userId, 500);
  const now = Date.now();
  const DAY = 86_400_000;

  const missStats = new Map<string, { missCount: number; lastMissedAt: number; themes: Theme[] }>();
  for (const a of attempts) {
    if (a.correct) continue;
    if (!examQIds.has(a.questionId)) continue; // skip other exams
    const existing = missStats.get(a.questionId);
    if (existing) {
      existing.missCount++;
      existing.lastMissedAt = Math.max(existing.lastMissedAt, a.timestamp);
    } else {
      missStats.set(a.questionId, {
        missCount: 1,
        lastMissedAt: a.timestamp,
        themes: a.themes as Theme[],
      });
    }
  }

  if (missStats.size === 0) return [];

  const scored: { questionId: string; score: number }[] = [];
  for (const [qId, stats] of missStats) {
    const q = examQMap[qId];
    if (!q) continue;
    if (sectionFilter && q.section !== sectionFilter) continue;

    const ageMs = now - stats.lastMissedAt;
    let recencyBonus = 0;
    if (ageMs < DAY) recencyBonus = 5;
    else if (ageMs < 7 * DAY) recencyBonus = 3;
    else if (ageMs < 30 * DAY) recencyBonus = 1;

    scored.push({ questionId: qId, score: stats.missCount * 2 + recencyBonus });
  }

  scored.sort((a, b) => b.score - a.score);

  const selected = new Set<string>();
  const result: Question[] = [];
  for (const { questionId } of scored) {
    if (result.length >= 7) break;
    const q = examQMap[questionId];
    if (q) {
      result.push(q);
      selected.add(questionId);
    }
  }

  const themeFailCount = new Map<string, number>();
  for (const [, stats] of missStats) {
    for (const t of stats.themes) {
      themeFailCount.set(t, (themeFailCount.get(t) ?? 0) + stats.missCount);
    }
  }
  const weakThemes = [...themeFailCount.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([t]) => t);

  const themePool = examQuestions.filter((q) => {
    if (selected.has(q.id)) return false;
    if (sectionFilter && q.section !== sectionFilter) return false;
    return q.themes.some((t) => weakThemes.includes(t));
  });

  const shuffledPool = shuffleArray(themePool);
  for (const q of shuffledPool) {
    if (result.length >= 10) break;
    result.push(q);
    selected.add(q.id);
  }

  return shuffleArray(result);
}

/** Practice landing page — shown when no query params are set */
function PracticeLanding({ exam, basePath }: { exam: ReturnType<typeof useExam>; basePath: string }) {
  const router = useRouter();
  const examQuestions = getExamQuestions(exam.slug);

  // Count questions per section
  const sectionCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const q of examQuestions) {
      if (q.type === "analytical-writing") continue; // skip AWA
      counts[q.section] = (counts[q.section] || 0) + 1;
    }
    return counts;
  }, [examQuestions]);

  // Count questions per question type
  const typeCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const q of examQuestions) {
      if (q.type === "analytical-writing") continue;
      counts[q.type] = (counts[q.type] || 0) + 1;
    }
    return counts;
  }, [examQuestions]);

  const questionTypesBySection: Record<string, string[]> = useMemo(() => {
    const result: Record<string, string[]> = {};
    for (const [sectionId, types] of Object.entries(exam.questionTypesPerSection || {})) {
      if (sectionId === "awa") continue;
      result[sectionId] = types.filter((t: string) => t !== "analytical-writing");
    }
    return result;
  }, [exam]);

  const totalQuestions = Object.values(sectionCounts).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-bold text-[#0d0d0d]">Practice</h1>
        <p className="mt-2 text-[#6b7280]">Choose what to practice. Each session is 10 questions.</p>

        {/* Quick Start */}
        <div className="mt-8">
          <button
            onClick={() => router.push(`${basePath}/practice?start=1`)}
            className="w-full rounded-xl bg-[#0d0d0d] px-6 py-4 text-left hover:bg-[#1a1a1a] transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-white">Quick Start — All Topics</p>
                <p className="text-sm text-[#9ca3af]">10 random questions from the full question bank ({totalQuestions} questions)</p>
              </div>
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </button>
        </div>

        {/* Review Missed */}
        <div className="mt-4">
          <button
            onClick={() => router.push(`${basePath}/practice?mode=review`)}
            className="w-full rounded-xl border border-[#e5e7eb] bg-white px-6 py-4 text-left hover:bg-[#fafafa] transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-[#0d0d0d]">Review Missed Questions</p>
                <p className="text-sm text-[#6b7280]">Revisit questions you got wrong, weighted by recency and frequency</p>
              </div>
              <svg className="h-5 w-5 text-[#6b7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" />
              </svg>
            </div>
          </button>
        </div>

        {/* By Section */}
        {exam.sections
          .filter((s) => s.id !== "awa")
          .map((section) => (
          <div key={section.id} className="mt-8">
            <h2 className="text-lg font-bold text-[#0d0d0d] mb-3">{section.label}</h2>

            {/* Section-wide button */}
            <button
              onClick={() => router.push(`${basePath}/practice?section=${section.id}&start=1`)}
              className="w-full rounded-xl border border-[#e5e7eb] bg-white px-5 py-3.5 text-left hover:bg-[#fafafa] transition-colors mb-2"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#0d0d0d]">All {section.shortLabel}</p>
                  <p className="text-sm text-[#6b7280]">{sectionCounts[section.id] || 0} questions</p>
                </div>
                <svg className="h-4 w-4 text-[#9ca3af]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </button>

            {/* By question type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {(questionTypesBySection[section.id] || []).map((qType) => {
                const label = exam.questionTypes[qType] || qType;
                const count = typeCounts[qType] || 0;
                if (count === 0) return null;
                return (
                  <button
                    key={qType}
                    onClick={() => router.push(`${basePath}/practice?section=${section.id}&type=${qType}&start=1`)}
                    className="rounded-lg border border-[#e5e7eb] bg-white px-4 py-3 text-left hover:bg-[#fafafa] transition-colors"
                  >
                    <p className="font-medium text-sm text-[#0d0d0d]">{label}</p>
                    <p className="text-xs text-[#9ca3af]">{count} questions</p>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PracticeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user, profile, loading } = useAuth();
  const exam = useExam();
  const basePath = `/${exam.slug}`;
  const examQuestions = getExamQuestions(exam.slug);

  const mode = searchParams.get("mode");
  const category = searchParams.get("category") as ThemeCategory | null;
  const sectionParam = searchParams.get("section") as Section | null;
  const themesParam = searchParams.get("themes");
  const themes = useMemo(() => themesParam?.split(",") || [], [themesParam]);
  const startParam = searchParams.get("start");
  const typeParam = searchParams.get("type");

  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [answersB, setAnswersB] = useState<Record<string, number>>({});
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);
  const [reviewEmpty, setReviewEmpty] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showReview, setShowReview] = useState(false);

  // Show landing page if no params set
  const hasFilters = !!(mode || category || sectionParam || themesParam || startParam);

  // Standard mode: filter from exam question pool
  useEffect(() => {
    if (!hasFilters || mode === "review") return;
    let filtered = examQuestions.filter((q) => q.type !== "analytical-writing");

    if (sectionParam) {
      filtered = filtered.filter((q) => q.section === sectionParam);
    }

    if (typeParam) {
      filtered = filtered.filter((q) => q.type === typeParam);
    }

    if (category) {
      const categoryConfig = exam.themeCategories.find(c => c.id === category);
      if (categoryConfig) {
        const categoryThemes = categoryConfig.themes;
        filtered = filtered.filter((q) =>
          q.themes.some((t) => categoryThemes.includes(t))
        );
      }
    } else if (themes.length > 0) {
      filtered = filtered.filter((q) =>
        q.themes.some((t) => themes.includes(t))
      );
    }

    const selected = shuffleArray(filtered).slice(0, 10);
    setSessionQuestions(selected);
  }, [hasFilters, category, themes, sectionParam, typeParam, mode, exam]);

  // Review mode: smart question selection
  useEffect(() => {
    if (!hasFilters || mode !== "review" || !user) return;
    buildReviewSession(user.uid, sectionParam, examQuestions).then((questions) => {
      if (questions.length === 0) {
        setReviewEmpty(true);
      } else {
        setSessionQuestions(questions);
      }
    });
  }, [hasFilters, mode, user, sectionParam]);

  useEffect(() => {
    if (!hasFilters) return;
    if (user && sessionQuestions.length > 0 && !sessionId) {
      const sessionData: Parameters<typeof createSession>[0] = {
        userId: user.uid,
        sessionType: "practice",
        questionIds: sessionQuestions.map((q) => q.id),
        answers: {},
        score: 0,
        total: sessionQuestions.length,
        themeBreakdown: {},
        timestamp: Date.now(),
        completed: false,
        exam: exam.slug,
      };
      if (sectionParam) sessionData.section = sectionParam;
      createSession(sessionData).then(setSessionId);
    }
  }, [hasFilters, user, sessionQuestions, sessionId, sectionParam]);

  useEffect(() => {
    if (!hasFilters || sessionQuestions.length === 0 || finished) return;
    const handleBeforeUnload = (e: BeforeUnloadEvent) => { e.preventDefault(); };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [hasFilters, sessionQuestions.length, finished]);

  const currentQuestion = sessionQuestions[currentIndex];
  const isTPA = currentQuestion?.type === "two-part-analysis";

  // Derive selected answer from stored answers for the current question
  const selectedAnswer = currentQuestion ? (answers[currentQuestion.id] ?? null) : null;
  const selectedAnswerB = currentQuestion ? (answersB[currentQuestion.id] ?? null) : null;

  const answeredCount = sessionQuestions.filter((q) => answers[q.id] !== undefined).length;

  const getSectionLabel = (sectionId: string) =>
    exam.sections.find(s => s.id === sectionId)?.label || sectionId;

  const handleSelectAnswer = useCallback((index: number) => {
    if (!currentQuestion) return;
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: index }));
  }, [currentQuestion]);

  const handleSelectAnswerB = useCallback((index: number) => {
    if (!currentQuestion) return;
    setAnswersB((prev) => ({ ...prev, [currentQuestion.id]: index }));
  }, [currentQuestion]);

  const goTo = useCallback((index: number) => {
    if (index >= 0 && index < sessionQuestions.length) {
      setCurrentIndex(index);
    }
  }, [sessionQuestions.length]);

  const handleSubmitAll = useCallback(async () => {
    if (!user || !sessionId || submitting) return;
    setSubmitting(true);

    let score = 0;
    const themeBreakdown: Record<string, { correct: number; total: number }> = {};

    // Grade all questions and save attempts
    const attemptPromises = sessionQuestions.map((q) => {
      const userAns = answers[q.id];
      const userAnsB = answersB[q.id];
      const isCorrect = q.type === "two-part-analysis"
        ? userAns === q.correctAnswer && userAnsB === q.correctAnswerB
        : userAns === q.correctAnswer;

      if (isCorrect) score++;

      q.themes.forEach((theme) => {
        if (!themeBreakdown[theme]) themeBreakdown[theme] = { correct: 0, total: 0 };
        themeBreakdown[theme].total++;
        if (isCorrect) themeBreakdown[theme].correct++;
      });

      return saveAttempt({
        userId: user.uid,
        questionId: q.id,
        selectedAnswer: userAns ?? -1,
        correct: isCorrect,
        themes: q.themes,
        timestamp: Date.now(),
        sessionId,
        exam: exam.slug,
      });
    });

    await Promise.all(attemptPromises);

    await updateSession(sessionId, {
      answers,
      score,
      themeBreakdown,
      completed: true,
    });

    await updateProfileStats(user.uid, sessionQuestions.length, score);

    setFinished(true);
    router.push(`${basePath}/results?session=${sessionId}`);
  }, [user, sessionId, sessionQuestions, answers, answersB, submitting, router, basePath]);

  useEffect(() => {
    if (!loading && !user) router.push("/");
  }, [user, loading, router]);

  // Landing page (no filters selected) — rendered after all hooks
  if (!hasFilters) {
    return <PracticeLanding exam={exam} basePath={basePath} />;
  }

  // Review mode with no missed questions
  if (reviewEmpty) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-md text-center px-4">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#f3f4f6]">
            <svg className="h-7 w-7 text-[#9ca3af]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[#0d0d0d] mb-2">No missed questions yet</h2>
          <p className="text-[#6b7280] mb-6">Complete some practice sessions first, and we will build a personalized review from the questions you get wrong.</p>
          <button
            onClick={() => router.push(`${basePath}/practice`)}
            className="rounded-lg bg-[#0d0d0d] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a1a1a] transition-colors"
          >
            Start Practice Session
          </button>
        </div>
      </div>
    );
  }

  if (!user || sessionQuestions.length === 0) {
    return <PageSkeleton label={mode === "review" ? "Building your review session..." : "Loading questions..."} />;
  }
  if (finished) return <PageSkeleton label="Loading results..." />;
  if (!currentQuestion) return null;

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === sessionQuestions.length - 1;

  // === Review screen before submitting ===
  if (showReview) {
    const unansweredCount = sessionQuestions.length - answeredCount;
    return (
      <div className="min-h-screen bg-white">
        <header className="border-b border-[#e5e7eb] bg-white">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
            <h2 className="text-sm font-bold text-[#0d0d0d]">Review Before Submitting</h2>
            <span className="text-sm text-[#6b7280]">{answeredCount}/{sessionQuestions.length} answered</span>
          </div>
        </header>

        <main className="mx-auto max-w-3xl px-4 py-6">
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 mb-6">
            {sessionQuestions.map((q, i) => {
              const isAnswered = answers[q.id] !== undefined;
              return (
                <button
                  key={q.id}
                  onClick={() => { setCurrentIndex(i); setShowReview(false); }}
                  className={`flex h-10 w-full items-center justify-center rounded-lg text-xs font-bold border transition-colors
                    ${isAnswered
                      ? "border-[#e5e7eb] bg-[#0d0d0d] text-white"
                      : "border-[#e5e7eb] bg-white text-[#374151] hover:bg-[#fafafa]"
                    }`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>

          {unansweredCount > 0 && (
            <p className="mb-4 text-center text-sm text-amber-600 font-medium">
              {unansweredCount} question{unansweredCount !== 1 ? "s" : ""} unanswered
            </p>
          )}

          <div className="flex gap-3">
            <button
              onClick={() => setShowReview(false)}
              className="flex-1 rounded-xl border border-[#e5e7eb] bg-white py-3 text-sm font-semibold text-[#374151] hover:bg-[#fafafa] transition-colors"
            >
              Go Back
            </button>
            <button
              onClick={handleSubmitAll}
              disabled={submitting}
              className="flex-1 rounded-xl bg-[#0d0d0d] py-3 text-sm font-semibold text-white hover:bg-[#1a1a1a] transition-colors disabled:opacity-60"
            >
              {submitting ? "Grading..." : "Submit & Grade"}
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-[#e5e7eb]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <button
            onClick={() => {
              if (answeredCount === 0 || window.confirm("Leave this session? Unanswered questions will be lost.")) {
                router.push(`${basePath}/practice`);
              }
            }}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#e5e7eb] px-3 py-1.5 text-sm font-medium text-[#6b7280] hover:bg-[#fafafa] hover:text-[#0d0d0d] transition-colors"
          >
            &larr; Back to Practice
          </button>
          <div className="flex items-center gap-3">
            {mode === "review" && <Badge variant="yellow">Review</Badge>}
            <Badge variant={currentQuestion.section === "quant" ? "blue" : currentQuestion.section === "verbal" ? "green" : "purple"}>
              {getSectionLabel(currentQuestion.section)}
            </Badge>
            <span className="text-sm font-bold text-[#0d0d0d]">
              {currentIndex + 1}<span className="text-[#9ca3af] font-normal"> / {sessionQuestions.length}</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#6b7280]">
              {answeredCount}/{sessionQuestions.length}
            </span>
            <button
              onClick={() => setShowReview(true)}
              className="rounded-lg bg-[#0d0d0d] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#1a1a1a] transition-colors"
            >
              Review & Submit
            </button>
          </div>
        </div>

        {/* Clickable progress bar */}
        <div className="mx-auto max-w-5xl px-4 pb-2">
          <div className="flex items-center gap-1">
            {sessionQuestions.map((q, i) => {
              const isAnswered = answers[q.id] !== undefined;
              const isCurrent = i === currentIndex;
              return (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 flex-1 rounded-full transition-all duration-200 hover:opacity-80 ${
                    isCurrent
                      ? "bg-[#0d0d0d] scale-y-125"
                      : isAnswered
                        ? "bg-[#6b7280]"
                        : "bg-[#e5e7eb]"
                  }`}
                  title={`Question ${i + 1}${isAnswered ? " (answered)" : ""}`}
                />
              );
            })}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-4">
        <div key={currentIndex} className="animate-fade-in">
          <QuestionRenderer
            question={currentQuestion}
            selectedAnswer={selectedAnswer}
            selectedAnswerB={selectedAnswerB}
            showResult={false}
            onSelectAnswer={handleSelectAnswer}
            onSelectAnswerB={handleSelectAnswerB}
          />

          {/* Navigation */}
          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={() => goTo(currentIndex - 1)}
              disabled={isFirst}
              className="rounded-lg border border-[#e5e7eb] bg-white px-5 py-3 text-sm font-semibold text-[#374151] hover:bg-[#fafafa] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              &larr; Previous
            </button>

            <div className="flex-1" />

            {!isLast ? (
              <button
                onClick={() => goTo(currentIndex + 1)}
                className="rounded-lg bg-[#0d0d0d] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1a1a1a] transition-colors"
              >
                Next &rarr;
              </button>
            ) : (
              <button
                onClick={() => setShowReview(true)}
                className="rounded-lg bg-[#0d0d0d] px-8 py-3 text-sm font-semibold text-white hover:bg-[#1a1a1a] transition-colors"
              >
                Review & Submit
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default function PracticePage() {
  return (
    <Suspense fallback={<PageSkeleton label="Loading..." />}>
      <PracticeContent />
    </Suspense>
  );
}
