import { aboutPageContent } from "@/data/about";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

export function WhoWeAreSection() {
  const { whoWeAre } = aboutPageContent;
  const [tall, ...squares] = whoWeAre.photos;

  return (
    <Section id="about" background="white">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <RevealOnScroll>
          <div className="grid grid-cols-2 gap-2">
            <div className="relative row-span-2 aspect-[3/4] overflow-hidden bg-forest-deep">
              <ImageWithFallback
                image={tall.image}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            {squares.map((photo) => (
              <div
                key={photo.image.alt}
                className="relative aspect-square overflow-hidden bg-forest-deep"
              >
                <ImageWithFallback
                  image={photo.image}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
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
          <span
            className={cn(
              "mt-5 inline-block bg-gold px-4 py-1.5 font-montserrat text-[0.72rem]",
              "font-extrabold uppercase tracking-[0.12em] text-forest-deep",
            )}
          >
            {whoWeAre.badge}
          </span>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
