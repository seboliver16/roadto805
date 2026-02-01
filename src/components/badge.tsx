interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "blue" | "green" | "red" | "yellow" | "purple";
  size?: "sm" | "md";
}

const VARIANT_STYLES = {
  default: "bg-gray-100 text-gray-700",
  blue: "bg-blue-50 text-blue-700",
  green: "bg-green-50 text-green-700",
  red: "bg-red-50 text-red-700",
  yellow: "bg-yellow-50 text-yellow-700",
  purple: "bg-purple-50 text-purple-700",
};

const SIZE_STYLES = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
};

export function Badge({ children, variant = "default", size = "sm" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${VARIANT_STYLES[variant]} ${SIZE_STYLES[size]}`}
    >
      {children}
    </span>
  );
}
