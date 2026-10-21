"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Năm Kinh Nghiệm", desc: "Thành lập từ 2010" },
  { value: "3.000+", label: "Khách Hàng Hài Lòng", desc: "Tin tưởng & quay lại" },
  { value: "100%", label: "Tận Tâm Phục Vụ", desc: "Cam kết mỗi ca điều trị" },
];

export default function AboutStats() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-600 to-brand-500">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="text-5xl font-bold mb-2 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-white/90 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-white/60">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
