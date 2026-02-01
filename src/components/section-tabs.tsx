"use client";

import { Section, SECTION_SHORT_LABELS } from "@/types";

interface SectionTabsProps {
  value: Section | "all";
  onChange: (section: Section | "all") => void;
  showAll?: boolean;
}

const SECTIONS: (Section | "all")[] = ["all", "quant", "verbal", "data-insights"];

export function SectionTabs({ value, onChange, showAll = true }: SectionTabsProps) {
  const tabs = showAll ? SECTIONS : SECTIONS.filter((s) => s !== "all");

  return (
    <div className="flex gap-1 border-b border-[#e5e7eb]">
      {tabs.map((section) => {
        const isActive = value === section;
        return (
          <button
            key={section}
            onClick={() => onChange(section)}
            className={`px-3 py-1.5 text-sm font-medium transition-colors -mb-px ${
              isActive
                ? "text-[#0d0d0d] border-b-2 border-[#0d0d0d]"
                : "text-[#6b7280] hover:text-[#0d0d0d]"
            }`}
          >
            {section === "all" ? "All" : SECTION_SHORT_LABELS[section]}
          </button>
        );
      })}
    </div>
  );
}
