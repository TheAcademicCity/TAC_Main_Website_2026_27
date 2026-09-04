import { cn } from "@/lib/utils";

type GmailLogoProps = {
  className?: string;
};

export function GmailLogo({ className }: GmailLogoProps) {
  return (
    <img
      src="/images/icons/gmail.webp"
      alt=""
      aria-hidden="true"
      className={cn("h-8 w-8 shrink-0 object-contain", className)}
    />
  );
}
