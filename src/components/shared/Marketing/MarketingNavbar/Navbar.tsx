import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import ActionButtons from "./ActionButtons";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-10 border-b h-20">
      <Logo />
      <Navigation />
      <ActionButtons />
    </div>
  );
}
