/**
 * Estimate a GMAT Focus Edition score (205-805) from section results.
 *
 * GMAT Focus Edition: each section 60-90, total 205-805.
 * We use a linear mapping from accuracy percentage.
 */
export function estimateGmatScore(
  sectionResults: Record<string, { score: number; total: number }>
): { total: number; sections: Record<string, number> } {
  const sections: Record<string, number> = {};

  for (const [section, data] of Object.entries(sectionResults)) {
    const accuracy = data.total > 0 ? data.score / data.total : 0;
    // Map 0-100% accuracy to 60-90 section score
    sections[section] = Math.round(60 + accuracy * 30);
  }

  const sectionSum = Object.values(sections).reduce((a, b) => a + b, 0);
  // Section scores range 180 (3x60) to 270 (3x90), map to 205-805
  const total = Math.round(205 + ((sectionSum - 180) / 90) * 600);

  return {
    total: Math.min(805, Math.max(205, total)),
    sections,
  };
}
