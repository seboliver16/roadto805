import { ExamConfig } from "../types";
import { estimateGreScore } from "./scoring";

export const greConfig: ExamConfig = {
  id: "gre",
  name: "GRE General Test",
  shortName: "GRE",
  slug: "gre",

  // === Sections ===
  sections: [
    { id: "awa", label: "Analytical Writing", shortLabel: "AWA" },
    { id: "verbal", label: "Verbal Reasoning", shortLabel: "Verbal" },
    { id: "quant", label: "Quantitative Reasoning", shortLabel: "Quant" },
  ],

  sectionColors: {
    awa: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200", accent: "bg-amber-600" },
    verbal: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", accent: "bg-emerald-600" },
    quant: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200", accent: "bg-blue-600" },
  },

  // === Themes ===
  themes: {
    // Verbal — Text Completion & Sentence Equivalence
    "vocabulary-in-context": "Vocabulary in Context",
    "sentence-equivalence": "Sentence Equivalence",
    "text-completion-single": "Single-Blank Completion",
    "text-completion-double": "Double-Blank Completion",
    "text-completion-triple": "Triple-Blank Completion",
    // Verbal — Reading Comprehension
    "rc-main-idea": "Main Idea / Primary Purpose",
    "rc-detail": "Supporting Detail",
    "rc-inference": "Inference",
    "rc-structure": "Passage Structure",
    "rc-strengthen-weaken": "Strengthen / Weaken",
    "rc-vocab-in-passage": "Vocabulary in Passage",
    "rc-select-sentence": "Select-in-Passage",
    // Quant — Arithmetic
    "integers": "Integers & Number Properties",
    "fractions-decimals-percents": "Fractions, Decimals & Percents",
    "ratio-proportion": "Ratio & Proportion",
    "exponents-roots": "Exponents & Roots",
    // Quant — Algebra
    "linear-equations": "Linear Equations & Inequalities",
    "quadratic-equations": "Quadratic Equations",
    "functions-graphs": "Functions & Graphs",
    "word-problems": "Word Problems (Algebra)",
    // Quant — Geometry
    "lines-angles": "Lines & Angles",
    "triangles": "Triangles",
    "circles": "Circles",
    "quadrilaterals-polygons": "Quadrilaterals & Polygons",
    "coordinate-geometry": "Coordinate Geometry",
    "3d-geometry": "3D Geometry",
    // Quant — Data Analysis
    "statistics-descriptive": "Descriptive Statistics",
    "probability": "Probability",
    "counting-combinatorics": "Counting & Combinatorics",
    "data-interpretation": "Data Interpretation (Charts/Tables)",
    "normal-distribution": "Normal Distribution",
  },

  // === Theme Categories ===
  themeCategories: [
    {
      id: "text-completion",
      label: "Text Completion",
      section: "verbal",
      themes: ["text-completion-single", "text-completion-double", "text-completion-triple"],
    },
    {
      id: "sentence-equivalence",
      label: "Sentence Equivalence",
      section: "verbal",
      themes: ["vocabulary-in-context", "sentence-equivalence"],
    },
    {
      id: "reading-comprehension",
      label: "Reading Comprehension",
      section: "verbal",
      themes: ["rc-main-idea", "rc-detail", "rc-inference", "rc-structure", "rc-strengthen-weaken", "rc-vocab-in-passage", "rc-select-sentence"],
    },
    {
      id: "arithmetic",
      label: "Arithmetic",
      section: "quant",
      themes: ["integers", "fractions-decimals-percents", "ratio-proportion", "exponents-roots"],
    },
    {
      id: "algebra",
      label: "Algebra",
      section: "quant",
      themes: ["linear-equations", "quadratic-equations", "functions-graphs", "word-problems"],
    },
    {
      id: "geometry",
      label: "Geometry",
      section: "quant",
      themes: ["lines-angles", "triangles", "circles", "quadrilaterals-polygons", "coordinate-geometry", "3d-geometry"],
    },
    {
      id: "data-analysis",
      label: "Data Analysis",
      section: "quant",
      themes: ["statistics-descriptive", "probability", "counting-combinatorics", "data-interpretation", "normal-distribution"],
    },
  ],

  // === Frequency Data (approximate from GRE official material analysis) ===
  frequencyData: {
    "vocabulary-in-context": 8,
    "sentence-equivalence": 8,
    "text-completion-single": 6,
    "text-completion-double": 5,
    "text-completion-triple": 3,
    "rc-main-idea": 6,
    "rc-detail": 5,
    "rc-inference": 6,
    "rc-structure": 3,
    "rc-strengthen-weaken": 3,
    "rc-vocab-in-passage": 2,
    "rc-select-sentence": 2,
    "integers": 8,
    "fractions-decimals-percents": 7,
    "ratio-proportion": 5,
    "exponents-roots": 4,
    "linear-equations": 7,
    "quadratic-equations": 4,
    "functions-graphs": 3,
    "word-problems": 6,
    "lines-angles": 3,
    "triangles": 5,
    "circles": 4,
    "quadrilaterals-polygons": 3,
    "coordinate-geometry": 4,
    "3d-geometry": 2,
    "statistics-descriptive": 6,
    "probability": 5,
    "counting-combinatorics": 4,
    "data-interpretation": 6,
    "normal-distribution": 2,
  },

  // === Question Types ===
  questionTypes: {
    "analytical-writing": "Analytical Writing",
    "text-completion": "Text Completion",
    "sentence-equivalence": "Sentence Equivalence",
    "reading-comprehension": "Reading Comprehension",
    "quantitative-comparison": "Quantitative Comparison",
    "problem-solving": "Problem Solving",
    "numeric-entry": "Numeric Entry",
    "data-interpretation": "Data Interpretation",
  },

  questionTypesPerSection: {
    awa: ["analytical-writing"],
    verbal: ["text-completion", "sentence-equivalence", "reading-comprehension"],
    quant: ["quantitative-comparison", "problem-solving", "numeric-entry", "data-interpretation"],
  },

  // === Mock Exam Config ===
  // Real GRE (Sept 2023+): 5 sections, 1 hr 58 min total —
  //   AWA (1 Issue essay, 30 min) → V1 (12q, 18min) → Q1 (12q, 21min)
  //   → V2 (15q, 23min) → Q2 (15q, 26min)
  // No scheduled breaks. S2 difficulty is adaptive based on S1 performance.
  mockSections: [
    { section: "awa", label: "Analytical Writing", questionCount: 1, timeMinutes: 30, isEssay: true },
    { section: "verbal", label: "Verbal Reasoning — Section 1", questionCount: 12, timeMinutes: 18, subsection: 1 },
    { section: "quant", label: "Quantitative Reasoning — Section 1", questionCount: 12, timeMinutes: 21, subsection: 1 },
    { section: "verbal", label: "Verbal Reasoning — Section 2", questionCount: 15, timeMinutes: 23, subsection: 2, adaptiveRef: 1 },
    { section: "quant", label: "Quantitative Reasoning — Section 2", questionCount: 15, timeMinutes: 26, subsection: 2, adaptiveRef: 2 },
  ],

  difficultyDistribution: { easy: 0.3, medium: 0.4, hard: 0.3 },

  // === Scoring ===
  scoreRange: { min: 260, max: 340, label: "out of 340" },
  sectionScoreRange: { min: 130, max: 170 },
  estimateScore: estimateGreScore,

  // === Diagnostic ===
  diagnosticQuestionsPerSection: 6,
  weaknessThreshold: 0.75,
};
