import { Chapter } from "@/types";

export const greQuantChapters: Chapter[] = [
  {
    id: "gre-quant-arithmetic",
    section: "quant",
    title: "Arithmetic Fundamentals",
    description: "Review integers, number properties, fractions, decimals, percents, ratios, and exponents for the GRE Quantitative section.",
    order: 1,
    topics: ["integers", "fractions-decimals-percents", "ratio-proportion", "exponents-roots"],
    frequency: "high",
    frequencyPercent: 30,
    estimatedMinutes: 40,
    practiceQuestionIds: [
      // QC arithmetic
      "gre-qc-001", "gre-qc-002", "gre-qc-003", "gre-qc-004", "gre-qc-005",
      "gre-qc-006", "gre-qc-007", "gre-qc-008", "gre-qc-009", "gre-qc-010",
      // PS arithmetic
      "gre-ps-001", "gre-ps-002", "gre-ps-003", "gre-ps-004", "gre-ps-005",
      "gre-ps-006", "gre-ps-007", "gre-ps-008",
      // NE arithmetic
      "gre-ne-001", "gre-ne-002", "gre-ne-003", "gre-ne-004", "gre-ne-005",
    ],
  },
  {
    id: "gre-quant-algebra",
    section: "quant",
    title: "Algebra",
    description: "Cover linear and quadratic equations, inequalities, functions, coordinate geometry, and algebraic word problems.",
    order: 2,
    topics: ["linear-equations", "quadratic-equations", "functions-graphs", "word-problems"],
    frequency: "high",
    frequencyPercent: 25,
    estimatedMinutes: 40,
    practiceQuestionIds: [
      // QC algebra
      "gre-qc-011", "gre-qc-012", "gre-qc-013", "gre-qc-014", "gre-qc-015",
      "gre-qc-016", "gre-qc-017", "gre-qc-018",
      // PS algebra
      "gre-ps-009", "gre-ps-010", "gre-ps-011", "gre-ps-012", "gre-ps-013",
      "gre-ps-014", "gre-ps-015", "gre-ps-016", "gre-ps-017", "gre-ps-018",
      // NE algebra
      "gre-ne-006", "gre-ne-007", "gre-ne-008", "gre-ne-009", "gre-ne-010",
    ],
  },
  {
    id: "gre-quant-geometry",
    section: "quant",
    title: "Geometry",
    description: "Study lines, angles, triangles, circles, polygons, coordinate geometry, and 3D figures for the GRE.",
    order: 3,
    topics: ["lines-angles", "triangles", "circles", "quadrilaterals-polygons", "coordinate-geometry", "3d-geometry"],
    frequency: "medium",
    frequencyPercent: 18,
    estimatedMinutes: 35,
    practiceQuestionIds: [
      // QC geometry
      "gre-qc-019", "gre-qc-020", "gre-qc-021", "gre-qc-022", "gre-qc-023", "gre-qc-024",
      // PS geometry
      "gre-ps-019", "gre-ps-020", "gre-ps-021", "gre-ps-022", "gre-ps-023",
      "gre-ps-024", "gre-ps-025", "gre-ps-026",
      // NE geometry
      "gre-ne-011", "gre-ne-012", "gre-ne-013",
    ],
  },
  {
    id: "gre-quant-data-analysis",
    section: "quant",
    title: "Data Analysis",
    description: "Learn statistics, probability, counting methods, data interpretation from charts and tables, and normal distributions.",
    order: 4,
    topics: ["statistics-descriptive", "probability", "counting-combinatorics", "data-interpretation", "normal-distribution"],
    frequency: "high",
    frequencyPercent: 27,
    estimatedMinutes: 40,
    practiceQuestionIds: [
      // QC data analysis
      "gre-qc-025", "gre-qc-026", "gre-qc-027", "gre-qc-028", "gre-qc-029", "gre-qc-030",
      // PS data analysis
      "gre-ps-027", "gre-ps-028", "gre-ps-029", "gre-ps-030", "gre-ps-031",
      "gre-ps-032", "gre-ps-033", "gre-ps-034", "gre-ps-035",
      // DI (all)
      "gre-di-001", "gre-di-002", "gre-di-003", "gre-di-004", "gre-di-005",
      "gre-di-006", "gre-di-007", "gre-di-008", "gre-di-009", "gre-di-010",
      "gre-di-011", "gre-di-012", "gre-di-013", "gre-di-014", "gre-di-015",
      "gre-di-016", "gre-di-017", "gre-di-018", "gre-di-019", "gre-di-020",
      // NE data analysis
      "gre-ne-014", "gre-ne-015",
    ],
  },
];
