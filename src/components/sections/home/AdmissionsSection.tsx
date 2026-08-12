import { admissionsContent } from "@/data/home";
import { StepCard } from "@/components/sections/shared/StepCard";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

export function AdmissionsSection() {
  const delays: Array<0 | 1 | 2 | 3 | 4> = [0, 1, 2, 3, 4];

  return (
    <Section
      id="admissions"
      background="forest-deep"
      className={cn(
        "relative overflow-hidden !pt-[clamp(28px,3.5vw,44px)]",
        "max-md:!bg-off-white max-md:before:hidden max-md:after:hidden",
        "before:pointer-events-none before:absolute before:-right-44 before:-top-44 before:h-[500px] before:w-[500px] before:rounded-full before:border-[60px] before:border-gold/6 after:pointer-events-none after:absolute after:-bottom-32 after:-left-32 after:h-[350px] after:w-[350px] after:rounded-full after:border-[40px] after:border-cyan/5",
      )}
    >
      <SectionHeader
        label={admissionsContent.label}
        title={admissionsContent.title}
        description={admissionsContent.subtitle}
        labelTone="gold"
        titleLight
        className="relative z-10 max-md:[&_h2]:text-[1.3rem] max-md:[&_h2]:text-navy max-md:[&_p]:hidden max-md:[&_span]:text-emerald md:[&_p]:text-white/65"
      />

      {/* Mobile vertical steps */}
      <div className="relative z-10 mt-5 md:hidden">
        {admissionsContent.steps.map((step, index) => (
          <div key={step.number} className="mb-5 flex gap-3.5 last:mb-0">
            <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest font-montserrat text-[0.875rem] font-bold text-white">
              {step.number}
              {index < admissionsContent.steps.length - 1 ? (
                <span
                  aria-hidden
                  className="absolute left-[17px] top-9 h-[calc(100%+1.25rem)] w-0.5 bg-mist"
                />
              ) : null}
            </div>
            <div>
              <h5 className="mb-0.5 font-montserrat text-[0.875rem] font-bold text-navy">
                {step.title}
              </h5>
              <p className="text-[0.75rem] leading-normal text-[#999]">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop steps */}
      <div className="relative z-10 mt-10 hidden grid-cols-1 gap-0 sm:mt-12 sm:grid-cols-2 md:grid lg:grid-cols-5">
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

      <div className="relative z-10 mt-8 hidden w-full flex-col gap-3 sm:mt-11 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4 md:flex">
        {admissionsContent.ctas.map((cta) => (
          <Button
            key={cta.label}
            href={cta.href}
            external={"external" in cta ? cta.external : cta.href.startsWith("tel:")}
            variant={cta.variant === "gold" ? "gold" : "outline-white"}
            className="w-full justify-center sm:w-auto"
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
