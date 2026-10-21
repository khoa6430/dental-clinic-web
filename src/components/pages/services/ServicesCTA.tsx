"use client";

import Link from "next/link";
import { CalendarPlus, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants/site";

export default function ServicesCTA() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto text-white"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Cần Tư Vấn Thêm?
          </h2>
          <p className="text-white/85 mb-8 text-base">
            Liên hệ ngay với chúng tôi để được tư vấn miễn phí và đặt lịch hẹn
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-700 hover:bg-white/90 font-semibold h-12 px-6"
            >
              <Link href="/dat-lich">
                <CalendarPlus size={18} />
                Đặt Lịch Tư Vấn
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white font-semibold h-12 px-6"
            >
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                <Phone size={18} />
                Gọi Ngay: {siteConfig.phone}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
