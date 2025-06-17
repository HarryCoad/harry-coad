import { About } from "@/components/About/About";
import { Contact } from "@/components/Contact/Contact";
import { Work } from "@/components/Work/Work";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center w-full py-10">
      <section
        id="about"
        className="w-full flex items-center justify-center mb-20 "
      >
        <About />
      </section>
      <section
        id="work"
        className="w-full flex items-center justify-center mb-20 "
      >
        <Work />
      </section>
      <section
        id="contact"
        className="w-full flex items-center justify-center mb-10"
      >
        <Contact />
      </section>
    </div>
  );
}
