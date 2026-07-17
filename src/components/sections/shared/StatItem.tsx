import type { StatItem as StatItemType } from "@/types";
import { cn } from "@/lib/utils";

type StatItemProps = {
  item: StatItemType;
  variant?: "bar" | "card";
  className?: string;
};

export function StatItem({ item, variant = "bar", className }: StatItemProps) {
  if (variant === "card") {
    const featured = Boolean(item.featured);

    return (
      <div
        className={cn(
          "flex w-fit max-w-full flex-col justify-center border border-white/14 bg-white/8 backdrop-blur-sm",
          featured ? "px-3.5 py-1.5" : "px-3 py-1",
          className,
        )}
      >
        <div
          className={cn(
            "font-montserrat font-extrabold leading-none whitespace-nowrap text-white",
            featured
              ? "text-[clamp(0.78rem,1.1vw,0.92rem)]"
              : "text-[clamp(0.68rem,0.95vw,0.8rem)]",
          )}
        >
          {item.value}
        </div>
        <div
          className={cn(
            "mt-0.5 leading-none whitespace-nowrap text-white/55",
            featured ? "text-[0.62rem]" : "text-[0.6rem]",
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
