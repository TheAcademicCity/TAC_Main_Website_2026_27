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
    { ...visionMission.vision, accent: "vision" as const },
    { ...visionMission.mission, accent: "mission" as const },
  ];

  return (
    <section id="vision" className="section-py-compact relative overflow-hidden bg-forest-deep">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[80px] -bottom-[80px] h-[280px] w-[280px] rounded-full border-[42px] border-white/4"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[50px] -top-[50px] h-[180px] w-[180px] rounded-full border-[28px] border-white/4"
      />

      <Container className="relative z-[1]">
        <div className="grid lg:grid-cols-[1fr_1px_1fr]">
          {cards.map((card, index) => (
            <div key={card.title} className="contents">
              {index > 0 ? <div className="hidden bg-white/10 lg:block" aria-hidden /> : null}
              <RevealOnScroll delay={index === 0 ? 0 : 1}>
                <article
                  className={cn(
                    "relative overflow-hidden px-[clamp(1.25rem,2.5vw,2rem)] py-[clamp(1.25rem,2.5vw,2rem)]",
                    card.accent === "vision" ? "border-t-4 border-gold" : "border-t-4 border-emerald",
                  )}
                >
                  <div
                    className={cn(
                      "mb-3 grid h-12 w-12 place-items-center rounded-[14px]",
                      card.accent === "vision" ? "bg-gold/12 text-gold" : "bg-emerald/12 text-emerald",
                    )}
                  >
                    <Icon name={card.icon} className="h-6 w-6" />
                  </div>
                  <h2 className="font-montserrat text-[clamp(1.25rem,2vw,1.75rem)] font-black text-white">
                    {card.title}
                  </h2>
                  <p className="mt-2.5 text-[0.94rem] font-light leading-relaxed text-white/68">
                    {highlightText(card.description, card.highlights)}
                  </p>
                </article>
              </RevealOnScroll>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
