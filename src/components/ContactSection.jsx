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
          href="mailto:juan.delacruz@cit.edu"
          text="juan.delacruz@cit.edu"
        />
        <ContactLink
          label="GitHub"
          href="https://github.com/juandelacruz"
          text="github.com/juandelacruz"
        />
        <ContactLink
          label="LinkedIn"
          href="https://linkedin.com/in/juandelacruz"
          text="linkedin.com/in/juandelacruz"
        />
      </ul>
    </section>
  );
}

export default ContactSection;
