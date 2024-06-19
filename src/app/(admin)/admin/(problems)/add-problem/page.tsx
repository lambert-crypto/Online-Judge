import { auth } from "@/auth";
import AddProblemForm from "@/components/shared/AddProblemForm";

export default async function AdminPage() {
  const session = await auth();
  const user = session?.user;
  if (!user) {
    return (
      <h1 className="flex flex-col justify-center items-center h-screen">
        You are not authorized to view this!
      </h1>
    );
  }
  return (
    <div>
      <AddProblemForm />
    </div>
  );
}
