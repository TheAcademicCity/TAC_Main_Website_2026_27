import { pillarsContent } from "@/data/home";
import { PillarCard } from "@/components/sections/shared/PillarCard";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { WatermarkText } from "@/components/sections/shared/WatermarkText";
import { Section } from "@/components/ui/Section";

export function PillarsSection() {
  const delays: Array<0 | 1 | 2 | 3 | 4> = [0, 1, 2, 3];

  return (
    <Section id="pillars" className="relative overflow-hidden py-[clamp(60px,8vw,110px)]">
      <WatermarkText lines={[...pillarsContent.watermark]} variant="cdf" />

      <SectionHeader
        label={pillarsContent.label}
        title={pillarsContent.title}
        description={pillarsContent.description}
        className="relative z-[1] mb-12"
      />

      <div className="relative z-[1] grid border border-line sm:grid-cols-2 lg:grid-cols-4">
        {pillarsContent.items.map((pillar, index) => (
          <PillarCard key={pillar.number} pillar={pillar} delay={delays[index]} />
        ))}
      </div>
    </Section>
  );
}
