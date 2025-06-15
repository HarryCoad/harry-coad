import Image from "next/image";
import React, { SVGProps } from "react";
import { Name } from "./Name";
import {
  CssIcon,
  GitHubIcon,
  GitIcon,
  HtmlIcon,
  JavascriptIcon,
  JSONIcon,
  MongoDBIcon,
  NextjsIcon,
  NodejsIcon,
  PythonIcon,
  ReactIcon,
  ReactQueryIcon,
  ReduxIcon,
  SassIcon,
  SQLIcon,
  TailwindIcon,
  TypescriptIcon,
} from "@/assets/skills/skillIcons";
import { Dices } from "lucide-react";

export const About = () => {
  return (
    <div>
      <div className="flex gap-10 items-center mb-20">
        <div className="group relative min-w-80 min-h-80">
          <div className="group-hover:w-80 group-hover:h-80 transition-all absolute top-1/2 left-1/2 -translate-1/2 w-84 h-84 border-2 border-orange-900 rounded-full" />
          <Image alt="Me" src={"/me_2.JPEG"} className="rounded-full" fill />
        </div>

        <div>
          <Name />
          <p className="text-zinc-500 max-w-[450px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus inventore temporibus quisquam est nihil numquam
            voluptate natus et eos. Quis consequuntur aspernatur deleniti illum
            rem saepe ea labore quaerat esse expedita odit iusto, fuga
            accusantium ratione omnis? Eligendi aspernatur minus praesentium
            officiis.
          </p>
        </div>
      </div>
      <h2 className="group text-3xl mb-2">
        Intro{" "}
        <span className="group-hover:animate-wiggle inline-block">👋🏽</span>
      </h2>
      <p className="text-zinc-500 mb-20">
        Potentially more of a personal intro about me
      </p>

      <h2 className="text-3xl mb-2">Skills 🤹🏽</h2>
      <div className="flex gap-2 flex-wrap">
        {skills.slice(0, -1).map((skill, i) => (
          <span
            key={i}
            className="flex items-center gap-2 py-2 px-4 border-1 border-zinc-500 rounded-4xl text-sm hover:border-orange-800"
          >
            {skill.Icon && <skill.Icon className="w-5 h-5 fill-white" />}
            {skill.label}
          </span>
        ))}
        {/* Fix a background issue with github icon on darkmode */}
        {skills.slice(-1).map((skill, i) => (
          <span
            key={i}
            className="flex items-center gap-2 py-2 px-4 border-1 border-zinc-500 rounded-4xl text-sm hover:border-orange-800"
          >
            {skill.Icon && (
              <div className="relative">
                <skill.Icon className="w-5 h-5 " />
                <span className=" top-0 absolute rounded-full w-5 h-5 bg-white -z-10" />
              </div>
            )}
            {skill.label}
          </span>
        ))}
        {/* Silly one */}
        <span className="flex items-center gap-2 py-2 px-4 border-1 border-zinc-500 rounded-4xl text-sm hover:border-orange-800">
          <Dices className="w-5 h-5" />
          Board Games
        </span>
      </div>
    </div>
  );
};

const skills: Array<{ label: string; Icon: React.FC<SVGProps<SVGElement>> }> = [
  { label: "JavaScript", Icon: JavascriptIcon },
  { label: "TypeScript", Icon: TypescriptIcon },
  { label: "Python", Icon: PythonIcon },
  { label: "SQL", Icon: SQLIcon },
  { label: "HTML5", Icon: HtmlIcon },
  { label: "CSS", Icon: CssIcon },
  { label: "SASS", Icon: SassIcon },
  { label: "TailwindCSS", Icon: TailwindIcon },
  { label: "React", Icon: ReactIcon },
  { label: "NextJs", Icon: NextjsIcon },
  { label: "React Native", Icon: ReactIcon },
  { label: "React Query", Icon: ReactQueryIcon },
  { label: "Redux", Icon: ReduxIcon },
  { label: "NodeJs", Icon: NodejsIcon },
  { label: "ExpressJs", Icon: NodejsIcon },
  { label: "MongoDB", Icon: MongoDBIcon },
  { label: "JSON", Icon: JSONIcon },
  { label: "Git", Icon: GitIcon },
  { label: "GitHub", Icon: GitHubIcon },
];
