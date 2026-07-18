import { academicsPageContent } from "@/data/academics";
import { Chip } from "@/components/ui/Chip";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";
import type { GradeJourneyStep } from "@/types/academics";

const stepStyles = {
  emerald: {
    dot: "border-emerald text-emerald",
    phase: "text-emerald",
  },
  gold: {
    dot: "border-gold-dark text-gold-dark",
    phase: "text-gold-dark",
  },
  violet: {
    dot: "border-violet text-violet",
    phase: "text-violet",
  },
} as const;

function JourneyStep({ step }: { step: GradeJourneyStep }) {
  const styles = stepStyles[step.accent];

  return (
    <article className="relative z-[1] flex h-full flex-col text-center">
      <div className="mb-5 flex justify-center">
        <div
          className={cn(
            "grid h-14 w-14 place-items-center rounded-full border-2 bg-white font-montserrat text-[0.85rem] font-black",
            styles.dot,
          )}
        >
          {step.grades}
        </div>
      </div>
      <p
        className={cn(
          "mb-1 font-montserrat text-[0.66rem] font-extrabold uppercase tracking-[0.14em]",
          styles.phase,
        )}
      >
        {step.phase}
      </p>
      <h4 className="px-2 font-montserrat text-[0.94rem] font-extrabold text-forest-deep">
        {step.title}
      </h4>
      <div className="mt-2 flex flex-1 flex-col">
        <p className="flex-1 whitespace-pre-line px-3 text-[0.82rem] leading-relaxed text-slate">
          {step.description}
        </p>
        <div className="mt-3 flex flex-wrap justify-center gap-1.5 px-2">
          {step.chips.map((chip) => (
            <Chip key={chip} className="px-2.5 py-1 text-[0.72rem]">
              {chip}
            </Chip>
          ))}
        </div>
      </div>
    </article>
  );
}

export function GradeJourneySection() {
  const { gradeJourney } = academicsPageContent;

  return (
    <Section id="progression" background="white">
      <RevealOnScroll>
        <SectionLabel>{gradeJourney.label}</SectionLabel>
        <SectionTitle className="mt-1">{gradeJourney.title}</SectionTitle>
        <p className="mt-3 max-w-[58ch] text-slate">{gradeJourney.description}</p>
      </RevealOnScroll>

      <RevealOnScroll delay={1}>
        <div className="relative mt-10 grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-4">
          <div
            aria-hidden
            className="pointer-events-none absolute left-[6%] right-[6%] top-7 hidden h-0.5 bg-gradient-to-r from-emerald via-gold to-violet xl:block"
          />
          {gradeJourney.steps.map((step) => (
            <JourneyStep key={step.grades} step={step} />
          ))}
        </div>
      </RevealOnScroll>
    </Section>
  );
}
