"use client";
import { FC, SVGProps, useState } from "react";

interface Props {
  label: string;
  Icon: FC<SVGProps<SVGElement>>;
  iconClassName?: string;
}

export const SkillBadge = ({ label, Icon, iconClassName }: Props) => {
  const [state, setState] = useState<"idle" | "hovering" | "leaving">("idle");

  return (
    <span
      onMouseEnter={() => setState("hovering")}
      onMouseLeave={() => setState("leaving")}
      onTransitionEnd={() => {
        if (state === "leaving") setState("idle");
      }}
      className={`flex items-center gap-2 py-2 px-4 border rounded-4xl text-sm ${
        state === "hovering"
          ? "border-orange-800 transition-[border-color] duration-150"
          : state === "leaving"
            ? "border-zinc-400 transition-[border-color] duration-700"
            : "border-zinc-400"
      }`}
    >
      {Icon && <Icon className={iconClassName ?? "w-5 h-5"} />}
      {label}
    </span>
  );
};
