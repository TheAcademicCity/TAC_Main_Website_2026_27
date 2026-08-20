import {
  ContactDetailsPanel,
  ContactFormSection,
  ContactPageHero,
} from "@/components/sections/contact";
import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/components/layout/PagePlaceholder";

export const metadata = createPageMetadata(
  "Contact Us",
  "Contact The Academic City School, Bengaluru — call, WhatsApp, email or send a message. Campus visits Mon–Sat, 9 AM – 3:30 PM.",
);

export default function ContactPage() {
  return (
    <main
      id="top"
      tabIndex={-1}
      className="contact-page relative box-border min-h-0 overflow-x-clip bg-forest-deep pt-[var(--site-nav-stack)] outline-none max-md:pb-0 lg:min-h-[calc(100svh-var(--site-nav-stack))]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-20 hidden h-56 w-56 rounded-full border-[32px] border-white/4 sm:h-72 sm:w-72 sm:border-[40px] md:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-16 hidden h-48 w-48 rounded-full border-[28px] border-white/4 sm:h-64 sm:w-64 sm:border-[36px] md:block"
      />

      <Container className="relative z-[1] flex max-w-[1200px] flex-col px-4 pt-2 pb-2 max-md:px-5 max-md:pt-3 max-md:pb-4 sm:px-[4vw] md:pb-6 lg:pt-3 lg:pb-6">
        <ContactPageHero />

        <div className="mt-2 grid gap-4 max-md:mt-3.5 max-md:gap-3.5 max-md:items-start sm:gap-5 lg:mt-3 lg:grid-cols-2 lg:items-stretch lg:gap-6">
          <ContactFormSection />
          <ContactDetailsPanel />
        </div>
      </Container>
    </main>
  );
}
