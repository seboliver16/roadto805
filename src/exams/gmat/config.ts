import { ExamConfig } from "../types";
import { estimateGmatScore } from "./scoring";

export const gmatConfig: ExamConfig = {
  id: "gmat",
  name: "GMAT Focus Edition",
  shortName: "GMAT",
  slug: "gmat",

  // === Sections ===
  sections: [
    { id: "quant", label: "Quantitative Reasoning", shortLabel: "Quant" },
    { id: "verbal", label: "Verbal Reasoning", shortLabel: "Verbal" },
    { id: "data-insights", label: "Data Insights", shortLabel: "Data Insights" },
  ],

  sectionColors: {
    quant: { bg: "bg-gray-50", text: "text-gray-700", border: "border-gray-200", accent: "bg-gray-800" },
    verbal: { bg: "bg-gray-50", text: "text-gray-700", border: "border-gray-200", accent: "bg-gray-700" },
    "data-insights": { bg: "bg-gray-50", text: "text-gray-700", border: "border-gray-200", accent: "bg-gray-600" },
  },

  // === Themes ===
  themes: {
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
    // Verbal -- Critical Reasoning
    "cr-weaken": "Weaken",
    "cr-strengthen": "Strengthen",
    "cr-assumption": "Assumption",
    "cr-evaluate": "Evaluate",
    "cr-inference": "Inference",
    "cr-paradox": "Resolve Paradox",
    "cr-boldface": "Boldface / Structure",
    "cr-complete-passage": "Complete the Passage",
    // Verbal -- Reading Comprehension
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
  },

  // === Theme Categories ===
  themeCategories: [
    { id: "arithmetic", label: "Arithmetic", section: "quant", themes: ["number-properties", "divisibility-primes", "remainders", "fractions-decimals", "percentages", "ratios", "exponents-roots"] },
    { id: "algebra", label: "Algebra", section: "quant", themes: ["linear-equations", "quadratic-equations", "inequalities", "absolute-value", "functions", "sequences"] },
    { id: "geometry", label: "Geometry", section: "quant", themes: ["triangles", "circles", "coordinate-geometry", "polygons", "3d-geometry"] },
    { id: "word-problems", label: "Word Problems", section: "quant", themes: ["rate-work", "mixtures", "overlapping-sets", "probability", "combinatorics", "statistics"] },
    { id: "data-sufficiency", label: "Data Sufficiency", section: "quant", themes: ["data-sufficiency-logic"] },
    { id: "critical-reasoning", label: "Critical Reasoning", section: "verbal", themes: ["cr-weaken", "cr-strengthen", "cr-assumption", "cr-evaluate", "cr-inference", "cr-paradox", "cr-boldface", "cr-complete-passage"] },
    { id: "reading-comprehension", label: "Reading Comprehension", section: "verbal", themes: ["rc-main-idea", "rc-detail", "rc-inference", "rc-structure", "rc-tone", "rc-application"] },
    { id: "di-data-sufficiency", label: "Data Sufficiency", section: "data-insights", themes: ["ds-number-properties", "ds-algebra", "ds-word-problems", "ds-statistics"] },
    { id: "di-multi-source", label: "Multi-Source Reasoning", section: "data-insights", themes: ["msr"] },
    { id: "di-two-part", label: "Two-Part Analysis", section: "data-insights", themes: ["tpa"] },
    { id: "di-graphics", label: "Graphics Interpretation", section: "data-insights", themes: ["gi"] },
    { id: "di-table", label: "Table Analysis", section: "data-insights", themes: ["ta"] },
  ],

  // === Frequency Data (from analysis of 766 official questions) ===
  frequencyData: {
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
  },

  // === Question Types ===
  questionTypes: {
    "problem-solving": "Problem Solving",
    "data-sufficiency": "Data Sufficiency",
    "critical-reasoning": "Critical Reasoning",
    "reading-comprehension": "Reading Comprehension",
    "multi-source-reasoning": "Multi-Source Reasoning",
    "two-part-analysis": "Two-Part Analysis",
    "graphics-interpretation": "Graphics Interpretation",
    "table-analysis": "Table Analysis",
  },

  questionTypesPerSection: {
    quant: ["problem-solving", "data-sufficiency"],
    verbal: ["critical-reasoning", "reading-comprehension"],
    "data-insights": ["multi-source-reasoning", "two-part-analysis", "graphics-interpretation", "table-analysis"],
  },

  // === Mock Exam Config ===
  mockSections: [
    { section: "quant", label: "Quantitative Reasoning", questionCount: 21, timeMinutes: 45 },
    { section: "verbal", label: "Verbal Reasoning", questionCount: 23, timeMinutes: 45 },
    { section: "data-insights", label: "Data Insights", questionCount: 20, timeMinutes: 45 },
  ],

  difficultyDistribution: { easy: 0.3, medium: 0.4, hard: 0.3 },

  // === Scoring ===
  scoreRange: { min: 205, max: 805, label: "out of 805" },
  sectionScoreRange: { min: 60, max: 90 },
  estimateScore: estimateGmatScore,

  // === Diagnostic ===
  diagnosticQuestionsPerSection: 6,
  weaknessThreshold: 0.75,
};
