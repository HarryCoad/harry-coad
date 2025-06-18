import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center text-gray-400 dark:text-zinc-500 py-6 mt-8 border-t-1 border-zinc-700">
      <span className="text-sm">
        &copy; {new Date().getFullYear()} Harry Coad. All rights reserved.
      </span>
    </footer>
  );
};
