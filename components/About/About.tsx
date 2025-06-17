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
      <div className="flex flex-col md:flex-row gap-10 items-center mb-20">
        <div className="group relative min-w-60 min-h-60 sm:min-w-80 sm:min-h-80">
          <div className="group-hover:w-80 group-hover:h-80 transition-all absolute top-1/2 left-1/2 -translate-1/2 w-64 h-64 sm:w-84 sm:h-84 border-2 border-orange-900 rounded-full" />
          <Image alt="Me" src={"/me_2.JPEG"} className="rounded-full" fill />
        </div>

        <div>
          <Name />
          <p className="text-zinc-500 max-w-[450px]">
            I’m a frontend developer with a background in building responsive,
            maintainable interfaces using React and TypeScript. I enjoy solving
            product problems with clean code and collaborating closely with
            teams to bring ideas to life.
          </p>
        </div>
      </div>

      <div className="group">
        <h2 className="text-3xl mb-2">
          Intro{" "}
          <span className="group-hover:animate-wiggle inline-block">👋🏽</span>
        </h2>
        <p className="text-zinc-500 mb-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui pariatur
          quisquam quidem eligendi, quas quae? Delectus cupiditate ea, laborum
          eius temporibus commodi illo tenetur quam neque praesentium sunt iste
          et doloremque animi nobis quo itaque blanditiis in? Vero quasi
          pariatur, doloremque placeat dignissimos omnis tempore illo aliquid
          optio.
          <br />
          <br />
          Doloremque porro fugit voluptatibus fugiat. Doloribus soluta non id
          illum dignissimos cumque eaque rerum est dolorum explicabo enim
          deleniti laboriosam sint, reprehenderit quasi.
        </p>
      </div>

      <h2 className="text-3xl mb-2">Skills 🤹🏽</h2>
      <div className="flex gap-2 flex-wrap">
        {skills.slice(0, -1).map((skill, i) => (
          <span
            key={i}
            className="flex items-center gap-2 py-2 px-4 border-1 border-zinc-500 rounded-4xl text-sm hover:border-orange-800"
          >
            {skill.Icon && <skill.Icon className="w-5 h-5" />}
            {skill.label}
          </span>
        ))}
        {/* Fix a background issue with github icon on darkmode */}
        {skills.slice(-1).map((skill, i) => (
          <span
            key={i}
            className="flex items-center gap-2 py-2 px-4 border-1 border-zinc-500 rounded-4xl text-sm hover:border-orange-800"
          >
            {skill.Icon && <skill.Icon className="w-5 h-5 dark:fill-white" />}
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
