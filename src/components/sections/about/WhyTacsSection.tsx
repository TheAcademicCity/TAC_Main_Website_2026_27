import { aboutPageContent } from "@/data/about";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Container } from "@/components/ui/Container";

export function WhyTacsSection() {
  const { whyTacs } = aboutPageContent;

  return (
    <section id="numbers" className="relative overflow-hidden bg-forest-deep py-[clamp(56px,7vw,88px)]">
      <Container className="relative z-[1]">
        <RevealOnScroll className="mb-10 text-center">
          <span className="font-montserrat text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white/35">
            {whyTacs.label}
          </span>
        </RevealOnScroll>

        <div className="grid gap-8 md:grid-cols-3">
          {whyTacs.cards.map((card, index) => (
            <RevealOnScroll key={card.stat} delay={Math.min(index, 2) as 0 | 1 | 2}>
              <article className="text-center">
                <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full border border-gold/30 text-gold">
                  <Icon name={card.icon} className="h-6 w-6" />
                </div>
                <div className="font-montserrat text-[1.55rem] font-black text-gold">{card.stat}</div>
                <h3 className="mt-2 font-montserrat text-[0.95rem] font-extrabold text-white">
                  {card.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[34ch] text-[0.86rem] leading-relaxed text-white/55">
                  {card.description}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <div className="mt-12 grid grid-cols-2 border-t border-white/8 pt-8 md:grid-cols-4">
            {whyTacs.footerStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`px-4 py-4 text-center ${
                  index < whyTacs.footerStats.length - 1 ? "border-r border-white/8" : ""
                }`}
              >
                <div className="font-montserrat text-[1.6rem] font-black text-gold">{stat.value}</div>
                <div className="mt-1 text-[0.78rem] text-white/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
