import { coCurricularPageContent } from "@/data/coCurricular";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function CoCurricularCtaSection() {
  const { ctaBand } = coCurricularPageContent;

  return (
    <section className="relative overflow-hidden">
      {/* Mobile */}
      <div className="bg-off-white px-5 py-[34px] md:hidden">
        <RevealOnScroll>
          <div className="rounded-[20px] bg-[linear-gradient(160deg,var(--color-forest-deep),var(--color-forest))] px-5 py-6 text-center text-white">
            <h3 className="font-montserrat text-[1.1875rem] font-bold">{ctaBand.title}</h3>
            <p className="mt-2 mb-[18px] text-[0.78125rem] leading-normal text-mist">
              Visit campus and watch the afternoon in action — sport, clubs, creativity.
            </p>
            <div className="flex gap-2">
              <Button
                href={ctaBand.enquiry.href}
                variant="gold"
                className="flex-1 justify-center rounded-[30px] px-2.5 py-3 font-outfit text-[0.8125rem] font-bold normal-case tracking-normal text-navy"
              >
                Book Visit
              </Button>
              <Button
                href={ctaBand.phone.href}
                variant="outline-white"
                className="flex-1 justify-center rounded-[30px] border-[1.5px] border-white/50 px-2.5 py-3 font-outfit text-[0.75rem] font-semibold normal-case tracking-normal"
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
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Desktop */}
      <div className="section-py-compact relative hidden overflow-hidden bg-ink text-center md:block">
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
            <p className="mx-auto mt-3 max-w-[44ch] px-1 text-[0.92rem] text-white/60 sm:text-[0.96rem]">
              {ctaBand.description}
            </p>

            <div className="mx-auto mt-6 flex w-full max-w-sm flex-col items-stretch gap-3 sm:mt-7 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
              <Button
                href={ctaBand.enquiry.href}
                className="w-full justify-center px-7 py-3 text-[0.78rem] sm:w-auto"
              >
                {ctaBand.enquiry.label}
                <Icon name="arrow" className="h-3.5 w-3.5" />
              </Button>
              <Button
                href={ctaBand.phone.href}
                variant="outline-white"
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
            </div>
          </RevealOnScroll>
        </Container>
      </div>
    </section>
  );
}
