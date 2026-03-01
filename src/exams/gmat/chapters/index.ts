import { Chapter } from "@/types";
import { quantChapters } from "./quant";
import { verbalChapters } from "./verbal";
import { dataInsightsChapters } from "./data-insights";

export const gmatChapters: Chapter[] = [
  ...quantChapters,
  ...verbalChapters,
  ...dataInsightsChapters,
];

export const gmatChapterMap: Record<string, Chapter> = Object.fromEntries(
  gmatChapters.map((ch) => [ch.id, ch])
);
