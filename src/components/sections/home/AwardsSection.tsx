import { awardsContent } from "@/data/home";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { getImageSrc } from "@/lib/images";

export function AwardsSection() {
  const marqueeItems = [...awardsContent.items, ...awardsContent.items];

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

        {/* Mobile marquee chips */}
        <div className="-mx-4 overflow-hidden md:hidden">
          <div className="flex w-max gap-3 px-5 [animation:gallery-marquee_22s_linear_infinite]">
            {marqueeItems.map((award, index) => (
              <div
                key={`${award.name}-${index}`}
                className="w-[150px] shrink-0 rounded-[14px] border border-off-white bg-white px-4 py-3.5 shadow-[0_6px_18px_-10px_rgba(0,0,0,0.15)]"
              >
                <div className="font-montserrat text-[0.68rem] font-bold text-gold">{award.year}</div>
                <div className="mt-1 text-[0.72rem] font-semibold leading-snug text-navy">
                  {award.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop logo grid */}
        <RevealOnScroll className="hidden md:block">
          <div className="grid w-full grid-cols-4 gap-2 sm:grid-cols-4 sm:gap-2 md:grid-cols-8 md:gap-3">
            {awardsContent.items.map((award) => (
              <div
                key={award.name}
                className="flex h-[clamp(3.75rem,18vw,5.5rem)] min-w-0 items-end justify-center md:h-[clamp(3.25rem,7vw,5.5rem)]"
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
