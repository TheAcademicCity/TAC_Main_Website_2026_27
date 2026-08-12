import { blogPageContent } from "@/data/blog";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { SiteLink } from "@/components/layout/SiteLink";
import { Container } from "@/components/ui/Container";

export function BlogPageHeader() {
  const { header } = blogPageContent;

  return (
    <section className="relative flex min-h-[300px] items-end overflow-hidden bg-forest-deep pt-[var(--site-nav-stack)] md:min-h-[clamp(360px,50vh,480px)]">
      <div className="absolute inset-0">
        <ImageWithFallback
          image={header.image}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(14,57,52,0.25)] to-[rgba(9,38,35,0.9)] md:bg-gradient-to-t md:from-[rgba(5,22,18,0.96)] md:via-[rgba(5,22,18,0.65)] md:to-[rgba(5,22,18,0.22)]" />
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
          <span className="text-emerald md:text-white/70">Blogs & Newsletters</span>
        </nav>

        <h1 className="font-montserrat text-[1.5625rem] font-extrabold leading-[1.2] text-white md:text-[clamp(2rem,4.5vw,3.2rem)] md:font-black md:leading-[1.06]">
          {header.title} <em className="not-italic text-gold">{header.titleHighlight}</em>
        </h1>
        <p className="mt-2.5 max-w-[54ch] text-[0.8125rem] font-light leading-normal text-mist md:mt-3 md:text-[clamp(0.95rem,1.5vw,1.06rem)] md:leading-relaxed md:text-white/70">
          {header.description}
        </p>
      </Container>
    </section>
  );
}
