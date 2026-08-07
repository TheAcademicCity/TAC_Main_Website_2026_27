import { siteConfig } from "@/config/site";
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
      type: "location",
      label: "Campus",
      value: "Nelamangala, Bengaluru – 562123",
      sub: "Open Mon–Sun, 9 AM – 6 PM",
    },
  ],
  address: {
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.25!2d77.3986306!3d13.0571618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae254ef3b18d5b%3A0xda079052c6df77cc!2sThe%20Academic%20City%20School%20(CBSE%20Residential%20School)!5e1!3m2!1sen!2sin!4v1741459200",
    mapLabel: "Nelamangala, KA 562123",
  },
  form: {
    title: "Connect with us",
    description: "We'll get back to you within one working day.",
    note: "Your information is kept confidential.",
    submitLabel: "Send Message",
    successTitle: "Message received!",
    successDescription: `Our team will be in touch within one working day. Or call us anytime on ${siteConfig.contact.phoneDisplay}.`,
  },
} as const satisfies ContactPageContent;
