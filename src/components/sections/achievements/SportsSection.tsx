import { achievementsPageContent } from "@/data/achievements";
import { ChapterHeader, PersonAvatar } from "@/components/sections/achievements/shared";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Container } from "@/components/ui/Container";

export function SportsSection() {
  const { sports } = achievementsPageContent;

  return (
    <section id="sports" className="section-py bg-white">
      <Container>
        <RevealOnScroll>
          <ChapterHeader
            number={sports.chapter}
            label={sports.label}
            title={sports.title}
            description={sports.description}
          />
        </RevealOnScroll>

        <div className="grid gap-6 lg:grid-cols-2">
          <RevealOnScroll className="relative overflow-hidden bg-forest-deep p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-8 -right-8 h-[180px] w-[180px] rounded-full border-[30px] border-white/5"
            />
            <PersonAvatar className="mb-4" />
            <span className="mb-3 block text-[2.5rem]">{sports.hero.medal}</span>
            <p className="font-montserrat text-[0.72rem] font-bold uppercase tracking-[0.12em] text-gold">
              {sports.hero.event}
            </p>
            <h3 className="mt-2 font-montserrat text-[1.6rem] font-bold italic leading-tight text-white">
              {sports.hero.title}
            </h3>
            <p className="mt-2 text-[0.88rem] text-white/70">{sports.hero.athlete}</p>
            <p className="mt-3 text-[0.84rem] leading-relaxed text-white/50">{sports.hero.description}</p>
          </RevealOnScroll>

          <RevealOnScroll delay={1} className="flex flex-col gap-4">
            {sports.cards.map((card) => (
              <div
                key={card.title}
                className="flex gap-5 border border-line p-5 transition-colors hover:border-emerald hover:bg-paper"
              >
                <span className="shrink-0 text-[1.8rem]">{card.icon}</span>
                <div>
                  <h4 className="font-montserrat text-[0.95rem] font-bold text-forest-deep">{card.title}</h4>
                  <p className="mt-1 text-[0.84rem] leading-relaxed text-slate">{card.detail}</p>
                </div>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
