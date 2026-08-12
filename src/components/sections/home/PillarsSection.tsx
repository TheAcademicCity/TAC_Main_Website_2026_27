"use client";

import { useEffect, useRef, useState } from "react";
import { pillarsContent } from "@/data/home";
import { PillarCard } from "@/components/sections/shared/PillarCard";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

/** Chamfer only the outer perimeter of the pillar image strip; keep shared edges sharp. */
function pillarImageRadius(index: number, total: number) {
  const isFirst = index === 0;
  const isLast = index === total - 1;
  const isLeftInSmRow = index % 2 === 0;

  return cn(
    "rounded-lg",
    isLeftInSmRow ? "sm:rounded-l-lg sm:rounded-r-none" : "sm:rounded-r-lg sm:rounded-l-none",
    isFirst && "lg:rounded-l-lg lg:rounded-r-none",
    isLast && "lg:rounded-r-lg lg:rounded-l-none",
    !isFirst && !isLast && "lg:rounded-none",
  );
}

const mobileCardGradients = [
  "bg-gradient-to-br from-forest to-[#0c322c]",
  "bg-gradient-to-br from-violet to-[#3d0d63]",
  "bg-gradient-to-br from-charcoal to-[#241f22]",
  "bg-gradient-to-br from-emerald to-[#155c37]",
] as const;

const mobileTitles = ["Academics", "Co-curricular", "Boarding Life", "Career Orientation"] as const;

const mobileBlurbs = [
  "CBSE curriculum, 1:10 ratio, personalised Student Progression Plans from Grade 5.",
  "Art, dance, theatre, music — plus Life Readiness: finance, first aid, cooking.",
  "AC hostels, pastoral care, 24-hr doctor on-call, Indic value-based living.",
  "600+ career paths explored via psychometrics, mentoring & industry visits.",
] as const;

export function PillarsSection() {
  const total = pillarsContent.items.length;
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      const cardWidth = 240 + 14;
      const index = Math.round(el.scrollLeft / cardWidth);
      setActive(Math.min(Math.max(index, 0), total - 1));
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [total]);

  return (
    <Section id="pillars" className="!py-[clamp(28px,3.5vw,44px)] max-md:!px-0">
      <div className="px-5 md:px-0">
        <SectionHeader
          label={pillarsContent.label}
          title={pillarsContent.title}
          description={pillarsContent.description}
          reveal={false}
          className="mb-2 max-md:[&_h2]:text-[1.3rem] max-md:[&_p]:mb-0 max-md:[&_p]:max-w-[320px] max-md:[&_p]:text-[0.8rem] max-md:[&_span]:text-[0.62rem] [&_p]:text-[1rem] [&_p]:leading-relaxed"
        />
        <p className="mb-4 text-[0.8rem] leading-normal text-[#999] md:hidden">
          Swipe through the deliberate path every TACS student follows — daily.
        </p>
      </div>

      {/* Mobile snap deck */}
      <div className="md:hidden">
        <div
          ref={scrollerRef}
          className="scrollbar-none flex snap-x snap-mandatory gap-3.5 overflow-x-auto px-5 pb-2.5"
        >
          {pillarsContent.items.map((pillar, index) => (
            <article
              key={pillar.number}
              className={cn(
                "flex min-h-[210px] w-[240px] shrink-0 snap-start flex-col justify-between rounded-[20px] px-[18px] py-[22px] text-white",
                mobileCardGradients[index] ?? mobileCardGradients[0],
              )}
            >
              <div className="font-montserrat text-[1.875rem] font-extrabold text-white/35">
                {pillar.number}
              </div>
              <div>
                <h3 className="mb-1.5 font-montserrat text-[1rem] font-bold">
                  {mobileTitles[index] ?? pillar.title}
                </h3>
                <p className="text-[0.75rem] leading-normal text-white/82">
                  {mobileBlurbs[index] ?? pillar.tagline}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-3.5 flex justify-center gap-1.5">
          {pillarsContent.items.map((pillar, index) => (
            <span
              key={pillar.number}
              className={cn(
                "h-1.5 rounded-full bg-[#c3c3c3] transition-all",
                index === active ? "w-4 rounded bg-forest" : "w-1.5",
              )}
            />
          ))}
        </div>
      </div>

      {/* Desktop / tablet grid */}
      <div className="hidden items-stretch md:grid md:grid-cols-2 lg:grid-cols-4">
        {pillarsContent.items.map((pillar, index) => (
          <PillarCard
            key={pillar.number}
            pillar={pillar}
            imageClassName={pillarImageRadius(index, total)}
          />
        ))}
      </div>
    </Section>
  );
}
