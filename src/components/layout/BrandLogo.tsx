import Image from "next/image";
import { HomeLink } from "@/components/layout/HomeLink";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  priority?: boolean;
  className?: string;
  /** `light` = white logo on dark bg (default). `dark` = colour logo on light bg. */
  variant?: "light" | "dark" | "responsive";
};

export function BrandLogo({
  priority = false,
  className,
  variant = "light",
}: BrandLogoProps) {
  const { logo, logoDark } = siteConfig.brand;

  if (variant === "responsive") {
    return (
      <HomeLink
        href="/"
        className={cn("inline-flex shrink-0 items-center", className)}
        aria-label={`${siteConfig.legalName} - go to home`}
      >
        <Image
          src={logoDark.src}
          alt={logoDark.alt}
          width={logoDark.width}
          height={logoDark.height}
          priority={priority}
          className="h-8 w-auto object-contain md:hidden"
        />
        <Image
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          priority={priority}
          className="hidden h-10 w-auto object-contain sm:h-11 md:block md:h-12"
        />
      </HomeLink>
    );
  }

  const asset = variant === "dark" ? logoDark : logo;

  return (
    <HomeLink
      href="/"
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label={`${siteConfig.legalName} - go to home`}
    >
      <Image
        src={asset.src}
        alt={asset.alt}
        width={asset.width}
        height={asset.height}
        priority={priority}
        className="h-10 w-auto object-contain sm:h-11 md:h-12"
      />
    </HomeLink>
  );
}
