import TimelineItem from "./TimelineItem";

function ExperienceSection() {
  return (
    <section
      id="experience"
      class="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <h2 class="text-2xl font-semibold tracking-tight">Experience</h2>
      <p class="mt-2 text-stone-600">Where I have learned and worked.</p>
      <ol class="mt-8 space-y-8 border-l border-stone-200">
        <li class="pl-6">
          <TimelineItem
            period="2024 – Present"
            title="BS Information Technology"
            place="Cebu Institute of Technology – University"
            description="Taking up web development, databases, and systems analysis."
          />
        </li>
        <li class="pl-6">
          <TimelineItem
            period="2023 – 2024"
            title="BS Computer Science"
            place="Cebu Institute of Technology – University"
            description="I began my studies in Computer Science before shifting to Information Technology."
          />
        </li>
        <li class="pl-6">
          <TimelineItem
            period="2021 – 2023"
            title="Senior High School, GAS Strand"
            place="University of Cebu – senior High School"
            description="Started learning programming in python, HTML, and CSS. Learned the basics of web development and programming."
          />
        </li>
      </ol>
    </section>
  );
}

export default ExperienceSection;
