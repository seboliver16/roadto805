import { Question } from "@/types";

const QC_CHOICES = [
  "Quantity A is greater.",
  "Quantity B is greater.",
  "The two quantities are equal.",
  "The relationship cannot be determined from the information given.",
] as const;

export const greQuantQCQuestions: Question[] = [
  // ============================================================
  //  ARITHMETIC (10 questions: gre-qc-001 through gre-qc-010)
  // ============================================================

  // --- gre-qc-001 | easy | answer 0 (A > B) ---
  {
    id: "gre-qc-001",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["integers"],
    difficulty: "easy",
    quantityA: "(-1)^100",
    quantityB: "(-1)^101",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 0,
    explanation:
      "(-1)^100 = 1 because any negative number raised to an even power is positive. (-1)^101 = -1 because any negative number raised to an odd power is negative. Since 1 > -1, Quantity A is greater.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // --- gre-qc-002 | easy | answer 2 (Equal) ---
  {
    id: "gre-qc-002",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["fractions-decimals-percents"],
    difficulty: "easy",
    quantityA: "0.125",
    quantityB: "1/8",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 2,
    explanation:
      "1/8 = 0.125. Both quantities are equal to 0.125, so the two quantities are equal.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // --- gre-qc-003 | easy | answer 1 (B > A) ---
  {
    id: "gre-qc-003",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["fractions-decimals-percents"],
    difficulty: "easy",
    quantityA: "30% of 50",
    quantityB: "50% of 40",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 1,
    explanation:
      "Quantity A = 0.30 x 50 = 15. Quantity B = 0.50 x 40 = 20. Since 15 < 20, Quantity B is greater.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // --- gre-qc-004 | medium | answer 3 (Cannot determine) ---
  {
    id: "gre-qc-004",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["integers"],
    difficulty: "medium",
    quantityA: "The remainder when n is divided by 5",
    quantityB: "The remainder when n is divided by 3",
    givenInfo: "n is a positive integer greater than 5.",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 3,
    explanation:
      "Try n = 7: remainder when 7 is divided by 5 is 2; remainder when 7 is divided by 3 is 1. So A > B. Try n = 8: remainder when 8 is divided by 5 is 3; remainder when 8 is divided by 3 is 2. So A > B. Try n = 11: remainder when 11 is divided by 5 is 1; remainder when 11 is divided by 3 is 2. So A < B. Since different valid values of n give different results, the relationship cannot be determined.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // --- gre-qc-005 | easy | answer 0 (A > B) ---
  {
    id: "gre-qc-005",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["exponents-roots"],
    difficulty: "easy",
    quantityA: "2^10",
    quantityB: "10^3",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 0,
    explanation:
      "2^10 = 1024. 10^3 = 1000. Since 1024 > 1000, Quantity A is greater.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // --- gre-qc-006 | medium | answer 1 (B > A) ---
  {
    id: "gre-qc-006",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["exponents-roots"],
    difficulty: "medium",
    quantityA: "√50",
    quantityB: "3√6",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 1,
    explanation:
      "√50 = √(25 x 2) = 5√2. To compare 5√2 and 3√6, square both: (5√2)² = 50 and (3√6)² = 54. Since 50 < 54 and both quantities are positive, 5√2 < 3√6. Quantity B is greater.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // --- gre-qc-007 | easy | answer 2 (Equal) ---
  {
    id: "gre-qc-007",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["ratio-proportion"],
    difficulty: "easy",
    quantityA: "The number of minutes in 2 days",
    quantityB: "The number of seconds in 48 minutes",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 2,
    explanation:
      "Quantity A: 2 days = 2 x 24 x 60 = 2880 minutes. Quantity B: 48 minutes = 48 x 60 = 2880 seconds. Both quantities equal 2880 (though in different units, the numerical values are the same). The two quantities are equal.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // --- gre-qc-008 | hard | answer 3 (Cannot determine) ---
  {
    id: "gre-qc-008",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["exponents-roots"],
    difficulty: "hard",
    quantityA: "x²",
    quantityB: "x³",
    givenInfo: "x is a nonzero number.",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 3,
    explanation:
      "Case 1: Let x = 2. Then x² = 4 and x³ = 8, so B > A. Case 2: Let x = 1/2. Then x² = 1/4 and x³ = 1/8, so A > B. Case 3: Let x = -1. Then x² = 1 and x³ = -1, so A > B. Since different values of x give different relationships, the relationship cannot be determined.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // --- gre-qc-009 | hard | answer 1 (B > A) ---
  {
    id: "gre-qc-009",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["integers"],
    difficulty: "hard",
    quantityA: "The number of distinct prime factors of 72",
    quantityB: "The number of distinct prime factors of 210",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 1,
    explanation:
      "Prime factorization of 72: 72 = 2³ x 3². The distinct prime factors are 2 and 3, so there are 2. Prime factorization of 210: 210 = 2 x 3 x 5 x 7. The distinct prime factors are 2, 3, 5, and 7, so there are 4. Since 2 < 4, Quantity B is greater.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // --- gre-qc-010 | easy | answer 0 (A > B) ---
  {
    id: "gre-qc-010",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["fractions-decimals-percents"],
    difficulty: "easy",
    quantityA: "3/5 + 1/4",
    quantityB: "4/5",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 0,
    explanation:
      "Quantity A: 3/5 + 1/4 = 12/20 + 5/20 = 17/20 = 0.85. Quantity B: 4/5 = 0.80. Since 0.85 > 0.80, Quantity A is greater.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // ============================================================
  //  ALGEBRA (8 questions: gre-qc-011 through gre-qc-018)
  // ============================================================

  // --- gre-qc-011 | easy | answer 2 (Equal) ---
  {
    id: "gre-qc-011",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["linear-equations"],
    difficulty: "easy",
    quantityA: "x",
    quantityB: "7",
    givenInfo: "3x + 9 = 30",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 2,
    explanation:
      "Solve for x: 3x + 9 = 30, so 3x = 21 and x = 7. Therefore Quantity A = 7 = Quantity B. The two quantities are equal.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },

  // --- gre-qc-012 | medium | answer 3 (Cannot determine) ---
  {
    id: "gre-qc-012",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["linear-equations"],
    difficulty: "medium",
    quantityA: "x",
    quantityB: "y",
    givenInfo: "x + y = 10 and x > 0 and y > 0",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 3,
    explanation:
      "Case 1: Let x = 6 and y = 4. Then x + y = 10, x > 0, y > 0, and x > y. Case 2: Let x = 3 and y = 7. Then x + y = 10, x > 0, y > 0, and x < y. Since different valid values yield different comparisons, the relationship cannot be determined.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },

  // --- gre-qc-013 | medium | answer 2 (Equal) ---
  {
    id: "gre-qc-013",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["quadratic-equations"],
    difficulty: "medium",
    quantityA: "The sum of the solutions of x² - 5x + 6 = 0",
    quantityB: "5",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 2,
    explanation:
      "Factor x² - 5x + 6 = (x - 2)(x - 3) = 0, so x = 2 or x = 3. The sum of the solutions is 2 + 3 = 5. (Alternatively, by Vieta's formulas, the sum of the roots of x² - bx + c = 0 is b = 5.) So Quantity A = 5 = Quantity B.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },

  // --- gre-qc-014 | medium | answer 1 (B > A) ---
  {
    id: "gre-qc-014",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["word-problems"],
    difficulty: "medium",
    quantityA: "The price of an item after a 20% increase followed by a 20% decrease",
    quantityB: "The original price of the item",
    givenInfo: "An item has a positive original price.",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 1,
    explanation:
      "Let the original price be P. After a 20% increase: P x 1.20 = 1.20P. After a 20% decrease of the new price: 1.20P x 0.80 = 0.96P. So Quantity A = 0.96P and Quantity B = P. Since P > 0, 0.96P < P. Quantity B is greater.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },

  // --- gre-qc-015 | hard | answer 3 (Cannot determine) ---
  {
    id: "gre-qc-015",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["quadratic-equations"],
    difficulty: "hard",
    quantityA: "x",
    quantityB: "6",
    givenInfo: "x² = 36",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 3,
    explanation:
      "x² = 36 gives x = 6 or x = -6. Case 1: If x = 6, then Quantity A = 6 = Quantity B, so they are equal. Case 2: If x = -6, then Quantity A = -6 < 6 = Quantity B, so B is greater. Since the relationship depends on which value x takes, the relationship cannot be determined.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },

  // --- gre-qc-016 | easy | answer 1 (B > A) ---
  {
    id: "gre-qc-016",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["functions-graphs"],
    difficulty: "easy",
    quantityA: "f(2)",
    quantityB: "f(5)",
    givenInfo: "f(x) = 3x + 1",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 1,
    explanation:
      "f(2) = 3(2) + 1 = 7. f(5) = 3(5) + 1 = 16. Since 7 < 16, Quantity B is greater.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },

  // --- gre-qc-017 | hard | answer 3 (Cannot determine) ---
  {
    id: "gre-qc-017",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["linear-equations"],
    difficulty: "hard",
    quantityA: "a",
    quantityB: "b",
    givenInfo: "a > 0, b > 0, and 5a = 3b + 7",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 3,
    explanation:
      "From 5a = 3b + 7, we get a = (3b + 7) / 5. Case 1: If b = 1, then a = (3 + 7) / 5 = 2, and a = 2 > 1 = b, so Quantity A is greater. Case 2: If b = 10, then a = (30 + 7) / 5 = 7.4, and a = 7.4 < 10 = b, so Quantity B is greater. Since different valid values of b yield different comparisons, the relationship cannot be determined.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },

  // --- gre-qc-018 | medium | answer 2 (Equal) ---
  {
    id: "gre-qc-018",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["word-problems"],
    difficulty: "medium",
    quantityA: "The total cost of 3 pens at $2 each and 4 notebooks at $3 each",
    quantityB: "18",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 2,
    explanation:
      "Quantity A: 3 x $2 + 4 x $3 = $6 + $12 = $18. Quantity B = 18. The two quantities are equal.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },

  // ============================================================
  //  GEOMETRY (6 questions: gre-qc-019 through gre-qc-024)
  // ============================================================

  // --- gre-qc-019 | easy | answer 2 (Equal) ---
  {
    id: "gre-qc-019",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["triangles"],
    difficulty: "easy",
    quantityA: "The measure of the third angle of a triangle whose other two angles measure 45° and 65°",
    quantityB: "70°",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 2,
    explanation:
      "The sum of angles in a triangle is 180°. The third angle = 180° - 45° - 65° = 70°. Quantity A = 70° = Quantity B. The two quantities are equal.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },

  // --- gre-qc-020 | medium | answer 1 (B > A) ---
  {
    id: "gre-qc-020",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["circles"],
    difficulty: "medium",
    quantityA: "The area of a circle with radius 3",
    quantityB: "The area of a square with side 6",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 1,
    explanation:
      "Area of circle = pi x r² = pi x 9 = 9pi ≈ 28.27. Area of square = 6² = 36. Since 28.27 < 36, Quantity B is greater.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },

  // --- gre-qc-021 | medium | answer 0 (A > B) ---
  {
    id: "gre-qc-021",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["triangles"],
    difficulty: "medium",
    quantityA: "The hypotenuse of a right triangle with legs 5 and 12",
    quantityB: "12",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 0,
    explanation:
      "By the Pythagorean theorem, hypotenuse = √(5² + 12²) = √(25 + 144) = √169 = 13. Since 13 > 12, Quantity A is greater.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },

  // --- gre-qc-022 | hard | answer 3 (Cannot determine) ---
  {
    id: "gre-qc-022",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["coordinate-geometry"],
    difficulty: "hard",
    quantityA: "The slope of line L",
    quantityB: "0",
    givenInfo: "Line L passes through the point (2, 3) and intersects the x-axis at a positive value of x.",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 3,
    explanation:
      "Line L passes through (2, 3) and crosses the x-axis at some point (a, 0) where a > 0. The slope = (3 - 0) / (2 - a) = 3 / (2 - a). Case 1: If a = 1, slope = 3 / (2 - 1) = 3 > 0, so A > B. Case 2: If a = 5, slope = 3 / (2 - 5) = 3 / (-3) = -1 < 0, so A < B. Since different valid values give different comparisons, the relationship cannot be determined.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },

  // --- gre-qc-023 | medium | answer 2 (Equal) ---
  {
    id: "gre-qc-023",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["coordinate-geometry"],
    difficulty: "medium",
    quantityA: "The distance from the origin to the point (3, 4)",
    quantityB: "The distance from the origin to the point (-4, 3)",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 2,
    explanation:
      "Distance from origin to (3, 4) = √(3² + 4²) = √(9 + 16) = √25 = 5. Distance from origin to (-4, 3) = √((-4)² + 3²) = √(16 + 9) = √25 = 5. Both distances are 5, so the two quantities are equal.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },

  // --- gre-qc-024 | hard | answer 0 (A > B) ---
  {
    id: "gre-qc-024",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["circles"],
    difficulty: "hard",
    quantityA: "The circumference of a circle with area 25pi",
    quantityB: "The perimeter of a square with area 25",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 0,
    explanation:
      "Circle: Area = pi x r² = 25pi, so r² = 25 and r = 5. Circumference = 2 x pi x r = 10pi ≈ 31.42. Square: Area = s² = 25, so s = 5. Perimeter = 4s = 20. Since 31.42 > 20, Quantity A is greater.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },

  // ============================================================
  //  DATA ANALYSIS (6 questions: gre-qc-025 through gre-qc-030)
  // ============================================================

  // --- gre-qc-025 | easy | answer 2 (Equal) ---
  {
    id: "gre-qc-025",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["statistics-descriptive"],
    difficulty: "easy",
    quantityA: "The median of the set {3, 7, 1, 9, 5}",
    quantityB: "The mean of the set {3, 7, 1, 9, 5}",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 2,
    explanation:
      "First sort the set: {1, 3, 5, 7, 9}. The median is the middle value = 5. The mean = (1 + 3 + 5 + 7 + 9) / 5 = 25 / 5 = 5. Both the median and the mean equal 5, so the two quantities are equal.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // --- gre-qc-026 | medium | answer 0 (A > B) ---
  {
    id: "gre-qc-026",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["probability"],
    difficulty: "medium",
    quantityA: "The probability of rolling a sum of 7 with two fair six-sided dice",
    quantityB: "The probability of rolling a sum of 6 with two fair six-sided dice",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 0,
    explanation:
      "Sum of 7: the pairs are (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) — that is 6 outcomes out of 36 total. P(sum = 7) = 6/36 = 1/6. Sum of 6: the pairs are (1,5), (2,4), (3,3), (4,2), (5,1) — that is 5 outcomes out of 36. P(sum = 6) = 5/36. Since 1/6 = 6/36 > 5/36, Quantity A is greater.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // --- gre-qc-027 | medium | answer 1 (B > A) ---
  {
    id: "gre-qc-027",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["statistics-descriptive"],
    difficulty: "medium",
    quantityA: "The standard deviation of the set {10, 20, 30}",
    quantityB: "The standard deviation of the set {100, 200, 300}",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 1,
    explanation:
      "The set {100, 200, 300} is obtained by multiplying each element of {10, 20, 30} by 10. When all data values are multiplied by a constant k, the standard deviation is also multiplied by |k|. So SD({100, 200, 300}) = 10 x SD({10, 20, 30}). Since SD({10, 20, 30}) > 0, Quantity B is 10 times Quantity A and therefore greater.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // --- gre-qc-028 | hard | answer 3 (Cannot determine) ---
  {
    id: "gre-qc-028",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["statistics-descriptive"],
    difficulty: "hard",
    quantityA: "The mean of the set S",
    quantityB: "The median of the set S",
    givenInfo: "Set S consists of 5 positive integers whose range is 10.",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 3,
    explanation:
      "Case 1: Let S = {1, 6, 6, 6, 11}. The range is 11 - 1 = 10. The mean = (1 + 6 + 6 + 6 + 11) / 5 = 30 / 5 = 6. The median = 6. So the mean equals the median. Case 2: Let S = {1, 1, 1, 1, 11}. The range is 11 - 1 = 10. The mean = (1 + 1 + 1 + 1 + 11) / 5 = 15 / 5 = 3. The median = 1. So the mean is greater than the median. Since different valid sets give different comparisons, the relationship cannot be determined.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // --- gre-qc-029 | medium | answer 3 (Cannot determine) ---
  {
    id: "gre-qc-029",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["probability"],
    difficulty: "medium",
    quantityA: "The probability of event A",
    quantityB: "The probability of event B",
    givenInfo: "Events A and B are independent. The probability that both A and B occur is 1/6. The probability that A occurs is greater than 1/4.",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 3,
    explanation:
      "Since A and B are independent, P(A) x P(B) = 1/6, so P(B) = 1 / (6 x P(A)). Case 1: Let P(A) = 1/2 (which is > 1/4). Then P(B) = 1 / (6 x 1/2) = 1/3. So P(A) = 1/2 > 1/3 = P(B), meaning A > B. Case 2: Let P(A) = 1/3 (which is > 1/4). Then P(B) = 1 / (6 x 1/3) = 1/2. So P(A) = 1/3 < 1/2 = P(B), meaning B > A. Since different valid probabilities yield different comparisons, the relationship cannot be determined.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // --- gre-qc-030 | hard | answer 0 (A > B) ---
  {
    id: "gre-qc-030",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["counting-combinatorics"],
    difficulty: "hard",
    quantityA: "The number of ways to choose 2 items from 7 distinct items",
    quantityB: "The number of ways to arrange 3 people in a line",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 0,
    explanation:
      "Quantity A: C(7, 2) = 7! / (2! x 5!) = (7 x 6) / (2 x 1) = 21. Quantity B: 3! = 3 x 2 x 1 = 6. Since 21 > 6, Quantity A is greater.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },
];
