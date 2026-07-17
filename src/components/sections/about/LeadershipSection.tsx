import { aboutPageContent } from "@/data/about";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

function highlightText(text: string, highlights: readonly string[]) {
  if (!highlights.length) return text;

  const pattern = new RegExp(
    `(${highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "gi",
  );
  const parts = text.split(pattern);

  return parts.map((part, index) => {
    const isHighlight = highlights.some((h) => h.toLowerCase() === part.toLowerCase());
    return isHighlight ? (
      <em key={`${part}-${index}`} className="not-italic font-semibold text-forest-deep">
        {part}
      </em>
    ) : (
      <span key={`${part}-${index}`}>{part}</span>
    );
  });
}

export function LeadershipSection() {
  const { leadership } = aboutPageContent;

  return (
    <Section id="leadership" background="white">
      <RevealOnScroll>
        <SectionLabel>{leadership.label}</SectionLabel>
        <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold text-forest-deep">
          {leadership.title}
        </h2>
      </RevealOnScroll>

      <div className="mt-8 flex flex-col">
        {leadership.leaders.map((leader, index) => (
          <RevealOnScroll key={leader.name} delay={Math.min(index, 2) as 0 | 1 | 2}>
            <article
              className={cn(
                "grid overflow-hidden border border-line transition-shadow duration-300 hover:shadow-[0_12px_40px_-16px_rgba(15,61,56,0.15)] lg:grid-cols-[340px_1fr]",
                leader.altLayout && "lg:grid-cols-[1fr_340px]",
                index > 0 && "border-t-0",
              )}
            >
              <div
                className={cn(
                  "relative min-h-[320px] overflow-hidden bg-forest-deep",
                  leader.altLayout && "lg:order-2",
                )}
              >
                <ImageWithFallback
                  image={leader.image}
                  fill
                  sizes="340px"
                  className="object-cover object-[center_top]"
                />
                <div
                  className={cn(
                    "absolute inset-0",
                    leader.altLayout
                      ? "bg-gradient-to-l from-transparent via-transparent to-[rgba(10,44,40,0.35)]"
                      : "bg-gradient-to-r from-transparent via-transparent to-[rgba(10,44,40,0.35)]",
                  )}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(5,22,18,0.92)] to-transparent px-5 py-4">
                  <div className="font-montserrat text-[1.05rem] font-extrabold text-white">
                    {leader.name}
                  </div>
                  <div className="mt-0.5 text-[0.78rem] font-medium text-gold">{leader.role}</div>
                </div>
              </div>

              <div
                className={cn(
                  "relative bg-white px-7 py-8 lg:px-10 lg:py-9",
                  leader.altLayout && "lg:order-1 lg:text-right",
                )}
              >
                <SectionLabel
                  className={cn(leader.altLayout && "lg:flex-row-reverse")}
                >
                  {leader.messageLabel}
                </SectionLabel>
                <div
                  aria-hidden
                  className={cn(
                    "font-montserrat text-5xl font-black leading-none text-forest/8",
                    leader.altLayout && "lg:text-right",
                  )}
                >
                  &ldquo;
                </div>
                <blockquote className="mt-2 text-[1.02rem] leading-relaxed text-slate">
                  {highlightText(leader.quote, leader.quoteHighlights)}
                </blockquote>
                <p className="mt-4 text-[0.92rem] leading-relaxed text-slate">{leader.body}</p>
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
