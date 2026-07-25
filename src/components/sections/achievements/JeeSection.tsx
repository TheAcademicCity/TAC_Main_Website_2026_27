import { achievementsPageContent } from "@/data/achievements";
import { ChapterHeader, PersonAvatar } from "@/components/sections/achievements/shared";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Container } from "@/components/ui/Container";

export function JeeSection() {
  const { jee } = achievementsPageContent;

  return (
    <section id="jee" className="section-py bg-white">
      <Container>
        <RevealOnScroll>
          <ChapterHeader
            number={jee.chapter}
            label={jee.label}
            title={jee.title}
            description={jee.description}
          />
        </RevealOnScroll>

        <div className="mb-8 grid items-start gap-8 lg:grid-cols-2 lg:gap-16">
          <RevealOnScroll className="relative overflow-hidden bg-forest-deep p-9">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-2 -top-4 font-montserrat text-[8rem] leading-none text-gold/10"
            >
              &ldquo;
            </span>
            <PersonAvatar className="mb-4" />
            <p className="font-montserrat text-[3rem] font-black leading-none text-gold">
              {jee.highlight.percentile}
            </p>
            <p className="mb-4 text-[0.8rem] text-white/50">JEE Percentile</p>
            <h3 className="font-montserrat text-2xl font-bold italic text-white">{jee.highlight.name}</h3>
            <p className="mt-1 text-[0.85rem] font-semibold text-gold">{jee.highlight.university}</p>
            <p className="mt-3 text-[0.85rem] leading-relaxed text-white/60">{jee.highlight.description}</p>
          </RevealOnScroll>

          <RevealOnScroll delay={1} className="flex flex-col gap-2">
            {jee.topRows.map((row) => (
              <div
                key={row.name}
                className="flex items-center justify-between gap-4 border border-line px-5 py-3 transition-colors hover:border-emerald hover:bg-paper"
              >
                <div className="flex items-center gap-3">
                  <PersonAvatar size="sm" className="bg-forest/8 text-forest/40" />
                  <div>
                    <p className="font-montserrat text-[0.88rem] font-bold text-forest-deep">{row.name}</p>
                    <p className="text-[0.74rem] text-slate">{row.batch}</p>
                  </div>
                </div>
                <span className="shrink-0 bg-forest/8 px-3 py-1 font-montserrat text-[0.95rem] font-black text-forest">
                  {row.percentile}
                </span>
              </div>
            ))}
          </RevealOnScroll>
        </div>

        <p className="mb-3 font-montserrat text-[0.7rem] font-bold uppercase tracking-[0.14em] text-slate">
          {jee.moreLabel}
        </p>
        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {jee.moreChips.map((chip, index) => (
            <RevealOnScroll key={chip.name} delay={(index % 4) as 0 | 1 | 2 | 3}>
              <div className="border border-line bg-paper p-4">
                <PersonAvatar size="sm" className="mb-2 bg-forest/8 text-forest/40" />
                <p className="font-montserrat text-[0.82rem] font-bold text-forest-deep">{chip.name}</p>
                <p className="mt-1 font-montserrat text-base font-black text-emerald">{chip.percentile}</p>
                <p className="mt-1 text-[0.7rem] text-slate">{chip.batch}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
