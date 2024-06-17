import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1>You are not logged in!</h1>
      <div className="mt-4">
        <Button className="mr-2">Log In</Button>
        <Link href="/sign-in">
          <Button>Sign In</Button>
        </Link>
      </div>
    </main>
  );
}
