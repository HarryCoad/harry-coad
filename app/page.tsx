"use client";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center w-full">
      <section
        id="about"
        className="w-full flex items-center justify-center h-[800px] mb-10 "
      >
        <h1>About</h1>
      </section>
      <section
        id="work"
        className="w-full flex items-center justify-center h-[800px] mb-10 "
      >
        <h1>Work</h1>
      </section>
      <section
        id="contact"
        className="w-full flex items-center justify-center h-[800px] "
      >
        <h1>Contact</h1>
      </section>
    </div>
  );
}
