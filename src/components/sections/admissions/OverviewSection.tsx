import { admissionsPageContent } from "@/data/admissions";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function OverviewSection() {
  const { overview } = admissionsPageContent;
  const [tallPhoto, ...sidePhotos] = overview.photos;

  return (
    <Section id="overview" background="white">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <RevealOnScroll>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="relative row-span-2 aspect-[3/4] overflow-hidden rounded-sm bg-forest-deep">
              <ImageWithFallback
                image={tallPhoto}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 ease-out hover:scale-105"
              />
            </div>
            {sidePhotos.map((photo) => (
              <div key={photo.alt} className="relative aspect-[4/3] overflow-hidden rounded-sm bg-forest-deep">
                <ImageWithFallback
                  image={photo}
                  fill
                  sizes="(min-width: 1024px) 20vw, 45vw"
                  className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                />
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          <SectionLabel>{overview.label}</SectionLabel>
          <h2 className="font-montserrat text-[clamp(1.4rem,2.5vw,2rem)] font-extrabold text-forest-deep">
            {overview.title}
          </h2>
          {overview.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mt-3 text-[0.96rem] leading-relaxed text-slate">
              {paragraph}
            </p>
          ))}

          <dl className="mt-5 grid grid-cols-3 gap-3">
            {overview.stats.map((stat) => (
              <div
                key={stat.label}
                className="border border-line bg-paper px-3 py-4 text-center"
              >
                <dt className="font-montserrat text-[1.5rem] font-black leading-none text-forest">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-[0.72rem] text-slate">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
