import { Question } from "@/types";

export const greQuantNEExpandedQuestions: Question[] = [
  // ============================================================
  //  15 Numeric Entry questions
  //  Difficulty: 5 easy, 6 medium, 4 hard
  // ============================================================

  // --- gre-ne-exp-001 | easy | geometry (angles) ---
  {
    id: "gre-ne-exp-001",
    section: "quant",
    type: "numeric-entry",
    themes: ["lines-angles"],
    difficulty: "easy",
    text: "Two straight lines intersect at a point. If one of the four angles formed measures $55°$, what is the measure, in degrees, of the angle that is adjacent to it?",
    choices: [],
    correctAnswer: 0,
    numericAnswer: "125",
    explanation:
      "Adjacent angles formed by two intersecting lines are supplementary (they sum to $180°$). Therefore the adjacent angle $= 180° - 55° = 125°$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },

  // --- gre-ne-exp-002 | easy | algebra ---
  {
    id: "gre-ne-exp-002",
    section: "quant",
    type: "numeric-entry",
    themes: ["linear-equations"],
    difficulty: "easy",
    text: "If $3(x + 2) = 21$, what is the value of $x$?",
    choices: [],
    correctAnswer: 0,
    numericAnswer: "5",
    explanation:
      "Divide both sides by $3$: $x + 2 = 7$. Subtract $2$: $x = 5$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },

  // --- gre-ne-exp-003 | easy | percents ---
  {
    id: "gre-ne-exp-003",
    section: "quant",
    type: "numeric-entry",
    themes: ["fractions-decimals-percents"],
    difficulty: "easy",
    text: "A population increases from $800$ to $1{,}000$. What is the percent increase?",
    choices: [],
    correctAnswer: 0,
    numericAnswer: "25",
    explanation:
      "Percent increase $= \\frac{\\text{new} - \\text{original}}{\\text{original}} \\times 100 = \\frac{1000 - 800}{800} \\times 100 = \\frac{200}{800} \\times 100 = 25\\%$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // --- gre-ne-exp-004 | easy | statistics ---
  {
    id: "gre-ne-exp-004",
    section: "quant",
    type: "numeric-entry",
    themes: ["statistics-descriptive"],
    difficulty: "easy",
    text: "The test scores of $5$ students are $78, 82, 88, 90, 92$. What is the mean score?",
    choices: [],
    correctAnswer: 0,
    numericAnswer: "86",
    explanation:
      "Mean $= \\frac{78 + 82 + 88 + 90 + 92}{5} = \\frac{430}{5} = 86$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // --- gre-ne-exp-005 | easy | number properties ---
  {
    id: "gre-ne-exp-005",
    section: "quant",
    type: "numeric-entry",
    themes: ["integers"],
    difficulty: "easy",
    text: "What is the least common multiple of $12$ and $18$?",
    choices: [],
    correctAnswer: 0,
    numericAnswer: "36",
    explanation:
      "$12 = 2^2 \\times 3$ and $18 = 2 \\times 3^2$. The LCM takes the highest power of each prime factor: $\\text{LCM} = 2^2 \\times 3^2 = 4 \\times 9 = 36$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // --- gre-ne-exp-006 | medium | geometry (circles) ---
  {
    id: "gre-ne-exp-006",
    section: "quant",
    type: "numeric-entry",
    themes: ["circles"],
    difficulty: "medium",
    text: "A circle has a circumference of $10\\pi$. What is the area of the circle? Give your answer in terms of $\\pi$ (enter only the numerical coefficient, e.g., if the area is $12\\pi$, enter $12$).",
    choices: [],
    correctAnswer: 0,
    numericAnswer: "25",
    explanation:
      "Circumference $= 2\\pi r = 10\\pi$, so $r = 5$. Area $= \\pi r^2 = \\pi(5)^2 = 25\\pi$. The numerical coefficient is $25$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },

  // --- gre-ne-exp-007 | medium | algebra (systems) ---
  {
    id: "gre-ne-exp-007",
    section: "quant",
    type: "numeric-entry",
    themes: ["linear-equations"],
    difficulty: "medium",
    text: "If $2x + 3y = 19$ and $x - y = 2$, what is the value of $x + y$?",
    choices: [],
    correctAnswer: 0,
    numericAnswer: "8",
    explanation:
      "From $x - y = 2$, we get $x = y + 2$. Substituting into $2x + 3y = 19$: $2(y + 2) + 3y = 19$, so $2y + 4 + 3y = 19$, giving $5y = 15$ and $y = 3$. Then $x = 3 + 2 = 5$. So $x + y = 5 + 3 = 8$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },

  // --- gre-ne-exp-008 | medium | probability ---
  {
    id: "gre-ne-exp-008",
    section: "quant",
    type: "numeric-entry",
    themes: ["probability"],
    difficulty: "medium",
    text: "A fair six-sided die is rolled twice. What is the probability that the product of the two rolls is even? Give your answer as a fraction.",
    choices: [],
    correctAnswer: 0,
    numericAnswer: "3/4",
    explanation:
      "The product is even unless both rolls are odd. $P(\\text{odd on one roll}) = \\frac{3}{6} = \\frac{1}{2}$. $P(\\text{both odd}) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$. $P(\\text{product is even}) = 1 - \\frac{1}{4} = \\frac{3}{4}$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // --- gre-ne-exp-009 | medium | geometry (triangles) ---
  {
    id: "gre-ne-exp-009",
    section: "quant",
    type: "numeric-entry",
    themes: ["triangles"],
    difficulty: "medium",
    text: "In a $30°$-$60°$-$90°$ triangle, the side opposite the $30°$ angle has length $5$. What is the length of the hypotenuse?",
    choices: [],
    correctAnswer: 0,
    numericAnswer: "10",
    explanation:
      "In a $30°$-$60°$-$90°$ triangle, the sides are in the ratio $1 : \\sqrt{3} : 2$. The side opposite $30°$ is the shortest side. If that side has length $5$, then the hypotenuse (opposite the $90°$ angle) is $2 \\times 5 = 10$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },

  // --- gre-ne-exp-010 | medium | statistics (median) ---
  {
    id: "gre-ne-exp-010",
    section: "quant",
    type: "numeric-entry",
    themes: ["statistics-descriptive"],
    difficulty: "medium",
    text: "A set of $8$ numbers has a median of $14$. If the numbers in the set when arranged in increasing order are $3, 7, 10, x, 16, 19, 22, 28$, what is the value of $x$?",
    choices: [],
    correctAnswer: 0,
    numericAnswer: "12",
    explanation:
      "For a set of $8$ numbers, the median is the average of the $4$th and $5$th values. The $5$th value is $16$. So median $= \\frac{x + 16}{2} = 14$, which gives $x + 16 = 28$ and $x = 12$. We verify $10 \\leq 12 \\leq 16$, confirming $x = 12$ maintains the sorted order.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // --- gre-ne-exp-011 | medium | coordinate geometry ---
  {
    id: "gre-ne-exp-011",
    section: "quant",
    type: "numeric-entry",
    themes: ["coordinate-geometry"],
    difficulty: "medium",
    text: "In the $xy$-plane, a line passes through the origin and through the point $(3, 9)$. At what value of $x$ does this line cross the horizontal line $y = 15$?",
    choices: [],
    correctAnswer: 0,
    numericAnswer: "5",
    explanation:
      "The line through the origin and $(3, 9)$ has slope $\\frac{9 - 0}{3 - 0} = 3$. Its equation is $y = 3x$. Setting $y = 15$: $15 = 3x$, so $x = 5$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },

  // --- gre-ne-exp-012 | hard | algebra (quadratic) ---
  {
    id: "gre-ne-exp-012",
    section: "quant",
    type: "numeric-entry",
    themes: ["quadratic-equations"],
    difficulty: "hard",
    text: "If $x^2 + y^2 = 34$ and $xy = 15$, what is the value of $(x + y)^2$?",
    choices: [],
    correctAnswer: 0,
    numericAnswer: "64",
    explanation:
      "$(x + y)^2 = x^2 + 2xy + y^2 = (x^2 + y^2) + 2xy = 34 + 2(15) = 34 + 30 = 64$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },

  // --- gre-ne-exp-013 | hard | geometry (area) ---
  {
    id: "gre-ne-exp-013",
    section: "quant",
    type: "numeric-entry",
    themes: ["quadrilaterals-polygons"],
    difficulty: "hard",
    text: "A rectangle has a diagonal of length $13$ and one side of length $5$. What is the area of the rectangle?",
    choices: [],
    correctAnswer: 0,
    numericAnswer: "60",
    explanation:
      "Let the sides of the rectangle be $5$ and $b$. By the Pythagorean theorem applied to the diagonal: $5^2 + b^2 = 13^2$, so $25 + b^2 = 169$ and $b^2 = 144$, giving $b = 12$. Area $= 5 \\times 12 = 60$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },

  // --- gre-ne-exp-014 | hard | probability ---
  {
    id: "gre-ne-exp-014",
    section: "quant",
    type: "numeric-entry",
    themes: ["probability"],
    difficulty: "hard",
    text: "A committee of $3$ is to be selected at random from $5$ men and $4$ women. What is the probability that the committee consists of $2$ men and $1$ woman? Give your answer as a fraction.",
    choices: [],
    correctAnswer: 0,
    numericAnswer: "10/21",
    explanation:
      "Total ways to choose $3$ from $9$: $\\binom{9}{3} = 84$. Ways to choose $2$ men from $5$: $\\binom{5}{2} = 10$. Ways to choose $1$ woman from $4$: $\\binom{4}{1} = 4$. Favorable outcomes $= 10 \\times 4 = 40$. Probability $= \\frac{40}{84} = \\frac{10}{21}$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // --- gre-ne-exp-015 | hard | exponents / number theory ---
  {
    id: "gre-ne-exp-015",
    section: "quant",
    type: "numeric-entry",
    themes: ["exponents-roots"],
    difficulty: "hard",
    text: "If $2^n$ is a factor of $10!$, what is the greatest possible integer value of $n$?",
    choices: [],
    correctAnswer: 0,
    numericAnswer: "8",
    explanation:
      "We need the highest power of $2$ that divides $10!$. Using Legendre's formula: $\\lfloor 10/2 \\rfloor + \\lfloor 10/4 \\rfloor + \\lfloor 10/8 \\rfloor + \\lfloor 10/16 \\rfloor = 5 + 2 + 1 + 0 = 8$. The greatest value of $n$ is $8$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },
];
