"use client";

import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import React from "react";

export const ThemeToggle: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const { setTheme, resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const handleToggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";

    setTheme(newTheme);
  };

  return (
    <button onClick={handleToggleTheme} className={className}>
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.svg
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            width={25}
            height={25}
            className="stroke-white fill-none stroke-2"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </motion.svg>
        ) : (
          <motion.svg
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            width={25}
            height={25}
            className="stroke-black fill-none stroke-2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a7 7 0 1 0 10 10" />
          </motion.svg>
        )}
      </AnimatePresence>
    </button>
  );
};
