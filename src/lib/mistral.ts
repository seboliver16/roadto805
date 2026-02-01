import { Mistral } from "@mistralai/mistralai";
import { Section } from "@/types";

const client = new Mistral({ apiKey: process.env.NEXT_PUBLIC_MISTRAL_API_KEY || "" });

const SECTION_TUTOR_ROLE: Record<Section, string> = {
  quant: "GMAT math tutor",
  verbal: "GMAT verbal reasoning tutor",
  "data-insights": "GMAT Data Insights tutor",
};

const SECTION_WALKTHROUGH_INSTRUCTIONS: Record<Section, string> = {
  quant: `Instructions:
1. First, briefly explain WHY the student's answer is wrong (common misconception or error).
2. Then walk through the correct solution step-by-step, as if teaching a student.
3. Keep it concise but thorough. Use clear math notation.
4. End with a quick tip or pattern to remember for similar questions.`,
  verbal: `Instructions:
1. First, explain WHY the student's answer is wrong — what logical flaw or misreading led to it.
2. Identify the argument's conclusion and key premises (for CR) or the passage's main point (for RC).
3. Walk through the reasoning for the correct answer, explaining why it's the best choice.
4. Briefly note why the most tempting wrong answers fail.
5. End with a strategy tip for this question type.`,
  "data-insights": `Instructions:
1. First, explain WHY the student's answer is wrong.
2. For Data Sufficiency: walk through evaluating each statement alone, then together.
3. For Multi-Source/Table/Graphics: identify the key data the student missed or misread.
4. Walk through the correct reasoning step-by-step.
5. End with a strategy tip for this question type.`,
};

export async function generateWalkthrough(
  questionText: string,
  choices: string[],
  correctAnswer: number,
  userAnswer: number,
  explanation: string,
  section: Section = "quant"
): Promise<string> {
  const role = SECTION_TUTOR_ROLE[section];
  const instructions = SECTION_WALKTHROUGH_INSTRUCTIONS[section];

  const prompt = `You are a ${role}. A student got a question wrong. Walk them through the solution step by step.

QUESTION:
${questionText}

CHOICES:
${choices.map((c, i) => `${String.fromCharCode(65 + i)}) ${c}`).join("\n")}

CORRECT ANSWER: ${String.fromCharCode(65 + correctAnswer)}) ${choices[correctAnswer]}
STUDENT CHOSE: ${String.fromCharCode(65 + userAnswer)}) ${choices[userAnswer]}

BASE EXPLANATION:
${explanation}

${instructions}

Format your response in clean markdown.`;

  const result = await client.chat.complete({
    model: "mistral-small-latest",
    messages: [{ role: "user", content: prompt }],
  });

  return result.choices?.[0]?.message?.content as string ?? "";
}

export async function generateThemeSummary(
  theme: string,
  missedQuestions: { text: string; correctAnswer: string }[]
): Promise<string> {
  const prompt = `You are a GMAT tutor. A student is struggling with "${theme}" questions. They missed these questions:

${missedQuestions.map((q, i) => `${i + 1}. ${q.text}\n   Correct answer: ${q.correctAnswer}`).join("\n\n")}

Give a brief (2-3 paragraph) summary of:
1. The key concepts they need to review for this theme
2. Common patterns and shortcuts for this type of question
3. One or two practice strategies

Keep it encouraging but direct. Format in markdown.`;

  const result = await client.chat.complete({
    model: "mistral-small-latest",
    messages: [{ role: "user", content: prompt }],
  });

  return result.choices?.[0]?.message?.content as string ?? "";
}

export async function generateHint(
  questionText: string,
  choices: string[],
  section: Section = "quant",
  passage?: string
): Promise<string> {
  const role = SECTION_TUTOR_ROLE[section];

  const passageBlock = passage ? `\nPASSAGE:\n${passage}\n` : "";

  const prompt = `You are a ${role}. A student is stuck on a question and wants a small nudge — NOT a walkthrough.
${passageBlock}
QUESTION:
${questionText}

CHOICES:
${choices.map((c, i) => `${String.fromCharCode(65 + i)}) ${c}`).join("\n")}

STRICT RULES — you MUST follow all of these:
- Give ONLY 1-2 short sentences.
- Ask a Socratic question that makes the student think, like "What property do consecutive even integers have?" or "What does the word 'although' signal about the author's view?"
- Do NOT identify the correct answer or eliminate wrong answers.
- Do NOT walk through any steps of the solution.
- Do NOT restate information already obvious from the question.
- Do NOT mention specific numbers, values, or conclusions from solving the problem.
- Think of it as asking "Have you considered…?" rather than "Here's how to solve it."

Format as a single short paragraph in clean markdown.`;

  const result = await client.chat.complete({
    model: "mistral-small-latest",
    messages: [{ role: "user", content: prompt }],
  });

  return result.choices?.[0]?.message?.content as string ?? "";
}

export async function generateExplanation(
  selectedText: string,
  fullPassage: string,
  questionContext?: string
): Promise<string> {
  const qBlock = questionContext ? `\nThe student is answering this question: ${questionContext}\n` : "";

  const prompt = `You are a GMAT verbal tutor. A student highlighted the following text from a reading passage and wants it explained.

FULL PASSAGE:
${fullPassage}

HIGHLIGHTED TEXT:
"${selectedText}"
${qBlock}
Explain in 2-3 concise sentences:
- What the highlighted text means in context
- Why it matters for the passage's argument or structure
- Any key vocabulary or rhetorical device used

Format in clean markdown.`;

  const result = await client.chat.complete({
    model: "mistral-small-latest",
    messages: [{ role: "user", content: prompt }],
  });

  return result.choices?.[0]?.message?.content as string ?? "";
}
