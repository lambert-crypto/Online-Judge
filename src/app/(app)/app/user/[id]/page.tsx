import { getUserById } from "@/lib/utils";
import Link from "next/link";

type UserProfileProps = {
  params: { id: string };
};

export default async function UserProfile({
  params: { id },
}: UserProfileProps) {
  const user = await getUserById(id);

  if (!user) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
        <h1 className="text-center text-2xl font-bold mb-6">User Not Found</h1>
        <div className="text-center">
          <Link
            href="/app/dashboard"
            className="text-blue-600 hover:text-blue-800"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-center text-3xl font-bold mb-6">User Profile</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Name:</h2>
          <p className="mt-2 p-2 bg-gray-100 rounded">{user.name ?? "N/A"}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Email:</h2>
          <p className="mt-2 p-2 bg-gray-100 rounded">{user.email}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Email Verified:</h2>
          <p className="mt-2 p-2 bg-gray-100 rounded">
            {user.emailVerified
              ? user.emailVerified.toISOString()
              : "Not Verified"}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Role:</h2>
          <p className="mt-2 p-2 bg-gray-100 rounded">
            {user.role == "admin" ? "Admin" : "User"}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Profile Image:</h2>
          {/* {user.image ? (
            <img src={user.image} alt="Profile Image" className="mt-2 w-24 h-24 rounded-full" />
          ) : (
            <p className="mt-2 p-2 bg-gray-100 rounded">No Image</p>
          )} */}
        </div>
        <div>
          <h2 className="text-xl font-semibold">Created At:</h2>
          <p className="mt-2 p-2 bg-gray-100 rounded">
            {user.createdAt.toISOString()}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Updated At:</h2>
          <p className="mt-2 p-2 bg-gray-100 rounded">
            {user.updatedAt.toISOString()}
          </p>
        </div>
      </div>
      <div className="mt-6 text-center">
        <Link
          href="/app/dashboard"
          className="text-blue-600 hover:text-blue-800"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
