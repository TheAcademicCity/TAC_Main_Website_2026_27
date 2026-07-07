import type { SiteImage } from "@/types/images";

/** Create an image reference with a local path and remote fallback. */
export function createImage(
  localPath: string,
  fallbackSrc: string,
  alt: string,
  isPlaceholder = true,
): SiteImage {
  return {
    src: localPath,
    fallbackSrc,
    alt,
    isPlaceholder,
  };
}

/** Resolve the initial image source (prefer local). */
export function getImageSrc(image: SiteImage, useFallback = false): string {
  return useFallback ? image.fallbackSrc : image.src;
}
