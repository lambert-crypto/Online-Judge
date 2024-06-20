import AddProblemForm from "@/components/shared/AddProblemForm";
import { authorizeAdminRoute } from "@/lib/utils";

export default async function AdminPage() {
  await authorizeAdminRoute();
  return (
    <div>
      <AddProblemForm />
    </div>
  );
}
