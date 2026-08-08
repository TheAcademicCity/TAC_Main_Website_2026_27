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
      className="contact-page relative box-border min-h-[100svh] overflow-x-hidden bg-forest-deep pt-[var(--site-nav-stack)] outline-none lg:h-[100svh] lg:max-h-[100svh] lg:overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-20 h-56 w-56 rounded-full border-[32px] border-white/4 sm:h-72 sm:w-72 sm:border-[40px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full border-[28px] border-white/4 sm:h-64 sm:w-64 sm:border-[36px]"
      />

      <Container className="relative z-[1] flex h-full min-h-[calc(100svh-var(--site-nav-stack))] max-w-[1200px] flex-col px-4 pt-2 pb-5 sm:px-[4vw] sm:pb-6 lg:min-h-0 lg:pt-3 lg:pb-6">
        <ContactPageHero />

        <div className="mt-2 grid min-h-0 flex-1 gap-4 sm:gap-5 lg:mt-3 lg:grid-cols-2 lg:items-stretch lg:gap-6">
          <ContactFormSection />
          <ContactDetailsPanel />
        </div>
      </Container>
    </main>
  );
}
