import type { ReactNode } from "react";
import { BrandSplashScreen } from "@/components/layout/BrandSplashScreen";
import { EnquiryModalProvider } from "@/components/layout/EnquiryModalProvider";
import { ThankYouModalProvider } from "@/components/layout/ThankYouModalProvider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
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
        {children}
        <Footer />
        <SideWidgets />
      </EnquiryModalProvider>
    </ThankYouModalProvider>
  );
}
