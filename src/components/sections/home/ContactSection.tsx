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
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <RevealOnScroll>
          <SectionHeader
            label={contactContent.label}
            title={contactContent.title}
            description={contactContent.subtitle}
            labelTone="gold"
            titleLight
            reveal={false}
            className="[&_p]:text-white/62"
          />
          <div className="mt-7 flex flex-wrap gap-3">
            {contactContent.ctas.map((cta) => (
              <Button
                key={cta.label}
                href={cta.href}
                external={"external" in cta ? cta.external : false}
                variant={cta.variant === "gold" ? "gold" : "outline-white"}
              >
                {cta.label === "Call Admissions" ? (
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
        <div className="mt-10 grid border-t border-white/8 lg:grid-cols-2">
          {contactContent.locations.map((location) => (
            <MapEmbed
              key={location.title}
              title={location.title}
              mapLabel={location.mapLabel}
              embedUrl={location.mapEmbedUrl}
            />
          ))}
        </div>
      </RevealOnScroll>
    </Section>
  );
}
