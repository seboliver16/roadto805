"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { Question, Section, SECTION_LABELS } from "@/types";
import { createSession, updateSession, saveAttempt, updateProfileStats, updateProfile } from "@/lib/store";
import { PageSkeleton } from "@/components/loading-skeleton";
import { QuestionRenderer } from "@/components/question-renderer";
import { Badge } from "@/components/badge";

// We'll import diagnostic questions once the data files exist.
// For now, use a dynamic import that falls back gracefully.
function getDiagnosticQuestions(): Question[] {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const mod = require("@/data/questions");
    return typeof mod.getDiagnosticQuestions === "function"
      ? mod.getDiagnosticQuestions()
      : mod.allQuestions?.slice(0, 18) ?? [];
  } catch {
    return [];
  }
}

const SECTION_ORDER: Section[] = ["quant", "verbal", "data-insights"];

function DiagnosticContent() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [showTransition, setShowTransition] = useState(false);
  const [transitionSection, setTransitionSection] = useState<Section | null>(null);
  const [finished, setFinished] = useState(false);
  const [startTime] = useState(Date.now());
  const [elapsed, setElapsed] = useState(0);

  // Timer
  useEffect(() => {
    if (finished) return;
    const interval = setInterval(() => setElapsed(Math.floor((Date.now() - startTime) / 1000)), 1000);
    return () => clearInterval(interval);
  }, [startTime, finished]);

  // Load diagnostic questions
  useEffect(() => {
    const qs = getDiagnosticQuestions();
    setQuestions(qs);
  }, []);

  // Create session
  useEffect(() => {
    if (user && questions.length > 0 && !sessionId) {
      createSession({
        userId: user.uid,
        sessionType: "diagnostic",
        questionIds: questions.map((q) => q.id),
        answers: {},
        score: 0,
        total: questions.length,
        themeBreakdown: {},
        timestamp: Date.now(),
        completed: false,
      }).then(setSessionId);
    }
  }, [user, questions, sessionId]);

  // Redirect if not authenticated
  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/");
    }
  }, [user, authLoading, router]);

  const currentQuestion = questions[currentIndex];

  // Determine section boundaries
  const getSectionForIndex = (idx: number): Section | undefined => {
    return questions[idx]?.section;
  };

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
    if (currentIndex < questions.length - 1) {
      const currentSection = getSectionForIndex(currentIndex);
      const nextSection = getSectionForIndex(currentIndex + 1);

      if (currentSection !== nextSection && nextSection) {
        // Show section transition
        setTransitionSection(nextSection);
        setShowTransition(true);
        setTimeout(() => {
          setShowTransition(false);
          setTransitionSection(null);
          setCurrentIndex((i) => i + 1);
          setSelectedAnswer(null);
          setShowResult(false);
        }, 2000);
      } else {
        setCurrentIndex((i) => i + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      }
    } else {
      // Finish diagnostic
      const finalAnswers = { ...answers };
      if (currentQuestion) {
        finalAnswers[currentQuestion.id] = selectedAnswer!;
      }

      let score = 0;
      const themeBreakdown: Record<string, { correct: number; total: number }> = {};
      const sectionBreakdown: Record<Section, { score: number; total: number }> = {
        quant: { score: 0, total: 0 },
        verbal: { score: 0, total: 0 },
        "data-insights": { score: 0, total: 0 },
      };

      questions.forEach((q) => {
        const userAns = finalAnswers[q.id];
        const isCorrect = userAns === q.correctAnswer;
        if (isCorrect) score++;

        sectionBreakdown[q.section].total++;
        if (isCorrect) sectionBreakdown[q.section].score++;

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
          sectionBreakdown,
          completed: true,
        });
        await updateProfileStats(user!.uid, questions.length, score);
        await updateProfile(user!.uid, { hasTakenDiagnostic: true });
      }

      setFinished(true);
      router.push(`/diagnostic/results?session=${sessionId}`);
    }
  }, [currentIndex, questions, answers, currentQuestion, selectedAnswer, sessionId, user, router]);

  if (!user || questions.length === 0) {
    return <PageSkeleton label="Loading diagnostic..." />;
  }

  if (finished) {
    return <PageSkeleton label="Calculating results..." />;
  }

  if (showTransition && transitionSection) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-fade-in text-center">
          <p className="text-sm text-gray-500 mb-2">Next Section</p>
          <h2 className="text-3xl font-bold">{SECTION_LABELS[transitionSection]}</h2>
        </div>
      </div>
    );
  }

  if (!currentQuestion) return null;

  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;
  const sectionIndex = SECTION_ORDER.indexOf(currentQuestion.section);

  return (
    <div className="min-h-screen">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
          <Badge variant={sectionIndex === 0 ? "blue" : sectionIndex === 1 ? "green" : "purple"}>
            {SECTION_LABELS[currentQuestion.section]}
          </Badge>
          <span className="text-sm font-medium text-gray-600">
            {currentIndex + 1} / {questions.length}
          </span>
          <span className="text-sm tabular-nums text-gray-500">
            {minutes}:{seconds.toString().padStart(2, "0")}
          </span>
        </div>
        {/* Progress bar */}
        <div className="h-1 bg-gray-100">
          <div
            className="h-full bg-blue-600 transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-8">
        <QuestionRenderer
          question={currentQuestion}
          selectedAnswer={selectedAnswer}
          showResult={showResult}
          onSelectAnswer={setSelectedAnswer}
        />

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
              {currentIndex < questions.length - 1 ? "Next Question" : "See Results"}
            </button>
          )}
        </div>
      </main>
    </div>
  );
}

export default function DiagnosticPage() {
  return (
    <Suspense fallback={<PageSkeleton label="Loading diagnostic..." />}>
      <DiagnosticContent />
    </Suspense>
  );
}
