import { aboutPageContent } from "@/data/about";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { SiteLink } from "@/components/layout/SiteLink";
import { Container } from "@/components/ui/Container";

function highlightText(text: string, highlights: readonly string[]) {
  if (!highlights.length) return text;

  const pattern = new RegExp(`(${highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
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
    <section className="relative flex min-h-[clamp(380px,52vh,500px)] items-end overflow-hidden bg-forest-deep pt-[var(--site-nav-stack)]">
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

      <Container className="relative z-[2] py-[clamp(2rem,4vw,3.5rem)]">
        <nav
          aria-label="Breadcrumb"
          className="mb-3 flex items-center gap-2 font-montserrat text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white/50"
        >
          <SiteLink href="/" className="text-white/50 transition-colors hover:text-gold">
            Home
          </SiteLink>
          <span aria-hidden>›</span>
          <span className="text-white/70">About Us</span>
        </nav>

        <h1 className="font-montserrat text-[clamp(1.9rem,4.5vw,3.4rem)] font-black leading-[1.06] text-white">
          {hero.title} <em className="not-italic text-gold">{hero.titleHighlight}</em>
        </h1>
        <p className="mt-3 max-w-[52ch] text-[clamp(0.93rem,1.4vw,1.05rem)] font-light leading-relaxed text-white/70">
          {highlightText(hero.description, hero.descriptionHighlights)}
        </p>

        <dl className="mt-6 flex flex-wrap gap-10">
          {hero.stats.map((stat) => (
            <div key={stat.label}>
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
