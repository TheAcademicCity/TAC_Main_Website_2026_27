import { achievementsPageContent } from "@/data/achievements";
import { ChapterHeader, PersonAvatar } from "@/components/sections/achievements/shared";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Container } from "@/components/ui/Container";

export function NeetSection() {
  const { neet } = achievementsPageContent;

  return (
    <section id="neet" className="section-py bg-paper">
      <Container>
        <RevealOnScroll>
          <ChapterHeader
            number={neet.chapter}
            label={neet.label}
            title={neet.title}
            description={neet.description}
          />
        </RevealOnScroll>

        <div className="mb-6 grid gap-5 md:grid-cols-3">
          {neet.topCards.map((card, index) => (
            <RevealOnScroll
              key={card.name}
              delay={index as 0 | 1 | 2}
              className="relative overflow-hidden bg-forest-deep p-6 before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gold"
            >
              <PersonAvatar className="mb-4" size="sm" />
              <p className="font-montserrat text-[2.2rem] font-black leading-none text-gold">{card.score}</p>
              <p className="mt-2 font-montserrat text-[0.9rem] font-bold text-white">{card.name}</p>
              <p className="text-[0.78rem] text-white/55">{card.college}</p>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {neet.grid.map((card) => (
              <div
                key={card.name}
                className="flex flex-col gap-1 bg-white p-5 transition-colors hover:bg-paper"
              >
                <PersonAvatar size="sm" className="mb-2 bg-forest/8 text-forest/40" />
                <p className="font-montserrat text-[0.9rem] font-bold text-forest-deep">{card.name}</p>
                <p className="font-montserrat text-[1.4rem] font-black leading-none text-emerald">
                  {card.score}
                </p>
                <p className="text-[0.78rem] leading-snug text-slate">{card.college}</p>
                <p className="text-[0.7rem] text-slate/60">{card.batch}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
