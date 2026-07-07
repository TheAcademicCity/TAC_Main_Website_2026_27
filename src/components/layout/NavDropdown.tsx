import Link from "next/link";
import type { NavItem } from "@/config/navigation";

type NavDropdownProps = {
  item: NavItem;
};

export function NavDropdown({ item }: NavDropdownProps) {
  if (!item.children?.length) return null;

  return (
    <li className="group relative">
      <Link
        href={item.href}
        className="relative flex items-center gap-1 px-3.5 py-2.5 text-[0.78rem] font-semibold uppercase tracking-wide text-white/82 transition-colors hover:text-white"
      >
        {item.label}
        <svg
          viewBox="0 0 24 24"
          className="h-3 w-3 stroke-current transition-transform group-hover:rotate-180"
          fill="none"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </Link>

      <div className="invisible absolute left-1/2 top-[calc(100%+12px)] z-[200] min-w-[200px] -translate-x-1/2 translate-y-2 border border-white/10 bg-[rgba(10,44,40,0.98)] opacity-0 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {item.children.map((child) => (
          <Link
            key={child.label}
            href={child.href}
            className="block border-b border-white/7 px-5 py-3 text-[0.76rem] font-semibold uppercase tracking-wider text-white/78 transition-colors last:border-b-0 hover:bg-white/8 hover:text-gold"
          >
            {child.label}
          </Link>
        ))}
      </div>
    </li>
  );
}
