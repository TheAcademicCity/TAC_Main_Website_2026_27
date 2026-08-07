import { academicsContent } from "@/data/home";
import { FeatureBand } from "@/components/sections/shared/FeatureBand";
import { FeatureRowBlock } from "@/components/sections/shared/FeatureRowBlock";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { Section } from "@/components/ui/Section";

export function AcademicsSection() {
  return (
    <Section id="academics" background="paper" className="!pt-[clamp(28px,3.5vw,44px)]">
      <SectionHeader
        label={academicsContent.label}
        title={academicsContent.title}
        className="mb-6 md:mb-10"
      />

      <div className="flex flex-col">
        {academicsContent.rows.map((row, index) => (
          <div key={row.title}>
            <FeatureRowBlock row={row} />
            {index < academicsContent.rows.length - 1 ? (
              <hr className="my-6 border-line sm:my-8 lg:my-10" />
            ) : null}
          </div>
        ))}
      </div>

      <FeatureBand
        title={academicsContent.band.title}
        description={academicsContent.band.description}
        chips={academicsContent.band.chips}
        cta={academicsContent.band.cta}
      />
    </Section>
  );
}
