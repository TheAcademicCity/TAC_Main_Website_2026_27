import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  background?: "white" | "paper" | "forest" | "forest-deep" | "ink";
  spacing?: "default" | "compact";
};

const backgroundClasses = {
  white: "bg-white",
  paper: "bg-paper",
  forest: "bg-forest text-white",
  "forest-deep": "bg-forest-deep text-white",
  ink: "bg-ink text-white",
} as const;

const spacingClasses = {
  default: "py-[clamp(60px,8vw,110px)]",
  compact: "py-[clamp(32px,4.5vw,56px)]",
} as const;

export function Section({
  id,
  children,
  className,
  containerClassName,
  background = "white",
  spacing = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(spacingClasses[spacing], backgroundClasses[background], className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
