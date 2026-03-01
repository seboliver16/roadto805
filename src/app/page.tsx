"use client";

import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import { PageSkeleton } from "@/components/loading-skeleton";
import { getAllExams } from "@/exams/registry";
import { DiagnosticIcon, LearnIcon, PracticeIcon, ReviewIcon } from "@/components/icons";

export default function Home() {
  const { user, loading, signInWithGoogle } = useAuth();
  const router = useRouter();
  const exams = getAllExams();

  if (loading) {
    return <PageSkeleton />;
  }

  const isLoggedIn = !!user;

  const handleGetStarted = async (examSlug: string) => {
    if (isLoggedIn) {
      router.push(`/${examSlug}/dashboard`);
    } else {
      const success = await signInWithGoogle();
      if (success) router.push(`/${examSlug}/dashboard`);
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
              Test Prep Platform
            </div>

            <h1 className="text-6xl sm:text-7xl font-bold tracking-tight text-[#0d0d0d] leading-[1.05]">
              Ace Your<br />
              <span className="relative inline-block">Exam
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0 7 Q25 0, 50 4 Q75 8, 100 1" stroke="#0d0d0d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-xl text-[#6b7280] leading-relaxed">
              Diagnostic-driven prep that finds your weak spots, builds a study plan,
              and uses AI to explain exactly why you got it wrong.
            </p>

            {/* Exam Selection Cards */}
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-3xl mx-auto">
              {exams.map((exam) => (
                <button
                  key={exam.slug}
                  onClick={() => handleGetStarted(exam.slug)}
                  className="group rounded-xl border border-[#e5e7eb] bg-white p-6 text-left transition-all hover:border-[#0d0d0d]/20 hover:shadow-md"
                >
                  <h3 className="text-xl font-bold text-[#0d0d0d] mb-2">{exam.shortName}</h3>
                  <p className="text-sm text-[#6b7280] mb-4">{exam.name}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exam.sections.map((s) => (
                      <span key={s.id} className="rounded-full border border-[#e5e7eb] bg-[#fafafa] px-3 py-1 text-xs font-medium text-[#374151]">
                        {s.shortLabel}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-sm font-semibold text-[#0d0d0d] group-hover:gap-2 transition-all">
                    {isLoggedIn ? "Go to Dashboard" : "Get Started"}
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>

            {!isLoggedIn && (
              <p className="mt-6 text-sm text-[#9ca3af]">Sign in with Google. No credit card required.</p>
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
            { icon: <DiagnosticIcon className="h-7 w-7" />, step: "01", title: "Diagnose", desc: "A quick diagnostic test maps your strengths and gaps across every section." },
            { icon: <LearnIcon className="h-7 w-7" />, step: "02", title: "Learn", desc: "A personalized study plan directs you to lessons targeting your specific weak areas." },
            { icon: <PracticeIcon className="h-7 w-7" />, step: "03", title: "Practice", desc: "Drill questions filtered by theme, section, or difficulty for targeted repetition." },
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

      {/* Features grid */}
      <section className="mx-auto max-w-5xl px-4 py-20">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#9ca3af] mb-3">Features</p>
          <h2 className="text-4xl font-bold text-[#0d0d0d]">Everything you need to prep</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Theme-level diagnostics", desc: "See exactly which sub-topics you're weak on across every granular theme.", icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" /></svg> },
            { title: "AI-powered walkthroughs", desc: "When you get a question wrong, AI explains why your specific answer was incorrect.", icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" /></svg> },
            { title: "Personalized study plans", desc: "Diagnostic results auto-generate a chapter-by-chapter learning path.", icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" /></svg> },
            { title: "Full mock exams", desc: "Simulate the real test with timed sections and estimated scores.", icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg> },
            { title: "Multi-exam support", desc: "GMAT, GRE, and more — each with their own sections, scoring, and question types.", icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6Zm0 9.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25Zm9.75-9.75A2.25 2.25 0 0 1 15.75 3.75H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6Zm0 9.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" /></svg> },
            { title: "Performance analytics", desc: "Track accuracy trends over time, broken down by theme, section, and difficulty.", icon: <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" /></svg> },
          ].map(({ title, desc, icon }) => (
            <div key={title} className="rounded-xl border border-[#e5e7eb] bg-white p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#fafafa] text-[#0d0d0d]">{icon}</div>
              <h3 className="text-base font-bold text-[#0d0d0d] mb-2">{title}</h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 py-20">
        <div className="rounded-2xl bg-[#0d0d0d] px-8 py-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Choose your exam and start</h2>
          <p className="mx-auto max-w-md text-[#9ca3af] text-lg leading-relaxed mb-8">
            A quick diagnostic test. A personalized study plan. AI-powered review. Pick your exam to get started.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {exams.map((exam) => (
              <button
                key={exam.slug}
                onClick={() => handleGetStarted(exam.slug)}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-[#0d0d0d] hover:bg-[#f3f4f6] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                {exam.shortName}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e5e7eb] py-8">
        <div className="mx-auto max-w-5xl px-4 flex items-center justify-between">
          <p className="text-sm text-[#9ca3af]">Test Prep Platform</p>
          <span className="text-sm text-[#9ca3af]">GMAT &middot; GRE &middot; More coming soon</span>
        </div>
      </footer>
    </div>
  );
}
