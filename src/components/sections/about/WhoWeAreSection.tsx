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
  objectClassName,
}: {
  image: SiteImage;
  sizes: string;
  className?: string;
  objectClassName?: string;
}) {
  return (
    <div className={cn("relative min-h-0 overflow-hidden rounded-xl bg-forest-deep", className)}>
      <ImageWithFallback
        image={image}
        fill
        sizes={sizes}
        className={cn(
          "object-cover transition-transform duration-700 ease-out hover:scale-[1.04]",
          objectClassName ?? "object-center",
        )}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-deep/25 via-transparent to-transparent opacity-60" />
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
    <Section
      id="about"
      background="white"
      className="!pt-4 max-md:!pb-7 md:!pb-[clamp(28px,3.5vw,44px)]"
      containerClassName="max-md:!px-5"
    >
      {/* Mobile */}
      <div className="md:hidden">
        <RevealOnScroll>
          <SectionLabel className="!mb-2 before:hidden !text-[0.62rem] !tracking-[0.14em] !text-emerald">
            {whoWeAre.label}
          </SectionLabel>
          <h2 className="font-montserrat text-[1.3rem] font-extrabold leading-[1.28] tracking-[-0.01em] text-navy">
            {whoWeAre.title}
          </h2>
          {whoWeAre.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="mt-3 text-[0.8125rem] leading-[1.65] text-charcoal"
            >
              {paragraph}
            </p>
          ))}
        </RevealOnScroll>

        <div className="scrollbar-none mt-[18px] flex snap-x snap-mandatory gap-2.5 overflow-x-auto">
          {whoWeAre.photos.map((photo) => (
            <div
              key={photo.image.alt}
              className="relative h-[168px] w-[220px] shrink-0 snap-start overflow-hidden rounded-[14px] bg-forest-deep"
            >
              <ImageWithFallback
                image={photo.image}
                fill
                sizes="220px"
                className={cn("object-cover", photo.objectClassName ?? "object-center")}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop — asymmetric collage: tall left, stacked right */}
      <div className="hidden gap-6 sm:gap-8 md:grid lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:items-stretch lg:gap-x-16 lg:gap-y-3">
        <RevealOnScroll className="lg:col-start-2 lg:row-start-1">
          <SectionLabel>{whoWeAre.label}</SectionLabel>
        </RevealOnScroll>

        <RevealOnScroll delay={1} className="lg:col-start-2 lg:row-start-2">
          <h2 className="font-montserrat text-[clamp(1.4rem,2.5vw,2rem)] font-extrabold leading-tight text-forest-deep">
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

        <RevealOnScroll className="min-h-[220px] sm:min-h-[320px] lg:col-start-1 lg:row-start-2 lg:h-full lg:min-h-0">
          <div className="grid h-full grid-cols-[1.15fr_0.85fr] items-stretch gap-2 sm:gap-2.5">
            <PhotoTile
              image={tall.image}
              objectClassName={tall.objectClassName}
              sizes="(max-width: 1024px) 50vw, 28vw"
              className="h-full min-h-[180px] sm:min-h-[280px] lg:min-h-0"
            />

            <div className="grid h-full min-h-0 grid-rows-[1.1fr_1.6fr] gap-2 sm:gap-2.5">
              <PhotoTile
                image={compact.image}
                objectClassName={compact.objectClassName}
                sizes="(max-width: 1024px) 40vw, 20vw"
                className="h-full"
              />
              <PhotoTile
                image={wide.image}
                objectClassName={wide.objectClassName}
                sizes="(max-width: 1024px) 40vw, 20vw"
                className="h-full"
              />
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
