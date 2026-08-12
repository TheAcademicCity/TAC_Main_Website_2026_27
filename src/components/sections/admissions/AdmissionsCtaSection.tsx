import { admissionsPageContent } from "@/data/admissions";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function AdmissionsCtaSection() {
  const { ctaBand } = admissionsPageContent;

  return (
    <section id="enquire" className="relative overflow-hidden">
      {/* Mobile */}
      <div className="bg-off-white px-5 py-[34px] md:hidden">
        <RevealOnScroll>
          <div className="rounded-[20px] bg-[linear-gradient(160deg,var(--color-forest-deep),var(--color-forest))] px-5 py-6 text-center text-white">
            <h3 className="font-montserrat text-[1.1875rem] font-bold">{ctaBand.title}</h3>
            <p className="mt-2 mb-[18px] text-[0.78125rem] leading-normal text-mist">
              {ctaBand.description}
            </p>
            <div className="flex gap-2">
              <Button
                href={ctaBand.phone.href}
                variant="gold"
                className="flex-1 justify-center rounded-[30px] px-2.5 py-3 font-outfit text-[0.8125rem] font-bold normal-case tracking-normal text-navy"
              >
                Call
              </Button>
              <Button
                href={ctaBand.whatsapp.href}
                external
                variant="outline-white"
                className="flex-1 justify-center rounded-[30px] border-[1.5px] border-white/50 px-2.5 py-3 font-outfit text-[0.75rem] font-semibold normal-case tracking-normal"
              >
                WhatsApp
              </Button>
              <Button
                href={ctaBand.email.href}
                external
                variant="outline-white"
                className="flex-1 justify-center rounded-[30px] border-[1.5px] border-white/50 px-2.5 py-3 font-outfit text-[0.75rem] font-semibold normal-case tracking-normal"
              >
                Email
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Desktop */}
      <div className="section-py-band relative hidden overflow-hidden bg-ink text-center md:block">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-[280px] w-[280px] rounded-full border-[40px] border-white/4"
        />

        <Container className="relative z-[1]">
          <RevealOnScroll>
            <SectionLabel centered tone="gold" className="justify-center">
              {ctaBand.label}
            </SectionLabel>
            <h2 className="font-montserrat text-[clamp(1.6rem,3vw,2.4rem)] font-black leading-tight text-white">
              {ctaBand.title}
            </h2>
            <p className="mx-auto mt-3 max-w-none px-1 text-[0.96rem] text-white/60 lg:whitespace-nowrap">
              {ctaBand.description}
            </p>

            <div className="mx-auto mt-7 flex max-w-none flex-row flex-wrap items-center justify-center gap-3">
              <Button
                href={ctaBand.phone.href}
                className="justify-center px-7 py-3 text-[0.78rem]"
              >
                <Icon name="phone" className="h-3.5 w-3.5" />
                {ctaBand.phone.label}
              </Button>
              <Button
                href={ctaBand.whatsapp.href}
                external
                variant="outline-white"
                className="justify-center px-7 py-3 text-[0.78rem]"
              >
                <Icon name="whatsapp" className="h-3.5 w-3.5" />
                {ctaBand.whatsapp.label}
              </Button>
              <Button
                href={ctaBand.email.href}
                external
                variant="outline-white"
                className="justify-center px-7 py-3 text-[0.78rem]"
              >
                <Icon name="mail" className="h-3.5 w-3.5" />
                {ctaBand.email.label}
              </Button>
            </div>
          </RevealOnScroll>
        </Container>
      </div>
    </section>
  );
}
