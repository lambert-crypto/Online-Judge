"use server";
import { Prisma } from "@/lib/db";
import { Difficulty } from "@prisma/client";

const prisma = Prisma.getPrisma();

const addProblem = async function (formData: FormData) {
  "use server";
  const tagsString = formData.get("tags");
  let tagsArray: string[];
  console.log(tagsString);
  tagsArray = [];
  if (tagsString !== "")
    tagsArray = (tagsString + "").split(",").map((tag) => tag.trim());

  await prisma.problem.create({
    data: {
      title: formData.get("title") as string,
      statement: formData.get("statement") as string,
      constraints: formData.get("constraints") as string,
      difficulty: formData.get("difficulty") as Difficulty,
      tags: tagsArray,
    },
  });
};
export default addProblem;
