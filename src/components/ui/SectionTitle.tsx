import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionTitleProps = {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
  light?: boolean;
};

export function SectionTitle({
  children,
  className,
  as: Tag = "h2",
  light = false,
}: SectionTitleProps) {
  return (
    <Tag
      className={cn(
        "font-montserrat text-[clamp(1.8rem,3.2vw,2.6rem)] font-extrabold leading-tight tracking-tight",
        light ? "text-white" : "text-forest-deep",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
