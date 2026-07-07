import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { SiteLink } from "@/components/layout/SiteLink";
import { cn } from "@/lib/utils";

type ButtonVariant = "gold" | "gold-outline" | "forest" | "outline-white" | "link";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<"button">, "children">;

const variantClasses: Record<ButtonVariant, string> = {
  gold: "bg-gold text-forest-deep hover:bg-[#e09d10] hover:-translate-y-0.5",
  "gold-outline": "border border-gold text-gold hover:bg-gold/10",
  forest: "bg-forest-deep text-white hover:bg-emerald",
  "outline-white":
    "border border-white/40 bg-transparent text-white hover:border-white hover:bg-white/8",
  link: "bg-transparent p-0 text-forest hover:text-emerald",
};

const baseClasses =
  "inline-flex items-center gap-2 font-montserrat text-[0.82rem] font-extrabold uppercase tracking-[0.08em] transition-all";

function isExternalHref(href: string) {
  return href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
}

export function Button({
  children,
  variant = "gold",
  href,
  className,
  external,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = cn(
    baseClasses,
    variantClasses[variant],
    variant !== "link" && "px-8 py-3.5",
    className,
  );

  if (href) {
    if (external || isExternalHref(href)) {
      return (
        <a
          href={href}
          className={classes}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }

    return (
      <SiteLink href={href} className={classes}>
        {children}
      </SiteLink>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
