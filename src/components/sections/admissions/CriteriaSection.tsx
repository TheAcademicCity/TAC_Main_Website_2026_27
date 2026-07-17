import { admissionsPageContent } from "@/data/admissions";
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
    icon: "bg-emerald/10 text-emerald",
  },
  {
    bar: "bg-gold",
    icon: "bg-gold/10 text-gold-dark",
  },
  {
    bar: "bg-violet",
    icon: "bg-violet/10 text-violet",
  },
] as const;

function CriteriaCard({ card, index }: { card: CriteriaCard; index: number }) {
  const styles = cardStyles[index] ?? cardStyles[0];

  return (
    <article className="group relative overflow-hidden border border-line bg-white p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_-18px_rgba(15,61,56,0.18)]">
      <span className={cn("absolute inset-x-0 top-0 h-1", styles.bar)} />
      <div className={cn("mb-4 grid h-14 w-14 place-items-center rounded-[14px]", styles.icon)}>
        <Icon name={card.icon} className="h-6 w-6" />
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
  const { criteria } = admissionsPageContent;

  return (
    <Section id="criteria" background="paper">
      <RevealOnScroll>
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel centered>{criteria.label}</SectionLabel>
          <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold text-forest-deep">
            {criteria.title}
          </h2>
          <p className="mx-auto mt-2 max-w-[48ch] text-[0.96rem] text-slate">{criteria.description}</p>
        </div>
      </RevealOnScroll>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {criteria.cards.map((card, index) => (
          <RevealOnScroll key={card.title} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
            <CriteriaCard card={card} index={index} />
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
