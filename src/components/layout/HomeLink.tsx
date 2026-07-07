"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";
import { isHomeHref, smoothScrollToTop } from "@/lib/scroll";

type HomeLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href?: string;
};

export function HomeLink({ href = "/", onClick, ...props }: HomeLinkProps) {
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (pathname === "/" && isHomeHref(href)) {
      event.preventDefault();
      smoothScrollToTop();
    }
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
