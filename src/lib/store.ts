import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  updateDoc,
  increment,
} from "firebase/firestore";
import { getDbInstance } from "./firebase";
import { UserAttempt, PracticeSession, UserProfile, StudyPlan } from "@/types";

function db() {
  return getDbInstance();
}

// --- Practice Sessions ---

export async function createSession(session: PracticeSession): Promise<string> {
  const ref = doc(collection(db(), "sessions"));
  await setDoc(ref, { ...session, id: ref.id });
  return ref.id;
}

export async function updateSession(sessionId: string, data: Partial<PracticeSession>) {
  const ref = doc(db(), "sessions", sessionId);
  await updateDoc(ref, data);
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
  await updateDoc(ref, data);
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
