import { achievementsPageContent } from "@/data/achievements";
import { AchievementBadge, ChapterHeader, PersonAvatar } from "@/components/sections/achievements/shared";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const accentColors = ["bg-violet", "bg-gold", "bg-emerald", "bg-forest", "bg-cyan", "bg-violet"];

export function CommerceSection() {
  const { commerce } = achievementsPageContent;

  return (
    <section id="commerce" className="section-py bg-white">
      <Container>
        <RevealOnScroll>
          <ChapterHeader
            number={commerce.chapter}
            label={commerce.label}
            title={commerce.title}
            description={commerce.description}
          />
        </RevealOnScroll>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {commerce.cards.map((card, index) => (
            <RevealOnScroll
              key={card.name}
              delay={(index % 3) as 0 | 1 | 2}
              className="group relative overflow-hidden border border-line p-7 transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_-16px_rgba(15,61,56,0.16)]"
            >
              <div className={cn("absolute inset-x-0 top-0 h-1", accentColors[index % accentColors.length])} />
              <AchievementBadge tone={card.badgeTone}>{card.badge}</AchievementBadge>
              <PersonAvatar size="sm" className="mb-3 mt-4 bg-forest/8 text-forest/40" />
              <p className="font-montserrat text-[1.2rem] font-black leading-tight text-forest-deep">
                {card.achievement}
              </p>
              <p className="mt-1 font-montserrat text-[0.88rem] font-bold text-forest">{card.name}</p>
              <p className="mt-1 text-[0.82rem] leading-relaxed text-slate">{card.detail}</p>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
