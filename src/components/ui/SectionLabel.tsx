import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: ReactNode;
  className?: string;
  centered?: boolean;
  tone?: "emerald" | "gold";
};

export function SectionLabel({
  children,
  className,
  centered = false,
  tone = "emerald",
}: SectionLabelProps) {
  return (
    <span
      className={cn(
        "mb-3 inline-flex items-center gap-2.5 font-montserrat text-[0.72rem] font-extrabold uppercase tracking-[0.22em]",
        tone === "emerald" ? "text-emerald" : "text-gold",
        centered && "justify-center",
        "before:h-0.5 before:w-7 before:content-['']",
        tone === "emerald" ? "before:bg-gold" : "before:bg-gold",
        className,
      )}
    >
      {children}
    </span>
  );
}
