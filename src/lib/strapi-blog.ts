import type { SiteImage } from "@/types/images";

type StrapiImageAttributes = {
  url: string;
  alternativeText?: string | null;
};

/** Strapi v4 entry shape */
type StrapiBlogV4 = {
  id: number;
  attributes: {
    title: string;
    slug: string;
    description: string;
    publishedAt: string;
    metaTitle?: string | null;
    metaDescription?: string | null;
    structuredSchema?: unknown;
    meta_canonical_url?: string | null;
    image?: {
      data?: {
        id: number;
        attributes: StrapiImageAttributes;
      } | null;
    };
  };
};

/** Strapi v5+ flattened entry shape */
type StrapiBlogV5 = {
  id: number;
  title: string;
  slug: string;
  description: string;
  publishedAt: string;
  metaTitle?: string | null;
  metaDescription?: string | null;
  structuredSchema?: unknown;
  meta_canonical_url?: string | null;
  image?: {
    url?: string;
    alternativeText?: string | null;
  } | null;
};

type StrapiBlogEntry = StrapiBlogV4 | StrapiBlogV5;

type StrapiBlogsResponse = {
  data: StrapiBlogEntry[];
};

export type BlogPostDetail = {
  id: number;
  title: string;
  slug: string;
  descriptionHtml: string;
  metaTitle: string | null;
  metaDescription: string | null;
  canonicalUrl: string | null;
  structuredSchema: unknown | null;
  image: SiteImage | null;
  publishedAt: string;
};

const FETCH_TIMEOUT_MS = 8_000;
const FALLBACK_IMAGE = "/images/blog/post-digital.png";

function getStrapiImageUrl(path: string, baseUrl: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  return `${baseUrl}${path}`;
}

function isV4Entry(item: StrapiBlogEntry): item is StrapiBlogV4 {
  return "attributes" in item && item.attributes != null;
}

function mapEntry(item: StrapiBlogEntry, baseUrl: string): BlogPostDetail {
  const fields = isV4Entry(item) ? item.attributes : item;
  const imageData = isV4Entry(item) ? item.attributes.image?.data?.attributes : item.image;

  const image: SiteImage | null = imageData?.url
    ? {
        src: getStrapiImageUrl(imageData.url, baseUrl),
        fallbackSrc: getStrapiImageUrl(imageData.url, baseUrl),
        alt: imageData.alternativeText || fields.title,
        isPlaceholder: false,
      }
    : null;

  return {
    id: item.id,
    title: fields.title,
    slug: fields.slug,
    descriptionHtml: fields.description,
    metaTitle: fields.metaTitle || null,
    metaDescription: fields.metaDescription || null,
    canonicalUrl: fields.meta_canonical_url || null,
    structuredSchema: fields.structuredSchema ?? null,
    image,
    publishedAt: fields.publishedAt,
  };
}

async function strapiFetch(path: string): Promise<StrapiBlogsResponse | null> {
  const baseUrl = process.env.STRAPI_URL?.replace(/\/$/, "");
  const token = process.env.STRAPI_API_TOKEN;

  if (!baseUrl || !token) {
    return null;
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const response = await fetch(`${baseUrl}${path}`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
      signal: controller.signal,
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as StrapiBlogsResponse;
  } catch {
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}

export async function getAllBlogPosts(): Promise<BlogPostDetail[]> {
  const baseUrl = process.env.STRAPI_URL?.replace(/\/$/, "") ?? "";
  const params = new URLSearchParams();
  params.set("populate", "image");
  params.set("publicationState", "live");
  params.set("sort[0]", "publishedAt:desc");
  params.set("pagination[pageSize]", "100");

  const result = await strapiFetch(`/api/blogs?${params.toString()}`);

  if (!result || !Array.isArray(result.data)) {
    return [];
  }

  return result.data.map((item) => mapEntry(item, baseUrl));
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPostDetail | null> {
  const baseUrl = process.env.STRAPI_URL?.replace(/\/$/, "") ?? "";
  const params = new URLSearchParams();
  params.set("populate", "image");
  params.set("publicationState", "live");
  params.set("filters[slug][$eq]", slug);

  const result = await strapiFetch(`/api/blogs?${params.toString()}`);

  if (!result || !Array.isArray(result.data) || result.data.length === 0) {
    return null;
  }

  return mapEntry(result.data[0], baseUrl);
}

export const blogFallbackImage = FALLBACK_IMAGE;
