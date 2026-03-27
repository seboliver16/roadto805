import { Mistral } from "@mistralai/mistralai";
import { ChatMessage, Section } from "@/types";

const client = new Mistral({ apiKey: process.env.NEXT_PUBLIC_MISTRAL_API_KEY || "" });

const SECTION_TUTOR_ROLE: Record<string, string> = {
  quant: "math tutor",
  verbal: "verbal reasoning tutor",
  "data-insights": "Data Insights tutor",
  awa: "writing tutor",
};

const SECTION_WALKTHROUGH_INSTRUCTIONS: Record<string, string> = {
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
  section: Section = "quant",
  userName?: string
): Promise<string> {
  const role = SECTION_TUTOR_ROLE[section];
  const instructions = SECTION_WALKTHROUGH_INSTRUCTIONS[section];
  const nameClause = userName ? ` The student's name is ${userName} — address them by name occasionally to keep the tone personal and encouraging.` : "";

  const prompt = `You are a ${role}.${nameClause} A student got a question wrong. Walk them through the solution step by step. Be warm and encouraging — like a great tutor who genuinely wants them to succeed.

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
  passage?: string,
  userName?: string
): Promise<string> {
  const role = SECTION_TUTOR_ROLE[section];

  const passageBlock = passage ? `\nPASSAGE:\n${passage}\n` : "";
  const nameClause = userName ? ` The student's name is ${userName} — you can address them by name.` : "";

  const prompt = `You are a ${role}.${nameClause} A student is stuck on a question and wants a small nudge — NOT a walkthrough.
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
  questionContext?: string,
  section?: Section
): Promise<string> {
  const role = section ? SECTION_TUTOR_ROLE[section] : "GMAT tutor";
  const qBlock = questionContext ? `\nContext: ${questionContext}\n` : "";

  const prompt = `You are a ${role}. A student highlighted the following text and wants it explained.

FULL CONTEXT:
${fullPassage.slice(0, 3000)}

HIGHLIGHTED TEXT:
"${selectedText}"
${qBlock}
Explain in 2-3 concise sentences:
- What the highlighted text means
- Why it matters (for the concept, argument, or problem-solving approach)
- Any key terms, formulas, or patterns to note

Format in clean markdown.`;

  const result = await client.chat.complete({
    model: "mistral-small-latest",
    messages: [{ role: "user", content: prompt }],
  });

  return result.choices?.[0]?.message?.content as string ?? "";
}

export async function generateQuickCheck(
  sectionContent: string,
  section: Section = "quant"
): Promise<{ question: string; choices: string[]; correctIndex: number; explanation: string }> {
  const role = SECTION_TUTOR_ROLE[section];

  const prompt = `You are a ${role}. Based on the lesson content below, create ONE multiple-choice question to test the student's understanding.

LESSON CONTENT:
${sectionContent.slice(0, 2500)}

Return ONLY a JSON object with this exact format (no markdown, no code fences, just raw JSON):
{"question":"The question text","choices":["A choice","B choice","C choice","D choice"],"correctIndex":0,"explanation":"Why the correct answer is right."}

Rules:
- The question should test comprehension of a key concept from the lesson
- Make it challenging but fair — test understanding, not memorization
- The explanation should be 1-2 sentences
- correctIndex is 0-based (0=first choice, 3=last)`;

  const result = await client.chat.complete({
    model: "mistral-small-latest",
    messages: [{ role: "user", content: prompt }],
  });

  const raw = (result.choices?.[0]?.message?.content as string ?? "").trim();
  try {
    return JSON.parse(raw);
  } catch {
    // Try to extract JSON from potential markdown wrapping
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (jsonMatch) return JSON.parse(jsonMatch[0]);
    return {
      question: "Could not generate a question. Try again.",
      choices: ["Option A", "Option B", "Option C", "Option D"],
      correctIndex: 0,
      explanation: "",
    };
  }
}

/**
 * Score a GRE Analytical Writing essay on the 0-6 scale.
 * Uses the same rubric as ETS: development, organization, language, mechanics.
 */
export async function scoreEssay(
  essayText: string,
  essayType: "issue" | "argument",
  essayPrompt: string,
  essayDirections: string
): Promise<{ score: number; feedback: string }> {
  const taskDescription =
    essayType === "issue"
      ? "The student was asked to analyze an issue — taking a position on a claim and supporting it with reasons and examples."
      : "The student was asked to analyze an argument — evaluating the logical soundness of someone else's argument.";

  const prompt = `You are an expert GRE Analytical Writing scorer. Score the following essay on the GRE 0–6 scale (half-point increments: 0, 0.5, 1.0, 1.5, ... 5.5, 6.0).

TASK TYPE: ${essayType === "issue" ? "Analyze an Issue" : "Analyze an Argument"}
${taskDescription}

PROMPT:
${essayPrompt}

DIRECTIONS:
${essayDirections}

STUDENT'S ESSAY:
${essayText}

SCORING RUBRIC (GRE AWA):
6 — Outstanding: Insightful analysis, compelling reasoning, well-organized, sophisticated vocabulary and sentence variety, virtually free of errors.
5 — Strong: Thoughtful analysis, well-developed reasoning, clearly organized, good vocabulary, few errors.
4 — Adequate: Competent analysis, adequate reasoning, reasonably organized, acceptable vocabulary, some errors.
3 — Limited: Some analysis but weak reasoning, partially organized, limited vocabulary, noticeable errors.
2 — Seriously Flawed: Weak analysis, poor reasoning, disorganized, limited vocabulary, frequent errors.
1 — Fundamentally Deficient: Little or no analysis, incoherent, severe errors.
0 — Off-topic, blank, or copied the prompt.

Score the essay and provide detailed feedback. Return ONLY a JSON object (no markdown, no code fences):
{"score": 4.5, "feedback": "Your essay demonstrates... [organized feedback covering: 1) Thesis & Position, 2) Development & Evidence, 3) Organization & Flow, 4) Language & Style, 5) Areas for Improvement]"}`;

  const result = await client.chat.complete({
    model: "mistral-small-latest",
    messages: [{ role: "user", content: prompt }],
  });

  const raw = (result.choices?.[0]?.message?.content as string ?? "").trim();
  try {
    return JSON.parse(raw);
  } catch {
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (jsonMatch) return JSON.parse(jsonMatch[0]);
    return {
      score: 3.0,
      feedback: "Unable to generate detailed feedback. Please try again.",
    };
  }
}

export async function sendFollowUp(
  messages: ChatMessage[],
  section?: Section,
  userName?: string
): Promise<string> {
  const role = section ? SECTION_TUTOR_ROLE[section] : "GMAT tutor";
  const nameClause = userName ? ` The student's name is ${userName} — address them by name occasionally.` : "";

  const systemMessage: ChatMessage = {
    role: "system",
    content: `You are a ${role}.${nameClause} Continue the conversation helpfully and concisely. Be warm and encouraging. Stay focused on the topic being discussed. Use clean markdown formatting. Keep responses to 2-4 sentences unless the student asks for more detail.`,
  };

  const result = await client.chat.complete({
    model: "mistral-small-latest",
    messages: [systemMessage, ...messages],
  });

  return (result.choices?.[0]?.message?.content as string) ?? "";
}
