import { academicsPageContent } from "@/data/academics";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function ProgressionBandSection() {
  const { progressionBand } = academicsPageContent;

  return (
    <div className="bg-forest-deep py-[clamp(28px,3.5vw,44px)]">
      <Container>
        <RevealOnScroll>
          <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6">
            <div className="min-w-0 flex-1 text-center sm:text-left">
              <h3 className="font-montserrat text-[clamp(1rem,4.5vw,1.3rem)] font-extrabold leading-snug text-white md:text-[clamp(1rem,1.8vw,1.3rem)]">
                {progressionBand.title}
              </h3>
              <p className="mx-auto mt-1 max-w-[42ch] whitespace-normal text-[0.88rem] text-white/60 sm:mx-0 sm:max-w-none sm:text-[0.9rem] lg:whitespace-nowrap">
                {progressionBand.description}
              </p>
            </div>
            <Button
              href={progressionBand.cta.href}
              className="w-full justify-center px-7 py-3 text-[0.78rem] sm:w-auto"
            >
              {progressionBand.cta.label}
              <Icon name="arrow" className="h-3.5 w-3.5" />
            </Button>
          </div>
        </RevealOnScroll>
      </Container>
    </div>
  );
}
