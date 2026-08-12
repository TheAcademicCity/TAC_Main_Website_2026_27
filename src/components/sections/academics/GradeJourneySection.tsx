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

const mobileBorderColors = [
  "border-t-forest",
  "border-t-emerald",
  "border-t-gold",
  "border-t-violet",
] as const;

function JourneyStep({ step }: { step: GradeJourneyStep }) {
  const styles = stepStyles[step.accent];

  return (
    <article className="relative z-[1] flex h-full flex-col text-center">
      <div className="mb-4 flex justify-center sm:mb-5">
        <div
          className={cn(
            "grid h-12 w-12 place-items-center rounded-full border-2 bg-white font-montserrat text-[0.8rem] font-black sm:h-14 sm:w-14 sm:text-[0.85rem]",
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
      <h4 className="px-1 font-montserrat text-[0.92rem] font-extrabold text-forest-deep sm:px-2 sm:text-[0.94rem]">
        {step.title}
      </h4>
      <div className="mt-2 flex flex-1 flex-col">
        <p className="flex-1 whitespace-normal px-1 text-[0.82rem] leading-relaxed text-slate sm:whitespace-pre-line sm:px-3">
          {step.description}
        </p>
        <div className="mt-3 flex flex-wrap justify-center gap-1.5 px-1 sm:px-2">
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
    <Section
      id="progression"
      background="white"
      className="max-md:!py-[34px]"
      containerClassName="max-md:!px-5"
    >
      {/* Mobile */}
      <div className="md:hidden">
        <RevealOnScroll>
          <SectionLabel className="!mb-2 before:hidden !text-[0.62rem] !tracking-[0.14em] !text-emerald">
            {gradeJourney.label}
          </SectionLabel>
          <h2 className="font-montserrat text-[1.25rem] font-extrabold leading-[1.28] tracking-[-0.01em] text-navy">
            Grade 5 to 12 — A Clear Path
          </h2>
          <p className="mt-1.5 mb-5 text-[0.78125rem] leading-[1.55] text-[#999]">
            {gradeJourney.description}
          </p>
        </RevealOnScroll>

        <div className="scrollbar-none -mx-5 flex snap-x snap-mandatory gap-3.5 overflow-x-auto px-5 pb-1.5">
          {gradeJourney.steps.map((step, index) => (
            <article
              key={step.grades}
              className={cn(
                "w-[195px] shrink-0 snap-start rounded-[18px] border-t-4 bg-white p-[18px] shadow-[0_8px_22px_-14px_rgba(0,0,0,0.2)]",
                mobileBorderColors[index] ?? mobileBorderColors[0],
              )}
            >
              <div className="font-montserrat text-[1.375rem] font-extrabold text-forest">
                {step.grades}
              </div>
              <div className="mb-2.5 font-montserrat text-[0.625rem] font-bold uppercase tracking-[0.06em] text-[#999]">
                {step.phase}
              </div>
              <h4 className="mb-1.5 font-montserrat text-[0.84375rem] font-bold text-navy">
                {step.title}
              </h4>
              <p className="mb-2.5 text-[0.6875rem] leading-[1.5] text-[#999] whitespace-normal">
                {step.description.replace(/\n/g, " ")}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {step.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-xl bg-off-white px-2 py-1 text-[0.59375rem] font-semibold text-charcoal"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <RevealOnScroll>
          <SectionLabel>{gradeJourney.label}</SectionLabel>
          <SectionTitle className="mt-1 text-[clamp(1.55rem,2.8vw,2.1rem)]">
            {gradeJourney.title}
          </SectionTitle>
          <p className="mt-3 max-w-[42ch] whitespace-normal text-[0.92rem] text-slate sm:max-w-none sm:text-[1rem] lg:whitespace-nowrap">
            {gradeJourney.description}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          <div className="relative mt-7 grid items-stretch gap-6 sm:mt-10 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">
            <div
              aria-hidden
              className="pointer-events-none absolute left-[6%] right-[6%] top-7 hidden h-0.5 bg-gradient-to-r from-emerald via-gold to-violet xl:block"
            />
            {gradeJourney.steps.map((step) => (
              <JourneyStep key={step.grades} step={step} />
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
