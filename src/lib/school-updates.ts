import type { NewsArticle } from "@/types";

type StrapiImageAttributes = {
  url: string;
  alternativeText?: string | null;
};

/** Strapi v4 entry shape */
type StrapiSchoolUpdateV4 = {
  id: number;
  attributes: {
    date: string;
    heading: string;
    description: string;
    publishedAt: string;
    image?: {
      data?: {
        id: number;
        attributes: StrapiImageAttributes;
      } | null;
    };
  };
};

/** Strapi v5+ flattened entry shape */
type StrapiSchoolUpdateV5 = {
  id: number;
  date: string;
  heading: string;
  description: string;
  publishedAt: string;
  image?: {
    url?: string;
    alternativeText?: string | null;
  } | null;
};

type StrapiSchoolUpdatesResponse = {
  data: Array<StrapiSchoolUpdateV4 | StrapiSchoolUpdateV5>;
};

const FETCH_TIMEOUT_MS = 8_000;

function getStrapiImageUrl(path: string, baseUrl?: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const resolvedBase = baseUrl ?? process.env.STRAPI_URL?.replace(/\/$/, "");

  return `${resolvedBase}${path}`;
}

function formatDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);

  const formattedMonth = new Intl.DateTimeFormat("en-US", {
    month: "short",
    timeZone: "UTC",
  })
    .format(new Date(Date.UTC(year, month - 1, day)))
    .toUpperCase();

  return {
    day: String(day).padStart(2, "0"),
    month: formattedMonth,
  };
}

function isStrapiV4Entry(
  item: StrapiSchoolUpdateV4 | StrapiSchoolUpdateV5,
): item is StrapiSchoolUpdateV4 {
  return "attributes" in item && item.attributes != null;
}

function mapStrapiEntry(
  item: StrapiSchoolUpdateV4 | StrapiSchoolUpdateV5,
  baseUrl: string,
): NewsArticle {
  if (isStrapiV4Entry(item)) {
    const { date, heading, description, image } = item.attributes;
    const formattedDate = formatDate(date);
    const imageUrl = image?.data?.attributes.url
      ? getStrapiImageUrl(image.data.attributes.url, baseUrl)
      : "/images/home/news/1.png";

    return {
      title: heading,
      excerpt: description,
      day: formattedDate.day,
      month: formattedDate.month,
      image: {
        src: imageUrl,
        fallbackSrc: imageUrl,
        alt: image?.data?.attributes.alternativeText || heading,
        isPlaceholder: false,
      },
    };
  }

  const { date, heading, description, image } = item;
  const formattedDate = formatDate(date);
  const imageUrl = image?.url
    ? getStrapiImageUrl(image.url, baseUrl)
    : "/images/home/news/1.png";

  return {
    title: heading,
    excerpt: description,
    day: formattedDate.day,
    month: formattedDate.month,
    image: {
      src: imageUrl,
      fallbackSrc: imageUrl,
      alt: image?.alternativeText || heading,
      isPlaceholder: false,
    },
  };
}

async function fetchStrapiSchoolUpdates(
  baseUrl: string,
  token: string,
): Promise<NewsArticle[]> {
  const params = new URLSearchParams();

  params.set("populate", "image");
  params.set("publicationState", "live");
  params.set("sort[0]", "publishedAt:desc");
  params.set("pagination[page]", "1");
  params.set("pagination[pageSize]", "12");

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const response = await fetch(
      `${baseUrl}/api/school-updates?${params.toString()}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
        signal: controller.signal,
      },
    );

    if (!response.ok) {
      if (process.env.NODE_ENV === "development") {
        console.warn(
          `School Updates: Strapi responded ${response.status}. Using fallback articles.`,
        );
      }

      return [];
    }

    const result = (await response.json()) as StrapiSchoolUpdatesResponse;

    if (!Array.isArray(result.data)) {
      return [];
    }

    return result.data.map((item) => mapStrapiEntry(item, baseUrl));
  } finally {
    clearTimeout(timeoutId);
  }
}

export async function getSchoolUpdates(): Promise<NewsArticle[]> {
  const baseUrl = process.env.STRAPI_URL?.replace(/\/$/, "");
  const token = process.env.STRAPI_API_TOKEN;

  if (!baseUrl || !token) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "School Updates: STRAPI_URL or STRAPI_API_TOKEN is missing. Using fallback articles.",
      );
    }

    return [];
  }

  try {
    return await fetchStrapiSchoolUpdates(baseUrl, token);
  } catch {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "School Updates: Could not reach Strapi. Using fallback articles. Start Strapi or update STRAPI_URL in .env.local.",
      );
    }

    return [];
  }
}
