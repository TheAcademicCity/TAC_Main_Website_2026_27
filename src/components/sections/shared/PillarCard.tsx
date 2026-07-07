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

type PillarCardProps = {
  pillar: PillarItem;
  delay?: 0 | 1 | 2 | 3 | 4;
};

export function PillarCard({ pillar, delay = 0 }: PillarCardProps) {
  return (
    <RevealOnScroll delay={delay}>
      <article className="group relative overflow-hidden border-r border-line bg-white last:border-r-0">
        <div className={cn("px-5 pt-5 font-montserrat text-5xl font-black leading-none transition-colors", accentClasses[pillar.accent])}>
          {pillar.number}
        </div>

        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-forest-deep to-forest" />
          <ImageWithFallback
            image={pillar.image}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[rgba(10,44,40,0.75)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <div className="px-5 pt-5">
          <h3 className={cn("text-[1.1rem] font-extrabold uppercase tracking-wider", accentClasses[pillar.accent])}>
            {pillar.title}
          </h3>
          <p className="text-[0.87rem] text-slate">{pillar.tagline}</p>
        </div>

        <div className="max-h-0 overflow-hidden px-5 opacity-0 transition-all duration-500 ease-out group-hover:max-h-72 group-hover:opacity-100">
          <p className="py-3 text-[0.87rem] leading-relaxed text-slate">{pillar.description}</p>
          <Link
            href={pillar.href}
            className="mb-5 inline-flex items-center gap-1.5 bg-forest-deep px-4 py-2.5 font-montserrat text-[0.73rem] font-bold uppercase tracking-widest text-white transition-colors hover:bg-emerald"
          >
            Learn More
            <Icon name="arrow" className="h-3.5 w-3.5" />
          </Link>
        </div>
      </article>
    </RevealOnScroll>
  );
}
