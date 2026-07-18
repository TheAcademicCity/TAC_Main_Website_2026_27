import { boardingPageContent } from "@/data/boarding";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

const stepDotStyles = [
  "bg-gold text-forest-deep",
  "border-2 border-gold bg-white text-gold-dark",
  "border-2 border-gold bg-white text-gold-dark",
  "border-2 border-gold bg-white text-gold-dark",
  "bg-emerald text-white",
] as const;

export function OutpassSection() {
  const { outpass } = boardingPageContent;

  return (
    <Section id="outpass" background="paper">
      <RevealOnScroll>
        <SectionLabel>{outpass.label}</SectionLabel>
        <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold text-forest-deep">
          {outpass.title}
        </h2>
        <p className="mt-2 whitespace-nowrap text-[0.96rem] text-slate">{outpass.description}</p>
      </RevealOnScroll>

      <div className="mt-8 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <RevealOnScroll delay={1}>
          <ol className="relative flex flex-col gap-8">
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-[22px] left-[22px] top-[22px] z-0 w-0.5 -translate-x-1/2 bg-gold"
            />
            {outpass.steps.map((step, index) => (
              <li key={step.title} className="relative flex items-center gap-4">
                <div
                  className={cn(
                    "relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full font-montserrat text-[0.9rem] font-black",
                    stepDotStyles[index] ?? stepDotStyles[0],
                  )}
                >
                  {step.number}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-montserrat text-[0.9rem] font-extrabold text-forest-deep">
                    {step.title}
                  </h3>
                  <p className="mt-0.5 text-[0.82rem] leading-snug text-slate">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </RevealOnScroll>

        <RevealOnScroll delay={2}>
          <aside className="rounded bg-forest-deep px-7 py-7">
            <h3 className="font-montserrat text-[0.95rem] font-extrabold tracking-[0.04em] text-gold">
              Rules &amp; Guidelines
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {outpass.rules.map((rule) => (
                <li
                  key={rule}
                  className="flex items-start gap-2.5 text-[0.86rem] leading-relaxed text-white/72"
                >
                  <Icon name="checkCircle" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                  {rule}
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded border border-gold/30 bg-gold/12 px-4 py-3 text-[0.84rem] text-white/85">
              {outpass.note}
            </p>
          </aside>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
