"use server"
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const addUser = async function addUser(formData: FormData) {
  "use server"

    const user = await prisma.user.create({
      data: {
        email: formData.get("email") as string,
        password_hash: formData.get("password") as string, 
        name: formData.get("name") as string,
        organization: formData.get("organization") as string,
      },
    });
}
export default addUser;
