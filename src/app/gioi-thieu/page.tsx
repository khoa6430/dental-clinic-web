import type { Metadata } from "next";
import AboutHero from "@/components/pages/about/AboutHero";
import OurStory from "@/components/pages/about/OurStory";
import CoreValues from "@/components/pages/about/CoreValues";
import DoctorProfile from "@/components/pages/about/DoctorProfile";
import Timeline from "@/components/pages/about/Timeline";
import MissionVision from "@/components/pages/about/MissionVision";
import AboutStats from "@/components/pages/about/AboutStats";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Về Chúng Tôi",
  description:
    "Nha Khoa Thu Mảnh - Hành trình 15 năm mang đến nụ cười tự tin cho hàng ngàn khách hàng. Tìm hiểu về đội ngũ bác sĩ, giá trị cốt lõi và lịch sử phát triển của chúng tôi.",
  alternates: {
    canonical: "/gioi-thieu",
  },
};

export default function GioiThieuPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <CoreValues />
      <DoctorProfile />
      <Timeline />
      <MissionVision />
      <AboutStats />
      <CTASection />
    </>
  );
}
