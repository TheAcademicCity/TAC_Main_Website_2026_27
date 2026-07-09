import type { ReactNode } from "react";
import { EnquiryModalProvider } from "@/components/layout/EnquiryModalProvider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SideWidgets } from "@/components/layout/SideWidgets";
import { UtilityBar } from "@/components/layout/UtilityBar";

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <EnquiryModalProvider>
      <UtilityBar />
      <Header />
      {children}
      <Footer />
      <SideWidgets />
    </EnquiryModalProvider>
  );
}
