"use client";

import Link from "next/link";
import { CalendarPlus, ArrowRight, Star, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants/site";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[430px] sm:min-h-[480px] lg:min-h-[560px]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-600 to-brand-400" />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative z-10 flex items-center min-h-[430px] sm:min-h-[480px] lg:min-h-[560px] py-10 sm:py-14 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl text-white w-full"
        >
          {/* App-style Quick Trust Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md px-3 py-1 text-xs font-medium text-white border border-white/20">
              <Star size={13} className="fill-star text-star" />
              {siteConfig.googleRating} sao Google Maps
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md px-3 py-1 text-xs font-medium text-white border border-white/20">
              <Clock size={13} />
              Phục vụ 24/7
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md px-3 py-1 text-xs font-medium text-white border border-white/20">
              <MapPin size={13} />
              Hưng Thịnh, Đồng Nai
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-4 sm:mb-6"
          >
            Nụ Cười Tự Tin
            <br />
            Sức Khỏe Trọn Vẹn
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-white/85 mb-6 sm:mb-8 max-w-xl leading-relaxed"
          >
            Nha Khoa Thu Mảnh — Giải pháp chăm sóc răng miệng toàn diện với công
            nghệ hiện đại và đội ngũ bác sĩ giàu kinh nghiệm tại Đồng Nai.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-600 hover:bg-white/90 shadow-xl h-12 px-4 sm:px-6 text-sm sm:text-base rounded-xl font-semibold active:scale-[0.98]"
            >
              <Link href="/dat-lich">
                <CalendarPlus size={18} />
                Đặt Lịch Ngay
              </Link>
            </Button>
            <Link
              href="/dich-vu"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-white/40 bg-white/10 backdrop-blur-xs text-white hover:bg-white/15 h-12 px-4 sm:px-6 text-sm sm:text-base font-medium transition-all active:scale-[0.98]"
            >
              <span>Khám Phá Dịch Vụ</span>
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
