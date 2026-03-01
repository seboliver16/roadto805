import { Question } from "@/types";

export const greQuantNEQuestions: Question[] = [
  // =============================================
  // ARITHMETIC — 5 questions (gre-ne-001 to 005)
  // =============================================

  // #1 — Integers / Easy
  {
    id: "gre-ne-001",
    section: "quant",
    type: "numeric-entry",
    themes: ["integers"],
    difficulty: "easy",
    text: "What is the greatest common divisor of 36 and 48?",
    choices: [],
    correctAnswer: 0,
    numericAnswer: "12",
    explanation:
      "Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36. Factors of 48: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48. The greatest common factor is 12.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // #2 — Fractions, Decimals, Percents / Easy
  {
    id: "gre-ne-002",
    section: "quant",
    type: "numeric-entry",
    themes: ["fractions-decimals-percents"],
    difficulty: "easy",
    text: "A store reduces the price of a jacket from $80 to $60. What is the percent decrease in the price of the jacket?",
    choices: [],
    correctAnswer: 0,
    numericAnswer: "25",
    explanation:
      "Percent decrease = ((Original - New) / Original) × 100 = ((80 - 60) / 80) × 100 = (20 / 80) × 100 = 0.25 × 100 = 25%.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // #3 — Ratio and Proportion / Medium
  {
    id: "gre-ne-003",
    section: "quant",
    type: "numeric-entry",
    themes: ["ratio-proportion"],
    difficulty: "medium",
    text: "The ratio of boys to girls in a class is 3 to 5. If there are 40 students in the class, how many boys are there?",
    choices: [],
    correctAnswer: 0,
    numericAnswer: "15",
    explanation:
      "The ratio of boys to girls is 3:5, so the total number of parts is 3 + 5 = 8. Each part represents 40 / 8 = 5 students. The number of boys is 3 × 5 = 15.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // #4 — Exponents and Roots / Medium (Decimal answer)
  {
    id: "gre-ne-004",
    section: "quant",
    type: "numeric-entry",
    themes: ["exponents-roots"],
    difficulty: "medium",
    text: "If 5^x = 125, what is the value of 5^(x - 1)? Give your answer to the nearest tenth.",
    choices: [],
    correctAnswer: 0,
    numericAnswer: "25.0",
    explanation:
      "Since 5^x = 125 = 5^3, we have x = 3. Then 5^(x - 1) = 5^(3 - 1) = 5^2 = 25. To the nearest tenth, the answer is 25.0.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // #5 — Fractions, Decimals, Percents / Hard (Fraction answer)
  {
    id: "gre-ne-005",
    section: "quant",
    type: "numeric-entry",
    themes: ["fractions-decimals-percents"],
    difficulty: "hard",
    text: "A tank is 1/3 full of water. After 16 gallons are added, the tank is 5/6 full. What fraction of the tank's total capacity is 16 gallons? Give your answer as a fraction.",
    choices: [],
    correctAnswer: 0,
    numericAnswer: "1/2",
    explanation:
      "Let C be the total capacity of the tank. The tank goes from 1/3 full to 5/6 full when 16 gallons are added. So (5/6)C - (1/3)C = 16. Finding a common denominator: (5/6)C - (2/6)C = (3/6)C = (1/2)C = 16. Therefore 16 gallons is 1/2 of the tank's capacity.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // =============================================
  // ALGEBRA — 5 questions (gre-ne-006 to 010)
  // =============================================

  // #6 — Linear Equations / Easy
  {
    id: "gre-ne-006",
    section: "quant",
    type: "numeric-entry",
    themes: ["linear-equations"],
    difficulty: "easy",
    text: "If 4x - 7 = 13, what is the value of 2x + 5?",
    choices: [],
    correctAnswer: 0,
    numericAnswer: "15",
    explanation:
      "Solve for x: 4x - 7 = 13, so 4x = 20 and x = 5. Then 2x + 5 = 2(5) + 5 = 10 + 5 = 15.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },

  // #7 — Quadratic Equations / Medium
  {
    id: "gre-ne-007",
    section: "quant",
    type: "numeric-entry",
    themes: ["quadratic-equations"],
    difficulty: "medium",
    text: "If x^2 - 5x + 6 = 0 and x > 0, what is the sum of all possible values of x?",
    choices: [],
    correctAnswer: 0,
    numericAnswer: "5",
    explanation:
      "Factor the quadratic: x^2 - 5x + 6 = (x - 2)(x - 3) = 0. The solutions are x = 2 and x = 3. Both are positive, so the sum of all possible values is 2 + 3 = 5.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },

  // #8 — Word Problems / Hard (Decimal answer)
  {
    id: "gre-ne-008",
    section: "quant",
    type: "numeric-entry",
    themes: ["word-problems"],
    difficulty: "hard",
    text: "Working alone, Machine A can complete a job in 6 hours and Machine B can complete the same job in 4 hours. If both machines work together, how many hours will it take them to complete the job? Give your answer to the nearest tenth.",
    choices: [],
    correctAnswer: 0,
    numericAnswer: "2.4",
    explanation:
      "Machine A's rate is 1/6 of the job per hour. Machine B's rate is 1/4 of the job per hour. Combined rate = 1/6 + 1/4 = 2/12 + 3/12 = 5/12 of the job per hour. Time = 1 / (5/12) = 12/5 = 2.4 hours.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },

  // #9 — Linear Equations / Medium (Fraction answer)
  {
    id: "gre-ne-009",
    section: "quant",
    type: "numeric-entry",
    themes: ["linear-equations"],
    difficulty: "medium",
    text: "If (2/3)x + (1/4) = (5/6), what is the value of x? Give your answer as a fraction.",
    choices: [],
    correctAnswer: 0,
    numericAnswer: "7/8",
    explanation:
      "Subtract 1/4 from both sides: (2/3)x = 5/6 - 1/4. Finding a common denominator of 12: 5/6 = 10/12 and 1/4 = 3/12, so (2/3)x = 10/12 - 3/12 = 7/12. Multiply both sides by 3/2: x = (7/12)(3/2) = 21/24 = 7/8.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },

  // #10 — Word Problems / Easy
  {
    id: "gre-ne-010",
    section: "quant",
    type: "numeric-entry",
    themes: ["word-problems"],
    difficulty: "easy",
    text: "The sum of three consecutive integers is 72. What is the largest of the three integers?",
    choices: [],
    correctAnswer: 0,
    numericAnswer: "25",
    explanation:
      "Let the three consecutive integers be n, n+1, and n+2. Their sum is n + (n+1) + (n+2) = 3n + 3 = 72. So 3n = 69 and n = 23. The three integers are 23, 24, and 25. The largest is 25.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },

  // =============================================
  // GEOMETRY — 3 questions (gre-ne-011 to 013)
  // =============================================

  // #11 — Triangles / Easy
  {
    id: "gre-ne-011",
    section: "quant",
    type: "numeric-entry",
    themes: ["triangles"],
    difficulty: "easy",
    text: "A right triangle has legs of length 7 and 24. What is the length of the hypotenuse?",
    choices: [],
    correctAnswer: 0,
    numericAnswer: "25",
    explanation:
      "By the Pythagorean theorem: c^2 = 7^2 + 24^2 = 49 + 576 = 625. So c = sqrt(625) = 25.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },

  // #12 — Circles / Medium (Decimal answer)
  {
    id: "gre-ne-012",
    section: "quant",
    type: "numeric-entry",
    themes: ["circles"],
    difficulty: "medium",
    text: "A circle has an area of 36π square centimeters. What is the circumference of the circle, in centimeters? Give your answer to the nearest tenth. (Use π ≈ 3.14.)",
    choices: [],
    correctAnswer: 0,
    numericAnswer: "37.7",
    explanation:
      "Area = πr^2 = 36π, so r^2 = 36 and r = 6. Circumference = 2πr = 2π(6) = 12π ≈ 12 × 3.14 = 37.68, which rounds to 37.7.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },

  // #13 — Coordinate Geometry / Hard (Fraction answer)
  {
    id: "gre-ne-013",
    section: "quant",
    type: "numeric-entry",
    themes: ["coordinate-geometry"],
    difficulty: "hard",
    text: "In the xy-plane, line m passes through the points (1, 3) and (4, 5). What is the slope of line m? Give your answer as a fraction.",
    choices: [],
    correctAnswer: 0,
    numericAnswer: "2/3",
    explanation:
      "Slope = (y2 - y1) / (x2 - x1) = (5 - 3) / (4 - 1) = 2/3.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },

  // =============================================
  // DATA ANALYSIS — 2 questions (gre-ne-014 to 015)
  // =============================================

  // #14 — Statistics (Descriptive) / Medium (Decimal answer)
  {
    id: "gre-ne-014",
    section: "quant",
    type: "numeric-entry",
    themes: ["statistics-descriptive"],
    difficulty: "medium",
    text: "The test scores of 7 students are: 68, 72, 75, 80, 85, 90, 92. What is the median score?",
    choices: [],
    correctAnswer: 0,
    numericAnswer: "80",
    explanation:
      "The scores are already in ascending order: 68, 72, 75, 80, 85, 90, 92. With 7 values, the median is the 4th value (the middle one). The median is 80.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // #15 — Probability / Hard
  {
    id: "gre-ne-015",
    section: "quant",
    type: "numeric-entry",
    themes: ["probability"],
    difficulty: "hard",
    text: "A fair six-sided die is rolled twice. What is the probability that the sum of the two rolls is 9? Give your answer to the nearest hundredth.",
    choices: [],
    correctAnswer: 0,
    numericAnswer: "0.11",
    explanation:
      "The total number of outcomes when rolling a die twice is 6 × 6 = 36. The pairs that sum to 9 are: (3,6), (4,5), (5,4), (6,3) — that is 4 favorable outcomes. Probability = 4/36 = 1/9 ≈ 0.1111..., which rounds to 0.11.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },
];
