import { admissionsPageContent } from "@/data/admissions";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

export function ProcessSection() {
  const { process } = admissionsPageContent;

  return (
    <Section
      id="process"
      background="forest-deep"
      className="relative overflow-hidden before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_80%_50%,rgba(45,148,92,0.15),transparent_60%)]"
    >
      <RevealOnScroll>
        <SectionLabel tone="gold">{process.label}</SectionLabel>
        <h2 className="font-montserrat text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-white">
          {process.title}
        </h2>
        <p className="mt-2 max-w-[44ch] text-[0.96rem] text-white/60">{process.description}</p>
      </RevealOnScroll>

      <RevealOnScroll delay={1}>
        <div className="relative mt-10">
          <div
            aria-hidden
            className="pointer-events-none absolute left-8 right-8 top-8 hidden h-0.5 bg-gold/25 lg:block"
          />
          <div className="relative z-[1] grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {process.steps.map((step) => (
              <article key={step.number} className="group flex flex-col items-start">
                <div
                  className={cn(
                    "mb-5 grid h-16 w-16 place-items-center rounded-full font-montserrat text-[0.95rem] font-black transition-[transform,box-shadow] duration-300 group-hover:scale-105 group-hover:shadow-[0_0_0_8px_rgba(246,171,22,0.2)]",
                    step.alt
                      ? "border-2 border-gold/40 bg-white/10 text-gold"
                      : "bg-gold text-forest-deep",
                  )}
                >
                  {step.number}
                </div>
                <h4 className="font-montserrat text-base font-extrabold text-white">{step.title}</h4>
                <p className="mt-1.5 text-[0.83rem] leading-relaxed text-white/62">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={2}>
        <div className="mt-10 flex flex-wrap gap-3">
          {process.actions.map((action) => (
            <Button
              key={action.label}
              href={action.href}
              external={action.external}
              variant={action.variant === "gold" ? "gold" : "outline-white"}
              className="px-7 py-3 text-[0.78rem]"
            >
              {action.label.includes("WhatsApp") ? (
                <Icon name="whatsapp" className="h-3.5 w-3.5" />
              ) : action.label.includes("Email") ? (
                <Icon name="mail" className="h-3.5 w-3.5" />
              ) : null}
              {action.label}
              {action.label === "Start your enquiry" ? (
                <Icon name="arrow" className="h-3.5 w-3.5" />
              ) : null}
            </Button>
          ))}
        </div>
      </RevealOnScroll>
    </Section>
  );
}
