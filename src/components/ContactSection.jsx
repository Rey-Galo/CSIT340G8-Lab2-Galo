import ContactLink from "./ContactLink";


function ContactSection() {
  return (
    <section
      id="contact"
      class="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <h2 class="text-2xl font-semibold tracking-tight">Contact</h2>
      <p class="mt-2 text-stone-600">Say hi.</p>
      <ul class="mt-8 space-y-3">
        <ContactLink
          label="Email"
          href="mailto:reygalo29@gmail.com"
          text="reygalo29@gmail.com"
        />
        <ContactLink
          label="GitHub"
          href="https://github.com/Rey-Galo"
          text="github.com/Rey-Galo"
        />
        <ContactLink
          label="LinkedIn"
          href="https://www.linkedin.com/in/galo-rey-741b93314/"
          text="linkedin.com/in/galo-rey-741b93314/"
        />
      </ul>
    </section>
  );
}

export default ContactSection;
