import React from "react";

export default function Footer() {
  return (
    <div
      className="border-t-[1px]
  hidden
  md:block"
    >
      <div className="flex justify-evenly gap-4 p-4">
        <div className="flex flex-col p-4 cursor-pointer text-xl">
          <p>
            @2024 - Made by <span className="font-bold">soppydart</span>
          </p>
        </div>
      </div>
    </div>
  );
}
