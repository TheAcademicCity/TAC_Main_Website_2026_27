import { coCurricularPageContent } from "@/data/coCurricular";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function SportBandSection() {
  const { sportBand } = coCurricularPageContent;

  return (
    <div className="bg-forest-deep py-7">
      <Container>
        <RevealOnScroll>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="font-montserrat text-[clamp(1rem,1.8vw,1.2rem)] font-extrabold text-white">
                {sportBand.title}
              </h3>
              <p className="mt-1 max-w-[52ch] text-[0.88rem] text-white/58">{sportBand.description}</p>
            </div>
            <Button href={sportBand.cta.href} variant="outline-white" className="px-7 py-3 text-[0.78rem]">
              {sportBand.cta.label}
              <Icon name="arrow" className="h-3.5 w-3.5" />
            </Button>
          </div>
        </RevealOnScroll>
      </Container>
    </div>
  );
}
