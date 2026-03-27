import { Chapter } from "@/types";
import { greAWAChapters } from "./awa";
import { greVerbalChapters } from "./verbal";
import { greQuantChapters } from "./quant";

export const greChapters: Chapter[] = [
  ...greAWAChapters,
  ...greVerbalChapters,
  ...greQuantChapters,
];

export const greChapterMap: Record<string, Chapter> = Object.fromEntries(
  greChapters.map((ch) => [ch.id, ch])
);
