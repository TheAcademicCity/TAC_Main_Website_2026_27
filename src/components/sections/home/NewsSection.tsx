import { newsContent } from "@/data/home";
import { NewsCard } from "@/components/sections/shared/NewsCard";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { Section } from "@/components/ui/Section";

export function NewsSection() {
  const delays: Array<0 | 1 | 2 | 3 | 4> = [0, 1, 2, 0, 1, 2];

  return (
    <Section id="news" background="paper">
      <SectionHeader
        label={newsContent.label}
        title={newsContent.title}
        className="mb-10"
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {newsContent.articles.map((article, index) => (
          <NewsCard key={article.title} article={article} delay={delays[index]} />
        ))}
      </div>
    </Section>
  );
}
