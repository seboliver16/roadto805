"use client";

import { useState, useEffect, useCallback, useRef, Suspense } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { useExam } from "@/exams/exam-context";
import { Question, Section } from "@/types";
import { getExamQuestions } from "@/exams/registry";
import { createSession, updateSession, saveAttempt, updateProfileStats } from "@/lib/store";
import { PageSkeleton } from "@/components/loading-skeleton";
import { QuestionRenderer } from "@/components/question-renderer";
import { Badge } from "@/components/badge";
import { getMockExamQuestionsForExam, getMockExamS1Questions, getMockExamS2Questions, getAdaptiveTier, formatTime } from "@/lib/mock";

type Phase = "landing" | "section-intro" | "in-progress" | "section-review" | "section-transition" | "finishing";

function MockContent() {
  const router = useRouter();
  const { user, profile, loading: authLoading } = useAuth();
  const exam = useExam();
  const basePath = `/${exam.slug}`;

  const examQuestions = getExamQuestions(exam.slug);
  const MOCK_SECTIONS = exam.mockSections;
  const MOCK_TOTAL_QUESTIONS = MOCK_SECTIONS.reduce((s, c) => s + c.questionCount, 0);
  const isAdaptive = MOCK_SECTIONS.some((cfg) => cfg.adaptiveRef !== undefined);

  const [phase, setPhase] = useState<Phase>("landing");
  const [sectionQuestions, setSectionQuestions] = useState<Question[][]>([]);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [selectedAnswerB, setSelectedAnswerB] = useState<number | null>(null);
  const [selectedAnswerC, setSelectedAnswerC] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);
  // Track per-section scores for adaptive S2 selection
  const [sectionScores, setSectionScores] = useState<Record<number, { correct: number; total: number }>>({});
  // Question flagging (for review before section end)
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<string>>(new Set());
  // Answer strikethrough per question: questionId -> Set of choice indices
  const [strikethroughs, setStrikethroughs] = useState<Record<string, Set<number>>>({});

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
  const isMultiAnswer = currentQuestion?.type === "text-completion" || currentQuestion?.type === "sentence-equivalence" || isTPA;
  const needsAnswerB = isMultiAnswer && (currentQuestion?.twoPartColumns || currentQuestion?.threePartColumns || currentQuestion?.correctAnswerB !== undefined);
  const needsAnswerC = currentQuestion?.threePartColumns != null;

  const getSectionLabel = (_sectionId: string) =>
    currentSectionConfig?.label || exam.sections.find(s => s.id === _sectionId)?.label || _sectionId;

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
    if ((phase === "in-progress" || phase === "section-review") && timeRemaining === 0 && sectionDeadline > 0) {
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

    let sections: Question[][];
    if (isAdaptive) {
      // Adaptive exam (GRE): generate S1 questions upfront, S2 deferred
      const { questions } = getMockExamS1Questions(exam, examQuestions);
      sections = questions;
    } else {
      sections = getMockExamQuestionsForExam(exam, examQuestions);
    }
    setSectionQuestions(sections);

    // For adaptive exams, S2 question IDs aren't known yet — use S1 IDs only
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
      exam: exam.slug,
    });
    setSessionId(id);
    setCurrentSectionIndex(0);
    setCurrentQuestionIndex(0);
    setPhase("section-intro");
  }, [user, exam, MOCK_TOTAL_QUESTIONS, isAdaptive]);

  const startSection = useCallback(() => {
    const deadline = Date.now() + MOCK_SECTIONS[currentSectionIndex].timeMinutes * 60 * 1000;
    setSectionDeadline(deadline);
    sectionStartTimesRef.current[currentSectionIndex] = Date.now();
    setPhase("in-progress");
  }, [currentSectionIndex, MOCK_SECTIONS]);

  const handleSubmit = useCallback(async () => {
    if (selectedAnswer === null || !currentQuestion || !user || !sessionId) return;
    if (needsAnswerB && (selectedAnswerB === null || selectedAnswerB === -1)) return;
    if (needsAnswerC && (selectedAnswerC === null || selectedAnswerC === -1)) return;

    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: selectedAnswer }));

    // Determine correctness based on question type
    let isCorrect: boolean;
    if (currentQuestion.correctAnswerC !== undefined) {
      // Triple-blank TC
      isCorrect = selectedAnswer === currentQuestion.correctAnswer
        && selectedAnswerB === currentQuestion.correctAnswerB
        && selectedAnswerC === currentQuestion.correctAnswerC;
    } else if (currentQuestion.correctAnswerB !== undefined) {
      // Double-blank TC, Sentence Equivalence, Two-Part Analysis
      isCorrect = selectedAnswer === currentQuestion.correctAnswer
        && selectedAnswerB === currentQuestion.correctAnswerB;
    } else if (currentQuestion.numericAnswer !== undefined) {
      // Numeric Entry — check via string comparison (simplified)
      isCorrect = selectedAnswer === 1; // NumericEntry sets 1 for correct
    } else {
      isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    }

    // Track per-section score for adaptive S2
    setSectionScores((prev) => {
      const prevData = prev[currentSectionIndex] ?? { correct: 0, total: 0 };
      return {
        ...prev,
        [currentSectionIndex]: {
          correct: prevData.correct + (isCorrect ? 1 : 0),
          total: prevData.total + 1,
        },
      };
    });

    await saveAttempt({
      userId: user.uid,
      questionId: currentQuestion.id,
      selectedAnswer,
      correct: isCorrect,
      themes: currentQuestion.themes,
      timestamp: Date.now(),
      sessionId,
      exam: exam.slug,
    });

    // Auto-advance to next question (no feedback in mock mode)
    if (currentQuestionIndex < currentSectionQs.length - 1) {
      setCurrentQuestionIndex((i) => i + 1);
      setSelectedAnswer(null);
      setSelectedAnswerB(null);
      setSelectedAnswerC(null);
    } else {
      // Show section review before completing
      setPhase("section-review");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAnswer, selectedAnswerB, selectedAnswerC, currentQuestion, currentQuestionIndex, currentSectionQs.length, user, sessionId, needsAnswerB, needsAnswerC, currentSectionIndex, exam.slug]);

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
  }, [currentSectionIndex, MOCK_SECTIONS.length]);

  const advanceToNextSection = useCallback(() => {
    const nextIdx = currentSectionIndex + 1;
    const nextConfig = MOCK_SECTIONS[nextIdx];

    // If the next section is adaptive (S2), generate its questions now
    if (nextConfig?.adaptiveRef !== undefined && isAdaptive) {
      const refIdx = nextConfig.adaptiveRef;
      const refScore = sectionScores[refIdx] ?? { correct: 0, total: 0 };
      const usedIds = new Set(sectionQuestions.flat().map((q) => q.id));
      const s2Questions = getMockExamS2Questions(
        exam, examQuestions, nextIdx, refScore.correct, refScore.total, usedIds
      );
      setSectionQuestions((prev) => {
        const updated = [...prev];
        updated[nextIdx] = s2Questions;
        return updated;
      });
    }

    setCurrentSectionIndex(nextIdx);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setSelectedAnswerB(null);
    setSelectedAnswerC(null);
    setPhase("section-intro");
  }, [currentSectionIndex, MOCK_SECTIONS, isAdaptive, sectionScores, sectionQuestions, exam]);

  const finishExam = useCallback(async () => {
    if (!user || !sessionId) return;
    setPhase("finishing");

    const allQs = sectionQuestions.flat();
    let score = 0;
    const themeBreakdown: Record<string, { correct: number; total: number }> = {};
    const sectionBreakdown: Record<string, { score: number; total: number }> = Object.fromEntries(
      exam.sections.map(s => [s.id, { score: 0, total: 0 }])
    );

    // For adaptive exams, also track subsection breakdown (verbal-1, verbal-2, etc.)
    const subsectionBreakdown: Record<string, { score: number; total: number }> = {};

    // Build question-to-section-index mapping
    const qToSectionIdx: Record<string, number> = {};
    sectionQuestions.forEach((qs, idx) => {
      qs.forEach((q) => { qToSectionIdx[q.id] = idx; });
    });

    allQs.forEach((q) => {
      const userAns = answers[q.id];
      const isCorrect = userAns === q.correctAnswer;
      if (isCorrect) score++;

      if (sectionBreakdown[q.section]) {
        sectionBreakdown[q.section].total++;
        if (isCorrect) sectionBreakdown[q.section].score++;
      }

      // Track subsection (e.g., "verbal-1", "verbal-2")
      const sIdx = qToSectionIdx[q.id];
      const cfg = MOCK_SECTIONS[sIdx];
      if (cfg?.subsection) {
        const key = `${cfg.section}-${cfg.subsection}`;
        if (!subsectionBreakdown[key]) subsectionBreakdown[key] = { score: 0, total: 0 };
        subsectionBreakdown[key].total++;
        if (isCorrect) subsectionBreakdown[key].score++;
      }

      q.themes.forEach((theme) => {
        if (!themeBreakdown[theme]) themeBreakdown[theme] = { correct: 0, total: 0 };
        themeBreakdown[theme].total++;
        if (isCorrect) themeBreakdown[theme].correct++;
      });
    });

    // For GRE adaptive scoring, merge subsection data into sectionBreakdown
    // so the scoring function can use it
    const finalSectionBreakdown = { ...sectionBreakdown, ...subsectionBreakdown };

    await updateSession(sessionId, {
      answers,
      score,
      themeBreakdown,
      sectionBreakdown: finalSectionBreakdown,
      completed: true,
    });
    await updateProfileStats(user.uid, allQs.length, score);

    setFinished(true);
    router.push(`${basePath}/mock/results?session=${sessionId}`);
  }, [user, sessionId, sectionQuestions, answers, router, exam, basePath, MOCK_SECTIONS]);

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
            <h1 className="text-3xl font-bold text-[#0d0d0d]">Full {exam.shortName} Mock Exam</h1>
            <p className="mt-3 text-[#374151] leading-relaxed">
              {firstName ? `Ready to test yourself, ${firstName}? ` : ""}Simulate the full {exam.name} with timed sections.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 mb-8">
            {MOCK_SECTIONS.map((cfg, i) => (
              <div key={`${cfg.section}-${i}`} className="flex items-center justify-between rounded-xl border border-[#e5e7eb] bg-white p-5">
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
            <span>~{Math.round(MOCK_SECTIONS.reduce((s, c) => s + c.timeMinutes, 0) / 60)}h {MOCK_SECTIONS.reduce((s, c) => s + c.timeMinutes, 0) % 60}min</span>
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
            onClick={() => router.push(`${basePath}/dashboard`)}
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

  // === Section review (before ending section) ===
  if (phase === "section-review" && currentSectionConfig) {
    const flaggedInSection = currentSectionQs.filter((q) => flaggedQuestions.has(q.id));
    const answeredCount = currentSectionQs.filter((q) => answers[q.id] !== undefined).length;
    const unansweredCount = currentSectionQs.length - answeredCount;

    return (
      <div className="min-h-screen bg-white">
        <header className="border-b border-[#e5e7eb] bg-white sticky top-0 z-30">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
            <h2 className="text-sm font-bold text-[#0d0d0d]">{currentSectionConfig.label} — Review</h2>
            <span className={`text-sm font-bold tabular-nums ${timeRemaining < 300 ? "text-red-600" : "text-[#0d0d0d]"}`}>
              {formatTime(timeRemaining)}
            </span>
          </div>
        </header>

        <main className="mx-auto max-w-3xl px-4 py-6 animate-fade-in">
          <div className="mb-6">
            <p className="text-sm text-[#6b7280] mb-4">
              {answeredCount} of {currentSectionQs.length} answered
              {unansweredCount > 0 && <span className="text-amber-600 font-medium"> ({unansweredCount} unanswered)</span>}
              {flaggedInSection.length > 0 && <span className="text-blue-600 font-medium"> &middot; {flaggedInSection.length} flagged</span>}
            </p>

            {/* Question grid */}
            <div className="grid grid-cols-6 sm:grid-cols-10 gap-2">
              {currentSectionQs.map((q, i) => {
                const isAnswered = answers[q.id] !== undefined;
                const isFlagged = flaggedQuestions.has(q.id);
                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      setCurrentQuestionIndex(i);
                      setSelectedAnswer(answers[q.id] ?? null);
                      setSelectedAnswerB(null);
                      setSelectedAnswerC(null);
                      setPhase("in-progress");
                    }}
                    className={`relative flex h-10 w-full items-center justify-center rounded-lg text-xs font-bold border transition-colors
                      ${isFlagged ? "border-blue-400 bg-blue-50 text-blue-700" :
                        isAnswered ? "border-[#e5e7eb] bg-[#0d0d0d] text-white" :
                        "border-[#e5e7eb] bg-white text-[#374151] hover:bg-[#fafafa]"}`}
                  >
                    {i + 1}
                    {isFlagged && (
                      <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-blue-500" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                setPhase("in-progress");
              }}
              className="flex-1 rounded-xl border border-[#e5e7eb] bg-white py-3 text-sm font-semibold text-[#374151] hover:bg-[#fafafa] transition-colors"
            >
              Go Back
            </button>
            <button
              onClick={handleSectionComplete}
              className="flex-1 rounded-xl bg-[#0d0d0d] py-3 text-sm font-semibold text-white hover:bg-[#1a1a1a] transition-colors"
            >
              {unansweredCount > 0
                ? `End Section (${unansweredCount} unanswered)`
                : "End Section"}
            </button>
          </div>
        </main>
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
            <Badge variant={currentSectionConfig.section === "verbal" ? "green" : currentSectionConfig.section === "quant" ? "blue" : "purple"}>
              {currentSectionConfig.label}</Badge>
            <span className="text-sm font-bold text-[#0d0d0d]">
              {currentQuestionIndex + 1}
              <span className="text-[#9ca3af] font-normal"> / {currentSectionQs.length}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Flag button */}
            <button
              onClick={() => {
                setFlaggedQuestions((prev) => {
                  const next = new Set(prev);
                  if (next.has(currentQuestion.id)) {
                    next.delete(currentQuestion.id);
                  } else {
                    next.add(currentQuestion.id);
                  }
                  return next;
                });
              }}
              title={flaggedQuestions.has(currentQuestion.id) ? "Unflag question" : "Flag for review"}
              className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors ${
                flaggedQuestions.has(currentQuestion.id)
                  ? "bg-blue-50 text-blue-700 border border-blue-200"
                  : "text-[#6b7280] hover:bg-[#f3f4f6] border border-transparent"
              }`}
            >
              <svg className="h-3.5 w-3.5" fill={flaggedQuestions.has(currentQuestion.id) ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
              </svg>
              Flag
            </button>

            {/* Review section button */}
            <button
              onClick={() => setPhase("section-review")}
              className="text-xs text-[#6b7280] hover:text-[#0d0d0d] transition-colors font-medium"
            >
              Review
            </button>

            <span className="text-xs text-[#9ca3af]">
              {overallQuestionIndex + 1} of {MOCK_TOTAL_QUESTIONS}
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
            selectedAnswerC={selectedAnswerC}
            showResult={false}
            onSelectAnswer={setSelectedAnswer}
            onSelectAnswerB={setSelectedAnswerB}
            onSelectAnswerC={setSelectedAnswerC}
            strikethroughs={strikethroughs[currentQuestion.id]}
            onToggleStrikethrough={(choiceIdx) => {
              setStrikethroughs((prev) => {
                const current = prev[currentQuestion.id] ?? new Set<number>();
                const next = new Set(current);
                if (next.has(choiceIdx)) {
                  next.delete(choiceIdx);
                } else {
                  next.add(choiceIdx);
                }
                return { ...prev, [currentQuestion.id]: next };
              });
            }}
          />

          <div className="mt-4 flex gap-3">
            {/* Previous question */}
            {currentQuestionIndex > 0 && (
              <button
                onClick={() => {
                  const prevIdx = currentQuestionIndex - 1;
                  const prevQ = currentSectionQs[prevIdx];
                  setCurrentQuestionIndex(prevIdx);
                  setSelectedAnswer(answers[prevQ.id] ?? null);
                  setSelectedAnswerB(null);
                  setSelectedAnswerC(null);
                }}
                className="rounded-lg border border-[#e5e7eb] px-4 py-3 text-sm font-medium text-[#6b7280] hover:bg-[#fafafa] transition-colors"
              >
                Previous
              </button>
            )}
            <button
              onClick={handleSubmit}
              disabled={
                selectedAnswer === null
                || (needsAnswerB && (selectedAnswerB === null || selectedAnswerB === -1))
                || (needsAnswerC && (selectedAnswerC === null || selectedAnswerC === -1))
              }
              className="flex-1 rounded-lg py-3 text-base font-semibold text-white bg-[#0d0d0d] hover:bg-[#1a1a1a] transition-colors disabled:bg-[#d1d5db] disabled:text-[#9ca3af] disabled:cursor-not-allowed"
            >
              {currentQuestionIndex < currentSectionQs.length - 1 ? "Next" : "Review Section"}
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
