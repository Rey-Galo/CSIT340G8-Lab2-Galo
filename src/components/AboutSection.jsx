import SectionHeading from './SectionHeading'

function AboutSection() {
  return (
    <section
      id="about"
      class="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading title="About" subtitle="A little about who I am." />
      <p class="mt-6 max-w-2xl leading-relaxed text-stone-700">
        I grew up in Talisay and moved to Cebu City for college. I picked IT
        because I wanted to build things people actually open. So far my
        favorite part is the moment something finally runs.
      </p>
      <dl class="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        <div>
          <dt class="text-sm text-stone-500">Course</dt>
          <dd class="mt-1 font-medium">BS Information Technology</dd>
        </div>
        <div>
          <dt class="text-sm text-stone-500">Year level</dt>
          <dd class="mt-1 font-medium">Third year</dd>
        </div>
        <div>
          <dt class="text-sm text-stone-500">School</dt>
          <dd class="mt-1 font-medium">CIT-U</dd>
        </div>
        <div>
          <dt class="text-sm text-stone-500">Based in</dt>
          <dd class="mt-1 font-medium">Cebu City</dd>
        </div>
      </dl>
    </section>
  );
}

export default AboutSection;
