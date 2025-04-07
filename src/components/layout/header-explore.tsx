import React from "react";
import { ModeToggle } from "../theme/theme-toggle";
import { Button } from "../ui/button";

export default function HeaderExplore() {
  return (
    <header className="fixed top-0 flex items-center justify-between px-4 border-b border-[var(--border-color)] w-full h-16 bg-white dark:bg-[#000] ">
      <div className="flex flex-1 justify-end gap-3 items-center">
        <Button className="rounded-full bg-transparent border border-[var(--border-color)] text-gray-900 h-10 dark:text-white hover:bg-transparent">Connexion</Button>
        <ModeToggle />
      </div>
    </header>
  );
}
