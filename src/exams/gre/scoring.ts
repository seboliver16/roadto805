/**
 * GRE Score Estimation with Section-Level Adaptive Scoring
 *
 * The real GRE uses section-level adaptation:
 * - Section 1 (12 questions) is always medium difficulty
 * - Section 2 difficulty (easy/medium/hard) depends on Section 1 performance
 * - The difficulty tier of Section 2 affects the scaled score range
 *
 * Score scale: Verbal 130-170, Quantitative 130-170 (1-point increments)
 * Total: 260-340
 *
 * This scoring uses a non-linear curve that approximates real GRE score conversion,
 * accounting for difficulty tiers when available.
 */

export type DifficultyTier = "easy" | "medium" | "hard";

export interface GreScoreResult {
  total: number;
  sections: Record<string, number>;
  difficultyTiers?: Record<string, DifficultyTier>;
}

/**
 * Non-linear score conversion table.
 * Maps raw correct count (out of 27) to scaled score (130-170)
 * for each difficulty tier of the second section.
 *
 * Based on analysis of ETS scoring patterns.
 */
const SCORE_TABLE: Record<DifficultyTier, number[]> = {
  // Second section was HARD — access to higher scores
  hard: [
    // 0-27 correct out of 27 total
    130, 131, 133, 135, 137, 139, 141, 143, 145, 147,
    149, 151, 153, 155, 157, 158, 159, 160, 161, 162,
    163, 164, 165, 166, 167, 168, 169, 169, 170,
  ],
  // Second section was MEDIUM — standard range
  medium: [
    130, 131, 132, 134, 136, 138, 140, 142, 144, 146,
    148, 150, 152, 153, 154, 155, 156, 157, 158, 159,
    160, 161, 162, 163, 164, 165, 165, 165, 165,
  ],
  // Second section was EASY — capped at lower range
  easy: [
    130, 130, 131, 132, 133, 135, 137, 139, 141, 143,
    145, 147, 149, 150, 151, 152, 153, 154, 155, 155,
    156, 156, 157, 157, 158, 158, 158, 158, 158,
  ],
};

/**
 * Determine the difficulty tier for the second section based on
 * first-section performance.
 */
export function determineDifficultyTier(
  s1Correct: number,
  s1Total: number
): DifficultyTier {
  const accuracy = s1Total > 0 ? s1Correct / s1Total : 0;
  if (accuracy >= 0.67) return "hard";
  if (accuracy >= 0.33) return "medium";
  return "easy";
}

/**
 * Estimate GRE section score from raw correct count and difficulty tier.
 */
function estimateSectionScore(
  rawCorrect: number,
  totalQuestions: number,
  tier: DifficultyTier
): number {
  // Normalize to 27-question scale (the real GRE has 27 per section)
  const normalizedCorrect = Math.round((rawCorrect / Math.max(totalQuestions, 1)) * 27);
  const clamped = Math.max(0, Math.min(27, normalizedCorrect));

  // We index with 28 entries (0..27), so clamped is safe:
  const table = SCORE_TABLE[tier];
  return table[clamped] ?? 130;
}

/**
 * Estimate a GRE score from section results.
 *
 * If sectionResults contains subsection data (e.g., "verbal-1", "verbal-2"),
 * this function will compute adaptive scoring. Otherwise, it falls back to
 * medium-tier scoring.
 */
export function estimateGreScore(
  sectionResults: Record<string, { score: number; total: number }>
): GreScoreResult {
  const sections: Record<string, number> = {};
  const difficultyTiers: Record<string, DifficultyTier> = {};

  // Check if we have subsection data (adaptive mock)
  const hasSubsections =
    ("verbal-1" in sectionResults && "verbal-2" in sectionResults) ||
    ("quant-1" in sectionResults && "quant-2" in sectionResults);

  if (hasSubsections) {
    // Adaptive scoring with subsections
    for (const measure of ["verbal", "quant"]) {
      const s1 = sectionResults[`${measure}-1`];
      const s2 = sectionResults[`${measure}-2`];

      if (s1 && s2) {
        const tier = determineDifficultyTier(s1.score, s1.total);
        difficultyTiers[measure] = tier;

        const totalCorrect = s1.score + s2.score;
        const totalQuestions = s1.total + s2.total;
        sections[measure] = estimateSectionScore(totalCorrect, totalQuestions, tier);
      } else if (sectionResults[measure]) {
        // Fallback to combined section data
        const data = sectionResults[measure];
        sections[measure] = estimateSectionScore(data.score, data.total, "medium");
        difficultyTiers[measure] = "medium";
      }
    }
  } else {
    // Non-adaptive: use standard medium-tier scoring
    for (const [section, data] of Object.entries(sectionResults)) {
      // Skip subsection keys if they somehow ended up here
      if (section.includes("-")) continue;
      sections[section] = estimateSectionScore(data.score, data.total, "medium");
      difficultyTiers[section] = "medium";
    }
  }

  // Ensure both sections have a score
  if (!sections.verbal) sections.verbal = 130;
  if (!sections.quant) sections.quant = 130;

  const total = (sections.verbal ?? 130) + (sections.quant ?? 130);

  return {
    total: Math.min(340, Math.max(260, total)),
    sections,
    difficultyTiers,
  };
}
