# Road to 805

Most GMAT prep is a grind. You do questions, see a score, maybe read an explanation, then move on. You never really learn *why* you're getting things wrong — you just see a list of missed questions with no structure.

Road to 805 fixes that.

## How it works

When you miss GMAT questions, there are patterns. Maybe you consistently break down on number theory inside data sufficiency. Maybe you nail algebra but fall apart on combinatorics. Traditional practice never surfaces these patterns — it just tells you "7/10" and moves on.

Road to 805 is built around one loop:

```
Diagnose → Learn → Practice → Review → Repeat
```

1. **Diagnose** — Take an 18-question diagnostic across all three GMAT Focus sections. Results break down your performance by theme — not just a score, but a map of exactly where you're strong and where you're breaking down.
2. **Learn** — A personalized study plan directs you to lessons targeting your specific weak areas. Each chapter covers concepts, worked examples, and embedded knowledge checks.
3. **Practice** — 10-question sessions with questions tagged by granular themes (not just "algebra" but "inequalities + absolute value"). Filter by section, category, or specific theme for targeted drilling.
4. **Review** — AI-powered walkthroughs explain every missed question step-by-step, personalized to *your wrong answer*. It doesn't just show the solution — it explains why your thinking went wrong.

## All three GMAT Focus sections

- **Quantitative Reasoning** — 160 questions across arithmetic, algebra, geometry, and word problems
- **Verbal Reasoning** — 120 questions covering critical reasoning and reading comprehension
- **Data Insights** — 129 questions including data sufficiency, multi-source reasoning, two-part analysis, graphics interpretation, and table analysis

**409 total questions** with honest sourcing:
- 10 official questions from [GMAC/mba.com](https://www.mba.com/exams/gmat-exam/about/sample-questions)
- 15 community-verified questions from [GMAT Club](https://gmatclub.com) and other public official sources
- 384 original GMAT-style questions with no false citations

## Theme taxonomy

Questions are tagged across 25+ granular themes in 12 categories:

**Quantitative Reasoning**
- **Arithmetic** — Number properties, divisibility & primes, remainders, fractions, percentages, ratios, exponents
- **Algebra** — Linear equations, quadratics, inequalities, absolute value, functions, sequences
- **Geometry** — Triangles, circles, coordinate geometry, polygons, 3D geometry
- **Word Problems** — Rate & work, mixtures, overlapping sets, probability, combinatorics, statistics

**Verbal Reasoning**
- **Critical Reasoning** — Weaken, strengthen, assumption, evaluate, inference, paradox, boldface, complete passage
- **Reading Comprehension** — Main idea, supporting detail, inference, structure, tone, application

**Data Insights**
- **Data Sufficiency** — Number properties, algebra, word problems, statistics
- **Multi-Source Reasoning** — Cross-referencing multiple information sources
- **Two-Part Analysis** — Simultaneous constraint problems
- **Graphics Interpretation** — Chart and graph analysis
- **Table Analysis** — Data table reasoning

Questions can have multiple theme tags (e.g., "remainders + data sufficiency logic") which is where the real diagnostic power comes from.

## Question sourcing

Every question has an honest source citation:

| Source Type | Label | Count | What it means |
|-------------|-------|-------|---------------|
| `official` | GMAC Official | 10 | Verified from mba.com sample questions |
| `community` | GMAT Club Verified | 15 | Widely discussed official questions from public forums |
| `original` | Road to 805 Original | 384 | Original GMAT-style questions — no false OG citations |

No fabricated "OG 2024-2025 PS #87" references. Every citation is real.

## Features

- **Diagnostic test** — 18 questions (6 per section) generating a personalized study plan
- **Adaptive practice** — Filter sessions by section, category, or specific weak themes
- **8 question types** — Problem solving, data sufficiency, critical reasoning, reading comprehension, multi-source reasoning, two-part analysis, graphics interpretation, table analysis
- **AI walkthroughs** — Mistral-powered explanations personalized to your specific wrong answer
- **Study plans** — Auto-generated from diagnostic results, tracking chapter completion
- **Lessons** — 20+ chapters with concepts, examples, and embedded knowledge checks
- **Analytics** — Accuracy trends over time, breakdowns by theme/section/difficulty/question type
- **Study guide** — Save highlights and notes from lessons for quick reference

## Stack

- **Next.js 16** + React 19 + TypeScript
- **Tailwind CSS 4** — Custom design system, no component library
- **Firebase** — Auth (Google sign-in), Firestore (user data, sessions, attempts)
- **Mistral AI** — Personalized step-by-step walkthroughs in review mode
- **Recharts** — Interactive charts for graphics interpretation questions
- **KaTeX** — Math rendering in questions and explanations
- **Firebase App Hosting** — Auto-deploys from `main`

## Running locally

```bash
npm install
cp .env.local.example .env.local
# Fill in your Firebase + Mistral keys in .env.local
npm run dev
```

## What's next

- More verified official questions (from personal OG copies)
- Spaced repetition — resurface weak themes days later
- Timed practice mode matching real GMAT pacing
- Score estimation based on performance patterns
