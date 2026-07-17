import { boardingPageContent } from "@/data/boarding";
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
          <div className="border border-line bg-paper p-6">
            <div className="border-b border-line pb-5 text-center">
              <p className="font-montserrat text-[clamp(2.4rem,5vw,3.2rem)] font-black leading-none text-emerald">
                {dorm.stat}
              </p>
              <p className="mt-1 font-montserrat text-[0.72rem] font-bold uppercase tracking-[0.12em] text-slate">
                {dorm.statLabel}
              </p>
            </div>

            <blockquote className="mt-5 border-l-[3px] border-gold pl-4 text-[0.9rem] italic leading-relaxed text-forest-deep">
              &ldquo;{dorm.quote}&rdquo;
            </blockquote>

            <ul className="mt-6 flex flex-col gap-2.5">
              {dorm.keyItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[0.84rem] text-slate">
                  <Icon name="checkCircle" className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
