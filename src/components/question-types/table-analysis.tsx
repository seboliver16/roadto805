"use client";

import { useState, useMemo } from "react";
import { Question, QUESTION_TYPE_LABELS } from "@/types";
import { Badge } from "../badge";
import { SourceBadge } from "../source-badge";
import { SelectablePassage } from "../selectable-passage";

interface Props {
  question: Question;
  selectedAnswer: number | null;
  showResult: boolean;
  onSelectAnswer: (index: number) => void;
}

export function TableAnalysis({ question, selectedAnswer, showResult, onSelectAnswer }: Props) {
  const table = question.tableData;
  const [sortCol, setSortCol] = useState<number | null>(null);
  const [sortAsc, setSortAsc] = useState(true);

  const sortedRows = useMemo(() => {
    if (!table || sortCol === null) return table?.rows ?? [];
    const rows = [...table.rows];
    rows.sort((a, b) => {
      const valA = a[sortCol] ?? "";
      const valB = b[sortCol] ?? "";
      const numA = parseFloat(valA.replace(/[^0-9.-]/g, ""));
      const numB = parseFloat(valB.replace(/[^0-9.-]/g, ""));
      if (!isNaN(numA) && !isNaN(numB)) {
        return sortAsc ? numA - numB : numB - numA;
      }
      return sortAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
    });
    return rows;
  }, [table, sortCol, sortAsc]);

  const handleSort = (colIndex: number) => {
    if (sortCol === colIndex) {
      setSortAsc((v) => !v);
    } else {
      setSortCol(colIndex);
      setSortAsc(true);
    }
  };

  return (
    <div>
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <Badge variant="purple">{QUESTION_TYPE_LABELS[question.type]}</Badge>
        <Badge
          variant={
            question.difficulty === "easy" ? "green" : question.difficulty === "medium" ? "yellow" : "red"
          }
        >
          {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
        </Badge>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-4 lg:items-start">
        {table && (
          <div className="mb-3 lg:mb-0 lg:w-1/2 overflow-x-auto rounded-lg border border-[#e5e7eb] bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#e5e7eb] bg-[#fafafa]">
                  {table.headers.map((header, i) => (
                    <th
                      key={i}
                      onClick={() => handleSort(i)}
                      className="cursor-pointer px-4 py-2.5 text-left font-semibold text-[#374151] hover:bg-[#f3f4f6] transition-colors select-none"
                    >
                      <span className="flex items-center gap-1">
                        {header}
                        {sortCol === i && (
                          <span className="text-xs text-[#9ca3af]">{sortAsc ? "▲" : "▼"}</span>
                        )}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sortedRows.map((row, rowIdx) => (
                  <tr key={rowIdx} className="border-b border-[#e5e7eb] last:border-0 hover:bg-[#fafafa]">
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="px-4 py-2 text-[#374151]">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-4 py-2 text-xs text-[#9ca3af]">
              Click column headers to sort
            </div>
          </div>
        )}

        <div className={table ? "lg:w-1/2" : "w-full"}>
          <div className="mb-3 rounded-lg bg-white p-4 border border-[#e5e7eb]">
            <SelectablePassage passage={question.text} className="text-base font-medium" />
          </div>

          <div className="space-y-1.5">
            {question.choices.map((choice, i) => {
              let borderColor = "border-[#e5e7eb]";
              let bg = "bg-white";

              if (showResult) {
                if (i === question.correctAnswer) {
                  borderColor = "border-green-500";
                  bg = "bg-green-50";
                } else if (i === selectedAnswer && i !== question.correctAnswer) {
                  borderColor = "border-red-500";
                  bg = "bg-red-50";
                }
              } else if (selectedAnswer === i) {
                borderColor = "border-[#0d0d0d]";
                bg = "bg-[#fafafa]";
              }

              return (
                <button
                  key={i}
                  onClick={() => !showResult && onSelectAnswer(i)}
                  disabled={showResult}
                  className={`w-full rounded-md border ${borderColor} ${bg} p-2.5 text-left transition-colors ${
                    !showResult ? "hover:bg-[#fafafa]" : ""
                  }`}
                >
                  <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#f3f4f6] text-xs font-semibold">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="text-sm">{choice}</span>
                  {showResult && i === question.correctAnswer && (
                    <span className="ml-2 text-sm font-medium text-green-600">Correct</span>
                  )}
                  {showResult && i === selectedAnswer && i !== question.correctAnswer && (
                    <span className="ml-2 text-sm font-medium text-red-600">Your answer</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {showResult && (
        <div className="mt-3 space-y-3">
          <div className="rounded-lg bg-[#fafafa] border border-[#e5e7eb] p-4">
            <h3 className="font-semibold text-[#0d0d0d] mb-2">Explanation</h3>
            <p className="text-[#374151] text-sm leading-relaxed whitespace-pre-line">
              {question.explanation}
            </p>
          </div>
          <div className="flex justify-end">
            <SourceBadge source={question.source} />
          </div>
        </div>
      )}
    </div>
  );
}
