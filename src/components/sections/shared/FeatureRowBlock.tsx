import type { FeatureRow } from "@/types";
import { CtaLink } from "@/components/sections/shared/CtaLink";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { Chip } from "@/components/ui/Chip";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

type FeatureRowBlockProps = {
  row: FeatureRow;
};

export function FeatureRowBlock({ row }: FeatureRowBlockProps) {
  return (
    <RevealOnScroll>
      <div
        className={cn(
          "grid items-center gap-8 lg:grid-cols-2 lg:gap-16",
          row.flipped && "[&>*:first-child]:lg:order-2",
        )}
      >
        <div className="group relative overflow-hidden rounded-lg bg-forest-deep">
          <div className="relative aspect-[4/3] overflow-hidden">
            <ImageWithFallback
              image={row.image}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
          </div>
          <div className="bg-gold px-5 py-2.5">
            <span className="font-montserrat text-[0.76rem] font-extrabold uppercase tracking-wider text-forest-deep">
              {row.imageTag}
            </span>
          </div>
        </div>

        <div className="flex max-w-xl flex-col justify-center lg:max-w-none">
          <SectionLabel className="mb-3">{row.label}</SectionLabel>
          <h3 className="mb-4 font-montserrat text-[clamp(1.4rem,2.4vw,1.9rem)] font-extrabold leading-tight text-forest-deep">
            {row.title}
          </h3>
          <p className="mb-6 text-[0.98rem] leading-[1.7] text-slate">{row.description}</p>
          {row.chips.length > 0 ? (
            <div className="mb-5 flex flex-wrap gap-2">
              {row.chips.map((chip) => (
                <Chip key={chip}>{chip}</Chip>
              ))}
            </div>
          ) : null}
          {row.cta ? (
            <CtaLink href={row.cta.href} size={row.cta.size ?? "default"} className="self-start">
              {row.cta.label}
            </CtaLink>
          ) : null}
        </div>
      </div>
    </RevealOnScroll>
  );
}
