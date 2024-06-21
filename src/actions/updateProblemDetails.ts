"use server";
import { Prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

const prisma = Prisma.getPrisma();

const updateProblemDetails = async function (
  userId: string,
  field: string,
  value: string
) {
  "use server";
  await prisma.problem.update({
    where: {
      id: userId,
    },
    data: {
      [field]: value,
    },
  });
  revalidatePath(`/app/user/${userId}`);
};
export default updateProblemDetails;
