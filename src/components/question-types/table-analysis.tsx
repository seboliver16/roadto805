"use client";

import { useState, useMemo } from "react";
import { Question, QUESTION_TYPE_LABELS } from "@/types";
import { Badge } from "../badge";
import { SourceBadge } from "../source-badge";

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
    <div className="animate-fade-in">
      {/* Badges */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Badge variant="purple">{QUESTION_TYPE_LABELS[question.type]}</Badge>
        <Badge
          variant={
            question.difficulty === "easy" ? "green" : question.difficulty === "medium" ? "yellow" : "red"
          }
        >
          {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
        </Badge>
      </div>

      {/* Table */}
      {table && (
        <div className="mb-6 overflow-x-auto rounded-xl border bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-gray-50">
                {table.headers.map((header, i) => (
                  <th
                    key={i}
                    onClick={() => handleSort(i)}
                    className="cursor-pointer px-4 py-3 text-left font-semibold text-gray-700 hover:bg-gray-100 transition-colors select-none"
                  >
                    <span className="flex items-center gap-1">
                      {header}
                      {sortCol === i && (
                        <span className="text-xs text-gray-400">{sortAsc ? "▲" : "▼"}</span>
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedRows.map((row, rowIdx) => (
                <tr key={rowIdx} className="border-b last:border-0 hover:bg-gray-50">
                  {row.map((cell, cellIdx) => (
                    <td key={cellIdx} className="px-4 py-2.5 text-gray-700">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-4 py-2 text-xs text-gray-400">
            Click column headers to sort
          </div>
        </div>
      )}

      {/* Question */}
      <div className="mb-6 rounded-xl bg-white p-6 shadow-sm border">
        <p className="text-base leading-relaxed font-medium">{question.text}</p>
      </div>

      {/* Choices */}
      <div className="space-y-3">
        {question.choices.map((choice, i) => {
          let borderColor = "border-gray-200";
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
            borderColor = "border-blue-500";
            bg = "bg-blue-50";
          }

          return (
            <button
              key={i}
              onClick={() => !showResult && onSelectAnswer(i)}
              disabled={showResult}
              className={`w-full rounded-xl border-2 ${borderColor} ${bg} p-4 text-left choice-hover ${
                !showResult ? "hover:border-blue-300 hover:bg-blue-50/50" : ""
              }`}
            >
              <span className="mr-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold">
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

      {/* Explanation */}
      {showResult && (
        <div className="mt-6 space-y-4">
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-6">
            <h3 className="font-semibold text-amber-800 mb-2">Explanation</h3>
            <p className="text-amber-900 text-sm leading-relaxed whitespace-pre-line">
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
