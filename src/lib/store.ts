import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  updateDoc,
  increment,
} from "firebase/firestore";
import { getDbInstance } from "./firebase";
import { UserAttempt, PracticeSession, UserProfile, StudyPlan, StudyGuideItem, ChapterProgress } from "@/types";

function db() {
  return getDbInstance();
}

/** Strip undefined values — Firestore rejects them. */
function clean<T extends Record<string, unknown>>(obj: T): T {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== undefined)
  ) as T;
}

// --- Practice Sessions ---

export async function createSession(session: PracticeSession): Promise<string> {
  const ref = doc(collection(db(), "sessions"));
  await setDoc(ref, clean({ ...session, id: ref.id }));
  return ref.id;
}

export async function updateSession(sessionId: string, data: Partial<PracticeSession>) {
  const ref = doc(db(), "sessions", sessionId);
  await updateDoc(ref, clean(data as Record<string, unknown>));
}

export async function getSession(sessionId: string): Promise<PracticeSession | null> {
  const ref = doc(db(), "sessions", sessionId);
  const snap = await getDoc(ref);
  return snap.exists() ? (snap.data() as PracticeSession) : null;
}

export async function getUserSessions(userId: string, limitCount = 20): Promise<PracticeSession[]> {
  const q = query(
    collection(db(), "sessions"),
    where("userId", "==", userId),
    where("completed", "==", true),
    orderBy("timestamp", "desc"),
    limit(limitCount)
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => d.data() as PracticeSession);
}

// --- Attempts ---

export async function saveAttempt(attempt: UserAttempt): Promise<string> {
  const ref = doc(collection(db(), "attempts"));
  await setDoc(ref, { ...attempt, id: ref.id });
  return ref.id;
}

export async function getUserAttempts(userId: string, limitCount = 100): Promise<UserAttempt[]> {
  const q = query(
    collection(db(), "attempts"),
    where("userId", "==", userId),
    orderBy("timestamp", "desc"),
    limit(limitCount)
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => d.data() as UserAttempt);
}

// --- User Profile ---

export async function updateProfileStats(userId: string, questionsAnswered: number, correctAnswers: number) {
  const ref = doc(db(), "users", userId);
  await updateDoc(ref, {
    totalSessions: increment(1),
    totalQuestions: increment(questionsAnswered),
    totalCorrect: increment(correctAnswers),
  });
}

export async function getProfile(userId: string): Promise<UserProfile | null> {
  const ref = doc(db(), "users", userId);
  const snap = await getDoc(ref);
  return snap.exists() ? (snap.data() as UserProfile) : null;
}

export async function updateProfile(userId: string, data: Partial<UserProfile>) {
  const ref = doc(db(), "users", userId);
  await updateDoc(ref, clean(data as Record<string, unknown>));
}

// --- Study Plans ---

export async function createStudyPlan(plan: StudyPlan): Promise<string> {
  const ref = doc(collection(db(), "studyPlans"));
  await setDoc(ref, { ...plan, id: ref.id });
  return ref.id;
}

export async function getStudyPlan(planId: string): Promise<StudyPlan | null> {
  const ref = doc(db(), "studyPlans", planId);
  const snap = await getDoc(ref);
  return snap.exists() ? (snap.data() as StudyPlan) : null;
}

export async function getUserStudyPlan(userId: string): Promise<StudyPlan | null> {
  const q = query(
    collection(db(), "studyPlans"),
    where("userId", "==", userId),
    orderBy("createdAt", "desc"),
    limit(1)
  );
  const snap = await getDocs(q);
  if (snap.empty) return null;
  return snap.docs[0].data() as StudyPlan;
}

export async function updateStudyPlanProgress(planId: string, chapterId: string, completed: boolean) {
  const plan = await getStudyPlan(planId);
  if (!plan) return;
  const updated = plan.recommendedChapters.map((ch) =>
    ch.chapterId === chapterId ? { ...ch, completed } : ch
  );
  const ref = doc(db(), "studyPlans", planId);
  await updateDoc(ref, { recommendedChapters: updated, updatedAt: Date.now() });
}

// --- Chapter Progress ---

export async function markChapterComplete(userId: string, chapterId: string, chapterTitle: string) {
  const ref = doc(db(), "users", userId, "chapterProgress", chapterId);
  await setDoc(ref, clean({
    chapterId,
    chapterTitle,
    completed: true,
    completedAt: Date.now(),
  }));
}

export async function getChapterProgress(userId: string, chapterId: string): Promise<ChapterProgress | null> {
  const ref = doc(db(), "users", userId, "chapterProgress", chapterId);
  const snap = await getDoc(ref);
  return snap.exists() ? (snap.data() as ChapterProgress) : null;
}

export async function getAllChapterProgress(userId: string): Promise<ChapterProgress[]> {
  const q = query(collection(db(), "users", userId, "chapterProgress"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => d.data() as ChapterProgress);
}

// --- Study Guide ---

export async function addStudyGuideItem(item: Omit<StudyGuideItem, "id">): Promise<string> {
  const ref = doc(collection(db(), "users", item.userId, "studyGuide"));
  await setDoc(ref, clean({ ...item, id: ref.id }));
  return ref.id;
}

export async function getStudyGuideItems(userId: string): Promise<StudyGuideItem[]> {
  const q = query(
    collection(db(), "users", userId, "studyGuide"),
    orderBy("createdAt", "desc")
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => d.data() as StudyGuideItem);
}

export async function deleteStudyGuideItem(userId: string, itemId: string) {
  const ref = doc(db(), "users", userId, "studyGuide", itemId);
  await deleteDoc(ref);
}
