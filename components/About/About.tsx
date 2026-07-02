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
  N8NIcon,
  DockerIcon,
  AiIcon,
  RestApiIcon,
} from "@/assets/skills/skillIcons";
import { Dices } from "lucide-react";

export const About = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-10 items-center mb-20">
        <div className="group relative min-w-60 min-h-60 sm:min-w-80 sm:min-h-80">
          <div className="group-hover:w-80 group-hover:h-80 transition-all absolute top-1/2 left-1/2 -translate-1/2 w-64 h-64 sm:w-84 sm:h-84 border-2 border-orange-900 rounded-full" />
          <Image alt="Me" src={"/me.JPEG"} className="rounded-full" fill />
        </div>

        <div>
          <Name />
          <p className="text-zinc-600 dark:text-zinc-400 max-w-[450px] mb-4">
            I&apos;m a full-stack software engineer with over 3 years of
            experience building products in React, TypeScript, and Node.js. More
            recently I&apos;ve been working on AI-powered research pipelines and
            automation systems. I enjoy solving real problems with clean,
            maintainable code and collaborating closely with the people I work
            with.
          </p>
          <p className="dark:text-white text-2xl">Welcome to my page!</p>
        </div>
      </div>

      <div className="group">
        <h2 className="text-3xl mb-2">
          Intro{" "}
          <span className="group-hover:animate-wiggle inline-block">👋🏽</span>
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-20">
          I earned my master&apos;s degree in Physics with Astrophysics from the
          University of Exeter, but my journey into software began later,
          fuelled by a growing interest in the web and a desire to create. I
          spent three years at a London-based consultancy building products
          across fintech, e-commerce, and entertainment, working across the full
          stack with React, TypeScript, and Node.js. More recently I&apos;ve
          been freelancing, designing and building AI-powered research pipelines
          and automation systems.
          <br />
          <br />I grew up in the countryside, surrounded by nature, and that
          connection has stayed with me. I want to bring that perspective into
          my work, building thoughtful, responsible tech that supports both
          people and the planet 🌍.
        </p>
      </div>

      <h2 className="text-3xl mb-2">Skills 🤹🏽</h2>
      <div className="flex gap-2 flex-wrap">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="flex items-center gap-2 py-2 px-4 border border-zinc-400 rounded-4xl text-sm hover:border-orange-800 duration-1000 hover:duration-150"
          >
            {skill.Icon && (
              <skill.Icon className={`${skill.iconClassName ?? ""} w-5 h-5`} />
            )}
            {skill.label}
          </span>
        ))}
        {/* Silly one */}
        <span className="flex items-center gap-2 py-2 px-4 border border-zinc-400 rounded-4xl text-sm hover:border-orange-800 duration-1000 hover:duration-150">
          <Dices className="w-5 h-5" />
          Board Games
        </span>
      </div>
    </div>
  );
};

const skills: Array<{
  label: string;
  Icon: React.FC<SVGProps<SVGElement>>;
  iconClassName?: string;
}> = [
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
  {
    label: "GitHub",
    Icon: GitHubIcon,
    iconClassName: "dark:fill-white",
  },
  { label: "Docker", Icon: DockerIcon },
  { label: "", Icon: N8NIcon, iconClassName: "w-15 h-5 dark:text-white" },
  { label: "AI", Icon: AiIcon, iconClassName: "dark:fill-white" },
  {
    label: "REST API",
    Icon: RestApiIcon,
    iconClassName: "dark:fill-white",
  },
];
