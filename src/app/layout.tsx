import type { Metadata } from "next";
import { Montserrat, Outfit, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Academic City School | India's First Career-Oriented Boarding School",
    template: "%s | The Academic City School",
  },
  description:
    "The Academic City School - a CBSE residential boarding school in Nelamangala, Bengaluru for Grades 5–12, where academics, Indic values, sport and early career discovery shape future-ready children.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${outfit.variable} ${playfair.variable}`}
    >
      <body className="font-outfit antialiased">{children}</body>
    </html>
  );
}
