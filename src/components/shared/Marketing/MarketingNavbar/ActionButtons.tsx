import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import React from "react";
import { LuAlignJustify } from "react-icons/lu";
export default function ActionButtons() {
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
        <Button className="text-md" variant="ghost">
          Sign In
        </Button>
        <Button className="text-md bg-blue-500">Get Started</Button>
      </div>
    </>
  );
}
