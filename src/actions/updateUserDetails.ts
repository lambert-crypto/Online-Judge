"use server";
import { Prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

const prisma = Prisma.getPrisma();

const updateUserDetails = async function (
  userId: string,
  field: string,
  value: string
) {
  "use server";
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      [field]: value,
    },
  });
  revalidatePath(`/app/user/${userId}`);
};
export default updateUserDetails;
