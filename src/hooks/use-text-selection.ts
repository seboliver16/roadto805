"use client";

import { useState, useCallback, useRef, useEffect } from "react";

interface UseTextSelectionResult {
  containerRef: React.RefObject<HTMLDivElement | null>;
  selectedText: string;
  tooltipPos: { top: number; left: number } | null;
  clearSelection: () => void;
  handleMouseUp: () => void;
}

export function useTextSelection(): UseTextSelectionResult {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [selectedText, setSelectedText] = useState("");
  const [tooltipPos, setTooltipPos] = useState<{ top: number; left: number } | null>(null);

  const clearSelection = useCallback(() => {
    setTooltipPos(null);
    setSelectedText("");
  }, []);

  const handleMouseUp = useCallback(() => {
    const selection = window.getSelection();
    const text = selection?.toString().trim() ?? "";

    if (text.length < 5) {
      clearSelection();
      return;
    }

    const range = selection?.getRangeAt(0);
    if (!range || !containerRef.current) return;

    if (!containerRef.current.contains(range.commonAncestorContainer)) {
      clearSelection();
      return;
    }

    const rect = range.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    setSelectedText(text);
    setTooltipPos({
      top: rect.bottom - containerRect.top + 8,
      left: Math.min(
        rect.left - containerRect.left + rect.width / 2,
        containerRect.width - 80
      ),
    });
  }, [clearSelection]);

  // Dismiss on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        clearSelection();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [clearSelection]);

  return { containerRef, selectedText, tooltipPos, clearSelection, handleMouseUp };
}
