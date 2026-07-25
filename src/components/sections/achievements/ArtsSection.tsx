import { achievementsPageContent } from "@/data/achievements";
import { AchievementBadge, ChapterHeader } from "@/components/sections/achievements/shared";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Container } from "@/components/ui/Container";

export function ArtsSection() {
  const { arts } = achievementsPageContent;

  return (
    <section id="arts" className="section-py bg-paper">
      <Container>
        <RevealOnScroll>
          <ChapterHeader
            number={arts.chapter}
            label={arts.label}
            title={arts.title}
            description={arts.description}
          />
        </RevealOnScroll>

        <div className="grid gap-5 md:grid-cols-3">
          {arts.cards.map((card, index) => (
            <RevealOnScroll key={card.title} delay={(index % 3) as 0 | 1 | 2}>
              <article className="h-full border border-line bg-white p-6">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="text-2xl">{card.icon}</span>
                  <AchievementBadge tone={card.tagTone}>{card.tag}</AchievementBadge>
                </div>
                <h3 className="font-montserrat text-[1.05rem] font-bold text-forest-deep">{card.title}</h3>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-slate">{card.description}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="mt-6 grid overflow-hidden bg-forest-deep md:grid-cols-2">
          <div className="flex flex-col justify-center p-8 md:p-10">
            <span className="mb-4 text-4xl">{arts.author.icon}</span>
            <h3 className="whitespace-pre-line font-montserrat text-[clamp(1.4rem,2.5vw,1.8rem)] font-extrabold leading-tight text-white">
              {arts.author.title}
            </h3>
            <p className="mt-4 font-montserrat text-lg font-bold text-gold">{arts.author.name}</p>
            <p className="text-[0.84rem] text-white/55">{arts.author.detail}</p>
          </div>
          <div className="border-t border-white/8 bg-white/4 p-8 md:border-l md:border-t-0 md:p-10">
            <blockquote className="border-l-2 border-gold pl-4 font-montserrat text-[1.05rem] italic leading-relaxed text-white/85">
              &ldquo;{arts.author.quote}&rdquo;
            </blockquote>
            <p className="mt-4 text-[0.84rem] leading-relaxed text-white/55">{arts.author.description}</p>
            <p className="mt-3 text-[0.78rem] font-semibold uppercase tracking-wider text-gold/80">
              {arts.author.byline}
            </p>
          </div>
        </RevealOnScroll>

        <p className="mb-4 mt-8 font-montserrat text-[0.7rem] font-bold uppercase tracking-[0.14em] text-slate">
          {arts.designLabel}
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {arts.designStudents.map((student, index) => (
            <RevealOnScroll key={student.name} delay={(index % 4) as 0 | 1 | 2 | 3}>
              <div className="border border-line bg-white p-5 text-center">
                <span className="text-3xl">{student.icon}</span>
                <p className="mt-3 font-montserrat text-[0.9rem] font-bold text-forest-deep">{student.name}</p>
                <p className="mt-1 text-[0.82rem] text-slate">{student.project}</p>
                <p className="mt-2 text-[0.72rem] font-semibold uppercase tracking-wider text-emerald">
                  {student.target}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
