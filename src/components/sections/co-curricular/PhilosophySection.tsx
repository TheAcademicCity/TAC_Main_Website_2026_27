import { coCurricularPageContent } from "@/data/coCurricular";
import { CtaLink } from "@/components/sections/shared/CtaLink";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function PhilosophySection() {
  const { philosophy } = coCurricularPageContent;

  return (
    <Section
      id="overview"
      spacing="compact"
      className="max-md:!py-[34px]"
      containerClassName="max-md:!px-5"
    >
      {/* Mobile */}
      <div className="md:hidden">
        <RevealOnScroll>
          <p className="mb-2 font-montserrat text-[0.625rem] font-bold uppercase tracking-[0.1em] text-violet">
            {philosophy.imageTag}
          </p>
          <SectionLabel className="!mb-2 before:hidden !text-[0.62rem] !tracking-[0.14em] !text-emerald">
            {philosophy.label}
          </SectionLabel>
          <h2 className="mb-4 font-montserrat text-[1.25rem] font-extrabold leading-[1.28] tracking-[-0.01em] text-navy">
            Co-curricular Is Never an Afterthought
          </h2>
          <div className="relative mb-4 h-[170px] overflow-hidden rounded-2xl bg-forest-deep">
            <ImageWithFallback
              image={philosophy.image}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          {philosophy.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="mb-3.5 text-[0.8125rem] leading-[1.65] text-charcoal"
            >
              {paragraph}
            </p>
          ))}
          <Button
            href={philosophy.cta.href}
            variant="gold"
            className="w-full justify-center rounded-[30px] px-5 py-3 font-outfit text-[0.8125rem] font-bold normal-case tracking-normal text-navy"
          >
            Book a Campus Visit
          </Button>
        </RevealOnScroll>
      </div>

      {/* Desktop */}
      <div className="hidden items-center gap-7 md:grid lg:grid-cols-2 lg:gap-20">
        <RevealOnScroll>
          <div className="overflow-hidden rounded-sm">
            <div className="relative aspect-[4/3] overflow-hidden bg-forest-deep">
              <ImageWithFallback
                image={philosophy.image}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out hover:scale-[1.04]"
              />
            </div>
            {philosophy.imageTag ? (
              <div className="bg-gold px-4 py-2.5 sm:py-3">
                <span className="break-words font-montserrat text-[0.68rem] font-extrabold uppercase tracking-[0.1em] text-forest-deep sm:text-[0.72rem]">
                  {philosophy.imageTag}
                </span>
              </div>
            ) : null}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          <SectionLabel>{philosophy.label}</SectionLabel>
          <h2 className="font-montserrat text-[clamp(1.4rem,2.4vw,1.9rem)] font-extrabold leading-tight text-forest-deep">
            {philosophy.title}
          </h2>
          {philosophy.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="mt-3 text-[0.92rem] leading-relaxed text-slate sm:text-[0.96rem]"
            >
              {paragraph}
            </p>
          ))}
          <CtaLink href={philosophy.cta.href} className="mt-5">
            {philosophy.cta.label}
          </CtaLink>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
