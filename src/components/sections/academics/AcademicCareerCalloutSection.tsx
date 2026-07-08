import { academicsPageContent } from "@/data/academics";
import { CtaLink } from "@/components/sections/shared/CtaLink";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";

export function AcademicCareerCalloutSection() {
  const { careerCallout } = academicsPageContent;

  return (
    <Section background="forest-deep">
      <RevealOnScroll>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-montserrat text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-gold">
            {careerCallout.eyebrow}
          </p>
          <h2 className="mt-3 font-montserrat text-[clamp(1.5rem,3.5vw,2.2rem)] font-black leading-tight text-white">
            {careerCallout.title}
          </h2>
          <p className="mt-2 font-montserrat text-[0.95rem] font-bold text-white/70">
            {careerCallout.subtitle}
          </p>
          <p className="mx-auto mt-4 max-w-[58ch] text-[0.95rem] leading-relaxed text-white/65">
            {careerCallout.description}
          </p>
          <CtaLink href={careerCallout.cta.href} className="mt-6 justify-center text-gold hover:text-white">
            {careerCallout.cta.label}
          </CtaLink>
        </div>
      </RevealOnScroll>
    </Section>
  );
}
