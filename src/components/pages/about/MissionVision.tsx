"use client";

import { Target, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function MissionVision() {
  return (
    <section className="section bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border border-border/70 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Sứ Mệnh
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Mang đến dịch vụ chăm sóc răng miệng toàn diện, chất lượng
                  cao với chi phí hợp lý, giúp mọi khách hàng sở hữu nụ cười tự
                  tin và sức khỏe răng miệng bền vững.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full border border-border/70 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                  <Eye size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Tầm Nhìn
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Trở thành địa chỉ nha khoa uy tín, đáng tin cậy hàng đầu tại
                  TP. Hồ Chí Minh, tiên phong ứng dụng công nghệ nha khoa kỹ
                  thuật số hiện đại vì lợi ích của cộng đồng.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
