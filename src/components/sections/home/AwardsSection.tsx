import { awardsContent } from "@/data/home";
import { AwardTile } from "@/components/sections/shared/AwardTile";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { Container } from "@/components/ui/Container";

export function AwardsSection() {
  return (
    <section id="awards" className="relative overflow-hidden bg-forest-deep py-[clamp(28px,4vw,48px)]">
      <Container>
        <SectionHeader
          label={awardsContent.label}
          title={awardsContent.title}
          centered
          labelTone="gold"
          titleLight
          className="mb-6 sm:mb-7"
        />

        <div className="grid grid-cols-2 gap-px bg-white/8 lg:grid-cols-5">
          {awardsContent.items.map((award, index) => (
            <AwardTile key={award.image.src} award={award} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
