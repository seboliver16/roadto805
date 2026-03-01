import { Question } from "@/types";

// =============================================
// SET 1: Company Revenue Table (4 questions)
// =============================================

const diSet1Header = `Use the following data to answer the question.\n\nQuarterly Revenue (in millions of dollars)\n| Company     | Q1   | Q2   | Q3   | Q4   |\n|-------------|------|------|------|------|\n| Alpha Corp  | 12.5 | 14.2 | 13.8 | 16.1 |\n| Beta Inc    |  8.3 |  9.1 | 10.4 | 11.2 |\n| Gamma LLC   | 15.0 | 14.5 | 16.2 | 17.8 |`;

// Alpha Corp total: 12.5 + 14.2 + 13.8 + 16.1 = 56.6
// Beta Inc total:    8.3 +  9.1 + 10.4 + 11.2 = 39.0
// Gamma LLC total:  15.0 + 14.5 + 16.2 + 17.8 = 63.5
// Grand total: 56.6 + 39.0 + 63.5 = 159.1
// Beta Q1->Q4 change: (11.2 - 8.3) / 8.3 = 2.9 / 8.3 ≈ 34.9%
// Alpha Q2->Q3 change: (13.8 - 14.2) / 14.2 = -0.4 / 14.2 ≈ -2.8%
// Average quarterly revenue across all three: Grand total / 4 = 159.1 / 4 = 39.775

// =============================================
// SET 2: Population Bar Chart (4 questions)
// =============================================

const diSet2Header = `Use the following data to answer the question.\n\nPopulation of Five Cities (in thousands)\n| City        | 2010 | 2020 |\n|-------------|------|------|\n| Ashford     |  120 |  150 |\n| Brookdale   |  200 |  240 |\n| Cedarville  |   80 |  112 |\n| Dunmore     |  160 |  168 |\n| Eastport    |  140 |  180 |`;

// Growth rates:
// Ashford:    (150-120)/120 = 30/120 = 25.0%
// Brookdale:  (240-200)/200 = 40/200 = 20.0%
// Cedarville: (112-80)/80   = 32/80  = 40.0%
// Dunmore:    (168-160)/160 = 8/160  = 5.0%
// Eastport:   (180-140)/140 = 40/140 ≈ 28.6%
// 2020 total: 150+240+112+168+180 = 850
// 2010 total: 120+200+80+160+140  = 700
// Largest absolute change: Brookdale and Eastport both 40 thousand
// Ratio Ashford 2020 to Cedarville 2020: 150/112 = 75/56

// =============================================
// SET 3: Survey Results Pie Chart (4 questions)
// =============================================

const diSet3Header = `Use the following data to answer the question.\n\nTransportation Preferences Survey\nA survey of 500 people asked about their primary mode of transportation.\n\n| Mode    | Percentage |\n|---------|------------|\n| Car     |    40%     |\n| Bus     |    22%     |\n| Train   |    18%     |\n| Bicycle |    12%     |\n| Walking |     8%     |`;

// Car:     500 × 0.40 = 200
// Bus:     500 × 0.22 = 110
// Train:   500 × 0.18 =  90
// Bicycle: 500 × 0.12 =  60
// Walking: 500 × 0.08 =  40
// Total percentages: 40+22+18+12+8 = 100% ✓
// Public transit (Bus+Train): 22+18 = 40% = 200 people
// Non-motorized (Bicycle+Walking): 12+8 = 20% = 100 people
// Ratio Car : Bus = 200:110 = 20:11

// =============================================
// SET 4: Student Test Scores Table (4 questions)
// =============================================

const diSet4Header = `Use the following data to answer the question.\n\nTest Score Statistics for Four Classes\n| Class   | Mean | Median | Range | Standard Deviation |\n|---------|------|--------|-------|--------------------|\n| Class A |   78 |     80 |    42 |                8.5 |\n| Class B |   82 |     82 |    30 |                6.0 |\n| Class C |   75 |     72 |    50 |               11.2 |\n| Class D |   80 |     84 |    36 |                7.4 |`;

// Notes:
// Class A: mean < median → left-skewed (or a few low outliers)
// Class B: mean = median → roughly symmetric
// Class C: mean > median → right-skewed, highest range & SD → most spread out
// Class D: mean < median → left-skewed
// Weighted mean of A and B (assume equal size 25 each): (78+82)/2 = 80
// Sum of means: 78+82+75+80 = 315; average mean = 315/4 = 78.75

