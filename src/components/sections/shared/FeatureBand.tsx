import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

type FeatureBandProps = {
  title: string;
  description: string;
  chips: readonly string[];
  cta: { label: string; href: string };
};

export function FeatureBand({ title, description, chips, cta }: FeatureBandProps) {
  return (
    <RevealOnScroll>
      <div className="mt-10 grid items-center gap-6 rounded-lg bg-forest-deep p-5 sm:mt-12 sm:gap-8 sm:p-6 lg:grid-cols-[1fr_auto] lg:p-8">
        <div>
          <h3 className="font-montserrat text-[clamp(1.1rem,2vw,1.4rem)] font-extrabold text-white">
            {title}
          </h3>
          <p className="mt-2 max-w-[60ch] whitespace-pre-line text-[0.9rem] text-white/65">{description}</p>
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
  );
}
