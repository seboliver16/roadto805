"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { StudyGuideItem } from "@/types";
import { getStudyGuideItems, deleteStudyGuideItem } from "@/lib/store";
import { PageSkeleton } from "@/components/loading-skeleton";

export default function StudyGuidePage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [items, setItems] = useState<StudyGuideItem[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (!user) return;
    getStudyGuideItems(user.uid)
      .then(setItems)
      .finally(() => setFetching(false));
  }, [user]);

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

  // Group by chapter
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
      <p className="text-sm text-[#6b7280] mb-8">
        Passages and concepts you saved while reading. Highlight text in any chapter to add items here.
      </p>

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
    </main>
  );
}
