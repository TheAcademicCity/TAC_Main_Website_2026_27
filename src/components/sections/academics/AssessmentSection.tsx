import { academicsPageContent } from "@/data/academics";
import { AssessmentCycleDiagram } from "@/components/sections/academics/AssessmentCycleDiagram";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";
import type { AssessmentCommItem } from "@/types/academics";

const toneStyles = {
  default: "text-emerald",
  gold: "text-gold-dark",
  violet: "text-violet",
} as const;

function CommItem({ item }: { item: AssessmentCommItem }) {
  const tone = item.tone ?? "default";

  return (
    <div className="flex gap-3.5 rounded-lg border border-line bg-white p-4">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-paper">
        <Icon name={item.icon} className={cn("h-[1.1rem] w-[1.1rem]", toneStyles[tone])} />
      </span>
      <div>
        <h5 className="font-montserrat text-[0.86rem] font-bold text-forest-deep">{item.title}</h5>
        <p className="mt-2 text-[0.82rem] leading-[1.55] text-slate">{item.description}</p>
      </div>
    </div>
  );
}

export function AssessmentSection() {
  const { assessment } = academicsPageContent;

  return (
    <Section id="assessment" background="paper">
      <RevealOnScroll>
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <SectionLabel centered>{assessment.label}</SectionLabel>
          <SectionTitle className="mt-1 text-center">{assessment.title}</SectionTitle>
          <p className="mx-auto mt-3 whitespace-nowrap text-slate">{assessment.description}</p>
        </div>
      </RevealOnScroll>

      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <RevealOnScroll>
          <AssessmentCycleDiagram />
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          <h3 className="font-montserrat text-[1.1rem] font-extrabold text-forest-deep">
            {assessment.communicationTitle}
          </h3>
          <div className="mt-5 flex flex-col gap-3.5">
            {assessment.communication.map((item) => (
              <CommItem key={item.title} item={item} />
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
