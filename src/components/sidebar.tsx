"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { useExamOptional } from "@/exams/exam-context";
import { getAllExams } from "@/exams/registry";
import { useState } from "react";

const NAV_ITEMS = [
  {
    path: "dashboard",
    label: "Dashboard",
    icon: (
      <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    path: "mock",
    label: "Mock Exam",
    icon: (
      <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    path: "practice",
    label: "Practice",
    icon: (
      <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
      </svg>
    ),
  },
  {
    path: "learn",
    label: "Learn",
    icon: (
      <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    path: "review",
    label: "Review",
    icon: (
      <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
  {
    path: "study-guide",
    label: "Study Guide",
    icon: (
      <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
      </svg>
    ),
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const exam = useExamOptional();
  const allExams = getAllExams();
  const [examSwitcherOpen, setExamSwitcherOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  if (!user) return null;

  const pathParts = pathname.split("/").filter(Boolean);
  const examSlug = exam?.slug ?? pathParts[0] ?? "gmat";
  const basePath = `/${examSlug}`;
  const currentExam = allExams.find((e) => e.slug === examSlug);

  // Hide sidebar entirely during active mock/diagnostic exams
  const isExamInProgress =
    (pathname.includes("/mock") && !pathname.includes("/results")) ||
    (pathname.includes("/diagnostic") && !pathname.includes("/results"));

  if (isExamInProgress) return null;

  const sidebarContent = (
    <>
      {/* Logo / Brand */}
      <div className="px-4 pt-5 pb-2">
        <Link href={`${basePath}/dashboard`} className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0d0d0d]">
            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
            </svg>
          </div>
          <span className="text-[15px] font-bold text-[#0d0d0d] tracking-tight">Road to 805</span>
        </Link>
      </div>

      {/* Exam Switcher */}
      <div className="px-3 mt-4 mb-1">
        <div className="relative">
          <button
            onClick={() => setExamSwitcherOpen(!examSwitcherOpen)}
            className="flex w-full items-center justify-between rounded-lg border border-[#e5e7eb] bg-[#fafafa] px-3 py-2 text-left hover:bg-[#f3f4f6] transition-colors"
          >
            <div>
              <p className="text-xs font-medium text-[#6b7280]">Studying for</p>
              <p className="text-sm font-semibold text-[#0d0d0d]">{currentExam?.name ?? "Select Exam"}</p>
            </div>
            <svg className={`h-4 w-4 text-[#9ca3af] transition-transform ${examSwitcherOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>

          {examSwitcherOpen && (
            <div className="absolute left-0 right-0 top-full mt-1 z-50 rounded-lg border border-[#e5e7eb] bg-white shadow-lg overflow-hidden">
              {allExams.map((e) => (
                <Link
                  key={e.slug}
                  href={`/${e.slug}/dashboard`}
                  onClick={() => { setExamSwitcherOpen(false); setMobileOpen(false); }}
                  className={`flex items-center gap-3 px-3 py-2.5 text-sm transition-colors ${
                    e.slug === examSlug
                      ? "bg-[#f3f4f6] font-semibold text-[#0d0d0d]"
                      : "text-[#374151] hover:bg-[#fafafa]"
                  }`}
                >
                  <span className={`h-2 w-2 rounded-full ${e.slug === examSlug ? "bg-[#0d0d0d]" : "bg-[#d1d5db]"}`} />
                  {e.shortName} &mdash; {e.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-4 px-3 flex-1">
        <div className="space-y-0.5">
          {NAV_ITEMS.map(({ path, label, icon }) => {
            const href = `${basePath}/${path}`;
            const isActive = path === "dashboard"
              ? pathname === href || pathname === basePath || pathname === `${basePath}/`
              : pathname.startsWith(href);
            return (
              <Link
                key={path}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] font-medium transition-colors ${
                  isActive
                    ? "bg-[#0d0d0d] text-white"
                    : "text-[#374151] hover:bg-[#f3f4f6]"
                }`}
              >
                <span className={isActive ? "text-white" : "text-[#6b7280]"}>{icon}</span>
                {label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* User section */}
      <div className="border-t border-[#e5e7eb] px-3 py-3 mt-auto">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0d0d0d] text-xs font-bold text-white shrink-0">
            {user.displayName?.[0]?.toUpperCase() ?? "U"}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-[#0d0d0d] truncate">{user.displayName ?? "User"}</p>
            <p className="text-xs text-[#9ca3af] truncate">{user.email}</p>
          </div>
          <button
            onClick={logout}
            title="Sign out"
            className="shrink-0 rounded-md p-1.5 text-[#9ca3af] hover:bg-[#f3f4f6] hover:text-[#374151] transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-3 left-3 z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-[#e5e7eb] bg-white shadow-sm lg:hidden"
        aria-label="Open menu"
      >
        <svg className="h-5 w-5 text-[#374151]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:left-0 lg:w-[240px] lg:border-r lg:border-[#e5e7eb] lg:bg-white z-40">
        {sidebarContent}
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMobileOpen(false)} />
          <aside className="absolute inset-y-0 left-0 w-[280px] bg-white shadow-xl flex flex-col animate-fade-in">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-3 right-3 rounded-md p-1.5 text-[#6b7280] hover:bg-[#f3f4f6]"
              aria-label="Close menu"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  );
}
