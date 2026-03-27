"use client";

/**
 * GRE-style instruction banner displayed at the top of each question.
 * Matches the gray banner seen in the actual GRE interface.
 */
export function InstructionBanner({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 rounded-lg bg-[#f0f0f0] border border-[#d4d4d4] px-4 py-3">
      <p className="text-sm text-[#374151] leading-relaxed">{children}</p>
    </div>
  );
}

/**
 * Footer indicator shown at the bottom of answer choices.
 * Matches "Select one answer choice." / "Select two answer choices." etc.
 */
export function SelectionFooter({ text }: { text: string }) {
  return (
    <div className="mt-4 flex justify-center">
      <span className="rounded bg-[#e5e7eb] px-4 py-1.5 text-sm text-[#374151] font-medium">
        {text}
      </span>
    </div>
  );
}
