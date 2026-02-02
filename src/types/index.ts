// === Chat ===

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

// === Sections ===

export type Section = "quant" | "verbal" | "data-insights";

export const SECTION_LABELS: Record<Section, string> = {
  quant: "Quantitative Reasoning",
  verbal: "Verbal Reasoning",
  "data-insights": "Data Insights",
};

export const SECTION_SHORT_LABELS: Record<Section, string> = {
  quant: "Quant",
  verbal: "Verbal",
  "data-insights": "Data Insights",
};

export const SECTION_COLORS: Record<Section, { bg: string; text: string; border: string; accent: string }> = {
  quant: { bg: "bg-gray-50", text: "text-gray-700", border: "border-gray-200", accent: "bg-gray-800" },
  verbal: { bg: "bg-gray-50", text: "text-gray-700", border: "border-gray-200", accent: "bg-gray-700" },
  "data-insights": { bg: "bg-gray-50", text: "text-gray-700", border: "border-gray-200", accent: "bg-gray-600" },
};

// === Themes ===

export type Theme =
  // Quant themes
  | "number-properties"
  | "divisibility-primes"
  | "remainders"
  | "fractions-decimals"
  | "percentages"
  | "ratios"
  | "exponents-roots"
  | "linear-equations"
  | "quadratic-equations"
  | "inequalities"
  | "absolute-value"
  | "functions"
  | "sequences"
  | "triangles"
  | "circles"
  | "coordinate-geometry"
  | "polygons"
  | "3d-geometry"
  | "rate-work"
  | "mixtures"
  | "overlapping-sets"
  | "probability"
  | "combinatorics"
  | "statistics"
  | "data-sufficiency-logic"
  // Verbal -- Critical Reasoning
  | "cr-weaken"
  | "cr-strengthen"
  | "cr-assumption"
  | "cr-evaluate"
  | "cr-inference"
  | "cr-paradox"
  | "cr-boldface"
  | "cr-complete-passage"
  // Verbal -- Reading Comprehension
  | "rc-main-idea"
  | "rc-detail"
  | "rc-inference"
  | "rc-structure"
  | "rc-tone"
  | "rc-application"
  // Data Insights
  | "ds-number-properties"
  | "ds-algebra"
  | "ds-word-problems"
  | "ds-statistics"
  | "msr"
  | "tpa"
  | "gi"
  | "ta";

export const THEME_LABELS: Record<Theme, string> = {
  // Quant
  "number-properties": "Number Properties",
  "divisibility-primes": "Divisibility & Primes",
  "remainders": "Remainders",
  "fractions-decimals": "Fractions & Decimals",
  "percentages": "Percentages",
  "ratios": "Ratios",
  "exponents-roots": "Exponents & Roots",
  "linear-equations": "Linear Equations",
  "quadratic-equations": "Quadratic Equations",
  "inequalities": "Inequalities",
  "absolute-value": "Absolute Value",
  "functions": "Functions",
  "sequences": "Sequences",
  "triangles": "Triangles",
  "circles": "Circles",
  "coordinate-geometry": "Coordinate Geometry",
  "polygons": "Polygons",
  "3d-geometry": "3D Geometry",
  "rate-work": "Rate & Work",
  "mixtures": "Mixtures",
  "overlapping-sets": "Overlapping Sets",
  "probability": "Probability",
  "combinatorics": "Combinatorics",
  "statistics": "Statistics",
  "data-sufficiency-logic": "Data Sufficiency Logic",
  // Verbal -- CR
  "cr-weaken": "Weaken",
  "cr-strengthen": "Strengthen",
  "cr-assumption": "Assumption",
  "cr-evaluate": "Evaluate",
  "cr-inference": "Inference",
  "cr-paradox": "Resolve Paradox",
  "cr-boldface": "Boldface / Structure",
  "cr-complete-passage": "Complete the Passage",
  // Verbal -- RC
  "rc-main-idea": "Main Idea",
  "rc-detail": "Supporting Detail",
  "rc-inference": "Inference",
  "rc-structure": "Passage Structure",
  "rc-tone": "Author's Tone",
  "rc-application": "Application",
  // Data Insights
  "ds-number-properties": "DS: Number Properties",
  "ds-algebra": "DS: Algebra",
  "ds-word-problems": "DS: Word Problems",
  "ds-statistics": "DS: Statistics",
  "msr": "Multi-Source Reasoning",
  "tpa": "Two-Part Analysis",
  "gi": "Graphics Interpretation",
  "ta": "Table Analysis",
};

