import { coCurricularPageContent } from "@/data/coCurricular";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

export function ClubsSection() {
  const { clubs } = coCurricularPageContent;

  return (
    <Section id="clubs">
      <RevealOnScroll>
        <SectionLabel>{clubs.label}</SectionLabel>
        <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold text-forest-deep">
          {clubs.title}
        </h2>
        <p className="mt-2 whitespace-nowrap text-[0.96rem] text-slate">{clubs.description}</p>
      </RevealOnScroll>

      <RevealOnScroll delay={1}>
        <div className="mt-8 grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] lg:grid-rows-[300px_220px]">
          {clubs.cards.map((card) => (
            <article
              key={card.tag}
              className={cn(
                "group relative overflow-hidden transition-transform duration-300 hover:z-[2] hover:scale-[1.01]",
                card.hero ? "min-h-[320px] lg:row-span-2 lg:min-h-0" : "min-h-[220px] lg:min-h-0",
              )}
              style={{ background: card.gradient }}
            >
              <div className="absolute inset-0">
                <ImageWithFallback
                  image={card.image}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(5,22,18,0.85)] via-[rgba(5,22,18,0.3)] to-transparent"
              />
              <div
                className={cn(
                  "relative z-[1] flex h-full flex-col justify-end",
                  card.hero ? "p-8" : "p-5 px-6",
                )}
              >
                <span className="mb-2 inline-block w-fit border border-white/30 bg-white/15 px-2.5 py-1 font-montserrat text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                  {card.tag}
                </span>
                <h3
                  className={cn(
                    "font-montserrat font-extrabold leading-tight text-white",
                    card.hero ? "text-[1.45rem]" : "text-base",
                  )}
                >
                  {card.title}
                </h3>
                {card.description ? (
                  <p className="mt-1 max-w-[36ch] text-[0.82rem] leading-relaxed text-white/72">
                    {card.description}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-1.5 flex flex-wrap items-center gap-4 bg-ink px-5 py-5 sm:gap-7 sm:px-7">
          <span className="whitespace-nowrap font-montserrat text-[0.7rem] font-extrabold uppercase tracking-[0.14em] text-gold">
            {clubs.performingArts.label}
          </span>
          <span className="flex-1 text-[0.88rem] text-white/60">{clubs.performingArts.description}</span>
        </div>
      </RevealOnScroll>
    </Section>
  );
}
