import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  size?: "default" | "lg";
};

export function CtaLink({ href, children, className, external, size = "default" }: CtaLinkProps) {
  const classes = cn(
    "inline-flex items-center gap-2 font-montserrat font-bold uppercase text-forest transition-all hover:gap-3 hover:text-emerald",
    size === "default" && "text-[0.78rem] tracking-wider",
    size === "lg" && "text-[1.08rem] font-extrabold tracking-[0.08em]",
    className,
  );

  const iconClassName = size === "lg" ? "h-5 w-5" : "h-4 w-4";

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
        <Icon name="arrow" className={iconClassName} />
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      <Icon name="arrow" className={iconClassName} />
    </Link>
  );
}
