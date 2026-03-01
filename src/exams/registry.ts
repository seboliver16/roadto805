import { Question, Chapter } from "@/types";
import { ExamConfig } from "./types";
import { gmatConfig } from "./gmat/config";
import { gmatQuestions } from "./gmat/questions";
import { gmatChapters } from "./gmat/chapters";
import { greConfig } from "./gre/config";
import { greQuestions } from "./gre/questions";
import { greChapters } from "./gre/chapters";

const examConfigs: Record<string, ExamConfig> = {
  gmat: gmatConfig,
  gre: greConfig,
};

const examQuestions: Record<string, Question[]> = {
  gmat: gmatQuestions,
  gre: greQuestions,
};

const examChapters: Record<string, Chapter[]> = {
  gmat: gmatChapters,
  gre: greChapters,
};

export function getExamConfig(slug: string): ExamConfig {
  const config = examConfigs[slug];
  if (!config) {
    throw new Error(`Unknown exam: ${slug}. Available: ${Object.keys(examConfigs).join(", ")}`);
  }
  return config;
}

export function getAllExams(): ExamConfig[] {
  return Object.values(examConfigs);
}

export function getExamSlugs(): string[] {
  return Object.keys(examConfigs);
}

export function isValidExam(slug: string): boolean {
  return slug in examConfigs;
}

export function registerExam(config: ExamConfig, questions?: Question[], chapters?: Chapter[]) {
  examConfigs[config.slug] = config;
  if (questions) examQuestions[config.slug] = questions;
  if (chapters) examChapters[config.slug] = chapters;
}

export function getExamQuestions(slug: string): Question[] {
  return examQuestions[slug] ?? [];
}

export function getExamChapters(slug: string): Chapter[] {
  return examChapters[slug] ?? [];
}
