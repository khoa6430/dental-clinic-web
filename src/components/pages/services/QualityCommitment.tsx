"use client";

import { Shield, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const commitments = [
  {
    icon: Shield,
    title: "Bảo Hành Uy Tín",
    description:
      "Cam kết bảo hành dài hạn cho các dịch vụ, đảm bảo quyền lợi tối đa cho khách hàng",
  },
  {
    icon: Heart,
    title: "Dịch Vụ Tận Tâm",
    description:
      "Chăm sóc và theo dõi sát sao trước, trong và sau quá trình điều trị tại phòng khám",
  },
  {
    icon: Sparkles,
    title: "Công Nghệ Hiện Đại",
    description:
      "Sử dụng thiết bị tiên tiến nhất để mang lại hiệu quả điều trị tối ưu và không đau",
  },
];

export default function QualityCommitment() {
  return (
    <section className="section bg-muted/40">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <h2 className="section-title">Cam Kết Chất Lượng</h2>
          <p className="section-subtitle">
            Những điều bạn nhận được khi chọn chúng tôi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {commitments.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center px-4"
              >
                <div className="w-14 h-14 rounded-full bg-brand-600 text-white flex items-center justify-center mx-auto mb-4 shadow-md shadow-brand-600/25">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
