"use client";

import { useEffect, useRef, useState } from "react";
import { coCurricularPageContent } from "@/data/coCurricular";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

export function EventsSection() {
  const { events } = coCurricularPageContent;
  const deckRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return;

    const onScroll = () => {
      const cards = Array.from(deck.children) as HTMLElement[];
      if (!cards.length) return;

      const center = deck.scrollLeft + deck.clientWidth / 2;
      let nearest = 0;
      let nearestDist = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const dist = Math.abs(cardCenter - center);
        if (dist < nearestDist) {
          nearestDist = dist;
          nearest = index;
        }
      });

      setActiveIndex(nearest);
    };

    onScroll();
    deck.addEventListener("scroll", onScroll, { passive: true });
    return () => deck.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Section
      id="events"
      background="paper"
      spacing="compact"
      className="max-md:!bg-white max-md:!py-[34px]"
      containerClassName="max-md:!px-5"
    >
      {/* Mobile */}
      <div className="md:hidden">
        <RevealOnScroll>
          <SectionLabel className="!mb-2 before:hidden !text-[0.62rem] !tracking-[0.14em] !text-emerald">
            {events.label}
          </SectionLabel>
          <h2 className="mb-4 font-montserrat text-[1.25rem] font-extrabold leading-[1.28] tracking-[-0.01em] text-navy">
            Moments Students Remember for Life
          </h2>
        </RevealOnScroll>

        <div
          ref={deckRef}
          className="scrollbar-none -mx-5 flex snap-x snap-mandatory gap-3.5 overflow-x-auto px-5 pb-1.5"
        >
          {events.items.map((item) => (
            <article
              key={item.number}
              className="w-[220px] shrink-0 snap-start rounded-[18px] border-l-4 border-gold bg-white p-[18px] shadow-[0_10px_26px_-16px_rgba(0,0,0,0.22)]"
            >
              <div className="mb-2.5 flex items-center justify-between">
                <span className="font-montserrat text-[1.25rem] font-extrabold text-[#c3c3c3]">
                  {item.number}
                </span>
                <span className="rounded-xl bg-off-white px-2.5 py-1 text-[0.59375rem] font-bold uppercase tracking-[0.04em] text-forest">
                  {item.badge}
                </span>
              </div>
              <h5 className="mb-1.5 font-montserrat text-[0.875rem] font-bold leading-snug text-navy">
                {item.title.replace(" (MUN)", "")}
              </h5>
              <p className="text-[0.71875rem] leading-[1.55] text-[#999]">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-3 flex justify-center gap-1.5" aria-hidden>
          {events.items.map((item, index) => (
            <span
              key={item.number}
              className={cn(
                "h-1.5 rounded-full transition-all",
                index === activeIndex ? "w-3.5 bg-forest" : "w-1.5 bg-[#c3c3c3]",
              )}
            />
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <RevealOnScroll>
          <SectionLabel>{events.label}</SectionLabel>
          <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold leading-tight text-forest-deep">
            {events.title}
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          <div className="mt-6 border-t border-line sm:mt-8">
            {events.items.map((item) => (
              <div
                key={item.number}
                className="group grid grid-cols-[auto_1fr] items-start gap-x-3 gap-y-2 border-b border-line py-4 transition-[transform,background-color] duration-700 ease-out hover:-translate-y-px hover:bg-forest/[0.035] sm:grid-cols-[80px_minmax(0,1fr)] sm:gap-x-6 sm:py-6"
              >
                <div className="font-montserrat text-[1.75rem] font-black leading-none text-forest/12 transition-colors duration-700 ease-out group-hover:text-forest/20 sm:pt-1 sm:text-center sm:text-[2.2rem]">
                  {item.number}
                </div>
                <div className="min-w-0">
                  <div className="flex flex-col items-start gap-2 sm:flex-row sm:justify-between sm:gap-4">
                    <h4 className="font-montserrat text-[0.98rem] font-extrabold text-forest-deep transition-colors duration-700 ease-out group-hover:text-forest sm:text-[1.02rem]">
                      {item.title}
                    </h4>
                    <span className="shrink-0 whitespace-nowrap border-[1.5px] border-line bg-paper px-2.5 py-1 font-montserrat text-[0.62rem] font-bold uppercase tracking-[0.14em] text-forest transition-[border-color,background-color,color] duration-700 ease-out group-hover:border-emerald/25 group-hover:bg-white group-hover:text-emerald sm:mr-3 sm:px-3 sm:text-[0.65rem]">
                      {item.badge}
                    </span>
                  </div>
                  <p className="mt-1 text-[0.84rem] leading-relaxed text-slate transition-colors duration-700 ease-out group-hover:text-slate/90 sm:text-[0.86rem]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
