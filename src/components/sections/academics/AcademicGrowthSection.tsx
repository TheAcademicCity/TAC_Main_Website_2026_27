import { academicsPageContent } from "@/data/academics";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";

export function AcademicGrowthSection() {
  const { growth } = academicsPageContent;

  return (
    <Section background="paper">
      <RevealOnScroll>
        <SectionHeader
          label={growth.label}
          title={growth.title}
          description={growth.description}
          reveal={false}
        />
      </RevealOnScroll>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {growth.points.map((point, index) => (
          <RevealOnScroll key={point} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
            <div className="flex h-full items-start gap-4 border border-line bg-white p-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-emerald/10 text-emerald">
                <Icon name="star" className="h-4 w-4 fill-emerald stroke-emerald" />
              </span>
              <p className="pt-1.5 text-[0.92rem] leading-relaxed text-forest-deep/90">{point}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
