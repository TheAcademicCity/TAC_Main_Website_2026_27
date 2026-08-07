import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

type MapEmbedProps = {
  title: string;
  mapLabel: string;
  embedUrl: string;
  className?: string;
  iframeClassName?: string;
  headerClassName?: string;
  flexible?: boolean;
  hideHeader?: boolean;
};

export function MapEmbed({
  title,
  mapLabel,
  embedUrl,
  className,
  iframeClassName,
  headerClassName,
  flexible = false,
  hideHeader = false,
}: MapEmbedProps) {
  return (
    <div className={cn("flex flex-col overflow-hidden", flexible && "min-h-0 flex-1", className)}>
      {!hideHeader ? (
        <div
          className={cn(
            "flex shrink-0 items-center gap-2 border-b border-white/8 bg-white/4 px-4 py-3.5 sm:px-6 sm:py-5",
            flexible && "px-4 py-3",
            headerClassName,
          )}
        >
          <Icon name="pin" className="h-4 w-4 shrink-0 text-gold" />
          <h5 className="min-w-0 truncate font-montserrat text-[0.72rem] font-bold uppercase tracking-widest text-gold">
            {title}
          </h5>
          <span className="ml-auto shrink-0 text-[0.72rem] text-white/50 sm:text-[0.78rem]">
            {mapLabel}
          </span>
        </div>
      ) : null}
      <iframe
        src={embedUrl}
        title={`${title} map`}
        className={cn(
          "w-full border-0 saturate-[0.7] brightness-90",
          flexible
            ? "min-h-[220px] flex-1 max-lg:min-h-[240px] lg:min-h-[140px]"
            : "h-[200px] sm:h-[240px] lg:h-[280px]",
          iframeClassName,
        )}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
