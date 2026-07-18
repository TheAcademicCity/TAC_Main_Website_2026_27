import { boardingPageContent } from "@/data/boarding";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function DormSection() {
  const { dorm } = boardingPageContent;

  return (
    <Section id="dorm">
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <RevealOnScroll>
          <SectionLabel>{dorm.label}</SectionLabel>
          <h2 className="font-montserrat text-[clamp(1.4rem,2.4vw,1.9rem)] font-extrabold text-forest-deep">
            {dorm.title}
          </h2>
          {dorm.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="mt-3 text-[0.96rem] leading-relaxed text-slate">
              {paragraph}
            </p>
          ))}
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          <div className="grid min-h-[min(520px,72vh)] grid-rows-2 overflow-hidden border border-line bg-paper">
            <div className="relative min-h-0 bg-forest-deep">
              <ImageWithFallback
                image={dorm.image}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="flex min-h-0 flex-col justify-center border-t border-line p-5 sm:p-6">
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {dorm.keyItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[0.84rem] text-slate">
                    <Icon name="checkCircle" className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
