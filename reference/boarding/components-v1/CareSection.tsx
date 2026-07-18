import { boardingPageContent } from "@/data/boarding";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function CareSection() {
  const { care } = boardingPageContent;

  return (
    <Section id="care" background="paper">
      <RevealOnScroll className="mx-auto max-w-3xl text-center">
        <SectionLabel centered>{care.label}</SectionLabel>
        <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold text-forest-deep">
          {care.title}
        </h2>
      </RevealOnScroll>

      <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-8">
        <RevealOnScroll delay={1}>
          <article className="h-full border border-line bg-white p-6">
            <h3 className="font-montserrat text-[1.05rem] font-extrabold text-forest-deep">
              {care.safety.title}
            </h3>
            <div className="mt-5 flex flex-col gap-4">
              {care.safety.items.map((item) => (
                <div key={item.title} className="flex gap-3.5 border border-line bg-paper p-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white">
                    <Icon name={item.icon} className="h-[1.1rem] w-[1.1rem] text-emerald" />
                  </span>
                  <div>
                    <h4 className="font-montserrat text-[0.86rem] font-bold text-forest-deep">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-[0.82rem] leading-relaxed text-slate">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </RevealOnScroll>

        <RevealOnScroll delay={2}>
          <article className="h-full border border-line bg-white p-6">
            <h3 className="font-montserrat text-[1.05rem] font-extrabold text-forest-deep">
              {care.nutrition.title}
            </h3>
            <p className="mt-2 text-[0.9rem] leading-relaxed text-slate">{care.nutrition.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {care.nutrition.meals.map((meal) => (
                <span
                  key={meal}
                  className="border border-line bg-paper px-3 py-1.5 font-montserrat text-[0.72rem] font-bold uppercase tracking-[0.08em] text-forest-deep"
                >
                  {meal}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-col gap-3">
              {care.nutrition.items.map((item) => (
                <div key={item.title} className="flex gap-3.5 border border-line bg-paper p-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white">
                    <Icon name={item.icon} className="h-[1.1rem] w-[1.1rem] text-gold-dark" />
                  </span>
                  <div>
                    <h4 className="font-montserrat text-[0.86rem] font-bold text-forest-deep">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-[0.82rem] leading-relaxed text-slate">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 border-t border-line pt-4 text-[0.82rem] leading-relaxed text-slate">
              {care.nutrition.note}
            </p>
          </article>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
