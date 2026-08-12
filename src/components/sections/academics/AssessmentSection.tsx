import { academicsPageContent } from "@/data/academics";
import { AssessmentCycleDiagram } from "@/components/sections/academics/AssessmentCycleDiagram";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { AssessmentCommItem } from "@/types/academics";

const cycleSteps = [
  {
    title: "Continuous Assessment",
    description: "Tests & projects, ongoing through the term.",
  },
  {
    title: "Term Exams",
    description: "Twice a year — full board-style evaluation.",
  },
  {
    title: "Individual Analysis",
    description: "Gap identification, subject by subject.",
  },
  {
    title: "Remediation & Enrichment",
    description: "Targeted support based on the analysis.",
  },
  {
    title: "Parent Feedback",
    description: "Transparent reports — then the cycle begins again.",
  },
] as const;

function CommItem({ item }: { item: AssessmentCommItem }) {
  return (
    <div className="flex gap-3 rounded-lg border border-line bg-white p-3.5 sm:gap-3.5 sm:p-4">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-paper text-[1.2rem] leading-none">
        <span aria-hidden>{item.icon}</span>
      </span>
      <div className="min-w-0">
        <h5 className="font-montserrat text-[0.86rem] font-bold text-forest-deep">{item.title}</h5>
        <p className="mt-1.5 text-[0.82rem] leading-[1.55] text-slate sm:mt-2">{item.description}</p>
      </div>
    </div>
  );
}

export function AssessmentSection() {
  const { assessment } = academicsPageContent;

  return (
    <Section
      id="assessment"
      background="paper"
      className="max-md:!bg-off-white max-md:!py-[34px]"
      containerClassName="max-md:!px-5"
    >
      {/* Mobile */}
      <div className="md:hidden">
        <RevealOnScroll>
          <SectionLabel className="!mb-2 before:hidden !text-[0.62rem] !tracking-[0.14em] !text-emerald">
            {assessment.label}
          </SectionLabel>
          <h2 className="font-montserrat text-[1.25rem] font-extrabold leading-[1.28] tracking-[-0.01em] text-navy">
            No Child Falls Through the Cracks
          </h2>
          <p className="mt-1.5 mb-5 text-[0.78125rem] leading-[1.55] text-[#999]">
            {assessment.description}
          </p>
        </RevealOnScroll>

        <div className="relative mb-[22px] pl-[26px]">
          {cycleSteps.map((step, index) => {
            const isLast = index === cycleSteps.length - 1;
            return (
              <div key={step.title} className={isLast ? "relative" : "relative pb-[22px]"}>
                <div className="absolute left-[-26px] top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-forest text-[0.5625rem] font-extrabold text-white">
                  {index + 1}
                </div>
                {!isLast ? (
                  <div
                    className="absolute left-[-17px] top-5 h-[calc(100%)] w-0.5 bg-mist"
                    aria-hidden
                  />
                ) : (
                  <div
                    className="absolute left-[-17px] top-5 h-4 w-0.5 bg-[repeating-linear-gradient(180deg,var(--color-gold)_0_4px,transparent_4px_8px)]"
                    aria-hidden
                  />
                )}
                <h5 className="mb-0.5 font-montserrat text-[0.8125rem] font-bold text-navy">
                  {step.title}
                </h5>
                <p className="text-[0.6875rem] text-[#999]">{step.description}</p>
              </div>
            );
          })}
        </div>
        <p className="mb-6 ml-[26px] text-[0.65625rem] font-bold text-gold">
          ↻ Feeds back into the Student Progression Plan
        </p>

        <h3 className="mb-3.5 font-montserrat text-[0.9375rem] font-extrabold text-navy">
          How We Communicate Progress
        </h3>
        <div className="grid grid-cols-2 gap-2.5">
          {assessment.communication.map((item) => (
            <article
              key={item.title}
              className="rounded-[14px] border border-off-white bg-white p-3.5"
            >
              <div className="mb-2 text-lg" aria-hidden>
                {item.icon}
              </div>
              <h5 className="mb-1 font-montserrat text-[0.75rem] font-bold leading-snug text-navy">
                {item.title.replace(" (SPP)", "").replace("ERP-Based ", "ERP ").replace("Academic ", "")}
              </h5>
              <p className="text-[0.65625rem] leading-[1.45] text-[#999]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <RevealOnScroll>
          <div className="mx-auto mb-6 max-w-3xl text-center sm:mb-8">
            <SectionLabel centered>{assessment.label}</SectionLabel>
            <SectionTitle className="mt-1 text-center text-[clamp(1.55rem,2.8vw,2.1rem)]">
              {assessment.title}
            </SectionTitle>
            <p className="mx-auto mt-3 max-w-[42ch] whitespace-normal text-[0.92rem] text-slate sm:max-w-none sm:text-[1rem] lg:whitespace-nowrap">
              {assessment.description}
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-16">
          <RevealOnScroll className="-mx-1 overflow-x-auto sm:mx-0 sm:overflow-visible">
            <div className="min-w-0">
              <AssessmentCycleDiagram />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={1}>
            <h3 className="font-montserrat text-[1.05rem] font-extrabold text-forest-deep sm:text-[1.1rem]">
              {assessment.communicationTitle}
            </h3>
            <div className="mt-4 flex flex-col gap-3 sm:mt-5 sm:gap-3.5">
              {assessment.communication.map((item) => (
                <CommItem key={item.title} item={item} />
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </Section>
  );
}
