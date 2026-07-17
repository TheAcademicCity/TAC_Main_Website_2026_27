import { useId } from "react";

type InstagramLogoProps = {
  className?: string;
};

export function InstagramLogo({ className }: InstagramLogoProps) {
  const gradientId = useId();

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFDC80" />
          <stop offset="25%" stopColor="#F77737" />
          <stop offset="50%" stopColor="#E1306C" />
          <stop offset="75%" stopColor="#C13584" />
          <stop offset="100%" stopColor="#833AB4" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill={`url(#${gradientId})`} />
      <rect
        x="4.5"
        y="4.5"
        width="15"
        height="15"
        rx="4"
        fill="none"
        stroke="white"
        strokeWidth="1.75"
      />
      <circle cx="12" cy="12" r="3.6" fill="none" stroke="white" strokeWidth="1.75" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="white" />
    </svg>
  );
}
