"use client";

import { treatmentProcess } from "@/lib/constants/site";
import { motion } from "framer-motion";

export default function ProcessSection() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Quy Trình Điều Trị</h2>
          <p className="section-subtitle">
            4 bước đơn giản để có nụ cười hoàn hảo
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {treatmentProcess.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="text-center"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold"
                style={{
                  background:
                    "linear-gradient(135deg, var(--primary-500), var(--primary-600))",
                  boxShadow: "0 8px 24px rgba(66, 133, 244, 0.3)",
                }}
              >
                {item.step}
              </div>
              <h3
                className="font-semibold mb-2"
                style={{ color: "var(--gray-800)" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm"
                style={{ color: "var(--gray-500)" }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
