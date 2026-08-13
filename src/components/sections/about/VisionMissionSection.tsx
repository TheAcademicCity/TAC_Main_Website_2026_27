import { aboutPageContent } from "@/data/about";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

function highlightText(
  text: string,
  highlights: readonly string[],
  highlightClassName: string,
) {
  if (!highlights.length) return text;

  const pattern = new RegExp(
    `(${highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "gi",
  );
  const parts = text.split(pattern);

  return parts.map((part) => {
    const isHighlight = highlights.some((h) => h.toLowerCase() === part.toLowerCase());
    return isHighlight ? (
      <em key={part} className={highlightClassName}>
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
    {
      ...visionMission.vision,
      accent: "vision" as const,
      gradient: "bg-[linear-gradient(150deg,var(--color-forest),#0c322c)]",
    },
    {
      ...visionMission.mission,
      accent: "mission" as const,
      gradient: "bg-[linear-gradient(150deg,var(--color-violet),#3d0d63)]",
    },
  ];

  return (
    <section id="vision" className="relative overflow-hidden">
      {/* Mobile */}
      <div className="bg-off-white px-5 pt-4 pb-7 md:hidden">
        <RevealOnScroll>
          <SectionLabel className="!mb-2 before:hidden !text-[0.62rem] !tracking-[0.14em] !text-emerald">
            Vision & Mission
          </SectionLabel>
        </RevealOnScroll>

        <div className="mt-1 space-y-3.5">
          {cards.map((card, index) => (
            <RevealOnScroll key={card.title} delay={index === 0 ? 0 : 1}>
              <article
                className={cn(
                  "relative overflow-hidden rounded-[18px] px-[22px] py-[22px] text-white",
                  card.gradient,
                )}
              >
                <div
                  className="mb-3 flex h-[42px] w-[42px] items-center justify-center rounded-xl bg-white/15 text-[1.1875rem]"
                  aria-hidden
                >
                  {card.icon}
                </div>
                <h4 className="mb-2 font-montserrat text-[0.75rem] font-bold uppercase tracking-[0.1em] text-white/65">
                  {card.label}
                </h4>
                <p className="text-[0.90625rem] font-medium leading-[1.55]">
                  {highlightText(
                    card.description,
                    card.highlights,
                    "not-italic font-medium text-gold",
                  )}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="section-py-compact relative hidden overflow-hidden bg-forest-deep md:block">
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
                {index > 0 ? (
                  <>
                    <div className="mx-1 h-px bg-white/10 lg:hidden" aria-hidden />
                    <div className="hidden bg-white/10 lg:block" aria-hidden />
                  </>
                ) : null}
                <RevealOnScroll delay={index === 0 ? 0 : 1}>
                  <article
                    className={cn(
                      "relative overflow-hidden px-1 py-5 sm:px-[clamp(1.25rem,2.5vw,2rem)] sm:py-[clamp(1.25rem,2.5vw,2rem)]",
                      card.accent === "vision"
                        ? "border-t-4 border-gold"
                        : "border-t-4 border-emerald",
                    )}
                  >
                    <span
                      className="mb-2.5 block text-[1.75rem] leading-none sm:mb-3 sm:text-[2rem]"
                      aria-hidden
                    >
                      {card.icon}
                    </span>
                    <h2 className="font-montserrat text-[clamp(1.25rem,2vw,1.75rem)] font-black text-white">
                      {card.title}
                    </h2>
                    <p className="mt-2.5 text-[0.9rem] font-light leading-relaxed text-white/68 sm:text-[0.94rem]">
                      {highlightText(
                        card.description,
                        card.highlights,
                        "not-italic font-semibold text-white",
                      )}
                    </p>
                  </article>
                </RevealOnScroll>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
