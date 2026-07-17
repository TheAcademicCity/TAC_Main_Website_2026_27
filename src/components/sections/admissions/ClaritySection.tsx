import { admissionsPageContent } from "@/data/admissions";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ClaritySection() {
  const { clarity } = admissionsPageContent;

  return (
    <Section id="clarity" background="white">
      <RevealOnScroll>
        <SectionLabel>{clarity.label}</SectionLabel>
        <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold text-forest-deep">
          {clarity.title}
        </h2>
      </RevealOnScroll>

      <RevealOnScroll delay={1}>
        <div className="relative mt-6 grid items-center gap-8 overflow-hidden bg-forest-deep p-[clamp(2rem,4vw,3.5rem)] lg:grid-cols-2 lg:gap-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-14 -top-14 h-60 w-60 rounded-full border-[36px] border-white/5"
          />

          <div>
            <h3 className="font-montserrat text-[clamp(1.4rem,2.4vw,1.9rem)] font-extrabold text-white">
              {clarity.heading}
            </h3>
            <p className="mt-2 text-[0.94rem] leading-relaxed text-white/65">{clarity.description}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={clarity.visitCta.href} className="px-7 py-3 text-[0.78rem]">
                {clarity.visitCta.label}
                <Icon name="arrow" className="h-3.5 w-3.5" />
              </Button>
              <Button
                href={clarity.whatsapp.href}
                external
                variant="outline-white"
                className="px-7 py-3 text-[0.78rem]"
              >
                <Icon name="whatsapp" className="h-3.5 w-3.5" />
                {clarity.whatsapp.label}
              </Button>
            </div>
          </div>

          <ul className="relative z-[1] flex flex-col gap-2.5">
            {clarity.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 border border-white/10 bg-white/6 px-4 py-3.5"
              >
                <Icon name="checkCircle" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="text-[0.88rem] leading-relaxed text-white/75">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </RevealOnScroll>
    </Section>
  );
}
