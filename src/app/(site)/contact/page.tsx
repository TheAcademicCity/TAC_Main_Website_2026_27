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
      className="contact-page relative box-border min-h-[100svh] bg-forest-deep pt-[var(--site-nav-stack)] outline-none"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full border-[40px] border-white/4"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full border-[36px] border-white/4"
      />

      <Container className="relative z-[1] flex min-h-[calc(100svh-var(--site-nav-stack))] max-w-[1200px] flex-col px-[4vw] pt-2 pb-6 lg:pt-3 lg:pb-8">
        <ContactPageHero />

        <div className="mt-2 grid min-h-0 flex-1 gap-5 lg:mt-3 lg:grid-cols-2 lg:items-stretch lg:gap-6">
          <ContactFormSection />
          <ContactDetailsPanel />
        </div>
      </Container>
    </main>
  );
}
