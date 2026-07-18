import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ChipProps = {
  children: ReactNode;
  className?: string;
  variant?: "light" | "dark";
};

export function Chip({ children, className, variant = "light" }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-1.5 text-[0.82rem] font-semibold",
        variant === "light"
          ? "border-line bg-white text-forest-deep"
          : "border-white/20 bg-white/10 text-white/82",
        className,
      )}
    >
      {children}
    </span>
  );
}
