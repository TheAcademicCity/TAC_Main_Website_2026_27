import type { Metadata } from "next";
import {
  AcademicsSection,
  AdmissionsSection,
  AwardsSection,
  BrochureBanner,
  CampusSliderSection,
  ContactSection,
  FoundersSection,
  GallerySection,
  HeroSection,
  NewsSection,
  PillarsSection,
  StatsBar,
} from "@/components/sections/home";

export const metadata: Metadata = {
  title: "Home",
  description:
    "India's first career-oriented boarding school — CBSE residential education in Bengaluru for Grades 5–12.",
};

export default function HomePage() {
  return (
    <main id="top">
      <HeroSection />
      <StatsBar />
      <PillarsSection />
      <BrochureBanner />
      <AcademicsSection />
      <GallerySection />
      <AwardsSection />
      <CampusSliderSection />
      <FoundersSection />
      <NewsSection />
      <AdmissionsSection />
      <ContactSection />
    </main>
  );
}
