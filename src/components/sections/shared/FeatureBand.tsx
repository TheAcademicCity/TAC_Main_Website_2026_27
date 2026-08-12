import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

type FeatureBandProps = {
  title: string;
  description: string;
  chips: readonly string[];
  cta: { label: string; href: string };
};

export function FeatureBand({ title, description, chips, cta }: FeatureBandProps) {
  return (
    <>
      {/* Mobile focus strip */}
      <div className="bg-off-white px-5 py-[38px] md:hidden">
        <div className="rounded-[20px] bg-gradient-to-br from-navy to-charcoal px-5 py-[22px] text-white">
          <h4 className="mb-2 font-montserrat text-[1.05rem] font-bold leading-snug">{title}</h4>
          <p className="mb-4 whitespace-pre-line text-[0.78rem] leading-normal text-mist">
            {description}
          </p>
          <div className="mb-[18px] flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-[20px] border border-white/20 bg-white/10 px-3 py-1.5 text-[0.68rem] font-semibold"
              >
                {chip}
              </span>
            ))}
          </div>
          <Button href={cta.href} className="w-full justify-center rounded-[30px]">
            {cta.label}
          </Button>
        </div>
      </div>

      {/* Desktop band */}
      <div className="hidden w-full bg-forest-deep py-[clamp(16px,2vw,24px)] md:block">
        <Container>
          <RevealOnScroll>
            <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <h3 className="font-montserrat text-[clamp(1.1rem,2vw,1.4rem)] font-extrabold text-white">
                  {title}
                </h3>
                <p className="mt-2 max-w-[60ch] whitespace-pre-line text-[0.9rem] text-white/65">
                  {description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {chips.map((chip) => (
                    <Chip key={chip} variant="dark" className="text-[0.76rem]">
                      {chip}
                    </Chip>
                  ))}
                </div>
              </div>
              <Button
                href={cta.href}
                className="w-full justify-center px-6 py-3 text-[0.76rem] whitespace-normal sm:w-auto sm:whitespace-nowrap"
              >
                {cta.label}
              </Button>
            </div>
          </RevealOnScroll>
        </Container>
      </div>
    </>
  );
}
