import { Question } from "@/types";

export const quantQuestions: Question[] = [
  // ============================================================
  // MIGRATED QUESTIONS (q1 – q35)
  // ============================================================

  // --- q1 ---
  {
    id: "q1",
    section: "quant",
    type: "problem-solving",
    themes: ["number-properties", "divisibility-primes"],
    difficulty: "easy",
    text: "If n is a positive integer and n\u00B2 is divisible by 72, what is the smallest possible value of n?",
    choices: ["6", "12", "24", "36", "48"],
    correctAnswer: 1,
    explanation:
      "72 = 8 \u00D7 9 = 2\u00B3 \u00D7 3\u00B2. For n\u00B2 to be divisible by 2\u00B3 \u00D7 3\u00B2, n must contain at least 2\u00B2 (to cover 2\u00B3 when squared, since we need an even power \u2265 3, so 2\u00B2) and 3\u00B9. Wait \u2014 n\u00B2 divisible by 2\u00B3 \u00D7 3\u00B2 means n\u00B2 has at least 2\u00B3 \u00D7 3\u00B2. Since n\u00B2 is a perfect square, its prime factorization has even exponents. The smallest even exponent \u2265 3 is 4, and \u2265 2 is 2. So n\u00B2 = 2\u2074 \u00D7 3\u00B2 minimum, meaning n = 2\u00B2 \u00D7 3 = 12.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-integer-properties",
  },

  // --- q2 ---
  {
    id: "q2",
    section: "quant",
    type: "problem-solving",
    themes: ["remainders"],
    difficulty: "medium",
    text: "When positive integer n is divided by 5, the remainder is 3. When n is divided by 7, the remainder is 4. What is the smallest positive integer n that satisfies both conditions?",
    choices: ["18", "23", "33", "53", "68"],
    correctAnswer: 0,
    explanation:
      "n \u2261 3 (mod 5) means n could be 3, 8, 13, 18, 23, 28, 33... n \u2261 4 (mod 7) means n could be 4, 11, 18, 25, 32... The smallest number in both lists is 18.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-integer-properties",
  },

  // --- q3 ---
  {
    id: "q3",
    section: "quant",
    type: "problem-solving",
    themes: ["fractions-decimals", "percentages"],
    difficulty: "easy",
    text: "A store increases the price of a shirt by 20%, then offers a 20% discount on the new price. What is the final price as a percentage of the original?",
    choices: ["96%", "98%", "100%", "102%", "104%"],
    correctAnswer: 0,
    explanation:
      "If original price = 100, after 20% increase: 120. After 20% discount on 120: 120 \u00D7 0.80 = 96. So the final price is 96% of the original.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-percents",
  },

  // --- q4 ---
  {
    id: "q4",
    section: "quant",
    type: "problem-solving",
    themes: ["exponents-roots"],
    difficulty: "medium",
    text: "If 4^x = 8^y = 2^12, what is x + y?",
    choices: ["7", "9", "10", "12", "15"],
    correctAnswer: 2,
    explanation:
      "4^x = (2\u00B2)^x = 2^(2x) = 2^12, so 2x = 12 and x = 6. 8^y = (2\u00B3)^y = 2^(3y) = 2^12, so 3y = 12 and y = 4. Therefore x + y = 6 + 4 = 10.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-exponents",
  },

  // --- q5 ---
  {
    id: "q5",
    section: "quant",
    type: "problem-solving",
    themes: ["ratios", "fractions-decimals"],
    difficulty: "easy",
    text: "In a mixture of 60 liters, the ratio of milk to water is 2:1. How much water must be added to make the ratio 1:2?",
    choices: ["30", "40", "60", "80", "120"],
    correctAnswer: 2,
    explanation:
      "Currently: milk = 40L, water = 20L. We want milk:water = 1:2, so water = 2 \u00D7 milk = 80L. We need to add 80 - 20 = 60L of water.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-ratios",
  },

  // --- q6 ---
  {
    id: "q6",
    section: "quant",
    type: "problem-solving",
    themes: ["number-properties", "exponents-roots"],
    difficulty: "hard",
    text: "How many positive integers less than 100 have exactly 3 positive divisors?",
    choices: ["2", "3", "4", "5", "6"],
    correctAnswer: 2,
    explanation:
      "A number has exactly 3 divisors only if it is the square of a prime (divisors: 1, p, p\u00B2). Primes whose squares are < 100: 2\u00B2 = 4, 3\u00B2 = 9, 5\u00B2 = 25, 7\u00B2 = 49. 11\u00B2 = 121 > 100. So there are 4 such numbers.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-integer-properties",
  },

  // --- q7 ---
  {
    id: "q7",
    section: "quant",
    type: "problem-solving",
    themes: ["linear-equations"],
    difficulty: "easy",
    text: "If 3x + 7 = 22, what is the value of 6x + 3?",
    choices: ["27", "30", "33", "36", "39"],
    correctAnswer: 2,
    explanation:
      "3x + 7 = 22 \u2192 3x = 15 \u2192 x = 5. So 6x + 3 = 30 + 3 = 33. Shortcut: 6x + 3 = 2(3x) + 3 = 2(15) + 3 = 33.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-linear-equations",
  },

  // --- q8 ---
  {
    id: "q8",
    section: "quant",
    type: "problem-solving",
    themes: ["quadratic-equations"],
    difficulty: "medium",
    text: "If x\u00B2 - 5x + 6 = 0, what is the value of x\u00B2 + 1/x\u00B2?",
    choices: ["13/4", "37/9", "13", "29/4", "It cannot be determined"],
    correctAnswer: 4,
    explanation:
      "x\u00B2 - 5x + 6 = 0 factors to (x-2)(x-3) = 0, so x = 2 or x = 3. If x = 2: x\u00B2 + 1/x\u00B2 = 4 + 1/4 = 17/4. If x = 3: x\u00B2 + 1/x\u00B2 = 9 + 1/9 = 82/9. Since we get different values, it cannot be determined from the given information.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-quadratics",
  },

  // --- q9 ---
  {
    id: "q9",
    section: "quant",
    type: "problem-solving",
    themes: ["inequalities"],
    difficulty: "medium",
    text: "If |x - 3| \u2264 5 and |y - 4| \u2264 2, what is the maximum value of |x - y|?",
    choices: ["6", "7", "8", "9", "10"],
    correctAnswer: 2,
    explanation:
      "|x - 3| \u2264 5 means -2 \u2264 x \u2264 8. |y - 4| \u2264 2 means 2 \u2264 y \u2264 6. Maximum |x - y| occurs at the extremes: x = -2, y = 6 gives |(-2) - 6| = 8. So the maximum value is 8.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-inequalities",
  },

  // --- q10 ---
  {
    id: "q10",
    section: "quant",
    type: "problem-solving",
    themes: ["absolute-value", "inequalities"],
    difficulty: "hard",
    text: "For how many integer values of x is |x\u00B2 - 4x - 5| \u2264 7?",
    choices: ["5", "6", "7", "8", "9"],
    correctAnswer: 1,
    explanation:
      "x\u00B2 - 4x - 5 = (x-5)(x+1). We need |(x-5)(x+1)| \u2264 7. The inequality -7 \u2264 x\u00B2-4x-5 \u2264 7 gives us: Upper bound: x\u00B2-4x-12 \u2264 0 \u2192 (x-6)(x+2) \u2264 0 \u2192 -2 \u2264 x \u2264 6. Lower bound: x\u00B2-4x+2 \u2265 0 \u2192 roots at 2\u00B1\u221A2 \u2248 0.59 and 3.41, so integers 1, 2, 3 fail. Valid integers in [-2,6] excluding {1,2,3}: {-2, -1, 0, 4, 5, 6} = 6 values.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-inequalities",
  },

  // --- q11 ---
  {
    id: "q11",
    section: "quant",
    type: "problem-solving",
    themes: ["sequences"],
    difficulty: "medium",
    text: "In a sequence, each term after the first is 3 more than twice the previous term. If the first term is 1, what is the 5th term?",
    choices: ["37", "47", "61", "95", "125"],
    correctAnswer: 2,
    explanation:
      "a\u2081 = 1. a\u2082 = 2(1) + 3 = 5. a\u2083 = 2(5) + 3 = 13. a\u2084 = 2(13) + 3 = 29. a\u2085 = 2(29) + 3 = 61.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-quadratics",
  },

  // --- q12 ---
  {
    id: "q12",
    section: "quant",
    type: "problem-solving",
    themes: ["functions", "linear-equations"],
    difficulty: "medium",
    text: "If f(x) = 3x - 2 and g(x) = x\u00B2 + 1, what is f(g(2)) - g(f(2))?",
    choices: ["-4", "-2", "0", "2", "4"],
    correctAnswer: 0,
    explanation:
      "g(2) = 4 + 1 = 5. f(g(2)) = f(5) = 3(5) - 2 = 13. f(2) = 3(2) - 2 = 4. g(f(2)) = g(4) = 4\u00B2 + 1 = 17. f(g(2)) - g(f(2)) = 13 - 17 = -4.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-quadratics",
  },

  // --- q13 ---
  {
    id: "q13",
    section: "quant",
    type: "problem-solving",
    themes: ["triangles"],
    difficulty: "easy",
    text: "A right triangle has legs of length 5 and 12. What is the length of the hypotenuse?",
    choices: ["11", "13", "15", "17", "19"],
    correctAnswer: 1,
    explanation:
      "By the Pythagorean theorem: c\u00B2 = 5\u00B2 + 12\u00B2 = 25 + 144 = 169. c = 13. This is the classic 5-12-13 Pythagorean triple.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-coordinate-geometry",
  },

  // --- q14 ---
  {
    id: "q14",
    section: "quant",
    type: "problem-solving",
    themes: ["circles"],
    difficulty: "medium",
    text: "A circle with radius 6 has a chord that is 8 units long. What is the distance from the center of the circle to the chord?",
    choices: ["2", "2\u221A5", "\u221A20", "4", "\u221A28"],
    correctAnswer: 1,
    explanation:
      "Draw a perpendicular from the center to the chord \u2014 it bisects the chord into two segments of length 4. Using the Pythagorean theorem with the radius: d\u00B2 + 4\u00B2 = 6\u00B2 \u2192 d\u00B2 = 36 - 16 = 20 \u2192 d = \u221A20 = 2\u221A5.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-coordinate-geometry",
  },

  // --- q15 ---
  {
    id: "q15",
    section: "quant",
    type: "problem-solving",
    themes: ["coordinate-geometry"],
    difficulty: "medium",
    text: "What is the area of the triangle formed by the points (0, 0), (4, 0), and (2, 6)?",
    choices: ["8", "10", "12", "16", "24"],
    correctAnswer: 2,
    explanation:
      "Base along the x-axis from (0,0) to (4,0) has length 4. Height is the y-coordinate of (2,6), which is 6. Area = \u00BD \u00D7 base \u00D7 height = \u00BD \u00D7 4 \u00D7 6 = 12.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-coordinate-geometry",
  },

  // --- q16 ---
  {
    id: "q16",
    section: "quant",
    type: "problem-solving",
    themes: ["polygons"],
    difficulty: "easy",
    text: "The perimeter of a square is 48. What is the length of its diagonal?",
    choices: ["6\u221A2", "12", "12\u221A2", "16", "24"],
    correctAnswer: 2,
    explanation:
      "Side = 48/4 = 12. Diagonal of a square = side \u00D7 \u221A2 = 12\u221A2.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-coordinate-geometry",
  },

  // --- q17 ---
  {
    id: "q17",
    section: "quant",
    type: "problem-solving",
    themes: ["3d-geometry"],
    difficulty: "hard",
    text: "A cylinder has a volume of 200\u03C0 cubic inches and a height of 8 inches. What is the total surface area of the cylinder?",
    choices: ["80\u03C0", "100\u03C0", "130\u03C0", "160\u03C0", "180\u03C0"],
    correctAnswer: 2,
    explanation:
      "V = \u03C0r\u00B2h \u2192 200\u03C0 = \u03C0r\u00B2(8) \u2192 r\u00B2 = 25 \u2192 r = 5. Total surface area = 2\u03C0r\u00B2 + 2\u03C0rh = 2\u03C0(25) + 2\u03C0(5)(8) = 50\u03C0 + 80\u03C0 = 130\u03C0.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-coordinate-geometry",
  },

  // --- q18 ---
  {
    id: "q18",
    section: "quant",
    type: "problem-solving",
    themes: ["rate-work"],
    difficulty: "medium",
    text: "Machine A can complete a job in 6 hours. Machine B can complete the same job in 4 hours. If both machines work together, how long will it take to complete the job?",
    choices: ["2 hrs", "2.4 hrs", "2.5 hrs", "3 hrs", "3.5 hrs"],
    correctAnswer: 1,
    explanation:
      "Rate of A = 1/6 per hour. Rate of B = 1/4 per hour. Combined rate = 1/6 + 1/4 = 2/12 + 3/12 = 5/12 per hour. Time = 1 \u00F7 (5/12) = 12/5 = 2.4 hours.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-rate-work",
  },

  // --- q19 ---
  {
    id: "q19",
    section: "quant",
    type: "problem-solving",
    themes: ["rate-work"],
    difficulty: "hard",
    text: "A train traveling at 60 mph leaves Station A heading toward Station B. One hour later, a train traveling at 80 mph leaves Station B heading toward Station A. If the stations are 280 miles apart, how many hours after the second train leaves will the two trains meet?",
    choices: ["1", "1.5", "11/7 hrs", "2", "2.5"],
    correctAnswer: 2,
    explanation:
      "After the first train travels 1 hour, it has covered 60 miles, leaving 220 miles between them. Both approach each other: combined speed = 60 + 80 = 140 mph. Time to meet = 220/140 = 11/7 hours.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-rate-work",
  },

  // --- q20 ---
  {
    id: "q20",
    section: "quant",
    type: "problem-solving",
    themes: ["overlapping-sets"],
    difficulty: "medium",
    text: "In a group of 100 students, 60 study French, 50 study Spanish, and 15 study neither. How many students study both French and Spanish?",
    choices: ["10", "15", "20", "25", "30"],
    correctAnswer: 3,
    explanation:
      "Students studying at least one language = 100 - 15 = 85. By inclusion-exclusion: |F \u222A S| = |F| + |S| - |F \u2229 S| \u2192 85 = 60 + 50 - |F \u2229 S| \u2192 |F \u2229 S| = 25.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-probability",
  },

  // --- q21 ---
  {
    id: "q21",
    section: "quant",
    type: "problem-solving",
    themes: ["probability"],
    difficulty: "medium",
    text: "A bag contains 5 red balls and 3 blue balls. If two balls are drawn at random without replacement, what is the probability that both are red?",
    choices: ["5/14", "25/64", "5/16", "10/28", "15/56"],
    correctAnswer: 0,
    explanation:
      "P(1st red) = 5/8. P(2nd red | 1st red) = 4/7. P(both red) = 5/8 \u00D7 4/7 = 20/56 = 5/14.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-probability",
  },

  // --- q22 ---
  {
    id: "q22",
    section: "quant",
    type: "problem-solving",
    themes: ["combinatorics"],
    difficulty: "medium",
    text: "How many different 4-letter arrangements can be made from the letters in the word 'GMAT' if each letter is used exactly once?",
    choices: ["4", "12", "16", "24", "256"],
    correctAnswer: 3,
    explanation:
      "Since all 4 letters are distinct, the number of arrangements = 4! = 4 \u00D7 3 \u00D7 2 \u00D7 1 = 24.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-probability",
  },

  // --- q23 ---
  {
    id: "q23",
    section: "quant",
    type: "problem-solving",
    themes: ["statistics"],
    difficulty: "easy",
    text: "The average of 5 numbers is 20. If one number is removed, the average of the remaining 4 numbers is 18. What number was removed?",
    choices: ["24", "26", "28", "30", "32"],
    correctAnswer: 2,
    explanation:
      "Sum of 5 numbers = 5 \u00D7 20 = 100. Sum of remaining 4 = 4 \u00D7 18 = 72. Removed number = 100 - 72 = 28.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-statistics",
  },

  // --- q24 ---
  {
    id: "q24",
    section: "quant",
    type: "problem-solving",
    themes: ["mixtures"],
    difficulty: "medium",
    text: "Solution A is 20% acid and Solution B is 50% acid. How many liters of Solution B must be added to 30 liters of Solution A to create a solution that is 30% acid?",
    choices: ["10", "12", "15", "18", "20"],
    correctAnswer: 2,
    explanation:
      "Acid from A: 0.20 \u00D7 30 = 6L. Acid from B: 0.50 \u00D7 x. Total solution: 30 + x. Equation: (6 + 0.5x)/(30 + x) = 0.30 \u2192 6 + 0.5x = 9 + 0.3x \u2192 0.2x = 3 \u2192 x = 15.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-rate-work",
  },

  // --- q25 ---
  {
    id: "q25",
    section: "quant",
    type: "data-sufficiency",
    themes: ["data-sufficiency-logic", "number-properties"],
    difficulty: "medium",
    text: "Is the integer n odd?\n\n(1) n\u00B2 is odd.\n(2) n + 1 is even.",
    choices: [
      "Statement (1) ALONE is sufficient",
      "Statement (2) ALONE is sufficient",
      "BOTH statements TOGETHER are sufficient, but NEITHER alone",
      "EACH statement ALONE is sufficient",
      "Statements (1) and (2) TOGETHER are NOT sufficient",
    ],
    correctAnswer: 3,
    explanation:
      "(1) If n\u00B2 is odd, then n must be odd (since even\u00B2 = even). SUFFICIENT. (2) If n + 1 is even, then n is odd. SUFFICIENT. Each statement alone is sufficient.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-integer-properties",
  },

  // --- q26 ---
  {
    id: "q26",
    section: "quant",
    type: "data-sufficiency",
    themes: ["data-sufficiency-logic", "inequalities"],
    difficulty: "hard",
    text: "Is x > y?\n\n(1) x\u00B2 > y\u00B2\n(2) x > 0",
    choices: [
      "Statement (1) ALONE is sufficient",
      "Statement (2) ALONE is sufficient",
      "BOTH statements TOGETHER are sufficient, but NEITHER alone",
      "EACH statement ALONE is sufficient",
      "Statements (1) and (2) TOGETHER are NOT sufficient",
    ],
    correctAnswer: 2,
    explanation:
      "(1) x\u00B2 > y\u00B2 means |x| > |y|. But x could be -3, y = 2: x\u00B2 = 9 > 4 but x < y. Or x = 3, y = 2: x > y. NOT sufficient. (2) x > 0 alone tells us nothing about y. NOT sufficient. Together: x > 0 and x\u00B2 > y\u00B2 means x > |y|. Since |y| \u2265 y always, x > |y| \u2265 y, so x > y. SUFFICIENT.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-inequalities",
  },

  // --- q27 ---
  {
    id: "q27",
    section: "quant",
    type: "data-sufficiency",
    themes: ["data-sufficiency-logic", "divisibility-primes"],
    difficulty: "medium",
    text: "Is the positive integer n divisible by 6?\n\n(1) n is divisible by 3.\n(2) n is divisible by 12.",
    choices: [
      "Statement (1) ALONE is sufficient",
      "Statement (2) ALONE is sufficient",
      "BOTH statements TOGETHER are sufficient, but NEITHER alone",
      "EACH statement ALONE is sufficient",
      "Statements (1) and (2) TOGETHER are NOT sufficient",
    ],
    correctAnswer: 1,
    explanation:
      "(1) n divisible by 3 doesn't guarantee divisibility by 6 (e.g., n = 9). NOT sufficient. (2) n divisible by 12 means n is divisible by both 4 and 3, which means it's divisible by 6. SUFFICIENT. Statement (2) alone is sufficient.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-integer-properties",
  },

  // --- q28 ---
  {
    id: "q28",
    section: "quant",
    type: "problem-solving",
    themes: ["percentages", "linear-equations"],
    difficulty: "medium",
    text: "A retailer buys an item for $80 and wants to set a selling price that allows a 25% discount while still making a 20% profit on cost. What should the marked price be?",
    choices: ["$96", "$120", "$128", "$132", "$160"],
    correctAnswer: 2,
    explanation:
      "Desired selling price (after discount) = $80 \u00D7 1.20 = $96. This $96 is 75% of the marked price (since 25% discount). Marked price = $96 / 0.75 = $128.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-percents",
  },

  // --- q29 ---
  {
    id: "q29",
    section: "quant",
    type: "problem-solving",
    themes: ["statistics", "number-properties"],
    difficulty: "hard",
    text: "Set S consists of all multiples of 3 between 1 and 30, inclusive. What is the median of set S?",
    choices: ["12", "15", "16.5", "18", "21"],
    correctAnswer: 2,
    explanation:
      "Multiples of 3 from 1 to 30: {3, 6, 9, 12, 15, 18, 21, 24, 27, 30}. There are 10 numbers. Median = average of 5th and 6th = (15 + 18)/2 = 16.5.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-statistics",
  },

  // --- q30 ---
  {
    id: "q30",
    section: "quant",
    type: "problem-solving",
    themes: ["coordinate-geometry", "linear-equations"],
    difficulty: "medium",
    text: "Line L passes through points (2, 5) and (6, 13). What is the y-intercept of line L?",
    choices: ["-1", "0", "1", "2", "3"],
    correctAnswer: 2,
    explanation:
      "Slope = (13-5)/(6-2) = 8/4 = 2. Using point-slope: y - 5 = 2(x - 2) \u2192 y = 2x + 1. The y-intercept is 1.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-coordinate-geometry",
  },

  // --- q31 ---
  {
    id: "q31",
    section: "quant",
    type: "problem-solving",
    themes: ["combinatorics", "probability"],
    difficulty: "hard",
    text: "A committee of 3 people is to be selected from 4 men and 5 women. What is the probability that the committee has at least 2 women?",
    choices: ["5/14", "10/21", "25/42", "17/28", "5/7"],
    correctAnswer: 2,
    explanation:
      "Total ways to choose 3 from 9: C(9,3) = 84. At least 2 women = (exactly 2 women) + (exactly 3 women). Exactly 2 women: C(5,2) \u00D7 C(4,1) = 10 \u00D7 4 = 40. Exactly 3 women: C(5,3) = 10. Total favorable = 50. Probability = 50/84 = 25/42.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-probability",
  },

  // --- q32 ---
  {
    id: "q32",
    section: "quant",
    type: "problem-solving",
    themes: ["exponents-roots", "number-properties"],
    difficulty: "hard",
    text: "If 2^a \u00D7 3^b = 288, where a and b are positive integers, what is a + b?",
    choices: ["5", "6", "7", "8", "9"],
    correctAnswer: 2,
    explanation:
      "288 = 2 \u00D7 144 = 2 \u00D7 12\u00B2 = 2 \u00D7 144. Let's factor: 288 / 2 = 144, 144 / 2 = 72, 72 / 2 = 36, 36 / 2 = 18, 18 / 2 = 9, 9 / 3 = 3, 3 / 3 = 1. So 288 = 2\u2075 \u00D7 3\u00B2. Therefore a = 5, b = 2, and a + b = 7.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-exponents",
  },

  // --- q33 ---
  {
    id: "q33",
    section: "quant",
    type: "data-sufficiency",
    themes: ["data-sufficiency-logic", "statistics"],
    difficulty: "hard",
    text: "What is the range of set S?\n\n(1) The smallest element in S is 5.\n(2) The largest element in S is 20.",
    choices: [
      "Statement (1) ALONE is sufficient",
      "Statement (2) ALONE is sufficient",
      "BOTH statements TOGETHER are sufficient, but NEITHER alone",
      "EACH statement ALONE is sufficient",
      "Statements (1) and (2) TOGETHER are NOT sufficient",
    ],
    correctAnswer: 2,
    explanation:
      "(1) Knowing only the minimum doesn't give the range. NOT sufficient. (2) Knowing only the maximum doesn't give the range. NOT sufficient. Together: Range = max - min = 20 - 5 = 15. SUFFICIENT.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-statistics",
  },

  // --- q34 ---
  {
    id: "q34",
    section: "quant",
    type: "problem-solving",
    themes: ["triangles", "coordinate-geometry"],
    difficulty: "hard",
    text: "Triangle ABC has vertices at A(0, 0), B(8, 0), and C(3, 7). What is the area of the triangle?",
    choices: ["21", "24", "28", "32", "35"],
    correctAnswer: 2,
    explanation:
      "Using the base-height method: Base AB = 8 (along x-axis). Height = y-coordinate of C = 7. Area = \u00BD \u00D7 8 \u00D7 7 = 28.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-coordinate-geometry",
  },

  // --- q35 ---
  {
    id: "q35",
    section: "quant",
    type: "problem-solving",
    themes: ["overlapping-sets", "percentages"],
    difficulty: "hard",
    text: "In a survey of 200 people, 120 like coffee, 100 like tea, and 40 like neither. What percentage of people like both coffee and tea?",
    choices: ["15%", "20%", "25%", "30%", "35%"],
    correctAnswer: 3,
    explanation:
      "People who like at least one = 200 - 40 = 160. By inclusion-exclusion: 160 = 120 + 100 - Both \u2192 Both = 60. Percentage = 60/200 = 30%.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-probability",
  },

  // ============================================================
  // NEW QUESTIONS (qq1 – qq45)
  // ============================================================

  // ------------------------------------------------------------------
  // qq1  |  number-properties  |  easy  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq1",
    section: "quant",
    type: "problem-solving",
    themes: ["number-properties"],
    difficulty: "easy",
    text: "If the sum of three consecutive even integers is 78, what is the largest of the three integers?",
    choices: ["24", "26", "28", "30", "32"],
    correctAnswer: 2,
    explanation:
      "Let the three consecutive even integers be n, n+2, and n+4. Then n + (n+2) + (n+4) = 78, so 3n + 6 = 78, giving 3n = 72 and n = 24. The three integers are 24, 26, and 28. The largest is 28.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-integer-properties",
  },

  // ------------------------------------------------------------------
  // qq2  |  divisibility-primes  |  medium  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq2",
    section: "quant",
    type: "problem-solving",
    themes: ["divisibility-primes"],
    difficulty: "medium",
    text: "What is the greatest common factor of 120 and 168?",
    choices: ["8", "12", "24", "36", "48"],
    correctAnswer: 2,
    explanation:
      "120 = 2\u00B3 \u00D7 3 \u00D7 5. 168 = 2\u00B3 \u00D7 3 \u00D7 7. GCF = product of common prime factors with the lowest exponents = 2\u00B3 \u00D7 3 = 24.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-integer-properties",
  },

  // ------------------------------------------------------------------
  // qq3  |  remainders  |  hard  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq3",
    section: "quant",
    type: "problem-solving",
    themes: ["remainders", "number-properties"],
    difficulty: "hard",
    text: "If n is a positive integer, what is the remainder when 3^(4n+3) is divided by 5?",
    choices: ["0", "1", "2", "3", "4"],
    correctAnswer: 2,
    explanation:
      "The powers of 3 modulo 5 cycle with period 4: 3^1 = 3, 3^2 = 9 \u2261 4, 3^3 = 27 \u2261 2, 3^4 = 81 \u2261 1, then the cycle repeats. The exponent 4n+3 has remainder 3 when divided by 4, so 3^(4n+3) \u2261 3^3 \u2261 2 (mod 5). The remainder is 2.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-integer-properties",
  },

  // ------------------------------------------------------------------
  // qq4  |  percentages  |  easy  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq4",
    section: "quant",
    type: "problem-solving",
    themes: ["percentages"],
    difficulty: "easy",
    text: "A jacket originally priced at $150 is marked down by 30%. What is the sale price of the jacket?",
    choices: ["$95", "$100", "$105", "$110", "$120"],
    correctAnswer: 2,
    explanation:
      "A 30% discount means the sale price is 70% of the original. Sale price = 0.70 \u00D7 $150 = $105.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-percents",
  },

  // ------------------------------------------------------------------
  // qq5  |  percentages  |  medium  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq5",
    section: "quant",
    type: "problem-solving",
    themes: ["percentages"],
    difficulty: "medium",
    text: "The population of a town increased by 10% in the first year and decreased by 10% in the second year. If the population at the end of the second year was 19,800, what was the original population?",
    choices: ["19,800", "20,000", "20,200", "20,400", "21,000"],
    correctAnswer: 1,
    explanation:
      "Let the original population be P. After a 10% increase: 1.10P. After a 10% decrease: 1.10P \u00D7 0.90 = 0.99P. We have 0.99P = 19,800, so P = 19,800 / 0.99 = 20,000.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-percents",
  },

  // ------------------------------------------------------------------
  // qq6  |  statistics  |  easy  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq6",
    section: "quant",
    type: "problem-solving",
    themes: ["statistics"],
    difficulty: "easy",
    text: "The set {3, 7, 10, 12, 18} has a mean of 10. What is the standard deviation-related measure called the range of this data set?",
    choices: ["9", "12", "15", "18", "21"],
    correctAnswer: 2,
    explanation:
      "Range = maximum value - minimum value = 18 - 3 = 15.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-statistics",
  },

  // ------------------------------------------------------------------
  // qq7  |  statistics  |  medium  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq7",
    section: "quant",
    type: "problem-solving",
    themes: ["statistics"],
    difficulty: "medium",
    text: "A student's scores on 4 tests are 72, 85, 90, and 93. What score must the student earn on the 5th test to achieve an average of 85 across all 5 tests?",
    choices: ["80", "82", "85", "87", "90"],
    correctAnswer: 2,
    explanation:
      "Required total for 5 tests = 5 \u00D7 85 = 425. Current total = 72 + 85 + 90 + 93 = 340. Score needed = 425 - 340 = 85.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-statistics",
  },

  // ------------------------------------------------------------------
  // qq8  |  fractions-decimals  |  easy  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq8",
    section: "quant",
    type: "problem-solving",
    themes: ["fractions-decimals"],
    difficulty: "easy",
    text: "What is the value of 1/2 + 1/3 + 1/6?",
    choices: ["2/3", "5/6", "1", "7/6", "3/2"],
    correctAnswer: 2,
    explanation:
      "Finding a common denominator of 6: 1/2 = 3/6, 1/3 = 2/6, 1/6 = 1/6. Sum = 3/6 + 2/6 + 1/6 = 6/6 = 1.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-fractions-decimals",
  },

  // ------------------------------------------------------------------
  // qq9  |  fractions-decimals  |  medium  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq9",
    section: "quant",
    type: "problem-solving",
    themes: ["fractions-decimals"],
    difficulty: "medium",
    text: "If 0.0025 \u00D7 10^k = 25, what is the value of k?",
    choices: ["2", "3", "4", "5", "6"],
    correctAnswer: 2,
    explanation:
      "0.0025 = 25 \u00D7 10^(-4). So 25 \u00D7 10^(-4) \u00D7 10^k = 25, which gives 10^(k-4) = 1, meaning k - 4 = 0, so k = 4.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-fractions-decimals",
  },

  // ------------------------------------------------------------------
  // qq10  |  ratios  |  easy  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq10",
    section: "quant",
    type: "problem-solving",
    themes: ["ratios"],
    difficulty: "easy",
    text: "The ratio of boys to girls in a class is 3:5. If there are 40 students in the class, how many are boys?",
    choices: ["12", "15", "18", "20", "24"],
    correctAnswer: 1,
    explanation:
      "The ratio 3:5 means for every 8 parts, 3 are boys. Boys = (3/8) \u00D7 40 = 15.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-ratios",
  },

  // ------------------------------------------------------------------
  // qq11  |  ratios  |  medium  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq11",
    section: "quant",
    type: "problem-solving",
    themes: ["ratios"],
    difficulty: "medium",
    text: "If a:b = 2:3 and b:c = 4:5, what is a:c?",
    choices: ["2:5", "4:15", "6:15", "8:15", "3:4"],
    correctAnswer: 3,
    explanation:
      "To combine the ratios, make b the same in both. a:b = 2:3 becomes 8:12 (multiply by 4). b:c = 4:5 becomes 12:15 (multiply by 3). Now a:b:c = 8:12:15, so a:c = 8:15.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-ratios",
  },

  // ------------------------------------------------------------------
  // qq12  |  exponents-roots  |  easy  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq12",
    section: "quant",
    type: "problem-solving",
    themes: ["exponents-roots"],
    difficulty: "easy",
    text: "What is the value of \u221A(48) + \u221A(27)?",
    choices: ["5\u221A3", "7\u221A3", "9\u221A3", "12\u221A3", "15\u221A3"],
    correctAnswer: 1,
    explanation:
      "\u221A48 = \u221A(16 \u00D7 3) = 4\u221A3. \u221A27 = \u221A(9 \u00D7 3) = 3\u221A3. Sum = 4\u221A3 + 3\u221A3 = 7\u221A3.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-exponents",
  },

  // ------------------------------------------------------------------
  // qq13  |  exponents-roots  |  hard  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq13",
    section: "quant",
    type: "problem-solving",
    themes: ["exponents-roots"],
    difficulty: "hard",
    text: "If 5^(2x-1) = 5^x \u00D7 25, what is the value of x?",
    choices: ["1", "2", "3", "4", "5"],
    correctAnswer: 2,
    explanation:
      "Rewrite the right side: 5^x \u00D7 25 = 5^x \u00D7 5\u00B2 = 5^(x+2). Setting the exponents equal: 2x - 1 = x + 2, so x = 3.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-exponents",
  },

  // ------------------------------------------------------------------
  // qq14  |  linear-equations  |  medium  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq14",
    section: "quant",
    type: "problem-solving",
    themes: ["linear-equations"],
    difficulty: "medium",
    text: "If 2x - 3y = 7 and x + y = 6, what is the value of x?",
    choices: ["3", "4", "5", "6", "7"],
    correctAnswer: 2,
    explanation:
      "From the second equation: x = 6 - y. Substituting into the first: 2(6 - y) - 3y = 7 \u2192 12 - 2y - 3y = 7 \u2192 -5y = -5 \u2192 y = 1. Therefore x = 6 - 1 = 5.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-linear-equations",
  },

  // ------------------------------------------------------------------
  // qq15  |  linear-equations  |  hard  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq15",
    section: "quant",
    type: "problem-solving",
    themes: ["linear-equations"],
    difficulty: "hard",
    text: "At a store, pencils cost $0.25 each and pens cost $0.75 each. Maria bought a total of 20 items for $9.00. How many pens did she buy?",
    choices: ["6", "8", "10", "12", "14"],
    correctAnswer: 1,
    explanation:
      "Let p = pens and q = pencils. p + q = 20 and 0.75p + 0.25q = 9.00. From the first equation, q = 20 - p. Substituting: 0.75p + 0.25(20 - p) = 9 \u2192 0.75p + 5 - 0.25p = 9 \u2192 0.50p = 4 \u2192 p = 8. She bought 8 pens.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-linear-equations",
  },

  // ------------------------------------------------------------------
  // qq16  |  quadratic-equations  |  medium  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq16",
    section: "quant",
    type: "problem-solving",
    themes: ["quadratic-equations"],
    difficulty: "medium",
    text: "If the product of two consecutive positive integers is 132, what is the sum of the two integers?",
    choices: ["21", "23", "25", "27", "29"],
    correctAnswer: 1,
    explanation:
      "Let the integers be n and n+1. Then n(n+1) = 132 \u2192 n\u00B2 + n - 132 = 0 \u2192 (n-11)(n+12) = 0. Since n is positive, n = 11. The integers are 11 and 12, and their sum is 23.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-quadratics",
  },

  // ------------------------------------------------------------------
  // qq17  |  quadratic-equations  |  hard  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq17",
    section: "quant",
    type: "problem-solving",
    themes: ["quadratic-equations"],
    difficulty: "hard",
    text: "If the roots of the equation x\u00B2 - kx + 12 = 0 are both positive integers, how many possible values of k are there?",
    choices: ["2", "3", "4", "5", "6"],
    correctAnswer: 1,
    explanation:
      "If the roots are positive integers p and q, then pq = 12 and p + q = k. The positive integer factor pairs of 12 are: (1,12), (2,6), (3,4). These give k = 13, 8, and 7 respectively. So there are 3 possible values of k.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-quadratics",
  },

  // ------------------------------------------------------------------
  // qq18  |  inequalities  |  easy  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq18",
    section: "quant",
    type: "data-sufficiency",
    themes: ["data-sufficiency-logic", "inequalities"],
    difficulty: "easy",
    text: "Is x > 0?\n\n(1) x + 3 > 0\n(2) x\u00B2 < x",
    choices: [
      "Statement (1) ALONE is sufficient",
      "Statement (2) ALONE is sufficient",
      "BOTH statements TOGETHER are sufficient, but NEITHER alone",
      "EACH statement ALONE is sufficient",
      "Statements (1) and (2) TOGETHER are NOT sufficient",
    ],
    correctAnswer: 1,
    explanation:
      "(1) x + 3 > 0 means x > -3. This includes negative values like x = -1, so we cannot determine if x > 0. NOT sufficient. (2) x\u00B2 < x means x\u00B2 - x < 0, so x(x - 1) < 0. This holds when 0 < x < 1. Since all values satisfying this condition are positive, x > 0. SUFFICIENT. Statement (2) alone is sufficient.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-inequalities",
  },

  // ------------------------------------------------------------------
  // qq19  |  inequalities  |  hard  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq19",
    section: "quant",
    type: "problem-solving",
    themes: ["inequalities"],
    difficulty: "hard",
    text: "If x and y are positive integers and 3x + 2y = 36, what is the greatest possible value of xy?",
    choices: ["48", "50", "52", "54", "56"],
    correctAnswer: 3,
    explanation:
      "From 3x + 2y = 36: y = (36 - 3x)/2. For y to be a positive integer, 36 - 3x must be even and positive, so x must be even and x < 12. Testing even values: x=2, y=15, xy=30. x=4, y=12, xy=48. x=6, y=9, xy=54. x=8, y=6, xy=48. x=10, y=3, xy=30. The maximum product is 54, achieved when x=6 and y=9.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-inequalities",
  },

  // ------------------------------------------------------------------
  // qq20  |  rate-work  |  easy  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq20",
    section: "quant",
    type: "problem-solving",
    themes: ["rate-work"],
    difficulty: "easy",
    text: "A car travels 150 miles in 3 hours. At the same rate, how many miles will it travel in 5 hours?",
    choices: ["200", "225", "250", "275", "300"],
    correctAnswer: 2,
    explanation:
      "Rate = 150/3 = 50 mph. In 5 hours: 50 \u00D7 5 = 250 miles.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-rate-work",
  },

  // ------------------------------------------------------------------
  // qq21  |  rate-work  |  medium  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq21",
    section: "quant",
    type: "problem-solving",
    themes: ["rate-work"],
    difficulty: "medium",
    text: "Pipe A can fill a tank in 12 hours, and Pipe B can fill the same tank in 18 hours. If both pipes are opened simultaneously, but Pipe B is closed after 6 hours, how many total hours does it take to fill the tank?",
    choices: ["7", "7.5", "8", "8.5", "9"],
    correctAnswer: 2,
    explanation:
      "Rate of A = 1/12 per hour. Rate of B = 1/18 per hour. In the first 6 hours (both pipes open): (1/12 + 1/18) \u00D7 6 = (3/36 + 2/36) \u00D7 6 = (5/36) \u00D7 6 = 30/36 = 5/6 of the tank. Remaining = 1 - 5/6 = 1/6. Only A fills: time = (1/6) \u00F7 (1/12) = 12/6 = 2 hours. Total = 6 + 2 = 8 hours.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-rate-work",
  },

  // ------------------------------------------------------------------
  // qq22  |  mixtures  |  hard  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq22",
    section: "quant",
    type: "problem-solving",
    themes: ["mixtures"],
    difficulty: "hard",
    text: "A 40-liter solution is 15% alcohol. How many liters of pure alcohol must be added to produce a solution that is 25% alcohol?",
    choices: ["4.0", "4.5", "5.0", "16/3", "6.0"],
    correctAnswer: 3,
    explanation:
      "Current alcohol = 0.15 \u00D7 40 = 6 liters. After adding x liters of pure alcohol: (6 + x)/(40 + x) = 0.25. Solving: 6 + x = 0.25(40 + x) = 10 + 0.25x. So 0.75x = 4, giving x = 16/3 \u2248 5.33 liters.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-rate-work",
  },

  // ------------------------------------------------------------------
  // qq23  |  probability  |  easy  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq23",
    section: "quant",
    type: "problem-solving",
    themes: ["probability"],
    difficulty: "easy",
    text: "A fair six-sided die is rolled twice. What is the probability that the sum of the two rolls is 7?",
    choices: ["1/12", "1/9", "1/6", "1/4", "1/3"],
    correctAnswer: 2,
    explanation:
      "Total outcomes = 6 \u00D7 6 = 36. Combinations that sum to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 outcomes. Probability = 6/36 = 1/6.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-probability",
  },

  // ------------------------------------------------------------------
  // qq24  |  probability  |  hard  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq24",
    section: "quant",
    type: "problem-solving",
    themes: ["probability"],
    difficulty: "hard",
    text: "A jar contains 4 red marbles, 3 green marbles, and 2 blue marbles. If 3 marbles are drawn at random without replacement, what is the probability that all 3 are the same color?",
    choices: ["1/84", "5/84", "1/21", "1/12", "5/42"],
    correctAnswer: 1,
    explanation:
      "Total ways to choose 3 from 9: C(9,3) = 84. All red: C(4,3) = 4. All green: C(3,3) = 1. All blue: C(2,3) = 0 (impossible). Favorable outcomes = 4 + 1 + 0 = 5. Probability = 5/84.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-probability",
  },

  // ------------------------------------------------------------------
  // qq25  |  combinatorics  |  medium  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq25",
    section: "quant",
    type: "problem-solving",
    themes: ["combinatorics"],
    difficulty: "medium",
    text: "In how many ways can 5 different books be arranged on a shelf if one particular book must always be on the left end?",
    choices: ["5", "12", "24", "48", "120"],
    correctAnswer: 2,
    explanation:
      "Fix the particular book on the left end (1 way). The remaining 4 books can be arranged in 4! = 24 ways. Total = 1 \u00D7 24 = 24.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-probability",
  },

  // ------------------------------------------------------------------
  // qq26  |  combinatorics  |  hard  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq26",
    section: "quant",
    type: "problem-solving",
    themes: ["combinatorics"],
    difficulty: "hard",
    text: "How many 3-digit numbers can be formed using the digits 1, 2, 3, 4, and 5 without repetition such that the number is odd?",
    choices: ["24", "30", "36", "42", "48"],
    correctAnswer: 2,
    explanation:
      "A 3-digit number is odd if its units digit is odd. Odd digits available: 1, 3, 5 (3 choices for units). After choosing the units digit, we have 4 digits left for the hundreds place (4 choices) and 3 remaining digits for the tens place (3 choices). Total = 3 \u00D7 4 \u00D7 3 = 36.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-probability",
  },

  // ------------------------------------------------------------------
  // qq27  |  triangles  |  medium  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq27",
    section: "quant",
    type: "problem-solving",
    themes: ["triangles"],
    difficulty: "medium",
    text: "In an equilateral triangle with side length 6, what is the area of the triangle?",
    choices: ["6\u221A3", "9\u221A3", "12\u221A3", "18\u221A3", "36\u221A3"],
    correctAnswer: 1,
    explanation:
      "The area of an equilateral triangle with side s is (s\u00B2\u221A3)/4. With s = 6: area = (36\u221A3)/4 = 9\u221A3.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-coordinate-geometry",
  },

  // ------------------------------------------------------------------
  // qq28  |  triangles  |  hard  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq28",
    section: "quant",
    type: "problem-solving",
    themes: ["triangles"],
    difficulty: "hard",
    text: "In triangle PQR, PQ = 10, QR = 8, and the angle at Q is 60 degrees. What is the area of triangle PQR?",
    choices: ["20", "20\u221A3", "30", "40", "40\u221A3"],
    correctAnswer: 1,
    explanation:
      "Area = (1/2) \u00D7 PQ \u00D7 QR \u00D7 sin(Q) = (1/2) \u00D7 10 \u00D7 8 \u00D7 sin(60\u00B0) = (1/2) \u00D7 80 \u00D7 (\u221A3/2) = 40 \u00D7 (\u221A3/2) = 20\u221A3.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-coordinate-geometry",
  },

  // ------------------------------------------------------------------
  // qq29  |  circles  |  easy  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq29",
    section: "quant",
    type: "problem-solving",
    themes: ["circles"],
    difficulty: "easy",
    text: "The circumference of a circle is 20\u03C0. What is the area of the circle?",
    choices: ["10\u03C0", "20\u03C0", "50\u03C0", "100\u03C0", "400\u03C0"],
    correctAnswer: 3,
    explanation:
      "Circumference = 2\u03C0r = 20\u03C0, so r = 10. Area = \u03C0r\u00B2 = \u03C0(100) = 100\u03C0.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-coordinate-geometry",
  },

  // ------------------------------------------------------------------
  // qq30  |  coordinate-geometry  |  hard  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq30",
    section: "quant",
    type: "problem-solving",
    themes: ["coordinate-geometry"],
    difficulty: "hard",
    text: "What is the distance between the point (3, 4) and the line 3x + 4y = 30?",
    choices: ["1", "5/3", "1/5", "5", "1/2"],
    correctAnswer: 0,
    explanation:
      "The distance from a point (x\u2080, y\u2080) to the line ax + by + c = 0 is |ax\u2080 + by\u2080 + c| / \u221A(a\u00B2 + b\u00B2). Rewrite the line as 3x + 4y - 30 = 0. Distance = |3(3) + 4(4) - 30| / \u221A(9 + 16) = |9 + 16 - 30| / \u221A25 = |-5| / 5 = 5/5 = 1.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-coordinate-geometry",
  },

  // ------------------------------------------------------------------
  // qq31  |  polygons  |  medium  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq31",
    section: "quant",
    type: "problem-solving",
    themes: ["polygons"],
    difficulty: "medium",
    text: "What is the sum of the interior angles of a regular hexagon?",
    choices: ["540\u00B0", "600\u00B0", "720\u00B0", "900\u00B0", "1080\u00B0"],
    correctAnswer: 2,
    explanation:
      "The sum of interior angles of an n-sided polygon = (n - 2) \u00D7 180\u00B0. For a hexagon (n = 6): (6 - 2) \u00D7 180\u00B0 = 4 \u00D7 180\u00B0 = 720\u00B0.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-coordinate-geometry",
  },

  // ------------------------------------------------------------------
  // qq32  |  3d-geometry  |  medium  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq32",
    section: "quant",
    type: "problem-solving",
    themes: ["3d-geometry"],
    difficulty: "medium",
    text: "A cube has a surface area of 150 square centimeters. What is the volume of the cube?",
    choices: ["25", "75", "100", "125", "150"],
    correctAnswer: 3,
    explanation:
      "A cube has 6 faces. Area of each face = 150/6 = 25 cm\u00B2. Side length = \u221A25 = 5 cm. Volume = 5\u00B3 = 125 cm\u00B3.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-coordinate-geometry",
  },

  // ------------------------------------------------------------------
  // qq33  |  sequences  |  easy  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq33",
    section: "quant",
    type: "problem-solving",
    themes: ["sequences"],
    difficulty: "easy",
    text: "In an arithmetic sequence, the 3rd term is 11 and the 7th term is 23. What is the 10th term?",
    choices: ["29", "30", "31", "32", "35"],
    correctAnswer: 3,
    explanation:
      "Let the first term be a and the common difference be d. 3rd term: a + 2d = 11. 7th term: a + 6d = 23. Subtracting: 4d = 12, so d = 3. Then a = 11 - 6 = 5. 10th term = a + 9d = 5 + 27 = 32.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-quadratics",
  },

  // ------------------------------------------------------------------
  // qq34  |  sequences  |  hard  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq34",
    section: "quant",
    type: "problem-solving",
    themes: ["sequences"],
    difficulty: "hard",
    text: "The sum of the first n terms of a geometric sequence with first term 3 and common ratio 2 is 381. What is n?",
    choices: ["5", "6", "7", "8", "9"],
    correctAnswer: 2,
    explanation:
      "Sum of a geometric series: S = a(r^n - 1)/(r - 1). With a = 3, r = 2: S = 3(2^n - 1)/(2 - 1) = 3(2^n - 1). Setting 3(2^n - 1) = 381: 2^n - 1 = 127, so 2^n = 128 = 2^7, giving n = 7.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-quadratics",
  },

  // ------------------------------------------------------------------
  // qq35  |  functions  |  medium  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq35",
    section: "quant",
    type: "problem-solving",
    themes: ["functions"],
    difficulty: "medium",
    text: "If f(x) = 2x + 1 and f(f(k)) = 11, what is the value of k?",
    choices: ["1", "2", "3", "4", "5"],
    correctAnswer: 1,
    explanation:
      "f(f(k)) = f(2k + 1) = 2(2k + 1) + 1 = 4k + 3. Setting 4k + 3 = 11: 4k = 8, so k = 2.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-quadratics",
  },

  // ------------------------------------------------------------------
  // qq36  |  overlapping-sets  |  medium  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq36",
    section: "quant",
    type: "data-sufficiency",
    themes: ["data-sufficiency-logic", "overlapping-sets"],
    difficulty: "medium",
    text: "In a group of 100 students, how many study only biology?\n\n(1) 45 students study biology and 30 students study both biology and chemistry.\n(2) 60 students study chemistry.",
    choices: [
      "Statement (1) ALONE is sufficient",
      "Statement (2) ALONE is sufficient",
      "BOTH statements TOGETHER are sufficient, but NEITHER alone",
      "EACH statement ALONE is sufficient",
      "Statements (1) and (2) TOGETHER are NOT sufficient",
    ],
    correctAnswer: 0,
    explanation:
      "(1) If 45 study biology and 30 study both, then students studying only biology = 45 - 30 = 15. SUFFICIENT. (2) Knowing that 60 study chemistry tells us nothing about biology enrollments. NOT sufficient. Statement (1) alone is sufficient.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-probability",
  },

  // ------------------------------------------------------------------
  // qq37  |  number-properties, divisibility-primes  |  medium  |  DS
  // ------------------------------------------------------------------
  {
    id: "qq37",
    section: "quant",
    type: "data-sufficiency",
    themes: ["data-sufficiency-logic", "number-properties", "divisibility-primes"],
    difficulty: "medium",
    text: "Is the positive integer n a prime number?\n\n(1) n has exactly two positive divisors.\n(2) n is not divisible by any integer between 1 and n, exclusive.",
    choices: [
      "Statement (1) ALONE is sufficient",
      "Statement (2) ALONE is sufficient",
      "BOTH statements TOGETHER are sufficient, but NEITHER alone",
      "EACH statement ALONE is sufficient",
      "Statements (1) and (2) TOGETHER are NOT sufficient",
    ],
    correctAnswer: 3,
    explanation:
      "(1) A positive integer with exactly two positive divisors (1 and itself) is, by definition, prime. SUFFICIENT. (2) If n is not divisible by any integer between 1 and n (exclusive), then its only divisors are 1 and n itself, which means n is prime (assuming n > 1; since n is a positive integer with no divisors other than 1 and itself, and the problem states 'between 1 and n exclusive,' n must be prime). SUFFICIENT. Each statement alone is sufficient.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-integer-properties",
  },

  // ------------------------------------------------------------------
  // qq38  |  percentages  |  hard  |  DS
  // ------------------------------------------------------------------
  {
    id: "qq38",
    section: "quant",
    type: "data-sufficiency",
    themes: ["data-sufficiency-logic", "percentages"],
    difficulty: "hard",
    text: "In a certain election, candidate A received what percent of the total votes cast?\n\n(1) Candidate A received 2,000 more votes than candidate B.\n(2) A total of 10,000 votes were cast in the election, and only candidates A and B received votes.",
    choices: [
      "Statement (1) ALONE is sufficient",
      "Statement (2) ALONE is sufficient",
      "BOTH statements TOGETHER are sufficient, but NEITHER alone",
      "EACH statement ALONE is sufficient",
      "Statements (1) and (2) TOGETHER are NOT sufficient",
    ],
    correctAnswer: 2,
    explanation:
      "(1) Knowing A got 2,000 more than B doesn't tell us the total votes or the percentage. NOT sufficient. (2) Knowing the total is 10,000 with only A and B doesn't tell us how the votes split. NOT sufficient. Together: A + B = 10,000 and A = B + 2,000. Substituting: (B + 2,000) + B = 10,000, so 2B = 8,000 and B = 4,000. Then A = 6,000, and A's percentage = 6,000/10,000 = 60%. SUFFICIENT.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-percents",
  },

  // ------------------------------------------------------------------
  // qq39  |  coordinate-geometry  |  medium  |  DS
  // ------------------------------------------------------------------
  {
    id: "qq39",
    section: "quant",
    type: "data-sufficiency",
    themes: ["data-sufficiency-logic", "coordinate-geometry"],
    difficulty: "medium",
    text: "What is the slope of line L in the xy-plane?\n\n(1) Line L passes through the point (3, 7).\n(2) Line L is perpendicular to the line y = 2x + 5.",
    choices: [
      "Statement (1) ALONE is sufficient",
      "Statement (2) ALONE is sufficient",
      "BOTH statements TOGETHER are sufficient, but NEITHER alone",
      "EACH statement ALONE is sufficient",
      "Statements (1) and (2) TOGETHER are NOT sufficient",
    ],
    correctAnswer: 1,
    explanation:
      "(1) Knowing a single point on the line does not determine its slope (infinitely many lines pass through one point). NOT sufficient. (2) If L is perpendicular to y = 2x + 5 (slope 2), then the slope of L is -1/2 (negative reciprocal). SUFFICIENT. Statement (2) alone is sufficient.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-coordinate-geometry",
  },

  // ------------------------------------------------------------------
  // qq40  |  rate-work  |  medium  |  DS
  // ------------------------------------------------------------------
  {
    id: "qq40",
    section: "quant",
    type: "data-sufficiency",
    themes: ["data-sufficiency-logic", "rate-work"],
    difficulty: "medium",
    text: "Working together, how many hours will it take machines X and Y to complete a job?\n\n(1) Machine X alone can complete the job in 10 hours.\n(2) Machine Y alone can complete the job in 15 hours.",
    choices: [
      "Statement (1) ALONE is sufficient",
      "Statement (2) ALONE is sufficient",
      "BOTH statements TOGETHER are sufficient, but NEITHER alone",
      "EACH statement ALONE is sufficient",
      "Statements (1) and (2) TOGETHER are NOT sufficient",
    ],
    correctAnswer: 2,
    explanation:
      "(1) Knowing only X's rate (1/10 per hour) does not tell us Y's rate. NOT sufficient. (2) Knowing only Y's rate (1/15 per hour) does not tell us X's rate. NOT sufficient. Together: combined rate = 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6 per hour. Time = 6 hours. SUFFICIENT.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-rate-work",
  },

  // ------------------------------------------------------------------
  // qq41  |  absolute-value  |  medium  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq41",
    section: "quant",
    type: "problem-solving",
    themes: ["absolute-value"],
    difficulty: "medium",
    text: "How many solutions does the equation |2x - 3| = |x + 5| have?",
    choices: ["0", "1", "2", "3", "4"],
    correctAnswer: 2,
    explanation:
      "Squaring both sides (valid since both sides are non-negative): (2x - 3)\u00B2 = (x + 5)\u00B2. Expanding: 4x\u00B2 - 12x + 9 = x\u00B2 + 10x + 25. Simplifying: 3x\u00B2 - 22x - 16 = 0. Discriminant = 484 + 192 = 676 = 26\u00B2, which is positive, so there are 2 distinct real solutions. Verifying: x = (22 \u00B1 26)/6, giving x = 8 or x = -2/3. Check x = 8: |16 - 3| = |8 + 5| \u2192 13 = 13. Check x = -2/3: |-4/3 - 3| = |-2/3 + 5| \u2192 |-13/3| = |13/3| \u2192 13/3 = 13/3. Both solutions are valid, so there are 2 solutions.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-inequalities",
  },

  // ------------------------------------------------------------------
  // qq42  |  statistics  |  hard  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq42",
    section: "quant",
    type: "problem-solving",
    themes: ["statistics"],
    difficulty: "hard",
    text: "The median of a list of 7 consecutive even integers is 24. What is the mean of the largest and smallest integers in the list?",
    choices: ["18", "20", "22", "24", "28"],
    correctAnswer: 3,
    explanation:
      "For 7 consecutive even integers, the median (4th term) is 24. The list is: 18, 20, 22, 24, 26, 28, 30. The smallest is 18 and the largest is 30. Their mean = (18 + 30)/2 = 48/2 = 24. (In any list of consecutive even or odd integers, the mean of the smallest and largest equals the median.)",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-statistics",
  },

  // ------------------------------------------------------------------
  // qq43  |  number-properties  |  hard  |  DS
  // ------------------------------------------------------------------
  {
    id: "qq43",
    section: "quant",
    type: "data-sufficiency",
    themes: ["data-sufficiency-logic", "number-properties"],
    difficulty: "hard",
    text: "If k is a positive integer, is k\u00B2 + k divisible by 4?\n\n(1) k is even.\n(2) k is divisible by 4.",
    choices: [
      "Statement (1) ALONE is sufficient",
      "Statement (2) ALONE is sufficient",
      "BOTH statements TOGETHER are sufficient, but NEITHER alone",
      "EACH statement ALONE is sufficient",
      "Statements (1) and (2) TOGETHER are NOT sufficient",
    ],
    correctAnswer: 1,
    explanation:
      "Note that k\u00B2 + k = k(k + 1). (1) If k is even, k(k+1) could or could not be divisible by 4. For example, k = 2: 2 x 3 = 6, NOT divisible by 4. But k = 4: 4 x 5 = 20, divisible by 4. NOT sufficient. (2) If k is divisible by 4, say k = 4m, then k(k+1) = 4m(4m+1). Since 4m is already divisible by 4, the product is divisible by 4 regardless of (4m+1). SUFFICIENT. Statement (2) alone is sufficient.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-integer-properties",
  },

  // ------------------------------------------------------------------
  // qq44  |  exponents-roots, number-properties  |  medium  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq44",
    section: "quant",
    type: "problem-solving",
    themes: ["exponents-roots", "number-properties"],
    difficulty: "medium",
    text: "What is the units digit of 7^83?",
    choices: ["1", "3", "7", "9", "0"],
    correctAnswer: 1,
    explanation:
      "The units digits of powers of 7 cycle with period 4: 7^1 = 7, 7^2 = 49 (units 9), 7^3 = 343 (units 3), 7^4 = 2401 (units 1), then repeats. 83 divided by 4 gives remainder 3 (since 83 = 4 \u00D7 20 + 3). So 7^83 has the same units digit as 7^3, which is 3.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-exponents",
  },

  // ------------------------------------------------------------------
  // qq45  |  percentages, linear-equations  |  hard  |  PS
  // ------------------------------------------------------------------
  {
    id: "qq45",
    section: "quant",
    type: "problem-solving",
    themes: ["percentages", "linear-equations"],
    difficulty: "hard",
    text: "A merchant buys goods at a certain cost. If the merchant sets the selling price 40% above cost but then offers a discount of d% on the selling price and still makes a 12% profit, what is d?",
    choices: ["15", "18", "20", "25", "28"],
    correctAnswer: 2,
    explanation:
      "Let the cost be C. Marked price = 1.40C. After d% discount, selling price = 1.40C \u00D7 (1 - d/100). For a 12% profit, selling price = 1.12C. So 1.40C \u00D7 (1 - d/100) = 1.12C. Dividing by C: 1.40(1 - d/100) = 1.12. So 1 - d/100 = 1.12/1.40 = 0.80. Therefore d/100 = 0.20 and d = 20.",
    source: { name: "Road to 805", type: "original" },
    chapterId: "quant-percents",
  },
];
