import { awardsContent } from "@/data/home";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function AwardsSection() {
  return (
    <section id="awards" className="section-py-compact relative overflow-hidden bg-white">
      <Container>
        <SectionHeader
          label={awardsContent.label}
          title={awardsContent.title}
          centered
          labelTone="emerald"
          className="mb-6 sm:mb-7"
        />

        <RevealOnScroll>
          <div className="relative mx-auto w-full max-w-6xl">
            <ImageWithFallback
              image={awardsContent.banner}
              className="h-auto w-full"
              objectFit="contain"
              sizes="(max-width: 1280px) 92vw, 1152px"
            />
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
