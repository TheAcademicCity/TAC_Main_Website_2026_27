export type SiteImage = {
  /** Path under /public, e.g. /images/home/hero/poster.png */
  src: string;
  /** Remote URL used until the local asset is added */
  fallbackSrc: string;
  alt: string;
  /** True when the local asset is not yet available */
  isPlaceholder?: boolean;
};

export type SiteVideo = {
  src: string;
  fallbackSrc: string;
  poster: SiteImage;
  isPlaceholder?: boolean;
};
