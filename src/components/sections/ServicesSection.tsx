"use client";

import Link from "next/link";
import { services } from "@/lib/constants/site";
import {
  Sparkles,
  SmilePlus,
  Puzzle,
  Crown,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  SmilePlus,
  Puzzle,
  Crown,
};

export default function ServicesSection() {
  return (
    <section className="section bg-muted/50">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Dịch Vụ Của Chúng Tôi</h2>
          <p className="section-subtitle">
            Giải pháp toàn diện cho sức khỏe răng miệng
          </p>
        </div>

        {/* Mobile horizontal app-style snap carousel -> Tablet 2-col -> Desktop 4-col */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-3 -mx-4 px-4 no-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:overflow-visible sm:pb-0 sm:mx-0 sm:px-0 max-w-5xl sm:mx-auto">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="min-w-[250px] sm:min-w-0 snap-center flex"
              >
                <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 group h-full w-full rounded-2xl">
                  <CardContent className="p-0 flex flex-col flex-1 items-center">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-brand-50 text-brand-500 group-hover:scale-110 transition-transform">
                      {Icon && <Icon size={28} />}
                    </div>
                    <h3 className="font-semibold mb-2 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <span className="mt-auto inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
                      {service.price}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-2 sm:hidden">
          Vuốt ngang để xem thêm dịch vụ →
        </p>

        <div className="text-center mt-6 sm:mt-10">
          <Button asChild size="lg" className="rounded-xl">
            <Link href="/dich-vu">
              Xem Tất Cả 8 Dịch Vụ
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
