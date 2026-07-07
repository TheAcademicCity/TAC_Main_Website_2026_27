import { academicsContent } from "@/data/home";
import { FeatureBand } from "@/components/sections/shared/FeatureBand";
import { FeatureRowBlock } from "@/components/sections/shared/FeatureRowBlock";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { Section } from "@/components/ui/Section";

export function AcademicsSection() {
  return (
    <Section id="academics" background="paper">
      <SectionHeader
        label={academicsContent.label}
        title={academicsContent.title}
        className="mb-10"
      />

      <div className="flex flex-col gap-10 lg:gap-16">
        {academicsContent.rows.map((row, index) => (
          <div key={row.title}>
            <FeatureRowBlock row={row} />
            {index < academicsContent.rows.length - 1 ? (
              <hr className="mt-10 border-line lg:mt-16" />
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
