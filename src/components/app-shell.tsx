"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/lib/auth-context";
import { usePathname } from "next/navigation";
import { Sidebar } from "./sidebar";

const COLLAPSED_KEY = "sidebar-collapsed";

export function AppShell({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  // Restore sidebar collapsed state from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(COLLAPSED_KEY);
    if (stored === "true") setCollapsed(true);
  }, []);

  const toggle = () => {
    setCollapsed((prev) => {
      const next = !prev;
      localStorage.setItem(COLLAPSED_KEY, String(next));
      return next;
    });
  };

  // No sidebar on landing page or when not logged in
  const isLandingPage = pathname === "/";
  const showSidebar = !!user && !isLandingPage;

  // Full-screen mode for mock exam and diagnostic (no sidebar offset)
  const isFullScreen =
    (pathname.includes("/mock") && !pathname.includes("/results")) ||
    (pathname.includes("/diagnostic") && !pathname.includes("/results"));

  if (!showSidebar || isFullScreen) {
    return <>{children}</>;
  }

  return (
    <>
      <Sidebar collapsed={collapsed} onToggle={toggle} />
      <div className={`lg:transition-[margin] lg:duration-200 lg:ease-in-out ${collapsed ? "lg:ml-[60px]" : "lg:ml-[260px]"}`}>
        {children}
      </div>
    </>
  );
}
