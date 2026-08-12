import { boardingPageContent } from "@/data/boarding";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { BoardingPageContent } from "@/types/boarding";

type KeyItem = BoardingPageContent["dorm"]["keyItems"][number];

function KeyItemList({ items }: { items: readonly KeyItem[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item.text} className="flex items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-forest/8 text-[1.1rem] leading-none">
            <span aria-hidden>{item.icon}</span>
          </span>
          <span className="text-[0.84rem] leading-snug text-slate">{item.text}</span>
        </li>
      ))}
    </ul>
  );
}

export function DormSection() {
  const { dorm } = boardingPageContent;
  const leftKeyItems = dorm.keyItems.slice(0, 3);
  const rightKeyItems = dorm.keyItems.slice(3, 6);

  return (
    <Section id="dorm" className="max-md:!py-[34px]" containerClassName="max-md:!px-5">
      {/* Mobile */}
      <div className="md:hidden">
        <RevealOnScroll>
          <SectionLabel className="!mb-2 before:hidden !text-[0.62rem] !tracking-[0.14em] !text-emerald">
            {dorm.label}
          </SectionLabel>
          <h2 className="font-montserrat text-[1.25rem] font-extrabold leading-[1.28] tracking-[-0.01em] text-navy">
            {dorm.title}
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          <div className="relative mt-4 mb-4 h-[180px] overflow-hidden rounded-[18px] bg-forest-deep">
            <ImageWithFallback
              image={dorm.image}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent"
            />
            <blockquote className="absolute inset-x-0 bottom-0 z-[2] border-l-[3px] border-gold px-3.5 pb-3.5 pl-3.5 text-[0.75rem] italic leading-relaxed text-white/90">
              &ldquo;{dorm.quote}&rdquo;
            </blockquote>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          {dorm.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="mb-3 text-[0.8125rem] leading-[1.65] text-charcoal"
            >
              {paragraph}
            </p>
          ))}

          <div className="mt-1 rounded-[16px] border border-off-white bg-off-white px-3.5 py-3.5">
            <p className="mb-3 font-montserrat text-[0.625rem] font-extrabold uppercase tracking-[0.14em] text-navy">
              {dorm.keyItemsLabel}
            </p>
            <ul className="grid grid-cols-1 gap-2.5">
              {dorm.keyItems.map((item) => (
                <li key={item.text} className="flex items-center gap-2.5">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[10px] bg-white text-[1rem] leading-none shadow-[0_4px_12px_-8px_rgba(0,0,0,0.2)]">
                    <span aria-hidden>{item.icon}</span>
                  </span>
                  <span className="text-[0.75rem] leading-snug text-[#666]">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </div>

      {/* Desktop */}
      <div className="hidden items-stretch gap-7 md:grid lg:grid-cols-2 lg:gap-16">
        <RevealOnScroll className="flex h-full min-h-0">
          <div className="group relative h-full min-h-[240px] w-full overflow-hidden rounded-xl bg-forest-deep sm:min-h-[320px] sm:rounded-2xl">
            <ImageWithFallback
              image={dorm.image}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 z-[2] px-4 pb-4 pt-12 sm:px-7 sm:pb-7 sm:pt-16">
              <blockquote className="border-l-[3px] border-gold pl-3 text-[0.88rem] italic leading-relaxed text-white/90 sm:pl-4 sm:text-[0.92rem]">
                &ldquo;{dorm.quote}&rdquo;
              </blockquote>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={1} className="flex h-full min-h-0 flex-col">
          <SectionLabel>{dorm.label}</SectionLabel>
          <h2 className="font-montserrat text-[clamp(1.4rem,2.4vw,1.9rem)] font-extrabold leading-tight text-forest-deep">
            {dorm.title}
          </h2>
          {dorm.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="mt-3 text-[0.92rem] leading-relaxed text-slate sm:text-[0.96rem]"
            >
              {paragraph}
            </p>
          ))}

          <div className="mt-5 w-full rounded-lg border border-line bg-paper px-4 py-3.5 sm:px-5 sm:py-4">
            <p className="font-montserrat text-[0.72rem] font-extrabold uppercase tracking-[0.14em] text-forest-deep">
              {dorm.keyItemsLabel}
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 sm:gap-x-6">
              <KeyItemList items={leftKeyItems} />
              <KeyItemList items={rightKeyItems} />
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
