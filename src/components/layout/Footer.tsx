import { footerNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { SiteLink } from "@/components/layout/SiteLink";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#061c19] text-[0.87rem] text-white/55">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <BrandLogo />
          <p className="mt-4 max-w-[30ch] leading-relaxed text-white/45">{siteConfig.description}</p>
          <div className="mt-5 flex gap-2">
            {siteConfig.social.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="grid h-9 w-9 place-items-center bg-white/7 text-white/60 transition-colors hover:bg-gold hover:text-forest-deep"
              >
                <Icon name={social.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {footerNavigation.map((group) => (
          <div key={group.title}>
            <h5 className="mb-4 font-montserrat text-[0.78rem] font-extrabold uppercase tracking-[0.14em] text-white">
              {group.title}
            </h5>
            <ul className="flex flex-col gap-2.5">
              {group.links.map((link) => (
                <li key={link.label}>
                  <SiteLink href={link.href} className="transition-colors duration-200 hover:text-gold hover:underline hover:underline-offset-4 hover:decoration-gold/60">
                    {link.label}
                  </SiteLink>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h5 className="mb-4 font-montserrat text-[0.78rem] font-extrabold uppercase tracking-[0.14em] text-white">
            Reach Us
          </h5>
          <p className="mb-3">{siteConfig.contact.address}</p>
          <p className="mb-3">{siteConfig.contact.phoneDisplay}</p>
          <p>{siteConfig.contact.email}</p>
        </div>
      </Container>

      <Container className="border-t border-white/8 py-5">
        <span>© {year} {siteConfig.legalName}. All rights reserved.</span>
      </Container>
    </footer>
  );
}
