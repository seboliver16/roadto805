import { Chapter } from "@/types";

/**
 * GRE Verbal Reasoning Chapters
 *
 * Real GRE Verbal: 27 scored questions across 2 sections
 *   Section 1: 12 questions (18 min) — ~5 TC, ~3 SE, ~4 RC
 *   Section 2: 15 questions (23 min) — ~6 TC, ~4 SE, ~5 RC (adaptive)
 *
 * Question type distribution:
 *   Text Completion:        ~11 questions (41% of verbal)
 *     - Single-blank:       ~6  (22%)
 *     - Double-blank:       ~3  (11%)
 *     - Triple-blank:       ~2  (7%)
 *   Sentence Equivalence:   ~7  (26% of verbal)
 *   Reading Comprehension:  ~9  (33% of verbal)
 *     - Short passages:     ~3-4 questions
 *     - Long passages:      ~5-6 questions
 */
export const greVerbalChapters: Chapter[] = [
  {
    id: "gre-verbal-tc-single",
    section: "verbal",
    title: "Text Completion — Single Blank",
    description: "Master single-blank text completion: identify context clues, signal words (although, despite, moreover), and vocabulary-in-context to select the one word that logically completes the sentence. Covers ~22% of verbal questions.",
    order: 1,
    topics: ["text-completion-single", "vocabulary-in-context"],
    frequency: "high",
    frequencyPercent: 22,
    estimatedMinutes: 30,
    practiceQuestionIds: [
      "gre-tc-001", "gre-tc-002", "gre-tc-003", "gre-tc-004", "gre-tc-005",
      "gre-tc-006", "gre-tc-007", "gre-tc-008", "gre-tc-009", "gre-tc-010",
      "gre-tc-011", "gre-tc-012", "gre-tc-013", "gre-tc-014", "gre-tc-015",
      "gre-tc-exp-001", "gre-tc-exp-002", "gre-tc-exp-003", "gre-tc-exp-004", "gre-tc-exp-005",
      "gre-tc-exp-006", "gre-tc-exp-007", "gre-tc-exp-008", "gre-tc-exp-009", "gre-tc-exp-010",
    ],
  },
  {
    id: "gre-verbal-tc-multi",
    section: "verbal",
    title: "Text Completion — Double & Triple Blank",
    description: "Tackle multi-blank text completion where you must independently choose the best word for each blank. Learn to evaluate blanks in strategic order and handle sentences with 2 or 3 blanks. Covers ~18% of verbal questions.",
    order: 2,
    topics: ["text-completion-double", "text-completion-triple"],
    frequency: "high",
    frequencyPercent: 18,
    estimatedMinutes: 35,
    practiceQuestionIds: [
      "gre-tc-016", "gre-tc-017", "gre-tc-018", "gre-tc-019", "gre-tc-020",
      "gre-tc-021", "gre-tc-022", "gre-tc-023", "gre-tc-024", "gre-tc-025",
      "gre-tc-026", "gre-tc-027", "gre-tc-028", "gre-tc-029", "gre-tc-030",
      "gre-tc-exp-011", "gre-tc-exp-012", "gre-tc-exp-013", "gre-tc-exp-014", "gre-tc-exp-015",
      "gre-tc-exp-016", "gre-tc-exp-017", "gre-tc-exp-018", "gre-tc-exp-019", "gre-tc-exp-020",
      "gre-tc-exp-021", "gre-tc-exp-022", "gre-tc-exp-023", "gre-tc-exp-024", "gre-tc-exp-025",
      "gre-tc-exp-026", "gre-tc-exp-027", "gre-tc-exp-028", "gre-tc-exp-029", "gre-tc-exp-030",
    ],
  },
  {
    id: "gre-verbal-se",
    section: "verbal",
    title: "Sentence Equivalence",
    description: "Find the two answer choices that both complete the sentence meaningfully AND produce sentences with equivalent meaning. Build GRE-level synonym awareness and learn to eliminate trap answers. Covers ~26% of verbal questions.",
    order: 3,
    topics: ["sentence-equivalence", "vocabulary-in-context"],
    frequency: "high",
    frequencyPercent: 26,
    estimatedMinutes: 30,
    practiceQuestionIds: [
      "gre-se-001", "gre-se-002", "gre-se-003", "gre-se-004", "gre-se-005",
      "gre-se-006", "gre-se-007", "gre-se-008", "gre-se-009", "gre-se-010",
      "gre-se-011", "gre-se-012", "gre-se-013", "gre-se-014", "gre-se-015",
      "gre-se-016", "gre-se-017", "gre-se-018", "gre-se-019", "gre-se-020",
      "gre-se-exp-001", "gre-se-exp-002", "gre-se-exp-003", "gre-se-exp-004", "gre-se-exp-005",
      "gre-se-exp-006", "gre-se-exp-007", "gre-se-exp-008", "gre-se-exp-009", "gre-se-exp-010",
      "gre-se-exp-011", "gre-se-exp-012", "gre-se-exp-013", "gre-se-exp-014", "gre-se-exp-015",
      "gre-se-exp-016", "gre-se-exp-017", "gre-se-exp-018", "gre-se-exp-019", "gre-se-exp-020",
    ],
  },
  {
    id: "gre-verbal-rc-short",
    section: "verbal",
    title: "Reading Comprehension — Short Passages & Arguments",
    description: "Analyze short passages (100-200 words) covering science, social science, and humanities. Includes strengthen/weaken argument questions similar to critical reasoning. Covers ~15% of verbal questions.",
    order: 4,
    topics: ["rc-main-idea", "rc-inference", "rc-strengthen-weaken", "rc-vocab-in-passage"],
    frequency: "medium",
    frequencyPercent: 15,
    estimatedMinutes: 30,
    practiceQuestionIds: [
      "gre-rc-001", "gre-rc-002", "gre-rc-003", "gre-rc-004", "gre-rc-005",
      "gre-rc-006", "gre-rc-007", "gre-rc-008", "gre-rc-009", "gre-rc-010",
      "gre-rc-exp-009", "gre-rc-exp-010", "gre-rc-exp-011",
      "gre-rc-exp-012", "gre-rc-exp-013", "gre-rc-exp-014",
      "gre-rc-exp-015", "gre-rc-exp-016", "gre-rc-exp-017",
      "gre-rc-exp-018", "gre-rc-exp-019", "gre-rc-exp-020",
    ],
  },
  {
    id: "gre-verbal-rc-long",
    section: "verbal",
    title: "Reading Comprehension — Long Passages & Analysis",
    description: "Tackle long passages (200-450 words) with multiple questions each. Practice identifying main idea, supporting detail, structure, author's purpose, and select-in-passage questions. Covers ~19% of verbal questions.",
    order: 5,
    topics: ["rc-main-idea", "rc-detail", "rc-structure", "rc-select-sentence"],
    frequency: "high",
    frequencyPercent: 19,
    estimatedMinutes: 40,
    practiceQuestionIds: [
      "gre-rc-011", "gre-rc-012", "gre-rc-013", "gre-rc-014", "gre-rc-015",
      "gre-rc-016", "gre-rc-017", "gre-rc-018", "gre-rc-019", "gre-rc-020",
      "gre-rc-021", "gre-rc-022", "gre-rc-023", "gre-rc-024", "gre-rc-025",
      "gre-rc-026", "gre-rc-027", "gre-rc-028", "gre-rc-029", "gre-rc-030",
      "gre-rc-exp-001", "gre-rc-exp-002", "gre-rc-exp-003", "gre-rc-exp-004",
      "gre-rc-exp-005", "gre-rc-exp-006", "gre-rc-exp-007", "gre-rc-exp-008",
    ],
  },
];
