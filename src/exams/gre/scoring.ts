/**
 * GRE Score Estimation with Section-Level Adaptive Scoring
 *
 * Current GRE (Sept 2023+):
 * - 5 sections: AWA (1 essay, 30min) + V1 + Q1 + V2 + Q2
 * - Total: 1 hr 58 min, 55 questions
 *
 * Scoring:
 * - Verbal Reasoning: 130–170 (1-point increments)
 * - Quantitative Reasoning: 130–170 (1-point increments)
 * - Analytical Writing: 0–6 (half-point increments) — SEPARATE, not in total
 * - Total: 260–340 (V + Q only)
 *
 * Section-Level Adaptation:
 * - S1 (12 questions) is always medium difficulty
 * - S2 (15 questions) difficulty depends on S1 performance:
 *     0–3 correct on S1 → Easy S2
 *     4–7 correct on S1 → Medium S2
 *     8–12 correct on S1 → Hard S2
 * - Hard S2 gives access to higher scaled scores (up to 170)
 * - Medium S2 caps around 165
 * - Easy S2 caps around 158
 *
 * Sources:
 * - https://www.ets.org/gre/test-takers/general-test/scores/understand-scores.html
 * - https://brightlinkprep.com/gre-scoring-algorthm-deciphered/
 * - https://blog.scholarden.com/how-the-new-shorter-gre-is-scored/
 */

export type DifficultyTier = "easy" | "medium" | "hard";

export interface GreScoreResult {
  total: number;                                    // 260–340 (V + Q)
  sections: Record<string, number>;                 // { verbal: 130-170, quant: 130-170 }
  difficultyTiers?: Record<string, DifficultyTier>; // S2 difficulty per measure
  awaScore?: number;                                // 0–6 (separate from total)
}

/**
 * Raw-to-scaled score conversion tables (0–27 correct → 130–170).
 *
 * Based on analysis of ETS scoring patterns and community research:
 * - 15/27 correct ≈ 148–153 depending on tier
 * - 18/27 correct ≈ 153–159 depending on tier
 * - Hard S2 unlocks full 170 ceiling
 * - Medium S2 caps ~165
 * - Easy S2 caps ~158
 */
const SCORE_TABLE: Record<DifficultyTier, number[]> = {
  // S2 was HARD — full range access (130–170)
  hard: [
    // 0   1    2    3    4    5    6    7    8    9
    130, 130, 132, 134, 136, 138, 140, 142, 144, 146,
    // 10  11   12   13   14   15   16   17   18   19
    148, 150, 152, 153, 155, 156, 157, 158, 159, 160,
    // 20  21   22   23   24   25   26   27
    161, 162, 163, 165, 166, 167, 169, 170,
  ],
  // S2 was MEDIUM — standard range (130–165)
  medium: [
    130, 130, 131, 133, 135, 137, 139, 141, 143, 145,
    146, 148, 149, 150, 152, 153, 154, 155, 156, 157,
    158, 159, 160, 161, 162, 163, 164, 165,
  ],
  // S2 was EASY — capped range (130–158)
  easy: [
    130, 130, 130, 131, 133, 135, 137, 139, 140, 142,
    143, 145, 146, 148, 149, 150, 151, 152, 153, 153,
    154, 154, 155, 156, 156, 157, 157, 158,
  ],
};

/**
 * Determine S2 difficulty tier from S1 performance.
 *
 * Real GRE thresholds (S1 = 12 questions):
 *   0–3 correct → Easy
 *   4–7 correct → Medium
 *   8–12 correct → Hard
 */
export function determineDifficultyTier(
  s1Correct: number,
  s1Total: number
): DifficultyTier {
  // Use absolute thresholds when S1 is 12 questions (standard GRE)
  if (s1Total === 12) {
    if (s1Correct >= 8) return "hard";
    if (s1Correct >= 4) return "medium";
    return "easy";
  }
  // Fallback to proportional thresholds for non-standard section sizes
  const accuracy = s1Total > 0 ? s1Correct / s1Total : 0;
  if (accuracy >= 0.67) return "hard";
  if (accuracy >= 0.33) return "medium";
  return "easy";
}

/**
 * Estimate a section score (130–170) from raw correct count and S2 tier.
 */
function estimateSectionScore(
  rawCorrect: number,
  totalQuestions: number,
  tier: DifficultyTier
): number {
  // Normalize to 27-question scale (real GRE has 12 + 15 = 27 per measure)
  const normalizedCorrect = Math.round((rawCorrect / Math.max(totalQuestions, 1)) * 27);
  const clamped = Math.max(0, Math.min(27, normalizedCorrect));
  return SCORE_TABLE[tier][clamped] ?? 130;
}

/**
 * Estimate full GRE score from section results.
 *
 * Returns:
 * - total: 260–340 (Verbal + Quant only)
 * - sections: { verbal: 130-170, quant: 130-170 }
 * - difficultyTiers: { verbal: "hard"|"medium"|"easy", quant: ... }
 * - awaScore: 0–6 (if available, separate from total)
 *
 * Expects sectionResults with keys like:
 *   "verbal", "quant" — for non-adaptive scoring
 *   "verbal-1", "verbal-2", "quant-1", "quant-2" — for adaptive scoring
 *   "awa" — for analytical writing (ignored in V+Q total)
 */
export function estimateGreScore(
  sectionResults: Record<string, { score: number; total: number }>
): GreScoreResult {
  const sections: Record<string, number> = {};
  const difficultyTiers: Record<string, DifficultyTier> = {};

  // Check for subsection data (adaptive mock)
  const hasSubsections =
    ("verbal-1" in sectionResults && "verbal-2" in sectionResults) ||
    ("quant-1" in sectionResults && "quant-2" in sectionResults);

  if (hasSubsections) {
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
        const data = sectionResults[measure];
        sections[measure] = estimateSectionScore(data.score, data.total, "medium");
        difficultyTiers[measure] = "medium";
      }
    }
  } else {
    // Non-adaptive: use medium-tier scoring
    for (const [section, data] of Object.entries(sectionResults)) {
      if (section.includes("-") || section === "awa") continue;
      sections[section] = estimateSectionScore(data.score, data.total, "medium");
      difficultyTiers[section] = "medium";
    }
  }

  // Ensure both measures have a score
  if (!sections.verbal) sections.verbal = 130;
  if (!sections.quant) sections.quant = 130;

  const total = Math.min(340, Math.max(260, sections.verbal + sections.quant));

  return { total, sections, difficultyTiers };
}
