import { coCurricularPageContent } from "@/data/coCurricular";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function LifeReadinessSection() {
  const { lifeReadiness } = coCurricularPageContent;

  return (
    <Section
      id="life-ready"
      spacing="compact"
      className="max-md:!pt-4 max-md:!pb-7"
      containerClassName="max-md:!px-5"
    >
      {/* Mobile */}
      <div className="md:hidden">
        <RevealOnScroll>
          <SectionLabel className="!mb-2 before:hidden !text-[0.62rem] !tracking-[0.14em] !text-emerald">
            {lifeReadiness.label}
          </SectionLabel>
          <h2 className="mb-[18px] font-montserrat text-[1.25rem] font-extrabold leading-[1.28] tracking-[-0.01em] text-navy">
            Skills for Life, Not Just School
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-2 gap-2.5">
          {lifeReadiness.cards.map((card, index) => (
            <RevealOnScroll key={card.title} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
              <article className="rounded-[14px] border border-off-white bg-white p-3.5">
                <div className="mb-2 text-lg" aria-hidden>
                  {card.icon}
                </div>
                <h5 className="mb-1 font-montserrat text-[0.75rem] font-bold text-navy">
                  {card.title}
                </h5>
                <p className="text-[0.65625rem] leading-[1.45] text-[#999]">{card.description}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <RevealOnScroll className="text-center">
          <SectionLabel centered>{lifeReadiness.label}</SectionLabel>
          <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold leading-tight text-forest-deep">
            {lifeReadiness.title}
          </h2>
        </RevealOnScroll>

        <div className="mt-5 grid gap-3 sm:mt-7 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {lifeReadiness.cards.map((card, index) => (
            <RevealOnScroll key={card.title} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
              <article className="h-full overflow-hidden rounded-lg border border-line bg-paper px-4 py-5 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(15,61,56,0.18)] sm:px-6 sm:py-6">
                <div className="mx-auto mb-3 grid h-[46px] w-[46px] place-items-center rounded-full border-[1.5px] border-line bg-white text-[1.4rem] leading-none sm:h-[50px] sm:w-[50px] sm:text-[1.55rem]">
                  <span aria-hidden>{card.icon}</span>
                </div>
                <h4 className="font-montserrat text-[0.93rem] font-extrabold text-forest-deep">
                  {card.title}
                </h4>
                <p className="mt-1.5 text-[0.82rem] leading-relaxed text-slate">{card.description}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </Section>
  );
}
