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
    <div className="flex gap-1 rounded-lg bg-gray-100 p-1">
      {tabs.map((section) => {
        const isActive = value === section;
        return (
          <button
            key={section}
            onClick={() => onChange(section)}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              isActive
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {section === "all" ? "All" : SECTION_SHORT_LABELS[section]}
          </button>
        );
      })}
    </div>
  );
}
