import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { AuthProvider } from "@/lib/auth-context";
import { NavWrapper } from "@/components/nav-wrapper";

export const metadata: Metadata = {
  title: "Road to 805 — GMAT Focus Edition Prep",
  description: "Full GMAT Focus Edition prep with diagnostic tests, study plans, lessons, and AI-powered walkthroughs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/@react-grab/claude-code/dist/client.global.js"
            strategy="lazyOnload"
          />
        )}
      </head>
      <body className="antialiased bg-white text-[#0d0d0d]" style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}>
        <AuthProvider>
          <NavWrapper />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
