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
import { UserAttempt, PracticeSession, UserProfile } from "@/types";

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
