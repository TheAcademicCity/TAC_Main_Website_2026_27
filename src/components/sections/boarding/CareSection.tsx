import { boardingPageContent } from "@/data/boarding";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function CareSection() {
  const { care } = boardingPageContent;

  return (
    <Section id="care" background="paper">
      <RevealOnScroll>
        <SectionLabel>{care.label}</SectionLabel>
        <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold text-forest-deep">
          {care.title}
        </h2>
      </RevealOnScroll>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <RevealOnScroll delay={1}>
          <article className="relative overflow-hidden border border-line bg-white p-8 before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-forest before:content-['']">
            <div className="mb-5 flex items-center gap-3.5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] bg-forest/8">
                <Icon name="shieldCheck" className="h-5 w-5 text-forest" />
              </span>
              <h3 className="font-montserrat text-[1.05rem] font-extrabold text-forest-deep">
                {care.safety.title}
              </h3>
            </div>
            <p className="text-[0.9rem] leading-relaxed text-slate">{care.safety.description}</p>

            <div className="mt-4 flex flex-col gap-2.5">
              {care.safety.items.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-2.5 border-l-[3px] border-forest bg-paper px-3.5 py-3"
                >
                  <Icon name={item.icon} className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
                  <div>
                    <h4 className="font-montserrat text-[0.85rem] font-bold text-forest-deep">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 text-[0.8rem] leading-relaxed text-slate">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </RevealOnScroll>

        <RevealOnScroll delay={2}>
          <article className="relative overflow-hidden border border-line bg-white p-8 before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gold before:content-['']">
            <div className="mb-5 flex items-center gap-3.5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] bg-gold/10">
                <Icon name="heart" className="h-5 w-5 text-gold-dark" />
              </span>
              <h3 className="font-montserrat text-[1.05rem] font-extrabold text-forest-deep">
                {care.nutrition.title}
              </h3>
            </div>
            <p className="text-[0.9rem] leading-relaxed text-slate">{care.nutrition.description}</p>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {care.nutrition.meals.map((meal) => (
                <span
                  key={meal}
                  className="border border-gold/25 bg-gold/8 px-3 py-2 text-center text-[0.82rem] font-semibold text-forest-deep"
                >
                  {meal}
                </span>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-2.5">
              {care.nutrition.items.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-2.5 border-l-[3px] border-gold bg-paper px-3.5 py-3"
                >
                  <Icon name={item.icon} className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                  <div>
                    <h4 className="font-montserrat text-[0.85rem] font-bold text-forest-deep">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 text-[0.8rem] leading-relaxed text-slate">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
