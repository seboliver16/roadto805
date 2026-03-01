// === Exam Config Infrastructure ===
// Each supported exam (GMAT, GRE, LSAT, etc.) provides an ExamConfig.
// Shared code (analytics, mock engine, diagnostic, UI) is config-driven.

export interface SectionConfig {
  id: string;           // e.g. "quant", "verbal"
  label: string;        // e.g. "Quantitative Reasoning"
  shortLabel: string;   // e.g. "Quant"
}

export interface SectionColors {
  bg: string;
  text: string;
  border: string;
  accent: string;
}

export interface ThemeCategoryConfig {
  id: string;
  label: string;
  section: string;
  themes: string[];
}

export interface MockSectionConfig {
  section: string;
  label: string;
  questionCount: number;
  timeMinutes: number;
  subsection?: number;      // 1 or 2 — for adaptive GRE sections
  adaptiveRef?: number;     // Index of the S1 section whose score determines this S2's difficulty
}

export interface ExamConfig {
  id: string;                     // "gmat" | "gre" | "lsat"
  name: string;                   // "GMAT Focus Edition"
  shortName: string;              // "GMAT"
  slug: string;                   // URL slug: "gmat", "gre"

  // Sections
  sections: SectionConfig[];
  sectionColors: Record<string, SectionColors>;

  // Themes & categories
  themes: Record<string, string>;              // theme-id → display label
  themeCategories: ThemeCategoryConfig[];       // groups of themes per section
  frequencyData: Record<string, number>;       // theme frequency weights (for study plan prioritization)

  // Question types
  questionTypes: Record<string, string>;       // type-id → display label
  questionTypesPerSection: Record<string, string[]>;

  // Mock exam config
  mockSections: MockSectionConfig[];
  difficultyDistribution: { easy: number; medium: number; hard: number };

  // Scoring
  scoreRange: { min: number; max: number; label: string };
  sectionScoreRange?: { min: number; max: number };
  estimateScore: (
    sectionResults: Record<string, { score: number; total: number }>
  ) => { total: number; sections: Record<string, number> };

  // Diagnostic
  diagnosticQuestionsPerSection: number;
  weaknessThreshold: number;     // accuracy below this = weak (e.g. 0.75)
}
