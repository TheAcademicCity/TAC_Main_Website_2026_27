import { contactPageContent } from "@/data/contact";
import { MapEmbed } from "@/components/sections/shared/MapEmbed";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

const iconStyles = {
  phone: "bg-emerald/20 text-emerald",
  email: "bg-gold/15 text-gold",
  location: "bg-white/10 text-white/70",
} as const;

const iconNames = {
  phone: "phone",
  email: "mail",
  location: "pin",
} as const;

const cardClassName =
  "flex flex-col gap-2.5 rounded-lg border border-white/12 bg-white/6 p-4 transition-colors hover:border-white/22 hover:bg-white/8";

export function ContactDetailsPanel() {
  const { links, address } = contactPageContent;

  return (
    <div className="flex h-full min-h-0 flex-col gap-2.5">
      <div className="grid shrink-0 grid-cols-1 gap-2.5 sm:grid-cols-2">
        {links.map((link) => {
          const content = (
            <>
              <div
                className={cn(
                  "grid h-10 w-10 shrink-0 place-items-center rounded-full",
                  iconStyles[link.type],
                )}
              >
                <Icon name={iconNames[link.type]} className="h-4 w-4" strokeWidth={2} />
              </div>
              <div className="min-w-0">
                <p className="font-montserrat text-[0.6rem] font-bold uppercase tracking-[0.12em] text-white/40">
                  {link.label}
                </p>
                <p className="text-[0.84rem] font-semibold leading-snug text-white">{link.value}</p>
                {"sub" in link && link.sub ? (
                  <p className="mt-1 text-[0.7rem] leading-snug text-white/40">{link.sub}</p>
                ) : null}
              </div>
            </>
          );

          if ("href" in link && link.href) {
            return (
              <a key={link.label} href={link.href} className={cardClassName}>
                {content}
              </a>
            );
          }

          return (
            <div key={link.label} className={cardClassName}>
              {content}
            </div>
          );
        })}
      </div>

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-lg border border-white/12 bg-white/6">
        <MapEmbed
          title="Campus map"
          mapLabel={address.mapLabel}
          embedUrl={address.mapEmbedUrl}
          flexible
          hideHeader
          iframeClassName="rounded-lg"
        />
      </div>
    </div>
  );
}
