import { footerNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { SiteLink } from "@/components/layout/SiteLink";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-[0.87rem] text-mist md:bg-[#061c19] md:text-white/55">
      {/* Mobile mock footer */}
      <div className="px-5 pb-6 pt-8 md:hidden">
        <p className="font-montserrat text-[1.05rem] font-extrabold text-white">TACS</p>
        <p className="mt-2 max-w-[36ch] text-[0.72rem] leading-relaxed text-light-grey text-[#c3c3c3]">
          {siteConfig.description}
        </p>
        <div className="mt-4 flex gap-2.5">
          {siteConfig.social.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="grid h-[30px] w-[30px] place-items-center rounded-full bg-white/8 text-mist"
            >
              <Icon name={social.icon} className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
        <div className="mt-5 flex gap-6">
          {footerNavigation.map((group) => (
            <div key={group.title}>
              <h5 className="mb-2 font-outfit text-[0.68rem] font-bold uppercase tracking-[0.06em] text-gold">
                {group.title}
              </h5>
              <ul className="flex flex-col gap-1.5">
                {group.links.slice(0, 4).map((link) => (
                  <li key={link.label}>
                    <SiteLink href={link.href} className="text-[0.72rem] text-mist">
                      {link.label}
                    </SiteLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-5 border-t border-white/10 pt-3.5 text-[0.62rem] text-[#999]">
          © {year} {siteConfig.legalName}. All rights reserved.
        </p>
      </div>

      {/* Desktop footer */}
      <div className="hidden md:block">
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
                    <SiteLink
                      href={link.href}
                      className="transition-colors duration-200 hover:text-gold hover:underline hover:underline-offset-4 hover:decoration-gold/60"
                    >
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
          <span>
            © {year} {siteConfig.legalName}. All rights reserved.
          </span>
        </Container>
      </div>
    </footer>
  );
}
