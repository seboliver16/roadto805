import { Chapter } from "@/types";
import { greVerbalChapters } from "./verbal";
import { greQuantChapters } from "./quant";

export const greChapters: Chapter[] = [
  ...greVerbalChapters,
  ...greQuantChapters,
];

export const greChapterMap: Record<string, Chapter> = Object.fromEntries(
  greChapters.map((ch) => [ch.id, ch])
);
