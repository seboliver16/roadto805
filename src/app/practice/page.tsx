"use client";

import { useState, useEffect, useCallback, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { allQuestions } from "@/data/questions";
import { Question, Section, ThemeCategory, THEME_CATEGORIES, SECTION_LABELS } from "@/types";
import { createSession, updateSession, saveAttempt, updateProfileStats } from "@/lib/store";
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

function PracticeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user, loading } = useAuth();

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

  useEffect(() => {
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
  }, [category, themes, sectionParam]);

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

  // Warn on accidental navigation
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

  if (!user || sessionQuestions.length === 0) {
    return <PageSkeleton label="Loading questions..." />;
  }
  if (finished) return <PageSkeleton label="Loading results..." />;
  if (!currentQuestion) return null;

  return (
    <div className="min-h-screen">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
          <button
            onClick={() => {
              if (window.confirm("Leave this session? Your progress will be lost.")) {
                router.push("/");
              }
            }}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            &larr; Exit
          </button>
          <div className="flex items-center gap-2">
            <Badge variant={currentQuestion.section === "quant" ? "blue" : currentQuestion.section === "verbal" ? "green" : "purple"}>
              {SECTION_LABELS[currentQuestion.section]}
            </Badge>
            <span className="text-sm font-medium text-gray-600">
              {currentIndex + 1} / {sessionQuestions.length}
            </span>
          </div>
          <div className="flex items-center gap-0.5 w-32">
            {sessionQuestions.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                  i < currentIndex ? "bg-blue-600" : i === currentIndex ? "bg-blue-400" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-8">
        <div key={currentIndex} className="animate-slide-up">
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
          />

          <div className="mt-4">
            {!showResult ? (
              <button
                onClick={handleSubmit}
                disabled={selectedAnswer === null || (isTPA && selectedAnswerB === null)}
                className="w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white shadow-md hover:bg-blue-700 transition-colors btn-press disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white shadow-md hover:bg-blue-700 transition-colors btn-press"
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
