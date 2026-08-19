import { awardsContent } from "@/data/home";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { getImageSrc } from "@/lib/images";
import { cn } from "@/lib/utils";

const mobileCenteredAwardNames = new Set([
  "University of Oxford - Best Emerging Residential School",
  "Education Today - Dynamic School",
]);

export function AwardsSection() {
  return (
    <section
      id="awards"
      className="section-py-compact relative overflow-hidden bg-paper !pt-[clamp(28px,3.5vw,44px)] max-md:bg-off-white max-md:!pb-8"
    >
      <Container>
        <SectionHeader
          label={awardsContent.label}
          title="Recognised Nationally & Globally"
          centered
          labelTone="emerald"
          className="mb-8 max-md:mb-[18px] max-md:text-left max-md:[&_h2]:text-[1.3rem] sm:mb-10"
        />

        <RevealOnScroll>
          <div className="grid w-full grid-cols-4 gap-2 sm:grid-cols-4 sm:gap-2 md:grid-cols-8 md:gap-3">
            {awardsContent.items.map((award) => (
              <div
                key={award.name}
                className={cn(
                  "flex h-[clamp(3.75rem,18vw,5.5rem)] min-w-0 justify-center md:h-[clamp(3.25rem,7vw,5.5rem)]",
                  mobileCenteredAwardNames.has(award.name)
                    ? "items-center md:items-end"
                    : "items-end",
                )}
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
