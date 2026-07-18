import { boardingPageContent } from "@/data/boarding";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function CommunicationSection() {
  const { communication } = boardingPageContent;

  return (
    <Section id="communication">
      <RevealOnScroll className="mx-auto max-w-3xl text-center">
        <SectionLabel centered>{communication.label}</SectionLabel>
        <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold text-forest-deep">
          {communication.title}
        </h2>
        <p className="mx-auto mt-2 max-w-[52ch] text-[0.96rem] text-slate">{communication.description}</p>
      </RevealOnScroll>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {communication.cards.map((card, index) => (
          <RevealOnScroll key={card.title} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
            <article className="h-full border border-line bg-paper px-5 py-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(15,61,56,0.14)]">
              <div className="mx-auto mb-3 grid h-[48px] w-[48px] place-items-center rounded-full border border-line bg-white">
                <Icon name={card.icon} className="h-5 w-5 text-emerald" />
              </div>
              <h3 className="font-montserrat text-[0.9rem] font-extrabold text-forest-deep">{card.title}</h3>
              <p className="mt-2 text-[0.8rem] leading-relaxed text-slate">{card.description}</p>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
