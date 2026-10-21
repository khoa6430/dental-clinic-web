import type { Metadata } from "next";
import BookingHero from "@/components/pages/booking/BookingHero";
import BookingFormSection from "@/components/pages/booking/BookingFormSection";
import ProcessSection from "@/components/sections/ProcessSection";

export const metadata: Metadata = {
  title: "Đặt Lịch Hẹn Khám | Nha Khoa Thu Mảnh",
  description:
    "Đặt lịch hẹn khám nha khoa trực tuyến nhanh chóng tại Nha Khoa Thu Mảnh. Miễn phí thăm khám và tư vấn cùng BS. Thu Mảnh.",
};

export default function DatLichPage() {
  return (
    <>
      <BookingHero />
      <BookingFormSection />
      <ProcessSection />
    </>
  );
}
