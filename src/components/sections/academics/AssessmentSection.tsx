import { academicsPageContent } from "@/data/academics";
import { AssessmentCycleDiagram } from "@/components/sections/academics/AssessmentCycleDiagram";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { AssessmentCommItem } from "@/types/academics";

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
    <Section id="assessment" background="paper">
      <RevealOnScroll>
        <div className="mx-auto mb-6 max-w-3xl text-center sm:mb-8">
          <SectionLabel centered>{assessment.label}</SectionLabel>
          <SectionTitle className="mt-1 text-center text-[clamp(1.35rem,6vw,2.1rem)] md:text-[clamp(1.55rem,2.8vw,2.1rem)]">
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
    </Section>
  );
}
