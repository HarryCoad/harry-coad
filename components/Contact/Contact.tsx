import LinkedInIcon from "@/assets/linkedin-icon.svg";
import { GitHubIcon } from "@/assets/skills/skillIcons";
import { MapPin } from "lucide-react";
import { EmailBtn } from "./EmailBtn";

export const Contact = () => {
  return (
    <div className="flex flex-col items-start w-full gap-4">
      <h2 className="group text-3xl mb-2">Want get in touch?</h2>
      <div className="flex gap-10">
        <p className="text-zinc-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore enim
          quos impedit repellat vel ratione rem earum deleniti, recusandae
          consequuntur veniam repellendus obcaecati non pariatur error inventore
          nam minus! Quibusdam, praesentium rerum.
        </p>

        <div className="flex flex-col items-start gap-4">
          <EmailBtn />
          <div className="flex items-center justify-center gap-4">
            <MapPin className="w-8 h-8" />
            Phoenix, USA
          </div>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/HarryCoad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-10 h-10 dark:fill-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/harry-coad/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-10 h-10 dark:fill-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
