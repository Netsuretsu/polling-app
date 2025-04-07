import React from "react";
import Link from "next/link";
import { ModeToggle } from "../theme/theme-toggle";

export default function HeaderLanding() {
  const menuItems = [
    {
      name: "Explorer",
      path: "/explore",
    },
    {
      name: "Documentation",
      path: "/documentation",
    },
  ];

  return (
    <header className="flex items-center justify-between px-4 border-b border-accent w-full h-16">
      <span className="font-bold text-xl">Epi Poll</span>
      <div className="flex-1 flex items-center justify-end gap-4">
        {menuItems.map((item, index) => (
          <Link key={index} href={item.path}>
            <span className="font-semibold">{item.name} </span>
          </Link>
        ))}
        <ModeToggle />
      </div>
    </header>
  );
}
