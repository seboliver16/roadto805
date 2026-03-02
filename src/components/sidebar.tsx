"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { useExamOptional } from "@/exams/exam-context";
import { getAllExams } from "@/exams/registry";
import { useState, useEffect, useRef } from "react";

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

export function Sidebar({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const exam = useExamOptional();
  const allExams = getAllExams();
  const [examSwitcherOpen, setExamSwitcherOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const examMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!userMenuOpen && !examSwitcherOpen) return;
    const handler = (e: MouseEvent) => {
      if (userMenuOpen && userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
      if (examSwitcherOpen && examMenuRef.current && !examMenuRef.current.contains(e.target as Node)) {
        setExamSwitcherOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [userMenuOpen, examSwitcherOpen]);

  if (!user) return null;

  const pathParts = pathname.split("/").filter(Boolean);
  const examSlug = exam?.slug ?? pathParts[0] ?? "gmat";
  const basePath = `/${examSlug}`;
  const currentExam = allExams.find((e) => e.slug === examSlug);

  const isExamInProgress =
    (pathname.includes("/mock") && !pathname.includes("/results")) ||
    (pathname.includes("/diagnostic") && !pathname.includes("/results"));

  if (isExamInProgress) return null;

  const sidebarInner = (
    <div className="flex h-full flex-col">
      {/* Top row */}
      <div className={`flex items-center h-[52px] shrink-0 ${collapsed ? "justify-center px-2" : "justify-between px-3"}`}>
        {!collapsed && (
          <Link href={`${basePath}/dashboard`} className="flex items-center gap-2 min-w-0">
            <span className="text-[14px] font-semibold text-white/90 truncate">Road to 805</span>
          </Link>
        )}
        <button
          onClick={onToggle}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-white/40 hover:text-white/80 hover:bg-white/[0.08] transition-colors shrink-0"
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          ) : (
            <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Exam Switcher */}
      {!collapsed && (
        <div className="px-2 mb-1" ref={examMenuRef}>
          <div className="relative">
            <button
              onClick={() => setExamSwitcherOpen(!examSwitcherOpen)}
              className="flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left hover:bg-white/[0.06] transition-colors"
            >
              <span className="text-[13px] font-medium text-white/60">{currentExam?.shortName ?? "Exam"}</span>
              <svg className={`h-3 w-3 text-white/30 transition-transform ${examSwitcherOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {examSwitcherOpen && (
              <div className="absolute left-0 right-0 top-full mt-1 z-50 rounded-lg bg-[#2f2f2f] shadow-xl overflow-hidden border border-white/[0.08]">
                {allExams.map((e) => (
                  <Link
                    key={e.slug}
                    href={`/${e.slug}/dashboard`}
                    onClick={() => { setExamSwitcherOpen(false); setMobileOpen(false); }}
                    className={`flex items-center gap-2.5 px-3 py-2 text-[13px] transition-colors ${
                      e.slug === examSlug
                        ? "bg-white/[0.08] text-white font-medium"
                        : "text-white/50 hover:bg-white/[0.05] hover:text-white/70"
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${e.slug === examSlug ? "bg-white" : "bg-white/20"}`} />
                    {e.shortName}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 px-2 overflow-y-auto">
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
                title={collapsed ? label : undefined}
                className={`flex items-center rounded-lg transition-colors ${
                  collapsed ? "justify-center h-10 w-10 mx-auto" : "gap-2.5 px-2.5 py-2"
                } ${
                  isActive
                    ? "bg-white/[0.1] text-white"
                    : "text-white/50 hover:bg-white/[0.06] hover:text-white/80"
                }`}
              >
                <span className="shrink-0">{icon}</span>
                {!collapsed && <span className="text-[13px] font-medium">{label}</span>}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* User */}
      <div className="pb-3 pt-2 mt-auto px-2" ref={userMenuRef}>
        <div className="relative">
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className={`flex w-full items-center rounded-lg hover:bg-white/[0.06] transition-colors ${
              collapsed ? "justify-center p-2" : "gap-2.5 px-2.5 py-2"
            }`}
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 text-[11px] font-bold text-white shrink-0">
              {user.displayName?.[0]?.toUpperCase() ?? "U"}
            </div>
            {!collapsed && (
              <>
                <span className="text-[13px] font-medium text-white/70 truncate flex-1 text-left">
                  {user.displayName?.split(" ")[0] ?? "User"}
                </span>
                <svg className="h-3 w-3 text-white/30 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </>
            )}
          </button>

          {userMenuOpen && (
            <div className={`absolute bottom-full mb-1 z-50 rounded-lg bg-[#2f2f2f] shadow-xl overflow-hidden border border-white/[0.08] min-w-[200px] ${
              collapsed ? "left-full ml-2 bottom-0 mb-0" : "left-0 right-0"
            }`}>
              <div className="px-3 py-2.5 border-b border-white/[0.08]">
                <p className="text-[13px] font-medium text-white/80 truncate">{user.displayName ?? "User"}</p>
                <p className="text-[11px] text-white/40 truncate">{user.email}</p>
              </div>
              <button
                onClick={() => { setUserMenuOpen(false); logout(); }}
                className="flex w-full items-center gap-2 px-3 py-2 text-[13px] text-white/50 hover:bg-white/[0.06] hover:text-white/70 transition-colors"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                </svg>
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {!mobileOpen && (
        <button
          onClick={() => setMobileOpen(true)}
          className="fixed top-3 left-3 z-50 flex h-9 w-9 items-center justify-center rounded-lg bg-[#171717] text-white/60 hover:text-white lg:hidden transition-colors"
          aria-label="Open menu"
        >
          <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      )}

      <aside
        className={`hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:left-0 lg:bg-[#171717] z-40 transition-[width] duration-200 ease-in-out ${
          collapsed ? "lg:w-[60px]" : "lg:w-[260px]"
        }`}
      >
        {sidebarInner}
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <aside className="absolute inset-y-0 left-0 w-[280px] bg-[#171717] flex flex-col animate-slide-in">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-3 right-3 rounded-lg p-1.5 text-white/30 hover:text-white/60 hover:bg-white/[0.06] transition-colors"
              aria-label="Close menu"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
            {sidebarInner}
          </aside>
        </div>
      )}
    </>
  );
}
