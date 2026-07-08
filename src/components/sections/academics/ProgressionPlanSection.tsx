import { academicsPageContent } from "@/data/academics";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";

export function ProgressionPlanSection() {
  const { progression } = academicsPageContent;

  return (
    <Section background="white">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <RevealOnScroll>
          <SectionHeader
            label={progression.label}
            title={progression.title}
            description={progression.description}
            reveal={false}
          />
          <p className="mt-4 max-w-[58ch] text-[0.92rem] leading-relaxed text-slate">
            {progression.detail}
          </p>
          <Button href={progression.cta.href} className="mt-6 px-6 py-3">
            {progression.cta.label}
          </Button>
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          <div className="relative aspect-[4/3] overflow-hidden border border-line bg-paper">
            <ImageWithFallback
              image={progression.image}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-contain p-4"
            />
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
