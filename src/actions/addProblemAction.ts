"use server"
import { Difficulty, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const addProblem = async function(formData: FormData) {
    "use server"
    const tagsString = formData.get("tags");
    let tagsArray : string[]
    console.log(tagsString)
    tagsArray = []
    if(tagsString !== "")
    tagsArray = (tagsString+"").split(",").map((tag) => tag.trim())

    await prisma.problem.create({
      data: {
        title: formData.get("title") as string,
        statement: formData.get("statement") as string, 
        constraints: formData.get("constraints") as string,
        difficulty: formData.get("difficulty") as Difficulty,
        tags: tagsArray,
      },
    });
}
export default addProblem;
