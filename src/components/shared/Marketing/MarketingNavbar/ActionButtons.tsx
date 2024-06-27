import { signIn, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import getSession from "@/lib/getSession";
import Link from "next/link";
import React from "react";
import { LuAlignJustify } from "react-icons/lu";
export default async function ActionButtons() {
  const session = await getSession();
  const user = session?.user;
  return (
    <>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <LuAlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
                  <Link href="">Sign In</Link>
                  <Link href="">Get Started</Link>
                  <Link href="">Features</Link>
                  <Link href="">About</Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:flex md:space-x-4">
        {/* <Button className="text-md" variant="ghost">
          Sign In
        </Button> */}
        {user && (
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button>Sign Out</Button>
          </form>
        )}
        {!user && (
          <>
            <form
              action={async () => {
                "use server";
                await signIn();
              }}
            >
              <Button>Sign In</Button>
            </form>
          </>
        )}
        <Button className="text-md bg-blue-500">Get Started</Button>
        {user && user.image && (
          <Image
            src={user.image}
            width={35}
            height={35}
            alt="Picture of the author"
            className="rounded-full aspect-square object-cover"
          />
        )}
      </div>
    </>
  );
}
