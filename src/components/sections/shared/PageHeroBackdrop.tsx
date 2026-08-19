import Image from "next/image";
import { cn } from "@/lib/utils";

const HERO_BACKDROP_SRC = "/images/shared/hero-backdrop.png";

const gradientClasses = {
  standard:
    "bg-gradient-to-b from-[rgba(14,57,52,0.2)] to-[rgba(9,38,35,0.88)] md:bg-gradient-to-t md:from-[rgba(5,22,18,0.94)] md:via-[rgba(5,22,18,0.62)] md:to-[rgba(5,22,18,0.12)]",
  compact: "bg-gradient-to-b from-[rgba(14,57,52,0.28)] to-[rgba(9,38,35,0.9)]",
  horizontal:
    "bg-gradient-to-r from-[rgba(5,22,18,0.92)] via-[rgba(5,22,18,0.78)] to-[rgba(5,22,18,0.55)]",
} as const;

type PageHeroBackdropProps = {
  className?: string;
  objectPosition?: string;
  gradient?: keyof typeof gradientClasses;
  priority?: boolean;
};

export function PageHeroBackdrop({
  className,
  objectPosition = "center 35%",
  gradient = "standard",
  priority = true,
}: PageHeroBackdropProps) {
  return (
    <div aria-hidden className={cn("absolute inset-0 overflow-hidden", className)}>
      <Image
        src={HERO_BACKDROP_SRC}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover scale-[1.04]"
        style={{ objectPosition }}
      />
      <div className="absolute inset-0 bg-forest-deep/28 backdrop-blur-[6px] backdrop-saturate-[1.08]" />
      <div className="absolute inset-0 bg-white/[0.025]" />
      <div className={cn("absolute inset-0", gradientClasses[gradient])} />
    </div>
  );
}
