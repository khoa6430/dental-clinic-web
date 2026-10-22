import type { Metadata } from "next";
import ContactHero from "@/components/pages/contact/ContactHero";
import ContactInfoCards from "@/components/pages/contact/ContactInfoCards";
import ContactFormMap from "@/components/pages/contact/ContactFormMap";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Liên Hệ | Nha Khoa Thu Mảnh",
  description:
    "Liên hệ Nha Khoa Thu Mảnh tại W3RG+CR2, Số 11, Đường số 20, khu phố Hưng Thịnh, Đồng Nai. Mở cửa phục vụ 24/7. Hotline tư vấn miễn phí: 0941 829 179.",
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
