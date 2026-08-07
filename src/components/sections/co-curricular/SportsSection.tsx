import { coCurricularPageContent } from "@/data/coCurricular";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function SportsSection() {
  const { sports } = coCurricularPageContent;

  return (
    <Section id="sports" spacing="compact">
      <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-16">
        <RevealOnScroll>
          <SectionLabel>{sports.label}</SectionLabel>
          <h2 className="font-montserrat text-[clamp(1.35rem,6vw,1.9rem)] font-extrabold leading-tight text-forest-deep md:text-[clamp(1.4rem,2.4vw,1.9rem)]">
            {sports.title}
          </h2>
          <p className="mt-3 text-[0.92rem] leading-relaxed text-slate sm:text-[0.96rem]">
            {sports.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
            {sports.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border-[1.5px] border-line bg-paper px-2.5 py-1 text-[0.78rem] font-semibold text-forest-deep sm:px-3 sm:py-1.5 sm:text-[0.82rem]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
            {sports.stats.map((stat) => (
              <div
                key={stat.label}
                className="min-w-0 rounded-lg border border-line bg-paper px-1.5 py-3 text-center sm:px-3 sm:py-3.5"
              >
                <div className="font-montserrat text-[clamp(0.95rem,4vw,1.3rem)] font-black leading-none text-forest">
                  {stat.value}
                </div>
                <div className="mt-1 text-[0.68rem] leading-snug text-slate sm:text-[0.72rem]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          <div className="overflow-hidden rounded-sm">
            <div className="relative aspect-[4/3] overflow-hidden bg-forest-deep">
              <ImageWithFallback
                image={sports.image}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out hover:scale-[1.04]"
              />
            </div>
            {sports.imageTag ? (
              <div className="bg-gold px-4 py-2.5 sm:py-3">
                <span className="break-words font-montserrat text-[0.72rem] font-extrabold uppercase tracking-[0.1em] text-forest-deep">
                  {sports.imageTag}
                </span>
              </div>
            ) : null}
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
