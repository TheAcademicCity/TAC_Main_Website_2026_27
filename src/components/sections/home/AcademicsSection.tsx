import { academicsContent } from "@/data/home";
import { FeatureBand } from "@/components/sections/shared/FeatureBand";
import { FeatureRowBlock } from "@/components/sections/shared/FeatureRowBlock";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const mediaGradients = [
  "bg-gradient-to-br from-forest to-emerald",
  "bg-gradient-to-br from-violet to-[#9948c9]",
  "bg-gradient-to-br from-navy to-charcoal",
] as const;

const mobilePills = [
  ["CBSE", "NCERT", "1:10 Ratio"],
  ["Engineering", "Medicine", "Law", "CA", "Design"],
  ["Football", "Swimming", "Cricket", "Kho-Kho"],
] as const;

export function AcademicsSection() {
  return (
    <>
      <Section
        id="academics"
        background="paper"
        className="!pt-[clamp(28px,3.5vw,44px)] !pb-[clamp(28px,3.5vw,44px)] max-md:bg-white"
      >
        <SectionHeader
          label="A Quick Insight"
          title={academicsContent.title}
          className="mb-6 max-md:[&_h2]:text-[1.3rem] max-md:[&_span]:text-[0.62rem] md:mb-10"
        />

        {/* Mobile stack cards */}
        <div className="flex flex-col gap-4 md:hidden">
          {academicsContent.rows.map((row, index) => (
            <article
              key={row.title}
              className="overflow-hidden rounded-[18px] bg-white shadow-[0_10px_30px_-14px_rgba(36,48,55,0.25)]"
            >
              <div
                className={cn(
                  "relative flex h-[150px] items-center justify-center overflow-hidden font-montserrat text-[0.8rem] font-bold tracking-[0.02em] text-white/90",
                  mediaGradients[index] ?? mediaGradients[0],
                )}
              >
                {row.image ? (
                  <ImageWithFallback
                    image={row.image}
                    fill
                    sizes="100vw"
                    className="object-cover opacity-50"
                  />
                ) : null}
                <span className="relative z-[1] px-4 text-center uppercase">
                  {row.imageTag ?? row.label}
                </span>
              </div>
              <div className="px-[18px] pb-[18px] pt-4">
                <p className="mb-1.5 font-outfit text-[0.62rem] font-bold uppercase tracking-[0.06em] text-emerald">
                  {row.label}
                </p>
                <h4 className="mb-1.5 font-montserrat text-[1rem] font-bold text-navy">
                  {row.title.split(",")[0]}
                </h4>
                <p className="mb-2.5 text-[0.78rem] leading-normal text-[#999]">{row.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {(mobilePills[index] ?? row.chips.slice(0, 4)).map((pill) => (
                    <span
                      key={pill}
                      className="rounded-[20px] bg-off-white px-2.5 py-1 text-[0.65rem] font-semibold text-charcoal"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Desktop rows */}
        <div className="hidden flex-col md:flex">
          {academicsContent.rows.map((row, index) => (
            <div key={row.title}>
              <FeatureRowBlock row={row} />
              {index < academicsContent.rows.length - 1 ? (
                <hr className="my-6 border-line sm:my-8 lg:my-10" />
              ) : null}
            </div>
          ))}
        </div>
      </Section>

      <FeatureBand
        title={academicsContent.band.title}
        description={academicsContent.band.description}
        chips={academicsContent.band.chips}
        cta={academicsContent.band.cta}
      />
    </>
  );
}
