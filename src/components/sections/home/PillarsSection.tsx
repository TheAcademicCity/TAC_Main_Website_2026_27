import { pillarsContent } from "@/data/home";
import { PillarCard } from "@/components/sections/shared/PillarCard";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { Section } from "@/components/ui/Section";

export function PillarsSection() {
  return (
    <Section id="pillars">
      <SectionHeader
        label={pillarsContent.label}
        title={pillarsContent.title}
        description={pillarsContent.description}
        reveal={false}
        className="mb-14 [&_p]:text-[1rem] [&_p]:leading-relaxed"
      />

      <div className="grid items-stretch sm:grid-cols-2 lg:grid-cols-4">
        {pillarsContent.items.map((pillar, index) => {
          const isLast = index === pillarsContent.items.length - 1;
          const isSecondInTwoColRow = index % 2 === 1;

          return (
            <PillarCard
              key={pillar.number}
              pillar={pillar}
              showDivider={!isLast}
              showLeftDivider={isLast}
              dividerClassName={isSecondInTwoColRow ? "max-lg:hidden" : undefined}
            />
          );
        })}
      </div>
    </Section>
  );
}