// =============================================
// SET 5: Monthly Sales Line Chart (4 questions)
// =============================================

const diSet5Header = `Use the following data to answer the question.\n\nMonthly Sales Revenue (in thousands of dollars)\n| Month | Product A | Product B |\n|-------|-----------|-----------|\n| Jan   |        30 |        20 |\n| Feb   |        28 |        22 |\n| Mar   |        35 |        25 |\n| Apr   |        40 |        28 |\n| May   |        45 |        30 |\n| Jun   |        50 |        35 |\n| Jul   |        55 |        38 |\n| Aug   |        52 |        40 |\n| Sep   |        48 |        36 |\n| Oct   |        42 |        32 |\n| Nov   |        38 |        28 |\n| Dec   |        60 |        45 |`;

// Product A total: 30+28+35+40+45+50+55+52+48+42+38+60 = 523
// Product B total: 20+22+25+28+30+35+38+40+36+32+28+45 = 379
// Combined total: 523 + 379 = 902
// Product A max: 60 (Dec), min: 28 (Feb)
// Product B max: 45 (Dec), min: 20 (Jan)
// A-B difference by month: 10,6,10,12,15,15,17,12,12,10,10,15
// Largest A-B gap: 17 (Jul)
// A percent change Jan->Dec: (60-30)/30 = 100%
// B percent change Jan->Dec: (45-20)/20 = 125%
// Q1 A: 30+28+35=93; Q2 A: 40+45+50=135; Q3 A: 55+52+48=155; Q4 A: 42+38+60=140
// Q1 B: 20+22+25=67; Q2 B: 28+30+35=93; Q3 B: 38+40+36=114; Q4 B: 32+28+45=105

