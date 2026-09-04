import { contactPageContent } from "@/data/contact";
import { MapEmbed } from "@/components/sections/shared/MapEmbed";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

const cardClassName =
  "flex flex-row items-center gap-3 rounded-lg border border-white/12 bg-white/6 p-3.5 transition-colors hover:border-white/22 hover:bg-white/8 max-md:rounded-2xl max-md:p-4 sm:p-4";

function ContactCard({
  icon,
  iconClassName,
  label,
  value,
  sub,
  href,
  compact = false,
  valueClassName,
  brightLabels = false,
}: {
  icon: "phone" | "pin" | "mail";
  iconClassName: string;
  label: string;
  value?: string;
  sub?: string;
  href?: string;
  compact?: boolean;
  valueClassName?: string;
  brightLabels?: boolean;
}) {
  const content = (
    <>
      <div
        className={cn(
          "grid shrink-0 place-items-center rounded-full",
          compact ? "h-9 w-9" : "h-10 w-10",
          iconClassName,
        )}
      >
        <Icon name={icon} className={cn("h-4 w-4", compact && "h-3.5 w-3.5")} strokeWidth={2} />
      </div>
      <div className="min-w-0 flex flex-col gap-px">
        <p
          className={cn(
            brightLabels
              ? "font-montserrat text-[0.84rem] font-semibold leading-snug text-white max-md:font-outfit"
              : "font-montserrat text-[0.6rem] font-bold uppercase tracking-[0.12em] text-white/40 max-md:font-outfit max-md:text-emerald",
          )}
        >
          {label}
        </p>
        {value ? (
          <p
            className={cn(
              "font-semibold leading-none text-white max-md:font-outfit",
              compact ? "text-[0.8rem]" : "break-words text-[0.84rem]",
              valueClassName,
            )}
          >
            {value}
          </p>
        ) : null}
        {sub ? (
          <p
            className={cn(
              "leading-tight max-md:font-outfit",
              brightLabels
                ? "text-[0.7rem] text-white"
                : cn(
                    "text-white/40 max-md:text-white/50",
                    compact ? "text-[0.65rem]" : "text-[0.7rem]",
                  ),
            )}
          >
            {sub}
          </p>
        ) : null}
      </div>
    </>
  );

  const cardCls = cn(cardClassName, compact && "p-3 sm:p-3", "h-auto w-full");

  if (href) {
    return (
      <a href={href} className={cardCls}>
        {content}
      </a>
    );
  }

  return <div className={cardCls}>{content}</div>;
}

export function ContactDetailsPanel() {
  const { links, locations } = contactPageContent;
  const hours = "Mon–Sun, 9 AM – 6 PM";

  const linkStyles = {
    phone: "bg-emerald/20 text-emerald",
    email: "bg-gold/15 text-gold",
  } as const;
  const phoneLink = links.find((link) => link.type === "phone");
  const emailLink = links.find((link) => link.type === "email");

  return (
    <div className="flex w-full flex-col gap-3 lg:h-full lg:min-h-0">
      <div className="grid shrink-0 grid-cols-1 gap-3 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        {phoneLink ? (
          <ContactCard
            icon="phone"
            iconClassName={linkStyles.phone}
            label={phoneLink.label}
            value={phoneLink.value}
            sub={phoneLink.sub}
            href={phoneLink.href}
            compact
          />
        ) : null}
        {emailLink ? (
          <ContactCard
            icon="mail"
            iconClassName={linkStyles.email}
            label={emailLink.label}
            value={emailLink.value}
            sub={emailLink.sub}
            href={emailLink.href}
            valueClassName="whitespace-nowrap text-[0.78rem] sm:text-[0.84rem]"
          />
        ) : null}
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:min-h-0 lg:flex-1">
        {locations.map((location) => (
          <div key={location.title} className="flex flex-col gap-3 lg:min-h-0 lg:flex-1">
            <ContactCard
              icon="pin"
              iconClassName="bg-white/10 text-white/70"
              label={location.title}
              sub={`Open ${hours}`}
              brightLabels
            />
            <div className="overflow-hidden rounded-lg border border-white/12 bg-white/6 max-md:min-h-[180px] max-md:rounded-2xl lg:flex lg:min-h-0 lg:flex-1 lg:flex-col">
              <MapEmbed
                title={location.title}
                mapLabel={location.mapLabel}
                embedUrl={location.mapEmbedUrl}
                hideMapLabel
                flexible
                headerClassName="px-3 py-2 sm:px-4 sm:py-2.5"
                iframeClassName="h-[160px] max-md:rounded-b-2xl sm:h-[180px] lg:min-h-0 lg:flex-1"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
