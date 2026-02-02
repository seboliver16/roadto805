"use client";

import { useState, useCallback } from "react";
import { Question, Theme, THEME_LABELS, SECTION_LABELS } from "@/types";
import { createSession, updateSession, saveAttempt, updateProfileStats } from "@/lib/store";
import { QuestionRenderer } from "./question-renderer";
import { AiHelpButton } from "./ai-help-button";
import { ProgressRing } from "./progress-ring";
import { Badge } from "./badge";

export interface WeakThemeInfo {
  theme: Theme;
  accuracy: number;
  questionCount: number;
}

interface WeaknessQuizProps {
  questions: Question[];
  weakThemes: WeakThemeInfo[];
  userId: string;
  userName?: string;
  onComplete?: () => void;
}

export function WeaknessQuiz({ questions, weakThemes, userId, userName, onComplete }: WeaknessQuizProps) {
  const [phase, setPhase] = useState<"preview" | "active" | "finished">("preview");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [selectedAnswerB, setSelectedAnswerB] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [sessionId, setSessionId] = useState<string | null>(null);

  const currentQuestion = questions[currentIndex];
  const isTPA = currentQuestion?.type === "two-part-analysis";

  const startQuiz = useCallback(async () => {
    const id = await createSession({
      userId,
      sessionType: "practice",
      questionIds: questions.map((q) => q.id),
      answers: {},
      score: 0,
      total: questions.length,
      themeBreakdown: {},
      timestamp: Date.now(),
      completed: false,
    });
    setSessionId(id);
    setPhase("active");
  }, [userId, questions]);

  const handleSubmit = useCallback(async () => {
    if (selectedAnswer === null || !currentQuestion || !sessionId) return;
    if (isTPA && selectedAnswerB === null) return;
    setShowResult(true);
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: selectedAnswer }));

    const isCorrect = isTPA
      ? selectedAnswer === currentQuestion.correctAnswer && selectedAnswerB === currentQuestion.correctAnswerB
      : selectedAnswer === currentQuestion.correctAnswer;

    await saveAttempt({
      userId,
      questionId: currentQuestion.id,
      selectedAnswer,
      correct: isCorrect,
      themes: currentQuestion.themes,
      timestamp: Date.now(),
      sessionId,
    });
  }, [selectedAnswer, selectedAnswerB, currentQuestion, sessionId, isTPA, userId]);

  const handleNext = useCallback(async () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setSelectedAnswerB(null);
      setShowResult(false);
    } else {
      // Quiz finished
      const finalAnswers = { ...answers };
      if (currentQuestion) finalAnswers[currentQuestion.id] = selectedAnswer!;

      let score = 0;
      const themeBreakdown: Record<string, { correct: number; total: number }> = {};

      questions.forEach((q) => {
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
        await updateProfileStats(userId, questions.length, score);
      }

      setPhase("finished");
    }
  }, [currentIndex, questions, answers, currentQuestion, selectedAnswer, sessionId, userId]);

  const resetQuiz = useCallback(() => {
    setPhase("preview");
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setSelectedAnswerB(null);
    setShowResult(false);
    setAnswers({});
    setSessionId(null);
  }, []);

  // Compute results for finished phase
  const quizScore = Object.values(answers).reduce((sum, ans, i) => {
    return sum + (ans === questions[i]?.correctAnswer ? 1 : 0);
  }, 0);

  const quizAccuracy = questions.length > 0 ? Math.round((quizScore / questions.length) * 100) : 0;

  const themeResults = weakThemes.map((wt) => {
    const themeQuestions = questions.filter((q) => q.themes.includes(wt.theme));
    let correct = 0;
    for (const q of themeQuestions) {
      if (answers[q.id] === q.correctAnswer) correct++;
    }
    return {
      ...wt,
      quizCorrect: correct,
      quizTotal: themeQuestions.length,
      quizAccuracy: themeQuestions.length > 0 ? Math.round((correct / themeQuestions.length) * 100) : 0,
    };
  }).filter((t) => t.quizTotal > 0);

  // === Preview phase ===
  if (phase === "preview") {
    return (
      <div>
        <p className="text-sm text-[#6b7280] mb-6">
          {userName ? `${userName}, these` : "These"} themes are below 75% accuracy. A targeted quiz will help strengthen them.
        </p>

        {weakThemes.length === 0 ? (
          <div className="rounded-xl border border-[#e5e7eb] bg-white p-8 text-center">
            <svg className="mx-auto h-10 w-10 text-[#d1d5db]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="mt-4 text-sm font-medium text-[#6b7280]">No weak areas detected yet</p>
            <p className="mt-1 text-xs text-[#9ca3af]">
              Keep practicing and weak themes will appear here for targeted review.
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-3 mb-6">
              {weakThemes.map(({ theme, accuracy, questionCount }) => (
                <div key={theme} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-[#0d0d0d]">
                      {THEME_LABELS[theme] ?? theme}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#9ca3af]">{questionCount} question{questionCount !== 1 ? "s" : ""}</span>
                      <span className={`text-xs font-semibold ${accuracy < 0.4 ? "text-red-500" : accuracy < 0.6 ? "text-orange-500" : "text-amber-500"}`}>
                        {Math.round(accuracy * 100)}%
                      </span>
                    </div>
                  </div>
                  <div className="h-2 rounded-full bg-[#f3f4f6]">
                    <div
                      className="h-2 rounded-full transition-all duration-500"
                      style={{
                        width: `${accuracy * 100}%`,
                        backgroundColor: accuracy < 0.4 ? "#ef4444" : accuracy < 0.6 ? "#f97316" : "#f59e0b",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={startQuiz}
              className="w-full rounded-xl bg-[#0d0d0d] py-3.5 text-base font-semibold text-white hover:bg-[#1a1a1a] transition-colors"
            >
              Start Weakness Quiz ({questions.length} question{questions.length !== 1 ? "s" : ""})
            </button>
          </>
        )}
      </div>
    );
  }

  // === Active quiz phase ===
  if (phase === "active" && currentQuestion) {
    return (
      <div>
        {/* Progress bar */}
        <div className="flex items-center gap-3 mb-4">
          <Badge variant={currentQuestion.section === "quant" ? "blue" : currentQuestion.section === "verbal" ? "green" : "purple"}>
            {SECTION_LABELS[currentQuestion.section]}
          </Badge>
          <span className="text-sm font-bold text-[#0d0d0d]">
            {currentIndex + 1}<span className="text-[#9ca3af] font-normal"> / {questions.length}</span>
          </span>
          <div className="flex-1 flex gap-1">
            {questions.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                  i < currentIndex ? "bg-[#0d0d0d]" : i === currentIndex ? "bg-[#6b7280]" : "bg-[#e5e7eb]"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="animate-fade-in">
          <QuestionRenderer
            question={currentQuestion}
            selectedAnswer={selectedAnswer}
            selectedAnswerB={selectedAnswerB}
            showResult={showResult}
            onSelectAnswer={setSelectedAnswer}
            onSelectAnswerB={setSelectedAnswerB}
          />

          <AiHelpButton
            key={`ai-weakness-${currentIndex}`}
            question={currentQuestion}
            showResult={showResult}
            selectedAnswer={selectedAnswer}
            userName={userName}
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
                {currentIndex < questions.length - 1 ? "Next Question" : "See Results"}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // === Finished phase ===
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <ProgressRing percent={quizAccuracy} size={100} strokeWidth={7} />
        <p className="mt-3 text-lg font-bold text-[#0d0d0d]">
          {quizScore} out of {questions.length} correct
        </p>
        <p className="text-sm text-[#6b7280]">
          {userName ? `${userName}, ` : ""}
          {quizAccuracy >= 75 ? "Great improvement on your weak areas!" : quizAccuracy >= 50 ? "Making progress — keep at it!" : "These are tough topics. Review the explanations and try again!"}
        </p>
      </div>

      {/* Per-theme breakdown */}
      <div className="space-y-3 mb-8">
        <h3 className="text-sm font-semibold text-[#0d0d0d]">Results by Theme</h3>
        {themeResults.map((t) => {
          const improved = t.quizAccuracy > Math.round(t.accuracy * 100);
          return (
            <div key={t.theme} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-[#0d0d0d]">{THEME_LABELS[t.theme] ?? t.theme}</span>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-[#9ca3af]">was {Math.round(t.accuracy * 100)}%</span>
                  <span className={`text-xs font-bold ${improved ? "text-green-600" : t.quizAccuracy >= 75 ? "text-[#0d0d0d]" : "text-orange-500"}`}>
                    {t.quizCorrect}/{t.quizTotal} ({t.quizAccuracy}%)
                  </span>
                </div>
              </div>
              <div className="h-2 rounded-full bg-[#f3f4f6]">
                <div
                  className="h-2 rounded-full transition-all duration-700"
                  style={{
                    width: `${t.quizAccuracy}%`,
                    backgroundColor: t.quizAccuracy >= 75 ? "#0d0d0d" : t.quizAccuracy >= 50 ? "#f59e0b" : "#ef4444",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="space-y-3">
        <button
          onClick={() => { resetQuiz(); onComplete?.(); }}
          className="w-full rounded-xl bg-[#0d0d0d] py-3.5 text-base font-semibold text-white hover:bg-[#1a1a1a] transition-colors"
        >
          Retake Weakness Quiz
        </button>
      </div>
    </div>
  );
}
