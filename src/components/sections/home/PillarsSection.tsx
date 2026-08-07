import { pillarsContent } from "@/data/home";
import { PillarCard } from "@/components/sections/shared/PillarCard";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

/** Chamfer only the outer perimeter of the pillar image strip; keep shared edges sharp. */
function pillarImageRadius(index: number, total: number) {
  const isFirst = index === 0;
  const isLast = index === total - 1;
  const isLeftInSmRow = index % 2 === 0;

  return cn(
    "rounded-lg",
    isLeftInSmRow ? "sm:rounded-l-lg sm:rounded-r-none" : "sm:rounded-r-lg sm:rounded-l-none",
    isFirst && "lg:rounded-l-lg lg:rounded-r-none",
    isLast && "lg:rounded-r-lg lg:rounded-l-none",
    !isFirst && !isLast && "lg:rounded-none",
  );
}

export function PillarsSection() {
  const total = pillarsContent.items.length;

  return (
    <Section id="pillars" className="!py-[clamp(28px,3.5vw,44px)]">
      <SectionHeader
        label={pillarsContent.label}
        title={pillarsContent.title}
        description={pillarsContent.description}
        reveal={false}
        className="mb-2 [&_p]:text-[1rem] [&_p]:leading-relaxed"
      />

      <div className="grid items-stretch sm:grid-cols-2 lg:grid-cols-4">
        {pillarsContent.items.map((pillar, index) => (
          <PillarCard
            key={pillar.number}
            pillar={pillar}
            imageClassName={pillarImageRadius(index, total)}
          />
        ))}
      </div>
    </Section>
  );
}
