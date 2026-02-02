"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { StudyGuideItem, UserAttempt, THEME_LABELS, Theme, Question } from "@/types";
import { getStudyGuideItems, deleteStudyGuideItem, getUserAttempts } from "@/lib/store";
import { questionMap, allQuestions } from "@/data/questions";
import { PageSkeleton } from "@/components/loading-skeleton";
import { WeaknessQuiz, WeakThemeInfo } from "@/components/weakness-quiz";

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function buildWeaknessQuiz(attempts: UserAttempt[]): { questions: Question[]; weakThemes: WeakThemeInfo[] } {
  // Compute per-theme accuracy
  const themeStats = new Map<string, { correct: number; total: number }>();
  for (const a of attempts) {
    for (const t of a.themes) {
      const s = themeStats.get(t) || { correct: 0, total: 0 };
      s.total++;
      if (a.correct) s.correct++;
      themeStats.set(t, s);
    }
  }

  // Filter weak themes (< 75% accuracy, min 2 attempts)
  const weakThemes: WeakThemeInfo[] = [...themeStats.entries()]
    .map(([theme, s]) => ({
      theme: theme as Theme,
      accuracy: s.total > 0 ? s.correct / s.total : 0,
      total: s.total,
      questionCount: 0,
    }))
    .filter((t) => t.accuracy < 0.75 && t.total >= 2)
    .sort((a, b) => a.accuracy - b.accuracy);

  // Calculate questions per theme: min(4, max(1, ceil((1 - accuracy) * 4)))
  for (const t of weakThemes) {
    t.questionCount = Math.min(4, Math.max(1, Math.ceil((1 - t.accuracy) * 4)));
  }

  // Cap total at 15 questions
  let totalCount = weakThemes.reduce((sum, t) => sum + t.questionCount, 0);
  if (totalCount > 15) {
    const scale = 15 / totalCount;
    for (const t of weakThemes) {
      t.questionCount = Math.max(1, Math.round(t.questionCount * scale));
    }
  }

  // Select questions for each theme
  const result: Question[] = [];
  for (const t of weakThemes) {
    const themeQuestions = allQuestions.filter((q) => q.themes.includes(t.theme));
    result.push(...shuffleArray(themeQuestions).slice(0, t.questionCount));
  }

  // Deduplicate
  const seen = new Set<string>();
  const deduped = result.filter((q) => {
    if (seen.has(q.id)) return false;
    seen.add(q.id);
    return true;
  });

  return {
    questions: shuffleArray(deduped).slice(0, 15),
    weakThemes: weakThemes.filter((t) => t.questionCount > 0),
  };
}

