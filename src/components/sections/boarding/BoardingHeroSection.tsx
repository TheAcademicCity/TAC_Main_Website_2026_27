import { boardingPageContent } from "@/data/boarding";
import { PageHeroBackdrop } from "@/components/sections/shared/PageHeroBackdrop";
import { SiteLink } from "@/components/layout/SiteLink";
import { Container } from "@/components/ui/Container";

export function BoardingHeroSection() {
  const { hero } = boardingPageContent;

  return (
    <section className="relative flex min-h-[330px] items-end overflow-hidden bg-forest-deep pt-[var(--site-nav-stack)] md:min-h-[clamp(360px,52vh,500px)]">
      <PageHeroBackdrop />

      <Container className="relative z-[2] px-5 py-6 md:py-[clamp(1.5rem,4vw,3.5rem)]">
        <nav
          aria-label="Breadcrumb"
          className="mb-2.5 flex flex-wrap items-center gap-1.5 font-outfit text-[0.68rem] font-semibold text-white/55 md:mb-3 md:font-montserrat md:uppercase md:tracking-[0.12em] md:text-white/50"
        >
          <SiteLink href="/" className="transition-colors hover:text-gold">
            Home
          </SiteLink>
          <span aria-hidden>›</span>
          <span className="text-gold">Boarding</span>
        </nav>

        <h1 className="font-montserrat text-[1.5625rem] font-extrabold leading-[1.2] text-white md:max-w-[18ch] md:text-[clamp(1.9rem,4.2vw,3.2rem)] md:font-black md:leading-[1.06]">
          {hero.title} <em className="not-italic text-gold">{hero.titleHighlight}</em>
        </h1>
        <p className="mt-2 max-w-[50ch] text-[0.8125rem] font-light leading-normal text-mist md:mt-3 md:text-[clamp(0.93rem,1.4vw,1.04rem)] md:leading-relaxed md:text-white/70">
          {hero.description}
        </p>

        {/* Mobile stat chips */}
        <div className="mt-4 flex gap-2 md:hidden">
          {hero.stats.map((stat) => (
            <div
              key={stat.label}
              className="min-w-0 flex-1 rounded-[14px] border border-white/20 bg-white/10 px-3 py-2.5"
            >
              <b className="block font-montserrat text-[0.9375rem] font-bold text-white">{stat.value}</b>
              <span className="text-[0.5625rem] uppercase tracking-[0.03em] text-mist">
                {stat.label === "Values at the core" ? "Values at core" : stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Desktop stats */}
        <dl className="mt-5 hidden flex-wrap gap-9 md:flex">
          {hero.stats.map((stat) => (
            <div key={stat.label} className="min-w-0">
              <dt className="font-montserrat text-[1.5rem] font-black leading-none text-gold">
                {stat.value}
              </dt>
              <dd className="mt-1 text-[0.74rem] font-medium text-white/55">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
