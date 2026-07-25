import { achievementsPageContent } from "@/data/achievements";
import { SiteLink } from "@/components/layout/SiteLink";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function AchievementsHeroSection() {
  const { hero } = achievementsPageContent;

  return (
    <section className="relative flex min-h-[clamp(480px,62vh,600px)] items-end overflow-hidden bg-forest-dark pt-[var(--site-nav-stack)]">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(135deg,#0a2c28_0%,#0f3d38_40%,#185850_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(45,148,92,0.25),transparent_60%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-2%] top-1/2 -translate-y-1/2 whitespace-nowrap font-montserrat text-[clamp(8rem,20vw,18rem)] font-extrabold italic leading-[0.9] tracking-[-0.04em] text-white/4"
      >
        {hero.ghostText}
      </div>

      <Container className="relative z-[2] py-[clamp(2.5rem,5vw,4rem)]">
        <nav
          aria-label="Breadcrumb"
          className="mb-3 flex items-center gap-2 font-montserrat text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white/45"
        >
          <SiteLink href="/" className="text-white/45 transition-colors hover:text-gold">
            Home
          </SiteLink>
          <span aria-hidden>›</span>
          <span className="text-white/70">Achievements</span>
        </nav>

        <p className="mb-2 font-montserrat text-[0.75rem] font-bold uppercase tracking-[0.22em] text-gold">
          {hero.eyebrow}
        </p>
        <h1 className="font-montserrat text-[clamp(2.4rem,6vw,5rem)] font-extrabold italic leading-[1.02] text-white">
          {hero.title}
          <br />
          <em className="not-italic text-gold">{hero.titleHighlight}</em>
        </h1>
        <p className="mt-3 max-w-[52ch] text-[clamp(0.93rem,1.4vw,1.08rem)] font-light leading-relaxed text-white/65">
          {hero.description}
        </p>

        <dl className="mt-8 grid grid-cols-2 border-t border-white/12 md:grid-cols-4">
          {hero.stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "py-5 pr-4",
                index < hero.stats.length - 1 && "md:border-r md:border-white/10",
              )}
            >
              <dt className="font-montserrat text-[clamp(1.4rem,3vw,2rem)] font-black leading-none text-gold">
                {stat.value}
              </dt>
              <dd className="mt-1 text-[0.75rem] text-white/48">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
