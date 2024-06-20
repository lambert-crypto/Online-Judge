"use server";
import { Prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

const prisma = Prisma.getPrisma();

const addProblem = async function (problemId: string) {
  "use server";
  await prisma.problem.delete({
    where: {
      id: problemId,
    },
  });
  revalidatePath("/admin/all-problems");
};
export default addProblem;
