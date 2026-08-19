import { academicsPageContent } from "@/data/academics";
import { PageHeroBackdrop } from "@/components/sections/shared/PageHeroBackdrop";
import { SiteLink } from "@/components/layout/SiteLink";
import { Container } from "@/components/ui/Container";

const mobileStats = [
  { value: "CBSE", label: "NCERT" },
  { value: "1:10", label: "Ratio" },
  { value: "5–12", label: "Grades" },
  { value: "600+", label: "Careers" },
] as const;

export function AcademicsHeroSection() {
  const { hero } = academicsPageContent;

  return (
    <section className="relative flex min-h-[330px] items-end overflow-hidden bg-forest-deep pt-[var(--site-nav-stack)] md:min-h-[clamp(360px,50vh,480px)]">
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
          <span className="text-gold">Academics</span>
        </nav>

        <h1 className="font-montserrat text-[1.5625rem] font-extrabold leading-[1.2] text-white md:max-w-[16ch] md:text-[clamp(2rem,4.5vw,3.2rem)] md:font-black md:leading-[1.06]">
          {hero.title} <em className="not-italic text-gold">{hero.titleHighlight}</em>
        </h1>
        <p className="mt-2 max-w-[54ch] text-[0.8125rem] font-light leading-normal text-mist md:mt-3 md:text-[clamp(0.95rem,1.5vw,1.06rem)] md:leading-relaxed md:text-white/70">
          {hero.description}
        </p>

        {/* Mobile stat chips */}
        <div className="scrollbar-none mt-4 flex gap-2 overflow-x-auto md:hidden">
          {mobileStats.map((stat) => (
            <div
              key={stat.label}
              className="min-w-[82px] shrink-0 rounded-[14px] border border-white/20 bg-white/10 px-3.5 py-2.5"
            >
              <b className="block font-montserrat text-[0.9375rem] font-bold text-white">{stat.value}</b>
              <span className="text-[0.5625rem] uppercase tracking-[0.03em] text-mist">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Desktop stats */}
        <dl className="mt-5 hidden flex-wrap gap-8 md:flex">
          {hero.stats.map((stat) => (
            <div key={stat.label} className="min-w-0">
              <dt className="font-montserrat text-[1.4rem] font-black leading-none text-gold">
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