// === Theme Categories (per section) ===

export type ThemeCategory =
  | "arithmetic"
  | "algebra"
  | "geometry"
  | "word-problems"
  | "data-sufficiency"
  | "critical-reasoning"
  | "reading-comprehension"
  | "di-data-sufficiency"
  | "di-multi-source"
  | "di-two-part"
  | "di-graphics"
  | "di-table";

export const THEME_CATEGORIES: Record<ThemeCategory, { label: string; section: Section; themes: Theme[] }> = {
  arithmetic: {
    label: "Arithmetic",
    section: "quant",
    themes: ["number-properties", "divisibility-primes", "remainders", "fractions-decimals", "percentages", "ratios", "exponents-roots"],
  },
  algebra: {
    label: "Algebra",
    section: "quant",
    themes: ["linear-equations", "quadratic-equations", "inequalities", "absolute-value", "functions", "sequences"],
  },
  geometry: {
    label: "Geometry",
    section: "quant",
    themes: ["triangles", "circles", "coordinate-geometry", "polygons", "3d-geometry"],
  },
  "word-problems": {
    label: "Word Problems",
    section: "quant",
    themes: ["rate-work", "mixtures", "overlapping-sets", "probability", "combinatorics", "statistics"],
  },
  "data-sufficiency": {
    label: "Data Sufficiency",
    section: "quant",
    themes: ["data-sufficiency-logic"],
  },
  "critical-reasoning": {
    label: "Critical Reasoning",
    section: "verbal",
    themes: ["cr-weaken", "cr-strengthen", "cr-assumption", "cr-evaluate", "cr-inference", "cr-paradox", "cr-boldface", "cr-complete-passage"],
  },
  "reading-comprehension": {
    label: "Reading Comprehension",
    section: "verbal",
    themes: ["rc-main-idea", "rc-detail", "rc-inference", "rc-structure", "rc-tone", "rc-application"],
  },
  "di-data-sufficiency": {
    label: "Data Sufficiency",
    section: "data-insights",
    themes: ["ds-number-properties", "ds-algebra", "ds-word-problems", "ds-statistics"],
  },
  "di-multi-source": {
    label: "Multi-Source Reasoning",
    section: "data-insights",
    themes: ["msr"],
  },
  "di-two-part": {
    label: "Two-Part Analysis",
    section: "data-insights",
    themes: ["tpa"],
  },
  "di-graphics": {
    label: "Graphics Interpretation",
    section: "data-insights",
    themes: ["gi"],
  },
  "di-table": {
    label: "Table Analysis",
    section: "data-insights",
    themes: ["ta"],
  },
};

export function getCategoriesBySection(section: Section): [ThemeCategory, { label: string; section: Section; themes: Theme[] }][] {
  return (Object.entries(THEME_CATEGORIES) as [ThemeCategory, { label: string; section: Section; themes: Theme[] }][])
    .filter(([, cat]) => cat.section === section);
}

// === GMAT Frequency Data (from analysis of 766 official questions) ===

export const GMAT_FREQUENCY: Partial<Record<Theme, number>> = {
  "number-properties": 13.83,
  "divisibility-primes": 13.83,
  "remainders": 13.83,
  "percentages": 8.72,
  "statistics": 8.30,
  "exponents-roots": 6.30,
  "linear-equations": 5.53,
  "probability": 5.0,
  "combinatorics": 5.0,
  "ratios": 4.89,
  "inequalities": 4.70,
  "absolute-value": 4.70,
  "coordinate-geometry": 3.19,
  "sequences": 3.2,
  "fractions-decimals": 3.0,
  "rate-work": 3.0,
  "circles": 2.98,
  "triangles": 2.77,
  "quadratic-equations": 2.5,
  "overlapping-sets": 2.0,
  "mixtures": 2.0,
  "functions": 0.4,
};

// === Question Types ===

export type Difficulty = "easy" | "medium" | "hard";

export type QuestionType =
  | "problem-solving"
  | "data-sufficiency"
  | "critical-reasoning"
  | "reading-comprehension"
  | "multi-source-reasoning"
  | "two-part-analysis"
  | "graphics-interpretation"
  | "table-analysis";

