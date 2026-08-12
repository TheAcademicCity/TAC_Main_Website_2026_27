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

const mobileIconBg: Record<PolicyCard["accent"], string> = {
  emerald: "bg-[#e7f5ee]",
  gold: "bg-[#fdece0]",
  violet: "bg-[#f1e6f8]",
};

export function DisciplineSection() {
  const { discipline } = boardingPageContent;

  return (
    <Section
      id="discipline"
      className="max-md:!bg-white max-md:!py-[34px]"
      containerClassName="max-md:!px-5"
    >
      {/* Mobile */}
      <div className="md:hidden">
        <RevealOnScroll>
          <SectionLabel className="!mb-2 before:hidden !text-[0.62rem] !tracking-[0.14em] !text-emerald">
            {discipline.label}
          </SectionLabel>
          <h2 className="font-montserrat text-[1.25rem] font-extrabold leading-[1.28] tracking-[-0.01em] text-navy">
            {discipline.title}
          </h2>
          <p className="mt-1.5 mb-[18px] text-[0.78125rem] leading-normal text-[#999]">
            {discipline.description}
          </p>
        </RevealOnScroll>

        <div className="space-y-3">
          {discipline.policies.map((policy, index) => (
            <RevealOnScroll key={policy.slug} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
              <SiteLink
                href={`/boarding/policies/${policy.slug}`}
                className="flex gap-3.5 overflow-hidden rounded-[16px] border border-off-white bg-off-white p-3.5"
              >
                <div
                  className={cn(
                    "grid h-11 w-11 shrink-0 place-items-center rounded-[12px] text-[1.25rem] leading-none",
                    mobileIconBg[policy.accent],
                  )}
                >
                  <span aria-hidden>{policy.icon}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <h5 className="mb-1 font-montserrat text-[0.8125rem] font-bold leading-snug text-navy">
                    {policy.title}
                  </h5>
                  <p className="line-clamp-3 text-[0.6875rem] leading-[1.5] text-[#999]">
                    {policy.preview}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 font-outfit text-[0.6875rem] font-bold text-forest">
                    Read policy
                    <Icon name="arrow" className="h-2.5 w-2.5" />
                  </span>
                </div>
              </SiteLink>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <RevealOnScroll>
          <SectionLabel>{discipline.label}</SectionLabel>
          <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold leading-tight text-forest-deep">
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
      </div>
    </Section>
  );
}
