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
    <Section id="dorm">
      <div className="grid items-stretch gap-7 lg:grid-cols-2 lg:gap-16">
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
          <h2 className="font-montserrat text-[clamp(1.35rem,6vw,1.9rem)] font-extrabold leading-tight text-forest-deep md:text-[clamp(1.4rem,2.4vw,1.9rem)]">
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
