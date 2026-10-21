"use client";

import { Heart, Star, Award, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Heart,
    title: "Tận Tâm",
    description:
      "Đặt lợi ích và sức khỏe của khách hàng lên hàng đầu trong mọi quyết định điều trị.",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    icon: Star,
    title: "Chất Lượng",
    description:
      "Cam kết dịch vụ chất lượng cao với trang thiết bị hiện đại và vật liệu chuẩn quốc tế.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: Award,
    title: "Chuyên Nghiệp",
    description:
      "Đội ngũ bác sĩ được đào tạo bài bản, liên tục cập nhật kiến thức và kỹ thuật mới.",
    color: "text-brand-500",
    bg: "bg-brand-50",
  },
  {
    icon: Shield,
    title: "Uy Tín",
    description:
      "Xây dựng niềm tin qua hơn 15 năm phục vụ cộng đồng với hàng ngàn khách hàng hài lòng.",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
];

export default function CoreValues() {
  return (
    <section className="section bg-muted/40">
      <div className="container">
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-sm font-semibold text-primary bg-brand-50 px-3 py-1 rounded-full mb-4">
              Giá Trị Cốt Lõi
            </span>
            <h2 className="section-title">Những Điều Làm Nên Chúng Tôi</h2>
            <p className="section-subtitle">
              Bốn giá trị nền tảng định hướng mọi hành động của đội ngũ Nha Khoa Thu Mảnh
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group hover:border-primary/20">
                  <CardContent className="p-0">
                    <div
                      className={`w-16 h-16 ${value.bg} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}
                    >
                      <Icon size={32} className={value.color} />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
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
