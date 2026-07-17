import { aboutPageContent } from "@/data/about";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

function highlightText(text: string, highlights: readonly string[]) {
  if (!highlights.length) return text;

  const pattern = new RegExp(`(${highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
  const parts = text.split(pattern);

  return parts.map((part) => {
    const isHighlight = highlights.some((h) => h.toLowerCase() === part.toLowerCase());
    return isHighlight ? (
      <em key={part} className="not-italic font-semibold text-white">
        {part}
      </em>
    ) : (
      <span key={part}>{part}</span>
    );
  });
}

export function VisionMissionSection() {
  const { visionMission } = aboutPageContent;
  const cards = [
    { ...visionMission.vision, ghost: "V", accent: "vision" as const },
    { ...visionMission.mission, ghost: "M", accent: "mission" as const },
  ];

  return (
    <section id="vision" className="relative overflow-hidden bg-forest-deep py-[clamp(56px,7vw,88px)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[100px] -bottom-[100px] h-[380px] w-[380px] rounded-full border-[56px] border-white/4"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[60px] -top-[60px] h-[240px] w-[240px] rounded-full border-[36px] border-white/4"
      />

      <Container className="relative z-[1]">
        <div className="grid lg:grid-cols-[1fr_1px_1fr]">
          {cards.map((card, index) => (
            <div key={card.title} className="contents">
              {index > 0 ? <div className="hidden bg-white/10 lg:block" aria-hidden /> : null}
              <RevealOnScroll delay={index === 0 ? 0 : 1}>
                <article
                  className={cn(
                    "relative overflow-hidden px-[clamp(1.5rem,3vw,3.2rem)] py-[clamp(2rem,4vw,3.2rem)]",
                    card.accent === "vision" ? "border-t-4 border-gold" : "border-t-4 border-emerald",
                  )}
                >
                  <div
                    className={cn(
                      "mb-5 grid h-16 w-16 place-items-center rounded-[18px]",
                      card.accent === "vision" ? "bg-gold/12 text-gold" : "bg-emerald/12 text-emerald",
                    )}
                  >
                    <Icon name={card.icon} className="h-8 w-8" />
                  </div>
                  <h2 className="font-montserrat text-[clamp(1.5rem,2.5vw,2.2rem)] font-black text-white">
                    {card.title}
                  </h2>
                  <p className="mt-4 text-[1.02rem] font-light leading-relaxed text-white/68">
                    {highlightText(card.description, card.highlights)}
                  </p>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -bottom-4 right-4 font-montserrat text-[7rem] font-black leading-none text-white/4"
                  >
                    {card.ghost}
                  </span>
                </article>
              </RevealOnScroll>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
