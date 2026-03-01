"use client";

import { useParams, notFound } from "next/navigation";
import { ExamProvider } from "@/exams/exam-context";
import { isValidExam, getExamConfig } from "@/exams/registry";

export default function ExamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const examSlug = params.exam as string;

  if (!isValidExam(examSlug)) {
    notFound();
  }

  const config = getExamConfig(examSlug);

  return <ExamProvider config={config}>{children}</ExamProvider>;
}
