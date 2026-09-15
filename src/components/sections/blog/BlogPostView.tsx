import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { PageHeroBackdrop } from "@/components/sections/shared/PageHeroBackdrop";
import { SiteLink } from "@/components/layout/SiteLink";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { categoryPresetForId, estimateReadMinutes, stripDuplicateHeroImage } from "@/lib/blog";
import { blogFallbackImage, type BlogPostDetail } from "@/lib/strapi-blog";

type BlogPostViewProps = {
  post: BlogPostDetail;
};

export function BlogPostView({ post }: BlogPostViewProps) {
  const preset = categoryPresetForId(post.id);
  const readMinutes = estimateReadMinutes(post.descriptionHtml);
  const image = post.image ?? {
    src: blogFallbackImage,
    fallbackSrc: blogFallbackImage,
    alt: post.title,
    isPlaceholder: true,
  };
  const bodyHtml = post.image
    ? stripDuplicateHeroImage(post.descriptionHtml, post.image.src)
    : post.descriptionHtml;

  return (
    <main id="top" tabIndex={-1} className="blog-post-page outline-none">
      {post.structuredSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(post.structuredSchema) }}
        />
      ) : null}

      <section className="relative overflow-hidden bg-forest-deep pt-[var(--site-nav-stack)]">
        <PageHeroBackdrop gradient="compact" />
        <Container className="relative z-[1] py-[clamp(2rem,4vw,3rem)]">
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex flex-wrap items-center gap-2 font-montserrat text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white/50"
          >
            <SiteLink href="/" className="text-white/50 transition-colors hover:text-gold">
              Home
            </SiteLink>
            <span aria-hidden>›</span>
            <SiteLink href="/blog" className="text-white/50 transition-colors hover:text-gold">
              Blog
            </SiteLink>
            <span aria-hidden>›</span>
            <span className="text-gold">{preset.categoryLabel}</span>
          </nav>

          <h1 className="max-w-[36ch] font-montserrat text-[clamp(1.8rem,3.5vw,2.6rem)] font-black leading-[1.15] text-white">
            {post.title}
          </h1>
          <p className="mt-4 text-[0.82rem] font-semibold uppercase tracking-[0.1em] text-white/50">
            {preset.categoryLabel} · {readMinutes} min read
          </p>
        </Container>
      </section>

      <Section background="white" className="!pt-6 sm:!pt-8">
        <div className="mx-auto max-w-[760px] text-left">
          <div className="relative aspect-video overflow-hidden rounded-lg bg-forest-deep">
            <div className="absolute inset-0" style={{ background: preset.gradient }} />
            <ImageWithFallback image={image} fill sizes="(min-width: 768px) 760px, 100vw" />
          </div>

          <article
            className="blog-prose mt-8 max-w-none text-[0.94rem] leading-[1.75] text-slate [&_a]:text-forest [&_a]:underline [&_h2]:mt-8 [&_h2]:font-montserrat [&_h2]:text-[1.15rem] [&_h2]:font-extrabold [&_h2]:text-forest-deep [&_h3]:mt-6 [&_h3]:font-montserrat [&_h3]:text-[1.02rem] [&_h3]:font-bold [&_h3]:text-forest-deep [&_li]:mt-2 [&_p]:mt-4 [&_strong]:text-forest-deep [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-5"
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />

          <div className="mt-10">
            <Button href="/blog" variant="gold" className="px-6 py-3 text-[0.78rem]">
              <Icon name="arrow" className="h-3.5 w-3.5 rotate-180" />
              Back to blog
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
