import { blogPageContent } from "@/data/blog";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { SiteLink } from "@/components/layout/SiteLink";
import { Container } from "@/components/ui/Container";

export function BlogPageHeader() {
  const { header } = blogPageContent;

  return (
    <section className="relative flex min-h-[clamp(360px,50vh,480px)] items-end overflow-hidden bg-forest-deep pt-[var(--site-nav-stack)]">
      <div className="absolute inset-0">
        <ImageWithFallback
          image={header.image}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,22,18,0.96)] via-[rgba(5,22,18,0.65)] to-[rgba(5,22,18,0.22)]" />
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
          <span className="text-white/70">Blogs & Newsletters</span>
        </nav>

        <h1 className="font-montserrat text-[clamp(2rem,4.5vw,3.2rem)] font-black leading-[1.06] text-white">
          {header.title} <em className="not-italic text-gold">{header.titleHighlight}</em>
        </h1>
        <p className="mt-3 max-w-[54ch] text-[clamp(0.95rem,1.5vw,1.06rem)] font-light leading-relaxed text-white/70">
          {header.description}
        </p>
      </Container>
    </section>
  );
}
