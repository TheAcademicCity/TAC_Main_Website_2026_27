import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  name: keyof typeof icons;
};

const icons = {
  arrow: (
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  download: (
    <>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </>
  ),
  phone: (
    <path d="M6 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21c5-5 7-8 7-11a7 7 0 0 0-14 0c0 3 2 6 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  zoom: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
    </>
  ),
  star: (
    <path d="m12 3 2.6 5.7 6.2.6-4.7 4.1 1.4 6.1L12 16.9 6.5 19.6l1.4-6.1L3.2 9.3l6.2-.6L12 3Z" />
  ),
  medallion: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="M8.5 13.5 7 20l5-2.5L17 20l-1.5-6.5" />
    </>
  ),
  ribbon: (
    <>
      <path d="M7 3h10a2 2 0 0 1 2 2v14l-5-3-5 3V5a2 2 0 0 1 2-2z" />
      <circle cx="12" cy="9" r="2" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1.25" />
    </>
  ),
  building: (
    <>
      <path d="M6 21V9l6-4 6 4v12" />
      <path d="M9 21v-6h6v6" />
      <path d="M9 11h1.5M12 11h1.5M15 11h1.5M9 14h1.5M12 14h1.5M15 14h1.5" />
    </>
  ),
  trophy: (
    <>
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M7 5H4v2a3 3 0 0 0 3 3M17 5h3v2a3 3 0 0 1-3 3" />
      <path d="M10 14v3M14 14v3M8 20h8M9 17h6" />
    </>
  ),
  home: (
    <>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </>
  ),
  medal: (
    <>
      <circle cx="12" cy="8" r="5" />
      <path d="M12 13v8M8 17h8" />
    </>
  ),
} as const;

export function Icon({ name, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {icons[name]}
    </svg>
  );
}

export function AwardIcon({ index }: { index: number }) {
  const names: Array<keyof typeof icons> = ["star", "medallion", "ribbon", "target", "building"];
  return <Icon name={names[index] ?? "star"} className="h-9 w-9 fill-gold stroke-gold" />;
}
