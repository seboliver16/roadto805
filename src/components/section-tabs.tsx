"use client";

import { useExamOptional } from "@/exams/exam-context";

interface SectionTabsProps {
  value: string | "all";
  onChange: (section: string | "all") => void;
  showAll?: boolean;
}

export function SectionTabs({ value, onChange, showAll = true }: SectionTabsProps) {
  const exam = useExamOptional();

  const sections: { id: string; label: string }[] = exam
    ? exam.sections.map((s) => ({ id: s.id, label: s.shortLabel }))
    : [
        { id: "quant", label: "Quant" },
        { id: "verbal", label: "Verbal" },
        { id: "data-insights", label: "DI" },
      ];

  return (
    <div className="flex gap-1 border-b border-[#e5e7eb]">
      {showAll && (
        <button
          onClick={() => onChange("all")}
          className={`px-3 py-1.5 text-sm font-medium transition-colors -mb-px ${
            value === "all"
              ? "text-[#0d0d0d] border-b-2 border-[#0d0d0d]"
              : "text-[#6b7280] hover:text-[#0d0d0d]"
          }`}
        >
          All
        </button>
      )}
      {sections.map((section) => {
        const isActive = value === section.id;
        return (
          <button
            key={section.id}
            onClick={() => onChange(section.id)}
            className={`px-3 py-1.5 text-sm font-medium transition-colors -mb-px ${
              isActive
                ? "text-[#0d0d0d] border-b-2 border-[#0d0d0d]"
                : "text-[#6b7280] hover:text-[#0d0d0d]"
            }`}
          >
            {section.label}
          </button>
        );
      })}
    </div>
  );
}
