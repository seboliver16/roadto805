import { Section, Theme, StudyPlan } from "@/types";
import { ExamConfig } from "@/exams/types";
import { getExamChapters } from "@/exams/registry";
import { gmatConfig } from "@/exams/gmat/config";

interface DiagnosticResults {
  sectionScores: Record<string, { score: number; total: number }>;
  themeBreakdown: Record<string, { correct: number; total: number }>;
}

export function generateStudyPlanFromDiagnostic(
  userId: string,
  sessionId: string,
  results: DiagnosticResults,
  config?: ExamConfig
): Omit<StudyPlan, "id"> {
  const examConfig = config ?? gmatConfig;
  const examChapters = getExamChapters(examConfig.slug);
  const { sectionScores, themeBreakdown } = results;

  // Identify weak areas: themes where accuracy < threshold or zero attempts
  const weakAreas: StudyPlan["weakAreas"] = [];

  for (const section of examConfig.sections) {
    const sectionData = sectionScores[section.id];
    if (!sectionData) continue;
    const accuracy = sectionData.total > 0 ? sectionData.score / sectionData.total : 0;

    const weakThemes: string[] = [];
    for (const [theme, data] of Object.entries(themeBreakdown)) {
      // Check if this theme belongs to this section by looking at chapters
      const chapter = examChapters.find((ch) => ch.section === section.id && ch.topics.includes(theme));
      if (!chapter) continue;

      const themeAccuracy = data.total > 0 ? data.correct / data.total : 0;
      if (themeAccuracy < examConfig.weaknessThreshold) {
        weakThemes.push(theme);
      }
    }

    if (weakThemes.length > 0 || accuracy < examConfig.weaknessThreshold) {
      const priority = accuracy < 0.5 ? "high" : accuracy < 0.75 ? "medium" : "low";
      weakAreas.push({ section: section.id, themes: weakThemes, priority });
    }
  }

  // Generate recommended chapters ordered by priority
  const frequencyData = examConfig.frequencyData;
  const recommendedChapters: StudyPlan["recommendedChapters"] = [];

  for (const chapter of examChapters) {
    const sectionData = sectionScores[chapter.section];
    const sectionAccuracy = sectionData?.total > 0 ? sectionData.score / sectionData.total : 0;

    // Check if any chapter topic is weak
    const hasWeakTopic = chapter.topics.some((topic) => {
      const data = themeBreakdown[topic];
      return !data || (data.total > 0 && data.correct / data.total < examConfig.weaknessThreshold);
    });

    // Get max frequency weight for chapter topics
    const maxFreq = Math.max(
      ...chapter.topics.map((t) => frequencyData[t] ?? 1),
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
    exam: examConfig.slug,
  };
}
