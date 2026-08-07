import { boardingPageContent } from "@/data/boarding";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function BoardingBandSection() {
  const { scheduleBand } = boardingPageContent;

  return (
    <div className="bg-forest-deep py-[clamp(28px,3.5vw,44px)]">
      <Container>
        <RevealOnScroll>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="font-montserrat text-[clamp(1rem,1.8vw,1.2rem)] font-extrabold text-white">
                {scheduleBand.title}
              </h3>
              <p className="mt-1 whitespace-nowrap text-[0.88rem] text-white/58">{scheduleBand.description}</p>
            </div>
            <Button href={scheduleBand.cta.href} className="px-7 py-3 text-[0.78rem]">
              {scheduleBand.cta.label}
              <Icon name="arrow" className="h-3.5 w-3.5" />
            </Button>
          </div>
        </RevealOnScroll>
      </Container>
    </div>
  );
}
