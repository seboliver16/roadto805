import { Chapter } from "@/types";

/**
 * GRE Analytical Writing Chapters
 *
 * Real GRE AWA: 2 essay tasks, 30 minutes each
 *   Task 1: "Analyze an Issue" — take a position on a claim
 *   Task 2: "Analyze an Argument" — critique someone else's argument
 *
 * Scored on 0–6 scale (half-point increments) by human raters + e-rater
 */
export const greAWAChapters: Chapter[] = [
  {
    id: "gre-awa-issue",
    section: "awa",
    title: "Analytical Writing — Issue Essay",
    description: "Learn to write a compelling 'Analyze an Issue' essay: take a clear position on a claim, develop 2-3 supporting examples, address counterarguments, and structure your response for the 0-6 GRE scoring rubric. 30 minutes per task.",
    order: 1,
    topics: [],
    frequency: "high",
    frequencyPercent: 50,
    estimatedMinutes: 40,
    practiceQuestionIds: [
      "gre-awa-issue-001", "gre-awa-issue-002", "gre-awa-issue-003",
      "gre-awa-issue-004", "gre-awa-issue-005", "gre-awa-issue-006",
      "gre-awa-issue-007", "gre-awa-issue-008", "gre-awa-issue-009",
      "gre-awa-issue-010",
    ],
  },
  {
    id: "gre-awa-argument",
    section: "awa",
    title: "Analytical Writing — Argument Essay",
    description: "Master the 'Analyze an Argument' task: identify logical flaws, unstated assumptions, and insufficient evidence in someone else's argument. Learn to critique without taking a personal position. 30 minutes per task.",
    order: 2,
    topics: [],
    frequency: "high",
    frequencyPercent: 50,
    estimatedMinutes: 40,
    practiceQuestionIds: [
      "gre-awa-arg-001", "gre-awa-arg-002", "gre-awa-arg-003",
      "gre-awa-arg-004", "gre-awa-arg-005", "gre-awa-arg-006",
      "gre-awa-arg-007", "gre-awa-arg-008", "gre-awa-arg-009",
      "gre-awa-arg-010",
    ],
  },
];
