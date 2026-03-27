import { Chapter } from "@/types";

/**
 * GRE Quantitative Reasoning Chapters
 *
 * Real GRE Quant: 27 scored questions across 2 sections
 *   Section 1: 12 questions (21 min) — ~4 QC, ~5 PS, ~1 NE, ~2 DI
 *   Section 2: 15 questions (26 min) — ~5 QC, ~6 PS, ~2 NE, ~2 DI (adaptive)
 *
 * Question type distribution:
 *   Quantitative Comparison:  ~9  (33% of quant)
 *   Problem Solving (MC):     ~11 (41% of quant)
 *   Numeric Entry:            ~3  (11% of quant)
 *   Data Interpretation:      ~4  (15% of quant)
 *
 * Topic distribution (ETS official data):
 *   Arithmetic:       ~25-30% of quant
 *   Algebra:          ~25-30% of quant
 *   Geometry:         ~15% of quant
 *   Data Analysis:    ~25-30% of quant
 */
export const greQuantChapters: Chapter[] = [
  // ═══════════════════════════════════════════════════════════
  // ARITHMETIC (~27% of quant)
  // ═══════════════════════════════════════════════════════════

  {
    id: "gre-quant-integers",
    section: "quant",
    title: "Integers & Number Properties",
    description: "Divisibility rules, prime factorization, GCF/LCM, remainders, odd/even properties, and consecutive integers. Foundation topic that appears in ~10% of quant questions across all question types.",
    order: 1,
    topics: ["integers"],
    frequency: "high",
    frequencyPercent: 10,
    estimatedMinutes: 35,
    practiceQuestionIds: [
      "gre-qc-001", "gre-qc-004", "gre-qc-005",
      "gre-ps-003",
      "gre-qc-exp-001", "gre-qc-exp-004", "gre-qc-exp-005", "gre-qc-exp-006",
      "gre-qc-exp-010", "gre-qc-exp-015",
      "gre-ps-exp-003",
      "gre-ne-001", "gre-ne-002",
      "gre-ne-exp-005", "gre-ne-exp-010",
    ],
  },
  {
    id: "gre-quant-fractions",
    section: "quant",
    title: "Fractions, Decimals & Percents",
    description: "Converting between fractions, decimals, and percents. Operations with fractions, percent change, compound percent problems, and repeating decimals. ~8% of quant questions.",
    order: 2,
    topics: ["fractions-decimals-percents"],
    frequency: "high",
    frequencyPercent: 8,
    estimatedMinutes: 30,
    practiceQuestionIds: [
      "gre-qc-002", "gre-qc-003",
      "gre-ps-002", "gre-ps-004",
      "gre-qc-exp-002", "gre-qc-exp-003",
      "gre-ps-exp-002",
      "gre-ne-003", "gre-ne-004",
      "gre-ne-exp-003", "gre-ne-exp-006",
    ],
  },
  {
    id: "gre-quant-ratios",
    section: "quant",
    title: "Ratios, Rates & Proportions",
    description: "Ratio word problems, direct and inverse proportion, rate problems (distance/time, work/rate), unit conversions, and mixture problems. ~7% of quant questions.",
    order: 3,
    topics: ["ratio-proportion"],
    frequency: "medium",
    frequencyPercent: 7,
    estimatedMinutes: 30,
    practiceQuestionIds: [
      "gre-ps-001", "gre-ps-005",
      "gre-qc-006", "gre-qc-007",
      "gre-ps-exp-004", "gre-ps-exp-005", "gre-ps-exp-010",
      "gre-ne-005",
      "gre-ne-exp-004",
    ],
  },
  {
    id: "gre-quant-exponents",
    section: "quant",
    title: "Exponents & Roots",
    description: "Exponent rules (product, quotient, power), negative and fractional exponents, simplifying radicals, rationalizing denominators. Tested heavily in QC format. ~5% of quant questions.",
    order: 4,
    topics: ["exponents-roots"],
    frequency: "medium",
    frequencyPercent: 5,
    estimatedMinutes: 25,
    practiceQuestionIds: [
      "gre-qc-008", "gre-qc-009", "gre-qc-010",
      "gre-ps-006", "gre-ps-007", "gre-ps-008",
      "gre-qc-exp-007", "gre-qc-exp-008", "gre-qc-exp-009",
      "gre-ps-exp-001", "gre-ps-exp-006",
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // ALGEBRA (~27% of quant)
  // ═══════════════════════════════════════════════════════════

  {
    id: "gre-quant-linear",
    section: "quant",
    title: "Linear Equations & Inequalities",
    description: "Solving single and multi-variable linear equations, systems of equations, inequalities, absolute value, and translating word problems into equations. ~10% of quant questions.",
    order: 5,
    topics: ["linear-equations"],
    frequency: "high",
    frequencyPercent: 10,
    estimatedMinutes: 35,
    practiceQuestionIds: [
      "gre-qc-011", "gre-qc-012", "gre-qc-013",
      "gre-ps-009", "gre-ps-010", "gre-ps-011", "gre-ps-012",
      "gre-qc-exp-011", "gre-qc-exp-012", "gre-qc-exp-013",
      "gre-ps-exp-007", "gre-ps-exp-008",
      "gre-ne-006", "gre-ne-007",
      "gre-ne-exp-001", "gre-ne-exp-002", "gre-ne-exp-007",
    ],
  },
  {
    id: "gre-quant-quadratics",
    section: "quant",
    title: "Quadratics & Functions",
    description: "Factoring, the quadratic formula, completing the square, functions and their graphs, domain/range, and function composition. ~8% of quant questions.",
    order: 6,
    topics: ["quadratic-equations", "functions-graphs"],
    frequency: "medium",
    frequencyPercent: 8,
    estimatedMinutes: 30,
    practiceQuestionIds: [
      "gre-qc-014", "gre-qc-015",
      "gre-ps-013", "gre-ps-014", "gre-ps-015",
      "gre-qc-exp-014", "gre-qc-exp-016",
      "gre-ps-exp-009", "gre-ps-exp-011",
      "gre-ne-008", "gre-ne-009",
      "gre-ne-exp-008",
    ],
  },
  {
    id: "gre-quant-word-problems",
    section: "quant",
    title: "Word Problems",
    description: "Translation of real-world scenarios into algebraic expressions: age problems, distance/rate/time, work problems, mixtures, profit/loss, and overlapping sets. ~9% of quant questions.",
    order: 7,
    topics: ["word-problems"],
    frequency: "high",
    frequencyPercent: 9,
    estimatedMinutes: 35,
    practiceQuestionIds: [
      "gre-qc-016", "gre-qc-017", "gre-qc-018",
      "gre-ps-016", "gre-ps-017", "gre-ps-018",
      "gre-qc-exp-017", "gre-qc-exp-018",
      "gre-ps-exp-012", "gre-ps-exp-013", "gre-ps-exp-014",
      "gre-ne-010",
      "gre-ne-exp-009",
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // GEOMETRY (~15% of quant)
  // ═══════════════════════════════════════════════════════════

  {
    id: "gre-quant-triangles",
    section: "quant",
    title: "Lines, Angles & Triangles",
    description: "Parallel lines and transversals, triangle properties (area, Pythagorean theorem, special right triangles 30-60-90 and 45-45-90, similar triangles, triangle inequality). ~8% of quant questions.",
    order: 8,
    topics: ["lines-angles", "triangles"],
    frequency: "medium",
    frequencyPercent: 8,
    estimatedMinutes: 35,
    practiceQuestionIds: [
      "gre-qc-019", "gre-qc-020", "gre-qc-021",
      "gre-ps-019", "gre-ps-020", "gre-ps-021",
      "gre-qc-exp-019", "gre-qc-exp-020", "gre-qc-exp-021",
      "gre-ps-exp-015", "gre-ps-exp-016",
      "gre-ne-011", "gre-ne-012",
      "gre-ne-exp-011", "gre-ne-exp-012",
    ],
  },
  {
    id: "gre-quant-circles-polygons",
    section: "quant",
    title: "Circles, Polygons & Coordinate Geometry",
    description: "Circle properties (area, circumference, arcs, sectors, inscribed angles), quadrilaterals, regular polygons, coordinate plane (slope, distance, midpoint, equation of a line). ~7% of quant questions.",
    order: 9,
    topics: ["circles", "quadrilaterals-polygons", "coordinate-geometry", "3d-geometry"],
    frequency: "medium",
    frequencyPercent: 7,
    estimatedMinutes: 35,
    practiceQuestionIds: [
      "gre-qc-022", "gre-qc-023", "gre-qc-024",
      "gre-ps-022", "gre-ps-023", "gre-ps-024", "gre-ps-025", "gre-ps-026",
      "gre-qc-exp-022", "gre-qc-exp-023", "gre-qc-exp-024", "gre-qc-exp-025",
      "gre-ps-exp-017", "gre-ps-exp-018", "gre-ps-exp-019",
      "gre-ne-013",
      "gre-ne-exp-013",
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // DATA ANALYSIS (~28% of quant)
  // ═══════════════════════════════════════════════════════════

  {
    id: "gre-quant-statistics",
    section: "quant",
    title: "Statistics & Probability",
    description: "Mean, median, mode, range, standard deviation, quartiles, normal distribution, probability rules (independent events, conditional, complementary), and expected value. ~15% of quant questions.",
    order: 10,
    topics: ["statistics-descriptive", "probability", "normal-distribution"],
    frequency: "high",
    frequencyPercent: 15,
    estimatedMinutes: 40,
    practiceQuestionIds: [
      "gre-qc-025", "gre-qc-026", "gre-qc-027",
      "gre-ps-027", "gre-ps-028", "gre-ps-029", "gre-ps-030",
      "gre-qc-exp-025",
      "gre-ps-exp-020", "gre-ps-exp-021", "gre-ps-exp-022",
      "gre-ne-014",
      "gre-ne-exp-014", "gre-ne-exp-015",
    ],
  },
  {
    id: "gre-quant-counting",
    section: "quant",
    title: "Counting & Combinatorics",
    description: "Fundamental counting principle, permutations, combinations, with restrictions, and probability using counting methods. ~5% of quant questions.",
    order: 11,
    topics: ["counting-combinatorics"],
    frequency: "medium",
    frequencyPercent: 5,
    estimatedMinutes: 25,
    practiceQuestionIds: [
      "gre-ps-031", "gre-ps-032", "gre-ps-033",
      "gre-ps-exp-023", "gre-ps-exp-024", "gre-ps-exp-025",
      "gre-ne-015",
    ],
  },
  {
    id: "gre-quant-data-interp",
    section: "quant",
    title: "Data Interpretation",
    description: "Read and analyze data from tables, bar charts, line graphs, pie charts, and multi-source data sets. Solve questions requiring calculation from presented data. ~8% of quant questions.",
    order: 12,
    topics: ["data-interpretation"],
    frequency: "high",
    frequencyPercent: 8,
    estimatedMinutes: 35,
    practiceQuestionIds: [
      "gre-di-001", "gre-di-002", "gre-di-003", "gre-di-004", "gre-di-005",
      "gre-di-006", "gre-di-007", "gre-di-008", "gre-di-009", "gre-di-010",
      "gre-di-011", "gre-di-012", "gre-di-013", "gre-di-014", "gre-di-015",
      "gre-di-016", "gre-di-017", "gre-di-018", "gre-di-019", "gre-di-020",
    ],
  },
];
