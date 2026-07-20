import { awardsContent } from "@/data/home";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { getImageSrc } from "@/lib/images";

export function AwardsSection() {
  return (
    <section id="awards" className="section-py-compact relative overflow-hidden bg-white">
      <Container>
        <SectionHeader
          label={awardsContent.label}
          title={awardsContent.title}
          centered
          labelTone="emerald"
          className="mb-8 sm:mb-10"
        />

        <RevealOnScroll>
          <div className="grid w-full grid-cols-8 gap-1 sm:gap-2 md:gap-3">
            {awardsContent.items.map((award) => (
              <div
                key={award.name}
                className="flex h-[clamp(3.25rem,7vw,5.5rem)] min-w-0 items-end justify-center"
              >
                <img
                  src={getImageSrc(award.image)}
                  alt={award.image.alt}
                  title={`${award.name} (${award.year})`}
                  width={award.width}
                  height={award.height}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
