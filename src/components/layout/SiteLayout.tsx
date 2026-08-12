import type { ReactNode } from "react";
import { AdmissionsRibbon } from "@/components/layout/AdmissionsRibbon";
import { BrandSplashScreen } from "@/components/layout/BrandSplashScreen";
import { EnquiryModalProvider } from "@/components/layout/EnquiryModalProvider";
import { ThankYouModalProvider } from "@/components/layout/ThankYouModalProvider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { SideWidgets } from "@/components/layout/SideWidgets";
import { UtilityBar } from "@/components/layout/UtilityBar";

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <ThankYouModalProvider>
      <EnquiryModalProvider>
        <BrandSplashScreen />
        <UtilityBar />
        <Header />
        <AdmissionsRibbon />
        {children}
        <Footer />
        <MobileActionBar />
        <SideWidgets />
      </EnquiryModalProvider>
    </ThankYouModalProvider>
  );
}
