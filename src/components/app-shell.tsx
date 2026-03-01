"use client";

import { useAuth } from "@/lib/auth-context";
import { usePathname } from "next/navigation";
import { Sidebar } from "./sidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const pathname = usePathname();

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
    <div className="lg:pl-[240px]">
      <Sidebar />
      {children}
    </div>
  );
}
