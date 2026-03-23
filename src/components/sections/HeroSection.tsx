"use client";

import { CalendarPlus, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "560px" }}>
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, var(--primary-600) 0%, var(--primary-500) 50%, var(--primary-400) 100%)",
        }}
      />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative z-10 flex items-center" style={{ minHeight: "560px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl text-white"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-6"
          >
            Nụ Cười Tự Tin
            <br />
            Sức Khỏe Trọn Vẹn
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-white/85 mb-8 max-w-xl leading-relaxed"
          >
            Nha Khoa Thu Mảnh - Nơi mang đến giải pháp chăm sóc răng miệng
            toàn diện với công nghệ hiện đại và đội ngũ bác sĩ giàu kinh
            nghiệm.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button href="/dat-lich" size="lg" variant="primary" className="bg-white !text-[var(--primary-600)] hover:bg-white/90 !shadow-xl">
              <CalendarPlus size={18} />
              Đặt Lịch Ngay
            </Button>
            <Button href="/dich-vu" size="lg" variant="secondary" className="!border-white/40 !text-white hover:!bg-white/10">
              Khám Phá Dịch Vụ
              <ArrowRight size={18} />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
