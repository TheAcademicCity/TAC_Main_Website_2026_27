import { boardingPageContent } from "@/data/boarding";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { SiteLink } from "@/components/layout/SiteLink";
import { Container } from "@/components/ui/Container";

export function BoardingHeroSection() {
  const { hero } = boardingPageContent;

  return (
    <section className="relative flex min-h-[clamp(360px,52vh,500px)] items-end overflow-hidden bg-forest-deep pt-[var(--site-nav-stack)]">
      <div className="absolute inset-0">
        <ImageWithFallback
          image={hero.image}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,22,18,0.96)] via-[rgba(5,22,18,0.55)] to-[rgba(5,22,18,0.18)]" />
      </div>

      <Container className="relative z-[2] py-[clamp(2rem,4vw,3.5rem)]">
        <nav
          aria-label="Breadcrumb"
          className="mb-3 flex items-center gap-2 font-montserrat text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white/50"
        >
          <SiteLink href="/" className="text-white/50 transition-colors hover:text-gold">
            Home
          </SiteLink>
          <span aria-hidden>›</span>
          <span className="text-white/70">Boarding</span>
        </nav>

        <h1 className="max-w-[18ch] font-montserrat text-[clamp(1.9rem,4.2vw,3.2rem)] font-black leading-[1.06] text-white">
          {hero.title} <em className="not-italic text-gold">{hero.titleHighlight}</em>
        </h1>
        <p className="mt-3 max-w-[50ch] text-[clamp(0.93rem,1.4vw,1.04rem)] font-light leading-relaxed text-white/70">
          {hero.description}
        </p>

        <dl className="mt-6 flex flex-wrap gap-9">
          {hero.stats.map((stat) => (
            <div key={stat.label}>
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
