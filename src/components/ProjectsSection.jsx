import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  return (
    <section
      id="projects"
      class="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <h2 class="text-2xl font-semibold tracking-tight">Projects</h2>
      <p class="mt-2 text-stone-600">Things I have built.</p>
      <div class="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="About Me in React"
          description="My first React project, rebuilt from a plain HTML page."
          tech={["React", "Tailwind CSS"]}
          link="https://github.com/Rey-Galo/CSIT340-Lab1-GALO"
        />
        <ProjectCard
          year="2026"
          title="Fixel"
          description="A floating AI overlay that helps you read and fix code — from a screen region or pasted text. Runs 100% offline using a local LLM via Ollama — no API keys, no cost, no rate limits, no internet required."
          tech={["Python", "Ollama"]}
          link="https://github.com/Rey-Galo/Fixel"
        />
        <ProjectCard
          year="2026"
          title="Dormitory Management System"
          description="A desktop application for managing a dormitory or boarding house: rooms, tenants, room assignments, and monthly rent payments. Built with JavaFX 21 (FXML UI) on Java 17, with a MySQL / MariaDB backend (XAMPP-friendly) accessed through JDBC."
          tech={["Java", "MySQL"]}
          link="https://github.com/Rey-Galo/dorm-management-system"
        />
        <ProjectCard
          year="2026"
          title="Veterinary Clinic Management System"
          description="A comprehensive Java-based veterinary clinic management system demonstrating core OOP principles and professional software development practices."
          tech={["Java", "File I/O"]}
          link="https://github.com/Rey-Galo/Veterinary_Clinic_Management_System"
        />
      </div>
    </section>
  );
}

export default ProjectsSection;
