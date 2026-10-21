import type { Metadata } from "next";
import ServicesHero from "@/components/pages/services/ServicesHero";
import ServicesGrid from "@/components/pages/services/ServicesGrid";
import QualityCommitment from "@/components/pages/services/QualityCommitment";
import ServicesCTA from "@/components/pages/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Dịch Vụ Nha Khoa | Nha Khoa Thu Mảnh",
  description:
    "Khám phá các dịch vụ chăm sóc và thẩm mỹ răng miệng toàn diện tại Nha Khoa Thu Mảnh: Tẩy trắng răng, Niềng răng Invisalign, Cấy ghép Implant, Bọc răng sứ cao cấp.",
};

export default function DichVuPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <QualityCommitment />
      <ServicesCTA />
    </>
  );
}
