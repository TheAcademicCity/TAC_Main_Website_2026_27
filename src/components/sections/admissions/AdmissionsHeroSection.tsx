import { admissionsPageContent } from "@/data/admissions";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { SiteLink } from "@/components/layout/SiteLink";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

export function AdmissionsHeroSection() {
  const { hero, process } = admissionsPageContent;

  return (
    <section className="relative flex min-h-[300px] items-end overflow-hidden bg-forest-deep pt-[var(--site-nav-stack)] md:min-h-[clamp(380px,52vh,500px)]">
      <div className="absolute inset-0">
        <ImageWithFallback
          image={hero.image}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(14,57,52,0.25)] to-[rgba(9,38,35,0.9)] md:bg-gradient-to-t md:from-[rgba(5,22,18,0.97)] md:via-[rgba(5,22,18,0.65)] md:to-[rgba(5,22,18,0.15)]" />
      </div>

      <Container className="relative z-[2] px-5 py-[26px] md:py-[clamp(1.5rem,4vw,3.5rem)]">
        <nav
          aria-label="Breadcrumb"
          className="mb-2.5 flex flex-wrap items-center gap-1.5 font-outfit text-[0.68rem] font-semibold text-white/55 md:mb-3 md:font-montserrat md:uppercase md:tracking-[0.12em] md:text-white/50"
        >
          <SiteLink href="/" className="transition-colors hover:text-gold">
            Home
          </SiteLink>
          <span aria-hidden>›</span>
          <span className="text-emerald md:text-white/70">Admissions</span>
        </nav>

        <h1 className="max-w-[18ch] font-montserrat text-[1.625rem] font-extrabold leading-[1.2] text-white md:text-[clamp(1.9rem,4.5vw,3.4rem)] md:font-black md:leading-[1.06]">
          {hero.title}{" "}
          {hero.titleHighlight ? (
            <em className="not-italic text-gold">{hero.titleHighlight}</em>
          ) : null}
        </h1>
        <p className="mt-2.5 max-w-[42ch] text-[0.8rem] font-light leading-normal text-mist md:hidden">
          {process.description}
        </p>

        {/* Mobile CTA pills */}
        <div className="mt-4 flex gap-2 md:hidden">
          <Button
            href={hero.primaryCta.href}
            variant="gold"
            className="flex-1 justify-center rounded-[30px] px-2.5 py-3 font-outfit text-[0.75rem] font-bold normal-case tracking-normal text-navy"
          >
            See Process
          </Button>
          <Button
            href={hero.phone.href}
            variant="outline-white"
            className="flex-1 justify-center rounded-[30px] border-[1.5px] border-white/50 px-2.5 py-3 font-outfit text-[0.75rem] font-semibold normal-case tracking-normal"
          >
            Call
          </Button>
          <Button
            href={hero.whatsapp.href}
            external
            variant="outline-white"
            className="flex-1 justify-center rounded-[30px] border-[1.5px] border-white/50 px-2.5 py-3 font-outfit text-[0.75rem] font-semibold normal-case tracking-normal"
          >
            WhatsApp
          </Button>
        </div>

        {/* Desktop CTAs */}
        <div className="mt-7 hidden w-full max-w-none flex-row flex-wrap gap-3 md:flex">
          <Button href={hero.primaryCta.href} className="justify-center px-7 py-3 text-[0.78rem]">
            {hero.primaryCta.label}
            <Icon name="arrow" className="h-3.5 w-3.5" />
          </Button>
          <Button
            href={hero.phone.href}
            variant="outline-white"
            className="hero-call-cta justify-center px-7 py-3 text-[0.78rem]"
          >
            <Icon name="phone" className="h-3.5 w-3.5" />
            {hero.phone.label}
          </Button>
          <Button
            href={hero.whatsapp.href}
            external
            variant="outline-white"
            className="justify-center px-7 py-3 text-[0.78rem]"
          >
            <Icon name="whatsapp" className="h-3.5 w-3.5" />
            {hero.whatsapp.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
