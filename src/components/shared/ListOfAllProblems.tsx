"use client";

import deleteProblemAction from "@/actions/deleteProblemAction";
import { Problem } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { FaTrash } from "react-icons/fa";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../ui/dialog";
import updateProblemDetails from "@/actions/updateProblemDetails"; // Create this action similar to updateUserDetails
import { useState } from "react";

type ProblemListProps = {
  problems: Problem[];
  isAdmin?: boolean;
};

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
                  <EditableProblemField
                    label="Title"
                    value={problem.title}
                    field="title"
                    isEditable={isAdmin}
                    id={problem.id}
                  />
                  <EditableProblemField
                    label="Statement"
                    value={problem.statement}
                    field="statement"
                    isEditable={isAdmin}
                    id={problem.id}
                  />
                  <EditableProblemField
                    label="Constraints"
                    value={problem.constraints}
                    field="constraints"
                    isEditable={isAdmin}
                    id={problem.id}
                  />
                  <EditableProblemField
                    label="Examples"
                    value={problem.examples}
                    field="examples"
                    isEditable={isAdmin}
                    id={problem.id}
                  />
                  <EditableProblemField
                    label="Time Limit"
                    value={`${problem.timeLimit} ms`}
                    field="timeLimit"
                    isEditable={isAdmin}
                    id={problem.id}
                  />
                  <EditableProblemField
                    label="Memory Limit"
                    value={`${problem.memoryLimit} MB`}
                    field="memoryLimit"
                    isEditable={isAdmin}
                    id={problem.id}
                  />
                  <EditableProblemField
                    label="Tags"
                    value={problem.tags.join(", ")}
                    field="tags"
                    isEditable={isAdmin}
                    id={problem.id}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    <span className="font-medium">Difficulty:</span>{" "}
                    {problem.difficulty}
                  </p>
                </div>
                {isAdmin && (
                  <div className="flex items-center">
                    <form
                      action={() => {
                        deleteProblemAction(problem.id);
                      }}
                    >
                      <button
                        className="text-red-600 hover:text-red-800 ml-4"
                        aria-label="Delete problem"
                      >
                        <FaTrash size={24} />
                      </button>
                    </form>
                  </div>
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

type EditableProblemFieldProps = {
  label: string;
  value: string;
  field: string;
  isEditable: Boolean;
  id: string;
};

function EditableProblemField({
  label,
  value,
  field,
  isEditable,
  id,
}: EditableProblemFieldProps) {
  const [fieldValue, setFieldValue] = useState(value);
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-xl font-semibold">{label}:</h2>
        <p className="mt-2 p-2 bg-gray-100 rounded">{value}</p>
      </div>
      {isEditable && (
        <Dialog>
          <DialogTrigger className="ml-4 text-blue-600 hover:text-blue-800">
            Edit
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Edit {label}</DialogTitle>
            <DialogDescription>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  await updateProblemDetails(id, field, fieldValue);
                }}
              >
                <input
                  type="text"
                  name={field}
                  value={fieldValue}
                  onChange={(e) => {
                    setFieldValue(e.target.value);
                  }}
                  className="mt-2 p-2 border rounded w-full"
                />
                <DialogClose
                  type="submit"
                  className="mt-4 text-white px-4 py-2 rounded bg-slate-950"
                >
                  Save
                </DialogClose>
              </form>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
