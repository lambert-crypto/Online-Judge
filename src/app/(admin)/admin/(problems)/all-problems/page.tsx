import { getAllProblems } from "@/lib/utils";
import ListOfAllProblems from "@/components/shared/ListOfAllProblems";

export default async function AllProblems() {
  const problems = await getAllProblems();
  return (
    <>
      <ListOfAllProblems problems={problems} isAdmin />
    </>
  );
}
