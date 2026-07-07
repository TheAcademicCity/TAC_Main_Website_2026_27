import Link from "next/link";
import { mobileNavigation } from "@/config/navigation";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <nav
      className={cn(
        "fixed inset-0 z-[99] overflow-y-auto bg-forest-dark px-8 pb-12 pt-32 transition-transform duration-300 lg:hidden",
        open ? "translate-x-0" : "translate-x-full",
      )}
      aria-hidden={!open}
    >
      {mobileNavigation.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          onClick={onClose}
          className={cn(
            "block border-b border-white/10 py-4 font-montserrat text-xl font-semibold uppercase tracking-wide text-white",
            item.variant === "cta" &&
              "mt-6 inline-block border-0 bg-gold px-8 py-3 text-sm font-extrabold text-forest-deep",
          )}
        >
          {item.label}
          {item.variant === "cta" ? " →" : ""}
        </Link>
      ))}
    </nav>
  );
}
