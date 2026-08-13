import { admissionsPageContent } from "@/data/admissions";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";
import type { AdmissionsPageContent } from "@/types/admissions";

type CriteriaCard = AdmissionsPageContent["criteria"]["cards"][number];

const cardStyles = [
  {
    bar: "bg-emerald",
    icon: "bg-emerald/10",
    badge: "bg-[#e7f5ee]",
  },
  {
    bar: "bg-gold",
    icon: "bg-gold/10",
    badge: "bg-[#fdece0]",
  },
  {
    bar: "bg-violet",
    icon: "bg-violet/10",
    badge: "bg-[#f1e6f8]",
  },
] as const;

function CriteriaCardDesktop({ card, index }: { card: CriteriaCard; index: number }) {
  const styles = cardStyles[index] ?? cardStyles[0];

  return (
    <article className="group relative overflow-hidden rounded-lg border border-line bg-white p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_-18px_rgba(15,61,56,0.18)]">
      <span className={cn("absolute inset-x-0 top-0 h-1", styles.bar)} />
      <div
        className={cn(
          "mb-4 grid h-14 w-14 place-items-center rounded-lg text-[1.55rem] leading-none",
          styles.icon,
        )}
      >
        <span aria-hidden>{card.icon}</span>
      </div>
      <p className="mb-1 font-montserrat text-[0.65rem] font-black uppercase tracking-[0.14em] text-slate">
        {card.number}
      </p>
      <h3 className="font-montserrat text-[1.1rem] font-extrabold text-forest-deep">{card.title}</h3>
      <p className="mt-2 text-[0.88rem] leading-relaxed text-slate">{card.description}</p>
    </article>
  );
}

export function CriteriaSection() {
  const { criteria, scholarship } = admissionsPageContent;

  return (
    <Section
      id="criteria"
      background="paper"
      className="max-md:!bg-off-white max-md:!pt-2 max-md:!pb-3"
      containerClassName="max-md:!px-5"
    >
      {/* Mobile */}
      <div className="md:hidden">
        <RevealOnScroll>
          <SectionLabel className="!mb-2 before:hidden !text-[0.62rem] !tracking-[0.14em] !text-emerald">
            {criteria.label}
          </SectionLabel>
          <h2 className="font-montserrat text-[1.25rem] font-extrabold leading-[1.28] tracking-[-0.01em] text-navy">
            {criteria.title}
          </h2>
          <p className="mt-1.5 mb-[18px] text-[0.78125rem] leading-normal text-[#999]">
            {criteria.description}
          </p>
        </RevealOnScroll>

        <div className="flex flex-col gap-3">
          {criteria.cards.map((card, index) => {
            const styles = cardStyles[index] ?? cardStyles[0];
            const mobileTitle = card.number.includes(" · ")
              ? card.number.split(" · ")[1]
              : card.title;

            return (
              <RevealOnScroll key={card.title} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
                <article className="relative w-full rounded-2xl border border-off-white bg-white p-4 pr-[4.5rem] shadow-[0_8px_20px_-14px_rgba(0,0,0,0.15)]">
                  <div
                    className={cn(
                      "absolute right-3.5 top-3.5 flex h-12 w-12 items-center justify-center rounded-[14px] text-[1.5rem] leading-none",
                      styles.badge,
                    )}
                    aria-hidden
                  >
                    {card.icon}
                  </div>
                  <h5 className="mb-1.5 font-montserrat text-[0.875rem] font-bold text-navy">
                    {mobileTitle}
                  </h5>
                  <p className="text-[0.6875rem] leading-[1.5] text-[#999]">{card.description}</p>
                </article>
              </RevealOnScroll>
            );
          })}
        </div>

        <RevealOnScroll delay={2}>
          <div className="mt-5 rounded-[18px] bg-[linear-gradient(150deg,var(--color-navy),var(--color-charcoal))] px-[22px] py-[22px] text-center text-white">
            <h4 className="font-montserrat text-base font-bold leading-[1.4]">
              {scholarship.title}
            </h4>
            <p className="mt-2 mb-4 text-[0.75rem] leading-normal text-mist">
              {scholarship.description}
            </p>
            <Button
              href={scholarship.cta.href}
              variant="gold"
              className="w-full justify-center rounded-[30px] px-5 py-3 font-outfit text-[0.8125rem] font-bold normal-case tracking-normal text-navy"
            >
              {scholarship.cta.label}
            </Button>
          </div>
        </RevealOnScroll>
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <RevealOnScroll>
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel centered>{criteria.label}</SectionLabel>
            <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold leading-tight text-forest-deep">
              {criteria.title}
            </h2>
            <p className="mx-auto mt-2 max-w-[48ch] text-[0.96rem] text-slate">
              {criteria.description}
            </p>
          </div>
        </RevealOnScroll>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {criteria.cards.map((card, index) => (
            <RevealOnScroll key={card.title} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
              <CriteriaCardDesktop card={card} index={index} />
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={2}>
          <div className="mt-10 flex flex-row flex-wrap items-start justify-between gap-x-10 gap-y-5 rounded-lg bg-forest-deep p-8">
            <div className="max-w-[72ch] text-left">
              <h3 className="font-montserrat text-[clamp(1.05rem,1.8vw,1.25rem)] font-extrabold leading-snug text-white">
                {scholarship.title}
              </h3>
              <p className="mt-1.5 text-[0.88rem] leading-relaxed text-white/70">
                {scholarship.description}
              </p>
            </div>
            <Button
              href={scholarship.cta.href}
              variant="gold"
              className="w-auto shrink-0 self-center justify-center px-7 py-3 text-[0.78rem]"
            >
              {scholarship.cta.label}
              <Icon name="arrow" className="h-3.5 w-3.5" />
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
