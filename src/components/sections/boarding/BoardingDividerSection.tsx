import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

type BoardingDividerSectionProps = {
  band: {
    title: string;
    description: string;
    cta: { label: string; href: string };
  };
};

export function BoardingDividerSection({ band }: BoardingDividerSectionProps) {
  return (
    <>
      {/* Mobile */}
      <div className="bg-off-white px-5 pt-4 pb-7 md:hidden">
        <RevealOnScroll>
          <div className="rounded-[18px] bg-[linear-gradient(150deg,var(--color-navy),var(--color-charcoal))] px-[22px] py-[22px] text-center text-white">
            <h4 className="font-montserrat text-base font-bold leading-[1.4]">{band.title}</h4>
            <p className="mt-2 mb-4 whitespace-pre-line text-[0.75rem] leading-normal text-mist">
              {band.description}
            </p>
            <Button
              href={band.cta.href}
              variant="gold"
              className="w-full justify-center rounded-[30px] px-5 py-3 font-outfit text-[0.8125rem] font-bold normal-case tracking-normal text-navy"
            >
              {band.cta.label}
            </Button>
          </div>
        </RevealOnScroll>
      </div>

      {/* Desktop */}
      <div className="hidden bg-forest-deep py-[clamp(28px,3.5vw,44px)] md:block">
        <Container>
          <RevealOnScroll>
            <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6">
              <div className="min-w-0 flex-1 text-center sm:text-left">
                <h3 className="font-montserrat text-[clamp(1rem,1.8vw,1.2rem)] font-extrabold leading-snug text-white">
                  {band.title}
                </h3>
                <p className="mx-auto mt-1 max-w-[52ch] whitespace-pre-line text-[0.88rem] leading-snug text-white/58 sm:mx-0 sm:max-w-none sm:text-[0.88rem]">
                  {band.description}
                </p>
              </div>
              <Button href={band.cta.href} className="w-full justify-center px-7 py-3 text-[0.78rem] sm:w-auto">
                {band.cta.label}
                <Icon name="arrow" className="h-3.5 w-3.5" />
              </Button>
            </div>
          </RevealOnScroll>
        </Container>
      </div>
    </>
  );
}
