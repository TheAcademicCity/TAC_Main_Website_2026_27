import { boardingPageContent } from "@/data/boarding";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

export function GallerySection() {
  const { gallery } = boardingPageContent;

  return (
    <Section id="gallery">
      <RevealOnScroll>
        <SectionLabel>{gallery.label}</SectionLabel>
        <h2 className="font-montserrat text-[clamp(1.35rem,6vw,2rem)] font-extrabold leading-tight text-forest-deep md:text-[clamp(1.5rem,2.6vw,2rem)]">
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
    </Section>
  );
}
