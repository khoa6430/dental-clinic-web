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
            Những phản hồi chân thực từ khách hàng
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-0">
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

                  {/* Author */}
                  <p className="text-sm font-semibold text-foreground">
                    {item.name}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
