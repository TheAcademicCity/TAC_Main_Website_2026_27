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
        "border-r border-white/10 px-4 py-6 text-center last:border-r-0",
        className,
      )}
    >
      <div className="font-montserrat text-[clamp(1.4rem,2.2vw,2rem)] font-black leading-none text-gold">
        {item.value}
      </div>
      <div className="mt-1.5 text-[0.76rem] font-medium tracking-wide text-white/60">{item.label}</div>
    </div>
  );
}
