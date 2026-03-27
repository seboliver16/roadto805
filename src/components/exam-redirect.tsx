"use client";

import { Suspense, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { PageSkeleton } from "./loading-skeleton";

function RedirectInner() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { profile, loading } = useAuth();

  useEffect(() => {
    if (loading) return;
    const examSlug = profile?.activeExam || "gmat";
    const qs = searchParams.toString();
    router.replace(`/${examSlug}${pathname}${qs ? `?${qs}` : ""}`);
  }, [loading, profile, pathname, searchParams, router]);

  return <PageSkeleton />;
}

/**
 * Redirects legacy routes (e.g. /dashboard) to their exam-scoped equivalents
 * (e.g. /gmat/dashboard) using the user's active exam or defaulting to "gmat".
 * Preserves query parameters.
 */
export function ExamRedirect() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <RedirectInner />
    </Suspense>
  );
}
