import Image from "next/image";
import { HomeLink } from "@/components/layout/HomeLink";
import { siteConfig } from "@/config/site";

type BrandLogoProps = {
  priority?: boolean;
  className?: string;
};

export function BrandLogo({ priority = false, className }: BrandLogoProps) {
  const { logo } = siteConfig.brand;

  return (
    <HomeLink
      href="/"
      className={className ?? "inline-flex shrink-0 items-center"}
      aria-label={`${siteConfig.legalName} — go to home`}
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        priority={priority}
        className="h-10 w-auto object-contain sm:h-11 md:h-12"
      />
    </HomeLink>
  );
}
