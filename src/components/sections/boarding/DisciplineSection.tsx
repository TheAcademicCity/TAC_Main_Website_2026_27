import { boardingPageContent } from "@/data/boarding";
import { SiteLink } from "@/components/layout/SiteLink";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";
import type { BoardingPageContent } from "@/types/boarding";

type PolicyCard = BoardingPageContent["discipline"]["policies"][number];

const accentStyles: Record<
  PolicyCard["accent"],
  { bar: string; iconBg: string }
> = {
  emerald: { bar: "bg-emerald", iconBg: "bg-emerald/10" },
  gold: { bar: "bg-gold", iconBg: "bg-gold/10" },
  violet: { bar: "bg-violet", iconBg: "bg-violet/10" },
};

export function DisciplineSection() {
  const { discipline } = boardingPageContent;

  return (
    <Section id="discipline">
      <RevealOnScroll>
        <SectionLabel>{discipline.label}</SectionLabel>
        <h2 className="font-montserrat text-[clamp(1.35rem,6vw,2rem)] font-extrabold leading-tight text-forest-deep md:text-[clamp(1.5rem,2.6vw,2rem)]">
          {discipline.title}
        </h2>
        <p className="mt-3 max-w-[54ch] text-[0.92rem] leading-relaxed text-slate sm:text-[0.96rem]">
          {discipline.description}
        </p>
      </RevealOnScroll>

      <div className="mt-6 grid items-stretch gap-4 sm:mt-10 sm:gap-6 lg:grid-cols-2">
        {discipline.policies.map((policy, index) => {
          const styles = accentStyles[policy.accent];

          return (
            <RevealOnScroll key={policy.slug} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
              <SiteLink
                href={`/boarding/policies/${policy.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_-18px_rgba(15,61,56,0.18)]"
              >
                <span className={cn("h-1 w-full", styles.bar)} />
                <div className="flex flex-1 flex-col p-5 sm:p-8">
                  <div
                    className={cn(
                      "mb-4 grid h-11 w-11 place-items-center rounded-lg text-[1.3rem] leading-none sm:mb-5 sm:h-12 sm:w-12 sm:text-[1.45rem]",
                      styles.iconBg,
                    )}
                  >
                    <span aria-hidden>{policy.icon}</span>
                  </div>
                  <h3 className="font-montserrat text-[1rem] font-extrabold leading-snug text-forest-deep sm:text-[1.05rem]">
                    {policy.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[0.88rem] leading-relaxed text-slate sm:mt-3 sm:text-[0.9rem]">
                    {policy.preview}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-montserrat text-[0.68rem] font-bold uppercase tracking-[0.1em] text-forest transition-all group-hover:gap-2 group-hover:text-emerald sm:mt-6">
                    Read policy
                    <Icon name="arrow" className="h-2.5 w-2.5" />
                  </span>
                </div>
              </SiteLink>
            </RevealOnScroll>
          );
        })}
      </div>
    </Section>
  );
}
