import type { NewsArticle } from "@/types";

type StrapiImageAttributes = {
  url: string;
  alternativeText?: string | null;
};

type StrapiSchoolUpdate = {
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

type StrapiSchoolUpdatesResponse = {
  data: StrapiSchoolUpdate[];
};

function getStrapiImageUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const baseUrl = process.env.STRAPI_URL?.replace(/\/$/, "");

  return `${baseUrl}${path}`;
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

export async function getSchoolUpdates(): Promise<NewsArticle[]> {
  const baseUrl = process.env.STRAPI_URL?.replace(/\/$/, "");
  const token = process.env.STRAPI_API_TOKEN;

  if (!baseUrl || !token) {
    console.error("Missing STRAPI_URL or STRAPI_API_TOKEN");
    return [];
  }

  const params = new URLSearchParams();

  params.set("populate", "image");
  params.set("publicationState", "live");
  params.set("sort[0]", "publishedAt:desc");
  params.set("pagination[page]", "1");
  params.set("pagination[pageSize]", "12");

  try {
    const response = await fetch(
      `${baseUrl}/api/school-updates?${params.toString()}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      },
    );

    if (!response.ok) {
      console.error(
        `School Updates API failed: ${response.status} ${response.statusText}`,
      );

      return [];
    }

    const result =
      (await response.json()) as StrapiSchoolUpdatesResponse;

    return result.data.map((item) => {
      const { date, heading, description, image } = item.attributes;

      const formattedDate = formatDate(date);

      const imageUrl = image?.data?.attributes.url
        ? getStrapiImageUrl(image.data.attributes.url)
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
    });
  } catch (error) {
    console.error("Unable to fetch School Updates:", error);

    return [];
  }
}