"use client";

import type { AwardItem } from "@/types";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

type AwardTileProps = {
  award: AwardItem;
  index: number;
};

export function AwardTile({ award, index }: AwardTileProps) {
  return (
    <RevealOnScroll delay={(index % 5) as 0 | 1 | 2 | 3 | 4}>
      <article className="group relative z-10 flex items-center justify-center bg-forest-deep/78 px-4 py-4 transition-colors hover:bg-forest-deep sm:px-5 sm:py-5">
        <div className="relative h-14 w-full max-w-[148px] sm:h-16">
          <ImageWithFallback
            image={award.image}
            fill
            objectFit="contain"
            sizes="148px"
          />
        </div>
      </article>
    </RevealOnScroll>
  );
}
