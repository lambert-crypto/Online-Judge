import Link from "next/link";
import { getAllProblems } from "@/lib/utils";

export default async function AllProblems() {
  const problems = await getAllProblems();

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-8">
      <h1 className="text-3xl font-bold mb-6">All Problems</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
        {problems.length > 0 ? (
          <ul className="space-y-4">
            {problems.map((problem, index) => (
              <li
                key={problem.id}
                className="border-b border-gray-200 pb-4 flex items-center justify-between"
              >
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div className="mr-4 text-gray-600">{index + 1}.</div>
                    <Link
                      href={`/app/problems/${problem.id}`}
                      className="text-xl font-semibold text-blue-600 hover:text-blue-800"
                    >
                      {problem.title}
                    </Link>
                  </div>
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
                <Link
                  href={`/app/problems/${problem.id}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No problems found.</p>
        )}
      </div>
      <Link
        href="/app/dashboard"
        className="text-blue-600 hover:text-blue-800 mt-5"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}