export default function StudyGuidePage() {
  const router = useRouter();
  const { user, profile, loading } = useAuth();
  const [items, setItems] = useState<StudyGuideItem[]>([]);
  const [fetching, setFetching] = useState(true);
  const [activeTab, setActiveTab] = useState<"saved" | "missed" | "weakness">("saved");
  const [attempts, setAttempts] = useState<UserAttempt[]>([]);
  const [attemptsLoading, setAttemptsLoading] = useState(true);

  const firstName = (profile?.displayName ?? user?.displayName ?? "").split(" ")[0] || undefined;

  useEffect(() => {
    if (!user) return;
    getStudyGuideItems(user.uid)
      .then(setItems)
      .finally(() => setFetching(false));
  }, [user]);

  useEffect(() => {
    if (!user) return;
    getUserAttempts(user.uid, 500)
      .then(setAttempts)
      .finally(() => setAttemptsLoading(false));
  }, [user]);

  // Group missed questions by theme
  const missedByTheme = useMemo(() => {
    const latestMisses = new Map<string, UserAttempt>();
    for (const a of attempts) {
      if (!a.correct) {
        const existing = latestMisses.get(a.questionId);
        if (!existing || a.timestamp > existing.timestamp) {
          latestMisses.set(a.questionId, a);
        }
      }
    }

    const themeMap = new Map<string, { theme: string; questions: { attempt: UserAttempt; question: (typeof questionMap)[string] }[] }>();

    for (const [, attempt] of latestMisses) {
      const question = questionMap[attempt.questionId];
      if (!question) continue;

      for (const theme of attempt.themes) {
        if (!themeMap.has(theme)) {
          themeMap.set(theme, { theme, questions: [] });
        }
        themeMap.get(theme)!.questions.push({ attempt, question });
      }
    }

    return [...themeMap.values()].sort((a, b) => b.questions.length - a.questions.length);
  }, [attempts]);

  const totalMissed = useMemo(() => {
    const seen = new Set<string>();
    for (const g of missedByTheme) {
      for (const q of g.questions) seen.add(q.attempt.questionId);
    }
    return seen.size;
  }, [missedByTheme]);

  // Build weakness quiz data
  const { questions: weaknessQuestions, weakThemes } = useMemo(
    () => buildWeaknessQuiz(attempts),
    [attempts]
  );

  if (loading || fetching) return <PageSkeleton />;

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">Please sign in to access your study guide.</p>
      </div>
    );
  }

  const handleDelete = async (itemId: string) => {
    await deleteStudyGuideItem(user.uid, itemId);
    setItems((prev) => prev.filter((i) => i.id !== itemId));
  };

  // Group saved notes by chapter
  const grouped = items.reduce<Record<string, { chapterTitle: string; chapterId: string; items: StudyGuideItem[] }>>((acc, item) => {
    if (!acc[item.chapterId]) {
      acc[item.chapterId] = { chapterTitle: item.chapterTitle, chapterId: item.chapterId, items: [] };
    }
    acc[item.chapterId].items.push(item);
    return acc;
  }, {});

  const groups = Object.values(grouped);

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-bold text-[#0d0d0d] mb-2">Study Guide</h1>
      <p className="text-sm text-[#6b7280] mb-6">
        Review saved notes, learn from your mistakes, and strengthen weak areas.
      </p>

      {/* Tab bar */}
      <div className="flex gap-1 mb-8 border-b border-[#e5e7eb]">
        <button
          onClick={() => setActiveTab("saved")}
          className={`px-4 py-2.5 text-sm font-medium transition-colors ${
            activeTab === "saved"
              ? "text-[#0d0d0d] border-b-2 border-[#0d0d0d]"
              : "text-[#6b7280] hover:text-[#0d0d0d]"
          }`}
        >
          Saved Notes
          {items.length > 0 && (
            <span className="ml-2 rounded-full bg-[#f3f4f6] px-2 py-0.5 text-xs">{items.length}</span>
          )}
        </button>
        <button
          onClick={() => setActiveTab("missed")}
          className={`px-4 py-2.5 text-sm font-medium transition-colors ${
            activeTab === "missed"
              ? "text-[#0d0d0d] border-b-2 border-[#0d0d0d]"
              : "text-[#6b7280] hover:text-[#0d0d0d]"
          }`}
        >
          Missed Questions
          {totalMissed > 0 && (
            <span className="ml-2 rounded-full bg-red-50 text-red-600 px-2 py-0.5 text-xs">{totalMissed}</span>
          )}
        </button>
        <button
          onClick={() => setActiveTab("weakness")}
          className={`px-4 py-2.5 text-sm font-medium transition-colors ${
            activeTab === "weakness"
              ? "text-[#0d0d0d] border-b-2 border-[#0d0d0d]"
              : "text-[#6b7280] hover:text-[#0d0d0d]"
          }`}
        >
          Weakness Quiz
          {weakThemes.length > 0 && (
            <span className="ml-2 rounded-full bg-orange-50 text-orange-600 px-2 py-0.5 text-xs">{weakThemes.length}</span>
          )}
        </button>
      </div>

      {/* Saved Notes tab */}
      {activeTab === "saved" && (
        <>
          {groups.length === 0 ? (
            <div className="rounded-xl border border-[#e5e7eb] bg-white p-8 text-center">
              <svg className="mx-auto h-10 w-10 text-[#d1d5db]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
              </svg>
              <p className="mt-4 text-sm font-medium text-[#6b7280]">No saved items yet</p>
              <p className="mt-1 text-xs text-[#9ca3af]">
                While reading a chapter, highlight any text and click &ldquo;Save&rdquo; to add it here.
              </p>
              <button
                onClick={() => router.push("/learn")}
                className="mt-5 rounded-lg bg-[#0d0d0d] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#333] transition-colors"
              >
                Go to Learn
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {groups.map((group) => (
                <div key={group.chapterId}>
                  <button
                    onClick={() => router.push(`/learn/${group.chapterId}`)}
                    className="mb-3 text-sm font-semibold text-[#0d0d0d] hover:underline"
                  >
                    {group.chapterTitle}
                  </button>
                  <div className="space-y-2">
                    {group.items.map((item) => (
                      <div
                        key={item.id}
                        className="rounded-lg border border-[#e5e7eb] bg-white p-4"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-[#9ca3af] mb-1.5">{item.sectionTitle}</p>
                            <p className="text-sm text-[#374151] line-clamp-3">&ldquo;{item.selectedText}&rdquo;</p>
                          </div>
                          <button
                            onClick={() => item.id && handleDelete(item.id)}
                            className="shrink-0 rounded p-1 text-[#9ca3af] hover:text-red-500 hover:bg-red-50 transition-colors"
                            title="Remove"
                          >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* Missed Questions tab */}
      {activeTab === "missed" && (
        <>
          {attemptsLoading ? (
            <PageSkeleton />
          ) : missedByTheme.length === 0 ? (
            <div className="rounded-xl border border-[#e5e7eb] bg-white p-8 text-center">
              <svg className="mx-auto h-10 w-10 text-[#d1d5db]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="mt-4 text-sm font-medium text-[#6b7280]">No missed questions yet</p>
              <p className="mt-1 text-xs text-[#9ca3af]">
                Complete some practice sessions and missed questions will appear here.
              </p>
              <button
                onClick={() => router.push("/practice")}
                className="mt-5 rounded-lg bg-[#0d0d0d] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#333] transition-colors"
              >
                Start Practicing
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {missedByTheme.map((group) => (
                <div key={group.theme}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-[#0d0d0d]">
                      {THEME_LABELS[group.theme as Theme] ?? group.theme}
                    </h3>
                    <button
                      onClick={() => router.push(`/practice?themes=${group.theme}`)}
                      className="text-xs font-medium text-[#6b7280] hover:text-[#0d0d0d] transition-colors"
                    >
                      Practice this theme &rarr;
                    </button>
                  </div>
                  <div className="space-y-2">
                    {group.questions.map(({ attempt, question }) => (
                      <div
                        key={attempt.questionId}
                        className="rounded-lg border border-[#e5e7eb] bg-white p-4"
                      >
                        <p className="text-sm text-[#374151] line-clamp-2 mb-2">
                          {question.text.length > 150 ? question.text.slice(0, 150) + "..." : question.text}
                        </p>
                        <div className="flex items-center gap-3 text-xs">
                          <span className="text-red-500 font-medium">
                            Your answer: {String.fromCharCode(65 + attempt.selectedAnswer)}
                          </span>
                          <span className="text-green-600 font-medium">
                            Correct: {String.fromCharCode(65 + question.correctAnswer)}
                          </span>
                          {question.difficulty && (
                            <span className="text-[#9ca3af]">{question.difficulty}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* Weakness Quiz tab */}
      {activeTab === "weakness" && (
        <>
          {attemptsLoading ? (
            <PageSkeleton />
          ) : (
            <WeaknessQuiz
              questions={weaknessQuestions}
              weakThemes={weakThemes}
              userId={user.uid}
              userName={firstName}
            />
          )}
        </>
      )}
    </main>
  );
}
