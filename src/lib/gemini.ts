import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || "");

export async function generateWalkthrough(
  questionText: string,
  choices: string[],
  correctAnswer: number,
  userAnswer: number,
  explanation: string
): Promise<string> {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `You are a GMAT math tutor. A student got a question wrong. Walk them through the solution step by step.

QUESTION:
${questionText}

CHOICES:
${choices.map((c, i) => `${String.fromCharCode(65 + i)}) ${c}`).join("\n")}

CORRECT ANSWER: ${String.fromCharCode(65 + correctAnswer)}) ${choices[correctAnswer]}
STUDENT CHOSE: ${String.fromCharCode(65 + userAnswer)}) ${choices[userAnswer]}

BASE EXPLANATION:
${explanation}

Instructions:
1. First, briefly explain WHY the student's answer is wrong (common misconception or error).
2. Then walk through the correct solution step-by-step, as if teaching a student.
3. Keep it concise but thorough. Use clear math notation.
4. End with a quick tip or pattern to remember for similar questions.

Format your response in clean markdown.`;

  const result = await model.generateContent(prompt);
  return result.response.text();
}

export async function generateThemeSummary(
  theme: string,
  missedQuestions: { text: string; correctAnswer: string }[]
): Promise<string> {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `You are a GMAT math tutor. A student is struggling with "${theme}" questions. They missed these questions:

${missedQuestions.map((q, i) => `${i + 1}. ${q.text}\n   Correct answer: ${q.correctAnswer}`).join("\n\n")}

Give a brief (2-3 paragraph) summary of:
1. The key concepts they need to review for this theme
2. Common patterns and shortcuts for this type of question
3. One or two practice strategies

Keep it encouraging but direct. Format in markdown.`;

  const result = await model.generateContent(prompt);
  return result.response.text();
}
