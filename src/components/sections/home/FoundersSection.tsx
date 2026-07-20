import { foundersContent } from "@/data/home";
import { FounderCard } from "@/components/sections/shared/FounderCard";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";

export function FoundersSection() {
  const [featured, ...compact] = foundersContent.profiles;

  return (
    <Section id="founders">
      <SectionHeader
        label={foundersContent.label}
        title={foundersContent.title}
        description={foundersContent.description}
        descriptionClassName="max-w-none whitespace-nowrap"
        centered
        className="mb-0 max-w-none"
      />

      <RevealOnScroll>
        <div className="mt-8 grid overflow-hidden rounded-lg shadow-[0_30px_80px_-30px_rgba(10,44,40,0.35)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-[3px]">
          <FounderCard founder={featured} />
          <div className="grid gap-[2px] lg:grid-rows-2">
            {compact.map((founder) => (
              <FounderCard key={founder.name} founder={founder} />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </Section>
  );
}
