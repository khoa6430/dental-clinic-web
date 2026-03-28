"use client";

import Link from "next/link";
import { CalendarPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-600 to-brand-500">
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
            asChild
            size="lg"
            className="bg-white text-brand-600 hover:bg-white/90 shadow-xl h-12 px-8 text-base"
          >
            <Link href="/dat-lich">
              <CalendarPlus size={18} />
              Đặt Lịch Ngay
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
