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
    <div className="flex items-center justify-center border-b-1 border-zinc-700 w-full">
      <header className="container grid grid-cols-3 gap-4 py-4">
        <Link href={"/"}>
          <House size={ICON_SIZE} />
        </Link>

        <nav>
          <ul className="flex gap-10 items-center justify-center">
            {sections.map((item, i) => (
              <Link key={i} href={`#${item.section}`}>
                <li title={item.label}>
                  <item.icon size={ICON_SIZE} />
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
