"use client";

import Image from "next/image";
import { useState } from "react";
import type { SiteImage } from "@/types/images";
import { cn } from "@/lib/utils";

type ImageWithFallbackProps = {
  image: SiteImage;
  className?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  objectFit?: "cover" | "contain";
};

export function ImageWithFallback({
  image,
  className,
  fill = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  objectFit = "cover",
}: ImageWithFallbackProps) {
  const [useFallback, setUseFallback] = useState(false);
  const src = useFallback ? image.fallbackSrc : image.src;
  const isRemote = src.startsWith("http");
  const isSvg = src.endsWith(".svg");
  const isLocalPublicImage = src.startsWith("/images/");

  const sharedProps = {
    alt: image.alt,
    className: cn(
      objectFit === "cover" ? "object-cover" : "object-contain",
      className,
    ),
    onError: () => {
      if (!useFallback && image.isPlaceholder !== false && image.fallbackSrc) {
        setUseFallback(true);
      }
    },
    "data-placeholder": image.isPlaceholder ? "true" : undefined,
    unoptimized: isRemote || isSvg || isLocalPublicImage,
  };

  if (fill) {
    return (
      <Image {...sharedProps} src={src} fill sizes={sizes} priority={priority} alt={image.alt} />
    );
  }

  return (
    <Image
      {...sharedProps}
      src={src}
      width={1200}
      height={800}
      sizes={sizes}
      priority={priority}
      alt={image.alt}
    />
  );
}
