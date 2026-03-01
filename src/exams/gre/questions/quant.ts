import { Question } from "@/types";
import { greQuantQCQuestions } from "./quant-qc";
import { greQuantPSQuestions } from "./quant-ps";
import { greQuantDIQuestions } from "./quant-di";
import { greQuantNEQuestions } from "./quant-ne";

// Legacy questions from the original small bank (kept for backward compatibility)
const legacyQuantQuestions: Question[] = [
  {
    id: "gre-q-001",
    section: "quant",
    type: "quantitative-comparison",
    themes: ["integers"],
    difficulty: "easy",
    text: "Column A: The number of prime numbers between 20 and 30\nColumn B: 2\n\nCompare the two quantities.",
    quantityA: "The number of prime numbers between 20 and 30",
    quantityB: "2",
    choices: [
      "Quantity A is greater.",
      "Quantity B is greater.",
      "The two quantities are equal.",
      "The relationship cannot be determined from the information given.",
    ],
    correctAnswer: 2,
    explanation: "The prime numbers between 20 and 30 are 23 and 29 — that's exactly 2 primes. Quantity A = 2 and Quantity B = 2, so they are equal.",
    source: { name: "Original", type: "original" },
  },
  {
    id: "gre-q-002",
    section: "quant",
    type: "problem-solving",
    themes: ["linear-equations"],
    difficulty: "medium",
    text: "If 3x + 7 = 22, what is the value of 6x + 3?",
    choices: ["27", "30", "33", "36", "39"],
    correctAnswer: 2,
    explanation: "First solve for x: 3x + 7 = 22, so 3x = 15 and x = 5. Then 6x + 3 = 6(5) + 3 = 30 + 3 = 33.",
    source: { name: "Original", type: "original" },
  },
];

export const greQuantQuestions: Question[] = [
  ...legacyQuantQuestions,
  ...greQuantQCQuestions,
  ...greQuantPSQuestions,
  ...greQuantDIQuestions,
  ...greQuantNEQuestions,
];
