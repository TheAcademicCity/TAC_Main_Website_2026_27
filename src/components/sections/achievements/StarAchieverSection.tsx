import { achievementsPageContent } from "@/data/achievements";
import { PersonAvatar } from "@/components/sections/achievements/shared";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Container } from "@/components/ui/Container";

export function StarAchieverSection() {
  const { starAchiever } = achievementsPageContent;
  const { featured } = starAchiever;

  return (
    <section id="academics" className="relative overflow-hidden bg-forest-deep">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border-[50px] border-white/4"
      />

      <Container className="relative z-[1]">
        <div className="grid min-h-[360px] md:grid-cols-2">
          <RevealOnScroll className="flex flex-col justify-center py-[clamp(2.5rem,5vw,4rem)]">
            <PersonAvatar className="mb-4" size="lg" />
            <p className="mb-2 font-montserrat text-[0.68rem] font-bold uppercase tracking-[0.2em] text-gold">
              {featured.eyebrow}
            </p>
            <h2 className="font-montserrat text-[clamp(1.8rem,3.5vw,3rem)] font-extrabold italic leading-tight text-white">
              {featured.name}{" "}
              {featured.nameHighlight ? (
                <em className="not-italic text-gold">{featured.nameHighlight}</em>
              ) : null}
            </h2>
            <p className="mt-3 font-montserrat text-[3.5rem] font-black leading-none text-gold">
              {featured.stat}
            </p>
            <p className="mt-1 text-[0.84rem] text-white/55">{featured.statLabel}</p>
            <p className="mt-4 max-w-[40ch] text-[0.92rem] leading-relaxed text-white/62">
              {featured.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {featured.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gold/15 px-3 py-1 font-montserrat text-[0.68rem] font-bold uppercase tracking-[0.12em] text-gold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll
            delay={1}
            className="flex flex-col justify-center border-t border-white/8 bg-white/4 py-[clamp(2rem,4vw,3.5rem)] md:border-l md:border-t-0"
          >
            <p className="mb-5 font-montserrat text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white/40">
              {starAchiever.subHeading}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {starAchiever.subAchievers.map((achiever) => (
                <div
                  key={achiever.name}
                  className="border border-white/10 bg-white/6 p-5"
                >
                  <PersonAvatar className="mb-3" size="sm" />
                  <p className="font-montserrat text-[0.82rem] font-bold text-white">{achiever.name}</p>
                  <p className="mt-1 font-montserrat text-[1.4rem] font-black leading-none text-gold">
                    {achiever.value}
                  </p>
                  <p className="mt-1 text-[0.78rem] leading-snug text-white/50">{achiever.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 border border-gold/20 bg-gold/8 px-5 py-4">
              <p className="font-montserrat text-[1.4rem] font-black text-gold">
                {starAchiever.admissionsNote.value}
              </p>
              <p className="mt-1 text-[0.78rem] text-white/50">{starAchiever.admissionsNote.label}</p>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
