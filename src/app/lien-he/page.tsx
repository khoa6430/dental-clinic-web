import type { Metadata } from "next";
import ContactHero from "@/components/pages/contact/ContactHero";
import ContactInfoCards from "@/components/pages/contact/ContactInfoCards";
import ContactFormMap from "@/components/pages/contact/ContactFormMap";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Liên Hệ | Nha Khoa Thu Mảnh",
  description:
    "Liên hệ Nha Khoa Thu Mảnh tại 123 Đường Lý Thường Kiệt, Quận 10, TP. Hồ Chí Minh. Hotline tư vấn miễn phí: 0901 234 567.",
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
