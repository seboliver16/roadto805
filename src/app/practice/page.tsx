"use client";

import { useState, useEffect, useCallback, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { allQuestions } from "@/data/questions";
import { Question, Section, Theme, ThemeCategory, THEME_CATEGORIES, SECTION_LABELS } from "@/types";
import { createSession, updateSession, saveAttempt, updateProfileStats, getUserAttempts } from "@/lib/store";
import { PageSkeleton } from "@/components/loading-skeleton";
import { QuestionRenderer } from "@/components/question-renderer";
import { AiHelpButton } from "@/components/ai-help-button";
import { Badge } from "@/components/badge";

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const questionMap = new Map(allQuestions.map((q) => [q.id, q]));

/** Build a smart review session from user's missed questions */
async function buildReviewSession(
  userId: string,
  sectionFilter: Section | null
): Promise<Question[]> {
  const attempts = await getUserAttempts(userId, 500);
  const now = Date.now();
  const DAY = 86_400_000;

  // Build miss stats per question
  const missStats = new Map<string, { missCount: number; lastMissedAt: number; themes: Theme[] }>();
  for (const a of attempts) {
    if (a.correct) continue;
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

  // Score each missed question
  const scored: { questionId: string; score: number }[] = [];
  for (const [qId, stats] of missStats) {
    const q = questionMap.get(qId);
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

  // Take top missed questions (up to 7)
  const selected = new Set<string>();
  const result: Question[] = [];
  for (const { questionId } of scored) {
    if (result.length >= 7) break;
    const q = questionMap.get(questionId);
    if (q) {
      result.push(q);
      selected.add(questionId);
    }
  }

  // Collect weakest themes from missed questions
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

  // Fill remaining slots with same-theme questions not yet selected
  const themePool = allQuestions.filter((q) => {
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

function PracticeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user, profile, loading } = useAuth();
  const firstName = (profile?.displayName ?? user?.displayName ?? "").split(" ")[0] || undefined;

  const mode = searchParams.get("mode");
  const category = searchParams.get("category") as ThemeCategory | null;
  const sectionParam = searchParams.get("section") as Section | null;
  const themesParam = searchParams.get("themes");
  const themes = useMemo(() => themesParam?.split(",") || [], [themesParam]);

  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [selectedAnswerB, setSelectedAnswerB] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);
  const [reviewEmpty, setReviewEmpty] = useState(false);

  // Standard mode: filter from allQuestions
  useEffect(() => {
    if (mode === "review") return; // handled separately
    let filtered = allQuestions;

    if (sectionParam) {
      filtered = filtered.filter((q) => q.section === sectionParam);
    }

    if (category && THEME_CATEGORIES[category]) {
      const categoryThemes = THEME_CATEGORIES[category].themes;
      filtered = filtered.filter((q) =>
        q.themes.some((t) => categoryThemes.includes(t))
      );
    } else if (themes.length > 0) {
      filtered = filtered.filter((q) =>
        q.themes.some((t) => themes.includes(t))
      );
    }

    const selected = shuffleArray(filtered).slice(0, 10);
    setSessionQuestions(selected);
  }, [category, themes, sectionParam, mode]);

  // Review mode: smart question selection
  useEffect(() => {
    if (mode !== "review" || !user) return;
    buildReviewSession(user.uid, sectionParam).then((questions) => {
      if (questions.length === 0) {
        setReviewEmpty(true);
      } else {
        setSessionQuestions(questions);
      }
    });
  }, [mode, user, sectionParam]);

  useEffect(() => {
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
      };
      if (sectionParam) sessionData.section = sectionParam;
      createSession(sessionData).then(setSessionId);
    }
  }, [user, sessionQuestions, sessionId, sectionParam]);

  useEffect(() => {
    if (sessionQuestions.length === 0 || finished) return;
    const handleBeforeUnload = (e: BeforeUnloadEvent) => { e.preventDefault(); };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [sessionQuestions.length, finished]);

  const currentQuestion = sessionQuestions[currentIndex];
  const isTPA = currentQuestion?.type === "two-part-analysis";

  const handleSubmit = useCallback(async () => {
    if (selectedAnswer === null || !currentQuestion || !user || !sessionId) return;
    if (isTPA && selectedAnswerB === null) return;
    setShowResult(true);
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: selectedAnswer }));

    const isCorrect = isTPA
      ? selectedAnswer === currentQuestion.correctAnswer && selectedAnswerB === currentQuestion.correctAnswerB
      : selectedAnswer === currentQuestion.correctAnswer;

    await saveAttempt({
      userId: user.uid,
      questionId: currentQuestion.id,
      selectedAnswer,
      correct: isCorrect,
      themes: currentQuestion.themes,
      timestamp: Date.now(),
      sessionId,
    });
  }, [selectedAnswer, selectedAnswerB, currentQuestion, user, sessionId, isTPA]);

  const handleNext = useCallback(async () => {
    if (currentIndex < sessionQuestions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setSelectedAnswerB(null);
      setShowResult(false);
    } else {
      const finalAnswers = { ...answers };
      if (currentQuestion) finalAnswers[currentQuestion.id] = selectedAnswer!;

      let score = 0;
      const themeBreakdown: Record<string, { correct: number; total: number }> = {};

      sessionQuestions.forEach((q) => {
        const userAns = finalAnswers[q.id];
        const isCorrect = userAns === q.correctAnswer;
        if (isCorrect) score++;
        q.themes.forEach((theme) => {
          if (!themeBreakdown[theme]) themeBreakdown[theme] = { correct: 0, total: 0 };
          themeBreakdown[theme].total++;
          if (isCorrect) themeBreakdown[theme].correct++;
        });
      });

      if (sessionId) {
        await updateSession(sessionId, {
          answers: finalAnswers,
          score,
          themeBreakdown,
          completed: true,
        });
        await updateProfileStats(user!.uid, sessionQuestions.length, score);
      }

      setFinished(true);
      router.push(`/results?session=${sessionId}`);
    }
  }, [currentIndex, sessionQuestions, answers, currentQuestion, selectedAnswer, sessionId, user, router]);

  useEffect(() => {
    if (!loading && !user) router.push("/");
  }, [user, loading, router]);

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
            onClick={() => router.push("/practice")}
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

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-[#e5e7eb]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <button
            onClick={() => {
              if (window.confirm("Leave this session? Your progress will be lost.")) {
                router.push("/dashboard");
              }
            }}
            className="text-sm text-[#6b7280] hover:text-[#0d0d0d] font-medium transition-colors"
          >
            &larr; Exit
          </button>
          <div className="flex items-center gap-3">
            {mode === "review" && <Badge variant="yellow">Review</Badge>}
            <Badge variant={currentQuestion.section === "quant" ? "blue" : currentQuestion.section === "verbal" ? "green" : "purple"}>
              {SECTION_LABELS[currentQuestion.section]}
            </Badge>
            <span className="text-sm font-bold text-[#0d0d0d]">
              {currentIndex + 1}<span className="text-[#9ca3af] font-normal"> / {sessionQuestions.length}</span>
            </span>
          </div>
          <div className="flex items-center gap-1 w-36">
            {sessionQuestions.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                  i < currentIndex ? "bg-[#0d0d0d]" : i === currentIndex ? "bg-[#6b7280]" : "bg-[#e5e7eb]"
                }`}
              />
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-4">
        <div key={currentIndex} className="animate-fade-in">
          <QuestionRenderer
            question={currentQuestion}
            selectedAnswer={selectedAnswer}
            selectedAnswerB={selectedAnswerB}
            showResult={showResult}
            onSelectAnswer={setSelectedAnswer}
            onSelectAnswerB={setSelectedAnswerB}
          />

          <AiHelpButton
            key={`ai-${currentIndex}`}
            question={currentQuestion}
            showResult={showResult}
            selectedAnswer={selectedAnswer}
            userName={firstName}
          />

          <div className="mt-3">
            {!showResult ? (
              <button
                onClick={handleSubmit}
                disabled={selectedAnswer === null || (isTPA && selectedAnswerB === null)}
                className="w-full rounded-lg py-3 text-base font-semibold text-white bg-[#0d0d0d] hover:bg-[#1a1a1a] transition-colors disabled:bg-[#d1d5db] disabled:text-[#9ca3af] disabled:cursor-not-allowed"
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="w-full rounded-lg py-3 text-base font-semibold text-white bg-[#0d0d0d] hover:bg-[#1a1a1a] transition-colors"
              >
                {currentIndex < sessionQuestions.length - 1 ? "Next Question" : "See Results"}
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
