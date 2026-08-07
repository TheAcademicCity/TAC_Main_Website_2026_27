import { aboutPageContent } from "@/data/about";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";
import type { SiteImage } from "@/types/images";

function PhotoTile({
  image,
  sizes,
  className,
}: {
  image: SiteImage;
  sizes: string;
  className?: string;
}) {
  return (
    <div className={cn("relative min-h-0 overflow-hidden rounded-lg bg-forest-deep", className)}>
      <ImageWithFallback
        image={image}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}

export function WhoWeAreSection() {
  const { whoWeAre } = aboutPageContent;
  const tall = whoWeAre.photos.find((photo) => photo.variant === "tall");
  const compact = whoWeAre.photos.find((photo) => photo.variant === "compact");
  const wide = whoWeAre.photos.find((photo) => photo.variant === "wide");

  if (!tall || !compact || !wide) return null;

  return (
    <Section id="about" background="white">
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:items-stretch lg:gap-x-16 lg:gap-y-3">
        <RevealOnScroll className="lg:col-start-2 lg:row-start-1">
          <SectionLabel>{whoWeAre.label}</SectionLabel>
        </RevealOnScroll>

        <RevealOnScroll delay={1} className="lg:col-start-2 lg:row-start-2">
          <h2 className="font-montserrat text-[clamp(1.35rem,6vw,2rem)] font-extrabold leading-tight text-forest-deep md:text-[clamp(1.4rem,2.5vw,2rem)]">
            {whoWeAre.title}
          </h2>
          {whoWeAre.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="mt-3 text-[0.92rem] leading-relaxed text-slate sm:text-[0.96rem]"
            >
              {paragraph}
            </p>
          ))}
        </RevealOnScroll>

        <RevealOnScroll className="min-h-[200px] sm:min-h-[280px] lg:col-start-1 lg:row-start-2 lg:h-full lg:min-h-0">
          <div className="grid h-full grid-cols-2 items-stretch gap-1.5 sm:gap-2">
            <PhotoTile
              image={tall.image}
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="h-full min-h-[160px] sm:min-h-[240px] lg:min-h-0"
            />

            <div className="grid h-full min-h-0 grid-rows-[2fr_3fr] gap-1.5 sm:gap-2">
              <PhotoTile
                image={compact.image}
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="h-full"
              />
              <PhotoTile
                image={wide.image}
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="h-full"
              />
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
