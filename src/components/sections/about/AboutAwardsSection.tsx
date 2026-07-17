import { aboutPageContent } from "@/data/about";
import { AwardIcon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function AboutAwardsSection() {
  const { awards } = aboutPageContent;

  return (
    <Section id="awards" background="white">
      <RevealOnScroll className="mx-auto max-w-3xl text-center">
        <SectionLabel centered>{awards.label}</SectionLabel>
        <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold text-forest-deep">
          {awards.title}
        </h2>
      </RevealOnScroll>

      <div className="mt-8 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-5">
        {awards.items.map((award, index) => (
          <RevealOnScroll key={award.name} delay={Math.min(index, 4) as 0 | 1 | 2 | 3 | 4}>
            <article className="flex h-full flex-col items-center gap-3 bg-white px-5 py-8 text-center">
              <div className="grid h-16 w-16 place-items-center rounded-full border border-gold/35 bg-gradient-to-br from-gold/15 to-gold/5">
                <AwardIcon index={index} />
              </div>
              <h4 className="font-montserrat text-[0.82rem] font-bold tracking-wide text-forest-deep">
                {award.name}
              </h4>
              <p className="text-[0.72rem] font-semibold tracking-widest text-gold">{award.year}</p>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
