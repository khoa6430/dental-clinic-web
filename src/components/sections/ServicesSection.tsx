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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 group h-full">
                  <CardContent className="p-0">
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4 bg-brand-50 text-brand-500 group-hover:scale-110 transition-transform">
                      {Icon && <Icon size={28} />}
                    </div>
                    <h3 className="font-semibold mb-2 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg">
            <Link href="/dich-vu">
              Xem Tất Cả Dịch Vụ
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
