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
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <RevealOnScroll>
          <div className="grid grid-cols-2 items-stretch gap-2">
            <PhotoTile
              image={tall.image}
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="aspect-[3/4]"
            />

            <div className="grid min-h-0 grid-rows-[2fr_3fr] gap-2">
              <PhotoTile
                image={compact.image}
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <PhotoTile
                image={wide.image}
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          <SectionLabel>{whoWeAre.label}</SectionLabel>
          <h2 className="font-montserrat text-[clamp(1.4rem,2.5vw,2rem)] font-extrabold text-forest-deep">
            {whoWeAre.title}
          </h2>
          {whoWeAre.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="mt-3 text-[0.96rem] leading-relaxed text-slate">
              {paragraph}
            </p>
          ))}
        </RevealOnScroll>
      </div>
    </Section>
  );
}
