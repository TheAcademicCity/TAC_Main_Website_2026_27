import { coCurricularPageContent } from "@/data/coCurricular";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function SupwSection() {
  const { supw } = coCurricularPageContent;

  return (
    <section id="supw" className="relative overflow-hidden">
      {/* Mobile */}
      <div className="bg-off-white px-5 pt-4 pb-7 md:hidden">
        <RevealOnScroll>
          <SectionLabel className="!mb-2 before:hidden !text-[0.62rem] !tracking-[0.14em] !text-emerald">
            {supw.label}
          </SectionLabel>
          <h2 className="font-montserrat text-[1.25rem] font-extrabold leading-[1.28] tracking-[-0.01em] text-navy">
            Growing Up as Responsible Citizens
          </h2>
          <p className="mt-3 mb-3.5 text-[0.8125rem] leading-[1.65] text-charcoal">
            {supw.description}
          </p>
          <ul className="mb-4">
            {supw.items.map((item) => (
              <li
                key={item.title}
                className="mb-3 flex gap-2.5 text-[0.78125rem] leading-[1.55] text-charcoal last:mb-0"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>
                  <b className="text-forest">{item.title}</b> — {item.description}
                </span>
              </li>
            ))}
          </ul>
          <div className="relative h-40 overflow-hidden rounded-2xl bg-forest-deep">
            <ImageWithFallback image={supw.image} fill sizes="100vw" className="object-cover" />
          </div>
        </RevealOnScroll>
      </div>

      {/* Desktop */}
      <div className="section-py-compact relative hidden overflow-hidden bg-forest-deep md:block">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-[280px] w-[280px] rounded-full border-[40px] border-white/4"
        />

        <Container className="relative z-[1]">
          <div className="grid gap-7 lg:grid-cols-2 lg:gap-16">
            <RevealOnScroll>
              <SectionLabel tone="gold">{supw.label}</SectionLabel>
              <h2 className="font-montserrat text-[clamp(1.4rem,2.6vw,2rem)] font-extrabold leading-tight text-white">
                {supw.title}
              </h2>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-white/65 sm:text-[0.95rem]">
                {supw.description}
              </p>

              <div className="mt-5 flex flex-col gap-2.5">
                {supw.items.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/6 px-3.5 py-3 sm:px-4 sm:py-3.5"
                  >
                    <Icon name={item.icon} className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span className="min-w-0 text-[0.86rem] leading-relaxed text-white/75 sm:text-[0.88rem]">
                      <b className="text-white">{item.title}</b> — {item.description}
                    </span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={1} className="flex items-center">
              <div className="relative mt-1 aspect-[4/3] w-full overflow-hidden rounded-sm bg-white/8 sm:mt-5 lg:mt-10">
                <ImageWithFallback
                  image={supw.image}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
            </RevealOnScroll>
          </div>
        </Container>
      </div>
    </section>
  );
}
