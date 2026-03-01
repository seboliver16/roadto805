/**
 * Estimate a GRE score from section results.
 *
 * GRE General Test: Verbal 130-170, Quantitative 130-170.
 * Total typically reported as V+Q: 260-340.
 * We use a linear mapping from accuracy percentage.
 */
export function estimateGreScore(
  sectionResults: Record<string, { score: number; total: number }>
): { total: number; sections: Record<string, number> } {
  const sections: Record<string, number> = {};

  for (const [section, data] of Object.entries(sectionResults)) {
    const accuracy = data.total > 0 ? data.score / data.total : 0;
    // Map 0-100% accuracy to 130-170 section score
    sections[section] = Math.round(130 + accuracy * 40);
  }

  const total = Object.values(sections).reduce((a, b) => a + b, 0);

  return {
    total: Math.min(340, Math.max(260, total)),
    sections,
  };
}
