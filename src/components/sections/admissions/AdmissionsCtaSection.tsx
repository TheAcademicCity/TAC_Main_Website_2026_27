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
          <h2 className="font-montserrat text-[clamp(1.6rem,3vw,2.4rem)] font-black text-white">
            {ctaBand.title}
          </h2>
          <p className="mx-auto mt-3 whitespace-nowrap text-[0.96rem] text-white/60">{ctaBand.description}</p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Button href={ctaBand.phone.href} className="px-7 py-3 text-[0.78rem]">
              <Icon name="phone" className="h-3.5 w-3.5" />
              {ctaBand.phone.label}
            </Button>
            <Button
              href={ctaBand.whatsapp.href}
              external
              variant="outline-white"
              className="px-7 py-3 text-[0.78rem]"
            >
              <Icon name="whatsapp" className="h-3.5 w-3.5" />
              {ctaBand.whatsapp.label}
            </Button>
            <Button
              href={ctaBand.email.href}
              external
              variant="outline-white"
              className="px-7 py-3 text-[0.78rem]"
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
