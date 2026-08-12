import { contactContent } from "@/data/home";
import { ContactBox } from "@/components/sections/shared/ContactBox";
import { MapEmbed } from "@/components/sections/shared/MapEmbed";
import { SectionHeader } from "@/components/sections/shared/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Section } from "@/components/ui/Section";

export function ContactSection() {
  return (
    <Section id="contact" background="ink" className="max-md:!bg-off-white max-md:!text-navy">
      {/* Mobile contact blocks */}
      <div className="md:hidden">
        <p className="mb-2 font-outfit text-[0.62rem] font-bold uppercase tracking-[0.14em] text-emerald">
          Reach Us
        </p>
        {contactContent.locations.map((location) => (
          <div
            key={location.title}
            className="mb-3 rounded-2xl border border-off-white bg-white p-4 last:mb-0"
          >
            <h5 className="mb-1.5 font-montserrat text-[0.75rem] font-bold uppercase tracking-[0.04em] text-forest">
              {location.title}
            </h5>
            <p className="text-[0.78rem] leading-normal text-charcoal">{location.address}</p>
            {location.phone ? (
              <a
                href={location.phoneHref}
                className="mt-1.5 block text-[0.78rem] font-semibold text-forest"
              >
                {location.phone.replace(/\s*\(Admissions(?: Only)?\)/i, "")}
              </a>
            ) : null}
            {location.email ? (
              <a
                href={`mailto:${location.email}`}
                className="mt-1 block break-all text-[0.78rem] font-semibold text-forest"
              >
                {location.email}
              </a>
            ) : null}
            {location.mapEmbedUrl ? (
              <div className="mt-2.5 overflow-hidden rounded-xl">
                <MapEmbed
                  title={location.title}
                  mapLabel={location.mapLabel}
                  embedUrl={location.mapEmbedUrl}
                  hideHeader
                  iframeClassName="h-[110px] rounded-xl"
                />
              </div>
            ) : null}
          </div>
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <RevealOnScroll>
            <SectionHeader
              label={contactContent.label}
              title={contactContent.title}
              labelTone="gold"
              titleLight
              reveal={false}
            />
            <div className="mt-6 flex w-full flex-col gap-3 sm:mt-7 sm:w-auto sm:flex-row sm:flex-wrap">
              {contactContent.ctas.map((cta) => (
                <Button
                  key={cta.label}
                  href={cta.href}
                  external={"external" in cta ? cta.external : false}
                  variant={cta.variant === "gold" ? "gold" : "outline-white"}
                  className="w-full justify-center sm:w-auto"
                >
                  {cta.label === "Connect with us" ? (
                    <Icon name="phone" className="h-4 w-4" />
                  ) : (
                    <Icon name="whatsapp" className="h-4 w-4" />
                  )}
                  {cta.label}
                </Button>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={1}>
            <div className="flex flex-col gap-4">
              {contactContent.locations.map((location) => (
                <ContactBox
                  key={location.title}
                  title={location.title}
                  address={location.address}
                  phone={location.phone}
                  phoneHref={location.phoneHref}
                  email={location.email}
                />
              ))}
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll>
          <div className="mt-10 grid overflow-hidden rounded-lg border border-white/10 bg-white/5 lg:grid-cols-2">
            {contactContent.locations.map((location, index) => (
              <MapEmbed
                key={location.title}
                title={location.title}
                mapLabel={location.mapLabel}
                embedUrl={location.mapEmbedUrl}
                className={
                  index === 0 ? "border-b border-white/10 lg:border-b-0 lg:border-r" : undefined
                }
              />
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
