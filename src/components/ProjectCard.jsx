


function ProjectCard({ year, title, description, tech, link }) {
   return (
    <article class="rounded-lg border border-stone-200 p-6 hover:border-stone-400">
      <p class="text-xs font-medium uppercase tracking-wide text-stone-500">
        {year}
      </p>
      <h3 class="mt-2 text-lg font-semibold">{title}</h3>
      <p class="mt-2 text-sm leading-relaxed text-stone-600">
        {description}
      </p>
      <p class="mt-4 text-sm text-stone-500">{tech.join(' · ')}</p>
      <a
        href={link}
        class="mt-4 inline-block text-sm font-medium underline underline-offset-4 hover:text-stone-600"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub
      </a>
    </article>
   );   
}


export default ProjectCard;