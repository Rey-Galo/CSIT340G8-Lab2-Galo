import SectionHeading from "./SectionHeading";
import Fact from "./Fact";

function AboutSection() {
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading title="About" subtitle="A little about who I am." />
      <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
        Hi, I'm Rey Galo, a third-year BS Information Technology student at Cebu
        Institute of Technology University. I enjoy building practical
        software and exploring both frontend and backend development. My current
        experience includes Java, SQL, PHP, HTML/CSS, Git, databases, and
        object-oriented programming, while I’m actively learning React, Spring
        Boot, Flutter, and modern full-stack development. I also enjoy
        experimenting with AI-assisted development tools such as ChatGPT, Claude
        Code, Codex, and local LLMs to improve how I learn, debug, plan, and
        build software.
      </p>
      <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <Fact label="Course" value="BS Information Technology" />
        <Fact label="Year level" value="Third year" />
        <Fact label="School" value="CIT-U" />
        <Fact label="Based in" value="Cebu City" />
      </dl>
    </section>
  );
}

export default AboutSection;
