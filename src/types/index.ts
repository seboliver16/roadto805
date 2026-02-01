export type Theme =
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
  | "data-sufficiency-logic";

export type ThemeCategory = "arithmetic" | "algebra" | "geometry" | "word-problems" | "data-sufficiency";

export const THEME_CATEGORIES: Record<ThemeCategory, { label: string; themes: Theme[] }> = {
  arithmetic: {
    label: "Arithmetic",
    themes: ["number-properties", "divisibility-primes", "remainders", "fractions-decimals", "percentages", "ratios", "exponents-roots"],
  },
  algebra: {
    label: "Algebra",
    themes: ["linear-equations", "quadratic-equations", "inequalities", "absolute-value", "functions", "sequences"],
  },
  geometry: {
    label: "Geometry",
    themes: ["triangles", "circles", "coordinate-geometry", "polygons", "3d-geometry"],
  },
  "word-problems": {
    label: "Word Problems",
    themes: ["rate-work", "mixtures", "overlapping-sets", "probability", "combinatorics", "statistics"],
  },
  "data-sufficiency": {
    label: "Data Sufficiency",
    themes: ["data-sufficiency-logic"],
  },
};

export const THEME_LABELS: Record<Theme, string> = {
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
};

export type Difficulty = "easy" | "medium" | "hard";

export type QuestionType = "problem-solving" | "data-sufficiency";

export interface Question {
  id: string;
  type: QuestionType;
  themes: Theme[];
  difficulty: Difficulty;
  text: string;
  choices: string[];
  correctAnswer: number; // index into choices
  explanation: string;
}

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
  questionIds: string[];
  answers: Record<string, number>; // questionId -> selectedAnswer index
  score: number;
  total: number;
  themeBreakdown: Record<string, { correct: number; total: number }>;
  timestamp: number;
  completed: boolean;
}

export interface UserProfile {
  uid: string;
  displayName: string | null;
  email: string | null;
  createdAt: number;
  totalSessions: number;
  totalQuestions: number;
  totalCorrect: number;
}
