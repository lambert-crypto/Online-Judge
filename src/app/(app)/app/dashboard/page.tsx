import Link from "next/link";
import { authorizeSignedInUser } from "@/lib/utils";

export default async function HomePage() {
  const user = await authorizeSignedInUser();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome {user.name}!</h1>
      <div className="flex flex-col gap-y-4 items-center">
        <Link
          href="/app/problems"
          className="text-xl text-blue-600 hover:text-blue-800"
        >
          View All Problems
        </Link>
        {user.id && (
          <Link
            href={`/app/user/${user.id}`}
            className="text-xl text-blue-600 hover:text-blue-800"
          >
            View Profile
          </Link>
        )}
      </div>
    </div>
  );
}
