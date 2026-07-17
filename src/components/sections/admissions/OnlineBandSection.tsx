import { admissionsPageContent } from "@/data/admissions";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function OnlineBandSection() {
  const { onlineBand } = admissionsPageContent;

  return (
    <div className="bg-forest-deep py-7">
      <Container>
        <RevealOnScroll>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="font-montserrat text-[clamp(1rem,1.8vw,1.2rem)] font-extrabold text-white">
                {onlineBand.title}
              </h3>
              <p className="mt-1 max-w-[52ch] text-[0.88rem] text-white/58">{onlineBand.description}</p>
            </div>
            <Button href={onlineBand.cta.href} className="px-7 py-3 text-[0.78rem]">
              <Icon name="phone" className="h-3.5 w-3.5" />
              {onlineBand.cta.label}
            </Button>
          </div>
        </RevealOnScroll>
      </Container>
    </div>
  );
}
