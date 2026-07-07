import type { Metadata } from "next";
import { PageMain } from "@/components/layout/PageMain";
import { Container } from "@/components/ui/Container";

type PagePlaceholderProps = {
  title: string;
  description?: string;
};

export function createPageMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
  };
}

export function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <PageMain>
      <Container className="py-20">
        <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-emerald">
          Coming Soon
        </p>
        <h1 className="font-montserrat text-3xl font-extrabold text-forest-deep md:text-4xl">
          {title}
        </h1>
        {description ? <p className="mt-4 max-w-2xl text-slate">{description}</p> : null}
      </Container>
    </PageMain>
  );
}
