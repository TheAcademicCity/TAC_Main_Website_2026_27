import Image from "next/image";
import { boardingPageContent } from "@/data/boarding";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function CareSection() {
  const { care } = boardingPageContent;

  return (
    <Section id="care" background="paper">
      <RevealOnScroll>
        <SectionLabel>{care.label}</SectionLabel>
        <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold text-forest-deep">
          {care.title}
        </h2>
      </RevealOnScroll>

      <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-2">
        <RevealOnScroll delay={1} className="h-full">
          <article className="relative flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white p-8 before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-forest before:content-['']">
            <div className="mb-5 flex items-center gap-3.5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-forest/8 text-[1.35rem] leading-none">
                <span aria-hidden>🛡️</span>
              </span>
              <h3 className="font-montserrat text-[1.05rem] font-extrabold text-forest-deep">
                {care.safety.title}
              </h3>
            </div>
            <p className="text-[0.9rem] leading-relaxed text-slate">{care.safety.description}</p>

            <div className="mt-4 flex flex-col gap-2.5">
              {care.safety.items.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-2.5 rounded-lg border-l-[3px] border-forest bg-paper px-3.5 py-3"
                >
                  <span className="mt-0.5 shrink-0 text-[1.05rem] leading-none" aria-hidden>
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="font-montserrat text-[0.85rem] font-bold text-forest-deep">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 text-[0.8rem] leading-relaxed text-slate">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-6">
              <p className="font-montserrat text-[0.68rem] font-bold uppercase tracking-[0.14em] text-slate">
                {care.safety.medicalPartners.label}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4">
                {care.safety.medicalPartners.logos.map((logo) => (
                  <Image
                    key={logo.src}
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width ?? 140}
                    height={logo.height ?? 48}
                    className="h-10 w-auto object-contain object-left"
                  />
                ))}
              </div>
            </div>
          </article>
        </RevealOnScroll>

        <RevealOnScroll delay={2} className="h-full">
          <article className="relative flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white p-8 before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gold before:content-['']">
            <div className="mb-5 flex items-center gap-3.5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-gold/10 text-[1.35rem] leading-none">
                <span aria-hidden>🥗</span>
              </span>
              <h3 className="font-montserrat text-[1.05rem] font-extrabold text-forest-deep">
                {care.nutrition.title}
              </h3>
            </div>
            <p className="text-[0.9rem] leading-relaxed text-slate">{care.nutrition.description}</p>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {care.nutrition.meals.map((meal) => (
                <span
                  key={meal}
                  className="rounded-lg border border-gold/25 bg-gold/8 px-3 py-2 text-center text-[0.82rem] font-semibold text-forest-deep"
                >
                  {meal}
                </span>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-2.5">
              {care.nutrition.items.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-2.5 rounded-lg border-l-[3px] border-gold bg-paper px-3.5 py-3"
                >
                  <span className="mt-0.5 shrink-0 text-[1.05rem] leading-none" aria-hidden>
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="font-montserrat text-[0.85rem] font-bold text-forest-deep">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 text-[0.8rem] leading-relaxed text-slate">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto border-t border-line pt-6">
              <p className="font-montserrat text-[0.68rem] font-bold uppercase tracking-[0.14em] text-slate">
                {care.nutrition.foodPartner.label}
              </p>
              <div className="mt-4">
                <Image
                  src={care.nutrition.foodPartner.logo.src}
                  alt={care.nutrition.foodPartner.logo.alt}
                  width={care.nutrition.foodPartner.logo.width ?? 120}
                  height={care.nutrition.foodPartner.logo.height ?? 48}
                  className="h-10 w-auto object-contain object-left"
                />
              </div>
            </div>
          </article>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
