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

const mobileAwardImageSrc: Partial<Record<string, string>> = {
  "Education Leaders Awards": "/images/home/awards/education-leaders-2024-mobile.png",
};

const mobileNudgedUpAwardNames = new Set([
  "21CL ISLE Awards Bengaluru",
  "Brainfeed Top 500 Schools of India",
]);

const mobileScaledAwardNames = new Set([
  "21CL ISLE Awards Bengaluru",
  "India School Merit Awards",
  "Brainfeed Top 500 Schools of India",
  "QS I-GAUGE Institution of Happiness",
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
                    ? "items-center"
                    : "items-end md:items-center",
                )}
              >
                <picture
                  className={cn(
                    "flex max-h-full max-w-full items-end justify-center md:items-center",
                    mobileScaledAwardNames.has(award.name) &&
                      "max-md:origin-bottom max-md:scale-[0.78]",
                  )}
                >
                  {mobileAwardImageSrc[award.name] ? (
                    <source media="(max-width: 767px)" srcSet={mobileAwardImageSrc[award.name]} />
                  ) : null}
                  <img
                    src={getImageSrc(award.image)}
                    alt={award.image.alt}
                    title={`${award.name} (${award.year})`}
                    width={award.width}
                    height={award.height}
                    className={cn(
                      "max-h-full max-w-full object-contain",
                      award.name === "Education Leaders Awards" && "max-md:translate-y-1.5",
                      mobileNudgedUpAwardNames.has(award.name) && "max-md:-translate-y-2",
                    )}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
