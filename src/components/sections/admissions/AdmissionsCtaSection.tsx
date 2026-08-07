import { admissionsPageContent } from "@/data/admissions";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function AdmissionsCtaSection() {
  const { ctaBand } = admissionsPageContent;

  return (
    <section id="enquire" className="section-py-band relative overflow-hidden bg-ink text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-[280px] w-[280px] rounded-full border-[40px] border-white/4"
      />

      <Container className="relative z-[1]">
        <RevealOnScroll>
          <SectionLabel centered tone="gold" className="justify-center">
            {ctaBand.label}
          </SectionLabel>
          <h2 className="font-montserrat text-[clamp(1.45rem,6.5vw,2.4rem)] font-black leading-tight text-white md:text-[clamp(1.6rem,3vw,2.4rem)]">
            {ctaBand.title}
          </h2>
          <p className="mx-auto mt-3 max-w-[42ch] whitespace-normal px-1 text-[0.92rem] text-white/60 sm:max-w-none sm:text-[0.96rem] lg:whitespace-nowrap">
            {ctaBand.description}
          </p>

          <div className="mx-auto mt-6 flex w-full max-w-sm flex-col items-stretch gap-3 sm:mt-7 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
            <Button
              href={ctaBand.phone.href}
              className="w-full justify-center px-7 py-3 text-[0.78rem] sm:w-auto"
            >
              <Icon name="phone" className="h-3.5 w-3.5" />
              {ctaBand.phone.label}
            </Button>
            <Button
              href={ctaBand.whatsapp.href}
              external
              variant="outline-white"
              className="w-full justify-center px-7 py-3 text-[0.78rem] sm:w-auto"
            >
              <Icon name="whatsapp" className="h-3.5 w-3.5" />
              {ctaBand.whatsapp.label}
            </Button>
            <Button
              href={ctaBand.email.href}
              external
              variant="outline-white"
              className="w-full justify-center px-7 py-3 text-[0.78rem] sm:w-auto"
            >
              <Icon name="mail" className="h-3.5 w-3.5" />
              {ctaBand.email.label}
            </Button>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
