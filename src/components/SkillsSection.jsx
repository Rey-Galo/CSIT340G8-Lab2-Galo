import SkillTag from './SkillTag';

function SkillsSection() {
  return (
    <section
      id="skills"
      class="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <h2 class="text-2xl font-semibold tracking-tight">Skills</h2>
      <p class="mt-2 text-stone-600">What I work with.</p>
      <div class="mt-8 grid gap-8 sm:grid-cols-3">
        <div>
          <h3 class="text-sm font-medium text-stone-500">Languages</h3>
          <div class="mt-3 flex flex-wrap gap-2">
            <SkillTag name="HTML" />
            <SkillTag name="CSS" />
            <SkillTag name="JavaScript" />
            <SkillTag name="Java" />
            <SkillTag name="Python" />
          </div>
        </div>
        <div>
          <h3 class="text-sm font-medium text-stone-500">Frameworks</h3>
          <div class="mt-3 flex flex-wrap gap-2">
            <SkillTag name="React" />
            <SkillTag name="Tailwind CSS" />
            <SkillTag name="Bootstrap" />
            <SkillTag name="Spring Boot" />
          </div>
        </div>
        <div>
          <h3 class="text-sm font-medium text-stone-500">Tools</h3>
          <div class="mt-3 flex flex-wrap gap-2">
            <SkillTag name="Git" />
            <SkillTag name="GitHub" />
            <SkillTag name="VS Code" />
            <SkillTag name="Postman" />
            <SkillTag name="Figma" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
