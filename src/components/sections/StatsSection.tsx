"use client";

import { stats } from "@/lib/constants/site";
import { motion } from "framer-motion";

export default function StatsSection() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-brand-50 to-brand-100/80">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 lg:gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-2xl bg-white/90 backdrop-blur-xs border border-brand-200/60 p-4 sm:p-6 shadow-xs lg:bg-transparent lg:border-0 lg:shadow-none lg:p-0"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-brand-600">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
