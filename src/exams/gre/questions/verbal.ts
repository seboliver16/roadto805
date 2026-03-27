import { Question } from "@/types";
import { greVerbalTCQuestions } from "./verbal-tc";
import { greVerbalTCExpandedQuestions } from "./verbal-tc-expanded";
import { greVerbalSEQuestions } from "./verbal-se";
import { greVerbalSEExpandedQuestions } from "./verbal-se-expanded";
import { greVerbalRCQuestions } from "./verbal-rc";
import { greVerbalRCExpandedQuestions } from "./verbal-rc-expanded";

// Legacy questions from the original small bank (kept for backward compatibility)
const legacyVerbalQuestions: Question[] = [
  {
    id: "gre-v-001",
    section: "verbal",
    type: "text-completion",
    themes: ["text-completion-single"],
    difficulty: "medium",
    text: "The researcher's findings were so _______ that even her harshest critics were forced to acknowledge the validity of her conclusions.",
    choices: ["compelling", "ambiguous", "derivative", "inconsequential", "speculative"],
    correctAnswer: 0,
    explanation: "The sentence indicates that the findings convinced even critics, which means they must have been 'compelling' — powerfully persuasive.",
    source: { name: "Original", type: "original" },
  },
  {
    id: "gre-v-005",
    section: "verbal",
    type: "reading-comprehension",
    themes: ["rc-inference"],
    difficulty: "easy",
    passage: "The concept of 'emotional intelligence' — the ability to recognize, understand, and manage one's own emotions and those of others — has gained significant traction in both academic psychology and corporate training programs. Proponents argue that emotional intelligence is a better predictor of professional success than traditional IQ measures, citing studies showing that managers with high emotional intelligence foster more productive teams. Critics, however, contend that the concept is too broadly defined to be scientifically useful and that many of the studies supporting it suffer from methodological limitations.",
    text: "It can be inferred from the passage that critics of emotional intelligence would most likely agree with which of the following?",
    choices: [
      "Emotional intelligence has no relevance to workplace performance.",
      "The scientific rigor of emotional intelligence research needs improvement.",
      "Traditional IQ measures are the sole predictor of professional success.",
      "Corporate training programs should avoid all references to emotions.",
      "Emotional intelligence cannot be measured under any circumstances.",
    ],
    correctAnswer: 1,
    explanation: "The passage states that critics believe 'many of the studies supporting it suffer from methodological limitations.' This directly implies they think the research needs more scientific rigor.",
    source: { name: "Original", type: "original" },
  },
];

export const greVerbalQuestions: Question[] = [
  ...legacyVerbalQuestions,
  ...greVerbalTCQuestions,
  ...greVerbalTCExpandedQuestions,
  ...greVerbalSEQuestions,
  ...greVerbalSEExpandedQuestions,
  ...greVerbalRCQuestions,
  ...greVerbalRCExpandedQuestions,
];
