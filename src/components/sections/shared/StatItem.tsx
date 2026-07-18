import type { StatItem as StatItemType } from "@/types";
import { cn } from "@/lib/utils";

type StatItemProps = {
  item: StatItemType;
  variant?: "bar" | "card";
  className?: string;
  /** Span a grid cell edge-to-edge without overflowing (campus SPP chip). */
  fill?: boolean;
};

export function StatItem({ item, variant = "bar", className, fill }: StatItemProps) {
  if (variant === "card") {
    const featured = Boolean(item.featured);

    return (
      <div
        className={cn(
          "flex flex-col justify-center border border-white/14 bg-white/8 backdrop-blur-sm",
          fill ? "h-full w-full min-w-0 max-w-full items-start text-left" : "w-fit max-w-full",
          featured ? "px-3.5 py-1.5" : "px-3 py-1",
          className,
        )}
      >
        <div
          className={cn(
            "font-montserrat font-extrabold text-white",
            featured
              ? fill
                ? "text-[clamp(0.62rem,0.85vw,0.82rem)] leading-tight"
                : "text-[clamp(0.78rem,1.1vw,0.92rem)] leading-none"
              : "text-[clamp(0.68rem,0.95vw,0.8rem)] leading-none",
            fill ? "max-w-full whitespace-normal" : "whitespace-nowrap",
          )}
        >
          {item.value}
        </div>
        <div
          className={cn(
            "mt-0.5 text-white/55",
            featured ? "text-[0.62rem]" : "text-[0.6rem]",
            fill ? "max-w-full whitespace-normal leading-tight" : "leading-none whitespace-nowrap",
          )}
        >
          {item.label}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center border-r border-white/10 px-4 py-6 text-center last:border-r-0 max-[600px]:nth-[2n]:border-r-0",
        className,
      )}
    >
      {/* Fixed-height value row keeps all stat values and labels aligned */}
      <div className="flex min-h-[calc(2*clamp(1.25rem,2vw,2rem)*1.15)] w-full items-center justify-center px-1 min-[601px]:min-h-[clamp(1.4rem,2.2vw,2rem)]">
        <span className="text-center font-montserrat text-[clamp(1.25rem,2vw,2rem)] font-black leading-[1.15] text-gold min-[601px]:leading-none min-[601px]:whitespace-nowrap">
          {item.value}
        </span>
      </div>
      <div className="mt-[0.35rem] text-[0.76rem] font-medium tracking-[0.02em] text-white/60">
        {item.label}
      </div>
    </div>
  );
}
