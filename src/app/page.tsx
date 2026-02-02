"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import { Section, SECTION_SHORT_LABELS, ThemeCategory, THEME_CATEGORIES, THEME_LABELS, getCategoriesBySection } from "@/types";
import { getUserStudyPlan } from "@/lib/store";
import { StudyPlan } from "@/types";
import { PageSkeleton } from "@/components/loading-skeleton";
import { ProgressRing } from "@/components/progress-ring";
import { StatCard } from "@/components/stat-card";
import { SectionTabs } from "@/components/section-tabs";

// ─── Icon Components ───────────────────────────────────────────────

function DiagnosticIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
    </svg>
  );
}

function LearnIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
  );
}

function PracticeIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
    </svg>
  );
}

function ReviewIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
    </svg>
  );
}

function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

function ArrowRightIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

// ─── Landing Page (unauthenticated) ────────────────────────────────

function LandingPage({ onSignIn }: { onSignIn: () => void }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] to-white" />
        <div className="relative mx-auto max-w-5xl px-4 pt-20 pb-16 text-center">
          <div className="animate-fade-in">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-white px-4 py-2 text-sm text-[#6b7280]">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              GMAT Focus Edition 2025
            </div>

            <h1 className="text-6xl sm:text-7xl font-bold tracking-tight text-[#0d0d0d] leading-[1.05]">
              Road to <span className="relative inline-block">805
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0 7 Q25 0, 50 4 Q75 8, 100 1" stroke="#0d0d0d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-xl text-[#6b7280] leading-relaxed">
              Diagnostic-driven GMAT prep that finds your weak spots, builds a study plan, and uses AI to explain exactly why you got it wrong.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["Quant", "Verbal", "Data Insights"].map((section) => (
                <span key={section} className="rounded-full border border-[#e5e7eb] bg-white px-4 py-2 text-sm font-semibold text-[#374151]">
                  {section}
                </span>
              ))}
            </div>

            <button
              onClick={onSignIn}
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[#0d0d0d] px-8 py-4 text-lg font-semibold text-white hover:bg-[#1a1a1a] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path fill="#fff" fillOpacity="0.9" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path fill="#fff" fillOpacity="0.7" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#fff" fillOpacity="0.5" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#fff" fillOpacity="0.6" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Get Started Free
            </button>

            <p className="mt-4 text-sm text-[#9ca3af]">Sign in with Google. No credit card required.</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-5xl px-4 py-20">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#9ca3af] mb-3">How it works</p>
          <h2 className="text-4xl font-bold text-[#0d0d0d]">Four steps to your target score</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <DiagnosticIcon className="h-7 w-7" />,
              step: "01",
              title: "Diagnose",
              desc: "18-question diagnostic across Quant, Verbal, and Data Insights maps your strengths and gaps.",
            },
            {
              icon: <LearnIcon className="h-7 w-7" />,
              step: "02",
              title: "Learn",
              desc: "A personalized study plan directs you to lessons targeting your specific weak areas.",
            },
            {
              icon: <PracticeIcon className="h-7 w-7" />,
              step: "03",
              title: "Practice",
              desc: "Drill 409 questions filtered by theme, section, or difficulty for targeted repetition.",
            },
            {
              icon: <ReviewIcon className="h-7 w-7" />,
              step: "04",
              title: "Review",
              desc: "AI walkthroughs explain why your answer was wrong — not just what the right answer is.",
            },
          ].map(({ icon, step, title, desc }) => (
            <div key={step} className="group rounded-xl border border-[#e5e7eb] bg-white p-6 transition-all hover:border-[#0d0d0d]/20 hover:shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fafafa] text-[#0d0d0d] group-hover:bg-[#0d0d0d] group-hover:text-white transition-colors">
                  {icon}
                </div>
                <span className="text-xs font-bold text-[#d1d5db]">{step}</span>
              </div>
              <h3 className="text-lg font-bold text-[#0d0d0d] mb-2">{title}</h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-[#e5e7eb] bg-[#fafafa]">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 text-center">
            {[
              { value: "409", label: "Practice questions" },
              { value: "25+", label: "Granular themes" },
              { value: "8", label: "Question types" },
              { value: "20+", label: "Lesson chapters" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl sm:text-4xl font-bold text-[#0d0d0d]">{value}</p>
                <p className="mt-1 text-sm text-[#6b7280]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="mx-auto max-w-5xl px-4 py-20">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#9ca3af] mb-3">Features</p>
          <h2 className="text-4xl font-bold text-[#0d0d0d]">Everything you need to prep</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Theme-level diagnostics",
              desc: "Not just \"65% on quant\" — see exactly which sub-topics you're weak on across 25+ granular themes.",
              icon: (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                </svg>
              ),
            },
            {
              title: "AI-powered walkthroughs",
              desc: "When you get a question wrong, AI explains why your specific answer was incorrect and walks you to the solution.",
              icon: (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                </svg>
              ),
            },
            {
              title: "Personalized study plans",
              desc: "Diagnostic results auto-generate a chapter-by-chapter learning path ranked by your weakest areas.",
              icon: (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
                </svg>
              ),
            },
            {
              title: "All 8 GMAT question types",
              desc: "Problem solving, data sufficiency, critical reasoning, reading comprehension, MSR, TPA, graphics, tables.",
              icon: (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6Zm0 9.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25Zm9.75-9.75A2.25 2.25 0 0 1 15.75 3.75H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6Zm0 9.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" />
                </svg>
              ),
            },
            {
              title: "Honest question sourcing",
              desc: "25 verified official questions from GMAC and GMAT Club. Every other question honestly marked as original.",
              icon: (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              ),
            },
            {
              title: "Performance analytics",
              desc: "Track accuracy trends over time, broken down by theme, section, difficulty, and question type.",
              icon: (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                </svg>
              ),
            },
          ].map(({ title, desc, icon }) => (
            <div key={title} className="rounded-xl border border-[#e5e7eb] bg-white p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#fafafa] text-[#0d0d0d]">
                {icon}
              </div>
              <h3 className="text-base font-bold text-[#0d0d0d] mb-2">{title}</h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Question types visual */}
      <section className="border-t border-[#e5e7eb] bg-[#fafafa]">
        <div className="mx-auto max-w-5xl px-4 py-20">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#9ca3af] mb-3">Coverage</p>
            <h2 className="text-4xl font-bold text-[#0d0d0d]">Every GMAT Focus section</h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              {
                section: "Quantitative",
                count: "160",
                themes: ["Number Properties", "Algebra", "Geometry", "Rate & Work", "Probability", "Statistics"],
              },
              {
                section: "Verbal",
                count: "120",
                themes: ["Weaken", "Strengthen", "Assumption", "Reading Comp", "Inference", "Boldface"],
              },
              {
                section: "Data Insights",
                count: "129",
                themes: ["Data Sufficiency", "Multi-Source", "Two-Part Analysis", "Graphics", "Tables"],
              },
            ].map(({ section, count, themes }) => (
              <div key={section} className="rounded-xl border border-[#e5e7eb] bg-white p-6">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-[#0d0d0d]">{count}</span>
                  <span className="text-sm text-[#6b7280]">questions</span>
                </div>
                <h3 className="text-lg font-bold text-[#0d0d0d] mb-3">{section}</h3>
                <div className="flex flex-wrap gap-2">
                  {themes.map((t) => (
                    <span key={t} className="rounded-md bg-[#fafafa] border border-[#e5e7eb] px-2.5 py-1 text-xs text-[#6b7280]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 py-20">
        <div className="rounded-2xl bg-[#0d0d0d] px-8 py-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Start with a diagnostic</h2>
          <p className="mx-auto max-w-md text-[#9ca3af] text-lg leading-relaxed mb-8">
            18 questions. 25 minutes. A complete map of your strengths and weaknesses across all three sections.
          </p>
          <button
            onClick={onSignIn}
            className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-[#0d0d0d] hover:bg-[#f3f4f6] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Sign in with Google
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e5e7eb] py-8">
        <div className="mx-auto max-w-5xl px-4 flex items-center justify-between">
          <p className="text-sm text-[#9ca3af]">Road to 805</p>
          <div className="flex items-center gap-1 text-sm text-[#9ca3af]">
            <span>Built for the GMAT Focus Edition</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ─── Main Export ───────────────────────────────────────────────────

export default function Home() {
  const { user, profile, loading, signInWithGoogle, refreshProfile } = useAuth();
  const router = useRouter();
  const [studyPlan, setStudyPlan] = useState<StudyPlan | null>(null);
  const [activeSection, setActiveSection] = useState<Section | "all">("all");
  const [planLoading, setPlanLoading] = useState(false);

  useEffect(() => {
    if (user) {
      refreshProfile();
    }
  }, [user, refreshProfile]);

  useEffect(() => {
    if (!user || !profile?.currentStudyPlanId) return;
    let cancelled = false;
    getUserStudyPlan(user.uid)
      .then((plan) => { if (!cancelled) setStudyPlan(plan); })
      .finally(() => { if (!cancelled) setPlanLoading(false); });
    return () => { cancelled = true; };
  }, [user, profile?.currentStudyPlanId]);

  if (loading) {
    return <PageSkeleton />;
  }

  // === State 1: Not signed in — show landing page ===
  if (!user) {
    return <LandingPage onSignIn={signInWithGoogle} />;
  }

  const accuracy = profile && profile.totalQuestions > 0
    ? Math.round((profile.totalCorrect / profile.totalQuestions) * 100)
    : 0;

  const hasDiagnostic = profile?.hasTakenDiagnostic ?? false;

  // === State 2: Signed in, no diagnostic ===
  if (!hasDiagnostic) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-12 bg-white">
        <div className="animate-fade-in rounded-lg bg-white border border-[#e5e7eb] p-10 text-center">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#0d0d0d]">
            <DiagnosticIcon className="h-7 w-7 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-[#0d0d0d]">Welcome to Road to 805!</h2>
          <p className="mt-3 text-[#374151] max-w-lg mx-auto leading-relaxed">
            Start with a diagnostic test to assess your strengths across all three GMAT sections.
            We&apos;ll create a personalized study plan based on your results.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <div className="rounded-lg bg-[#fafafa] border border-[#e5e7eb] px-4 py-2.5 text-sm text-[#374151] font-medium">
              18 questions
            </div>
            <div className="rounded-lg bg-[#fafafa] border border-[#e5e7eb] px-4 py-2.5 text-sm text-[#374151] font-medium">
              3 sections
            </div>
            <div className="rounded-lg bg-[#fafafa] border border-[#e5e7eb] px-4 py-2.5 text-sm text-[#374151] font-medium">
              ~25 minutes
            </div>
          </div>
          <button
            onClick={() => router.push("/diagnostic")}
            className="mt-8 rounded-lg px-10 py-4 text-lg font-semibold text-white bg-[#0d0d0d] hover:bg-[#1a1a1a] transition-colors"
          >
            Start Diagnostic Test
          </button>
        </div>

        <div className="mt-8 text-center animate-fade-in">
          <p className="text-sm text-[#9ca3af] mb-3">Or jump straight into practice</p>
          <button
            onClick={() => router.push("/practice")}
            className="rounded-lg border border-[#e5e7eb] bg-white px-6 py-3 text-sm font-medium text-[#0d0d0d] hover:bg-[#fafafa] transition-colors"
          >
            Quick Practice Session
          </button>
        </div>
      </main>
    );
  }

  // === State 3: Signed in, has diagnostic ===
  const sectionStats = profile?.sectionStats;
  const planProgress = studyPlan
    ? Math.round(
        (studyPlan.recommendedChapters.filter((ch) => ch.completed).length /
          studyPlan.recommendedChapters.length) *
          100
      )
    : 0;

  const filteredCategories =
    activeSection === "all"
      ? Object.entries(THEME_CATEGORIES) as [ThemeCategory, { label: string; section: Section; themes: string[] }][]
      : getCategoriesBySection(activeSection) as [ThemeCategory, { label: string; section: Section; themes: string[] }][];

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-8">
        {/* Section Score Cards */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3 animate-fade-in">
          {(["quant", "verbal", "data-insights"] as Section[]).map((section) => {
            const stats = sectionStats?.[section];
            const sectionAccuracy = stats && stats.totalQuestions > 0
              ? Math.round((stats.totalCorrect / stats.totalQuestions) * 100)
              : 0;

            return (
              <div key={section} className="rounded-lg bg-white border border-[#e5e7eb] p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-[#6b7280] uppercase tracking-wide">{SECTION_SHORT_LABELS[section]}</p>
                    <p className="mt-2 text-3xl font-bold text-[#0d0d0d]">{sectionAccuracy}%</p>
                    <p className="mt-1 text-xs text-[#6b7280]">
                      {stats?.totalQuestions ?? 0} questions practiced
                    </p>
                  </div>
                  <ProgressRing percent={sectionAccuracy} size={72} strokeWidth={6} color="text-[#0d0d0d]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Overall Stats */}
        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4 animate-fade-in">
          <StatCard label="Questions" value={profile?.totalQuestions ?? 0} accent="blue" />
          <StatCard label="Accuracy" value={`${accuracy}%`} accent="green" />
          <StatCard label="Sessions" value={profile?.totalSessions ?? 0} accent="purple" />
          <StatCard label="Plan Progress" value={`${planProgress}%`} accent="amber" />
        </div>

        {/* Study Plan Progress */}
        {studyPlan && !planLoading && (
          <div className="mb-8 rounded-lg bg-white p-6 border border-[#e5e7eb]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-[#0d0d0d]">Study Plan</h2>
              <button
                onClick={() => router.push("/study-plan")}
                className="text-sm text-[#374151] hover:text-[#0d0d0d] font-semibold"
              >
                View Full Plan &rarr;
              </button>
            </div>
            <div className="h-3 rounded-full bg-[#f3f4f6] overflow-hidden">
              <div
                className="h-full rounded-full bg-[#0d0d0d] transition-all duration-700 ease-out"
                style={{ width: `${planProgress}%` }}
              />
            </div>
            <p className="mt-3 text-sm text-[#6b7280]">
              {studyPlan.recommendedChapters.filter((ch) => ch.completed).length} of{" "}
              {studyPlan.recommendedChapters.length} chapters completed
            </p>
          </div>
        )}

        {/* Quick Actions */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <button
            onClick={() => router.push("/practice")}
            className="rounded-lg px-6 py-5 text-lg font-bold text-white bg-[#0d0d0d] hover:bg-[#1a1a1a] transition-colors"
          >
            <span className="flex items-center justify-center gap-2">
              <PracticeIcon className="h-5 w-5" />
              Start Practice Session
            </span>
          </button>
          <button
            onClick={() => router.push("/learn")}
            className="rounded-lg border border-[#e5e7eb] bg-white px-6 py-5 text-lg font-bold text-[#0d0d0d] hover:bg-[#fafafa] transition-colors"
          >
            <span className="flex items-center justify-center gap-2">
              <LearnIcon className="h-5 w-5" />
              Continue Learning
            </span>
          </button>
        </div>

        {/* Practice by Theme */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#0d0d0d]">Practice by Theme</h2>
            <SectionTabs value={activeSection} onChange={setActiveSection} />
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {filteredCategories.map(([key, category]) => {
              return (
                <button
                  key={key}
                  onClick={() => router.push(`/practice?category=${key}`)}
                  className="rounded-lg bg-white border border-[#e5e7eb] hover:bg-[#fafafa] transition-colors p-5 text-left"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#0d0d0d]" />
                    <h3 className="text-base font-bold text-[#0d0d0d]">{category.label}</h3>
                  </div>
                  <p className="text-sm text-[#6b7280] leading-relaxed">
                    {category.themes.map((t) => THEME_LABELS[t as keyof typeof THEME_LABELS]).join(", ")}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Review */}
        {profile && profile.totalQuestions > 0 && (
          <div className="mt-8">
            <button
              onClick={() => router.push("/review")}
              className="w-full rounded-lg border border-[#e5e7eb] bg-white px-8 py-5 text-lg font-bold text-[#0d0d0d] hover:bg-[#fafafa] transition-colors"
            >
              Review Weak Themes
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
