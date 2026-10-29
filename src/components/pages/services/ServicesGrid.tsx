"use client";

import Link from "next/link";
import { detailedServices } from "@/lib/constants/site";
import {
  Sparkles,
  SmilePlus,
  Shield,
  Crown,
  Scissors,
  Heart,
  ShieldCheck,
  Smile,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  SmilePlus,
  Shield,
  Crown,
  Scissors,
  Heart,
  ShieldCheck,
  Smile,
};

export default function ServicesGrid() {
  return (
    <section className="section bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {detailedServices.map((service, index) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
              >
                <Card className="h-full border border-border/70 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300 flex flex-col">
                  <CardContent className="p-6 md:p-8 flex flex-col h-full">
                    {/* Header: Icon + Title + Description */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-foreground mb-2">
                          {service.title}
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Features list */}
                    <ul className="space-y-3 mb-6 flex-1">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2.5 text-sm text-foreground/90"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-emerald-500 shrink-0"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Separator className="mb-5" />
                    {/* Footer: Reference Price + Book Button */}
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <span className="block text-xs text-muted-foreground mb-0.5">
                          Giá tham khảo
                        </span>
                        <span className="text-lg font-bold text-brand-600">
                          {service.price}
                        </span>
                      </div>

                      <Button
                        asChild
                        className="bg-slate-900 hover:bg-slate-800 text-white px-5"
                      >
                        <Link href="/dat-lich">
                          Đặt Lịch
                        </Link>
                      </Button>
                    </div>
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
