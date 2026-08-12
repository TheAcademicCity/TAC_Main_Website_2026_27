import { newsContent } from "@/data/home";
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

      {/* Mobile event row */}
      <div className="scrollbar-none flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 md:hidden">
        {newsContent.articles.map((article) => (
          <article
            key={article.title}
            className="w-[150px] shrink-0 snap-start rounded-2xl bg-white p-4 shadow-[0_8px_20px_-12px_rgba(0,0,0,0.18)]"
          >
            <div className="mb-2 flex items-baseline gap-1 text-forest">
              <b className="font-montserrat text-[1.25rem] font-extrabold">{article.day}</b>
              <span className="text-[0.68rem] font-semibold uppercase">{article.month}</span>
            </div>
            <h5 className="mb-1 font-montserrat text-[0.78rem] font-bold text-navy">{article.title}</h5>
            <p className="text-[0.65rem] leading-snug text-[#999]">{article.excerpt}</p>
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
