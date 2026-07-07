import type { ReactNode } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  centered?: boolean;
  labelTone?: "emerald" | "gold";
  titleLight?: boolean;
  className?: string;
  reveal?: boolean;
  revealDelay?: 0 | 1 | 2 | 3 | 4;
  action?: ReactNode;
};

export function SectionHeader({
  label,
  title,
  description,
  centered = false,
  labelTone = "emerald",
  titleLight = false,
  className,
  reveal = true,
  revealDelay = 0,
  action,
}: SectionHeaderProps) {
  const content = (
    <div
      className={cn(
        centered && "mx-auto max-w-3xl text-center",
        action && "flex flex-wrap items-end justify-between gap-4",
        className,
      )}
    >
      <div className={cn(centered && "mx-auto")}>
        <SectionLabel centered={centered} tone={labelTone}>
          {label}
        </SectionLabel>
        <SectionTitle className={cn(centered && "text-center")} light={titleLight}>
          {title}
        </SectionTitle>
        {description ? (
          <p className={cn("mt-3 max-w-[58ch] text-slate", centered && "mx-auto")}>{description}</p>
        ) : null}
      </div>
      {action}
    </div>
  );

  if (!reveal) return content;

  return <RevealOnScroll delay={revealDelay}>{content}</RevealOnScroll>;
}
