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
            period="2025"
            title="Student Assistant"
            place="CCS Computer Laboratory"
            description="Set up lab machines and helped students with software installs."
          />
        </li>
        <li class="pl-6">
          <TimelineItem
            period="2022 – 2024"
            title="Senior High School, ICT Strand"
            place="Talisay City National High School"
            description="Built my first web page and got hooked."
          />
        </li>
      </ol>
    </section>
  );
}

export default ExperienceSection;

         