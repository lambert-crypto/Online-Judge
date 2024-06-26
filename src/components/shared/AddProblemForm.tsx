"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import addProblem from "@/actions/addProblemAction";

export default function AddProblemForm() {
  const [title, setTitle] = useState<string>("");
  const [statement, setStatement] = useState<string>("");
  const [constraints, setConstraints] = useState<string>("");
  const [examples, setExamples] = useState<string>("");
  const [timeLimit, setTimeLimit] = useState<number>(0);
  const [memoryLimit, setMemoryLimit] = useState<number>(0);
  const [difficulty, setDifficulty] = useState<string>("EASY");
  const [tags, setTags] = useState<string>("");

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-center text-2xl font-bold mb-6">Add a New Problem</h1>
      <form
        action={async (formData) => {
          await addProblem(formData);
          setTitle("");
          setStatement("");
          setConstraints("");
          setExamples("");
          setTimeLimit(0);
          setMemoryLimit(0);
          setDifficulty("EASY");
          setTags("");
        }}
        className="space-y-4 max-w-md mx-auto"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title:
          </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Statement:
          </label>
          <textarea
            value={statement}
            name="statement"
            onChange={(e) => setStatement(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Constraints:
          </label>
          <textarea
            value={constraints}
            name="constraints"
            onChange={(e) => setConstraints(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Examples:
          </label>
          <textarea
            value={examples}
            name="examples"
            onChange={(e) => setExamples(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Time Limit (ms):
          </label>
          <input
            type="number"
            name="timeLimit"
            value={timeLimit}
            onChange={(e) => setTimeLimit(parseInt(e.target.value))}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Memory Limit (MB):
          </label>
          <input
            type="number"
            name="memoryLimit"
            value={memoryLimit}
            onChange={(e) => setMemoryLimit(parseInt(e.target.value))}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Difficulty:
          </label>
          <select
            name="difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="EASY">Easy</option>
            <option value="MEDIUM">Medium</option>
            <option value="HARD">Hard</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tags (comma separated):
          </label>
          <input
            type="text"
            name="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <Button
          type="submit"
          className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Add Problem
        </Button>
      </form>
      <div className="mt-6 text-center">
        <Link href="/admin" className="text-blue-600 hover:text-blue-800">
          Back to Admin Panel
        </Link>
      </div>
    </div>
  );
}