export const greQuantDIQuestions: Question[] = [
  // =============================================
  // SET 1: Company Revenue — 4 questions (gre-di-001 to 004)
  // =============================================

  // #1 — Total revenue / Easy
  {
    id: "gre-di-001",
    section: "quant",
    type: "data-interpretation",
    themes: ["data-interpretation"],
    difficulty: "easy",
    text: diSet1Header + "\n\nWhat was the total annual revenue for Beta Inc, in millions of dollars?",
    choices: ["38.0", "39.0", "39.5", "42.0", "56.6"],
    correctAnswer: 1,
    explanation:
      "Beta Inc revenue: 8.3 + 9.1 + 10.4 + 11.2 = 39.0 million dollars. The answer is 39.0.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // #2 — Percentage change / Medium
  {
    id: "gre-di-002",
    section: "quant",
    type: "data-interpretation",
    themes: ["data-interpretation"],
    difficulty: "medium",
    text: diSet1Header + "\n\nThe percent increase in Beta Inc's revenue from Q1 to Q4 is closest to which of the following?",
    choices: ["25%", "29%", "35%", "38%", "43%"],
    correctAnswer: 2,
    explanation:
      "Beta Inc Q1 revenue = 8.3 and Q4 revenue = 11.2. Percent increase = (11.2 − 8.3) / 8.3 × 100 = 2.9 / 8.3 × 100 ≈ 34.94%, which is closest to 35%.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // #3 — Comparing companies / Medium
  {
    id: "gre-di-003",
    section: "quant",
    type: "data-interpretation",
    themes: ["data-interpretation"],
    difficulty: "medium",
    text: diSet1Header + "\n\nFor how many of the four quarters did Gamma LLC have the highest revenue among the three companies?",
    choices: ["1", "2", "3", "4", "None"],
    correctAnswer: 3,
    explanation:
      "Comparing each quarter — Q1: Gamma 15.0 > Alpha 12.5 > Beta 8.3 (Gamma highest). Q2: Gamma 14.5 > Alpha 14.2 > Beta 9.1 (Gamma highest). Q3: Gamma 16.2 > Alpha 13.8 > Beta 10.4 (Gamma highest). Q4: Gamma 17.8 > Alpha 16.1 > Beta 11.2 (Gamma highest). Gamma LLC had the highest revenue in all 4 quarters.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // #4 — Average / Hard
  {
    id: "gre-di-004",
    section: "quant",
    type: "data-interpretation",
    themes: ["data-interpretation"],
    difficulty: "hard",
    text: diSet1Header + "\n\nWhat was the average quarterly revenue across all three companies, in millions of dollars, rounded to the nearest tenth?",
    choices: ["13.0", "13.3", "13.5", "39.8", "53.0"],
    correctAnswer: 1,
    explanation:
      "Total revenue for all companies across all quarters: Alpha Corp = 12.5 + 14.2 + 13.8 + 16.1 = 56.6. Beta Inc = 8.3 + 9.1 + 10.4 + 11.2 = 39.0. Gamma LLC = 15.0 + 14.5 + 16.2 + 17.8 = 63.5. Grand total = 56.6 + 39.0 + 63.5 = 159.1. There are 3 companies × 4 quarters = 12 data points. Average = 159.1 / 12 ≈ 13.258, which rounds to 13.3.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // =============================================
  // SET 2: Population Bar Chart — 4 questions (gre-di-005 to 008)
  // =============================================

  // #5 — Growth rate / Medium
  {
    id: "gre-di-005",
    section: "quant",
    type: "data-interpretation",
    themes: ["data-interpretation"],
    difficulty: "medium",
    text: diSet2Header + "\n\nWhich city had the greatest percent increase in population from 2010 to 2020?",
    choices: ["Ashford", "Brookdale", "Cedarville", "Dunmore", "Eastport"],
    correctAnswer: 2,
    explanation:
      "Percent increases — Ashford: (150−120)/120 = 25.0%. Brookdale: (240−200)/200 = 20.0%. Cedarville: (112−80)/80 = 40.0%. Dunmore: (168−160)/160 = 5.0%. Eastport: (180−140)/140 ≈ 28.6%. Cedarville had the greatest percent increase at 40.0%.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // #6 — Ratio / Hard
  {
    id: "gre-di-006",
    section: "quant",
    type: "data-interpretation",
    themes: ["data-interpretation"],
    difficulty: "hard",
    text: diSet2Header + "\n\nIn 2020, the ratio of the population of Brookdale to the population of Cedarville was closest to which of the following?",
    choices: ["5 to 3", "2 to 1", "15 to 7", "13 to 6", "7 to 4"],
    correctAnswer: 2,
    explanation:
      "Brookdale 2020 population = 240 thousand. Cedarville 2020 population = 112 thousand. Ratio = 240/112 = 30/14 = 15/7. Checking: 15/7 ≈ 2.143. Compare with the choices: 5/3 ≈ 1.667, 2/1 = 2.000, 15/7 ≈ 2.143, 13/6 ≈ 2.167, 7/4 = 1.750. The exact ratio is 15 to 7.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // #7 — Total / Easy
  {
    id: "gre-di-007",
    section: "quant",
    type: "data-interpretation",
    themes: ["data-interpretation"],
    difficulty: "easy",
    text: diSet2Header + "\n\nWhat was the total population of all five cities in 2020, in thousands?",
    choices: ["700", "750", "820", "850", "900"],
    correctAnswer: 3,
    explanation:
      "2020 populations (in thousands): Ashford 150 + Brookdale 240 + Cedarville 112 + Dunmore 168 + Eastport 180 = 850 thousand.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // #8 — Largest absolute change / Medium
  {
    id: "gre-di-008",
    section: "quant",
    type: "data-interpretation",
    themes: ["data-interpretation"],
    difficulty: "medium",
    text: diSet2Header + "\n\nWhich of the following pairs of cities had the same absolute increase in population (in thousands) from 2010 to 2020?",
    choices: [
      "Ashford and Cedarville",
      "Brookdale and Eastport",
      "Ashford and Dunmore",
      "Cedarville and Dunmore",
      "Brookdale and Dunmore",
    ],
    correctAnswer: 1,
    explanation:
      "Absolute increases (in thousands): Ashford: 150 − 120 = 30. Brookdale: 240 − 200 = 40. Cedarville: 112 − 80 = 32. Dunmore: 168 − 160 = 8. Eastport: 180 − 140 = 40. Brookdale and Eastport both increased by 40 thousand.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // =============================================
  // SET 3: Survey Results — 4 questions (gre-di-009 to 012)
  // =============================================

  // #9 — Number of respondents / Easy
  {
    id: "gre-di-009",
    section: "quant",
    type: "data-interpretation",
    themes: ["data-interpretation"],
    difficulty: "easy",
    text: diSet3Header + "\n\nHow many people in the survey chose the bus as their primary mode of transportation?",
    choices: ["90", "100", "110", "120", "140"],
    correctAnswer: 2,
    explanation:
      "Bus accounts for 22% of 500 respondents. Number of bus riders = 0.22 × 500 = 110.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // #10 — Combined percentages / Medium
  {
    id: "gre-di-010",
    section: "quant",
    type: "data-interpretation",
    themes: ["data-interpretation"],
    difficulty: "medium",
    text: diSet3Header + "\n\nHow many people in the survey chose either a bicycle or walking as their primary mode of transportation?",
    choices: ["60", "80", "90", "100", "120"],
    correctAnswer: 3,
    explanation:
      "Bicycle = 12% and Walking = 8%, for a combined 20%. Number of people = 0.20 × 500 = 100.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // #11 — Ratio between groups / Hard
  {
    id: "gre-di-011",
    section: "quant",
    type: "data-interpretation",
    themes: ["data-interpretation"],
    difficulty: "hard",
    text: diSet3Header + "\n\nThe number of people who chose the car is what percent greater than the number of people who chose the train?",
    choices: ["22%", "40%", "82%", "122%", "222%"],
    correctAnswer: 3,
    explanation:
      "Car respondents = 40% of 500 = 200. Train respondents = 18% of 500 = 90. Percent greater = (200 − 90) / 90 × 100 = 110 / 90 × 100 ≈ 122.2%. The closest answer is 122%.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // #12 — Multi-step / Medium
  {
    id: "gre-di-012",
    section: "quant",
    type: "data-interpretation",
    themes: ["data-interpretation"],
    difficulty: "medium",
    text: diSet3Header + "\n\nIf 50 additional people were surveyed and all 50 chose the train, what would be the new percentage of all respondents (out of 550) who prefer the train, rounded to the nearest whole percent?",
    choices: ["18%", "20%", "22%", "25%", "27%"],
    correctAnswer: 3,
    explanation:
      "Originally, train respondents = 18% of 500 = 90. After adding 50 more train riders, train total = 90 + 50 = 140. New total respondents = 500 + 50 = 550. New percentage = 140 / 550 × 100 ≈ 25.45%, which rounds to 25%.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // =============================================
  // SET 4: Student Test Scores — 4 questions (gre-di-013 to 016)
  // =============================================

  // #13 — Comparing statistics / Easy
  {
    id: "gre-di-013",
    section: "quant",
    type: "data-interpretation",
    themes: ["data-interpretation", "statistics-descriptive"],
    difficulty: "easy",
    text: diSet4Header + "\n\nWhich class had the highest mean test score?",
    choices: ["Class A", "Class B", "Class C", "Class D", "Classes A and D tied"],
    correctAnswer: 1,
    explanation:
      "The mean scores are: Class A = 78, Class B = 82, Class C = 75, Class D = 80. Class B has the highest mean at 82.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // #14 — Inferring distributions / Medium
  {
    id: "gre-di-014",
    section: "quant",
    type: "data-interpretation",
    themes: ["data-interpretation", "statistics-descriptive"],
    difficulty: "medium",
    text: diSet4Header + "\n\nBased on the statistics shown, which class most likely has its scores most tightly clustered around the mean?",
    choices: ["Class A", "Class B", "Class C", "Class D", "Cannot be determined"],
    correctAnswer: 1,
    explanation:
      "The standard deviation measures how tightly scores cluster around the mean. The standard deviations are: Class A = 8.5, Class B = 6.0, Class C = 11.2, Class D = 7.4. Class B has the smallest standard deviation (6.0), so its scores are most tightly clustered around the mean.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // #15 — Calculating values / Hard
  {
    id: "gre-di-015",
    section: "quant",
    type: "data-interpretation",
    themes: ["data-interpretation", "statistics-descriptive"],
    difficulty: "hard",
    text: diSet4Header + "\n\nIf each class has exactly 25 students, what is the overall mean test score for all four classes combined?",
    choices: ["77.25", "78.00", "78.75", "79.50", "80.00"],
    correctAnswer: 2,
    explanation:
      "With 25 students in each class, the total scores are: Class A = 78 × 25 = 1950, Class B = 82 × 25 = 2050, Class C = 75 × 25 = 1875, Class D = 80 × 25 = 2000. Grand total = 1950 + 2050 + 1875 + 2000 = 7875. Total students = 4 × 25 = 100. Overall mean = 7875 / 100 = 78.75.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // #16 — Range and inference / Medium
  {
    id: "gre-di-016",
    section: "quant",
    type: "data-interpretation",
    themes: ["data-interpretation", "statistics-descriptive"],
    difficulty: "medium",
    text: diSet4Header + "\n\nIf the lowest score in Class C was 48, what was the highest score in Class C?",
    choices: ["88", "92", "95", "98", "100"],
    correctAnswer: 3,
    explanation:
      "The range of a data set is defined as the highest value minus the lowest value. For Class C, Range = 50 and lowest score = 48. Therefore, highest score = lowest score + range = 48 + 50 = 98.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // =============================================
  // SET 5: Monthly Sales — 4 questions (gre-di-017 to 020)
  // =============================================

  // #17 — Reading trends / Easy
  {
    id: "gre-di-017",
    section: "quant",
    type: "data-interpretation",
    themes: ["data-interpretation"],
    difficulty: "easy",
    text: diSet5Header + "\n\nIn which month did Product A have its highest sales revenue?",
    choices: ["June", "July", "August", "November", "December"],
    correctAnswer: 4,
    explanation:
      "Looking at Product A's sales by month: Jan 30, Feb 28, Mar 35, Apr 40, May 45, Jun 50, Jul 55, Aug 52, Sep 48, Oct 42, Nov 38, Dec 60. The highest value is 60 in December.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // #18 — Difference / Medium
  {
    id: "gre-di-018",
    section: "quant",
    type: "data-interpretation",
    themes: ["data-interpretation"],
    difficulty: "medium",
    text: diSet5Header + "\n\nIn which month was the difference between Product A's sales and Product B's sales the greatest?",
    choices: ["May", "June", "July", "August", "December"],
    correctAnswer: 2,
    explanation:
      "Differences (A − B) for each month: Jan: 30−20=10, Feb: 28−22=6, Mar: 35−25=10, Apr: 40−28=12, May: 45−30=15, Jun: 50−35=15, Jul: 55−38=17, Aug: 52−40=12, Sep: 48−36=12, Oct: 42−32=10, Nov: 38−28=10, Dec: 60−45=15. The greatest difference is 17 in July.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // #19 — Percentage change / Medium
  {
    id: "gre-di-019",
    section: "quant",
    type: "data-interpretation",
    themes: ["data-interpretation"],
    difficulty: "medium",
    text: diSet5Header + "\n\nFrom January to December, the percent increase in sales for Product B was closest to which of the following?",
    choices: ["80%", "100%", "112%", "125%", "150%"],
    correctAnswer: 3,
    explanation:
      "Product B sales in January = 20 and in December = 45. Percent increase = (45 − 20) / 20 × 100 = 25 / 20 × 100 = 125%.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },

  // #20 — Multi-step quarterly comparison / Hard
  {
    id: "gre-di-020",
    section: "quant",
    type: "data-interpretation",
    themes: ["data-interpretation"],
    difficulty: "hard",
    text: diSet5Header + "\n\nFor Product A, in which quarter (Q1 = Jan–Mar, Q2 = Apr–Jun, Q3 = Jul–Sep, Q4 = Oct–Dec) was the total quarterly sales revenue the greatest?",
    choices: ["Q1", "Q2", "Q3", "Q4", "Q2 and Q4 tied"],
    correctAnswer: 2,
    explanation:
      "Product A quarterly totals: Q1 (Jan+Feb+Mar) = 30+28+35 = 93. Q2 (Apr+May+Jun) = 40+45+50 = 135. Q3 (Jul+Aug+Sep) = 55+52+48 = 155. Q4 (Oct+Nov+Dec) = 42+38+60 = 140. The greatest quarterly total is Q3 at 155 thousand dollars.",
    source: { name: "GRE Practice — Original", type: "original" as const },
    chapterId: "gre-quant-data-analysis",
  },
];
