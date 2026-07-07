import Link from "next/link";
import type { PillarItem } from "@/types";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";

const accentClasses = {
  emerald: "text-emerald",
  gold: "text-gold-dark",
  forest: "text-forest",
  violet: "text-violet",
} as const;

const easeBrand = "ease-[cubic-bezier(0.22,0.61,0.36,1)]";

type PillarCardProps = {
  pillar: PillarItem;
  delay?: 0 | 1 | 2 | 3 | 4;
};

export function PillarCard({ pillar, delay = 0 }: PillarCardProps) {
  return (
    <RevealOnScroll delay={delay}>
      <article className="group relative flex h-full flex-col overflow-hidden border-r border-line bg-white last:border-r-0">
        {/* Number — extra bottom padding separates it from the image */}
        <div
          className={cn(
            "px-6 pt-6 pb-7 font-montserrat text-[clamp(2.25rem,3.5vw,3rem)] font-black leading-none",
            "opacity-75 transition-all duration-300",
            easeBrand,
            "group-hover:opacity-100",
            accentClasses[pillar.accent],
          )}
        >
          {pillar.number}
        </div>

        <div className="relative aspect-[3/4] w-full shrink-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-forest-deep to-forest" />
          <ImageWithFallback
            image={pillar.image}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className={cn(
              "opacity-95 transition-all duration-300",
              easeBrand,
              "group-hover:scale-[1.04] group-hover:opacity-100",
            )}
          />
          <div
            className={cn(
              "absolute inset-0 z-[1] bg-gradient-to-t from-[rgba(10,44,40,0.78)] to-transparent",
              "opacity-0 transition-opacity duration-300",
              easeBrand,
              "group-hover:opacity-100",
            )}
          />
        </div>

        {/* Title & tagline — subdued at rest, emphasized on hover */}
        <div className="flex flex-1 flex-col px-6 pb-5 pt-6">
          <h3
            className={cn(
              "text-[1.05rem] font-semibold uppercase tracking-[0.05em] transition-all duration-300",
              easeBrand,
              "group-hover:font-extrabold group-hover:tracking-[0.06em]",
              accentClasses[pillar.accent],
            )}
          >
            {pillar.title}
          </h3>
          <p
            className={cn(
              "mt-2 text-[0.875rem] leading-snug text-slate/65 transition-all duration-300",
              easeBrand,
              "group-hover:text-slate/95",
            )}
          >
            {pillar.tagline}
          </p>

          {/* Expandable body — smooth grid-based reveal */}
          <div
            className={cn(
              "grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-300",
              easeBrand,
              "group-hover:grid-rows-[1fr] group-hover:opacity-100",
            )}
          >
            <div className="overflow-hidden">
              <p
                className={cn(
                  "pt-4 text-[0.875rem] leading-[1.68] text-slate/75 transition-colors duration-300",
                  easeBrand,
                  "group-hover:text-slate",
                )}
              >
                {pillar.description}
              </p>
              <Link
                href={pillar.href}
                className={cn(
                  "mb-1 mt-5 inline-flex items-center gap-1.5 bg-forest-deep px-4 py-2.5",
                  "font-montserrat text-[0.73rem] font-bold uppercase tracking-widest text-white",
                  "transition-all duration-200",
                  easeBrand,
                  "hover:gap-2 hover:bg-emerald",
                )}
              >
                Learn More
                <Icon name="arrow" className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </RevealOnScroll>
  );
}
