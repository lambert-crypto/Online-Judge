"use client";

import { Problem } from "@prisma/client";
import Link from "next/link";

type ProblemDescriptionProps = {
  problem: Problem;
};

export default function ProblemDescription({
  problem,
}: ProblemDescriptionProps) {
  return (
    <div className="h-screen overflow-y-auto">
      <div className="max-w-4xl mx-auto p-6 bg-slate-800 rounded-lg shadow-md mt-10">
        <h1 className="text-center text-3xl font-bold mb-6">{problem.title}</h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">Statement:</h2>
            <p className="mt-2 p-2 bg-slate-600 rounded">{problem.statement}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Constraints:</h2>
            <p className="mt-2 p-2 bg-slate-600 rounded">
              {problem.constraints}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Examples:</h2>
            <p className="mt-2 p-2 bg-slate-600 rounded whitespace-pre-wrap">
              {problem.examples}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Time Limit:</h2>
            <p className="mt-2 p-2 bg-slate-600 rounded">
              {problem.timeLimit} ms
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Memory Limit:</h2>
            <p className="mt-2 p-2 bg-slate-600 rounded">
              {problem.memoryLimit} MB
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Difficulty:</h2>
            <p className="mt-2 p-2 bg-slate-600 rounded">
              {problem.difficulty}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Tags:</h2>
            <p className="mt-2 p-2 bg-slate-600 rounded">
              {problem.tags.join(", ")}
            </p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/app/problems"
            className="text-blue-600 hover:text-blue-800"
          >
            Back to Problems
          </Link>
        </div>
      </div>
    </div>
  );
}
