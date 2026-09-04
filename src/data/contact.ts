import { siteConfig } from "@/config/site";
import { contactContent } from "@/data/home";
import type { ContactPageContent } from "@/types/contact";

export const contactPageContent = {
  label: "Get in touch",
  title: "Let's talk about your child's",
  titleHighlight: "future",
  links: [
    {
      type: "phone",
      label: "Call us",
      value: siteConfig.contact.phoneDisplay,
      sub: "Mon–Sun, 9 AM – 6 PM",
      href: `tel:${siteConfig.contact.phone}`,
    },
    {
      type: "email",
      label: "Email us",
      value: siteConfig.contact.email,
      sub: "Admissions enquiries",
      href: `mailto:${siteConfig.contact.email}`,
    },
  ],
  locations: contactContent.locations,
  form: {
    title: "Connect with us",
    description: "We'll get back to you within one working day.",
    note: "Your information is kept confidential.",
    submitLabel: "Send Message",
    successTitle: "Message received!",
    successDescription: `Our team will be in touch within one working day. Or call us anytime on ${siteConfig.contact.phoneDisplay}.`,
  },
} as const satisfies ContactPageContent;
