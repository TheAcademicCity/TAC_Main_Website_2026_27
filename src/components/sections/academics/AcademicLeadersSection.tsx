import { academicsPageContent } from "@/data/academics";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";

export function AcademicLeadersSection() {
  const { leaders } = academicsPageContent;

  return (
    <Section background="paper">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <RevealOnScroll>
          <SectionHeader
            label={leaders.label}
            title={leaders.title}
            description={leaders.description}
            reveal={false}
          />
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          <div className="relative aspect-[4/3] overflow-hidden bg-forest-deep shadow-[0_24px_60px_-32px_rgba(15,61,56,0.35)]">
            <ImageWithFallback
              image={leaders.image}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
