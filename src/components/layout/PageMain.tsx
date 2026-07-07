import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageMainProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

/** Offset for fixed utility bar + header on inner pages. */
export function PageMain({ children, className, id }: PageMainProps) {
  return (
    <main id={id} className={cn("min-h-[60vh] pt-[calc(30px+5rem)]", className)}>
      {children}
    </main>
  );
}
