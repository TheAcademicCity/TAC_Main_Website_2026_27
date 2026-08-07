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
          <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6">
            <div className="min-w-0 flex-1 text-center sm:text-left">
              <h3 className="font-montserrat text-[clamp(1rem,4.5vw,1.2rem)] font-extrabold leading-snug text-white md:text-[clamp(1rem,1.8vw,1.2rem)]">
                {scheduleBand.title}
              </h3>
              <p className="mx-auto mt-1 max-w-[42ch] whitespace-normal text-[0.86rem] text-white/58 sm:mx-0 sm:max-w-none sm:text-[0.88rem] lg:whitespace-nowrap">
                {scheduleBand.description}
              </p>
            </div>
            <Button
              href={scheduleBand.cta.href}
              className="w-full justify-center px-7 py-3 text-[0.78rem] sm:w-auto"
            >
              {scheduleBand.cta.label}
              <Icon name="arrow" className="h-3.5 w-3.5" />
            </Button>
          </div>
        </RevealOnScroll>
      </Container>
    </div>
  );
}
