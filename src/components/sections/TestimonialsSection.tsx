"use client";

import { testimonials } from "@/lib/constants/site";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  return (
    <section className="section bg-muted/50">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Khách Hàng Nói Gì Về Chúng Tôi</h2>
          <p className="section-subtitle">
            Những phản hồi chân thực từ khách hàng (Đánh giá 4.7/5 ★ trên Google
            Maps)
          </p>
        </div>

        {/* Mobile/Tablet portrait swipe carousel -> Desktop 3-col grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-3 -mx-4 px-4 no-scrollbar md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0 md:mx-0 md:px-0 max-w-5xl md:mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              className="min-w-[82vw] sm:min-w-[320px] md:min-w-0 snap-center flex"
            >
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300 h-full w-full rounded-2xl">
                <CardContent className="p-0 flex flex-col flex-1">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-star text-star"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-sm leading-relaxed mb-5 italic text-muted-foreground">
                    {item.content}
                  </p>

                  {/* Author aligned to bottom */}
                  <p className="text-sm font-semibold text-foreground mt-auto pt-2 border-t border-border/50">
                    {item.name}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-2 md:hidden">
          Vuốt ngang để xem thêm đánh giá →
        </p>
      </div>
    </section>
  );
}
