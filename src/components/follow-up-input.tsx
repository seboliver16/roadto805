"use client";

import { useState } from "react";

interface FollowUpInputProps {
  onSend: (message: string) => void;
  loading: boolean;
  placeholder?: string;
}

export function FollowUpInput({ onSend, loading, placeholder }: FollowUpInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || loading) return;
    onSend(trimmed);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-3">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder ?? "Ask a follow-up..."}
        disabled={loading}
        className="flex-1 rounded-lg border border-[#e5e7eb] bg-white px-3 py-2 text-sm text-[#374151] placeholder:text-[#9ca3af] focus:outline-none focus:ring-1 focus:ring-[#0d0d0d] disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={loading || !input.trim()}
        className="rounded-lg bg-[#0d0d0d] px-3 py-2 text-sm font-medium text-white hover:bg-[#1a1a1a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
        ) : (
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
        )}
      </button>
    </form>
  );
}
