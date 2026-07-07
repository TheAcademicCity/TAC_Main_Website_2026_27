import type { StatItem as StatItemType } from "@/types";
import { cn } from "@/lib/utils";

type StatItemProps = {
  item: StatItemType;
  variant?: "bar" | "card";
  className?: string;
};

export function StatItem({ item, variant = "bar", className }: StatItemProps) {
  if (variant === "card") {
    return (
      <div
        className={cn(
          "border border-white/14 bg-white/8 px-4 py-3 backdrop-blur-sm",
          className,
        )}
      >
        <div className="font-montserrat text-[0.95rem] font-extrabold text-white">{item.value}</div>
        <div className="mt-0.5 text-[0.73rem] text-white/55">{item.label}</div>
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
      {/* Fixed-height value row keeps labels aligned when a stat wraps (e.g. Grades 5 - 12) */}
      <div className="flex min-h-[calc(2*clamp(1.4rem,2.2vw,2rem))] w-full items-start justify-center lg:min-h-[clamp(1.4rem,2.2vw,2rem)] lg:items-center">
        <span className="font-montserrat text-[clamp(1.4rem,2.2vw,2rem)] font-black leading-none text-gold lg:whitespace-nowrap">
          {item.value}
        </span>
      </div>
      <div className="mt-[0.35rem] text-[0.76rem] font-medium tracking-[0.02em] text-white/60">
        {item.label}
      </div>
    </div>
  );
}
