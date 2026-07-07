import { Icon } from "@/components/ui/Icon";

type MapEmbedProps = {
  title: string;
  mapLabel: string;
  embedUrl: string;
};

export function MapEmbed({ title, mapLabel, embedUrl }: MapEmbedProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 border-b border-white/8 bg-white/4 px-6 py-5">
        <Icon name="pin" className="h-4 w-4 shrink-0 text-gold" />
        <h5 className="font-montserrat text-[0.72rem] font-bold uppercase tracking-widest text-gold">
          {title}
        </h5>
        <span className="ml-auto text-[0.78rem] text-white/50">{mapLabel}</span>
      </div>
      <iframe
        src={embedUrl}
        title={`${title} map`}
        className="h-[280px] w-full border-0 saturate-[0.7] brightness-90"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
