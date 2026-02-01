import { Section, Theme, StudyPlan, GMAT_FREQUENCY } from "@/types";
import { allChapters } from "@/data/chapters";

interface DiagnosticResults {
  sectionScores: Record<Section, { score: number; total: number }>;
  themeBreakdown: Record<string, { correct: number; total: number }>;
}

export function generateStudyPlanFromDiagnostic(
  userId: string,
  sessionId: string,
  results: DiagnosticResults
): Omit<StudyPlan, "id"> {
  const { sectionScores, themeBreakdown } = results;

  // Identify weak areas: themes where accuracy < 75% or zero attempts
  const weakAreas: StudyPlan["weakAreas"] = [];
  const sections: Section[] = ["quant", "verbal", "data-insights"];

  for (const section of sections) {
    const sectionData = sectionScores[section];
    const accuracy = sectionData.total > 0 ? sectionData.score / sectionData.total : 0;

    const weakThemes: Theme[] = [];
    for (const [theme, data] of Object.entries(themeBreakdown)) {
      // Check if this theme belongs to this section by looking at chapters
      const chapter = allChapters.find((ch) => ch.section === section && ch.topics.includes(theme as Theme));
      if (!chapter) continue;

      const themeAccuracy = data.total > 0 ? data.correct / data.total : 0;
      if (themeAccuracy < 0.75) {
        weakThemes.push(theme as Theme);
      }
    }

    if (weakThemes.length > 0 || accuracy < 0.75) {
      const priority = accuracy < 0.5 ? "high" : accuracy < 0.75 ? "medium" : "low";
      weakAreas.push({ section, themes: weakThemes, priority });
    }
  }

  // Generate recommended chapters ordered by priority
  // Priority score = (1 - section accuracy) * GMAT frequency weight * weakness factor
  const recommendedChapters: StudyPlan["recommendedChapters"] = [];

  for (const chapter of allChapters) {
    const sectionData = sectionScores[chapter.section];
    const sectionAccuracy = sectionData?.total > 0 ? sectionData.score / sectionData.total : 0;

    // Check if any chapter topic is weak
    const hasWeakTopic = chapter.topics.some((topic) => {
      const data = themeBreakdown[topic];
      return !data || (data.total > 0 && data.correct / data.total < 0.75);
    });

    // Get max frequency weight for chapter topics
    const maxFreq = Math.max(
      ...chapter.topics.map((t) => GMAT_FREQUENCY[t] ?? 1),
      1
    );

    // Priority score: higher = more important
    const priorityScore = hasWeakTopic
      ? (1 - sectionAccuracy) * maxFreq * 10
      : maxFreq;

    recommendedChapters.push({
      chapterId: chapter.id,
      completed: false,
      priority: Math.round(priorityScore * 100) / 100,
    });
  }

  // Sort by priority descending
  recommendedChapters.sort((a, b) => b.priority - a.priority);

  return {
    userId,
    diagnosticSessionId: sessionId,
    sectionScores,
    weakAreas,
    recommendedChapters,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
}
