import type { PillarItem } from "@/types";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { cn } from "@/lib/utils";

const accentClasses = {
  emerald: "text-emerald",
  gold: "text-gold-dark",
  forest: "text-forest",
  violet: "text-violet",
} as const;

const dividerClasses = {
  emerald: "group-hover:via-emerald/50",
  gold: "group-hover:via-gold/55",
  forest: "group-hover:via-forest/50",
  violet: "group-hover:via-violet/50",
} as const;

const easeBrand = "ease-[cubic-bezier(0.22,0.61,0.36,1)]";

type PillarCardProps = {
  pillar: PillarItem;
  showDivider?: boolean;
  showLeftDivider?: boolean;
  dividerClassName?: string;
};

export function PillarCard({
  pillar,
  showDivider = false,
  showLeftDivider = false,
  dividerClassName,
}: PillarCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden bg-white">
        {showDivider ? (
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute right-0 top-[8%] z-10 hidden h-[84%] w-px sm:block",
              "bg-gradient-to-b from-transparent via-line/30 to-transparent",
              "opacity-60 transition-all duration-500",
              easeBrand,
              "group-hover:opacity-100",
              dividerClasses[pillar.accent],
              dividerClassName,
            )}
          />
        ) : null}
        {showLeftDivider ? (
          <div
            aria-hidden
            className={cn(
              "pointer-events-none absolute left-0 top-[8%] z-10 hidden h-[84%] w-px sm:block",
              "bg-gradient-to-b from-transparent via-line/0 to-transparent",
              "opacity-0 transition-all duration-500",
              easeBrand,
              "group-hover:via-line/30 group-hover:opacity-100",
              dividerClasses[pillar.accent],
            )}
          />
        ) : null}
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

        <div className="relative aspect-[3/4] w-full shrink-0 overflow-hidden rounded-lg bg-neutral-900">
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
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover object-center"
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
            </div>
          </div>
        </div>
      </article>
  );
}
