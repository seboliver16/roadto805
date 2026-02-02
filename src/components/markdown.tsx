"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import dynamic from "next/dynamic";
import type { ChartData } from "@/types";

const ChartRenderer = dynamic(
  () => import("./chart-renderer").then((m) => ({ default: m.ChartRenderer })),
  { ssr: false, loading: () => <div className="h-[280px] rounded-lg bg-[#fafafa] animate-pulse" /> }
);

/**
 * Strip wrapping code fences that LLMs sometimes add around markdown responses.
 * Detects when the entire string is a single ```...``` block and unwraps it.
 */
function stripWrappingCodeFence(raw: string): string {
  const trimmed = raw.trim();
  // Match: starts with ``` (optional language tag), ends with ```
  const match = trimmed.match(/^```(?:markdown|md|text)?\s*\n([\s\S]*?)\n```\s*$/);
  if (match) return match[1];
  return trimmed;
}

function tryParseChartData(raw: string): ChartData | null {
  try {
    const parsed = JSON.parse(raw.trim());
    if (parsed && typeof parsed === "object" && parsed.type && parsed.series) {
      return parsed as ChartData;
    }
  } catch {
    // not valid chart JSON
  }
  return null;
}

export function Markdown({ children, className = "" }: { children: string; className?: string }) {
  return (
    <div className={`prose prose-sm max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={{
          pre({ children: preChildren }) {
            // Check if the child is a chart code block — if so, render without <pre> wrapper
            if (React.isValidElement(preChildren)) {
              const props = preChildren.props as { className?: string; children?: React.ReactNode };
              if (props?.className === "language-chart") {
                const chartData = tryParseChartData(String(props.children ?? ""));
                if (chartData) {
                  return (
                    <div className="not-prose my-4 rounded-lg border border-[#e5e7eb] bg-white p-4">
                      {chartData.title && (
                        <p className="mb-2 text-center text-sm font-medium text-[#374151]">{chartData.title}</p>
                      )}
                      <ChartRenderer chartData={chartData} />
                    </div>
                  );
                }
              }
            }
            return <pre>{preChildren}</pre>;
          },
        }}
      >
        {stripWrappingCodeFence(children)}
      </ReactMarkdown>
    </div>
  );
}
