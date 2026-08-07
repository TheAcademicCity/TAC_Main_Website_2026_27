import { aboutPageContent } from "@/data/about";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Container } from "@/components/ui/Container";

export function AboutCampusBandSection() {
  const { campusBand } = aboutPageContent;

  return (
    <div className="bg-forest-deep py-[clamp(28px,3.5vw,44px)]">
      <Container>
        <RevealOnScroll>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="min-w-0 flex-1">
              <h3 className="font-montserrat text-[clamp(1rem,1.8vw,1.3rem)] font-extrabold text-white">
                {campusBand.title}
              </h3>
              <p className="mt-1 text-[0.9rem] leading-snug text-white/60">{campusBand.description}</p>
            </div>
            <Button
              href={campusBand.cta.href}
              variant="gold"
              className="px-7 py-3 text-[0.78rem]"
            >
              {campusBand.cta.label}
              <Icon name="arrow" className="h-3.5 w-3.5" />
            </Button>
          </div>
        </RevealOnScroll>
      </Container>
    </div>
  );
}
