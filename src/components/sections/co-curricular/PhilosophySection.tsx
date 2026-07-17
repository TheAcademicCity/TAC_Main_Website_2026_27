import { coCurricularPageContent } from "@/data/coCurricular";
import { CtaLink } from "@/components/sections/shared/CtaLink";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function PhilosophySection() {
  const { philosophy } = coCurricularPageContent;

  return (
    <Section id="overview">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
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
            <div className="bg-gold px-4 py-3">
              <span className="font-montserrat text-[0.72rem] font-extrabold uppercase tracking-[0.1em] text-forest-deep">
                {philosophy.imageTag}
              </span>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          <SectionLabel>{philosophy.label}</SectionLabel>
          <h2 className="font-montserrat text-[clamp(1.4rem,2.4vw,1.9rem)] font-extrabold text-forest-deep">
            {philosophy.title}
          </h2>
          {philosophy.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="mt-3 text-[0.96rem] leading-relaxed text-slate">
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
