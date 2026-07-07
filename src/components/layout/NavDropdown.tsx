import Link from "next/link";
import type { NavItem } from "@/config/navigation";
import { navDropdownItemClasses, navTriggerClasses } from "@/components/layout/NavLink";

type NavDropdownProps = {
  item: NavItem;
};

export function NavDropdown({ item }: NavDropdownProps) {
  if (!item.children?.length) return null;

  return (
    <li className="group relative">
      <Link href={item.href} className={navTriggerClasses("group-hover:text-white")}>
        {item.label}
        <svg
          viewBox="0 0 24 24"
          className="h-3 w-3 stroke-current transition-transform duration-300 group-hover:rotate-180"
          fill="none"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </Link>

      {/* pt-3 bridges the gap so hover stays active while moving to the menu */}
      <div className="pointer-events-none absolute left-1/2 top-full z-[200] -translate-x-1/2 pt-3 opacity-0 invisible transition-opacity duration-300 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
        <div className="min-w-[200px] translate-y-1 border border-white/10 bg-[rgba(10,44,40,0.98)] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:translate-y-0">
          {item.children.map((child) => (
            <Link key={child.label} href={child.href} className={navDropdownItemClasses()}>
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </li>
  );
}
