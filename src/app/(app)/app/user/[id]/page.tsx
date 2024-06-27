import UserDetails from "@/components/shared/UserDetails";
import getSession from "@/lib/getSession";
import { getUserById } from "@/lib/utils";
import { User } from "@prisma/client";
import Link from "next/link";

type UserProfileProps = {
  params: { id: string };
};

export default async function UserProfile({
  params: { id },
}: UserProfileProps) {
  const user: User | null = await getUserById(id);
  const session = await getSession();
  const authenticatedUser: User | undefined = session?.user as User | undefined;

  if (!user) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-slate-900 text-white rounded-lg shadow-md mt-10">
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
    <div className="bg-slate-700 text-white">
      <UserDetails user={user} authenticatedUser={authenticatedUser} />
    </div>
  );
}
