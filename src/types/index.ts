// === Chat ===

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

// === Sections (generic — exam-specific values come from ExamConfig) ===

export type Section = string;
export type Theme = string;
export type ThemeCategory = string;
export type QuestionType = string;
export type Difficulty = "easy" | "medium" | "hard";

// === Backward-compatible GMAT constants ===
// These re-export from the GMAT config so existing code doesn't break.
// New code should use useExam() / examConfig instead.

import { gmatConfig } from "@/exams/gmat/config";

export const SECTION_LABELS: Record<string, string> = Object.fromEntries(
  gmatConfig.sections.map((s) => [s.id, s.label])
);

export const SECTION_SHORT_LABELS: Record<string, string> = Object.fromEntries(
  gmatConfig.sections.map((s) => [s.id, s.shortLabel])
);

export const SECTION_COLORS = gmatConfig.sectionColors;

export const THEME_LABELS: Record<string, string> = gmatConfig.themes;

export const THEME_CATEGORIES: Record<string, { label: string; section: string; themes: string[] }> = Object.fromEntries(
  gmatConfig.themeCategories.map((cat) => [cat.id, { label: cat.label, section: cat.section, themes: cat.themes }])
);

export function getCategoriesBySection(section: string): [string, { label: string; section: string; themes: string[] }][] {
  return Object.entries(THEME_CATEGORIES).filter(([, cat]) => cat.section === section);
}

export const GMAT_FREQUENCY: Record<string, number> = gmatConfig.frequencyData;

export const QUESTION_TYPE_LABELS: Record<string, string> = gmatConfig.questionTypes;

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
  exam?: string;
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
  sectionBreakdown?: Record<string, { score: number; total: number }>;
  timestamp: number;
  completed: boolean;
  exam?: string;
}

export interface StudyPlan {
  id?: string;
  userId: string;
  diagnosticSessionId: string;
  sectionScores: Record<string, { score: number; total: number }>;
  weakAreas: { section: string; themes: string[]; priority: "high" | "medium" | "low" }[];
  recommendedChapters: { chapterId: string; completed: boolean; priority: number }[];
  createdAt: number;
  updatedAt: number;
  exam?: string;
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
  sectionStats?: Record<string, { totalQuestions: number; totalCorrect: number }>;
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
