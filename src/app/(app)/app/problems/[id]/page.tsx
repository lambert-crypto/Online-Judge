import { getProblemById } from "@/lib/utils";
import Link from "next/link";

export default async function ProblemPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const problem = await getProblemById(id);
  if (!problem) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
        <h1 className="text-center text-2xl font-bold mb-6">
          Problem Not Found
        </h1>
        <div className="text-center">
          <Link
            href="/app/problems"
            className="text-blue-600 hover:text-blue-800"
          >
            Back to Problems
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-center text-3xl font-bold mb-6">{problem.title}</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Statement:</h2>
          <p className="mt-2 p-2 bg-gray-100 rounded">{problem.statement}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Constraints:</h2>
          <p className="mt-2 p-2 bg-gray-100 rounded">{problem.constraints}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Examples:</h2>
          <p className="mt-2 p-2 bg-gray-100 rounded whitespace-pre-wrap">
            {problem.examples}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Time Limit:</h2>
          <p className="mt-2 p-2 bg-gray-100 rounded">{problem.timeLimit} ms</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Memory Limit:</h2>
          <p className="mt-2 p-2 bg-gray-100 rounded">
            {problem.memoryLimit} MB
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Difficulty:</h2>
          <p className="mt-2 p-2 bg-gray-100 rounded">{problem.difficulty}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Tags:</h2>
          <p className="mt-2 p-2 bg-gray-100 rounded">
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
  );
}