export const QUESTION_TYPE_LABELS: Record<QuestionType, string> = {
  "problem-solving": "Problem Solving",
  "data-sufficiency": "Data Sufficiency",
  "critical-reasoning": "Critical Reasoning",
  "reading-comprehension": "Reading Comprehension",
  "multi-source-reasoning": "Multi-Source Reasoning",
  "two-part-analysis": "Two-Part Analysis",
  "graphics-interpretation": "Graphics Interpretation",
  "table-analysis": "Table Analysis",
};

// === Source Citations ===

export interface QuestionSource {
  name: string;
  type: "official" | "community" | "original";
  url?: string;
}

// === Data structures for special question types ===

export interface DataSource {
  title: string;
  content: string;
}

export interface TableData {
  headers: string[];
  rows: string[][];
}

// === Chart Data for Graphics Interpretation ===

export type ChartType =
  | "bar"
  | "horizontal-bar"
  | "grouped-bar"
  | "stacked-bar"
  | "stacked-bar-100"
  | "line"
  | "multi-line"
  | "dual-axis"
  | "pie"
  | "scatter"
  | "scatter-trend"
  | "histogram"
  | "bubble"
  | "box-plot";

export interface ChartDataSeries {
  name: string;
  dataKey: string;
  color?: string;
  yAxisId?: "left" | "right";
}

export interface ChartAxisConfig {
  label?: string;
  unit?: string;
  domain?: [number, number];
}

export interface BoxPlotDataPoint {
  name: string;
  min: number;
  q1: number;
  median: number;
  q3: number;
  max: number;
}

export interface ChartData {
  type: ChartType;
  title?: string;
  data: Record<string, string | number>[];
  series: ChartDataSeries[];
  xAxisKey: string;
  xAxis?: ChartAxisConfig;
  yAxis?: ChartAxisConfig;
  yAxisRight?: ChartAxisConfig;
  boxPlotData?: BoxPlotDataPoint[];
  trendLineSlope?: number;
  trendLineIntercept?: number;
  sizeKey?: string;
  sizeLabel?: string;
}

// === Question ===

export interface Question {
  id: string;
  section: Section;
  type: QuestionType;
  themes: Theme[];
  difficulty: Difficulty;
  text: string;
  choices: string[];
  correctAnswer: number;
  correctAnswerB?: number;
  explanation: string;
  source: QuestionSource;
  conceptExplanation?: string;
  chapterId?: string;
  passage?: string;
  dataSources?: DataSource[];
  tableData?: TableData;
  chartData?: ChartData;
  twoPartColumns?: [string, string];
}

// === Chapter ===

export interface Chapter {
  id: string;
  section: Section;
  title: string;
  description: string;
  order: number;
  topics: Theme[];
  frequency: "high" | "medium" | "low";
  frequencyPercent?: number;
  estimatedMinutes: number;
  practiceQuestionIds: string[];
}

// === User Data Models ===

export interface UserAttempt {
  id?: string;
  userId: string;
  questionId: string;
  selectedAnswer: number;
  correct: boolean;
  themes: Theme[];
  timestamp: number;
  sessionId: string;
}

export interface PracticeSession {
  id?: string;
  userId: string;
  section?: Section;
  sessionType?: "practice" | "diagnostic" | "mock";
  questionIds: string[];
  answers: Record<string, number>;
  score: number;
  total: number;
  themeBreakdown: Record<string, { correct: number; total: number }>;
  sectionBreakdown?: Record<Section, { score: number; total: number }>;
  timestamp: number;
  completed: boolean;
}

export interface StudyPlan {
  id?: string;
  userId: string;
  diagnosticSessionId: string;
  sectionScores: Record<Section, { score: number; total: number }>;
  weakAreas: { section: Section; themes: Theme[]; priority: "high" | "medium" | "low" }[];
  recommendedChapters: { chapterId: string; completed: boolean; priority: number }[];
  createdAt: number;
  updatedAt: number;
}

export interface UserProfile {
  uid: string;
  displayName: string | null;
  email: string | null;
  createdAt: number;
  totalSessions: number;
  totalQuestions: number;
  totalCorrect: number;
  hasTakenDiagnostic?: boolean;
  currentStudyPlanId?: string;
  sectionStats?: Record<Section, { totalQuestions: number; totalCorrect: number }>;
}

// === Study Guide ===

export interface StudyGuideItem {
  id?: string;
  userId: string;
  chapterId: string;
  chapterTitle: string;
  sectionTitle: string;
  selectedText: string;
  note?: string;
  createdAt: number;
}

// === Chapter Progress ===

export interface ChapterProgress {
  chapterId: string;
  chapterTitle: string;
  completed: boolean;
  completedAt: number;
}
