import type { ReactNode } from "react";
import { PageHeroBackdrop } from "@/components/sections/shared/PageHeroBackdrop";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  label: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export function PageHero({ label, title, description, children, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-forest-deep pt-[calc(30px+5rem)] text-white",
        className,
      )}
    >
      <PageHeroBackdrop gradient="horizontal" />

      <Container className="relative z-[1] py-[clamp(3.5rem,8vw,5.5rem)]">
        <SectionLabel tone="gold">{label}</SectionLabel>
        <h1 className="mt-3 max-w-[18ch] font-montserrat text-[clamp(2rem,4.5vw,3.4rem)] font-black leading-[1.08]">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-[62ch] text-[1.02rem] leading-relaxed text-white/72">{description}</p>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
