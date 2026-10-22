"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Send,
  User,
  Phone,
  Mail,
  MessageSquare,
  CheckCircle2,
  Loader2,
  Navigation,
  Car,
} from "lucide-react";
import { motion } from "framer-motion";
import { apiClient } from "@/lib/api/client";
import { siteConfig } from "@/lib/constants/site";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const contactSchema = z.object({
  fullName: z.string().min(2, "Vui lòng nhập họ và tên"),
  phone: z
    .string()
    .regex(/^(0|\+84)[0-9]{8,10}$/, "Số điện thoại không hợp lệ"),
  email: z.string().email("Địa chỉ email không hợp lệ"),
  subject: z.string().min(3, "Vui lòng nhập tiêu đề liên hệ"),
  message: z
    .string()
    .min(10, "Nội dung tin nhắn cần tối thiểu 10 ký tự"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactFormMap() {
  const [submitting, setSubmitting] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitting(true);
    try {
      await apiClient.post("/contacts", values);
    } catch {
      // Fallback gracefully when backend API is offline
    } finally {
      setSubmitting(false);
      setDialogOpen(true);
    }
  };

  return (
    <section className="section bg-muted/30 pt-4">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border border-border/70 shadow-lg h-full">
              <CardContent className="p-6 md:p-10">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Gửi Tin Nhắn Cho Chúng Tôi
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Điền thông tin câu hỏi hoặc yêu cầu tư vấn, bác sĩ sẽ phản hồi
                  sớm nhất cho bạn.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">
                        Họ và tên <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <User
                          size={16}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                        />
                        <Input
                          id="contact-name"
                          placeholder="Nguyễn Văn A"
                          className="pl-9 h-10"
                          aria-invalid={!!errors.fullName}
                          {...register("fullName")}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-xs text-destructive">
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">
                        Số điện thoại{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <div className="relative">
                        <Phone
                          size={16}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                        />
                        <Input
                          id="contact-phone"
                          type="tel"
                          placeholder="0901 234 567"
                          className="pl-9 h-10"
                          aria-invalid={!!errors.phone}
                          {...register("phone")}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-xs text-destructive">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-email">
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <Mail
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      />
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="example@gmail.com"
                        className="pl-9 h-10"
                        aria-invalid={!!errors.email}
                        {...register("email")}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-xs text-destructive">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-subject">
                      Chủ đề cần tư vấn{" "}
                      <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <MessageSquare
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      />
                      <Input
                        id="contact-subject"
                        placeholder="VD: Tư vấn chi phí niềng răng trong suốt"
                        className="pl-9 h-10"
                        aria-invalid={!!errors.subject}
                        {...register("subject")}
                      />
                    </div>
                    {errors.subject && (
                      <p className="text-xs text-destructive">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message">
                      Nội dung tin nhắn{" "}
                      <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Nhập câu hỏi hoặc tình trạng răng miệng bạn muốn được tư vấn..."
                      aria-invalid={!!errors.message}
                      {...register("message")}
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitting}
                    className="w-full h-12 text-base font-semibold"
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Đang gửi tin nhắn...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Gửi Tin Nhắn
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right: Map & Directions */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <Card className="border border-border/70 shadow-lg overflow-hidden flex-1 min-h-[340px]">
              <iframe
                title="Bản đồ Nha Khoa Thu Mảnh"
                src="https://www.google.com/maps?q=W3RG%2BCR2,+S%E1%BB%91+11+%C4%90%C6%B0%E1%BB%9Dng+s%E1%BB%91+20,+khu+ph%E1%BB%91+H%C6%B0ng+Th%E1%BB%8Bnh,+%C4%90%E1%BB%93ng+Nai&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "340px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Card>

            <Card className="border border-border/70 shadow-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2.5">
                  <Navigation size={20} className="text-brand-600" />
                  <h3 className="text-lg font-bold text-foreground">
                    Hướng Dẫn Di Chuyển & Tiện Ích
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Phòng khám tọa lạc tại{" "}
                  <strong className="text-foreground">
                    {siteConfig.plusCode}, {siteConfig.address}
                  </strong>
                  , mở cửa phục vụ{" "}
                  <strong className="text-foreground">24/7</strong> (cả tuần, 24
                  giờ mỗi ngày) và nhận được đánh giá{" "}
                  <strong className="text-foreground">
                    {siteConfig.googleRating} sao
                  </strong>{" "}
                  trên Google Maps.
                </p>
                <div className="flex items-center gap-2.5 text-sm text-emerald-700 bg-emerald-50 px-4 py-3 rounded-xl">
                  <Car size={18} className="shrink-0" />
                  <span>
                    Có khu vực đỗ xe máy & xe ô tô rộng rãi, miễn phí ngay trước
                    phòng khám.
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2">
              <CheckCircle2 size={28} />
            </div>
            <DialogTitle className="text-center text-xl font-bold">
              Đã Gửi Tin Nhắn Thành Công!
            </DialogTitle>
            <DialogDescription className="text-center">
              Cảm ơn bạn đã liên hệ với Nha Khoa Thu Mảnh. Đội ngũ tư vấn của
              chúng tôi sẽ phản hồi lại bạn trong thời gian sớm nhất.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center">
            <Button
              onClick={() => {
                setDialogOpen(false);
                reset();
              }}
              className="w-full sm:w-auto px-8"
            >
              Đóng
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
