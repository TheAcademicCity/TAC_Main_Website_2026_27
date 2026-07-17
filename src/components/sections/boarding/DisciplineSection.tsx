import { boardingPageContent } from "@/data/boarding";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

const stepAccentStyles = [
  { badge: "bg-emerald/10 text-emerald border-emerald/30" },
  { badge: "bg-gold/10 text-gold-dark border-gold/40" },
  { badge: "bg-violet/10 text-violet border-violet/30" },
  { badge: "bg-forest/10 text-forest border-forest/30" },
] as const;

export function DisciplineSection() {
  const { discipline } = boardingPageContent;

  return (
    <Section id="discipline">
      <RevealOnScroll className="mx-auto max-w-3xl text-center">
        <SectionLabel centered>{discipline.label}</SectionLabel>
        <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold text-forest-deep">
          {discipline.title}
        </h2>
        <p className="mx-auto mt-2 max-w-[52ch] text-[0.96rem] text-slate">{discipline.description}</p>
      </RevealOnScroll>

      <RevealOnScroll delay={1}>
        <div className="mt-7 border border-gold/30 bg-gold/8 px-5 py-4 text-center">
          <p className="font-montserrat text-[0.72rem] font-extrabold uppercase tracking-[0.1em] text-gold-dark">
            {discipline.banner}
          </p>
        </div>
      </RevealOnScroll>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {discipline.steps.map((step, index) => {
          const accent = stepAccentStyles[index] ?? stepAccentStyles[0];

          return (
            <RevealOnScroll key={step.badge} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
              <article className="flex h-full flex-col border border-line bg-paper p-5">
                <span
                  className={cn(
                    "mb-3 inline-block w-fit border px-2.5 py-1 font-montserrat text-[0.68rem] font-extrabold uppercase tracking-[0.12em]",
                    accent.badge,
                  )}
                >
                  {step.badge} · {step.violation}
                </span>
                <h3 className="font-montserrat text-[0.95rem] font-extrabold text-forest-deep">
                  {step.title}
                </h3>
                <p className="mt-2 flex-1 text-[0.82rem] leading-relaxed text-slate">{step.description}</p>
              </article>
            </RevealOnScroll>
          );
        })}
      </div>
    </Section>
  );
}
