import { aboutPageContent } from "@/data/about";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function DifferentSection() {
  const { different } = aboutPageContent;

  return (
    <Section id="different" background="paper">
      <RevealOnScroll>
        <SectionLabel>{different.label}</SectionLabel>
        <h2 className="max-w-[22ch] font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold text-forest-deep">
          {different.title}
        </h2>
      </RevealOnScroll>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {different.cards.map((card, index) => (
          <RevealOnScroll key={card.number} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
            <article className="flex h-full gap-4 border border-line bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-18px_rgba(15,61,56,0.16)]">
              <div className="font-montserrat text-[1.35rem] font-black leading-none text-gold">
                {card.number}
              </div>
              <div>
                <h4 className="font-montserrat text-[0.95rem] font-extrabold text-forest-deep">
                  {card.title}
                </h4>
                <p className="mt-2 text-[0.86rem] leading-relaxed text-slate">{card.description}</p>
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
