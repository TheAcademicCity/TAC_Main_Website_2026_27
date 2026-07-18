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
        <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold text-forest-deep">
          {gallery.title}
        </h2>
      </RevealOnScroll>

      <RevealOnScroll delay={1}>
        <div className="mt-7 grid grid-cols-2 gap-1.5 md:grid-cols-4 md:grid-rows-[220px_220px]">
          {gallery.items.map((item) => (
            <div
              key={item.label}
              className={cn(
                "group relative min-h-[180px] overflow-hidden bg-forest-deep md:min-h-0",
                item.wide && "md:col-span-2",
              )}
            >
              <div className="absolute inset-0">
                <ImageWithFallback
                  image={item.image}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.06] group-hover:brightness-[0.85]"
                />
              </div>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(10,44,40,0.75)] via-transparent to-transparent"
              />
              <div className="absolute bottom-3 left-3.5 z-[2] font-montserrat text-[0.74rem] font-bold uppercase tracking-[0.08em] text-white">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </Section>
  );
}
