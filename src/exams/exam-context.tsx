"use client";

import { createContext, useContext } from "react";
import { ExamConfig } from "./types";

const ExamContext = createContext<ExamConfig | null>(null);

export function ExamProvider({
  config,
  children,
}: {
  config: ExamConfig;
  children: React.ReactNode;
}) {
  return <ExamContext.Provider value={config}>{children}</ExamContext.Provider>;
}

export function useExam(): ExamConfig {
  const config = useContext(ExamContext);
  if (!config) {
    throw new Error("useExam must be used within an ExamProvider");
  }
  return config;
}

export function useExamOptional(): ExamConfig | null {
  return useContext(ExamContext);
}
