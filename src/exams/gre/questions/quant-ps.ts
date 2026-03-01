import { Question } from "@/types";

export const greQuantPSQuestions: Question[] = [
  // ========================================================================
  // ARITHMETIC (8 questions: 3 easy, 3 medium, 2 hard)
  // ========================================================================

  // --- Arithmetic: Easy ---
  {
    id: "gre-ps-001",
    section: "quant",
    type: "problem-solving",
    themes: ["ratio-proportion"],
    difficulty: "easy",
    text: "If the ratio of boys to girls in a class is 3:5 and there are 40 students total, how many girls are in the class?",
    choices: ["15", "20", "24", "25", "30"],
    correctAnswer: 3,
    explanation:
      "Boys:Girls = 3:5, total parts = 3 + 5 = 8. Girls = (5/8) × 40 = 25.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },
  {
    id: "gre-ps-002",
    section: "quant",
    type: "problem-solving",
    themes: ["fractions-decimals-percents"],
    difficulty: "easy",
    text: "A shirt originally priced at $80 is on sale for 25% off. What is the sale price?",
    choices: ["$20", "$40", "$55", "$60", "$65"],
    correctAnswer: 3,
    explanation:
      "Discount = 25% of $80 = 0.25 × 80 = $20. Sale price = $80 - $20 = $60.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },
  {
    id: "gre-ps-003",
    section: "quant",
    type: "problem-solving",
    themes: ["integers"],
    difficulty: "easy",
    text: "What is the greatest common factor of 36 and 48?",
    choices: ["4", "6", "8", "12", "24"],
    correctAnswer: 3,
    explanation:
      "36 = 2² × 3² and 48 = 2⁴ × 3. The GCF takes the minimum power of each shared prime: 2² × 3 = 4 × 3 = 12.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // --- Arithmetic: Medium ---
  {
    id: "gre-ps-004",
    section: "quant",
    type: "problem-solving",
    themes: ["fractions-decimals-percents"],
    difficulty: "medium",
    text: "After a 20% increase, the price of a stock is $72. What was the original price?",
    choices: ["$54", "$57.60", "$60", "$62.40", "$64"],
    correctAnswer: 2,
    explanation:
      "Let the original price be p. Then 1.20p = 72, so p = 72/1.20 = 60. The original price was $60.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },
  {
    id: "gre-ps-005",
    section: "quant",
    type: "problem-solving",
    themes: ["ratio-proportion"],
    difficulty: "medium",
    text: "A recipe calls for flour and sugar in the ratio 5:2. If a baker uses 3.5 cups of sugar, how many cups of flour are needed?",
    choices: ["7.0", "7.5", "8.0", "8.75", "10.0"],
    correctAnswer: 3,
    explanation:
      "Flour:Sugar = 5:2. If sugar = 3.5, then flour = (5/2) × 3.5 = 5 × 1.75 = 8.75 cups.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },
  {
    id: "gre-ps-006",
    section: "quant",
    type: "problem-solving",
    themes: ["exponents-roots"],
    difficulty: "medium",
    text: "If 3^(x+1) = 81, what is the value of x?",
    choices: ["2", "3", "4", "5", "6"],
    correctAnswer: 1,
    explanation:
      "81 = 3⁴, so 3^(x+1) = 3⁴. Therefore x + 1 = 4, which gives x = 3.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // --- Arithmetic: Hard ---
  {
    id: "gre-ps-007",
    section: "quant",
    type: "problem-solving",
    themes: ["integers"],
    difficulty: "hard",
    text: "How many positive integers less than 100 are multiples of both 4 and 6?",
    choices: ["4", "6", "8", "12", "16"],
    correctAnswer: 2,
    explanation:
      "A number that is a multiple of both 4 and 6 must be a multiple of their LCM. LCM(4, 6) = 12. Multiples of 12 less than 100: 12, 24, 36, 48, 60, 72, 84, 96 — that is 8 values.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },
  {
    id: "gre-ps-008",
    section: "quant",
    type: "problem-solving",
    themes: ["fractions-decimals-percents"],
    difficulty: "hard",
    text: "A store raises the price of an item by 25%, then offers a 20% discount on the new price. What is the net percent change from the original price?",
    choices: ["0% (no change)", "2% increase", "5% increase", "5% decrease", "10% increase"],
    correctAnswer: 0,
    explanation:
      "Let the original price be 100. After a 25% increase: 100 × 1.25 = 125. After a 20% discount: 125 × 0.80 = 100. The final price equals the original price, so the net change is 0%.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-arithmetic",
  },

  // ========================================================================
  // ALGEBRA (10 questions: 3 easy, 4 medium, 3 hard)
  // ========================================================================

  // --- Algebra: Easy ---
  {
    id: "gre-ps-009",
    section: "quant",
    type: "problem-solving",
    themes: ["linear-equations"],
    difficulty: "easy",
    text: "If 2x - 5 = 11, what is the value of x?",
    choices: ["3", "5.5", "6", "8", "16"],
    correctAnswer: 3,
    explanation:
      "2x - 5 = 11. Add 5 to both sides: 2x = 16. Divide by 2: x = 8.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },
  {
    id: "gre-ps-010",
    section: "quant",
    type: "problem-solving",
    themes: ["linear-equations"],
    difficulty: "easy",
    text: "If 3(x + 4) = 27, what is the value of x + 4?",
    choices: ["3", "5", "7", "9", "12"],
    correctAnswer: 3,
    explanation:
      "3(x + 4) = 27. Divide both sides by 3: x + 4 = 9.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },
  {
    id: "gre-ps-011",
    section: "quant",
    type: "problem-solving",
    themes: ["word-problems"],
    difficulty: "easy",
    text: "A taxi charges $3.00 for the first mile and $0.50 for each additional quarter-mile. What is the cost of a 5-mile trip?",
    choices: ["$5.00", "$7.00", "$8.00", "$11.00", "$13.00"],
    correctAnswer: 3,
    explanation:
      "The first mile costs $3.00. The remaining 4 miles = 4 × 4 = 16 quarter-miles. Cost for additional distance = 16 × $0.50 = $8.00. Total = $3.00 + $8.00 = $11.00.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },

  // --- Algebra: Medium ---
  {
    id: "gre-ps-012",
    section: "quant",
    type: "problem-solving",
    themes: ["quadratic-equations"],
    difficulty: "medium",
    text: "If x² - 5x + 6 = 0, what is the sum of all possible values of 2x?",
    choices: ["5", "6", "10", "12", "14"],
    correctAnswer: 2,
    explanation:
      "Factor: x² - 5x + 6 = (x - 2)(x - 3) = 0, so x = 2 or x = 3. The values of 2x are 4 and 6. Their sum = 4 + 6 = 10.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },
  {
    id: "gre-ps-013",
    section: "quant",
    type: "problem-solving",
    themes: ["word-problems"],
    difficulty: "medium",
    text: "Working alone, Machine A can fill an order in 6 hours and Machine B can fill the same order in 3 hours. How many hours will it take both machines working together to fill the order?",
    choices: ["1", "1.5", "2", "2.5", "4.5"],
    correctAnswer: 2,
    explanation:
      "Rate of A = 1/6 order per hour, Rate of B = 1/3 order per hour. Combined rate = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2 order per hour. Time = 1 ÷ (1/2) = 2 hours.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },
  {
    id: "gre-ps-014",
    section: "quant",
    type: "problem-solving",
    themes: ["linear-equations"],
    difficulty: "medium",
    text: "If 2x + 3y = 12 and x - y = 1, what is the value of y?",
    choices: ["1", "2", "3", "4", "5"],
    correctAnswer: 1,
    explanation:
      "From x - y = 1, we get x = y + 1. Substitute into the first equation: 2(y + 1) + 3y = 12 → 2y + 2 + 3y = 12 → 5y = 10 → y = 2.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },
  {
    id: "gre-ps-015",
    section: "quant",
    type: "problem-solving",
    themes: ["functions-graphs"],
    difficulty: "medium",
    text: "If f(x) = x² - 4x + 3, what is the minimum value of f(x)?",
    choices: ["-4", "-1", "0", "1", "3"],
    correctAnswer: 1,
    explanation:
      "f(x) = x² - 4x + 3. Complete the square: f(x) = (x - 2)² - 4 + 3 = (x - 2)² - 1. Since (x - 2)² >= 0, the minimum value is -1, occurring when x = 2.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },

  // --- Algebra: Hard ---
  {
    id: "gre-ps-016",
    section: "quant",
    type: "problem-solving",
    themes: ["word-problems"],
    difficulty: "hard",
    text: "Train A leaves City X heading toward City Y at 60 mph. Two hours later, Train B leaves City Y heading toward City X at 80 mph. If the cities are 400 miles apart, how many hours after Train B departs do the trains meet?",
    choices: ["1.5", "2", "2.5", "3", "3.5"],
    correctAnswer: 1,
    explanation:
      "When Train B departs, Train A has already traveled 2 × 60 = 120 miles. The remaining distance between them is 400 - 120 = 280 miles. They approach each other at a combined speed of 60 + 80 = 140 mph. Time to meet = 280/140 = 2 hours after Train B departs.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },
  {
    id: "gre-ps-017",
    section: "quant",
    type: "problem-solving",
    themes: ["quadratic-equations"],
    difficulty: "hard",
    text: "If x² + y² = 25 and xy = 12, what is the value of (x + y)²?",
    choices: ["37", "42", "47", "49", "50"],
    correctAnswer: 3,
    explanation:
      "(x + y)² = x² + 2xy + y² = (x² + y²) + 2xy = 25 + 2(12) = 25 + 24 = 49.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },
  {
    id: "gre-ps-018",
    section: "quant",
    type: "problem-solving",
    themes: ["word-problems"],
    difficulty: "hard",
    text: "A chemist has one solution that is 30% acid and another that is 70% acid. How many liters of the 70% solution must be mixed with 10 liters of the 30% solution to create a mixture that is 40% acid?",
    choices: ["2.5", "3", "10/3", "4", "5"],
    correctAnswer: 2,
    explanation:
      "Let x = liters of 70% solution. Acid from each: 0.30(10) + 0.70x = 0.40(10 + x). Simplify: 3 + 0.70x = 4 + 0.40x. Then 0.30x = 1, so x = 1/0.30 = 10/3 liters (about 3.33 liters).",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-algebra",
  },

  // ========================================================================
  // GEOMETRY (8 questions: 2 easy, 4 medium, 2 hard)
  // ========================================================================

  // --- Geometry: Easy ---
  {
    id: "gre-ps-019",
    section: "quant",
    type: "problem-solving",
    themes: ["triangles"],
    difficulty: "easy",
    text: "A right triangle has legs of length 6 and 8. What is the length of the hypotenuse?",
    choices: ["7", "9", "10", "12", "14"],
    correctAnswer: 2,
    explanation:
      "By the Pythagorean theorem: c² = 6² + 8² = 36 + 64 = 100. So c = √100 = 10.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },
  {
    id: "gre-ps-020",
    section: "quant",
    type: "problem-solving",
    themes: ["quadrilaterals-polygons"],
    difficulty: "easy",
    text: "A rectangle has a length of 12 and a width of 5. What is its perimeter?",
    choices: ["17", "30", "34", "60", "70"],
    correctAnswer: 2,
    explanation:
      "Perimeter of a rectangle = 2(length + width) = 2(12 + 5) = 2(17) = 34.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },

  // --- Geometry: Medium ---
  {
    id: "gre-ps-021",
    section: "quant",
    type: "problem-solving",
    themes: ["circles"],
    difficulty: "medium",
    text: "A circle has an area of 49π. What is the circumference of the circle?",
    choices: ["7π", "14π", "24.5π", "49π", "98π"],
    correctAnswer: 1,
    explanation:
      "Area = πr² = 49π, so r² = 49 and r = 7. Circumference = 2πr = 2π(7) = 14π.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },
  {
    id: "gre-ps-022",
    section: "quant",
    type: "problem-solving",
    themes: ["coordinate-geometry"],
    difficulty: "medium",
    text: "What is the distance between the points (-3, 2) and (5, -4) in the coordinate plane?",
    choices: ["6", "8", "10", "12", "14"],
    correctAnswer: 2,
    explanation:
      "Distance = √[(5 - (-3))² + (-4 - 2)²] = √[8² + (-6)²] = √[64 + 36] = √100 = 10.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },
  {
    id: "gre-ps-023",
    section: "quant",
    type: "problem-solving",
    themes: ["triangles"],
    difficulty: "medium",
    text: "In an isosceles triangle, the two equal sides each have length 13 and the base has length 10. What is the area of the triangle?",
    choices: ["50", "60", "65", "120", "130"],
    correctAnswer: 1,
    explanation:
      "The height from the apex to the base bisects the base into two segments of length 5. Using the Pythagorean theorem: h² + 5² = 13², so h² = 169 - 25 = 144, and h = 12. Area = (1/2) × base × height = (1/2)(10)(12) = 60.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },
  {
    id: "gre-ps-024",
    section: "quant",
    type: "problem-solving",
    themes: ["lines-angles"],
    difficulty: "medium",
    text: "Two parallel lines are cut by a transversal. If one of the acute angles formed is 65°, what is the sum of one acute angle and one obtuse angle on the same side of the transversal?",
    choices: ["130°", "145°", "150°", "180°", "245°"],
    correctAnswer: 3,
    explanation:
      "When parallel lines are cut by a transversal, consecutive interior angles (also called co-interior or same-side interior angles) are supplementary. One acute angle is 65° and the obtuse angle on the same side is 180° - 65° = 115°. Their sum = 65° + 115° = 180°.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },

  // --- Geometry: Hard ---
  {
    id: "gre-ps-025",
    section: "quant",
    type: "problem-solving",
    themes: ["circles"],
    difficulty: "hard",
    text: "A circular garden with radius 10 meters has a path 2 meters wide around it. What is the area of the path, in square meters?",
    choices: ["36π", "40π", "44π", "48π", "56π"],
    correctAnswer: 2,
    explanation:
      "The outer circle has radius 10 + 2 = 12 meters. Area of path = area of outer circle - area of inner circle = π(12²) - π(10²) = 144π - 100π = 44π square meters.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },
  {
    id: "gre-ps-026",
    section: "quant",
    type: "problem-solving",
    themes: ["3d-geometry"],
    difficulty: "hard",
    text: "A rectangular box has dimensions 3, 4, and 12. What is the length of the longest diagonal of the box?",
    choices: ["5", "12", "13", "15", "17"],
    correctAnswer: 2,
    explanation:
      "The space diagonal of a rectangular box = √(l² + w² + h²) = √(3² + 4² + 12²) = √(9 + 16 + 144) = √169 = 13.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-geometry",
  },

  // ========================================================================
  // DATA ANALYSIS (9 questions: 2 easy, 4 medium, 3 hard)
  // ========================================================================

  // --- Data Analysis: Easy ---
  {
    id: "gre-ps-027",
    section: "quant",
    type: "problem-solving",
    themes: ["statistics-descriptive"],
    difficulty: "easy",
    text: "The ages of 7 children are: 4, 5, 5, 6, 8, 9, 12. What is the median age?",
    choices: ["5", "6", "7", "8", "9"],
    correctAnswer: 1,
    explanation:
      "With 7 values arranged in order, the median is the 4th value. The ordered list is 4, 5, 5, 6, 8, 9, 12. The 4th value is 6.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },
  {
    id: "gre-ps-028",
    section: "quant",
    type: "problem-solving",
    themes: ["probability"],
    difficulty: "easy",
    text: "A fair six-sided die is rolled once. What is the probability that the result is an even number or a number greater than 4?",
    choices: ["1/3", "1/2", "2/3", "5/6", "1"],
    correctAnswer: 2,
    explanation:
      "Even numbers: {2, 4, 6}. Numbers greater than 4: {5, 6}. Union: {2, 4, 5, 6} — that's 4 outcomes. Probability = 4/6 = 2/3.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // --- Data Analysis: Medium ---
  {
    id: "gre-ps-029",
    section: "quant",
    type: "problem-solving",
    themes: ["statistics-descriptive"],
    difficulty: "medium",
    text: "The mean of a set of 8 numbers is 15. If two numbers, 6 and 22, are removed from the set, what is the mean of the remaining 6 numbers?",
    choices: ["13.5", "14", "14.67", "15", "15.33"],
    correctAnswer: 2,
    explanation:
      "Original sum = 8 × 15 = 120. After removing 6 and 22, new sum = 120 - 6 - 22 = 92. New mean = 92/6 = 46/3 ≈ 14.67.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },
  {
    id: "gre-ps-030",
    section: "quant",
    type: "problem-solving",
    themes: ["counting-combinatorics"],
    difficulty: "medium",
    text: "In how many ways can the letters in the word LEVEL be arranged?",
    choices: ["12", "20", "24", "30", "60"],
    correctAnswer: 3,
    explanation:
      "LEVEL has 5 letters: L appears 2 times, E appears 2 times, V appears 1 time. The number of distinct arrangements = 5!/(2! × 2!) = 120/4 = 30.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },
  {
    id: "gre-ps-031",
    section: "quant",
    type: "problem-solving",
    themes: ["probability"],
    difficulty: "medium",
    text: "A jar contains 4 red marbles, 5 blue marbles, and 3 green marbles. If one marble is drawn at random, what is the probability that it is NOT green?",
    choices: ["1/4", "1/3", "2/3", "3/4", "5/6"],
    correctAnswer: 3,
    explanation:
      "Total marbles = 4 + 5 + 3 = 12. P(not green) = (total - green)/total = (12 - 3)/12 = 9/12 = 3/4.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },
  {
    id: "gre-ps-032",
    section: "quant",
    type: "problem-solving",
    themes: ["data-interpretation"],
    difficulty: "medium",
    text: "In a survey, 200 people were asked about their favorite sport. 35% chose soccer, 25% chose basketball, 20% chose tennis, and the rest chose other sports. How many more people chose soccer than tennis?",
    choices: ["10", "20", "30", "40", "50"],
    correctAnswer: 2,
    explanation:
      "Soccer: 35% of 200 = 70 people. Tennis: 20% of 200 = 40 people. Difference = 70 - 40 = 30.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // --- Data Analysis: Hard ---
  {
    id: "gre-ps-033",
    section: "quant",
    type: "problem-solving",
    themes: ["counting-combinatorics"],
    difficulty: "hard",
    text: "A committee of 3 people is to be selected from 5 men and 4 women. If the committee must include at least 1 woman, how many different committees are possible?",
    choices: ["56", "74", "80", "84", "120"],
    correctAnswer: 1,
    explanation:
      "Total committees of 3 from 9: C(9,3) = 84. Committees with NO women (all men): C(5,3) = 10. Committees with at least 1 woman: 84 - 10 = 74.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },
  {
    id: "gre-ps-034",
    section: "quant",
    type: "problem-solving",
    themes: ["normal-distribution"],
    difficulty: "hard",
    text: "A set of test scores is normally distributed with a mean of 500 and a standard deviation of 100. Approximately what percent of test takers scored between 300 and 700?",
    choices: ["68%", "80%", "90%", "95%", "99%"],
    correctAnswer: 3,
    explanation:
      "300 is 2 standard deviations below the mean (500 - 200 = 300), and 700 is 2 standard deviations above the mean (500 + 200 = 700). By the empirical rule, approximately 95% of data in a normal distribution falls within 2 standard deviations of the mean.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },
  {
    id: "gre-ps-035",
    section: "quant",
    type: "problem-solving",
    themes: ["probability"],
    difficulty: "hard",
    text: "Two fair six-sided dice are rolled. What is the probability that the sum of the numbers showing is at least 10?",
    choices: ["1/12", "1/9", "1/6", "5/36", "1/4"],
    correctAnswer: 2,
    explanation:
      "Total outcomes = 36. Outcomes with sum >= 10: Sum 10: (4,6),(5,5),(6,4) = 3 outcomes. Sum 11: (5,6),(6,5) = 2 outcomes. Sum 12: (6,6) = 1 outcome. Total favorable = 3 + 2 + 1 = 6. Probability = 6/36 = 1/6.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },
];
