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
        <h2 className="font-montserrat text-[clamp(1.35rem,6vw,2rem)] font-extrabold leading-tight text-forest-deep md:text-[clamp(1.5rem,2.6vw,2rem)]">
          {outpass.title}
        </h2>
        <p className="mt-2 max-w-[42ch] whitespace-normal text-[0.92rem] text-slate sm:max-w-none sm:text-[0.96rem] lg:whitespace-nowrap">
          {outpass.description}
        </p>
      </RevealOnScroll>

      <div className="mt-6 grid items-start gap-7 sm:mt-8 lg:grid-cols-2 lg:gap-16">
        <RevealOnScroll delay={1}>
          <ol className="relative flex flex-col gap-6 sm:gap-8">
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-[22px] left-[22px] top-[22px] z-0 w-0.5 -translate-x-1/2 bg-gold"
            />
            {outpass.steps.map((step, index) => (
              <li key={step.title} className="relative flex items-start gap-3 sm:items-center sm:gap-4">
                <div
                  className={cn(
                    "relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full font-montserrat text-[0.9rem] font-black",
                    stepDotStyles[index] ?? stepDotStyles[0],
                  )}
                >
                  {step.number}
                </div>
                <div className="min-w-0 flex-1 pt-1 sm:pt-0">
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
          <div className="flex flex-col">
            <aside className="rounded-lg bg-forest-deep px-5 py-5 sm:px-7 sm:py-7">
              <h3 className="font-montserrat text-[0.95rem] font-extrabold tracking-[0.04em] text-gold">
                Rules &amp; Guidelines
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {outpass.rules.map((rule) => (
                  <li
                    key={rule}
                    className="flex items-start gap-2.5 text-[0.84rem] leading-relaxed text-white/72 sm:text-[0.86rem]"
                  >
                    <Icon name="checkCircle" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                    <span className="min-w-0">{rule}</span>
                  </li>
                ))}
              </ul>
            </aside>
            <div className="hidden shrink-0 lg:block lg:h-10" aria-hidden />
            <blockquote className="mt-5 border-l-[3px] border-gold pl-3 text-[0.84rem] font-bold italic leading-relaxed text-slate sm:pl-4 sm:text-[0.86rem] lg:mt-0">
              {outpass.outingNote}
            </blockquote>
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
