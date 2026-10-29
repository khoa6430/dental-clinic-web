import type { Metadata } from "next";
import ContactHero from "@/components/pages/contact/ContactHero";
import ContactInfoCards from "@/components/pages/contact/ContactInfoCards";
import ContactFormMap from "@/components/pages/contact/ContactFormMap";
import CTASection from "@/components/sections/CTASection";

import { siteConfig } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Liên Hệ",
  description: `Liên hệ ${siteConfig.name} tại ${siteConfig.plusCode}, ${siteConfig.address}. Mở cửa phục vụ 24/7. Hotline tư vấn miễn phí: ${siteConfig.phone}.`,
  alternates: {
    canonical: "/lien-he",
  },
};

export default function LienHePage() {
  return (
    <>
      <ContactHero />
      <ContactInfoCards />
      <ContactFormMap />
      <CTASection />
    </>
  );
}
