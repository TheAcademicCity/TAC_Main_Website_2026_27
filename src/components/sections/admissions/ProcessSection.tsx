import { admissionsContent } from "@/data/home";
import { StepCard } from "@/components/sections/shared/StepCard";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

export function ProcessSection() {
  const delays: Array<0 | 1 | 2 | 3 | 4> = [0, 1, 2, 3, 4];

  return (
    <Section
      id="process"
      background="forest-deep"
      className={cn(
        "relative overflow-hidden",
        "max-md:!bg-off-white max-md:!py-[34px] max-md:before:hidden max-md:after:hidden",
        "before:pointer-events-none before:absolute before:-right-44 before:-top-44 before:h-[500px] before:w-[500px] before:rounded-full before:border-[60px] before:border-gold/6 after:pointer-events-none after:absolute after:-bottom-32 after:-left-32 after:h-[350px] after:w-[350px] after:rounded-full after:border-[40px] after:border-cyan/5",
      )}
      containerClassName="max-md:!px-5"
    >
      {/* Mobile */}
      <div className="relative z-10 md:hidden">
        <RevealOnScroll>
          <SectionLabel className="!mb-2 before:hidden !text-[0.62rem] !tracking-[0.14em] !text-emerald">
            {admissionsContent.label}
          </SectionLabel>
          <h2 className="font-montserrat text-[1.25rem] font-extrabold leading-[1.28] tracking-[-0.01em] text-navy">
            {admissionsContent.title}
          </h2>
          <p className="mt-1.5 mb-5 text-[0.78125rem] leading-[1.55] text-[#999]">
            {admissionsContent.subtitle}
          </p>
        </RevealOnScroll>

        <div className="relative">
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
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <SectionHeader
          label={admissionsContent.label}
          title={admissionsContent.title}
          description={admissionsContent.subtitle}
          labelTone="gold"
          titleLight
          className="relative z-10 [&_h2]:text-[clamp(1.55rem,2.8vw,2.4rem)] [&_p]:max-w-none [&_p]:text-white/65"
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

        <div className="relative z-10 mt-11 flex w-auto flex-row flex-wrap gap-4">
          {admissionsContent.ctas.map((cta) => (
            <Button
              key={cta.label}
              href={cta.href}
              external={"external" in cta ? cta.external : cta.href.startsWith("tel:")}
              variant={cta.variant === "gold" ? "gold" : "outline-white"}
              className="w-auto justify-center"
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
      </div>
    </Section>
  );
}
