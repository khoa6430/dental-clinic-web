"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, GraduationCap, Clock, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const credentials = [
  "Bác sĩ Răng Hàm Mặt – Đại học Y Dược TP.HCM",
  "15+ năm kinh nghiệm trong lĩnh vực nha khoa tổng hợp",
  "Chứng chỉ chuyên môn về Implant, niềng răng và răng sứ thẩm mỹ",
  "Tận tâm với từng khách hàng như người thân trong gia đình",
];

const highlights = [
  { icon: GraduationCap, label: "ĐH Y Dược TP.HCM" },
  { icon: Clock, label: "15+ Năm Kinh Nghiệm" },
  { icon: Award, label: "Chuyên Khoa Tổng Hợp" },
];

export default function DoctorProfile() {
  return (
    <section className="section bg-background">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-sm font-semibold text-primary bg-brand-50 px-3 py-1 rounded-full mb-4">
              Bác Sĩ Điều Hành
            </span>
            <h2 className="section-title">Người Sáng Lập Và Trực Tiếp Điều Trị</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          {/* Doctor Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border aspect-[3/4] max-w-sm mx-auto">
              <Image
                src="/images/doctor-thu-manh.png"
                alt="BS. Thu Mảnh - Bác Sĩ Chủ Nhiệm Nha Khoa Thu Mảnh"
                fill
                className="object-cover object-top"
              />
              {/* Bottom info overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-900/90 to-transparent px-6 pt-12 pb-6">
                <h3 className="text-xl font-bold text-white">BS. Thu Mảnh</h3>
                <p className="text-brand-200 text-sm">Bác Sĩ Chủ Nhiệm · Chuyên Khoa Tổng Hợp</p>
              </div>
            </div>

            {/* Floating highlight pills */}
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-brand-50 text-brand-700 text-xs font-medium px-3 py-2 rounded-full shadow-sm"
                >
                  <Icon size={14} />
                  {label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Badge variant="secondary" className="mb-4 text-primary font-semibold bg-brand-50">
              Bác Sĩ Chủ Nhiệm · Chuyên Khoa Tổng Hợp
            </Badge>
            <h3 className="text-3xl font-bold text-foreground mb-2">BS. Thu Mảnh</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Với hơn 15 năm gắn bó cùng nghề nha khoa, BS. Thu Mảnh không chỉ là người
              sáng lập mà còn trực tiếp điều trị cho từng khách hàng. Phong cách làm việc
              tỉ mỉ, kiên nhẫn và luôn lắng nghe đã giúp bà xây dựng được sự tin tưởng
              sâu sắc từ hàng nghìn bệnh nhân qua nhiều năm.
            </p>

            <ul className="space-y-4 mb-8">
              {credentials.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                </motion.li>
              ))}
            </ul>

            {/* Quote */}
            <blockquote className="border-l-4 border-primary pl-5 py-2 bg-brand-50 rounded-r-xl">
              <p className="text-sm italic text-brand-700 leading-relaxed">
                &ldquo;Mỗi nụ cười tôi giúp khách hàng có được là nguồn động lực lớn nhất. Tôi không
                chỉ điều trị răng – tôi trao lại sự tự tin cho từng người.&rdquo;
              </p>
              <p className="text-xs font-semibold text-brand-600 mt-2">— BS. Thu Mảnh</p>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
