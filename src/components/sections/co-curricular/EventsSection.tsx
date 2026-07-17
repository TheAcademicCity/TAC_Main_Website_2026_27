import { coCurricularPageContent } from "@/data/coCurricular";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function EventsSection() {
  const { events } = coCurricularPageContent;

  return (
    <Section id="events" background="paper" spacing="compact">
      <RevealOnScroll>
        <SectionLabel>{events.label}</SectionLabel>
        <h2 className="font-montserrat text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold text-forest-deep">
          {events.title}
        </h2>
      </RevealOnScroll>

      <RevealOnScroll delay={1}>
        <div className="mt-8 border-t border-line">
          {events.items.map((item) => (
            <div
              key={item.number}
              className="grid grid-cols-1 items-center gap-4 border-b border-line py-5 transition-colors hover:bg-forest/[0.03] sm:grid-cols-[80px_1fr_auto] sm:gap-6 sm:py-6"
            >
              <div className="font-montserrat text-[2.2rem] font-black leading-none text-forest/12 sm:text-center">
                {item.number}
              </div>
              <div>
                <h4 className="font-montserrat text-[1.02rem] font-extrabold text-forest-deep">
                  {item.title}
                </h4>
                <p className="mt-1 text-[0.86rem] leading-relaxed text-slate">{item.description}</p>
              </div>
              <span className="w-fit whitespace-nowrap border-[1.5px] border-line bg-paper px-3 py-1 font-montserrat text-[0.65rem] font-bold uppercase tracking-[0.14em] text-forest">
                {item.badge}
              </span>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </Section>
  );
}
