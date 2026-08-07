import { admissionsPageContent } from "@/data/admissions";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { SiteLink } from "@/components/layout/SiteLink";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

export function AdmissionsHeroSection() {
  const { hero } = admissionsPageContent;

  return (
    <section className="relative flex min-h-[clamp(320px,48svh,500px)] items-end overflow-hidden bg-forest-deep pt-[var(--site-nav-stack)] md:min-h-[clamp(380px,52vh,500px)]">
      <div className="absolute inset-0">
        <ImageWithFallback
          image={hero.image}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,22,18,0.97)] via-[rgba(5,22,18,0.65)] to-[rgba(5,22,18,0.15)]" />
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
          <span className="text-white/70">Admissions</span>
        </nav>

        <h1 className="max-w-[18ch] font-montserrat text-[clamp(1.75rem,7vw,3.4rem)] font-black leading-[1.06] text-white md:text-[clamp(1.9rem,4.5vw,3.4rem)]">
          {hero.title}{" "}
          {hero.titleHighlight ? (
            <em className="not-italic text-gold">{hero.titleHighlight}</em>
          ) : null}
        </h1>

        <div className="mt-5 flex w-full max-w-sm flex-col gap-3 sm:mt-7 sm:max-w-none sm:flex-row sm:flex-wrap">
          <Button
            href={hero.primaryCta.href}
            className="w-full justify-center px-7 py-3 text-[0.78rem] sm:w-auto"
          >
            {hero.primaryCta.label}
            <Icon name="arrow" className="h-3.5 w-3.5" />
          </Button>
          <Button
            href={hero.phone.href}
            variant="outline-white"
            className="hero-call-cta w-full justify-center px-7 py-3 text-[0.78rem] sm:w-auto"
          >
            <Icon name="phone" className="h-3.5 w-3.5" />
            {hero.phone.label}
          </Button>
          <Button
            href={hero.whatsapp.href}
            external
            variant="outline-white"
            className="w-full justify-center px-7 py-3 text-[0.78rem] sm:w-auto"
          >
            <Icon name="whatsapp" className="h-3.5 w-3.5" />
            {hero.whatsapp.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
