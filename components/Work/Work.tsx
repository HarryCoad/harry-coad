"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  PiggyBank,
  ShoppingBasket,
  MessageSquareText,
  BadgePlus,
  BrainCircuit,
  type LucideIcon,
} from "lucide-react";

type WorkItem = {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  tags: string[];
};

const workItems: WorkItem[] = [
  {
    id: "finance",
    title: "Finance",
    icon: PiggyBank,
    description:
      "Built and maintained features for a banking platform with real-time crypto trading and live price feeds. Focused on secure UI components and complex data flows within a high-trust environment.",
    tags: ["React", "TypeScript", "TailwindCSS", "Redux", "REST API"],
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    icon: ShoppingBasket,
    description:
      "Developed a modern e-commerce frontend with dynamic product listings and Stripe-powered checkout. Prioritised responsive design and performance across devices.",
    tags: [
      "React",
      "NextJs",
      "TailwindCSS",
      "TypeScript",
      "React Query",
      "REST API",
    ],
  },
  {
    id: "social",
    title: "Social App",
    icon: MessageSquareText,
    description:
      "Worked on cross-platform social apps using React Native, with features like location-based discovery and Bluetooth pairing for real-world interactions.",
    tags: ["React Native", "TypeScript", "Bluetooth", "Location Services"],
  },
  {
    id: "automation",
    title: "Automation",
    icon: BrainCircuit,
    description:
      "Designed and built AI-powered research pipelines and automation systems for a content and engineering organisation. Integrated multiple AI agents, external APIs, and cloud infrastructure to automate end-to-end research workflows.",
    tags: ["AI", "JavaScript", "REST API", "Docker", "n8n"],
  },
  {
    id: "more",
    title: "And More",
    icon: BadgePlus,
    description:
      "Other projects include education tools for schools and a real-money casino platform, each with unique requirements around UX, security, and regulatory compliance.",
    tags: [],
  },
];

export const Work = () => {
  const [selected, setSelected] = useState(workItems[0].id);

  const selectedItem = workItems.find((w) => w.id === selected)!;

  return (
    <div className="w-full">
      <h2 className="text-3xl mb-4">Work ⌨️</h2>
      <p className="text-zinc-600 dark:text-zinc-400 pb-5">
        I worked at a London-based consultancy where I built frontend features
        for a wide range of products, giving me hands-on experience across
        multiple industries.
      </p>

      {/* ── Desktop: split panel ── */}
      <div className="hidden md:flex border border-zinc-300 dark:border-zinc-700">
        {/* Left: selector */}
        <div className="w-48 shrink-0 border-r border-zinc-300 dark:border-zinc-700 flex flex-col">
          {workItems.map((item, i) => {
            const isActive = item.id === selected;
            return (
              <button
                key={item.id}
                onClick={() => setSelected(item.id)}
                className={`w-full text-left px-4 py-4 text-sm flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800 transition-colors cursor-pointer last:border-b-0 ${
                  isActive
                    ? "text-orange-700 dark:text-orange-400 border-l-2 border-l-orange-700 dark:border-l-orange-400 bg-orange-50 dark:bg-orange-950/20"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800/40 pl-4.5"
                }`}
              >
                <span className="text-xs text-zinc-400 shrink-0 tabular-nums">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Right: detail panel */}
        <div className="flex-1 relative overflow-hidden min-h-72">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{
                clipPath: "inset(0 0% 0 0)",
                transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.1 },
              }}
              className="absolute inset-0 p-8 flex flex-col"
            >
              {/* Icon + title */}
              <div className="flex items-center gap-4 mb-4">
                <selectedItem.icon className="w-9 h-9 stroke-1 text-zinc-700 dark:text-zinc-300 shrink-0" />
                <h3 className="text-xl text-zinc-900 dark:text-zinc-100">
                  {selectedItem.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                {selectedItem.description}
              </p>

              {/* Tags */}
              <div className="mt-auto flex flex-wrap gap-2">
                {selectedItem.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs py-1 px-3 border border-zinc-300 dark:border-zinc-700 rounded-full text-zinc-600 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Mobile: accordion ── */}
      <div className="md:hidden border border-zinc-300 dark:border-zinc-700">
        {workItems.map((item, i) => {
          const isActive = item.id === selected;
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="border-b border-zinc-200 dark:border-zinc-800 last:border-b-0"
            >
              <button
                onClick={() => setSelected(item.id)}
                className={`w-full text-left px-4 py-3 text-sm flex items-center gap-3 transition-colors cursor-pointer ${
                  isActive
                    ? "text-orange-700 dark:text-orange-400 border-l-2 border-l-orange-700 dark:border-l-orange-400"
                    : "text-zinc-600 dark:text-zinc-400 pl-4.5"
                }`}
              >
                <span className="text-xs text-zinc-400 shrink-0 tabular-nums">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <span className="flex-1">{item.title}</span>
                <motion.span
                  animate={{ rotate: isActive ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-zinc-400 text-xs"
                >
                  ›
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-5 pt-3 border-t border-zinc-200 dark:border-zinc-800">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className="w-6 h-6 stroke-1 text-zinc-600 dark:text-zinc-400" />
                        <span className="text-sm text-zinc-700 dark:text-zinc-300">
                          {item.title}
                        </span>
                      </div>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs py-1 px-3 border border-zinc-300 dark:border-zinc-700 rounded-full text-zinc-600 dark:text-zinc-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};
