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
    <Section id="contact" background="ink">
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
    </Section>
  );
}
