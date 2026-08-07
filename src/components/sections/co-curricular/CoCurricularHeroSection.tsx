import { coCurricularPageContent } from "@/data/coCurricular";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { SiteLink } from "@/components/layout/SiteLink";
import { Container } from "@/components/ui/Container";

export function CoCurricularHeroSection() {
  const { hero } = coCurricularPageContent;

  return (
    <section className="relative flex min-h-[clamp(320px,48svh,500px)] items-end overflow-hidden bg-forest-deep pt-[var(--site-nav-stack)] md:min-h-[clamp(360px,52vh,500px)]">
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

      <Container className="relative z-[2] py-[clamp(1.5rem,4vw,3.5rem)]">
        <nav
          aria-label="Breadcrumb"
          className="mb-2 flex flex-wrap items-center gap-2 font-montserrat text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white/50 sm:mb-3"
        >
          <SiteLink href="/" className="text-white/50 transition-colors hover:text-gold">
            Home
          </SiteLink>
          <span aria-hidden>›</span>
          <span className="text-white/70">Co-curricular</span>
        </nav>

        <h1 className="whitespace-pre-line font-montserrat text-[clamp(1.7rem,7vw,3.2rem)] font-black leading-[1.12] text-white md:text-[clamp(1.9rem,4.2vw,3.2rem)]">
          {hero.title} <em className="not-italic text-gold">{hero.titleHighlight}</em>
        </h1>
        <p className="mt-3 max-w-[40ch] text-[clamp(0.9rem,3.4vw,1.04rem)] font-light leading-relaxed text-white/70 whitespace-normal sm:max-w-none md:text-[clamp(0.93rem,1.4vw,1.04rem)] lg:whitespace-nowrap">
          {hero.description}
        </p>

        <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4 sm:mt-6 sm:flex sm:flex-wrap sm:gap-x-8 sm:gap-y-5">
          {hero.stats.map((stat) => (
            <div key={stat.label} className="min-w-0">
              <dt className="font-montserrat text-[clamp(0.95rem,3.8vw,1.35rem)] font-black leading-tight text-gold whitespace-normal sm:text-[clamp(1.05rem,2vw,1.35rem)] sm:whitespace-nowrap">
                {stat.value}
              </dt>
              <dd className="mt-1 text-[0.7rem] font-medium leading-snug text-white/55 whitespace-normal sm:mt-1.5 sm:text-[0.74rem] sm:whitespace-nowrap">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
