import { coCurricularPageContent } from "@/data/coCurricular";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function LifeReadinessSection() {
  const { lifeReadiness } = coCurricularPageContent;

  return (
    <Section id="life-ready" spacing="compact">
      <RevealOnScroll className="text-center">
        <SectionLabel centered>{lifeReadiness.label}</SectionLabel>
        <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold text-forest-deep">
          {lifeReadiness.title}
        </h2>
      </RevealOnScroll>

      <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {lifeReadiness.cards.map((card, index) => (
          <RevealOnScroll key={card.title} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
            <article className="h-full overflow-hidden rounded-lg border border-line bg-paper px-6 py-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(15,61,56,0.18)]">
              <div className="mx-auto mb-3 grid h-[50px] w-[50px] place-items-center rounded-full border-[1.5px] border-line bg-white">
                <Icon name={card.icon} className="h-5 w-5 text-emerald" />
              </div>
              <h4 className="font-montserrat text-[0.93rem] font-extrabold text-forest-deep">
                {card.title}
              </h4>
              <p className="mt-1.5 text-[0.82rem] leading-relaxed text-slate">{card.description}</p>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
