import { newsContent } from "@/data/home";

import { NewsPagination } from "@/components/sections/home/NewsPagination";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { Section } from "@/components/ui/Section";
import { getSchoolUpdates } from "@/lib/school-updates";

export async function NewsSection() {
  const strapiArticles = await getSchoolUpdates();

  const articles =
    strapiArticles.length > 0
      ? strapiArticles
      : newsContent.articles;

  return (
    <Section
      id="news"
      background="white"
      className="!pt-[clamp(28px,3.5vw,44px)] max-md:!px-0"
    >
      <div className="px-5 md:px-0">
        <SectionHeader
          label={newsContent.label}
          title={newsContent.title}
          className="mb-6 max-md:[&_h2]:text-[1.3rem] md:mb-10"
        />
      </div>

      <NewsPagination articles={articles} />
    </Section>
  );
}