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
        isFeatured ? "min-h-[640px]" : "min-h-[320px]",
      )}
    >
      <div className="absolute inset-0">
        <span
          className={cn(
            "absolute inset-0 z-0 grid place-items-center font-montserrat font-black text-white/30",
            isFeatured ? "text-6xl" : "text-5xl",
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

      <div className={cn("relative z-[3]", isFeatured ? "p-10" : "p-6")}>
        <span className="inline-flex bg-gold px-3 py-1 font-montserrat text-[0.66rem] font-extrabold uppercase tracking-widest text-forest-deep">
          {founder.role}
        </span>
        {isFeatured ? (
          <h3 className="mt-3 font-montserrat text-[clamp(1.6rem,3vw,2.2rem)] font-black text-white">
            {founder.name}
          </h3>
        ) : (
          <h4 className="mt-2 text-[1.15rem] font-extrabold text-white">{founder.name}</h4>
        )}
        <blockquote
          className={cn(
            "mt-3 border-l-2 border-gold pl-3 italic leading-relaxed text-white/72",
            isFeatured ? "max-w-[46ch] text-base" : "text-[0.85rem]",
          )}
        >
          &ldquo;{founder.quote}&rdquo;
        </blockquote>
        {isFeatured ? (
          <div className="mt-5 flex items-center gap-2">
            <span className="h-px w-7 bg-gold" />
            <span className="font-montserrat text-[0.72rem] font-bold uppercase tracking-widest text-white/55">
              Founder, The Academic City School
            </span>
          </div>
        ) : null}
      </div>
    </article>
  );
}
