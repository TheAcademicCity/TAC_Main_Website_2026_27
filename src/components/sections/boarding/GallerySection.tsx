import { boardingPageContent } from "@/data/boarding";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

export function GallerySection() {
  const { gallery } = boardingPageContent;

  return (
    <Section
      id="gallery"
      className="max-md:!bg-white max-md:!pt-4 max-md:!pb-7"
      containerClassName="max-md:!px-5"
    >
      {/* Mobile */}
      <div className="md:hidden">
        <RevealOnScroll>
          <SectionLabel className="!mb-2 before:hidden !text-[0.62rem] !tracking-[0.14em] !text-emerald">
            {gallery.label}
          </SectionLabel>
          <h2 className="font-montserrat text-[1.25rem] font-extrabold leading-[1.28] tracking-[-0.01em] text-navy">
            {gallery.title}
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          <div className="scrollbar-none mt-4 flex snap-x snap-mandatory gap-2.5 overflow-x-auto pb-1">
            {gallery.items.map((item) => (
              <div
                key={item.label}
                className={cn(
                  "relative h-[150px] shrink-0 snap-start overflow-hidden rounded-[14px] bg-forest-deep",
                  item.wide ? "w-[240px]" : "w-[170px]",
                )}
              >
                <ImageWithFallback
                  image={item.image}
                  fill
                  sizes="240px"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(10,44,40,0.7)] via-transparent to-transparent"
                />
                <span className="absolute bottom-2.5 left-2.5 z-[2] font-montserrat text-[0.625rem] font-bold uppercase tracking-[0.06em] text-white">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <RevealOnScroll>
          <SectionLabel>{gallery.label}</SectionLabel>
          <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold leading-tight text-forest-deep">
            {gallery.title}
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          <div className="mt-5 grid grid-cols-2 gap-1.5 sm:mt-7 md:grid-cols-4 md:grid-rows-[220px_180px]">
            {gallery.items.map((item) => (
              <div
                key={item.label}
                className={cn(
                  "group relative min-h-[150px] overflow-hidden rounded-lg bg-forest-deep sm:min-h-[180px] md:min-h-0",
                  item.wide && "md:col-span-2",
                )}
              >
                <div className="absolute inset-0">
                  <ImageWithFallback
                    image={item.image}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.06]"
                  />
                </div>
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(10,44,40,0.65)] via-transparent to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 z-[2] px-2.5 py-2.5 font-montserrat text-[0.65rem] font-bold uppercase tracking-[0.06em] text-white sm:inset-x-auto sm:bottom-3 sm:left-3.5 sm:px-0 sm:py-0 sm:text-[0.72rem] sm:tracking-[0.08em]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
