# Road to 805

Most GMAT prep is a grind. You do questions, see a score, maybe read an explanation, then move on. You never really learn *why* you're getting things wrong — you just see a list of missed questions with no structure.

Road to 805 fixes that.

## The idea

When you miss GMAT questions, there are patterns. Maybe you consistently break down on number theory inside data sufficiency. Maybe you nail algebra but fall apart on combinatorics. The problem is that traditional practice never surfaces these patterns — it just tells you "7/10" and moves on.

Road to 805 is built around one loop:

```
Practice → Diagnose → Learn → Drill → Repeat
```

1. **Practice** — Take a 10-question quant session. Questions are tagged with granular themes (not just "algebra" but "inequalities + absolute value").
2. **Diagnose** — Results break down your performance by theme. Not just a score — a map of exactly where you're strong and where you're breaking down.
3. **Learn** — Review mode walks you through every missed question step-by-step with AI-generated explanations personalized to *your wrong answer*. It doesn't just show the solution — it explains why your thinking went wrong.
4. **Drill** — After review, you get served more questions targeting your specific weak themes. Not random practice — surgical repetition on the exact patterns you need.

## Theme taxonomy

Questions are tagged across 25 granular themes in 5 categories:

- **Arithmetic** — Number properties, divisibility & primes, remainders, fractions, percentages, ratios, exponents
- **Algebra** — Linear equations, quadratics, inequalities, absolute value, functions, sequences
- **Geometry** — Triangles, circles, coordinate geometry, polygons, 3D geometry
- **Word Problems** — Rate & work, mixtures, overlapping sets, probability, combinatorics, statistics
- **Data Sufficiency** — The logical reasoning skill that sits on top of all math content

Questions can have multiple theme tags (e.g., "remainders + data sufficiency logic") which is where the real diagnostic power comes from.

## Stack

- **Next.js** + TypeScript + Tailwind
- **Firebase** — Auth (Google sign-in), Firestore (user data, sessions, attempts)
- **Gemini Flash 2.5** — Personalized step-by-step walkthroughs in review mode
- **Firebase App Hosting** — auto-deploys from `main`

## Running locally

```bash
npm install
cp .env.local.example .env.local
# Fill in your Firebase + Gemini keys in .env.local
npm run dev
```

## What's next

- More questions (targeting 200+ across all themes)
- Spaced repetition — resurface weak themes days later
- Performance trends over time
- Verbal + Data Insights sections
- Timed practice mode matching real GMAT pacing
