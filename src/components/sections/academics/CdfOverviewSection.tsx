import { academicsPageContent } from "@/data/academics";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";
import type { CdfPillar } from "@/types/academics";

const accentStyles = {
  emerald: {
    bar: "bg-emerald",
    icon: "bg-emerald/10",
    dot: "bg-emerald",
  },
  gold: {
    bar: "bg-gold",
    icon: "bg-gold/10",
    dot: "bg-gold-dark",
  },
  violet: {
    bar: "bg-violet",
    icon: "bg-violet/10",
    dot: "bg-violet",
  },
} as const;

function PillarCard({ pillar }: { pillar: CdfPillar }) {
  const styles = accentStyles[pillar.accent];

  return (
    <article className="group relative overflow-hidden rounded-lg border border-line bg-paper p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-18px_rgba(15,61,56,0.2)] sm:p-7">
      <span className={cn("absolute inset-x-0 top-0 h-[3px]", styles.bar)} />
      <span className="absolute right-4 top-3 font-montserrat text-[1.85rem] font-black leading-none text-forest/7 sm:right-5 sm:top-4 sm:text-[2.08rem]">
        {pillar.number}
      </span>
      <div className="mb-3 flex items-center gap-3 sm:mb-4">
        <span className={cn("grid h-10 w-10 shrink-0 place-items-center rounded-lg text-[1.3rem] leading-none sm:h-11 sm:w-11 sm:text-[1.45rem]", styles.icon)}>
          <span aria-hidden>{pillar.icon}</span>
        </span>
        <h3 className="pr-8 font-montserrat text-[0.98rem] font-extrabold text-forest-deep sm:text-base">
          {pillar.title}
        </h3>
      </div>
      <ul className="space-y-2">
        {pillar.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-[0.86rem] leading-snug text-slate sm:text-[0.88rem]">
            <span className={cn("mt-2 h-[5px] w-[5px] shrink-0 rounded-full", styles.dot)} />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function CdfOverviewSection() {
  const { overview } = academicsPageContent;

  return (
    <Section id="overview" background="white">
      <RevealOnScroll>
        <div className="mx-auto max-w-none text-center">
          <SectionLabel centered>{overview.label}</SectionLabel>
          <SectionTitle className="mt-1 whitespace-pre-line text-center text-[clamp(1.35rem,6vw,2.1rem)] md:text-[clamp(1.55rem,2.8vw,2.1rem)]">
            {overview.title}
          </SectionTitle>
          <p className="mx-auto mt-3 max-w-[42ch] whitespace-normal text-[0.92rem] text-slate sm:max-w-none sm:text-[1rem] lg:whitespace-nowrap">
            {overview.description}
          </p>
        </div>
      </RevealOnScroll>

      <div className="mt-7 grid gap-4 sm:mt-10 sm:gap-6 lg:grid-cols-3">
        {overview.pillars.map((pillar, index) => (
          <RevealOnScroll key={pillar.title} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
            <PillarCard pillar={pillar} />
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
