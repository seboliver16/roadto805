import { Question } from "@/types";

export const greQuantPSExpandedQuestions: Question[] = [
  // ============================================================
  //  25 Problem Solving questions
  //  Difficulty: 8 easy, 10 medium, 7 hard
  // ============================================================

  // --- gre-ps-exp-001 | medium | exponents ---
  {
    id: "gre-ps-exp-001",
    section: "quant",
    type: "problem-solving",
    themes: ["exponents-roots"],
    difficulty: "medium",
    text: "Which of the following is equal to $\\frac{6^{14}}{(2^5)(3^7)}$?",
    choices: [
      "$(2^2)(3^2)$",
      "$(2^7)(3^7)$",
      "$(2^9)(3^2)$",
      "$(2^9)(3^7)$",
      "$(2^9)(3^9)$",
    ],
    correctAnswer: 3,
    explanation:
      "$6^{14} = (2 \\cdot 3)^{14} = 2^{14} \\cdot 3^{14}$. So $\\frac{6^{14}}{2^5 \\cdot 3^7} = \\frac{2^{14} \\cdot 3^{14}}{2^5 \\cdot 3^7} = 2^{14-5} \\cdot 3^{14-7} = 2^9 \\cdot 3^7$. The answer is $(2^9)(3^7)$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // --- gre-ps-exp-002 | easy | rate/distance/time ---
  {
    id: "gre-ps-exp-002",
    section: "quant",
    type: "problem-solving",
    themes: ["word-problems"],
    difficulty: "easy",
    text: "A car travels at a constant speed of $60$ miles per hour. How many miles does the car travel in $2$ hours and $30$ minutes?",
    choices: ["$120$", "$130$", "$140$", "$150$", "$160$"],
    correctAnswer: 3,
    explanation:
      "$2$ hours and $30$ minutes $= 2.5$ hours. Distance $= \\text{rate} \\times \\text{time} = 60 \\times 2.5 = 150$ miles.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },

  // --- gre-ps-exp-003 | easy | algebra ---
  {
    id: "gre-ps-exp-003",
    section: "quant",
    type: "problem-solving",
    themes: ["linear-equations"],
    difficulty: "easy",
    text: "If $5x - 3 = 2x + 12$, what is the value of $x$?",
    choices: ["$3$", "$4$", "$5$", "$6$", "$7$"],
    correctAnswer: 2,
    explanation:
      "$5x - 3 = 2x + 12$. Subtract $2x$ from both sides: $3x - 3 = 12$. Add $3$: $3x = 15$. Divide by $3$: $x = 5$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },

  // --- gre-ps-exp-004 | easy | geometry (triangles) ---
  {
    id: "gre-ps-exp-004",
    section: "quant",
    type: "problem-solving",
    themes: ["triangles"],
    difficulty: "easy",
    text: "In a triangle, one angle measures $40°$ and another measures $75°$. What is the measure of the third angle?",
    choices: ["$55°$", "$60°$", "$65°$", "$70°$", "$75°$"],
    correctAnswer: 2,
    explanation:
      "The sum of angles in a triangle is $180°$. Third angle $= 180° - 40° - 75° = 65°$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },

  // --- gre-ps-exp-005 | easy | probability ---
  {
    id: "gre-ps-exp-005",
    section: "quant",
    type: "problem-solving",
    themes: ["probability"],
    difficulty: "easy",
    text: "A bag contains $5$ red, $3$ blue, and $2$ green marbles. If one marble is selected at random, what is the probability that it is red?",
    choices: [
      "$\\frac{1}{5}$",
      "$\\frac{1}{4}$",
      "$\\frac{1}{3}$",
      "$\\frac{2}{5}$",
      "$\\frac{1}{2}$",
    ],
    correctAnswer: 4,
    explanation:
      "Total marbles $= 5 + 3 + 2 = 10$. Probability of red $= \\frac{5}{10} = \\frac{1}{2}$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // --- gre-ps-exp-006 | easy | percents ---
  {
    id: "gre-ps-exp-006",
    section: "quant",
    type: "problem-solving",
    themes: ["fractions-decimals-percents"],
    difficulty: "easy",
    text: "If $40\\%$ of a number is $28$, what is $75\\%$ of that number?",
    choices: ["$42$", "$48$", "$52.5$", "$56$", "$63$"],
    correctAnswer: 2,
    explanation:
      "Let the number be $n$. Then $0.40n = 28$, so $n = \\frac{28}{0.40} = 70$. Now $75\\%$ of $70 = 0.75 \\times 70 = 52.5$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // --- gre-ps-exp-007 | easy | coordinate geometry ---
  {
    id: "gre-ps-exp-007",
    section: "quant",
    type: "problem-solving",
    themes: ["coordinate-geometry"],
    difficulty: "easy",
    text: "What is the midpoint of the line segment with endpoints $(2, 8)$ and $(10, 4)$?",
    choices: [
      "$(4, 6)$",
      "$(6, 6)$",
      "$(6, 4)$",
      "$(8, 6)$",
      "$(5, 5)$",
    ],
    correctAnswer: 1,
    explanation:
      "Midpoint $= \\left(\\frac{2 + 10}{2}, \\frac{8 + 4}{2}\\right) = \\left(\\frac{12}{2}, \\frac{12}{2}\\right) = (6, 6)$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },

  // --- gre-ps-exp-008 | easy | statistics ---
  {
    id: "gre-ps-exp-008",
    section: "quant",
    type: "problem-solving",
    themes: ["statistics-descriptive"],
    difficulty: "easy",
    text: "The scores of $6$ students on a quiz are $72, 85, 90, 68, 95, 80$. What is the range of the scores?",
    choices: ["$22$", "$25$", "$27$", "$30$", "$32$"],
    correctAnswer: 2,
    explanation:
      "The highest score is $95$ and the lowest is $68$. Range $= 95 - 68 = 27$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // --- gre-ps-exp-009 | medium | exponents ---
  {
    id: "gre-ps-exp-009",
    section: "quant",
    type: "problem-solving",
    themes: ["exponents-roots"],
    difficulty: "easy",
    text: "If $2^a = 32$ and $3^b = 81$, what is the value of $\\frac{a}{b}$?",
    choices: [
      "$\\frac{4}{5}$",
      "$\\frac{5}{4}$",
      "$\\frac{3}{4}$",
      "$\\frac{5}{3}$",
      "$\\frac{4}{3}$",
    ],
    correctAnswer: 1,
    explanation:
      "$2^a = 32 = 2^5$, so $a = 5$. $3^b = 81 = 3^4$, so $b = 4$. Therefore $\\frac{a}{b} = \\frac{5}{4}$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // --- gre-ps-exp-010 | medium | rate/distance/time ---
  {
    id: "gre-ps-exp-010",
    section: "quant",
    type: "problem-solving",
    themes: ["word-problems"],
    difficulty: "medium",
    text: "A cyclist travels from Town A to Town B at $12$ mph and returns at $8$ mph. What is the cyclist's average speed for the entire round trip, in mph?",
    choices: [
      "$9.0$",
      "$9.6$",
      "$10.0$",
      "$10.4$",
      "$10.8$",
    ],
    correctAnswer: 1,
    explanation:
      "For a round trip, the average speed is the harmonic mean of the two speeds: $\\frac{2 \\times 12 \\times 8}{12 + 8} = \\frac{192}{20} = 9.6$ mph. The common mistake is to take the arithmetic mean ($10$), but since the same distance is traveled at each speed, the harmonic mean applies.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },

  // --- gre-ps-exp-011 | medium | geometry (circles) ---
  {
    id: "gre-ps-exp-011",
    section: "quant",
    type: "problem-solving",
    themes: ["circles"],
    difficulty: "medium",
    text: "A sector of a circle has a central angle of $60°$ and a radius of $6$. What is the area of the sector?",
    choices: [
      "$3\\pi$",
      "$6\\pi$",
      "$9\\pi$",
      "$12\\pi$",
      "$18\\pi$",
    ],
    correctAnswer: 1,
    explanation:
      "The area of a sector $= \\frac{\\theta}{360°} \\times \\pi r^2 = \\frac{60°}{360°} \\times \\pi(6)^2 = \\frac{1}{6} \\times 36\\pi = 6\\pi$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },

  // --- gre-ps-exp-012 | medium | algebra ---
  {
    id: "gre-ps-exp-012",
    section: "quant",
    type: "problem-solving",
    themes: ["quadratic-equations"],
    difficulty: "medium",
    text: "If $x^2 - 9x + 20 = 0$, what is the positive difference between the two solutions?",
    choices: ["$1$", "$2$", "$3$", "$4$", "$5$"],
    correctAnswer: 0,
    explanation:
      "Factor: $x^2 - 9x + 20 = (x - 4)(x - 5) = 0$. The solutions are $x = 4$ and $x = 5$. The positive difference is $|5 - 4| = 1$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },

  // --- gre-ps-exp-013 | medium | combinatorics ---
  {
    id: "gre-ps-exp-013",
    section: "quant",
    type: "problem-solving",
    themes: ["counting-combinatorics"],
    difficulty: "medium",
    text: "In how many ways can $4$ books be selected from a shelf of $9$ different books?",
    choices: ["$36$", "$72$", "$126$", "$252$", "$504$"],
    correctAnswer: 2,
    explanation:
      "This is a combination problem: $\\binom{9}{4} = \\frac{9!}{4! \\cdot 5!} = \\frac{9 \\times 8 \\times 7 \\times 6}{4 \\times 3 \\times 2 \\times 1} = \\frac{3024}{24} = 126$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // --- gre-ps-exp-014 | medium | statistics ---
  {
    id: "gre-ps-exp-014",
    section: "quant",
    type: "problem-solving",
    themes: ["statistics-descriptive"],
    difficulty: "medium",
    text: "The mean of five numbers is $20$. If a sixth number, $38$, is added to the set, what is the new mean?",
    choices: ["$21$", "$22$", "$23$", "$24$", "$25$"],
    correctAnswer: 2,
    explanation:
      "Original sum $= 5 \\times 20 = 100$. New sum $= 100 + 38 = 138$. New mean $= \\frac{138}{6} = 23$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // --- gre-ps-exp-015 | medium | coordinate geometry ---
  {
    id: "gre-ps-exp-015",
    section: "quant",
    type: "problem-solving",
    themes: ["coordinate-geometry"],
    difficulty: "medium",
    text: "Line $m$ has equation $y = -3x + 7$. Line $n$ is perpendicular to line $m$ and passes through the point $(6, 1)$. What is the $y$-intercept of line $n$?",
    choices: ["$-1$", "$-\\frac{1}{3}$", "$0$", "$\\frac{1}{3}$", "$1$"],
    correctAnswer: 0,
    explanation:
      "The slope of line $m$ is $-3$. A line perpendicular to it has slope $\\frac{1}{3}$. Using point-slope form with $(6, 1)$: $y - 1 = \\frac{1}{3}(x - 6)$. So $y = \\frac{1}{3}x - 2 + 1 = \\frac{1}{3}x - 1$. The $y$-intercept is $-1$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },

  // --- gre-ps-exp-016 | medium | geometry (triangles) ---
  {
    id: "gre-ps-exp-016",
    section: "quant",
    type: "problem-solving",
    themes: ["triangles"],
    difficulty: "medium",
    text: "What is the area of a right triangle whose hypotenuse is $10$ and one leg is $6$?",
    choices: ["$16$", "$20$", "$24$", "$30$", "$48$"],
    correctAnswer: 2,
    explanation:
      "Let the legs be $6$ and $b$. By the Pythagorean theorem: $6^2 + b^2 = 10^2$, so $36 + b^2 = 100$ and $b^2 = 64$, giving $b = 8$. Area $= \\frac{1}{2}(6)(8) = 24$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },

  // --- gre-ps-exp-017 | medium | probability ---
  {
    id: "gre-ps-exp-017",
    section: "quant",
    type: "problem-solving",
    themes: ["probability"],
    difficulty: "medium",
    text: "A box contains $3$ red balls and $5$ white balls. If $2$ balls are drawn at random without replacement, what is the probability that both balls are red?",
    choices: [
      "$\\frac{3}{28}$",
      "$\\frac{3}{32}$",
      "$\\frac{9}{64}$",
      "$\\frac{1}{7}$",
      "$\\frac{3}{14}$",
    ],
    correctAnswer: 0,
    explanation:
      "Total balls $= 8$. $P(\\text{1st red}) = \\frac{3}{8}$. After drawing one red ball, there are $2$ red out of $7$ remaining. $P(\\text{2nd red} \\mid \\text{1st red}) = \\frac{2}{7}$. $P(\\text{both red}) = \\frac{3}{8} \\times \\frac{2}{7} = \\frac{6}{56} = \\frac{3}{28}$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // --- gre-ps-exp-018 | medium | word problem (work) ---
  {
    id: "gre-ps-exp-018",
    section: "quant",
    type: "problem-solving",
    themes: ["word-problems"],
    difficulty: "medium",
    text: "Pipe A fills a tank in $5$ hours and pipe B fills the same tank in $10$ hours. If both pipes are open, but pipe B is closed after $2$ hours, how many total hours does it take to fill the tank?",
    choices: [
      "$3$",
      "$3\\frac{1}{2}$",
      "$3\\frac{2}{3}$",
      "$4$",
      "$4\\frac{1}{2}$",
    ],
    correctAnswer: 3,
    explanation:
      "In the first $2$ hours, both pipes work together: combined rate $= \\frac{1}{5} + \\frac{1}{10} = \\frac{3}{10}$ per hour. In $2$ hours they fill $\\frac{3}{10} \\times 2 = \\frac{3}{5}$ of the tank. Remaining $= 1 - \\frac{3}{5} = \\frac{2}{5}$. Pipe A alone fills at $\\frac{1}{5}$ per hour. Time for remaining $= \\frac{2/5}{1/5} = 2$ hours. Total time $= 2 + 2 = 4$ hours.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },

  // --- gre-ps-exp-019 | hard | exponents ---
  {
    id: "gre-ps-exp-019",
    section: "quant",
    type: "problem-solving",
    themes: ["exponents-roots"],
    difficulty: "hard",
    text: "If $\\left(\\frac{1}{5}\\right)^{2x+1} = 5^{x-7}$, what is the value of $x$?",
    choices: ["$1$", "$2$", "$3$", "$4$", "$5$"],
    correctAnswer: 1,
    explanation:
      "$\\left(\\frac{1}{5}\\right)^{2x+1} = 5^{-(2x+1)}$. Setting this equal to $5^{x-7}$: $-(2x+1) = x - 7$. Solving: $-2x - 1 = x - 7$, so $-3x = -6$ and $x = 2$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // --- gre-ps-exp-020 | hard | geometry (circles + triangles) ---
  {
    id: "gre-ps-exp-020",
    section: "quant",
    type: "problem-solving",
    themes: ["circles"],
    difficulty: "hard",
    text: "A circle is inscribed in an equilateral triangle with side length $6\\sqrt{3}$. What is the area of the circle?",
    choices: [
      "$3\\pi$",
      "$6\\pi$",
      "$9\\pi$",
      "$12\\pi$",
      "$27\\pi$",
    ],
    correctAnswer: 2,
    explanation:
      "For an equilateral triangle with side $s$, the inradius is $r = \\frac{s}{2\\sqrt{3}} = \\frac{s\\sqrt{3}}{6}$. With $s = 6\\sqrt{3}$: $r = \\frac{6\\sqrt{3} \\cdot \\sqrt{3}}{6} = \\frac{6 \\cdot 3}{6} = 3$. Area of circle $= \\pi r^2 = 9\\pi$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },

  // --- gre-ps-exp-021 | hard | algebra (word problem) ---
  {
    id: "gre-ps-exp-021",
    section: "quant",
    type: "problem-solving",
    themes: ["word-problems"],
    difficulty: "hard",
    text: "A store sells pens for $\\$1.50$ each and notebooks for $\\$3.00$ each. If Maria spent exactly $\\$27$ and bought at least one of each item, how many pens could she have bought?",
    choices: ["$2$", "$4$", "$6$", "$8$", "$10$"],
    correctAnswer: 2,
    explanation:
      "Let $p$ = number of pens and $n$ = number of notebooks, with $p \\geq 1$ and $n \\geq 1$. Then $1.50p + 3.00n = 27$, or equivalently $p + 2n = 18$ (dividing by $1.50$). So $p = 18 - 2n$. Since $p \\geq 1$: $18 - 2n \\geq 1$, giving $n \\leq 8.5$, so $n \\leq 8$. Since $n \\geq 1$: valid values of $n$ are $1$ through $8$. The corresponding values of $p$ are $16, 14, 12, 10, 8, 6, 4, 2$. Among the answer choices, $p = 6$ (when $n = 6$) is listed.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },

  // --- gre-ps-exp-022 | hard | probability ---
  {
    id: "gre-ps-exp-022",
    section: "quant",
    type: "problem-solving",
    themes: ["probability"],
    difficulty: "hard",
    text: "Three fair coins are flipped simultaneously. What is the probability of getting exactly $2$ heads?",
    choices: [
      "$\\frac{1}{8}$",
      "$\\frac{1}{4}$",
      "$\\frac{3}{8}$",
      "$\\frac{1}{2}$",
      "$\\frac{5}{8}$",
    ],
    correctAnswer: 2,
    explanation:
      "Total outcomes $= 2^3 = 8$. The outcomes with exactly $2$ heads are: HHT, HTH, THH $= 3$ outcomes. (Alternatively, $\\binom{3}{2} = 3$.) Probability $= \\frac{3}{8}$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // --- gre-ps-exp-023 | hard | coordinate geometry ---
  {
    id: "gre-ps-exp-023",
    section: "quant",
    type: "problem-solving",
    themes: ["coordinate-geometry"],
    difficulty: "hard",
    text: "In the $xy$-plane, the vertices of a triangle are $(0, 0)$, $(8, 0)$, and $(4, 6)$. What is the area of the triangle?",
    choices: ["$16$", "$20$", "$24$", "$28$", "$32$"],
    correctAnswer: 2,
    explanation:
      "The base along the $x$-axis has length $8$ (from $(0,0)$ to $(8,0)$). The height is the perpendicular distance from $(4, 6)$ to the $x$-axis, which is $6$. Area $= \\frac{1}{2}(8)(6) = 24$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },

  // --- gre-ps-exp-024 | hard | statistics ---
  {
    id: "gre-ps-exp-024",
    section: "quant",
    type: "problem-solving",
    themes: ["statistics-descriptive"],
    difficulty: "hard",
    text: "A data set consists of the values $\\{4, 6, 8, 10, 12\\}$. What is the population standard deviation of this data set?",
    choices: [
      "$2\\sqrt{2}$",
      "$3$",
      "$\\sqrt{10}$",
      "$\\sqrt{12}$",
      "$4$",
    ],
    correctAnswer: 0,
    explanation:
      "Mean $= \\frac{4 + 6 + 8 + 10 + 12}{5} = \\frac{40}{5} = 8$. Squared deviations from the mean: $(4-8)^2 = 16$, $(6-8)^2 = 4$, $(8-8)^2 = 0$, $(10-8)^2 = 4$, $(12-8)^2 = 16$. Population variance $= \\frac{16 + 4 + 0 + 4 + 16}{5} = \\frac{40}{5} = 8$. Population standard deviation $= \\sqrt{8} = 2\\sqrt{2}$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // --- gre-ps-exp-025 | hard | combinatorics ---
  {
    id: "gre-ps-exp-025",
    section: "quant",
    type: "problem-solving",
    themes: ["counting-combinatorics"],
    difficulty: "hard",
    text: "A $5$-digit code is to be formed using the digits $1$ through $5$, where each digit is used exactly once. How many such codes have the property that the digit $1$ is not in the first position and the digit $5$ is not in the last position?",
    choices: ["$72$", "$78$", "$84$", "$96$", "$108$"],
    correctAnswer: 1,
    explanation:
      "Total permutations of $5$ digits $= 5! = 120$. By inclusion-exclusion: Let $A$ = permutations where $1$ is in the first position, and $B$ = permutations where $5$ is in the last position. $|A| = 4! = 24$ (fix $1$ in first place, arrange the remaining $4$). $|B| = 4! = 24$ (fix $5$ in last place, arrange the remaining $4$). $|A \\cap B| = 3! = 6$ (fix $1$ first and $5$ last, arrange the remaining $3$). By inclusion-exclusion: $|A \\cup B| = 24 + 24 - 6 = 42$. Codes satisfying neither condition: $120 - 42 = 78$.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },
];
