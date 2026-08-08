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
    <div className="w-full bg-forest-deep py-[clamp(16px,2vw,24px)]">
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
  );
}
