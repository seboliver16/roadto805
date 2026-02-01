"use client";

import { useAuth } from "@/lib/auth-context";
import { Nav } from "./nav";

export function NavWrapper() {
  const { user } = useAuth();
  if (!user) return null;
  return <Nav />;
}
