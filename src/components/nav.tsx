"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth-context";

const NAV_LINKS = [
  { href: "/learn", label: "Learn" },
  { href: "/practice", label: "Practice" },
  { href: "/review", label: "Review" },
];

export function Nav() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!user) return null;

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 transition-shadow duration-200 ${
        scrolled ? "shadow-subtle" : ""
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          Road to <span className="text-blue-600">805</span>
        </Link>

        <nav className="flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
            {user.displayName?.[0]?.toUpperCase() ?? "U"}
          </div>
          <button
            onClick={logout}
            className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            Sign out
          </button>
        </div>
      </div>
    </header>
  );
}
