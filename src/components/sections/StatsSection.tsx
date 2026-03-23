"use client";

import { stats } from "@/lib/constants/site";
import { motion } from "framer-motion";

export default function StatsSection() {
  return (
    <section
      className="py-16"
      style={{
        background:
          "linear-gradient(135deg, var(--primary-50) 0%, var(--primary-100) 100%)",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: "var(--primary-600)" }}
              >
                {stat.value}
              </div>
              <div className="text-sm" style={{ color: "var(--gray-600)" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
