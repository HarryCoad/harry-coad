import React from "react";
import { RssIcon, House } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <RssIcon className="w-16 h-16 mb-6" />
      <h1 className="text-4xl font-bold mb-2">Page Not Found</h1>
      <p className="text-lg text-zinc-500 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href={"/"}
        className="group flex flex-col items-center justify-center gap-2 text-xl hover:text-orange-500 transition-all duration-300 ease-in-out"
      >
        <House className="w-10 h-10 group-hover:animate-bounce group-hover:stroke-orange-500" />
        Return Home
      </Link>
    </div>
  );
}
