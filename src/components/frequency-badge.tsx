interface FrequencyBadgeProps {
  percent?: number;
  frequency: "high" | "medium" | "low";
}

const FREQ_LABELS = {
  high: "High Frequency",
  medium: "Medium Frequency",
  low: "Low Frequency",
};

export function FrequencyBadge({ percent, frequency }: FrequencyBadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium bg-[#f3f4f6] ${frequency === "low" ? "text-[#6b7280]" : "text-[#374151]"}`}>
      {percent ? `${percent}% of GMAT` : FREQ_LABELS[frequency]}
    </span>
  );
}
