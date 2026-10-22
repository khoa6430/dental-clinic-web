"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2010",
    title: "Thành Lập",
    description: "Nha Khoa Thu Mảnh chính thức khai trương tại khu phố Hưng Thịnh, Đồng Nai với quy mô 2 ghế điều trị.",
  },
  {
    year: "2013",
    title: "Mở Rộng Thiết Bị",
    description: "Đầu tư máy X-quang kỹ thuật số và hệ thống tẩy trắng Zoom Whitening thế hệ mới.",
  },
  {
    year: "2016",
    title: "1.000 Khách Hàng",
    description: "Cột mốc 1.000 khách hàng hài lòng – mở rộng thêm phòng khám và tuyển bổ sung nhân sự.",
  },
  {
    year: "2019",
    title: "Chuyên Môn Hóa Implant",
    description: "BS. Thu Mảnh hoàn thành khóa đào tạo chuyên sâu Implant tại Hàn Quốc, đưa dịch vụ mới vào hoạt động.",
  },
  {
    year: "2022",
    title: "Công Nghệ 3D",
    description: "Trang bị máy CT Cone Beam 3D và phần mềm lập kế hoạch Implant hiện đại bậc nhất.",
  },
  {
    year: "2025",
    title: "Tầm Nhìn Mới",
    description: "Hướng đến mô hình phòng khám chuẩn quốc tế, đặt nền móng cho chuỗi nha khoa uy tín.",
  },
];

export default function Timeline() {
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
              Hành Trình Phát Triển
            </span>
            <h2 className="section-title">Các Mốc Quan Trọng</h2>
            <p className="section-subtitle">
              Từ một phòng khám nhỏ đến địa chỉ nha khoa uy tín tại Đồng Nai
            </p>
          </motion.div>
        </div>

        {/* Timeline grid - 3 cols × 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {milestones.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative bg-background rounded-2xl border border-border p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
            >
              {/* Year badge */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-500 text-white font-bold text-lg mb-4 group-hover:scale-105 transition-transform shadow-lg shadow-brand-500/20">
                {item.year}
              </div>

              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-brand-500 to-brand-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
