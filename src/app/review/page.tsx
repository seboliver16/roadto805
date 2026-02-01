"use client";

import { useEffect, useState, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { getSession, getUserAttempts, getUserSessions } from "@/lib/store";
import { questionMap } from "@/data/questions";
import {
  Question,
  Theme,
  Section,
  QuestionType,
  Difficulty,
  THEME_LABELS,
  SECTION_LABELS,
  SECTION_SHORT_LABELS,
  SECTION_COLORS,
  UserAttempt,
  PracticeSession,
} from "@/types";
import { generateWalkthrough, generateThemeSummary } from "@/lib/mistral";
import {
  TimeRange,
  filterByTime,
  filterBySection,
  filterByQuestionType,
  computeAnalytics,
  computeRecommendations,
  formatRelativeTime,
  getQuestionTypesForSection,
  countSessionsInRange,
} from "@/lib/review-analytics";
import { PageSkeleton } from "@/components/loading-skeleton";
import { Markdown } from "@/components/markdown";
import { Badge } from "@/components/badge";
import { SourceBadge } from "@/components/source-badge";
import { SelectablePassage } from "@/components/selectable-passage";
import { StatCard } from "@/components/stat-card";
import { ProgressRing } from "@/components/progress-ring";
import { SectionTabs } from "@/components/section-tabs";

// ─── Session Review (when ?session=X) ────────────────────────────────

interface ReviewItem {
  question: Question;
  userAnswer: number;
}

function SessionReview({ sessionId }: { sessionId: string }) {
  const router = useRouter();
  const { user } = useAuth();

  const [reviewItems, setReviewItems] = useState<ReviewItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [walkthroughs, setWalkthroughs] = useState<Record<number, { content: string; error: boolean }>>({});
  const [weakThemes, setWeakThemes] = useState<Theme[]>([]);
  const [themeSummary, setThemeSummary] = useState("");
  const [showThemeSummary, setShowThemeSummary] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    async function load() {
      const session = await getSession(sessionId);
      if (!session) { setLoading(false); return; }

      const items: ReviewItem[] = [];
      session.questionIds.forEach((qId) => {
        const q = questionMap[qId];
        if (q && session.answers[qId] !== q.correctAnswer) {
          items.push({ question: q, userAnswer: session.answers[qId] });
        }
      });
      setReviewItems(items);

      const weak = Object.entries(session.themeBreakdown)
        .filter(([, data]) => data.correct / data.total < 0.75)
        .map(([theme]) => theme as Theme);
      setWeakThemes(weak);
      setLoading(false);
    }
    load();
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
      currentItem.question.explanation,
      currentItem.question.section
    )
      .then((content) => {
        if (!cancelled) setWalkthroughs((prev) => ({ ...prev, [currentIndex]: { content, error: false } }));
      })
      .catch(() => {
        if (!cancelled) setWalkthroughs((prev) => ({ ...prev, [currentIndex]: { content: currentItem.question.explanation, error: true } }));
      });
    return () => { cancelled = true; };
  }, [currentItem, currentIndex, walkthroughs]);

  useEffect(() => {
    if (weakThemes.length === 0 || reviewItems.length === 0) return;
    const topWeakTheme = weakThemes[0];
    const missedForTheme = reviewItems
      .filter((item) => item.question.themes.includes(topWeakTheme))
      .map((item) => ({ text: item.question.text, correctAnswer: item.question.choices[item.question.correctAnswer] }));
    if (missedForTheme.length > 0) {
      generateThemeSummary(THEME_LABELS[topWeakTheme], missedForTheme)
        .then(setThemeSummary)
        .catch(() => setThemeSummary(""));
    }
  }, [weakThemes, reviewItems]);

  if (!user || loading) return <PageSkeleton label="Loading review..." />;

  if (reviewItems.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <p className="text-lg text-gray-600">No questions to review. Great job!</p>
        <button onClick={() => router.push("/")} className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">Back to Home</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
          <button onClick={() => router.push("/")} className="text-sm text-gray-500 hover:text-gray-700">&larr; Home</button>
          <h1 className="text-lg font-semibold">Review Session</h1>
          <span className="text-sm text-gray-500">{currentIndex + 1} of {reviewItems.length}</span>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-8">
        {weakThemes.length > 0 && (
          <div className="mb-6 rounded-xl bg-red-50 border border-red-200 p-5">
            <h3 className="font-semibold text-red-800 mb-2">Weak Areas</h3>
            <div className="flex flex-wrap gap-2">
              {weakThemes.map((theme) => (
                <span key={theme} className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-700">{THEME_LABELS[theme]}</span>
              ))}
            </div>
          </div>
        )}

        {themeSummary && (
          <div className="mb-6 rounded-xl bg-blue-50 border border-blue-200">
            <button onClick={() => setShowThemeSummary((v) => !v)} className="flex w-full items-center justify-between p-5 text-left">
              <h3 className="font-semibold text-blue-800">Theme Summary</h3>
              <span className="text-blue-600 text-sm">{showThemeSummary ? "Hide" : "Show"}</span>
            </button>
            {showThemeSummary && (
              <div className="px-5 pb-5"><Markdown className="text-blue-900">{themeSummary}</Markdown></div>
            )}
          </div>
        )}

        {currentItem && (
          <div key={currentIndex} className="animate-fade-in">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <Badge variant={currentItem.question.section === "quant" ? "blue" : currentItem.question.section === "verbal" ? "green" : "purple"}>
                {SECTION_LABELS[currentItem.question.section]}
              </Badge>
              {currentItem.question.themes.map((theme) => (
                <span key={theme} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">{THEME_LABELS[theme]}</span>
              ))}
            </div>

            {currentItem.question.passage && (
              <div className="mb-4 rounded-xl bg-slate-50 border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-700 text-sm mb-2">Reading Passage</h3>
                <SelectablePassage
                  passage={currentItem.question.passage}
                  questionContext={currentItem.question.text}
                />
              </div>
            )}

            <div className="mb-6 rounded-xl bg-white p-6 shadow-sm border">
              <p className="text-lg leading-relaxed whitespace-pre-line">{currentItem.question.text}</p>
            </div>

            <div className="mb-6 space-y-3">
              {currentItem.question.choices.map((choice, i) => {
                let style = "border-gray-200 bg-white";
                if (i === currentItem.question.correctAnswer) style = "border-green-500 bg-green-50";
                else if (i === currentItem.userAnswer) style = "border-red-500 bg-red-50";
                return (
                  <div key={i} className={`rounded-lg border-2 ${style} p-4`}>
                    <span className="mr-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold">{String.fromCharCode(65 + i)}</span>
                    {choice}
                    {i === currentItem.question.correctAnswer && <span className="ml-2 text-green-600 text-sm font-medium">Correct</span>}
                    {i === currentItem.userAnswer && i !== currentItem.question.correctAnswer && <span className="ml-2 text-red-600 text-sm font-medium">Your answer</span>}
                  </div>
                );
              })}
            </div>

            {(() => {
              const cached = walkthroughs[currentIndex];
              const isLoading = !cached;
              return (
                <div className="mb-6 rounded-xl bg-amber-50 border border-amber-200 p-6">
                  <h3 className="font-semibold text-amber-800 mb-3">{cached?.error ? "Explanation" : "Step-by-Step Walkthrough"}</h3>
                  {cached?.error && (
                    <div className="mb-3 flex items-center gap-2 rounded-lg bg-amber-100 px-3 py-2 text-sm text-amber-700">
                      <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
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

            {currentItem.question.source && (
              <div className="mb-6 flex justify-end"><SourceBadge source={currentItem.question.source} /></div>
            )}

            <div className="flex gap-3">
              {currentIndex > 0 && (
                <button onClick={() => setCurrentIndex((i) => i - 1)} className="flex-1 rounded-xl border border-gray-300 bg-white py-4 text-lg font-semibold text-gray-700 hover:bg-gray-50">Previous</button>
              )}
              {currentIndex < reviewItems.length - 1 ? (
                <button onClick={() => setCurrentIndex((i) => i + 1)} className="flex-1 rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white hover:bg-blue-700">Next Question</button>
              ) : (
                <button onClick={() => router.push(`/practice?themes=${weakThemes.join(",")}`)} className="flex-1 rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white hover:bg-blue-700">Drill These Themes</button>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

// ─── Dashboard Review (no session param) ─────────────────────────────

const TIME_RANGE_OPTIONS: { value: TimeRange; label: string }[] = [
  { value: "24h", label: "Last 24h" },
  { value: "7d", label: "Last 7 days" },
  { value: "30d", label: "Last 30 days" },
  { value: "all", label: "All Time" },
];

const DIFFICULTY_LABELS: Record<Difficulty, string> = { easy: "Easy", medium: "Medium", hard: "Hard" };
const DIFFICULTY_ORDER: Difficulty[] = ["easy", "medium", "hard"];

function DashboardReview() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();

  // Raw data
  const [allAttempts, setAllAttempts] = useState<UserAttempt[]>([]);
  const [allSessions, setAllSessions] = useState<PracticeSession[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [timeRange, setTimeRange] = useState<TimeRange>("30d");
  const [sectionFilter, setSectionFilter] = useState<Section | "all">("all");
  const [questionTypeFilter, setQuestionTypeFilter] = useState<QuestionType | "all">("all");

  // Drill-down
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [walkthroughs, setWalkthroughs] = useState<Record<string, { content: string; error: boolean }>>({});
  const [visibleCount, setVisibleCount] = useState(10);
  const [aiSummary, setAiSummary] = useState<{ theme: string; content: string } | null>(null);
  const [aiSummaryLoading, setAiSummaryLoading] = useState(false);

  // Load data
  useEffect(() => {
    if (!user) return;
    async function load() {
      const [attempts, sessions] = await Promise.all([
        getUserAttempts(user!.uid, 500),
        getUserSessions(user!.uid, 50),
      ]);
      setAllAttempts(attempts);
      setAllSessions(sessions);
      setLoading(false);
    }
    load();
  }, [user]);

  const handleSectionChange = (section: Section | "all") => {
    setSectionFilter(section);
    setQuestionTypeFilter("all");
  };

  // Filtering chain
  const filteredAttempts = useMemo(() => {
    let result = filterByTime(allAttempts, timeRange);
    result = filterBySection(result, sectionFilter);
    result = filterByQuestionType(result, questionTypeFilter);
    return result;
  }, [allAttempts, timeRange, sectionFilter, questionTypeFilter]);

  const analytics = useMemo(() => computeAnalytics(filteredAttempts), [filteredAttempts]);
  const recommendations = useMemo(() => computeRecommendations(analytics), [analytics]);
  const sessionCount = useMemo(() => countSessionsInRange(allSessions, timeRange), [allSessions, timeRange]);

  const missedItems = useMemo(() => {
    return filteredAttempts
      .filter((a) => !a.correct)
      .map((a) => {
        const q = questionMap[a.questionId];
        if (!q) return null;
        return { attempt: a, question: q };
      })
      .filter(Boolean) as { attempt: UserAttempt; question: Question }[];
  }, [filteredAttempts]);

  // Lazy-load walkthrough on expand
  useEffect(() => {
    if (!expandedId || walkthroughs[expandedId]) return;
    const item = missedItems.find((m) => m.attempt.questionId === expandedId);
    if (!item) return;
    let cancelled = false;
    generateWalkthrough(
      item.question.text,
      item.question.choices,
      item.question.correctAnswer,
      item.attempt.selectedAnswer,
      item.question.explanation,
      item.question.section
    )
      .then((content) => { if (!cancelled) setWalkthroughs((prev) => ({ ...prev, [expandedId]: { content, error: false } })); })
      .catch(() => { if (!cancelled) setWalkthroughs((prev) => ({ ...prev, [expandedId]: { content: item.question.explanation, error: true } })); });
    return () => { cancelled = true; };
  }, [expandedId, walkthroughs, missedItems]);

  // Auth redirect
  useEffect(() => {
    if (!authLoading && !user) router.push("/");
  }, [user, authLoading, router]);

  function handleAiSummary(theme: Theme) {
    if (aiSummaryLoading) return;
    setAiSummaryLoading(true);
    const missed = missedItems
      .filter((m) => m.question.themes.includes(theme))
      .map((m) => ({ text: m.question.text, correctAnswer: m.question.choices[m.question.correctAnswer] }));
    if (missed.length === 0) { setAiSummaryLoading(false); return; }
    generateThemeSummary(THEME_LABELS[theme], missed.slice(0, 5))
      .then((content) => setAiSummary({ theme: THEME_LABELS[theme], content }))
      .catch(() => setAiSummary(null))
      .finally(() => setAiSummaryLoading(false));
  }

  if (!user || loading) return <PageSkeleton label="Loading review dashboard..." />;

  if (allAttempts.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <p className="text-lg text-gray-600">No practice history yet. Complete some questions first!</p>
        <button onClick={() => router.push("/practice")} className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">Start Practicing</button>
      </div>
    );
  }

  const visibleMissed = missedItems.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <button onClick={() => router.push("/")} className="text-sm text-gray-500 hover:text-gray-700">&larr; Home</button>
          <h1 className="text-lg font-semibold">Review Dashboard</h1>
          <div />
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8 space-y-8">
        {/* ── Filter Bar ── */}
        <div className="rounded-xl bg-white p-4 shadow-sm border space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-gray-500">Period:</span>
            <div className="flex gap-1 rounded-lg bg-gray-100 p-1">
              {TIME_RANGE_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setTimeRange(opt.value)}
                  className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                    timeRange === opt.value ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-gray-500">Section:</span>
            <SectionTabs value={sectionFilter} onChange={handleSectionChange} />
            {sectionFilter !== "all" && (
              <>
                <span className="text-sm font-medium text-gray-500 ml-2">Type:</span>
                <select
                  value={questionTypeFilter}
                  onChange={(e) => setQuestionTypeFilter(e.target.value as QuestionType | "all")}
                  className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm"
                >
                  <option value="all">All Types</option>
                  {getQuestionTypesForSection(sectionFilter).map((qt) => (
                    <option key={qt.value} value={qt.value}>{qt.label}</option>
                  ))}
                </select>
              </>
            )}
          </div>
        </div>

        {filteredAttempts.length === 0 ? (
          <div className="rounded-xl bg-white p-12 text-center shadow-sm border">
            <p className="text-gray-500">No questions found for this time range and filters.</p>
          </div>
        ) : (
          <>
            {/* ── Overview Stats ── */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <StatCard label="Questions" value={analytics.totalAttempted} />
              <StatCard label="Accuracy" value={`${analytics.overallAccuracy}%`} sublabel={`${analytics.totalCorrect} correct`} />
              <StatCard label="Missed" value={analytics.totalMissed} />
              <StatCard label="Sessions" value={sessionCount} />
            </div>

            {/* ── Section Accuracy ── */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {(["quant", "verbal", "data-insights"] as Section[]).map((section) => {
                const data = analytics.sectionBreakdown[section];
                if (data.total === 0) return (
                  <div key={section} className={`rounded-xl ${SECTION_COLORS[section].bg} ${SECTION_COLORS[section].border} border p-5`}>
                    <h3 className={`text-sm font-semibold ${SECTION_COLORS[section].text}`}>{SECTION_SHORT_LABELS[section]}</h3>
                    <p className="mt-2 text-sm text-gray-400">No data</p>
                  </div>
                );
                const ringColor = data.accuracy >= 75 ? "text-green-500" : data.accuracy >= 50 ? "text-yellow-500" : "text-red-500";
                return (
                  <div key={section} className={`rounded-xl ${SECTION_COLORS[section].bg} ${SECTION_COLORS[section].border} border p-5 flex items-center gap-4`}>
                    <ProgressRing percent={data.accuracy} size={64} strokeWidth={5} color={ringColor} />
                    <div>
                      <h3 className={`text-sm font-semibold ${SECTION_COLORS[section].text}`}>{SECTION_SHORT_LABELS[section]}</h3>
                      <p className="text-xs text-gray-500 mt-1">{data.correct}/{data.total} correct</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ── Analytics Grid ── */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {/* Theme Accuracy */}
              {analytics.themeBreakdown.length > 0 && (
                <div className="rounded-xl bg-white p-5 shadow-sm border">
                  <h2 className="text-base font-semibold mb-4">Accuracy by Theme</h2>
                  <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
                    {analytics.themeBreakdown.map(({ theme, total, accuracy }) => (
                      <div key={theme} className="flex items-center gap-3">
                        <span className="w-36 text-sm font-medium truncate shrink-0" title={THEME_LABELS[theme]}>{THEME_LABELS[theme]}</span>
                        <div className="flex-1 h-2.5 rounded-full bg-gray-100 overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all ${accuracy >= 80 ? "bg-green-500" : accuracy >= 60 ? "bg-yellow-500" : "bg-red-500"}`}
                            style={{ width: `${Math.max(accuracy, 2)}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-500 w-20 text-right shrink-0">{accuracy}% ({total})</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Right column: Difficulty + Question Type */}
              <div className="space-y-4">
                {/* Difficulty */}
                <div className="rounded-xl bg-white p-5 shadow-sm border">
                  <h2 className="text-base font-semibold mb-4">By Difficulty</h2>
                  <div className="space-y-3">
                    {DIFFICULTY_ORDER.map((d) => {
                      const data = analytics.difficultyBreakdown[d];
                      if (data.total === 0) return null;
                      return (
                        <div key={d} className="flex items-center gap-3">
                          <span className="w-16 text-sm font-medium">{DIFFICULTY_LABELS[d]}</span>
                          <div className="flex-1 h-2.5 rounded-full bg-gray-100 overflow-hidden">
                            <div
                              className={`h-full rounded-full ${data.accuracy >= 80 ? "bg-green-500" : data.accuracy >= 60 ? "bg-yellow-500" : "bg-red-500"}`}
                              style={{ width: `${Math.max(data.accuracy, 2)}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-500 w-24 text-right">{data.accuracy}% ({data.correct}/{data.total})</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Question Type */}
                {analytics.questionTypeBreakdown.length > 0 && (
                  <div className="rounded-xl bg-white p-5 shadow-sm border">
                    <h2 className="text-base font-semibold mb-4">By Question Type</h2>
                    <div className="space-y-3">
                      {analytics.questionTypeBreakdown.map(({ type, label, total, accuracy, correct }) => (
                        <div key={type} className="flex items-center gap-3">
                          <span className="w-36 text-sm font-medium truncate shrink-0">{label}</span>
                          <div className="flex-1 h-2.5 rounded-full bg-gray-100 overflow-hidden">
                            <div
                              className={`h-full rounded-full ${accuracy >= 80 ? "bg-green-500" : accuracy >= 60 ? "bg-yellow-500" : "bg-red-500"}`}
                              style={{ width: `${Math.max(accuracy, 2)}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-500 w-24 text-right">{accuracy}% ({correct}/{total})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ── Recommendations ── */}
            {recommendations.length > 0 && (
              <div className="rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-6">
                <h2 className="text-base font-semibold text-blue-900 mb-4">Recommended Focus Areas</h2>
                <div className="space-y-3">
                  {recommendations.map((rec) => (
                    <div key={rec.id} className="flex items-center justify-between rounded-lg bg-white p-4 border">
                      <div>
                        <p className="font-medium text-sm">{rec.title}</p>
                        <p className="text-xs text-gray-500">{rec.reason}</p>
                      </div>
                      <button
                        onClick={() => router.push(rec.practiceUrl)}
                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 shrink-0 ml-4"
                      >
                        Practice
                      </button>
                    </div>
                  ))}
                </div>

                {/* AI summary for weakest theme */}
                {analytics.themeBreakdown.length > 0 && analytics.themeBreakdown[0].accuracy < 75 && (
                  <div className="mt-4">
                    {aiSummary ? (
                      <div className="rounded-lg bg-white border p-5">
                        <h3 className="font-semibold text-sm text-blue-800 mb-2">AI Analysis: {aiSummary.theme}</h3>
                        <Markdown className="text-sm text-blue-900">{aiSummary.content}</Markdown>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleAiSummary(analytics.themeBreakdown[0].theme)}
                        disabled={aiSummaryLoading}
                        className="text-sm text-blue-700 hover:text-blue-900 font-medium disabled:opacity-50"
                      >
                        {aiSummaryLoading ? (
                          <span className="flex items-center gap-2">
                            <span className="h-3 w-3 animate-spin rounded-full border-2 border-blue-700 border-t-transparent" />
                            Generating AI analysis...
                          </span>
                        ) : (
                          `Get AI analysis for ${THEME_LABELS[analytics.themeBreakdown[0].theme]}`
                        )}
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* ── Missed Questions ── */}
            {missedItems.length > 0 && (
              <div>
                <h2 className="text-base font-semibold mb-4">Missed Questions ({missedItems.length})</h2>
                <div className="space-y-3">
                  {visibleMissed.map(({ attempt, question }) => {
                    const isExpanded = expandedId === attempt.questionId;
                    const cached = walkthroughs[attempt.questionId];
                    return (
                      <div key={`${attempt.questionId}-${attempt.timestamp}`} className="rounded-xl bg-white shadow-sm border overflow-hidden">
                        {/* Collapsed header */}
                        <button
                          onClick={() => setExpandedId(isExpanded ? null : attempt.questionId)}
                          className="w-full text-left p-4 hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                <Badge variant={question.section === "quant" ? "blue" : question.section === "verbal" ? "green" : "purple"} size="sm">
                                  {SECTION_SHORT_LABELS[question.section]}
                                </Badge>
                                <Badge variant={question.difficulty === "hard" ? "red" : question.difficulty === "medium" ? "yellow" : "default"} size="sm">
                                  {question.difficulty}
                                </Badge>
                                {question.themes.slice(0, 2).map((t) => (
                                  <span key={t} className="text-xs text-gray-400">{THEME_LABELS[t]}</span>
                                ))}
                              </div>
                              <p className="text-sm text-gray-800 line-clamp-2">{question.text}</p>
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                              <span className="text-xs text-gray-400">{formatRelativeTime(attempt.timestamp)}</span>
                              <svg className={`h-4 w-4 text-gray-400 transition-transform ${isExpanded ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                        </button>

                        {/* Expanded content */}
                        {isExpanded && (
                          <div className="border-t px-4 py-5 space-y-4">
                            {question.passage && (
                              <div className="rounded-lg bg-slate-50 border border-slate-200 p-4">
                                <h4 className="font-semibold text-slate-700 text-xs mb-1">Reading Passage</h4>
                                <p className="text-sm leading-relaxed text-slate-800 whitespace-pre-line">{question.passage}</p>
                              </div>
                            )}

                            <div className="space-y-2">
                              {question.choices.map((choice, i) => {
                                let style = "border-gray-200 bg-white";
                                if (i === question.correctAnswer) style = "border-green-500 bg-green-50";
                                else if (i === attempt.selectedAnswer) style = "border-red-500 bg-red-50";
                                return (
                                  <div key={i} className={`rounded-lg border-2 ${style} p-3 text-sm`}>
                                    <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-xs font-semibold">{String.fromCharCode(65 + i)}</span>
                                    {choice}
                                    {i === question.correctAnswer && <span className="ml-2 text-green-600 text-xs font-medium">Correct</span>}
                                    {i === attempt.selectedAnswer && i !== question.correctAnswer && <span className="ml-2 text-red-600 text-xs font-medium">Your answer</span>}
                                  </div>
                                );
                              })}
                            </div>

                            <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
                              <h4 className="font-semibold text-amber-800 text-sm mb-2">{cached?.error ? "Explanation" : "Step-by-Step Walkthrough"}</h4>
                              {!cached ? (
                                <div className="flex items-center gap-2 text-amber-700 text-sm">
                                  <div className="h-3 w-3 animate-spin rounded-full border-2 border-amber-700 border-t-transparent" />
                                  Generating walkthrough...
                                </div>
                              ) : (
                                <Markdown className="text-amber-900 text-sm">{cached.content}</Markdown>
                              )}
                            </div>

                            {question.source && (
                              <div className="flex justify-end"><SourceBadge source={question.source} /></div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {missedItems.length > visibleCount && (
                  <button
                    onClick={() => setVisibleCount((c) => c + 10)}
                    className="mt-4 w-full rounded-xl border border-gray-300 bg-white py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Show More ({missedItems.length - visibleCount} remaining)
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

// ─── Page Wrapper ────────────────────────────────────────────────────

function ReviewContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session");

  if (sessionId) return <SessionReview sessionId={sessionId} />;
  return <DashboardReview />;
}

export default function ReviewPage() {
  return (
    <Suspense fallback={<PageSkeleton label="Loading review..." />}>
      <ReviewContent />
    </Suspense>
  );
}
