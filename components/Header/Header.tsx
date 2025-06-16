"use client";

import React from "react";
import { House, User, FolderKanban, Headset } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const sections = [
  { label: "About me", icon: User, section: "about" },
  { label: "Work", icon: FolderKanban, section: "work" },
  { label: "Contact", icon: Headset, section: "contact" },
];

const ICON_SIZE = 25;

export const Header = () => {
  return (
    <div className="sticky z-10 backdrop-blur-md top-0 flex items-center justify-center border-b-1 border-zinc-700 w-full">
      <header className="container grid grid-cols-3 gap-4 py-4  max-w-[800px]">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <House size={ICON_SIZE} className="hover:stroke-orange-800" />
        </button>
        {/* <Link href={"/"}>
          <House size={ICON_SIZE} />
        </Link> */}

        <nav>
          <ul className="flex gap-10 items-center justify-center">
            {sections.map((item, i) => (
              <Link key={i} href={`#${item.section}`}>
                <li title={item.label}>
                  <item.icon
                    size={ICON_SIZE}
                    className="hover:stroke-orange-800"
                  />
                </li>
              </Link>
            ))}
          </ul>
        </nav>

        <ThemeToggle className="justify-self-end" />
      </header>
    </div>
  );
};
