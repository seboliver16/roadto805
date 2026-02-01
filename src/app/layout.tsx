import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/auth-context";
import { NavWrapper } from "@/components/nav-wrapper";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} antialiased bg-white text-[#0d0d0d]`}>
        <AuthProvider>
          <NavWrapper />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
