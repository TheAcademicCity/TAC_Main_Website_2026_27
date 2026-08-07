import { boardingPageContent } from "@/data/boarding";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function CommunicationSection() {
  const { communication } = boardingPageContent;

  return (
    <Section id="communication">
      <RevealOnScroll>
        <SectionLabel>{communication.label}</SectionLabel>
        <h2 className="font-montserrat text-[clamp(1.35rem,6vw,2rem)] font-extrabold leading-tight text-forest-deep md:text-[clamp(1.5rem,2.6vw,2rem)]">
          {communication.title}
        </h2>
        <p className="mt-2 max-w-[42ch] whitespace-normal text-[0.92rem] text-slate sm:max-w-none sm:text-[0.96rem] lg:whitespace-nowrap">
          {communication.description}
        </p>
      </RevealOnScroll>

      <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-5">
        {communication.cards.map((card, index) => (
          <RevealOnScroll key={card.title} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
            <article className="h-full overflow-hidden rounded-lg border border-line bg-paper px-4 py-5 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(15,61,56,0.18)] sm:px-5 sm:py-6">
              <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-forest/8 text-[1.4rem] leading-none sm:mb-3.5 sm:h-14 sm:w-14 sm:text-[1.55rem]">
                <span aria-hidden>{card.icon}</span>
              </div>
              <h3 className="font-montserrat text-[0.92rem] font-extrabold text-forest-deep">
                {card.title}
              </h3>
              <p className="mt-2 text-[0.8rem] leading-relaxed text-slate">{card.description}</p>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
