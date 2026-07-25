import { achievementsPageContent } from "@/data/achievements";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Container } from "@/components/ui/Container";

export function StatsBandSection() {
  const { statsBand } = achievementsPageContent;

  return (
    <section className="bg-forest-deep">
      <Container>
        <div className="grid md:grid-cols-3">
          {statsBand.map((stat, index) => (
            <RevealOnScroll
              key={stat.label}
              delay={index as 0 | 1 | 2}
              className="relative overflow-hidden border-b border-white/8 px-8 py-10 text-center md:border-b-0 md:border-r md:last:border-r-0"
            >
              <p className="font-montserrat text-[clamp(2rem,4vw,3rem)] font-black leading-none text-gold">
                {stat.value}
              </p>
              <p className="mx-auto mt-2 max-w-[24ch] text-[0.84rem] leading-relaxed text-white/50">
                {stat.label}
              </p>
              <span
                aria-hidden
                className="pointer-events-none absolute right-[-10px] top-1/2 -translate-y-1/2 font-montserrat text-[5rem] italic text-white/4"
              >
                {stat.value}
              </span>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
