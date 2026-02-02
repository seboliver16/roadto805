"use client";

import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import { PageSkeleton } from "@/components/loading-skeleton";
import { DiagnosticIcon, LearnIcon, PracticeIcon, ReviewIcon } from "@/components/icons";

export default function Home() {
  const { user, loading, signInWithGoogle } = useAuth();
  const router = useRouter();

  if (loading) {
    return <PageSkeleton />;
  }

  const isLoggedIn = !!user;

  const handleCTA = async () => {
    if (isLoggedIn) {
      router.push("/dashboard");
    } else {
      const success = await signInWithGoogle();
      if (success) router.push("/dashboard");
    }
  };

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

            {isLoggedIn ? (
              <>
                <button
                  onClick={() => router.push("/dashboard")}
                  className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[#0d0d0d] px-8 py-4 text-lg font-semibold text-white hover:bg-[#1a1a1a] transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Go to Dashboard
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
                <p className="mt-4 text-sm text-[#9ca3af]">You&apos;re signed in. Jump to your dashboard.</p>
              </>
            ) : (
              <>
                <button
                  onClick={handleCTA}
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
              </>
            )}
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
            { icon: <DiagnosticIcon className="h-7 w-7" />, step: "01", title: "Diagnose", desc: "18-question diagnostic across Quant, Verbal, and Data Insights maps your strengths and gaps." },
            { icon: <LearnIcon className="h-7 w-7" />, step: "02", title: "Learn", desc: "A personalized study plan directs you to lessons targeting your specific weak areas." },
            { icon: <PracticeIcon className="h-7 w-7" />, step: "03", title: "Practice", desc: "Drill 409 questions filtered by theme, section, or difficulty for targeted repetition." },
            { icon: <ReviewIcon className="h-7 w-7" />, step: "04", title: "Review", desc: "AI walkthroughs explain why your answer was wrong — not just what the right answer is." },
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
            { title: "Theme-level diagnostics", desc: "Not just \"65% on quant\" — see exactly which sub-topics you're weak on across 25+ granular themes.", icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" /></svg> },
            { title: "AI-powered walkthroughs", desc: "When you get a question wrong, AI explains why your specific answer was incorrect and walks you to the solution.", icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" /></svg> },
            { title: "Personalized study plans", desc: "Diagnostic results auto-generate a chapter-by-chapter learning path ranked by your weakest areas.", icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" /></svg> },
            { title: "All 8 GMAT question types", desc: "Problem solving, data sufficiency, critical reasoning, reading comprehension, MSR, TPA, graphics, tables.", icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6Zm0 9.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25Zm9.75-9.75A2.25 2.25 0 0 1 15.75 3.75H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6Zm0 9.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" /></svg> },
            { title: "Honest question sourcing", desc: "25 verified official questions from GMAC and GMAT Club. Every other question honestly marked as original.", icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg> },
            { title: "Performance analytics", desc: "Track accuracy trends over time, broken down by theme, section, difficulty, and question type.", icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" /></svg> },
          ].map(({ title, desc, icon }) => (
            <div key={title} className="rounded-xl border border-[#e5e7eb] bg-white p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#fafafa] text-[#0d0d0d]">{icon}</div>
              <h3 className="text-base font-bold text-[#0d0d0d] mb-2">{title}</h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage */}
      <section className="border-t border-[#e5e7eb] bg-[#fafafa]">
        <div className="mx-auto max-w-5xl px-4 py-20">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#9ca3af] mb-3">Coverage</p>
            <h2 className="text-4xl font-bold text-[#0d0d0d]">Every GMAT Focus section</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              { section: "Quantitative", count: "160", themes: ["Number Properties", "Algebra", "Geometry", "Rate & Work", "Probability", "Statistics"] },
              { section: "Verbal", count: "120", themes: ["Weaken", "Strengthen", "Assumption", "Reading Comp", "Inference", "Boldface"] },
              { section: "Data Insights", count: "129", themes: ["Data Sufficiency", "Multi-Source", "Two-Part Analysis", "Graphics", "Tables"] },
            ].map(({ section, count, themes }) => (
              <div key={section} className="rounded-xl border border-[#e5e7eb] bg-white p-6">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-[#0d0d0d]">{count}</span>
                  <span className="text-sm text-[#6b7280]">questions</span>
                </div>
                <h3 className="text-lg font-bold text-[#0d0d0d] mb-3">{section}</h3>
                <div className="flex flex-wrap gap-2">
                  {themes.map((t) => (
                    <span key={t} className="rounded-md bg-[#fafafa] border border-[#e5e7eb] px-2.5 py-1 text-xs text-[#6b7280]">{t}</span>
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
          {isLoggedIn ? (
            <button
              onClick={() => router.push("/dashboard")}
              className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-[#0d0d0d] hover:bg-[#f3f4f6] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Go to Dashboard
            </button>
          ) : (
            <button
              onClick={handleCTA}
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
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e5e7eb] py-8">
        <div className="mx-auto max-w-5xl px-4 flex items-center justify-between">
          <p className="text-sm text-[#9ca3af]">Road to 805</p>
          <span className="text-sm text-[#9ca3af]">Built for the GMAT Focus Edition</span>
        </div>
      </footer>
    </div>
  );
}
