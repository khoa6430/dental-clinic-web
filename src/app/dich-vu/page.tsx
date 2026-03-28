"use client";

import Link from "next/link";
import { services } from "@/lib/constants/site";
import {
  Sparkles,
  SmilePlus,
  Puzzle,
  Crown,
  ArrowRight,
  CalendarPlus,
  Check,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  SmilePlus,
  Puzzle,
  Crown,
};

const serviceDetails: Record<
  string,
  { features: string[]; duration: string }
> = {
  "tay-trang-rang": {
    features: [
      "Tẩy trắng bằng đèn Zoom chuyên dụng",
      "Trắng hơn 2-8 tông màu sau 1 buổi",
      "An toàn, không ê buốt",
      "Bảo hành kết quả 1 năm",
    ],
    duration: "45-60 phút",
  },
  "nieng-rang": {
    features: [
      "Niềng răng trong suốt Invisalign",
      "Niềng răng mắc cài tự buộc",
      "Thiết kế kế hoạch điều trị 3D",
      "Theo dõi tiến trình hàng tháng",
    ],
    duration: "12-24 tháng",
  },
  "cay-ghep-implant": {
    features: [
      "Implant Osstem - Hàn Quốc",
      "Phục hình răng vĩnh viễn",
      "Không mài răng bên cạnh",
      "Bảo hành 10 năm",
    ],
    duration: "3-6 tháng",
  },
  "boc-rang-su": {
    features: [
      "Răng sứ Emax, Zirconia cao cấp",
      "Thẩm mỹ tự nhiên",
      "Độ bền vượt trội 15-20 năm",
      "Không đổi màu theo thời gian",
    ],
    duration: "2-3 buổi hẹn",
  },
};

export default function DichVuPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-500 to-brand-400" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Dịch Vụ Nha Khoa
            </h1>
            <p className="text-lg text-white/85 max-w-2xl mx-auto">
              Giải pháp toàn diện cho sức khỏe răng miệng và nụ cười hoàn hảo
              của bạn
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              const details = serviceDetails[service.id];
              const isReversed = index % 2 !== 0;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-0">
                      <div
                        className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"}`}
                      >
                        {/* Content Side */}
                        <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-brand-50 text-brand-500">
                              {Icon && <Icon size={24} />}
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                              {service.title}
                            </h2>
                          </div>

                          <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                            {service.description}
                          </p>

                          {details && (
                            <>
                              <ul className="space-y-2 mb-6">
                                {details.features.map((feature, i) => (
                                  <li
                                    key={i}
                                    className="flex items-center gap-2 text-sm text-foreground"
                                  >
                                    <Check
                                      size={16}
                                      className="text-brand-500 shrink-0"
                                    />
                                    {feature}
                                  </li>
                                ))}
                              </ul>

                              <div className="flex flex-wrap items-center gap-4 mb-6">
                                <div className="bg-brand-50 text-brand-600 px-4 py-2 rounded-lg font-semibold">
                                  {service.price}
                                </div>
                                <span className="text-sm text-muted-foreground">
                                  Thời gian: {details.duration}
                                </span>
                              </div>
                            </>
                          )}

                          <div>
                            <Button asChild size="lg">
                              <Link href="/dat-lich">
                                <CalendarPlus size={16} />
                                Đặt Lịch Khám
                              </Link>
                            </Button>
                          </div>
                        </div>

                        {/* Visual Side */}
                        <div
                          className={`flex-1 min-h-[240px] md:min-h-[360px] bg-gradient-to-br ${
                            index === 0
                              ? "from-blue-100 to-blue-200"
                              : index === 1
                                ? "from-purple-100 to-purple-200"
                                : index === 2
                                  ? "from-teal-100 to-teal-200"
                                  : "from-amber-100 to-amber-200"
                          } flex items-center justify-center`}
                        >
                          <div className="text-center p-8">
                            <div
                              className={`w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                                index === 0
                                  ? "bg-blue-400/30 text-blue-600"
                                  : index === 1
                                    ? "bg-purple-400/30 text-purple-600"
                                    : index === 2
                                      ? "bg-teal-400/30 text-teal-600"
                                      : "bg-amber-400/30 text-amber-600"
                              }`}
                            >
                              {Icon && <Icon size={48} />}
                            </div>
                            <p className="text-sm font-medium text-muted-foreground">
                              {service.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-muted/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Bạn Cần Tư Vấn Thêm?
            </h2>
            <p className="text-muted-foreground mb-8">
              Liên hệ ngay để được bác sĩ tư vấn miễn phí và lên kế hoạch điều
              trị phù hợp nhất
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="h-12 px-6 text-base">
                <Link href="/dat-lich">
                  <CalendarPlus size={18} />
                  Đặt Lịch Ngay
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-6 text-base"
              >
                <Link href="/lien-he">
                  Liên Hệ Tư Vấn
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
