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
    <Section id="leadership" background="white" spacing="compact">
      <RevealOnScroll>
        <SectionLabel>{leadership.label}</SectionLabel>
        <h2 className="font-montserrat text-[clamp(1.3rem,5.5vw,1.75rem)] font-extrabold leading-tight text-forest-deep md:text-[clamp(1.35rem,2.2vw,1.75rem)]">
          {leadership.title}
        </h2>
      </RevealOnScroll>

      <div className="mt-5 overflow-hidden rounded-lg border border-line sm:mt-6">
        {leadership.leaders.map((leader, index) => (
          <RevealOnScroll key={leader.name} delay={Math.min(index, 2) as 0 | 1 | 2}>
            <article
              className={cn(
                "grid overflow-hidden bg-white transition-shadow duration-300 hover:shadow-[0_12px_40px_-16px_rgba(15,61,56,0.15)] lg:grid-cols-[280px_1fr]",
                leader.altLayout && "lg:grid-cols-[1fr_280px]",
                index < leadership.leaders.length - 1 && "border-b border-line",
              )}
            >
              <div
                className={cn(
                  "relative min-h-[200px] overflow-hidden bg-forest-deep sm:min-h-[260px] lg:min-h-[280px]",
                  leader.altLayout && "lg:order-2",
                )}
              >
                <ImageWithFallback
                  image={leader.image}
                  fill
                  sizes="(max-width: 1024px) 100vw, 280px"
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
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(5,22,18,0.92)] to-transparent px-3 py-2.5 sm:px-4 sm:py-3">
                  <div className="font-montserrat text-[0.92rem] font-extrabold text-white sm:text-[0.98rem]">
                    {leader.name}
                  </div>
                  <div className="mt-0.5 text-[0.7rem] font-medium text-gold sm:text-[0.72rem]">
                    {leader.role}
                  </div>
                </div>
              </div>

              <div
                className={cn(
                  "relative bg-white px-4 py-5 text-left sm:px-6 sm:py-6 lg:px-8 lg:py-7",
                  leader.altLayout && "lg:order-1",
                )}
              >
                <SectionLabel>{leader.messageLabel}</SectionLabel>
                <div
                  aria-hidden
                  className="font-montserrat text-3xl font-black leading-none text-forest/8 sm:text-4xl"
                >
                  &ldquo;
                </div>
                <blockquote className="mt-1.5 text-left text-[0.92rem] leading-relaxed text-slate sm:text-[0.96rem]">
                  {highlightText(leader.quote, leader.quoteHighlights)}
                </blockquote>
                <p className="mt-3 text-left text-[0.92rem] leading-relaxed text-slate sm:text-[0.96rem]">
                  {leader.body}
                </p>
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
