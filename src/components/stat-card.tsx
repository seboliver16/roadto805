interface StatCardProps {
  label: string;
  value: string | number;
  sublabel?: string;
  accent?: "blue" | "green" | "purple" | "amber";
}

export function StatCard({ label, value, sublabel }: StatCardProps) {
  return (
    <div className="rounded-lg bg-white p-4 border border-[#e5e7eb]">
      <p className="text-sm font-medium text-[#6b7280]">{label}</p>
      <p className="mt-1.5 text-2xl font-bold tracking-tight text-[#0d0d0d]">{value}</p>
      {sublabel && <p className="mt-1 text-xs text-[#9ca3af]">{sublabel}</p>}
    </div>
  );
}
