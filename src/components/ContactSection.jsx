import ContactLink from "./ContactLink";
import SectionHeading from "./SectionHeading";


function ContactSection() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
    >
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        <ContactLink
          label="Email"
          href="mailto:reygalo29@gmail.com"
          text="reygalo29@gmail.com"
        />
        <ContactLink
          label="LinkedIn"
          href="https://www.linkedin.com/in/rey-galo/"
          text="linkedin.com/in/rey-galo"
        />
        <ContactLink
          label="GitHub"
          href="https://github.com/Rey-Galo"
          text="github.com/Rey-Galo"
        />
      </ul>
    </section>
  );
}

export default ContactSection;
