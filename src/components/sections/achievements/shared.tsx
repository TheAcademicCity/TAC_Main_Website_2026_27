import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PersonAvatarProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "h-9 w-9 [&_svg]:h-4 [&_svg]:w-4",
  md: "h-12 w-12 [&_svg]:h-5 [&_svg]:w-5",
  lg: "h-16 w-16 [&_svg]:h-7 [&_svg]:w-7",
};

export function PersonAvatar({ className, size = "md" }: PersonAvatarProps) {
  return (
    <div
      className={cn(
        "grid shrink-0 place-items-center rounded-full bg-white/10 text-white/35",
        sizeClasses[size],
        className,
      )}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    </div>
  );
}

type ChapterHeaderProps = {
  number: string;
  label: string;
  title: string;
  description: string;
  className?: string;
};

export function ChapterHeader({ number, label, title, description, className }: ChapterHeaderProps) {
  return (
    <div className={cn("mb-12 grid items-center gap-6 md:grid-cols-[auto_1fr] md:gap-10", className)}>
      <div
        aria-hidden
        className="font-montserrat text-[clamp(3rem,8vw,5rem)] font-extrabold italic leading-none text-forest/8"
      >
        {number}
      </div>
      <div>
        <span className="mb-3 inline-flex items-center gap-2.5 font-montserrat text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-emerald before:h-0.5 before:w-7 before:bg-gold before:content-['']">
          {label}
        </span>
        <h2 className="font-montserrat text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold leading-tight text-forest-deep">
          {title}
        </h2>
        <p className="mt-2 max-w-[58ch] text-[0.96rem] leading-relaxed text-slate">{description}</p>
      </div>
    </div>
  );
}

const badgeToneClasses = {
  violet: "bg-violet/8 text-violet",
  gold: "bg-gold/12 text-gold-dark",
  green: "bg-emerald/10 text-emerald",
  emerald: "bg-emerald/10 text-emerald",
} as const;

export function AchievementBadge({
  children,
  tone,
}: {
  children: ReactNode;
  tone: keyof typeof badgeToneClasses;
}) {
  return (
    <span
      className={cn(
        "inline-block rounded-sm px-2.5 py-1 font-montserrat text-[0.62rem] font-bold uppercase tracking-[0.12em]",
        badgeToneClasses[tone],
      )}
    >
      {children}
    </span>
  );
}
