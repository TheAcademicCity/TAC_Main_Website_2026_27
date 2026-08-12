import { academicsPageContent } from "@/data/academics";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
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

const mobileGradients = [
  "bg-[linear-gradient(150deg,var(--color-forest),#0c322c)]",
  "bg-[linear-gradient(150deg,var(--color-violet),#3d0d63)]",
  "bg-[linear-gradient(150deg,var(--color-charcoal),#241f22)]",
] as const;

function PillarCard({ pillar }: { pillar: CdfPillar }) {
  const styles = accentStyles[pillar.accent];

  return (
    <article className="group relative overflow-hidden rounded-lg border border-line bg-paper p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-18px_rgba(15,61,56,0.2)] sm:p-7">
      <span className={cn("absolute inset-x-0 top-0 h-[3px]", styles.bar)} />
      <span className="absolute right-4 top-3 font-montserrat text-[1.85rem] font-black leading-none text-forest/7 sm:right-5 sm:top-4 sm:text-[2.08rem]">
        {pillar.number}
      </span>
      <div className="mb-3 flex items-center gap-3 sm:mb-4">
        <span
          className={cn(
            "grid h-10 w-10 shrink-0 place-items-center rounded-lg text-[1.3rem] leading-none sm:h-11 sm:w-11 sm:text-[1.45rem]",
            styles.icon,
          )}
        >
          <span aria-hidden>{pillar.icon}</span>
        </span>
        <h3 className="pr-8 font-montserrat text-[0.98rem] font-extrabold text-forest-deep sm:text-base">
          {pillar.title}
        </h3>
      </div>
      <ul className="space-y-2">
        {pillar.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-[0.86rem] leading-snug text-slate sm:text-[0.88rem]"
          >
            <span className={cn("mt-2 h-[5px] w-[5px] shrink-0 rounded-full", styles.dot)} />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function CdfOverviewSection() {
  const { overview, curriculum } = academicsPageContent;

  return (
    <Section
      id="overview"
      background="white"
      className="max-md:!py-[34px]"
      containerClassName="max-md:!px-5"
    >
      {/* Mobile */}
      <div className="md:hidden">
        <RevealOnScroll>
          <SectionLabel className="!mb-2 before:hidden !text-[0.62rem] !tracking-[0.14em] !text-emerald">
            {overview.label}
          </SectionLabel>
          <h2 className="whitespace-pre-line font-montserrat text-[1.25rem] font-extrabold leading-[1.28] tracking-[-0.01em] text-navy">
            Three Pillars. Every Lesson. Every Day.
          </h2>
          <p className="mt-1.5 mb-5 text-[0.78125rem] leading-[1.55] text-[#999]">
            {overview.description}
          </p>
        </RevealOnScroll>

        <div className="scrollbar-none -mx-5 flex snap-x snap-mandatory gap-3.5 overflow-x-auto px-5 pb-1.5">
          {overview.pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className={cn(
                "w-[250px] shrink-0 snap-start rounded-[20px] p-5 text-white",
                mobileGradients[index] ?? mobileGradients[0],
              )}
            >
              <div className="mb-3 flex items-center gap-2.5">
                <span className="font-montserrat text-[1.375rem] font-extrabold text-white/40">
                  {pillar.number}
                </span>
                <span className="text-[1.25rem]" aria-hidden>
                  {pillar.icon}
                </span>
              </div>
              <h3 className="mb-2.5 font-montserrat text-[0.9375rem] font-bold">{pillar.title}</h3>
              <ul>
                {pillar.items.slice(0, 4).map((item) => (
                  <li
                    key={item}
                    className="relative mb-1.5 pl-3.5 text-[0.71875rem] leading-[1.6] text-white/85 last:mb-0"
                  >
                    <span className="absolute left-0 text-gold" aria-hidden>
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="relative mt-4 h-[150px] overflow-hidden rounded-2xl bg-forest-deep">
          <ImageWithFallback
            image={curriculum.image}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <RevealOnScroll>
          <div className="mx-auto max-w-none text-center">
            <SectionLabel centered>{overview.label}</SectionLabel>
            <SectionTitle className="mt-1 whitespace-pre-line text-center text-[clamp(1.55rem,2.8vw,2.1rem)]">
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
      </div>
    </Section>
  );
}
