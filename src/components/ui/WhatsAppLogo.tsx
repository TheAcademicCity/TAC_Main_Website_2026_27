import { cn } from "@/lib/utils";

type WhatsAppLogoProps = {
  className?: string;
};

export function WhatsAppLogo({ className }: WhatsAppLogoProps) {
  return (
    <img
      src="/images/icons/whatsapp.png"
      alt=""
      aria-hidden="true"
      className={cn("h-7 w-7 shrink-0 object-contain", className)}
    />
  );
}
