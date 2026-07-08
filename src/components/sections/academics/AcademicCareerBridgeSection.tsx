import { academicsPageContent } from "@/data/academics";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";

export function AcademicCareerBridgeSection() {
  const { careerBridge } = academicsPageContent;

  return (
    <Section background="paper">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <RevealOnScroll delay={1} className="order-2 lg:order-1">
          <div className="relative aspect-[5/4] overflow-hidden bg-forest-deep">
            <ImageWithFallback
              image={careerBridge.image}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="order-1 lg:order-2">
          <SectionHeader
            label={careerBridge.label}
            title={careerBridge.title}
            description={careerBridge.description}
            reveal={false}
          />
          <Button href={careerBridge.cta.href} className="mt-6 px-6 py-3">
            {careerBridge.cta.label}
          </Button>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
