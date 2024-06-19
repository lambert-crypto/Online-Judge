"use client";

import { Problem } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { FaTrash } from "react-icons/fa";

type ProblemListProps = {
  problems: Problem[];
  isAdmin?: boolean;
};

async function deleteProblem(id: string) {
  //TODO: implement a server action with optimistic ui update
  //   await fetch(`/api/problems/${id}`, {
  //     method: "DELETE",
  //   });
}

export default function ListOfAllProblems({
  problems,
  isAdmin = false,
}: ProblemListProps) {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-8">
      <h1 className="text-3xl font-bold mb-6">All Problems</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
        {problems.length > 0 ? (
          <ul className="space-y-8">
            {problems.map((problem) => (
              <li
                key={problem.id}
                className="border-b border-gray-200 pb-4 flex justify-between items-center"
              >
                <div>
                  <h2 className="text-2xl font-semibold mb-2">
                    {problem.title}
                  </h2>
                  <div className="mb-4">
                    <h3 className="text-lg font-medium text-gray-700">
                      Statement
                    </h3>
                    <p className="text-gray-600">{problem.statement}</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-lg font-medium text-gray-700">
                      Constraints
                    </h3>
                    <p className="text-gray-600">{problem.constraints}</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-lg font-medium text-gray-700">Tags</h3>
                    <div className="mt-2 flex flex-wrap">
                      {problem.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-sm bg-blue-100 text-blue-800 rounded-full px-3 py-1 mr-2 mb-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    <span className="font-medium">Difficulty:</span>{" "}
                    {problem.difficulty}
                  </p>
                </div>
                {isAdmin && (
                  <button
                    onClick={() => deleteProblem(problem.id)}
                    className="text-red-600 hover:text-red-800 ml-4"
                    aria-label="Delete problem"
                  >
                    <FaTrash size={24} />
                  </button>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No problems found.</p>
        )}
      </div>
      <Link href="/admin" className="mt-6 text-blue-600 hover:text-blue-800">
        Back to Admin Panel
      </Link>
    </div>
  );
}
