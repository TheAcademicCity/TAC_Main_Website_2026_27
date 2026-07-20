import { academicsPageContent } from "@/data/academics";
import { CtaLink } from "@/components/sections/shared/CtaLink";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function CurriculumSection() {
  const { curriculum } = academicsPageContent;

  return (
    <Section id="curriculum" background="paper">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <RevealOnScroll className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-sm">
            <div className="relative aspect-[4/3] overflow-hidden bg-forest-deep">
              <ImageWithFallback
                image={curriculum.image}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out hover:scale-[1.04]"
              />
            </div>
            <div className="bg-gold px-4 py-3">
              <span className="font-montserrat text-[0.72rem] font-extrabold uppercase tracking-[0.1em] text-forest-deep">
                {curriculum.imageTag}
              </span>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={1} className="order-1 lg:order-2">
          <SectionLabel>{curriculum.label}</SectionLabel>
          <h2 className="whitespace-pre-line font-montserrat text-[clamp(1.4rem,2.4vw,1.9rem)] font-extrabold text-forest-deep">
            {curriculum.title}
          </h2>
          <p className="mt-3 text-[0.96rem] leading-relaxed text-slate">{curriculum.description}</p>

          <div className="mt-5 flex flex-col gap-3">
            {curriculum.features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-[26px] w-[26px] shrink-0 place-items-center rounded-full bg-emerald/10">
                  <Icon name="checkCircle" className="h-3.5 w-3.5 text-emerald" />
                </span>
                <div>
                  <h5 className="font-montserrat text-[0.88rem] font-bold text-forest-deep">
                    {feature.title}
                  </h5>
                  <p className="text-[0.84rem] text-slate">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <CtaLink href={curriculum.cta.href} className="mt-5">
            {curriculum.cta.label}
          </CtaLink>
        </RevealOnScroll>
      </div>

      <RevealOnScroll>
        <h3 className="mt-12 text-center font-montserrat text-[1.1rem] font-extrabold text-forest-deep">
          {curriculum.approachTitle}
        </h3>
      </RevealOnScroll>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {curriculum.approach.map((card, index) => (
          <RevealOnScroll key={card.title} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
            <article className="relative h-full overflow-hidden rounded-lg border border-line bg-white p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(15,61,56,0.18)]">
              <span className="absolute right-4 top-3 font-montserrat text-[3rem] font-black leading-none text-forest/6">
                {card.number}
              </span>
              <span className="mb-3 grid h-[42px] w-[42px] place-items-center rounded-lg bg-forest/7">
                <Icon name={card.icon} className="h-5 w-5 text-emerald" />
              </span>
              <h4 className="font-montserrat text-[0.94rem] font-extrabold text-forest-deep">
                {card.title}
              </h4>
              <p className="mt-2 text-[0.84rem] leading-relaxed text-slate">{card.description}</p>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
