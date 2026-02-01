"use client";

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from "react";
import { User, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { getAuthInstance, getDbInstance, googleProvider } from "./firebase";
import { UserProfile } from "@/types";

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  loading: true,
  signInWithGoogle: async () => {},
  logout: async () => {},
  refreshProfile: async () => {},
});

function isFirebaseConfigured(): boolean {
  try {
    getAuthInstance();
    return true;
  } catch {
    return false;
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(isFirebaseConfigured);

  useEffect(() => {
    if (!loading) return;

    const auth = getAuthInstance();
    const db = getDbInstance();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        const profileRef = doc(db, "users", user.uid);
        const profileSnap = await getDoc(profileRef);
        if (profileSnap.exists()) {
          setProfile(profileSnap.data() as UserProfile);
        } else {
          const newProfile: UserProfile = {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            createdAt: Date.now(),
            totalSessions: 0,
            totalQuestions: 0,
            totalCorrect: 0,
          };
          await setDoc(profileRef, newProfile);
          setProfile(newProfile);
        }
      } else {
        setProfile(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [loading]);

  const signInWithGoogle = async () => {
    const auth = getAuthInstance();
    await signInWithPopup(auth, googleProvider);
  };

  const logout = async () => {
    const auth = getAuthInstance();
    await signOut(auth);
  };

  const refreshProfile = useCallback(async () => {
    if (!user) return;
    const db = getDbInstance();
    const profileRef = doc(db, "users", user.uid);
    const profileSnap = await getDoc(profileRef);
    if (profileSnap.exists()) {
      setProfile(profileSnap.data() as UserProfile);
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, profile, loading, signInWithGoogle, logout, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
