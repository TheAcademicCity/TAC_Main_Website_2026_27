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
  },
  {
    bar: "bg-gold",
    icon: "bg-gold/10",
  },
  {
    bar: "bg-violet",
    icon: "bg-violet/10",
  },
] as const;

function CriteriaCard({ card, index }: { card: CriteriaCard; index: number }) {
  const styles = cardStyles[index] ?? cardStyles[0];

  return (
    <article className="group relative overflow-hidden rounded-lg border border-line bg-white p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_-18px_rgba(15,61,56,0.18)] sm:p-7">
      <span className={cn("absolute inset-x-0 top-0 h-1", styles.bar)} />
      <div className={cn("mb-3 grid h-12 w-12 place-items-center rounded-lg text-[1.35rem] leading-none sm:mb-4 sm:h-14 sm:w-14 sm:text-[1.55rem]", styles.icon)}>
        <span aria-hidden>{card.icon}</span>
      </div>
      <p className="mb-1 font-montserrat text-[0.65rem] font-black uppercase tracking-[0.14em] text-slate">
        {card.number}
      </p>
      <h3 className="font-montserrat text-[1.02rem] font-extrabold text-forest-deep sm:text-[1.1rem]">
        {card.title}
      </h3>
      <p className="mt-2 text-[0.86rem] leading-relaxed text-slate sm:text-[0.88rem]">
        {card.description}
      </p>
    </article>
  );
}

export function CriteriaSection() {
  const { criteria, scholarship } = admissionsPageContent;

  return (
    <Section id="criteria" background="paper">
      <RevealOnScroll>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel centered>{criteria.label}</SectionLabel>
          <h2 className="font-montserrat text-[clamp(1.35rem,6vw,2rem)] font-extrabold leading-tight text-forest-deep md:text-[clamp(1.5rem,2.6vw,2rem)]">
            {criteria.title}
          </h2>
          <p className="mx-auto mt-2 max-w-[40ch] text-[0.92rem] text-slate sm:max-w-[48ch] sm:text-[0.96rem]">
            {criteria.description}
          </p>
        </div>
      </RevealOnScroll>

      <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 lg:grid-cols-3">
        {criteria.cards.map((card, index) => (
          <RevealOnScroll key={card.title} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
            <CriteriaCard card={card} index={index} />
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={2}>
        <div className="mt-8 flex flex-col items-stretch gap-4 rounded-lg bg-forest-deep p-5 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-x-10 sm:gap-y-5 sm:p-8">
          <div className="max-w-[72ch] text-center sm:text-left">
            <h3 className="font-montserrat text-[clamp(1.05rem,4.5vw,1.25rem)] font-extrabold leading-snug text-white md:text-[clamp(1.05rem,1.8vw,1.25rem)]">
              {scholarship.title}
            </h3>
            <p className="mx-auto mt-1.5 max-w-[42ch] text-[0.86rem] leading-relaxed text-white/70 sm:mx-0 sm:max-w-none sm:text-[0.88rem]">
              {scholarship.description}
            </p>
          </div>
          <Button
            href={scholarship.cta.href}
            variant="gold"
            className="w-full justify-center px-7 py-3 text-[0.78rem] sm:w-auto sm:shrink-0 sm:self-center"
          >
            {scholarship.cta.label}
            <Icon name="arrow" className="h-3.5 w-3.5" />
          </Button>
        </div>
      </RevealOnScroll>
    </Section>
  );
}
