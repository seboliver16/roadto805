import { QuestionSource } from "@/types";

const TYPE_LABELS = {
  official: "Official",
  community: "Community",
  original: "Original",
};

export function SourceBadge({ source }: { source: QuestionSource }) {
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full border border-[#e5e7eb] bg-[#f3f4f6] px-2 py-0.5 text-xs font-medium text-[#374151]"
    >
      <span>{TYPE_LABELS[source.type]}</span>
      <span className="text-[#9ca3af]">|</span>
      <span>{source.name}</span>
    </span>
  );
}
