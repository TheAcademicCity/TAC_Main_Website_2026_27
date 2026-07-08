import { academicsPageContent } from "@/data/academics";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function ProgressionBandSection() {
  const { progressionBand } = academicsPageContent;

  return (
    <div className="bg-forest-deep py-8">
      <Container>
        <RevealOnScroll>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="font-montserrat text-[clamp(1rem,1.8vw,1.3rem)] font-extrabold text-white">
                {progressionBand.title}
              </h3>
              <p className="mt-1 max-w-[54ch] text-[0.9rem] text-white/60">{progressionBand.description}</p>
            </div>
            <Button href={progressionBand.cta.href} className="px-7 py-3 text-[0.78rem]">
              {progressionBand.cta.label}
              <Icon name="arrow" className="h-3.5 w-3.5" />
            </Button>
          </div>
        </RevealOnScroll>
      </Container>
    </div>
  );
}
