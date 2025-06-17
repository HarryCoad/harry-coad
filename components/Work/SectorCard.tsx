import React from "react";
import {
  PiggyBank,
  ShoppingBasket,
  MessageSquareText,
  BadgePlus,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const iconMap = {
  PiggyBank,
  ShoppingBasket,
  MessageSquareText,
  BadgePlus,
};

export type WorkIcon = keyof typeof iconMap;

type SectorCardProps = {
  title: string;
  icon: WorkIcon;
  description: string;
  expanded: boolean | null;
};

export const SectorCard: React.FC<SectorCardProps> = ({
  title,
  icon,
  description,
  expanded,
}) => {
  const Icon = iconMap[icon] || null;

  return (
    <div
      key={title}
      className="bg-zinc-100 hover:bg-zinc-200/20 dark:bg-zinc-800 dark:hover:bg-zinc-800/90 transition-colors border-1 border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-lg h-full"
    >
      <motion.div
        layout="position"
        layoutId={title}
        className="h-full"
        transition={{ delay: 0.2 }}
      >
        <div className="relative flex flex-col items-center justify-center h-full p-4">
          {!!Icon && (
            <motion.div
              layout="position"
              layoutId={title + "-icon"}
              transition={{ delay: 0.2 }}
            >
              <Icon className="w-15 h-15 sm:w-20 sm:h-20 mb-2 stroke-1 justify-self-center" />
            </motion.div>
          )}
          <AnimatePresence>
            {(expanded || expanded === null) && (
              <motion.h3
                layout="position"
                layoutId={title + "-heading"}
                transition={{ delay: 0.2 }}
                key="fade-heading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0, ease: "easeInOut", delay: 0 },
                }}
              >
                {title}
              </motion.h3>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {expanded && (
              <motion.p
                key="fade-description"
                className="text-sm text-center mt-2"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.5,
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0, ease: "easeInOut" },
                }}
              >
                {description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
