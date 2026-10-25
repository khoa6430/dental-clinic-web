"use client";

import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants/site";
import { Card, CardContent } from "@/components/ui/card";

const contactCards = [
  {
    icon: MapPin,
    title: "Địa Chỉ Phòng Khám",
    primary: siteConfig.address,
    secondary: `Google Maps: ${siteConfig.plusCode} (${siteConfig.googleRating} ★)`,
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Phone,
    title: "Hotline & Zalo OA",
    primary: siteConfig.phone,
    secondary: "Hỗ trợ tư vấn miễn phí 24/7",
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    zaloHref: siteConfig.zaloUrl,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Mail,
    title: "Email Liên Hệ",
    primary: siteConfig.email,
    secondary: "Phản hồi nhanh trong 24 giờ",
    href: `mailto:${siteConfig.email}`,
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Clock,
    title: "Giờ Mở Cửa",
    primary: siteConfig.workingHours,
    secondary: "Mở cửa phục vụ 24/7 tất cả các ngày",
    color: "bg-amber-50 text-amber-600",
  },
];

export default function ContactInfoCards() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full border border-border/70 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center flex flex-col items-center h-full">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${item.color}`}
                    >
                      <Icon size={26} />
                    </div>
                    <h2 className="text-base font-bold text-foreground mb-2">
                      {item.title}
                    </h2>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-semibold text-brand-600 hover:underline mb-1"
                      >
                        {item.primary}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground mb-1">
                        {item.primary}
                      </p>
                    )}
                    {"zaloHref" in item && item.zaloHref && (
                      <a
                        href={item.zaloHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-1.5 px-3 py-1 rounded-full bg-[#0068FF]/10 text-[#0068FF] hover:bg-[#0068FF]/20 text-xs font-semibold transition-colors"
                      >
                        <MessageCircle size={13} />
                        Chat Zalo OA
                      </a>
                    )}
                    <p className="text-xs text-muted-foreground mt-auto pt-2">
                      {item.secondary}
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
