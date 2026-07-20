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
              className="group grid grid-cols-[auto_1fr] items-start gap-x-4 gap-y-3 border-b border-line py-5 transition-[transform,background-color] duration-700 ease-out hover:-translate-y-px hover:bg-forest/[0.035] sm:grid-cols-[80px_minmax(0,1fr)] sm:gap-x-6 sm:py-6"
            >
              <div className="font-montserrat text-[2.2rem] font-black leading-none text-forest/12 transition-colors duration-700 ease-out group-hover:text-forest/20 sm:pt-1 sm:text-center">
                {item.number}
              </div>
              <div className="min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <h4 className="font-montserrat text-[1.02rem] font-extrabold text-forest-deep transition-colors duration-700 ease-out group-hover:text-forest">
                    {item.title}
                  </h4>
                  <span className="mr-2 shrink-0 whitespace-nowrap border-[1.5px] border-line bg-paper px-3 py-1 font-montserrat text-[0.65rem] font-bold uppercase tracking-[0.14em] text-forest transition-[border-color,background-color,color] duration-700 ease-out group-hover:border-emerald/25 group-hover:bg-white group-hover:text-emerald sm:mr-3">
                    {item.badge}
                  </span>
                </div>
                <p className="mt-1 text-[0.86rem] leading-relaxed text-slate transition-colors duration-700 ease-out group-hover:text-slate/90">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </Section>
  );
}
