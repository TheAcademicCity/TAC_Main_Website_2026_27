import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

export function CtaLink({ href, children, className, external }: CtaLinkProps) {
  const classes = cn(
    "inline-flex items-center gap-2 font-montserrat text-[0.78rem] font-bold uppercase tracking-wider text-forest transition-all hover:gap-3 hover:text-emerald",
    className,
  );

  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
        <Icon name="arrow" className="h-4 w-4" />
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      <Icon name="arrow" className="h-4 w-4" />
    </Link>
  );
}
