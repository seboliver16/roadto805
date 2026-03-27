import { Question } from "@/types";

const QC_CHOICES = [
  "Quantity A is greater.",
  "Quantity B is greater.",
  "The two quantities are equal.",
  "The relationship cannot be determined from the information given.",
] as const;

export const greQuantQCExpandedQuestions: Question[] = [
  // ============================================================
  //  25 Quantitative Comparison questions
  //  Answer distribution: 6 A-greater, 6 B-greater, 6 Equal, 7 Cannot-determine
  //  Difficulty: 8 easy, 10 medium, 7 hard
  // ============================================================

  // --- gre-qc-exp-001 | easy | answer 2 (Equal) | exponents ---
  {
    id: "gre-qc-exp-001",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["integers"],
    difficulty: "easy",
    quantityA: "$(-3)^4$",
    quantityB: "$3^4$",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 2,
    explanation:
      "$(-3)^4 = (-3) \\times (-3) \\times (-3) \\times (-3) = 81$. Also $3^4 = 81$. Raising a negative number to an even power yields the same result as raising the absolute value to that power. The two quantities are equal.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // --- gre-qc-exp-002 | easy | answer 0 (A > B) | repeating decimals ---
  {
    id: "gre-qc-exp-002",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["fractions-decimals-percents"],
    difficulty: "easy",
    quantityA: "$0.\\overline{6}$",
    quantityB: "$\\frac{3}{5}$",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 0,
    explanation:
      "$0.\\overline{6} = \\frac{2}{3} \\approx 0.6667$. Quantity B $= \\frac{3}{5} = 0.6$. Since $\\frac{2}{3} > \\frac{3}{5}$, Quantity A is greater.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // --- gre-qc-exp-003 | easy | answer 1 (B > A) | exponents ---
  {
    id: "gre-qc-exp-003",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["exponents-roots"],
    difficulty: "easy",
    quantityA: "$\\sqrt{80}$",
    quantityB: "$9$",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 1,
    explanation:
      "$\\sqrt{80} = \\sqrt{16 \\times 5} = 4\\sqrt{5}$. Since $\\sqrt{5} \\approx 2.236$, we get $4\\sqrt{5} \\approx 8.944$. Since $8.944 < 9$, Quantity B is greater.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // --- gre-qc-exp-004 | easy | answer 0 (A > B) | number properties ---
  {
    id: "gre-qc-exp-004",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["integers"],
    difficulty: "easy",
    quantityA: "The number of positive factors of $60$",
    quantityB: "$10$",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 0,
    explanation:
      "$60 = 2^2 \\times 3 \\times 5$. The number of positive factors is $(2+1)(1+1)(1+1) = 3 \\times 2 \\times 2 = 12$. Since $12 > 10$, Quantity A is greater.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // --- gre-qc-exp-005 | easy | answer 2 (Equal) | repeating decimals ---
  {
    id: "gre-qc-exp-005",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["fractions-decimals-percents"],
    difficulty: "easy",
    quantityA: "$0.\\overline{717}$",
    quantityB: "$\\frac{239}{333}$",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 2,
    explanation:
      "A repeating decimal $0.\\overline{717}$ equals $\\frac{717}{999}$. Simplify by dividing numerator and denominator by $3$: $\\frac{717}{999} = \\frac{239}{333}$. The two quantities are equal.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // --- gre-qc-exp-006 | easy | answer 3 (Cannot determine) | algebra ---
  {
    id: "gre-qc-exp-006",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["linear-equations"],
    difficulty: "easy",
    quantityA: "$x$",
    quantityB: "$y$",
    givenInfo: "$x + y = 20$",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 3,
    explanation:
      "If $x = 15$ and $y = 5$, then $x + y = 20$ and $x > y$. If $x = 8$ and $y = 12$, then $x + y = 20$ and $x < y$. Since different valid values give different relationships, the relationship cannot be determined.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },

  // --- gre-qc-exp-007 | easy | answer 1 (B > A) | statistics ---
  {
    id: "gre-qc-exp-007",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["statistics-descriptive"],
    difficulty: "easy",
    quantityA: "The mean of $\\{2, 3, 5, 8, 12\\}$",
    quantityB: "The median of $\\{1, 4, 7, 9, 10, 15, 18\\}$",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 1,
    explanation:
      "Quantity A: Mean $= \\frac{2+3+5+8+12}{5} = \\frac{30}{5} = 6$. Quantity B: The set has $7$ values in order; the median is the $4$th value $= 9$. Since $6 < 9$, Quantity B is greater.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // --- gre-qc-exp-008 | easy | answer 0 (A > B) | geometry ---
  {
    id: "gre-qc-exp-008",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["triangles"],
    difficulty: "easy",
    quantityA: "The perimeter of an equilateral triangle with side length $8$",
    quantityB: "The perimeter of a square with side length $5$",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 0,
    explanation:
      "Perimeter of the equilateral triangle $= 3 \\times 8 = 24$. Perimeter of the square $= 4 \\times 5 = 20$. Since $24 > 20$, Quantity A is greater.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },

  // --- gre-qc-exp-009 | medium | answer 3 (Cannot determine) | algebra ---
  {
    id: "gre-qc-exp-009",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["quadratic-equations"],
    difficulty: "medium",
    quantityA: "$x^2$",
    quantityB: "$2x$",
    givenInfo: "$x$ is a positive number.",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 3,
    explanation:
      "If $x = 1$: $x^2 = 1$ and $2x = 2$, so $B > A$. If $x = 3$: $x^2 = 9$ and $2x = 6$, so $A > B$. If $x = 2$: $x^2 = 4$ and $2x = 4$, so they are equal. Since different positive values of $x$ yield different relationships, the relationship cannot be determined.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },

  // --- gre-qc-exp-010 | medium | answer 2 (Equal) | coordinate geometry ---
  {
    id: "gre-qc-exp-010",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["coordinate-geometry"],
    difficulty: "medium",
    quantityA: "The slope of the line through $(1, 4)$ and $(5, 10)$",
    quantityB: "$\\frac{3}{2}$",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 2,
    explanation:
      "Slope $= \\frac{10 - 4}{5 - 1} = \\frac{6}{4} = \\frac{3}{2}$. Quantity B $= \\frac{3}{2}$. The two quantities are equal.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },

  // --- gre-qc-exp-011 | medium | answer 0 (A > B) | exponents ---
  {
    id: "gre-qc-exp-011",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["exponents-roots"],
    difficulty: "medium",
    quantityA: "$\\frac{1}{2^{1-k}}$",
    quantityB: "$2$",
    givenInfo: "$k = 3$",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 0,
    explanation:
      "When $k = 3$: $\\frac{1}{2^{1-3}} = \\frac{1}{2^{-2}} = 2^2 = 4$. Since $4 > 2$, Quantity A is greater.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // --- gre-qc-exp-012 | medium | answer 1 (B > A) | geometry ---
  {
    id: "gre-qc-exp-012",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["quadrilaterals-polygons"],
    difficulty: "medium",
    quantityA: "The area of a square with perimeter $20$",
    quantityB: "The area of a rectangle with length $8$ and width $4$",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 1,
    explanation:
      "Square with perimeter $20$: side $= \\frac{20}{4} = 5$, area $= 5^2 = 25$. Rectangle: area $= 8 \\times 4 = 32$. Since $25 < 32$, Quantity B is greater.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },

  // --- gre-qc-exp-013 | medium | answer 3 (Cannot determine) | number properties ---
  {
    id: "gre-qc-exp-013",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["integers"],
    difficulty: "medium",
    quantityA: "$|a - b|$",
    quantityB: "$|a| - |b|$",
    givenInfo: "$a$ and $b$ are nonzero integers.",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 3,
    explanation:
      "Case 1: Let $a = 5$, $b = 2$. Then $|a - b| = |3| = 3$ and $|a| - |b| = 5 - 2 = 3$. They are equal. Case 2: Let $a = 3$, $b = -4$. Then $|a - b| = |3 - (-4)| = 7$ and $|a| - |b| = 3 - 4 = -1$. So $A > B$. By the reverse triangle inequality, $|a - b| \\geq |\\,|a| - |b|\\,|$, which means $|a - b| \\geq |a| - |b|$ always holds. The relationship is either equal or $A > B$, but since both outcomes are possible, the relationship cannot be determined from the information given.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // --- gre-qc-exp-014 | medium | answer 0 (A > B) | algebra / factorials ---
  {
    id: "gre-qc-exp-014",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["integers"],
    difficulty: "medium",
    quantityA: "$\\frac{n!}{(n-2)!}$",
    quantityB: "$2n$",
    givenInfo: "$n$ is an integer and $n > 3$.",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 0,
    explanation:
      "$\\frac{n!}{(n-2)!} = n(n-1)$. We compare $n(n-1)$ with $2n$. Since $n > 3$ (so $n \\geq 4$), divide both sides by $n$ (positive): compare $n - 1$ with $2$. Since $n \\geq 4$, $n - 1 \\geq 3 > 2$. Therefore $n(n-1) > 2n$ for all valid $n$, and Quantity A is greater.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // --- gre-qc-exp-015 | medium | answer 2 (Equal) | geometry ---
  {
    id: "gre-qc-exp-015",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["lines-angles"],
    difficulty: "medium",
    quantityA: "The measure of an interior angle of a regular hexagon",
    quantityB: "$120°$",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 2,
    explanation:
      "The sum of interior angles of a polygon with $n$ sides is $(n-2) \\times 180°$. For a hexagon ($n = 6$): $(6-2) \\times 180° = 720°$. Each interior angle of a regular hexagon $= \\frac{720°}{6} = 120°$. The two quantities are equal.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },

  // --- gre-qc-exp-016 | medium | answer 1 (B > A) | algebra ---
  {
    id: "gre-qc-exp-016",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["linear-equations"],
    difficulty: "medium",
    quantityA: "$x$",
    quantityB: "$y$",
    givenInfo: "$3x + 4y = 50$ and $x = 2$.",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 1,
    explanation:
      "Substituting $x = 2$: $3(2) + 4y = 50$, so $6 + 4y = 50$ and $4y = 44$, giving $y = 11$. Since $2 < 11$, Quantity B is greater.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },

  // --- gre-qc-exp-017 | medium | answer 3 (Cannot determine) | coordinate geometry ---
  {
    id: "gre-qc-exp-017",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["coordinate-geometry"],
    difficulty: "medium",
    quantityA: "The $y$-intercept of line $\\ell$",
    quantityB: "The $x$-intercept of line $\\ell$",
    givenInfo: "Line $\\ell$ has a positive slope and passes through the point $(2, 5)$.",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 3,
    explanation:
      "Let the slope be $m > 0$. The equation is $y - 5 = m(x - 2)$, or $y = mx + (5 - 2m)$. The $y$-intercept is $5 - 2m$. The $x$-intercept (set $y = 0$): $x = \\frac{2m - 5}{m}$. Case 1: $m = 1$. $y$-intercept $= 3$, $x$-intercept $= \\frac{-3}{1} = -3$. So $A > B$. Case 2: $m = 4$. $y$-intercept $= -3$, $x$-intercept $= \\frac{3}{4} = 0.75$. So $B > A$. Since different valid slopes give different relationships, the relationship cannot be determined.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },

  // --- gre-qc-exp-018 | medium | answer 2 (Equal) | number properties ---
  {
    id: "gre-qc-exp-018",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["integers"],
    difficulty: "medium",
    quantityA: "The remainder when $2^{20}$ is divided by $3$",
    quantityB: "$1$",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 2,
    explanation:
      "Powers of $2$ mod $3$ cycle: $2^1 \\equiv 2$, $2^2 \\equiv 1$, $2^3 \\equiv 2$, $2^4 \\equiv 1$, and so on. Even powers of $2$ give remainder $1$ when divided by $3$. Since $20$ is even, $2^{20} \\equiv 1 \\pmod{3}$. The two quantities are equal.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // --- gre-qc-exp-019 | hard | answer 1 (B > A) | exponents ---
  {
    id: "gre-qc-exp-019",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["exponents-roots"],
    difficulty: "hard",
    quantityA: "$4^{30}$",
    quantityB: "$3^{40}$",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 1,
    explanation:
      "Rewrite to a common exponent of $10$: $4^{30} = (4^3)^{10} = 64^{10}$ and $3^{40} = (3^4)^{10} = 81^{10}$. Since $64 < 81$, we have $64^{10} < 81^{10}$. Quantity B is greater.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // --- gre-qc-exp-020 | hard | answer 3 (Cannot determine) | statistics ---
  {
    id: "gre-qc-exp-020",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["statistics-descriptive"],
    difficulty: "hard",
    quantityA: "The mean of data set $T$",
    quantityB: "The median of data set $T$",
    givenInfo: "Data set $T$ consists of $7$ positive integers whose range is $12$.",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 3,
    explanation:
      "Case 1: Let $T = \\{1, 1, 1, 7, 13, 13, 13\\}$. Range $= 13 - 1 = 12$. Mean $= \\frac{49}{7} = 7$. Median (4th value) $= 7$. So mean $=$ median. Case 2: Let $T = \\{1, 1, 1, 1, 1, 1, 13\\}$. Range $= 12$. Mean $= \\frac{19}{7} \\approx 2.71$. Median $= 1$. So mean $>$ median. Case 3: Let $T = \\{1, 13, 13, 13, 13, 13, 13\\}$. Range $= 12$. Mean $= \\frac{79}{7} \\approx 11.29$. Median $= 13$. So mean $<$ median. Since all three relationships are possible, the relationship cannot be determined.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // --- gre-qc-exp-021 | hard | answer 0 (A > B) | algebra ---
  {
    id: "gre-qc-exp-021",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["quadratic-equations"],
    difficulty: "hard",
    quantityA: "The product of the solutions of $x^2 - 7x + 10 = 0$",
    quantityB: "The sum of the solutions of $x^2 - 3x - 4 = 0$",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 0,
    explanation:
      "For $x^2 - 7x + 10 = 0$: by Vieta's formulas, the product of the roots $= 10$. For $x^2 - 3x - 4 = 0$: by Vieta's formulas, the sum of the roots $= 3$. Since $10 > 3$, Quantity A is greater.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },

  // --- gre-qc-exp-022 | hard | answer 1 (B > A) | geometry ---
  {
    id: "gre-qc-exp-022",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["circles"],
    difficulty: "hard",
    quantityA: "The area of a semicircle with diameter $8$",
    quantityB: "The area of an equilateral triangle with side length $10$",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 1,
    explanation:
      "Semicircle: radius $= 4$, area $= \\frac{1}{2}\\pi(4)^2 = 8\\pi \\approx 25.13$. Equilateral triangle with side $10$: area $= \\frac{\\sqrt{3}}{4}(10)^2 = 25\\sqrt{3} \\approx 43.30$. Since $25.13 < 43.30$, Quantity B is greater.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },

  // --- gre-qc-exp-023 | hard | answer 3 (Cannot determine) | exponents ---
  {
    id: "gre-qc-exp-023",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["exponents-roots"],
    difficulty: "hard",
    quantityA: "$x^y$",
    quantityB: "$y^x$",
    givenInfo: "$x$ and $y$ are positive integers and $x < y$.",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 3,
    explanation:
      "Case 1: Let $x = 2$, $y = 3$. Then $x^y = 2^3 = 8$ and $y^x = 3^2 = 9$. So $B > A$. Case 2: Let $x = 2$, $y = 4$. Then $x^y = 2^4 = 16$ and $y^x = 4^2 = 16$. So they are equal. Case 3: Let $x = 2$, $y = 5$. Then $x^y = 2^5 = 32$ and $y^x = 5^2 = 25$. So $A > B$. Since different valid values give different relationships, the relationship cannot be determined.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // --- gre-qc-exp-024 | hard | answer 2 (Equal) | coordinate geometry ---
  {
    id: "gre-qc-exp-024",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["coordinate-geometry"],
    difficulty: "hard",
    quantityA: "The area of triangle $PQR$ where $P = (0,0)$, $Q = (6,0)$, $R = (3,4)$",
    quantityB: "$12$",
    givenInfo: "",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 2,
    explanation:
      "The base $PQ$ lies along the $x$-axis with length $6$. The height from $R = (3,4)$ to the $x$-axis is $4$. Area $= \\frac{1}{2}(6)(4) = 12$. The two quantities are equal.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },

  // --- gre-qc-exp-025 | hard | answer 3 (Cannot determine) | probability ---
  {
    id: "gre-qc-exp-025",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["probability"],
    difficulty: "hard",
    quantityA: "The probability that event $E$ occurs",
    quantityB: "$\\frac{1}{2}$",
    givenInfo: "The probability that event $E$ does not occur is $p$, where $0 < p < 1$.",
    text: "",
    choices: [...QC_CHOICES],
    correctAnswer: 3,
    explanation:
      "The probability that $E$ occurs is $1 - p$. We compare $1 - p$ with $\\frac{1}{2}$. If $p = \\frac{1}{4}$, then $P(E) = \\frac{3}{4} > \\frac{1}{2}$, so $A > B$. If $p = \\frac{3}{4}$, then $P(E) = \\frac{1}{4} < \\frac{1}{2}$, so $B > A$. Since different valid values of $p$ yield different relationships, the relationship cannot be determined.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },
];
