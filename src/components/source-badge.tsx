import { QuestionSource } from "@/types";

const TYPE_STYLES = {
  official: "bg-green-50 text-green-700 border-green-200",
  community: "bg-blue-50 text-blue-700 border-blue-200",
  original: "bg-gray-50 text-gray-600 border-gray-200",
};

const TYPE_LABELS = {
  official: "Official",
  community: "Community",
  original: "Original",
};

export function SourceBadge({ source }: { source: QuestionSource }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium ${TYPE_STYLES[source.type]}`}
    >
      <span>{TYPE_LABELS[source.type]}</span>
      <span className="text-gray-400">|</span>
      <span>{source.name}</span>
    </span>
  );
}
