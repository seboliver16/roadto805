"use client";

import { useState, useEffect, useCallback, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { questions } from "@/data/questions";
import { Question, ThemeCategory, THEME_CATEGORIES } from "@/types";
import { createSession, updateSession, saveAttempt, updateProfileStats } from "@/lib/store";

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
  const { user } = useAuth();

  const category = searchParams.get("category") as ThemeCategory | null;
  const themesParam = searchParams.get("themes");
  const themes = useMemo(() => themesParam?.split(",") || [], [themesParam]);

  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let filtered = questions;

    if (category && THEME_CATEGORIES[category]) {
      const categoryThemes = THEME_CATEGORIES[category].themes;
      filtered = questions.filter((q) =>
        q.themes.some((t) => categoryThemes.includes(t))
      );
    } else if (themes.length > 0) {
      filtered = questions.filter((q) =>
        q.themes.some((t) => themes.includes(t))
      );
    }

    const selected = shuffleArray(filtered).slice(0, 10);
    setSessionQuestions(selected);
  }, [category, themes]);

  useEffect(() => {
    if (user && sessionQuestions.length > 0 && !sessionId) {
      createSession({
        userId: user.uid,
        questionIds: sessionQuestions.map((q) => q.id),
        answers: {},
        score: 0,
        total: sessionQuestions.length,
        themeBreakdown: {},
        timestamp: Date.now(),
        completed: false,
      }).then(setSessionId);
    }
  }, [user, sessionQuestions, sessionId]);

  const currentQuestion = sessionQuestions[currentIndex];

  const handleSubmit = useCallback(async () => {
    if (selectedAnswer === null || !currentQuestion || !user || !sessionId) return;

    const correct = selectedAnswer === currentQuestion.correctAnswer;
    setShowResult(true);
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: selectedAnswer }));

    await saveAttempt({
      userId: user.uid,
      questionId: currentQuestion.id,
      selectedAnswer,
      correct,
      themes: currentQuestion.themes,
      timestamp: Date.now(),
      sessionId,
    });
  }, [selectedAnswer, currentQuestion, user, sessionId]);

  const handleNext = useCallback(async () => {
    if (currentIndex < sessionQuestions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      // Finish session
      const finalAnswers = { ...answers };
      if (currentQuestion) {
        finalAnswers[currentQuestion.id] = selectedAnswer!;
      }

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

  if (!user) {
    router.push("/");
    return null;
  }

  if (sessionQuestions.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-pulse text-lg text-gray-500">Loading questions...</div>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-pulse text-lg text-gray-500">Loading results...</div>
      </div>
    );
  }

  if (!currentQuestion) return null;

  return (
    <div className="min-h-screen">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
          <button onClick={() => router.push("/")} className="text-sm text-gray-500 hover:text-gray-700">
            &larr; Exit
          </button>
          <span className="text-sm font-medium text-gray-600">
            Question {currentIndex + 1} of {sessionQuestions.length}
          </span>
          <div className="flex gap-1">
            {sessionQuestions.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-6 rounded-full ${
                  i < currentIndex
                    ? "bg-blue-600"
                    : i === currentIndex
                    ? "bg-blue-300"
                    : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-8">
        {/* Question type badge */}
        <div className="mb-4 flex items-center gap-2">
          <span className={`rounded-full px-3 py-1 text-xs font-medium ${
            currentQuestion.type === "data-sufficiency"
              ? "bg-purple-100 text-purple-700"
              : "bg-blue-100 text-blue-700"
          }`}>
            {currentQuestion.type === "data-sufficiency" ? "Data Sufficiency" : "Problem Solving"}
          </span>
          <span className={`rounded-full px-3 py-1 text-xs font-medium ${
            currentQuestion.difficulty === "easy"
              ? "bg-green-100 text-green-700"
              : currentQuestion.difficulty === "medium"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}>
            {currentQuestion.difficulty}
          </span>
        </div>

        {/* Question text */}
        <div className="mb-8 rounded-xl bg-white p-6 shadow-sm border">
          <p className="text-lg leading-relaxed whitespace-pre-line">{currentQuestion.text}</p>
        </div>

        {/* Choices */}
        <div className="space-y-3">
          {currentQuestion.choices.map((choice, i) => {
            let borderColor = "border-gray-200";
            let bg = "bg-white";

            if (showResult) {
              if (i === currentQuestion.correctAnswer) {
                borderColor = "border-green-500";
                bg = "bg-green-50";
              } else if (i === selectedAnswer && i !== currentQuestion.correctAnswer) {
                borderColor = "border-red-500";
                bg = "bg-red-50";
              }
            } else if (selectedAnswer === i) {
              borderColor = "border-blue-500";
              bg = "bg-blue-50";
            }

            return (
              <button
                key={i}
                onClick={() => !showResult && setSelectedAnswer(i)}
                disabled={showResult}
                className={`w-full rounded-lg border-2 ${borderColor} ${bg} p-4 text-left transition-colors ${
                  !showResult ? "hover:border-blue-300 hover:bg-blue-50" : ""
                }`}
              >
                <span className="mr-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold">
                  {String.fromCharCode(65 + i)}
                </span>
                {choice}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showResult && (
          <div className="mt-6 rounded-xl bg-amber-50 border border-amber-200 p-6">
            <h3 className="font-semibold text-amber-800 mb-2">Explanation</h3>
            <p className="text-amber-900 text-sm leading-relaxed">{currentQuestion.explanation}</p>
          </div>
        )}

        {/* Action button */}
        <div className="mt-8">
          {!showResult ? (
            <button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className="w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white shadow-md hover:bg-blue-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Submit Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white shadow-md hover:bg-blue-700 transition-colors"
            >
              {currentIndex < sessionQuestions.length - 1 ? "Next Question" : "See Results"}
            </button>
          )}
        </div>
      </main>
    </div>
  );
}

export default function PracticePage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <div className="animate-pulse text-lg text-gray-500">Loading...</div>
        </div>
      }
    >
      <PracticeContent />
    </Suspense>
  );
}
