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
import { HashScrollOnLoad } from "@/components/layout/HashScrollOnLoad";

export const metadata: Metadata = {
  title: "Home",
  description:
    "India's first career-oriented boarding school — CBSE residential education in Bengaluru for Grades 5–12.",
};

export default function HomePage() {
  return (
    <>
      <HashScrollOnLoad />
      <main id="top" tabIndex={-1} className="outline-none">
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
    </>
  );
}
