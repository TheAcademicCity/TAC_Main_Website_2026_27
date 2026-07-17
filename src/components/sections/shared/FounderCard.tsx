import type { FounderProfile } from "@/types";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { cn } from "@/lib/utils";

type FounderCardProps = {
  founder: FounderProfile;
};

export function FounderCard({ founder }: FounderCardProps) {
  const isFeatured = founder.variant === "featured";

  return (
    <article
      className={cn(
        "group relative flex flex-col justify-end overflow-hidden bg-forest-deep",
        isFeatured ? "min-h-[520px]" : "min-h-[255px]",
      )}
    >
      <div className="absolute inset-0">
        <span
          className={cn(
            "absolute inset-0 z-0 grid place-items-center font-montserrat font-black text-white/30",
            isFeatured ? "text-5xl" : "text-4xl",
          )}
        >
          {founder.initials}
        </span>
        <ImageWithFallback
          image={founder.image}
          fill
          sizes={isFeatured ? "60vw" : "40vw"}
          className="relative z-[1] grayscale-[20%] transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>

      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[rgba(5,22,18,0.95)] via-[rgba(5,22,18,0.45)] to-transparent" />

      <div className={cn("relative z-[3]", isFeatured ? "p-7" : "p-5")}>
        <span className="inline-flex bg-gold px-2.5 py-0.5 font-montserrat text-[0.62rem] font-extrabold uppercase tracking-widest text-forest-deep">
          {founder.role}
        </span>
        {isFeatured ? (
          <h3 className="mt-2.5 font-montserrat text-[clamp(1.35rem,2.5vw,1.9rem)] font-black text-white">
            {founder.name}
          </h3>
        ) : (
          <h4 className="mt-1.5 text-[1.05rem] font-extrabold text-white">{founder.name}</h4>
        )}
        <blockquote
          className={cn(
            "mt-2.5 border-l-2 border-gold pl-3 italic leading-relaxed text-white/72",
            isFeatured ? "max-w-[46ch] text-[0.92rem]" : "text-[0.8rem]",
          )}
        >
          &ldquo;{founder.quote}&rdquo;
        </blockquote>
        {isFeatured ? (
          <div className="mt-4 flex items-center gap-2">
            <span className="h-px w-7 bg-gold" />
            <span className="font-montserrat text-[0.68rem] font-bold uppercase tracking-widest text-white/55">
              Founder, The Academic City School
            </span>
          </div>
        ) : null}
      </div>
    </article>
  );
}
