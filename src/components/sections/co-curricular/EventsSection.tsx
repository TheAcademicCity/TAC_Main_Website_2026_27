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
        <h2 className="font-montserrat text-[clamp(1.35rem,6vw,2rem)] font-extrabold leading-tight text-forest-deep md:text-[clamp(1.5rem,2.6vw,2rem)]">
          {events.title}
        </h2>
      </RevealOnScroll>

      <RevealOnScroll delay={1}>
        <div className="mt-6 border-t border-line sm:mt-8">
          {events.items.map((item) => (
            <div
              key={item.number}
              className="group grid grid-cols-[auto_1fr] items-start gap-x-3 gap-y-2 border-b border-line py-4 transition-[transform,background-color] duration-700 ease-out hover:-translate-y-px hover:bg-forest/[0.035] sm:gap-x-6 sm:py-6 sm:grid-cols-[80px_minmax(0,1fr)]"
            >
              <div className="font-montserrat text-[1.75rem] font-black leading-none text-forest/12 transition-colors duration-700 ease-out group-hover:text-forest/20 sm:pt-1 sm:text-center sm:text-[2.2rem]">
                {item.number}
              </div>
              <div className="min-w-0">
                <div className="flex flex-col items-start gap-2 sm:flex-row sm:justify-between sm:gap-4">
                  <h4 className="font-montserrat text-[0.98rem] font-extrabold text-forest-deep transition-colors duration-700 ease-out group-hover:text-forest sm:text-[1.02rem]">
                    {item.title}
                  </h4>
                  <span className="shrink-0 whitespace-nowrap border-[1.5px] border-line bg-paper px-2.5 py-1 font-montserrat text-[0.62rem] font-bold uppercase tracking-[0.14em] text-forest transition-[border-color,background-color,color] duration-700 ease-out group-hover:border-emerald/25 group-hover:bg-white group-hover:text-emerald sm:mr-3 sm:px-3 sm:text-[0.65rem]">
                    {item.badge}
                  </span>
                </div>
                <p className="mt-1 text-[0.84rem] leading-relaxed text-slate transition-colors duration-700 ease-out group-hover:text-slate/90 sm:text-[0.86rem]">
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
