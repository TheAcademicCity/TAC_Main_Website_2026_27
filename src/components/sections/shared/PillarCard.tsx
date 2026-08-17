import type { PillarItem } from "@/types";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { cn } from "@/lib/utils";

const accentClasses = {
  emerald: "text-emerald",
  gold: "text-gold-dark",
  forest: "text-forest",
  violet: "text-violet",
} as const;

const dividerAccentClasses = {
  emerald: "group-hover:via-emerald/50",
  gold: "group-hover:via-gold/55",
  forest: "group-hover:via-forest/50",
  violet: "group-hover:via-violet/50",
} as const;

const easeBrand = "ease-[cubic-bezier(0.22,0.61,0.36,1)]";

const dividerBase = cn(
  "pointer-events-none absolute top-[8%] z-10 hidden h-[84%] w-px sm:block",
  "bg-gradient-to-b from-transparent via-line/0 to-transparent",
  "opacity-0 transition-all duration-500",
  easeBrand,
  "group-hover:via-line/30 group-hover:opacity-100",
);

type PillarCardProps = {
  pillar: PillarItem;
  /** Image corner radius — use to chamfer only the outer grid edge. */
  imageClassName?: string;
};

export function PillarCard({ pillar, imageClassName }: PillarCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden bg-white">
      <div
        aria-hidden
        className={cn("left-0", dividerBase, dividerAccentClasses[pillar.accent])}
      />
      <div
        aria-hidden
        className={cn("right-0", dividerBase, dividerAccentClasses[pillar.accent])}
      />
      {/* Number — extra bottom padding separates it from the image */}
      <div
        className={cn(
          "px-4 pt-5 pb-5 font-montserrat text-[clamp(2rem,8vw,3rem)] font-black leading-none sm:px-6 sm:pt-6 sm:pb-7 sm:text-[clamp(2.25rem,3.5vw,3rem)]",
          "opacity-75 transition-all duration-300",
          easeBrand,
          "group-hover:opacity-100",
          accentClasses[pillar.accent],
        )}
      >
        {pillar.number}
      </div>

      <div
        className={cn(
            "relative aspect-[4/5] w-full shrink-0 overflow-hidden bg-neutral-900 sm:aspect-[3/4]",
            imageClassName ?? "rounded-lg",
          )}
        >
        <div
          className={cn(
            "absolute inset-0 origin-center transition-transform duration-500 will-change-transform",
            easeBrand,
            "scale-[1.03] group-hover:scale-[1.08]",
          )}
        >
          <ImageWithFallback
            image={pillar.image}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className={cn("object-cover", pillar.imageObjectClassName ?? "object-center")}
          />
        </div>
        <div
          className={cn(
            "pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[rgba(10,44,40,0.45)] to-transparent",
            "opacity-0 transition-opacity duration-300",
            easeBrand,
            "group-hover:opacity-100",
          )}
        />
      </div>

      {/* Title & tagline — subdued at rest, emphasized on hover */}
      <div className="flex flex-1 flex-col px-4 pb-3 pt-4 sm:px-6 sm:pt-5">
        <h3
          className={cn(
            "text-[0.98rem] font-semibold uppercase tracking-[0.05em] transition-all duration-300 sm:text-[1.05rem]",
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

        {/* Expandable body — always visible on touch/mobile; hover reveal on lg+ */}
        <div
          className={cn(
            "grid transition-[grid-template-rows,opacity] duration-300",
            easeBrand,
            "grid-rows-[1fr] opacity-100",
            "lg:grid-rows-[0fr] lg:opacity-0 lg:group-hover:grid-rows-[1fr] lg:group-hover:opacity-100",
          )}
        >
          <div className="overflow-hidden">
            <p
              className={cn(
                "pt-4 text-[0.875rem] leading-[1.68] text-slate transition-colors duration-300",
                easeBrand,
                "lg:text-slate/75 lg:group-hover:text-slate",
              )}
            >
              {pillar.description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
