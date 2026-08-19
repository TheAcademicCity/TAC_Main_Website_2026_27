import { aboutPageContent } from "@/data/about";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

export function DifferentSection() {
  const { different } = aboutPageContent;

  return (
    <Section
      id="different"
      background="paper"
      className="max-md:!bg-off-white !pt-4 max-md:!pb-7"
      containerClassName="max-md:!px-5"
    >
      {/* Mobile */}
      <div className="md:hidden">
        <RevealOnScroll>
          <SectionLabel className="!mb-2 before:hidden !text-[0.62rem] !tracking-[0.14em] !text-emerald">
            {different.label}
          </SectionLabel>
          <h2 className="font-montserrat text-[1.3rem] font-extrabold leading-[1.28] tracking-[-0.01em] text-navy">
            {different.title}
          </h2>
        </RevealOnScroll>

        <div className="mt-4 space-y-3.5">
          {different.cards.map((card, index) => (
            <RevealOnScroll key={card.title} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
              <article className="flex overflow-hidden rounded-2xl bg-white shadow-[0_8px_22px_-14px_rgba(0,0,0,0.2)]">
                <div className="relative h-[100px] w-[100px] shrink-0">
                  <ImageWithFallback
                    image={card.image}
                    fill
                    sizes="100px"
                    className={cn("object-cover", card.imageObjectClassName ?? "object-center")}
                  />
                </div>
                <div className="flex-1 p-3.5">
                  <h5 className="mb-1 font-montserrat text-[0.8125rem] font-bold leading-snug text-navy">
                    {card.title}
                  </h5>
                  <p className="text-[0.6875rem] leading-[1.5] text-[#999] whitespace-normal">
                    {card.description.replace(/\n/g, " ")}
                  </p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <RevealOnScroll>
          <SectionLabel>{different.label}</SectionLabel>
          <h2 className="max-w-[22ch] font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold leading-tight text-forest-deep">
            {different.title}
          </h2>
        </RevealOnScroll>

        <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
          {different.cards.map((card, index) => (
            <RevealOnScroll key={card.title} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
              <article className="group relative min-h-[clamp(180px,22vw,220px)] overflow-hidden rounded-lg border border-line transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-16px_rgba(15,61,56,0.2)]">
                <ImageWithFallback
                  image={card.image}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className={cn(
                    "object-cover transition-transform duration-500 group-hover:scale-105",
                    card.imageObjectClassName ?? "object-center",
                  )}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top_left,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.72)_22%,rgba(0,0,0,0.38)_42%,rgba(0,0,0,0.12)_58%,transparent_72%)]"
                />

                <div className="relative flex h-full min-h-[clamp(180px,22vw,220px)] items-end justify-end p-4 sm:p-6">
                  <div className="w-full text-right sm:w-[84%]">
                    <h4 className="font-montserrat text-[0.92rem] font-extrabold text-white sm:text-[0.96rem]">
                      {card.title}
                    </h4>
                    <p className="mt-1.5 whitespace-pre-line text-[0.8rem] leading-snug text-white/85 sm:text-[0.82rem]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </Section>
  );
}
