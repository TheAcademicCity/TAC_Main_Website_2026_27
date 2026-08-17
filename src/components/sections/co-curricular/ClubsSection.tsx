import { coCurricularPageContent } from "@/data/coCurricular";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

const clubMediaStyles = [
  { icon: "💡", className: "bg-[linear-gradient(150deg,var(--color-forest),#0c322c)]" },
  { icon: "📰", className: "bg-[linear-gradient(150deg,var(--color-violet),#3d0d63)]" },
  { icon: "🎨", className: "bg-[linear-gradient(150deg,var(--color-gold),#b9770f)]" },
  { icon: "👨‍🍳", className: "bg-[linear-gradient(150deg,var(--color-charcoal),#241f22)]" },
  { icon: "🌱", className: "bg-[linear-gradient(150deg,var(--color-emerald),#0c2b27)]" },
] as const;

export function ClubsSection() {
  const { clubs } = coCurricularPageContent;

  return (
    <Section
      id="clubs"
      spacing="compact"
      className="max-md:!bg-off-white max-md:!pt-4 max-md:!pb-7"
      containerClassName="max-md:!px-5"
    >
      {/* Mobile */}
      <div className="md:hidden">
        <RevealOnScroll>
          <SectionLabel className="!mb-2 before:hidden !text-[0.62rem] !tracking-[0.14em] !text-emerald">
            {clubs.label}
          </SectionLabel>
          <h2 className="font-montserrat text-[1.25rem] font-extrabold leading-[1.28] tracking-[-0.01em] text-navy">
            Where Curiosity Becomes a Skill
          </h2>
          <p className="mt-1.5 mb-[18px] text-[0.78125rem] leading-[1.55] text-[#999]">
            {clubs.description}
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-2 gap-2.5">
          {clubs.cards.map((card, index) => {
            const media = clubMediaStyles[index] ?? clubMediaStyles[0];
            return (
              <article
                key={card.tag}
                className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_20px_-14px_rgba(0,0,0,0.2)]"
              >
                <div
                  className={cn(
                    "flex h-[90px] items-center justify-center text-[1.375rem] text-white",
                    media.className,
                  )}
                  aria-hidden
                >
                  {media.icon}
                </div>
                <div className="p-2.5">
                  <h5 className="mb-0.5 font-montserrat text-[0.75rem] font-bold text-navy">
                    {card.tag}
                  </h5>
                  <p className="text-[0.65625rem] leading-[1.4] text-[#999]">{card.title}</p>
                </div>
              </article>
            );
          })}

          <article className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_20px_-14px_rgba(0,0,0,0.2)]">
            <div
              className="flex h-[90px] items-center justify-center bg-[linear-gradient(150deg,var(--color-cyan),#1a7d92)] text-[1.375rem] text-white"
              aria-hidden
            >
              🎭
            </div>
            <div className="p-2.5">
              <h5 className="mb-0.5 font-montserrat text-[0.75rem] font-bold text-navy">
                Performing Arts & Heritage
              </h5>
              <p className="text-[0.65625rem] leading-[1.4] text-[#999]">
                Dance. Theatre. Music. Language.
              </p>
            </div>
          </article>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <RevealOnScroll>
          <SectionLabel>{clubs.label}</SectionLabel>
          <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold leading-tight text-forest-deep">
            {clubs.title}
          </h2>
          <p className="mt-2 max-w-[42ch] whitespace-normal text-[0.92rem] text-slate sm:max-w-none sm:text-[0.96rem] lg:whitespace-nowrap">
            {clubs.description}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          <div className="mt-6 grid grid-cols-1 gap-1.5 sm:mt-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] lg:grid-rows-[300px_220px]">
            {clubs.cards.map((card) => (
              <article
                key={card.tag}
                className={cn(
                  "group relative overflow-hidden rounded-lg transition-transform duration-300 hover:z-[2] hover:scale-[1.01]",
                  card.hero
                    ? "min-h-[240px] sm:min-h-[280px] lg:row-span-2 lg:min-h-0"
                    : "min-h-[180px] sm:min-h-[220px] lg:min-h-0",
                )}
                style={{ background: card.gradient }}
              >
                <div className="absolute inset-0">
                  <ImageWithFallback
                    image={card.image}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className={cn(
                      "object-cover transition-transform duration-500 group-hover:scale-105",
                      card.imageObjectClassName ?? "object-center",
                    )}
                  />
                </div>
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(5,22,18,0.85)] via-[rgba(5,22,18,0.3)] to-transparent"
                />
                <div
                  className={cn(
                    "relative z-[1] flex h-full flex-col justify-end",
                    card.hero ? "p-5 sm:p-8" : "p-4 sm:p-5 sm:px-6",
                  )}
                >
                  <span className="mb-2 inline-block w-fit rounded-lg border border-white/30 bg-white/15 px-2.5 py-1 font-montserrat text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                    {card.tag}
                  </span>
                  <h3
                    className={cn(
                      "font-montserrat font-extrabold leading-tight text-white",
                      card.hero ? "text-[1.25rem] sm:text-[1.45rem]" : "text-[0.95rem] sm:text-base",
                    )}
                  >
                    {card.title}
                  </h3>
                  {card.description ? (
                    <p className="mt-1 max-w-[36ch] text-[0.8rem] leading-relaxed text-white/72 sm:text-[0.82rem]">
                      {card.description}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-1.5 flex flex-col gap-2 rounded-lg bg-ink px-4 py-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-7 sm:px-7 sm:py-5">
            <span className="font-montserrat text-[0.7rem] font-extrabold uppercase tracking-[0.14em] text-gold whitespace-normal sm:whitespace-nowrap">
              {clubs.performingArts.label}
            </span>
            <span className="flex-1 text-[0.86rem] text-white/60 sm:text-[0.88rem]">
              {clubs.performingArts.description}
            </span>
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
