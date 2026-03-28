"use client";

import { whyChooseUs } from "@/lib/constants/site";
import {
  UserCheck,
  MonitorCheck,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const iconMap: Record<string, LucideIcon> = {
  UserCheck,
  MonitorCheck,
  HeartHandshake,
};

export default function WhyChooseUsSection() {
  return (
    <section className="section bg-background">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Tại Sao Chọn Chúng Tôi?</h2>
          <p className="section-subtitle">
            Cam kết mang đến dịch vụ tốt nhất cho khách hàng
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/30 group h-full">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5 bg-brand-50 text-brand-500 group-hover:scale-110 transition-transform">
                      {Icon && <Icon size={32} />}
                    </div>
                    <h3 className="text-base font-semibold mb-3 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
