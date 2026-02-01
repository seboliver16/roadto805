"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth-context";

const NAV_LINKS = [
  { href: "/learn", label: "Learn" },
  { href: "/practice", label: "Practice" },
  { href: "/review", label: "Review" },
  { href: "/study-guide", label: "Study Guide" },
];

export function Nav() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#e5e7eb]">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-[#0d0d0d]">
          Road to <span className="font-bold">805</span>
        </Link>

        <nav className="flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`px-4 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#0d0d0d] border-b-2 border-[#0d0d0d]"
                    : "text-[#6b7280] hover:text-[#0d0d0d]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0d0d0d] text-xs font-bold text-white">
            {user.displayName?.[0]?.toUpperCase() ?? "U"}
          </div>
          <button
            onClick={logout}
            className="text-sm text-[#6b7280] hover:text-[#0d0d0d] transition-colors"
          >
            Sign out
          </button>
        </div>
      </div>
    </header>
  );
}
