import type { AwardItem } from "@/types";
import { AwardIcon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

type AwardTileProps = {
  award: AwardItem;
  index: number;
};

export function AwardTile({ award, index }: AwardTileProps) {
  return (
    <RevealOnScroll delay={(index % 5) as 0 | 1 | 2 | 3 | 4}>
      <article className="group relative flex flex-col items-center gap-4 bg-forest-deep px-6 py-9 text-center transition-colors hover:bg-white/6">
        <div className="grid h-20 w-20 place-items-center rounded-full border border-gold/35 bg-gradient-to-br from-gold/15 to-gold/5 transition-all group-hover:border-gold group-hover:shadow-[0_0_24px_rgba(246,171,22,0.2)]">
          <AwardIcon index={index} />
        </div>
        <div className="font-montserrat text-[0.8rem] font-bold tracking-wide text-white">{award.name}</div>
        <div className="text-[0.72rem] font-semibold tracking-widest text-gold">{award.year}</div>
        <span className="absolute bottom-0 left-1/2 h-[3px] w-10 -translate-x-1/2 scale-x-0 bg-gold transition-transform group-hover:scale-x-100" />
      </article>
    </RevealOnScroll>
  );
}
