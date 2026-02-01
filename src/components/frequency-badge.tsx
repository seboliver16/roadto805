interface FrequencyBadgeProps {
  percent?: number;
  frequency: "high" | "medium" | "low";
}

const FREQ_STYLES = {
  high: "bg-red-50 text-red-700",
  medium: "bg-yellow-50 text-yellow-700",
  low: "bg-gray-100 text-gray-600",
};

const FREQ_LABELS = {
  high: "High Frequency",
  medium: "Medium Frequency",
  low: "Low Frequency",
};

export function FrequencyBadge({ percent, frequency }: FrequencyBadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${FREQ_STYLES[frequency]}`}>
      {percent ? `${percent}% of GMAT` : FREQ_LABELS[frequency]}
    </span>
  );
}
