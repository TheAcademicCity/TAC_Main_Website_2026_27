import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

type MapEmbedProps = {
  title: string;
  mapLabel: string;
  embedUrl: string;
  iframeClassName?: string;
  headerClassName?: string;
  flexible?: boolean;
  hideHeader?: boolean;
};

export function MapEmbed({
  title,
  mapLabel,
  embedUrl,
  iframeClassName,
  headerClassName,
  flexible = false,
  hideHeader = false,
}: MapEmbedProps) {
  return (
    <div className={cn("flex flex-col", flexible && "min-h-0 flex-1")}>
      {!hideHeader ? (
        <div
          className={cn(
            "flex shrink-0 items-center gap-2 border-b border-white/8 bg-white/4 px-6 py-5",
            flexible && "px-4 py-3",
            headerClassName,
          )}
        >
          <Icon name="pin" className="h-4 w-4 shrink-0 text-gold" />
          <h5 className="font-montserrat text-[0.72rem] font-bold uppercase tracking-widest text-gold">
            {title}
          </h5>
          <span className="ml-auto text-[0.78rem] text-white/50">{mapLabel}</span>
        </div>
      ) : null}
      <iframe
        src={embedUrl}
        title={`${title} map`}
        className={cn(
          "w-full border-0 saturate-[0.7] brightness-90",
          flexible ? "min-h-[140px] flex-1" : "h-[280px]",
          iframeClassName,
        )}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
