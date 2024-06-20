import { Button } from "@/components/ui/button";
import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";

export default async function Home() {
  const session = await auth();
  const user = session?.user;
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="mt-4">
        {user && (
          <div className="flex flex-col gap-y-5 items-center">
            {user.image && (
              <Image
                src={user.image}
                width={100}
                height={100}
                alt="Picture of the author"
                className="rounded-full aspect-square object-cover"
              />
            )}
            <p>You are signed in as {user.name}.</p>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <Button>Sign Out</Button>
            </form>
          </div>
        )}
        {!user && (
          <>
            <div className="flex flex-col gap-y-5 items-center">
              <p>You are not signed in.</p>
              <form
                action={async () => {
                  "use server";
                  await signIn();
                }}
              >
                <Button>Sign In</Button>
              </form>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
