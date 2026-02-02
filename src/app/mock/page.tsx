"use client";

import { useState, useEffect, useCallback, useRef, Suspense } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { Question, Section, SECTION_LABELS } from "@/types";
import { createSession, updateSession, saveAttempt, updateProfileStats } from "@/lib/store";
import { PageSkeleton } from "@/components/loading-skeleton";
import { QuestionRenderer } from "@/components/question-renderer";
import { Badge } from "@/components/badge";
import { getMockExamQuestions, MOCK_SECTIONS, MOCK_TOTAL_QUESTIONS, formatTime } from "@/lib/mock";

type Phase = "landing" | "section-intro" | "in-progress" | "section-transition" | "finishing";

function MockContent() {
  const router = useRouter();
  const { user, profile, loading: authLoading } = useAuth();

  const [phase, setPhase] = useState<Phase>("landing");
  const [sectionQuestions, setSectionQuestions] = useState<Question[][]>([]);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [selectedAnswerB, setSelectedAnswerB] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);

  // Timer: store the deadline (Date.now() + section time) for accuracy
  const [sectionDeadline, setSectionDeadline] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const sectionStartTimesRef = useRef<number[]>([]);
  const sectionEndTimesRef = useRef<number[]>([]);

  const firstName = (profile?.displayName ?? user?.displayName ?? "").split(" ")[0] || "";

  const currentSectionConfig = MOCK_SECTIONS[currentSectionIndex];
  const currentSectionQs = sectionQuestions[currentSectionIndex] ?? [];
  const currentQuestion = currentSectionQs[currentQuestionIndex];
  const isTPA = currentQuestion?.type === "two-part-analysis";

  // Countdown timer using Date.now() diffs
  useEffect(() => {
    if (phase !== "in-progress" || sectionDeadline === 0) return;
    const tick = () => {
      const remaining = Math.max(0, Math.round((sectionDeadline - Date.now()) / 1000));
      setTimeRemaining(remaining);
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [phase, sectionDeadline]);

  // Auto-advance when time expires
  useEffect(() => {
    if (phase === "in-progress" && timeRemaining === 0 && sectionDeadline > 0) {
      handleSectionComplete();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeRemaining, phase, sectionDeadline]);

  // Prevent accidental tab close
  useEffect(() => {
    if (phase === "landing" || finished) return;
    const handler = (e: BeforeUnloadEvent) => { e.preventDefault(); };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [phase, finished]);

  // Redirect if not authenticated
  useEffect(() => {
    if (!authLoading && !user) router.push("/");
  }, [user, authLoading, router]);

  const startExam = useCallback(async () => {
    if (!user) return;
    const sections = getMockExamQuestions();
    setSectionQuestions(sections);

    const allIds = sections.flat().map((q) => q.id);
    const id = await createSession({
      userId: user.uid,
      sessionType: "mock",
      questionIds: allIds,
      answers: {},
      score: 0,
      total: MOCK_TOTAL_QUESTIONS,
      themeBreakdown: {},
      timestamp: Date.now(),
      completed: false,
    });
    setSessionId(id);
    setCurrentSectionIndex(0);
    setCurrentQuestionIndex(0);
    setPhase("section-intro");
  }, [user]);

  const startSection = useCallback(() => {
    const deadline = Date.now() + MOCK_SECTIONS[currentSectionIndex].timeMinutes * 60 * 1000;
    setSectionDeadline(deadline);
    sectionStartTimesRef.current[currentSectionIndex] = Date.now();
    setPhase("in-progress");
  }, [currentSectionIndex]);

  const handleSubmit = useCallback(async () => {
    if (selectedAnswer === null || !currentQuestion || !user || !sessionId) return;
    if (isTPA && selectedAnswerB === null) return;

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

    // Auto-advance to next question (no feedback in mock mode)
    if (currentQuestionIndex < currentSectionQs.length - 1) {
      setCurrentQuestionIndex((i) => i + 1);
      setSelectedAnswer(null);
      setSelectedAnswerB(null);
    } else {
      handleSectionComplete();
    }
  }, [selectedAnswer, selectedAnswerB, currentQuestion, currentQuestionIndex, currentSectionQs.length, user, sessionId, isTPA]);

  const handleSectionComplete = useCallback(async () => {
    sectionEndTimesRef.current[currentSectionIndex] = Date.now();
    setSectionDeadline(0);

    if (currentSectionIndex < MOCK_SECTIONS.length - 1) {
      // Move to next section
      setPhase("section-transition");
    } else {
      // Exam complete
      await finishExam();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSectionIndex]);

  const advanceToNextSection = useCallback(() => {
    const nextIdx = currentSectionIndex + 1;
    setCurrentSectionIndex(nextIdx);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setSelectedAnswerB(null);
    setPhase("section-intro");
  }, [currentSectionIndex]);

  const finishExam = useCallback(async () => {
    if (!user || !sessionId) return;
    setPhase("finishing");

    const allQuestions = sectionQuestions.flat();
    let score = 0;
    const themeBreakdown: Record<string, { correct: number; total: number }> = {};
    const sectionBreakdown: Record<Section, { score: number; total: number }> = {
      quant: { score: 0, total: 0 },
      verbal: { score: 0, total: 0 },
      "data-insights": { score: 0, total: 0 },
    };

    allQuestions.forEach((q) => {
      const userAns = answers[q.id];
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

    await updateSession(sessionId, {
      answers,
      score,
      themeBreakdown,
      sectionBreakdown,
      completed: true,
    });
    await updateProfileStats(user.uid, allQuestions.length, score);

    setFinished(true);
    router.push(`/mock/results?session=${sessionId}`);
  }, [user, sessionId, sectionQuestions, answers, router]);

  // Overall progress across all sections
  const overallQuestionIndex = MOCK_SECTIONS.slice(0, currentSectionIndex).reduce(
    (sum, cfg) => sum + cfg.questionCount, 0
  ) + currentQuestionIndex;

  // === Landing phase ===
  if (phase === "landing") {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-xl w-full px-4 animate-fade-in">
          <div className="text-center mb-8">
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#0d0d0d]">
              <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-[#0d0d0d]">Full GMAT Mock Exam</h1>
            <p className="mt-3 text-[#374151] leading-relaxed">
              {firstName ? `Ready to test yourself, ${firstName}? ` : ""}Simulate the full GMAT Focus Edition with timed sections.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 mb-8">
            {MOCK_SECTIONS.map((cfg, i) => (
              <div key={cfg.section} className="flex items-center justify-between rounded-xl border border-[#e5e7eb] bg-white p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f3f4f6] text-sm font-bold text-[#374151]">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#0d0d0d]">{cfg.label}</p>
                    <p className="text-xs text-[#6b7280]">{cfg.questionCount} questions</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-[#6b7280]">{cfg.timeMinutes} min</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mb-6 text-sm text-[#6b7280]">
            <span>{MOCK_TOTAL_QUESTIONS} total questions</span>
            <span className="text-[#e5e7eb]">|</span>
            <span>~2h 15min</span>
            <span className="text-[#e5e7eb]">|</span>
            <span>No per-question feedback</span>
          </div>

          <button
            onClick={startExam}
            className="w-full rounded-xl bg-[#0d0d0d] py-4 text-lg font-semibold text-white hover:bg-[#1a1a1a] transition-colors"
          >
            Start Mock Exam
          </button>

          <button
            onClick={() => router.push("/dashboard")}
            className="mt-3 w-full rounded-xl border border-[#e5e7eb] bg-white py-3 text-sm font-medium text-[#6b7280] hover:bg-[#fafafa] transition-colors"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  // === Section intro ===
  if (phase === "section-intro" && currentSectionConfig) {
    const sectionIdx = currentSectionIndex;
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-md w-full px-4 text-center animate-fade-in">
          <Badge variant={sectionIdx === 0 ? "blue" : sectionIdx === 1 ? "green" : "purple"}>
            Section {sectionIdx + 1} of {MOCK_SECTIONS.length}
          </Badge>
          <h2 className="mt-4 text-3xl font-bold text-[#0d0d0d]">{currentSectionConfig.label}</h2>
          <div className="mt-4 flex justify-center gap-4">
            <div className="rounded-lg bg-[#fafafa] border border-[#e5e7eb] px-4 py-2.5 text-sm text-[#374151] font-medium">
              {currentSectionConfig.questionCount} questions
            </div>
            <div className="rounded-lg bg-[#fafafa] border border-[#e5e7eb] px-4 py-2.5 text-sm text-[#374151] font-medium">
              {currentSectionConfig.timeMinutes} minutes
            </div>
          </div>
          <button
            onClick={startSection}
            className="mt-8 rounded-xl bg-[#0d0d0d] px-10 py-4 text-lg font-semibold text-white hover:bg-[#1a1a1a] transition-colors"
          >
            Begin Section
          </button>
        </div>
      </div>
    );
  }

  // === Section transition ===
  if (phase === "section-transition") {
    const completedConfig = MOCK_SECTIONS[currentSectionIndex];
    const nextConfig = MOCK_SECTIONS[currentSectionIndex + 1];
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-md w-full px-4 text-center animate-fade-in">
          <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
            <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-sm text-[#6b7280] mb-1">Section Complete</p>
          <h2 className="text-2xl font-bold text-[#0d0d0d] mb-6">{completedConfig.label}</h2>

          {nextConfig && (
            <>
              <p className="text-sm text-[#6b7280] mb-2">Up next:</p>
              <p className="text-lg font-semibold text-[#0d0d0d] mb-1">{nextConfig.label}</p>
              <p className="text-sm text-[#6b7280] mb-8">
                {nextConfig.questionCount} questions &middot; {nextConfig.timeMinutes} minutes
              </p>
              <button
                onClick={advanceToNextSection}
                className="rounded-xl bg-[#0d0d0d] px-10 py-4 text-lg font-semibold text-white hover:bg-[#1a1a1a] transition-colors"
              >
                Continue to Next Section
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  // === Finishing ===
  if (phase === "finishing" || finished) {
    return <PageSkeleton label="Calculating your results..." />;
  }

  // === In-progress ===
  if (!currentQuestion) return <PageSkeleton label="Loading..." />;

  const isLowTime = timeRemaining < 300; // under 5 minutes

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-[#e5e7eb] bg-white sticky top-0 z-30">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Badge variant={currentSectionIndex === 0 ? "blue" : currentSectionIndex === 1 ? "green" : "purple"}>
              {SECTION_LABELS[currentSectionConfig.section]}
            </Badge>
            <span className="text-sm font-bold text-[#0d0d0d]">
              {currentQuestionIndex + 1}
              <span className="text-[#9ca3af] font-normal"> / {currentSectionQs.length}</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#9ca3af]">
              {overallQuestionIndex + 1} of {MOCK_TOTAL_QUESTIONS} overall
            </span>
            <span className={`text-sm font-bold tabular-nums ${isLowTime ? "text-red-600" : "text-[#0d0d0d]"}`}>
              {formatTime(timeRemaining)}
            </span>
          </div>
        </div>

        {/* Section progress */}
        <div className="h-1 bg-gray-100">
          <div
            className="h-full bg-[#0d0d0d] transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / currentSectionQs.length) * 100}%` }}
          />
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-4">
        <div key={`${currentSectionIndex}-${currentQuestionIndex}`} className="animate-fade-in">
          <QuestionRenderer
            question={currentQuestion}
            selectedAnswer={selectedAnswer}
            selectedAnswerB={selectedAnswerB}
            showResult={false}
            onSelectAnswer={setSelectedAnswer}
            onSelectAnswerB={setSelectedAnswerB}
          />

          <div className="mt-4">
            <button
              onClick={handleSubmit}
              disabled={selectedAnswer === null || (isTPA && selectedAnswerB === null)}
              className="w-full rounded-lg py-3 text-base font-semibold text-white bg-[#0d0d0d] hover:bg-[#1a1a1a] transition-colors disabled:bg-[#d1d5db] disabled:text-[#9ca3af] disabled:cursor-not-allowed"
            >
              {currentQuestionIndex < currentSectionQs.length - 1 ? "Submit & Next" : "Submit & Finish Section"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function MockPage() {
  return (
    <Suspense fallback={<PageSkeleton label="Loading mock exam..." />}>
      <MockContent />
    </Suspense>
  );
}
