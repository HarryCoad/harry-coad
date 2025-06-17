"use client";

import React, { useRef, useState } from "react";
import { SectorCard, WorkIcon } from "./SectorCard";
import clsx from "clsx";
import { useClickedOutsideDetector } from "@/hooks/useClickedOutsideDetector";
import { motion } from "motion/react";

export const Work = () => {
  const [expanded, setExpanded] = useState<[number, number] | null>(null);

  const ref = useRef<HTMLDivElement>(null);

  useClickedOutsideDetector(ref, () => setExpanded(null));

  const getSpanStyle = (x: number, y: number) => {
    const [xExpanded, yExpanded] = expanded || [-1, -1];
    const isExpanded = xExpanded === x && yExpanded === y;

    if (!expanded) {
      return "col-span-1 sm:col-span-2 row-span-2";
    } else if (isExpanded) {
      return "col-span-1 row-span-5 sm:col-span-3 sm:row-span-3";
    } else if (!isExpanded) {
      return clsx(
        xExpanded === x ? "row-span-1 sm:row-span-3" : "row-span-1",
        yExpanded === y ? "col-span-1 sm:col-span-3" : "col-span-1"
      );
    }
  };

  const handleSetExpanded = (x: number, y: number) => {
    if (expanded && expanded[0] === x && expanded[1] === y) {
      setExpanded(null);
    } else {
      setExpanded([x, y]);
    }
  };

  const isExpanded = (x: number, y: number) =>
    expanded && expanded[0] === x && expanded[1] === y;

  return (
    <div className="realtive w-full">
      <h2 className="text-3xl mb-4">Work ⌨️</h2>
      <p className="text-zinc-500 pb-5">
        I worked at a London-based consultancy where I built frontend features
        for a wide range of products, giving me hands-on experience across
        multiple industries and problem spaces. Examples include:
      </p>

      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-4 grid-rows-8 sm:grid-rows-4 gap-5 sm:gap-10 w-full h-[700px] sm:h-[500px]"
      >
        {workArr.map(({ x, y, title, icon, description }) => (
          <motion.div
            key={`cell-${x}-${y}`}
            layout
            layoutId={`cell-${x}-${y}`}
            transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
            onClick={() => handleSetExpanded(x, y)}
            className={`${getSpanStyle(x, y)} cursor-pointer`}
          >
            <SectorCard
              title={title}
              icon={icon}
              description={description}
              expanded={isExpanded(x, y)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const workArr: Array<{
  x: number;
  y: number;
  title: string;
  icon: WorkIcon;
  description: string;
}> = [
  {
    x: 0,
    y: 0,
    title: "Finance",
    icon: "PiggyBank",
    description:
      "Built and maintained features for a banking platform with real-time crypto trading and live price feeds. Focused on secure UI components and complex data flows within a high-trust environment.",
  },
  {
    x: 0,
    y: 1,
    title: "E-commerce",
    icon: "ShoppingBasket",
    description:
      "Developed a modern e-commerce frontend with dynamic product listings and Stripe-powered checkout. Prioritised responsive design and performance across devices.",
  },
  {
    x: 1,
    y: 0,
    title: "Social App",
    icon: "MessageSquareText",
    description:
      "Worked on cross-platform social apps using React Native, with features like location-based discovery and Bluetooth pairing for real-world interactions.",
  },
  {
    x: 1,
    y: 1,
    title: "And More...",
    icon: "BadgePlus",
    description:
      "Other projects include education tools for schools and a real-money casino platform, each with unique requirements around UX, security, and regulatory compliance.",
  },
];
