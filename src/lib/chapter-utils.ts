export interface ChapterSection {
  title: string;
  markdown: string;
  index: number;
}

/**
 * Splits a chapter's raw markdown content into sections using `---` delimiters.
 * Each section gets a title extracted from the first ## header, or "Introduction" for the first section.
 */
export function splitChapterContent(content: string): ChapterSection[] {
  const segments = content.split(/\n---\n/);

  return segments.map((segment, index) => {
    const trimmed = segment.trim();
    if (!trimmed) return { title: `Section ${index + 1}`, markdown: trimmed, index };

    // Extract title from first ## heading
    const h2Match = trimmed.match(/^##\s+(.+)$/m);
    // Or from # heading (for the intro)
    const h1Match = trimmed.match(/^#\s+(.+)$/m);

    let title: string;
    if (index === 0) {
      title = h1Match?.[1] ?? "Introduction";
    } else {
      title = h2Match?.[1] ?? `Section ${index + 1}`;
    }

    return { title, markdown: trimmed, index };
  }).filter((s) => s.markdown.length > 0);
}
