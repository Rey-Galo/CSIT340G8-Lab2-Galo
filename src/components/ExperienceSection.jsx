import TimelineItem from "./TimelineItem";
import SectionHeading from "./SectionHeading";

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading
        title="Experience"
        subtitle="Where I have learned and worked."
      />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2024 – Present"
          title="BS Information Technology"
          place="Cebu Institute of Technology – University"
          description="Taking up web development, databases, and systems analysis."
        />
        <TimelineItem
          period="2023 – 2024"
          title="BS Computer Science"
          place="Cebu Institute of Technology – University"
          description="I began my studies in Computer Science before shifting to Information Technology."
        />
        <TimelineItem
          period="2021 – 2023"
          title="Senior High School, GAS Strand"
          place="University of Cebu – senior High School"
          description="Started learning programming in python, HTML, and CSS. Learned the basics of web development and programming."
        />
      </ol>
    </section>
  );
}

export default ExperienceSection;
