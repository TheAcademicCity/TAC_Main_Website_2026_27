import { admissionsContent } from "@/data/home";
import { StepCard } from "@/components/sections/shared/StepCard";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";

export function AdmissionsSection() {
  const delays: Array<0 | 1 | 2 | 3 | 4> = [0, 1, 2, 3, 4];

  return (
    <Section
      id="admissions"
      background="forest-deep"
      className="relative overflow-hidden before:pointer-events-none before:absolute before:-right-44 before:-top-44 before:h-[500px] before:w-[500px] before:rounded-full before:border-[60px] before:border-gold/6 after:pointer-events-none after:absolute after:-bottom-32 after:-left-32 after:h-[350px] after:w-[350px] after:rounded-full after:border-[40px] after:border-cyan/5"
    >
      <SectionHeader
        label={admissionsContent.label}
        title={admissionsContent.title}
        description={admissionsContent.subtitle}
        labelTone="gold"
        titleLight
        className="relative z-10 [&_p]:text-white/65"
      />

      <div className="relative z-10 mt-12 grid grid-cols-2 gap-0 lg:grid-cols-5">
        {admissionsContent.steps.map((step, index) => (
          <div key={step.number} className="relative">
            {index < admissionsContent.steps.length - 1 ? (
              <div
                aria-hidden
                className="pointer-events-none absolute left-[calc(1rem+1.375rem)] top-[1.375rem] z-0 hidden h-px w-full bg-white/15 lg:block"
              />
            ) : null}
            <StepCard step={step} delay={delays[index]} />
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-11 flex flex-wrap gap-4">
        {admissionsContent.ctas.map((cta) => (
          <Button
            key={cta.label}
            href={cta.href}
            external={"external" in cta ? cta.external : cta.href.startsWith("tel:")}
            variant={cta.variant === "gold" ? "gold" : "outline-white"}
          >
            {cta.label.includes("WhatsApp") ? (
              <Icon name="whatsapp" className="h-4 w-4" />
            ) : cta.href.startsWith("tel:") ? (
              <Icon name="phone" className="h-4 w-4" />
            ) : null}
            {cta.label}
          </Button>
        ))}
      </div>
    </Section>
  );
}
