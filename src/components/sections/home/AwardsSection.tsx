import { awardsContent } from "@/data/home";
import { AwardTile } from "@/components/sections/shared/AwardTile";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { WatermarkText } from "@/components/sections/shared/WatermarkText";
import { Container } from "@/components/ui/Container";

export function AwardsSection() {
  return (
    <section id="awards" className="relative overflow-hidden bg-forest-deep py-[clamp(50px,7vw,90px)]">
      <WatermarkText lines={[awardsContent.watermark]} />

      <Container>
        <SectionHeader
          label={awardsContent.label}
          title={awardsContent.title}
          centered
          labelTone="gold"
          className="relative z-[1] mb-12"
        />
      </Container>

      <div className="relative z-[1] grid grid-cols-2 gap-px bg-white/8 lg:grid-cols-5">
        {awardsContent.items.map((award, index) => (
          <AwardTile key={award.name} award={award} index={index} />
        ))}
      </div>
    </section>
  );
}
