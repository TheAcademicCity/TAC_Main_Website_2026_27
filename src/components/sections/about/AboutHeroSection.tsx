import { aboutPageContent } from "@/data/about";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { SiteLink } from "@/components/layout/SiteLink";
import { Container } from "@/components/ui/Container";

function highlightText(text: string, highlights: readonly string[]) {
  if (!highlights.length) return text;

  const pattern = new RegExp(
    `(${highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "gi",
  );
  const parts = text.split(pattern);

  return parts.map((part) => {
    const isHighlight = highlights.some((h) => h.toLowerCase() === part.toLowerCase());
    return isHighlight ? (
      <strong key={part} className="font-bold text-gold">
        {part}
      </strong>
    ) : (
      <span key={part}>{part}</span>
    );
  });
}

export function AboutHeroSection() {
  const { hero } = aboutPageContent;

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
          <span className="text-gold">About Us</span>
        </nav>

        <h1 className="font-montserrat text-[1.625rem] font-extrabold leading-[1.2] text-white md:text-[clamp(1.9rem,4.5vw,3.4rem)] md:leading-[1.06]">
          {hero.title}{" "}
          <em className="not-italic text-gold">{hero.titleHighlight}</em>
        </h1>
        <p className="mt-2.5 max-w-[52ch] text-[0.8rem] font-light leading-normal text-mist md:mt-3 md:text-[clamp(0.93rem,1.4vw,1.05rem)] md:leading-relaxed md:text-white/70">
          {highlightText(hero.description, hero.descriptionHighlights)}
        </p>

        {/* Mobile campus tags */}
        <div className="mt-3.5 flex gap-2 md:hidden">
          {hero.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[20px] border border-white/25 bg-white/12 px-3 py-1.5 text-[0.65rem] font-bold text-white"
            >
              <b className="mb-0.5 block text-[0.56rem] font-medium uppercase tracking-[0.04em] text-mist">
                {stat.value}
              </b>
              {stat.label}
            </div>
          ))}
        </div>

        {/* Desktop stats */}
        <dl className="mt-6 hidden flex-wrap gap-10 md:flex">
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
