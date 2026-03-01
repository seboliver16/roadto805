import { Chapter, Section } from "@/types";
import { quantChapters } from "./quant";
import { verbalChapters } from "./verbal";
import { dataInsightsChapters } from "./data-insights";
import { greChapters } from "@/exams/gre/chapters";

// GMAT chapters (backward compatible)
export const gmatChapterList: Chapter[] = [
  ...quantChapters,
  ...verbalChapters,
  ...dataInsightsChapters,
];

// All chapters across all exams
export const allChapters: Chapter[] = [
  ...gmatChapterList,
  ...greChapters,
];

export const chapterMap: Record<string, Chapter> = Object.fromEntries(
  allChapters.map((ch) => [ch.id, ch])
);

export function getChaptersBySection(section: Section): Chapter[] {
  return allChapters
    .filter((ch) => ch.section === section)
    .sort((a, b) => a.order - b.order);
}

export function getChapterById(id: string): Chapter | undefined {
  return chapterMap[id];
}
