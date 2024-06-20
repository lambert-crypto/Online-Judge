import { authorizeAdminRoute, getAllProblems } from "@/lib/utils";
import ListOfAllProblems from "@/components/shared/ListOfAllProblems";

export default async function AllProblems() {
  await authorizeAdminRoute();
  const problems = await getAllProblems();
  return (
    <>
      <ListOfAllProblems problems={problems} isAdmin />
    </>
  );
}
