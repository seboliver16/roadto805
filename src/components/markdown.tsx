"use client";

import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";

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

export function Markdown({ children, className = "" }: { children: string; className?: string }) {
  return (
    <div className={`prose prose-sm max-w-none ${className}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>
        {stripWrappingCodeFence(children)}
      </ReactMarkdown>
    </div>
  );
}
