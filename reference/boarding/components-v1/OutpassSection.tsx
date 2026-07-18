import { boardingPageContent } from "@/data/boarding";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

export function OutpassSection() {
  const { outpass } = boardingPageContent;

  return (
    <Section id="outpass" background="paper">
      <RevealOnScroll>
        <SectionLabel>{outpass.label}</SectionLabel>
        <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold text-forest-deep">
          {outpass.title}
        </h2>
        <p className="mt-2 max-w-[52ch] text-[0.96rem] text-slate">{outpass.description}</p>
      </RevealOnScroll>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
        <RevealOnScroll delay={1}>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {outpass.steps.map((step) => (
              <article
                key={step.title}
                className={cn(
                  "flex h-full flex-col border border-line bg-white p-4 text-center xl:p-5",
                  step.number === "✓" && "border-emerald bg-emerald/5",
                )}
              >
                <div
                  className={cn(
                    "mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full font-montserrat text-[0.82rem] font-black",
                    step.number === "✓"
                      ? "bg-emerald text-white"
                      : "border-2 border-gold bg-gold/10 text-gold-dark",
                  )}
                >
                  {step.number}
                </div>
                <h3 className="font-montserrat text-[0.82rem] font-extrabold text-forest-deep">
                  {step.title}
                </h3>
                <p className="mt-1.5 flex-1 text-[0.76rem] leading-relaxed text-slate">{step.description}</p>
              </article>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={2}>
          <aside className="border border-line bg-white p-6">
            <h3 className="font-montserrat text-[0.88rem] font-extrabold uppercase tracking-[0.1em] text-forest-deep">
              Rules &amp; Guidelines
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {outpass.rules.map((rule) => (
                <li key={rule} className="flex items-start gap-2.5 text-[0.84rem] text-slate">
                  <Icon name="alert" className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                  {rule}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-line pt-4 text-[0.82rem] font-semibold text-forest-deep">
              {outpass.note}
            </p>
          </aside>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
