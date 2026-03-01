"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { useExamOptional } from "@/exams/exam-context";

const NAV_ITEMS = [
  { path: "learn", label: "Learn" },
  { path: "practice", label: "Practice" },
  { path: "mock", label: "Mock Exam" },
  { path: "review", label: "Review" },
  { path: "study-guide", label: "Study Guide" },
];

export function Nav() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const exam = useExamOptional();

  if (!user) return null;

  // Derive the exam slug from the current URL path, e.g. /gmat/practice -> "gmat"
  const pathParts = pathname.split("/").filter(Boolean);
  const examSlug = exam?.slug ?? pathParts[0] ?? "gmat";
  const basePath = `/${examSlug}`;

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#e5e7eb]">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href={`${basePath}/dashboard`} className="text-lg font-bold tracking-tight text-[#0d0d0d]">
          {exam?.shortName ?? "Exam"} Prep
        </Link>

        <nav className="flex items-center gap-1">
          {NAV_ITEMS.map(({ path, label }) => {
            const href = `${basePath}/${path}`;
            const isActive = pathname.startsWith(href);
            return (
              <Link
                key={path}
                href={href}
                className={`px-4 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#0d0d0d] border-b-2 border-[#0d0d0d]"
                    : "text-[#6b7280] hover:text-[#0d0d0d]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0d0d0d] text-xs font-bold text-white">
            {user.displayName?.[0]?.toUpperCase() ?? "U"}
          </div>
          <button
            onClick={logout}
            className="text-sm text-[#6b7280] hover:text-[#0d0d0d] transition-colors"
          >
            Sign out
          </button>
        </div>
      </div>
    </header>
  );
}
