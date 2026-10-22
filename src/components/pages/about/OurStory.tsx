"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Thành lập năm 2010 với sứ mệnh mang lại nụ cười khỏe mạnh cho cộng đồng",
  "Không ngừng đầu tư công nghệ hiện đại từ các thương hiệu uy tín thế giới",
  "Đội ngũ bác sĩ được đào tạo bài bản trong nước và quốc tế",
  "Hơn 3.000 khách hàng hài lòng sau 15 năm hoạt động",
];

export default function OurStory() {
  return (
    <section className="section bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold text-primary bg-brand-50 px-3 py-1 rounded-full mb-4">
              Câu Chuyện Của Chúng Tôi
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-snug">
              Hành Trình 15 Năm Vì{" "}
              <span className="text-primary">Sức Khỏe Răng Miệng</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nha Khoa Thu Mảnh được thành lập năm 2010 bởi BS. Thu Mảnh với mong muốn
              mang đến dịch vụ nha khoa chất lượng cao, tận tâm và đáng tin cậy cho
              người dân khu phố Hưng Thịnh, tỉnh Đồng Nai và khu vực lân cận.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Trải qua 15 năm phát triển, chúng tôi tự hào là địa chỉ nha khoa được
              hàng ngàn khách hàng tin tưởng – không chỉ nhờ chuyên môn vững vàng mà
              còn nhờ sự tận tâm, chân thành trong từng ca điều trị.
            </p>

            <ul className="space-y-3">
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <CheckCircle
                    size={18}
                    className="text-primary shrink-0 mt-0.5"
                  />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/images/clinic-interior.png"
                alt="Nội thất phòng khám Nha Khoa Thu Mảnh"
                fill
                className="object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg px-5 py-4">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-xs text-muted-foreground">Năm Kinh Nghiệm</div>
              </div>
            </div>
            {/* Decorative dot grid */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-20 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle, var(--brand-500) 1.5px, transparent 1.5px)",
                backgroundSize: "12px 12px",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
