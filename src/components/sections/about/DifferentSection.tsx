import { aboutPageContent } from "@/data/about";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function DifferentSection() {
  const { different } = aboutPageContent;

  return (
    <Section id="different" background="paper">
      <RevealOnScroll>
        <SectionLabel>{different.label}</SectionLabel>
        <h2 className="max-w-[22ch] font-montserrat text-[clamp(1.35rem,6vw,2rem)] font-extrabold leading-tight text-forest-deep md:text-[clamp(1.5rem,2.6vw,2rem)]">
          {different.title}
        </h2>
      </RevealOnScroll>

      <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
        {different.cards.map((card, index) => (
          <RevealOnScroll key={card.title} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
            <article className="group relative min-h-[clamp(170px,48vw,220px)] overflow-hidden rounded-lg border border-line transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-16px_rgba(15,61,56,0.2)] sm:min-h-[clamp(180px,22vw,220px)]">
              <ImageWithFallback
                image={card.image}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top_left,rgba(5,22,18,0.88)_0%,rgba(5,22,18,0.55)_28%,rgba(5,22,18,0.18)_48%,transparent_68%)]"
              />

              <div className="relative flex h-full min-h-[clamp(170px,48vw,220px)] items-end justify-end p-4 sm:min-h-[clamp(180px,22vw,220px)] sm:p-6">
                <div className="w-full text-right sm:w-[84%]">
                  <h4 className="font-montserrat text-[0.92rem] font-extrabold text-white sm:text-[0.96rem]">
                    {card.title}
                  </h4>
                  <p className="mt-1.5 whitespace-normal text-[0.8rem] leading-snug text-white/72 sm:whitespace-pre-line sm:text-[0.82rem]">
                    {card.description}
                  </p>
                </div>
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
