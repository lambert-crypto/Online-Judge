import { Button } from "@/components/ui/button";
import React from "react";
import { IoSettings } from "react-icons/io5";
import { MdFullscreen } from "react-icons/md";

export default function PreferenceNav() {
  return (
    <div className="flex items-center justify-between bg-slate-950 h-12 w-full">
      <Button variant="ghost">Select Language</Button>
      <div className="flex items-center m-2 gap-x-2">
        <Button>
          <IoSettings />
        </Button>
        <Button>
          <MdFullscreen />
        </Button>
      </div>
    </div>
  );
}
