import { boardingPageContent } from "@/data/boarding";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

const stepStyles = [
  {
    badge: "border-emerald bg-[#eef8f2] text-emerald",
    violation: "text-emerald",
  },
  {
    badge: "border-gold-dark bg-[#fff8eb] text-gold-dark",
    violation: "text-gold-dark",
  },
  {
    badge: "border-[#e06000] bg-[#fff3ea] text-[#e06000]",
    violation: "text-[#e06000]",
  },
  {
    badge: "border-red-600 bg-[#fef2f2] text-red-600",
    violation: "text-red-600",
  },
] as const;

export function DisciplineSection() {
  const { discipline } = boardingPageContent;

  return (
    <Section id="discipline">
      <RevealOnScroll>
        <SectionLabel>{discipline.label}</SectionLabel>
        <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold text-forest-deep">
          {discipline.title}
        </h2>
        <p className="mt-2 whitespace-nowrap text-[0.96rem] text-slate">{discipline.description}</p>
      </RevealOnScroll>

      <RevealOnScroll delay={1}>
        <div className="mt-8 bg-forest-deep px-7 py-4 text-center">
          <p className="font-montserrat text-[0.88rem] font-bold tracking-[0.04em] text-white">
            {discipline.banner}
          </p>
        </div>
      </RevealOnScroll>

      <div className="relative mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        <div
          aria-hidden
          className="pointer-events-none absolute left-[12%] right-[12%] top-10 z-0 hidden h-0.5 bg-gradient-to-r from-emerald via-gold to-red-600 lg:block"
        />
        {discipline.steps.map((step, index) => {
          const styles = stepStyles[index] ?? stepStyles[0];

          return (
            <RevealOnScroll key={step.badge} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
              <article className="relative flex flex-col items-center px-4 text-center">
                <div
                  className={cn(
                    "relative z-10 mb-5 grid h-20 w-20 place-items-center rounded-full border-2 font-montserrat text-[1.3rem] font-black",
                    styles.badge,
                  )}
                >
                  {step.badge}
                </div>
                <p
                  className={cn(
                    "mb-1.5 font-montserrat text-[0.68rem] font-extrabold uppercase tracking-[0.14em]",
                    styles.violation,
                  )}
                >
                  {step.violation}
                </p>
                <h3 className="font-montserrat text-[0.95rem] font-extrabold text-forest-deep">
                  {step.title}
                </h3>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-slate">{step.description}</p>
              </article>
            </RevealOnScroll>
          );
        })}
      </div>
    </Section>
  );
}
