import Image from "next/image";
import { coCurricularPageContent } from "@/data/coCurricular";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

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
          {clubs.cards.map((card) => (
            <article
              key={card.tag}
              className="relative overflow-hidden rounded-2xl bg-forest-deep shadow-[0_8px_20px_-14px_rgba(0,0,0,0.2)]"
            >
              <div className="relative aspect-[4/3]">
                <ImageWithFallback
                  image={card.image}
                  fill
                  sizes="50vw"
                  className={cn("object-cover", card.imageObjectClassName ?? "object-center")}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(5,22,18,0.88)] via-[rgba(5,22,18,0.35)] to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 z-[1] p-2.5">
                  <h5 className="mb-0.5 font-montserrat text-[0.75rem] font-bold text-white">
                    {card.tag}
                  </h5>
                  <p className="text-[0.65625rem] leading-[1.4] text-white/80">{card.title}</p>
                </div>
              </div>
            </article>
          ))}

          <article className="relative overflow-hidden rounded-2xl bg-forest-deep shadow-[0_8px_20px_-14px_rgba(0,0,0,0.2)]">
            <div className="relative aspect-[4/3]">
              {clubs.performingArts.mobileImage ? (
                <ImageWithFallback
                  image={clubs.performingArts.mobileImage}
                  fill
                  sizes="50vw"
                  className="object-cover object-center"
                />
              ) : null}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(5,22,18,0.88)] via-[rgba(5,22,18,0.35)] to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 z-[1] p-2.5">
                <h5 className="mb-0.5 font-montserrat text-[0.75rem] font-bold text-white">
                  {clubs.performingArts.mobileLabel ?? clubs.performingArts.label}
                </h5>
                <p className="text-[0.65625rem] leading-[1.4] text-white/80">
                  {clubs.performingArts.mobileSubtitle ?? "Dance. Theatre. Music."}
                </p>
              </div>
            </div>
          </article>
        </div>

        <RevealOnScroll>
          <div className="mt-4 text-center">
            <p className="font-montserrat text-[0.5625rem] font-bold uppercase tracking-[0.14em] text-[#999]">
              {clubs.performingArts.musicPartners.label}
            </p>
            <div className="mt-1 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {clubs.performingArts.musicPartners.mobileLogos.map((logo) => (
                <Image
                  key={logo.src}
                  src={logo.src}
                  alt={logo.alt}
                  width={220}
                  height={64}
                  className="h-12 w-auto max-w-[220px] object-contain"
                />
              ))}
            </div>
          </div>
        </RevealOnScroll>
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

          <div className="mt-1.5 overflow-hidden rounded-[12px] bg-ink px-4 py-2.5 sm:px-5 sm:py-3">
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-0">
              <div className="w-fit shrink-0 border-b border-white/12 pb-2 text-center sm:border-b-0 sm:border-r sm:pb-0 sm:pr-3">
                <h3 className="font-montserrat text-[0.72rem] font-extrabold uppercase leading-[1.18] tracking-[0.1em] text-gold lg:text-[0.76rem]">
                  {clubs.performingArts.titleLines[0]}
                  <br />
                  {clubs.performingArts.titleLines[1]}
                </h3>
              </div>

              <div className="w-fit shrink-0 border-b border-white/12 pb-2 text-center sm:border-b-0 sm:border-r sm:px-3 sm:pb-0">
                <p className="text-[0.8rem] leading-[1.4] text-white/72 sm:whitespace-nowrap lg:text-[0.84rem]">
                  {clubs.performingArts.description}
                </p>
              </div>

              <div className="w-fit shrink-0 text-center sm:pl-3">
                <div className="rounded-[10px] border border-white/12 bg-white/[0.06] px-3 py-2">
                  <p className="mb-1 font-outfit text-[0.58rem] font-bold uppercase tracking-[0.1em] text-white/80">
                    {clubs.performingArts.musicPartners.label}
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
                    {clubs.performingArts.musicPartners.logos.map((logo) => (
                      <Image
                        key={logo.src}
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width ?? 168}
                        height={logo.height ?? 48}
                        className="h-7 w-auto max-w-[148px] object-contain sm:h-8"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
