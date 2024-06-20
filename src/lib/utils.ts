import { PrismaClient, Problem } from "@prisma/client";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import getSession from "./getSession";
import { redirect } from "next/navigation";
const prisma = new PrismaClient();

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getAllProblems() {
  const problems = await prisma.problem.findMany();
  return problems;
}

export async function authorizeAdminRoute() {
  const session = await getSession();
  const user = session?.user;
  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/admin");
  } else if (user && user.role != "admin") {
    redirect("/not-authorized");
  }
}

export async function authorizeSignedInUser() {
  const session = await getSession();
  const user = session?.user;
  if (!user) {
    redirect("/api/auth/signin?callbackUrl=/app/dashboard");
  }
  return user;
}

export async function getProblemById(id: string) {
  const problem = await prisma.problem.findUnique({
    where: {
      id: id,
    },
  });
  return problem;
}

export async function getUserById(id: string) {
  const problem = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  return problem;
}
