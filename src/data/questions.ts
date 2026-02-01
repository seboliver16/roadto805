import { Question } from "@/types";

export const questions: Question[] = [
  // === ARITHMETIC ===
  {
    id: "q1",
    type: "problem-solving",
    themes: ["number-properties", "divisibility-primes"],
    difficulty: "easy",
    text: "If n is a positive integer and n² is divisible by 72, what is the smallest possible value of n?",
    choices: ["6", "12", "24", "36", "48"],
    correctAnswer: 1,
    explanation:
      "72 = 8 × 9 = 2³ × 3². For n² to be divisible by 2³ × 3², n must contain at least 2² (to cover 2³ when squared, since we need an even power ≥ 3, so 2²) and 3¹. Wait — n² divisible by 2³ × 3² means n² has at least 2³ × 3². Since n² is a perfect square, its prime factorization has even exponents. The smallest even exponent ≥ 3 is 4, and ≥ 2 is 2. So n² = 2⁴ × 3² minimum, meaning n = 2² × 3 = 12.",
  },
  {
    id: "q2",
    type: "problem-solving",
    themes: ["remainders"],
    difficulty: "medium",
    text: "When positive integer n is divided by 5, the remainder is 3. When n is divided by 7, the remainder is 4. What is the smallest positive integer n that satisfies both conditions?",
    choices: ["18", "23", "33", "53", "68"],
    correctAnswer: 0,
    explanation:
      "n ≡ 3 (mod 5) means n could be 3, 8, 13, 18, 23, 28, 33... n ≡ 4 (mod 7) means n could be 4, 11, 18, 25, 32... The smallest number in both lists is 18.",
  },
  {
    id: "q3",
    type: "problem-solving",
    themes: ["fractions-decimals", "percentages"],
    difficulty: "easy",
    text: "A store increases the price of a shirt by 20%, then offers a 20% discount on the new price. What is the final price as a percentage of the original?",
    choices: ["96%", "98%", "100%", "102%", "104%"],
    correctAnswer: 0,
    explanation:
      "If original price = 100, after 20% increase: 120. After 20% discount on 120: 120 × 0.80 = 96. So the final price is 96% of the original.",
  },
  {
    id: "q4",
    type: "problem-solving",
    themes: ["exponents-roots"],
    difficulty: "medium",
    text: "If 4^x = 8^y = 2^12, what is x + y?",
    choices: ["7", "9", "10", "12", "15"],
    correctAnswer: 2,
    explanation:
      "4^x = (2²)^x = 2^(2x) = 2^12, so 2x = 12 and x = 6. 8^y = (2³)^y = 2^(3y) = 2^12, so 3y = 12 and y = 4. Therefore x + y = 6 + 4 = 10.",
  },
  {
    id: "q5",
    type: "problem-solving",
    themes: ["ratios", "fractions-decimals"],
    difficulty: "easy",
    text: "In a mixture of 60 liters, the ratio of milk to water is 2:1. How much water must be added to make the ratio 1:2?",
    choices: ["30", "40", "60", "80", "120"],
    correctAnswer: 2,
    explanation:
      "Currently: milk = 40L, water = 20L. We want milk:water = 1:2, so water = 2 × milk = 80L. We need to add 80 - 20 = 60L of water.",
  },
  {
    id: "q6",
    type: "problem-solving",
    themes: ["number-properties", "exponents-roots"],
    difficulty: "hard",
    text: "How many positive integers less than 100 have exactly 3 positive divisors?",
    choices: ["2", "3", "4", "5", "6"],
    correctAnswer: 2,
    explanation:
      "A number has exactly 3 divisors only if it is the square of a prime (divisors: 1, p, p²). Primes whose squares are < 100: 2² = 4, 3² = 9, 5² = 25, 7² = 49. 11² = 121 > 100. So there are 4 such numbers.",
  },

  // === ALGEBRA ===
  {
    id: "q7",
    type: "problem-solving",
    themes: ["linear-equations"],
    difficulty: "easy",
    text: "If 3x + 7 = 22, what is the value of 6x + 3?",
    choices: ["27", "30", "33", "36", "39"],
    correctAnswer: 2,
    explanation:
      "3x + 7 = 22 → 3x = 15 → x = 5. So 6x + 3 = 30 + 3 = 33. Shortcut: 6x + 3 = 2(3x) + 3 = 2(15) + 3 = 33.",
  },
  {
    id: "q8",
    type: "problem-solving",
    themes: ["quadratic-equations"],
    difficulty: "medium",
    text: "If x² - 5x + 6 = 0, what is the value of x² + 1/x²?",
    choices: ["13/4", "37/9", "13", "29/4", "It cannot be determined"],
    correctAnswer: 4,
    explanation:
      "x² - 5x + 6 = 0 factors to (x-2)(x-3) = 0, so x = 2 or x = 3. If x = 2: x² + 1/x² = 4 + 1/4 = 17/4. If x = 3: x² + 1/x² = 9 + 1/9 = 82/9. Since we get different values, it cannot be determined from the given information.",
  },
  {
    id: "q9",
    type: "problem-solving",
    themes: ["inequalities"],
    difficulty: "medium",
    text: "If |x - 3| ≤ 5 and |y - 4| ≤ 2, what is the maximum value of |x - y|?",
    choices: ["6", "7", "8", "9", "10"],
    correctAnswer: 2,
    explanation:
      "|x - 3| ≤ 5 means -2 ≤ x ≤ 8. |y - 4| ≤ 2 means 2 ≤ y ≤ 6. Maximum |x - y| occurs at the extremes: x = -2, y = 6 gives |(-2) - 6| = 8. So the maximum value is 8.",
  },
  {
    id: "q10",
    type: "problem-solving",
    themes: ["absolute-value", "inequalities"],
    difficulty: "hard",
    text: "For how many integer values of x is |x² - 4x - 5| ≤ 7?",
    choices: ["5", "6", "7", "8", "9"],
    correctAnswer: 1,
    explanation:
      "x² - 4x - 5 = (x-5)(x+1). We need |(x-5)(x+1)| ≤ 7. The inequality -7 ≤ x²-4x-5 ≤ 7 gives us: Upper bound: x²-4x-12 ≤ 0 → (x-6)(x+2) ≤ 0 → -2 ≤ x ≤ 6. Lower bound: x²-4x+2 ≥ 0 → roots at 2±√2 ≈ 0.59 and 3.41, so integers 1, 2, 3 fail. Valid integers in [-2,6] excluding {1,2,3}: {-2, -1, 0, 4, 5, 6} = 6 values.",
  },
  {
    id: "q11",
    type: "problem-solving",
    themes: ["sequences"],
    difficulty: "medium",
    text: "In a sequence, each term after the first is 3 more than twice the previous term. If the first term is 1, what is the 5th term?",
    choices: ["37", "47", "61", "95", "125"],
    correctAnswer: 2,
    explanation:
      "a₁ = 1. a₂ = 2(1) + 3 = 5. a₃ = 2(5) + 3 = 13. a₄ = 2(13) + 3 = 29. a₅ = 2(29) + 3 = 61.",
  },
  {
    id: "q12",
    type: "problem-solving",
    themes: ["functions", "linear-equations"],
    difficulty: "medium",
    text: "If f(x) = 3x - 2 and g(x) = x² + 1, what is f(g(2)) - g(f(2))?",
    choices: ["-4", "-2", "0", "2", "4"],
    correctAnswer: 0,
    explanation:
      "g(2) = 4 + 1 = 5. f(g(2)) = f(5) = 3(5) - 2 = 13. f(2) = 3(2) - 2 = 4. g(f(2)) = g(4) = 4² + 1 = 17. f(g(2)) - g(f(2)) = 13 - 17 = -4.",
  },

  // === GEOMETRY ===
  {
    id: "q13",
    type: "problem-solving",
    themes: ["triangles"],
    difficulty: "easy",
    text: "A right triangle has legs of length 5 and 12. What is the length of the hypotenuse?",
    choices: ["11", "13", "15", "17", "19"],
    correctAnswer: 1,
    explanation:
      "By the Pythagorean theorem: c² = 5² + 12² = 25 + 144 = 169. c = 13. This is the classic 5-12-13 Pythagorean triple.",
  },
  {
    id: "q14",
    type: "problem-solving",
    themes: ["circles"],
    difficulty: "medium",
    text: "A circle with radius 6 has a chord that is 8 units long. What is the distance from the center of the circle to the chord?",
    choices: ["2", "2√5", "√20", "4", "√28"],
    correctAnswer: 1,
    explanation:
      "Draw a perpendicular from the center to the chord — it bisects the chord into two segments of length 4. Using the Pythagorean theorem with the radius: d² + 4² = 6² → d² = 36 - 16 = 20 → d = √20 = 2√5.",
  },
  {
    id: "q15",
    type: "problem-solving",
    themes: ["coordinate-geometry"],
    difficulty: "medium",
    text: "What is the area of the triangle formed by the points (0, 0), (4, 0), and (2, 6)?",
    choices: ["8", "10", "12", "16", "24"],
    correctAnswer: 2,
    explanation:
      "Base along the x-axis from (0,0) to (4,0) has length 4. Height is the y-coordinate of (2,6), which is 6. Area = ½ × base × height = ½ × 4 × 6 = 12.",
  },
  {
    id: "q16",
    type: "problem-solving",
    themes: ["polygons"],
    difficulty: "easy",
    text: "The perimeter of a square is 48. What is the length of its diagonal?",
    choices: ["6√2", "12", "12√2", "16", "24"],
    correctAnswer: 2,
    explanation:
      "Side = 48/4 = 12. Diagonal of a square = side × √2 = 12√2.",
  },
  {
    id: "q17",
    type: "problem-solving",
    themes: ["3d-geometry"],
    difficulty: "hard",
    text: "A cylinder has a volume of 200π cubic inches and a height of 8 inches. What is the total surface area of the cylinder?",
    choices: ["80π", "100π", "130π", "160π", "180π"],
    correctAnswer: 2,
    explanation:
      "V = πr²h → 200π = πr²(8) → r² = 25 → r = 5. Total surface area = 2πr² + 2πrh = 2π(25) + 2π(5)(8) = 50π + 80π = 130π.",
  },

  // === WORD PROBLEMS ===
  {
    id: "q18",
    type: "problem-solving",
    themes: ["rate-work"],
    difficulty: "medium",
    text: "Machine A can complete a job in 6 hours. Machine B can complete the same job in 4 hours. If both machines work together, how long will it take to complete the job?",
    choices: ["2 hrs", "2.4 hrs", "2.5 hrs", "3 hrs", "3.5 hrs"],
    correctAnswer: 1,
    explanation:
      "Rate of A = 1/6 per hour. Rate of B = 1/4 per hour. Combined rate = 1/6 + 1/4 = 2/12 + 3/12 = 5/12 per hour. Time = 1 ÷ (5/12) = 12/5 = 2.4 hours.",
  },
  {
    id: "q19",
    type: "problem-solving",
    themes: ["rate-work"],
    difficulty: "hard",
    text: "A train traveling at 60 mph leaves Station A heading toward Station B. One hour later, a train traveling at 80 mph leaves Station B heading toward Station A. If the stations are 280 miles apart, how many hours after the second train leaves will the two trains meet?",
    choices: ["1", "1.5", "11/7 hrs", "2", "2.5"],
    correctAnswer: 2,
    explanation:
      "After the first train travels 1 hour, it has covered 60 miles, leaving 220 miles between them. Both approach each other: combined speed = 60 + 80 = 140 mph. Time to meet = 220/140 = 11/7 hours.",
  },
  {
    id: "q20",
    type: "problem-solving",
    themes: ["overlapping-sets"],
    difficulty: "medium",
    text: "In a group of 100 students, 60 study French, 50 study Spanish, and 15 study neither. How many students study both French and Spanish?",
    choices: ["10", "15", "20", "25", "30"],
    correctAnswer: 3,
    explanation:
      "Students studying at least one language = 100 - 15 = 85. By inclusion-exclusion: |F ∪ S| = |F| + |S| - |F ∩ S| → 85 = 60 + 50 - |F ∩ S| → |F ∩ S| = 25.",
  },
  {
    id: "q21",
    type: "problem-solving",
    themes: ["probability"],
    difficulty: "medium",
    text: "A bag contains 5 red balls and 3 blue balls. If two balls are drawn at random without replacement, what is the probability that both are red?",
    choices: ["5/14", "25/64", "5/16", "10/28", "15/56"],
    correctAnswer: 0,
    explanation:
      "P(1st red) = 5/8. P(2nd red | 1st red) = 4/7. P(both red) = 5/8 × 4/7 = 20/56 = 5/14.",
  },
  {
    id: "q22",
    type: "problem-solving",
    themes: ["combinatorics"],
    difficulty: "medium",
    text: "How many different 4-letter arrangements can be made from the letters in the word 'GMAT' if each letter is used exactly once?",
    choices: ["4", "12", "16", "24", "256"],
    correctAnswer: 3,
    explanation:
      "Since all 4 letters are distinct, the number of arrangements = 4! = 4 × 3 × 2 × 1 = 24.",
  },
  {
    id: "q23",
    type: "problem-solving",
    themes: ["statistics"],
    difficulty: "easy",
    text: "The average of 5 numbers is 20. If one number is removed, the average of the remaining 4 numbers is 18. What number was removed?",
    choices: ["24", "26", "28", "30", "32"],
    correctAnswer: 2,
    explanation:
      "Sum of 5 numbers = 5 × 20 = 100. Sum of remaining 4 = 4 × 18 = 72. Removed number = 100 - 72 = 28.",
  },
  {
    id: "q24",
    type: "problem-solving",
    themes: ["mixtures"],
    difficulty: "medium",
    text: "Solution A is 20% acid and Solution B is 50% acid. How many liters of Solution B must be added to 30 liters of Solution A to create a solution that is 30% acid?",
    choices: ["10", "12", "15", "18", "20"],
    correctAnswer: 2,
    explanation:
      "Acid from A: 0.20 × 30 = 6L. Acid from B: 0.50 × x. Total solution: 30 + x. Equation: (6 + 0.5x)/(30 + x) = 0.30 → 6 + 0.5x = 9 + 0.3x → 0.2x = 3 → x = 15.",
  },

  // === DATA SUFFICIENCY ===
  {
    id: "q25",
    type: "data-sufficiency",
    themes: ["data-sufficiency-logic", "number-properties"],
    difficulty: "medium",
    text: "Is the integer n odd?\n\n(1) n² is odd.\n(2) n + 1 is even.",
    choices: [
      "Statement (1) ALONE is sufficient",
      "Statement (2) ALONE is sufficient",
      "BOTH statements TOGETHER are sufficient, but NEITHER alone",
      "EACH statement ALONE is sufficient",
      "Statements (1) and (2) TOGETHER are NOT sufficient",
    ],
    correctAnswer: 3,
    explanation:
      "(1) If n² is odd, then n must be odd (since even² = even). SUFFICIENT. (2) If n + 1 is even, then n is odd. SUFFICIENT. Each statement alone is sufficient.",
  },
  {
    id: "q26",
    type: "data-sufficiency",
    themes: ["data-sufficiency-logic", "inequalities"],
    difficulty: "hard",
    text: "Is x > y?\n\n(1) x² > y²\n(2) x > 0",
    choices: [
      "Statement (1) ALONE is sufficient",
      "Statement (2) ALONE is sufficient",
      "BOTH statements TOGETHER are sufficient, but NEITHER alone",
      "EACH statement ALONE is sufficient",
      "Statements (1) and (2) TOGETHER are NOT sufficient",
    ],
    correctAnswer: 2,
    explanation:
      "(1) x² > y² means |x| > |y|. But x could be -3, y = 2: x² = 9 > 4 but x < y. Or x = 3, y = 2: x > y. NOT sufficient. (2) x > 0 alone tells us nothing about y. NOT sufficient. Together: x > 0 and x² > y² means x > |y|. Since |y| ≥ y always, x > |y| ≥ y, so x > y. SUFFICIENT.",
  },
  {
    id: "q27",
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
  },
  {
    id: "q28",
    type: "problem-solving",
    themes: ["percentages", "linear-equations"],
    difficulty: "medium",
    text: "A retailer buys an item for $80 and wants to set a selling price that allows a 25% discount while still making a 20% profit on cost. What should the marked price be?",
    choices: ["$96", "$120", "$128", "$132", "$160"],
    correctAnswer: 2,
    explanation:
      "Desired selling price (after discount) = $80 × 1.20 = $96. This $96 is 75% of the marked price (since 25% discount). Marked price = $96 / 0.75 = $128.",
  },
  {
    id: "q29",
    type: "problem-solving",
    themes: ["statistics", "number-properties"],
    difficulty: "hard",
    text: "Set S consists of all multiples of 3 between 1 and 30, inclusive. What is the median of set S?",
    choices: ["12", "15", "16.5", "18", "21"],
    correctAnswer: 2,
    explanation:
      "Multiples of 3 from 1 to 30: {3, 6, 9, 12, 15, 18, 21, 24, 27, 30}. There are 10 numbers. Median = average of 5th and 6th = (15 + 18)/2 = 16.5.",
  },
  {
    id: "q30",
    type: "problem-solving",
    themes: ["coordinate-geometry", "linear-equations"],
    difficulty: "medium",
    text: "Line L passes through points (2, 5) and (6, 13). What is the y-intercept of line L?",
    choices: ["-1", "0", "1", "2", "3"],
    correctAnswer: 2,
    explanation:
      "Slope = (13-5)/(6-2) = 8/4 = 2. Using point-slope: y - 5 = 2(x - 2) → y = 2x + 1. The y-intercept is 1.",
  },
  {
    id: "q31",
    type: "problem-solving",
    themes: ["combinatorics", "probability"],
    difficulty: "hard",
    text: "A committee of 3 people is to be selected from 4 men and 5 women. What is the probability that the committee has at least 2 women?",
    choices: ["5/14", "10/21", "25/42", "17/28", "5/7"],
    correctAnswer: 2,
    explanation:
      "Total ways to choose 3 from 9: C(9,3) = 84. At least 2 women = (exactly 2 women) + (exactly 3 women). Exactly 2 women: C(5,2) × C(4,1) = 10 × 4 = 40. Exactly 3 women: C(5,3) = 10. Total favorable = 50. Probability = 50/84 = 25/42.",
  },
  {
    id: "q32",
    type: "problem-solving",
    themes: ["exponents-roots", "number-properties"],
    difficulty: "hard",
    text: "If 2^a × 3^b = 288, where a and b are positive integers, what is a + b?",
    choices: ["5", "6", "7", "8", "9"],
    correctAnswer: 2,
    explanation:
      "288 = 2 × 144 = 2 × 12² = 2 × 144. Let's factor: 288 / 2 = 144, 144 / 2 = 72, 72 / 2 = 36, 36 / 2 = 18, 18 / 2 = 9, 9 / 3 = 3, 3 / 3 = 1. So 288 = 2⁵ × 3². Therefore a = 5, b = 2, and a + b = 7.",
  },
  {
    id: "q33",
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
  },
  {
    id: "q34",
    type: "problem-solving",
    themes: ["triangles", "coordinate-geometry"],
    difficulty: "hard",
    text: "Triangle ABC has vertices at A(0, 0), B(8, 0), and C(3, 7). What is the area of the triangle?",
    choices: ["21", "24", "28", "32", "35"],
    correctAnswer: 2,
    explanation:
      "Using the base-height method: Base AB = 8 (along x-axis). Height = y-coordinate of C = 7. Area = ½ × 8 × 7 = 28.",
  },
  {
    id: "q35",
    type: "problem-solving",
    themes: ["overlapping-sets", "percentages"],
    difficulty: "hard",
    text: "In a survey of 200 people, 120 like coffee, 100 like tea, and 40 like neither. What percentage of people like both coffee and tea?",
    choices: ["15%", "20%", "25%", "30%", "35%"],
    correctAnswer: 3,
    explanation:
      "People who like at least one = 200 - 40 = 160. By inclusion-exclusion: 160 = 120 + 100 - Both → Both = 60. Percentage = 60/200 = 30%.",
  },
];
