"use client";

import { CalendarPlus } from "lucide-react";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section
      className="py-20"
      style={{
        background:
          "linear-gradient(135deg, var(--primary-600) 0%, var(--primary-500) 100%)",
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sẵn Sàng Cho Nụ Cười Tự Tin?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Đặt lịch hẹn ngay hôm nay để được tư vấn miễn phí từ đội ngũ bác
            sĩ chuyên nghiệp
          </p>
          <Button
            href="/dat-lich"
            size="lg"
            className="bg-white !text-[var(--primary-600)] hover:bg-white/90 !shadow-xl"
          >
            <CalendarPlus size={18} />
            Đặt Lịch Ngay
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
