import Image from "next/image";
import { boardingPageContent } from "@/data/boarding";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function CareSection() {
  const { care } = boardingPageContent;

  return (
    <Section
      id="care"
      background="paper"
      className="max-md:!bg-off-white max-md:!py-[34px]"
      containerClassName="max-md:!px-5"
    >
      {/* Mobile */}
      <div className="md:hidden">
        <RevealOnScroll>
          <SectionLabel className="!mb-2 before:hidden !text-[0.62rem] !tracking-[0.14em] !text-emerald">
            {care.label}
          </SectionLabel>
          <h2 className="font-montserrat text-[1.25rem] font-extrabold leading-[1.28] tracking-[-0.01em] text-navy">
            {care.title}
          </h2>
        </RevealOnScroll>

        <div className="mt-4 space-y-3.5">
          <RevealOnScroll delay={1}>
            <article className="overflow-hidden rounded-[18px] border border-off-white bg-white p-4">
              <div className="mb-3 flex items-center gap-2.5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-[#e8f0ed] text-[1.1rem] leading-none">
                  <span aria-hidden>🛡️</span>
                </span>
                <h3 className="font-montserrat text-[0.875rem] font-extrabold text-navy">
                  {care.safety.title}
                </h3>
              </div>
              <p className="mb-3 text-[0.75rem] leading-[1.55] text-[#999]">
                {care.safety.description}
              </p>
              <div className="flex flex-col gap-2">
                {care.safety.items.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-2 rounded-[12px] border-l-[3px] border-forest bg-off-white px-2.5 py-2"
                  >
                    <span className="mt-0.5 shrink-0 text-[0.95rem] leading-none" aria-hidden>
                      {item.icon}
                    </span>
                    <div className="min-w-0">
                      <h4 className="font-montserrat text-[0.75rem] font-bold text-navy">
                        {item.title}
                      </h4>
                      <p className="mt-0.5 text-[0.6875rem] leading-[1.45] text-[#999]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 border-t border-off-white pt-3">
                <p className="font-montserrat text-[0.5625rem] font-bold uppercase tracking-[0.14em] text-[#999]">
                  {care.safety.medicalPartners.label}
                </p>
                <div className="mt-2.5 flex flex-wrap items-center gap-x-5 gap-y-2">
                  {care.safety.medicalPartners.logos.map((logo) => (
                    <Image
                      key={logo.src}
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width ?? 140}
                      height={logo.height ?? 48}
                      className="h-7 w-auto object-contain object-left"
                    />
                  ))}
                </div>
              </div>
            </article>
          </RevealOnScroll>

          <RevealOnScroll delay={2}>
            <article className="overflow-hidden rounded-[18px] border border-off-white bg-white p-4">
              <div className="mb-3 flex items-center gap-2.5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-[#fdece0] text-[1.1rem] leading-none">
                  <span aria-hidden>🥗</span>
                </span>
                <h3 className="font-montserrat text-[0.875rem] font-extrabold text-navy">
                  {care.nutrition.title}
                </h3>
              </div>
              <p className="mb-3 text-[0.75rem] leading-[1.55] text-[#999]">
                {care.nutrition.description}
              </p>
              <div className="mb-3 grid grid-cols-2 gap-1.5">
                {care.nutrition.meals.map((meal) => (
                  <span
                    key={meal}
                    className="rounded-[10px] border border-gold/25 bg-gold/8 px-2 py-1.5 text-center text-[0.65625rem] font-semibold text-navy"
                  >
                    {meal}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                {care.nutrition.items.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-2 rounded-[12px] border-l-[3px] border-gold bg-off-white px-2.5 py-2"
                  >
                    <span className="mt-0.5 shrink-0 text-[0.95rem] leading-none" aria-hidden>
                      {item.icon}
                    </span>
                    <div className="min-w-0">
                      <h4 className="font-montserrat text-[0.75rem] font-bold text-navy">
                        {item.title}
                      </h4>
                      <p className="mt-0.5 text-[0.6875rem] leading-[1.45] text-[#999]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 border-t border-off-white pt-3">
                <p className="font-montserrat text-[0.5625rem] font-bold uppercase tracking-[0.14em] text-[#999]">
                  {care.nutrition.foodPartner.label}
                </p>
                <div className="mt-2.5">
                  <Image
                    src={care.nutrition.foodPartner.logo.src}
                    alt={care.nutrition.foodPartner.logo.alt}
                    width={care.nutrition.foodPartner.logo.width ?? 120}
                    height={care.nutrition.foodPartner.logo.height ?? 48}
                    className="h-7 w-auto object-contain object-left"
                  />
                </div>
              </div>
            </article>
          </RevealOnScroll>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <RevealOnScroll>
          <SectionLabel>{care.label}</SectionLabel>
          <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold leading-tight text-forest-deep">
            {care.title}
          </h2>
        </RevealOnScroll>

        <div className="mt-6 grid items-stretch gap-4 sm:mt-8 sm:gap-6 lg:grid-cols-2">
          <RevealOnScroll delay={1} className="h-full">
            <article className="relative flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white p-5 before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-forest before:content-[''] sm:p-8">
              <div className="mb-4 flex items-center gap-3 sm:mb-5 sm:gap-3.5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-forest/8 text-[1.25rem] leading-none sm:h-11 sm:w-11 sm:text-[1.35rem]">
                  <span aria-hidden>🛡️</span>
                </span>
                <h3 className="font-montserrat text-[1rem] font-extrabold text-forest-deep sm:text-[1.05rem]">
                  {care.safety.title}
                </h3>
              </div>
              <p className="text-[0.88rem] leading-relaxed text-slate sm:text-[0.9rem]">
                {care.safety.description}
              </p>

              <div className="mt-4 flex flex-col gap-2.5">
                {care.safety.items.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-2.5 rounded-lg border-l-[3px] border-forest bg-paper px-3 py-2.5 sm:px-3.5 sm:py-3"
                  >
                    <span className="mt-0.5 shrink-0 text-[1.05rem] leading-none" aria-hidden>
                      {item.icon}
                    </span>
                    <div className="min-w-0">
                      <h4 className="font-montserrat text-[0.85rem] font-bold text-forest-deep">
                        {item.title}
                      </h4>
                      <p className="mt-0.5 text-[0.8rem] leading-relaxed text-slate">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-5 sm:pt-6">
                <p className="font-montserrat text-[0.68rem] font-bold uppercase tracking-[0.14em] text-slate">
                  {care.safety.medicalPartners.label}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-3 sm:mt-4 sm:gap-x-8 sm:gap-y-4">
                  {care.safety.medicalPartners.logos.map((logo) => (
                    <Image
                      key={logo.src}
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width ?? 140}
                      height={logo.height ?? 48}
                      className="h-8 w-auto object-contain object-left sm:h-10"
                    />
                  ))}
                </div>
              </div>
            </article>
          </RevealOnScroll>

          <RevealOnScroll delay={2} className="h-full">
            <article className="relative flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white p-5 before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gold before:content-[''] sm:p-8">
              <div className="mb-4 flex items-center gap-3 sm:mb-5 sm:gap-3.5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gold/10 text-[1.25rem] leading-none sm:h-11 sm:w-11 sm:text-[1.35rem]">
                  <span aria-hidden>🥗</span>
                </span>
                <h3 className="font-montserrat text-[1rem] font-extrabold text-forest-deep sm:text-[1.05rem]">
                  {care.nutrition.title}
                </h3>
              </div>
              <p className="text-[0.88rem] leading-relaxed text-slate sm:text-[0.9rem]">
                {care.nutrition.description}
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2">
                {care.nutrition.meals.map((meal) => (
                  <span
                    key={meal}
                    className="rounded-lg border border-gold/25 bg-gold/8 px-2 py-2 text-center text-[0.78rem] font-semibold text-forest-deep sm:px-3 sm:text-[0.82rem]"
                  >
                    {meal}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex flex-col gap-2.5">
                {care.nutrition.items.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-2.5 rounded-lg border-l-[3px] border-gold bg-paper px-3 py-2.5 sm:px-3.5 sm:py-3"
                  >
                    <span className="mt-0.5 shrink-0 text-[1.05rem] leading-none" aria-hidden>
                      {item.icon}
                    </span>
                    <div className="min-w-0">
                      <h4 className="font-montserrat text-[0.85rem] font-bold text-forest-deep">
                        {item.title}
                      </h4>
                      <p className="mt-0.5 text-[0.8rem] leading-relaxed text-slate">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto border-t border-line pt-5 sm:pt-6">
                <p className="font-montserrat text-[0.68rem] font-bold uppercase tracking-[0.14em] text-slate">
                  {care.nutrition.foodPartner.label}
                </p>
                <div className="mt-3 sm:mt-4">
                  <Image
                    src={care.nutrition.foodPartner.logo.src}
                    alt={care.nutrition.foodPartner.logo.alt}
                    width={care.nutrition.foodPartner.logo.width ?? 120}
                    height={care.nutrition.foodPartner.logo.height ?? 48}
                    className="h-8 w-auto object-contain object-left sm:h-10"
                  />
                </div>
              </div>
            </article>
          </RevealOnScroll>
        </div>
      </div>
    </Section>
  );
}
