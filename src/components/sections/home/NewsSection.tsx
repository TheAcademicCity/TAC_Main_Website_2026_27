import { newsContent } from "@/data/home";
import { ImageWithFallback } from "@/components/sections/shared/ImageWithFallback";
import { NewsCard } from "@/components/sections/shared/NewsCard";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { Section } from "@/components/ui/Section";

export function NewsSection() {
  const delays: Array<0 | 1 | 2 | 3 | 4> = [0, 1, 2, 0, 1, 2];

  return (
    <Section id="news" background="white" className="!pt-[clamp(28px,3.5vw,44px)] max-md:!px-0">
      <div className="px-5 md:px-0">
        <SectionHeader
          label={newsContent.label}
          title={newsContent.title}
          className="mb-6 max-md:[&_h2]:text-[1.3rem] md:mb-10"
        />
      </div>

      {/* Mobile 2×3 grid */}
      <div className="grid grid-cols-2 gap-3 px-5 md:hidden">
        {newsContent.articles.map((article) => (
          <article
            key={article.title}
            className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_8px_20px_-12px_rgba(0,0,0,0.18)]"
          >
            <div className="relative aspect-[16/10] bg-forest-deep">
              <ImageWithFallback
                image={article.image}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
              <div className="absolute left-1.5 top-1.5 bg-gold px-1 py-px text-center font-montserrat text-[0.36rem] font-extrabold leading-tight text-forest-deep">
                <b className="block text-[0.6rem]">{article.day}</b>
                {article.month}
              </div>
            </div>
            <div className="p-2.5">
              <h5 className="font-montserrat text-[0.72rem] font-bold leading-snug text-navy">
                {article.title}
              </h5>
            </div>
          </article>
        ))}
      </div>

      {/* Desktop grid */}
      <div className="hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-3">
        {newsContent.articles.map((article, index) => (
          <NewsCard key={article.title} article={article} delay={delays[index]} />
        ))}
      </div>
    </Section>
  );
}
