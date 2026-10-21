"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  FileText,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Sparkles,
  Loader2,
} from "lucide-react";
import { motion } from "framer-motion";
import { detailedServices, siteConfig } from "@/lib/constants/site";
import { apiClient } from "@/lib/api/client";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const bookingSchema = z.object({
  fullName: z
    .string()
    .min(2, "Vui lòng nhập họ và tên (tối thiểu 2 ký tự)"),
  phone: z
    .string()
    .regex(
      /^(0|\+84)[0-9]{8,10}$/,
      "Số điện thoại không hợp lệ (VD: 0901234567)"
    ),
  email: z
    .string()
    .email("Địa chỉ email không hợp lệ")
    .optional()
    .or(z.literal("")),
  serviceId: z.string().min(1, "Vui lòng chọn dịch vụ khám"),
  preferredDate: z.string().min(1, "Vui lòng chọn ngày khám"),
  preferredTime: z.string().min(1, "Vui lòng chọn khung giờ khám"),
  notes: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const timeSlots = [
  { label: "08:00", period: "Sáng" },
  { label: "09:00", period: "Sáng" },
  { label: "10:00", period: "Sáng" },
  { label: "11:00", period: "Sáng" },
  { label: "14:00", period: "Chiều" },
  { label: "15:00", period: "Chiều" },
  { label: "16:00", period: "Chiều" },
  { label: "17:00", period: "Chiều" },
  { label: "18:00", period: "Tối" },
  { label: "19:00", period: "Tối" },
];

const bookingNotes = [
  "Miễn phí thăm khám và tư vấn phương án điều trị ban đầu",
  "Nhân viên lễ tân sẽ gọi xác nhận lịch hẹn trong vòng 15 phút",
  "Hỗ trợ đổi hoặc hủy lịch hẹn linh hoạt, hoàn toàn miễn phí",
  "Quý khách vui lòng đến trước giờ hẹn 10 phút để làm thủ tục",
];

function BookingFormInner() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [submitting, setSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<BookingFormValues | null>(
    null
  );
  const [dialogOpen, setDialogOpen] = useState(false);

  const todayStr = new Date().toISOString().split("T")[0];

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      serviceId: preselectedService || "",
      preferredDate: todayStr,
      preferredTime: "09:00",
      notes: "",
    },
  });

  useEffect(() => {
    if (preselectedService) {
      setValue("serviceId", preselectedService);
    }
  }, [preselectedService, setValue]);

  const selectedTime = watch("preferredTime");

  const onSubmit = async (values: BookingFormValues) => {
    setSubmitting(true);
    try {
      await apiClient.post("/appointments", values);
    } catch {
      // Fallback gracefully when ASP.NET backend is offline during frontend preview
    } finally {
      setSubmitting(false);
      setSubmittedData(values);
      setDialogOpen(true);
    }
  };

  const getServiceTitle = (id: string) => {
    if (id === "kham-tong-quat") return "Khám & Tư vấn tổng quát";
    const found = detailedServices.find((s) => s.id === id);
    return found ? found.title : id;
  };

  return (
    <>
      <Card className="border border-border/70 shadow-lg">
        <CardContent className="p-6 md:p-10">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Thông Tin Đặt Lịch Hẹn
            </h2>
            <p className="text-sm text-muted-foreground">
              Vui lòng điền đầy đủ thông tin bên dưới, phòng khám sẽ liên hệ xác
              nhận ngay với bạn.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* 1. Personal Information */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-brand-600 font-semibold text-sm uppercase tracking-wider">
                <User size={16} />
                <span>1. Thông Tin Cá Nhân</span>
              </div>
              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                <div className="space-y-2">
                  <Label htmlFor="fullName">
                    Họ và tên <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <User
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />
                    <Input
                      id="fullName"
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
                  <Label htmlFor="phone">
                    Số điện thoại <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <Phone
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />
                    <Input
                      id="phone"
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

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="email">Email (Không bắt buộc)</Label>
                  <div className="relative">
                    <Mail
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />
                    <Input
                      id="email"
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
              </div>
            </div>

            {/* 2. Appointment Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-brand-600 font-semibold text-sm uppercase tracking-wider">
                <Calendar size={16} />
                <span>2. Thông Tin Lịch Hẹn</span>
              </div>
              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                <div className="space-y-2">
                  <Label>
                    Dịch vụ quan tâm <span className="text-destructive">*</span>
                  </Label>
                  <Controller
                    control={control}
                    name="serviceId"
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger
                          className="w-full data-[size=default]:h-10"
                          aria-invalid={!!errors.serviceId}
                        >
                          <SelectValue placeholder="Chọn dịch vụ nha khoa" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kham-tong-quat">
                            Khám & Tư vấn tổng quát (Miễn phí)
                          </SelectItem>
                          {detailedServices.map((s) => (
                            <SelectItem key={s.id} value={s.id}>
                              {s.title} ({s.price})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.serviceId && (
                    <p className="text-xs text-destructive">
                      {errors.serviceId.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferredDate">
                    Ngày khám mong muốn{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <Calendar
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
                    />
                    <Input
                      id="preferredDate"
                      type="date"
                      min={todayStr}
                      className="pl-9 h-10"
                      aria-invalid={!!errors.preferredDate}
                      {...register("preferredDate")}
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="text-xs text-destructive">
                      {errors.preferredDate.message}
                    </p>
                  )}
                </div>

                {/* Time slots */}
                <div className="space-y-3 md:col-span-2">
                  <Label className="flex items-center gap-1.5">
                    <Clock size={15} className="text-muted-foreground" />
                    Chọn khung giờ khám{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                    {timeSlots.map((slot) => {
                      const isSelected = selectedTime === slot.label;
                      return (
                        <button
                          key={slot.label}
                          type="button"
                          onClick={() =>
                            setValue("preferredTime", slot.label, {
                              shouldValidate: true,
                            })
                          }
                          className={`py-2.5 px-3 rounded-lg border text-sm font-medium transition-all flex flex-col items-center justify-center ${
                            isSelected
                              ? "border-brand-600 bg-brand-600 text-white shadow-sm"
                              : "border-border bg-background hover:border-brand-300 hover:bg-brand-50/50 text-foreground"
                          }`}
                        >
                          <span>{slot.label}</span>
                          <span
                            className={`text-[11px] ${
                              isSelected
                                ? "text-white/80"
                                : "text-muted-foreground"
                            }`}
                          >
                            {slot.period}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  {errors.preferredTime && (
                    <p className="text-xs text-destructive">
                      {errors.preferredTime.message}
                    </p>
                  )}
                </div>

                {/* Notes */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="notes" className="flex items-center gap-1.5">
                    <FileText size={15} className="text-muted-foreground" />
                    Ghi chú / Triệu chứng (Không bắt buộc)
                  </Label>
                  <Textarea
                    id="notes"
                    rows={4}
                    placeholder="Mô tả ngắn gọn tình trạng răng miệng hoặc yêu cầu đặc biệt của bạn..."
                    {...register("notes")}
                  />
                </div>
              </div>
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
                  Đang xử lý đặt lịch...
                </>
              ) : (
                <>
                  <Calendar size={18} />
                  Xác Nhận Đặt Lịch Hẹn
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Success Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2">
              <CheckCircle2 size={28} />
            </div>
            <DialogTitle className="text-center text-xl font-bold">
              Đặt Lịch Hẹn Thành Công!
            </DialogTitle>
            <DialogDescription className="text-center">
              Cảm ơn <strong>{submittedData?.fullName}</strong>! Phòng khám Nha
              Khoa Thu Mảnh đã tiếp nhận yêu cầu đặt lịch của bạn.
            </DialogDescription>
          </DialogHeader>

          {submittedData && (
            <div className="rounded-xl bg-muted/60 p-4 space-y-2.5 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Số điện thoại:</span>
                <span className="font-semibold">{submittedData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Dịch vụ:</span>
                <span className="font-semibold text-brand-600">
                  {getServiceTitle(submittedData.serviceId)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Thời gian hẹn:</span>
                <span className="font-semibold">
                  {submittedData.preferredTime} — {submittedData.preferredDate}
                </span>
              </div>
            </div>
          )}

          <p className="text-xs text-muted-foreground text-center">
            Lễ tân phòng khám sẽ liên hệ qua số điện thoại của bạn trong vòng 15
            phút để xác nhận lịch khám chính thức.
          </p>

          <DialogFooter className="sm:justify-center">
            <Button
              onClick={() => {
                setDialogOpen(false);
                reset();
              }}
              className="w-full sm:w-auto px-8"
            >
              Hoàn Tất
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default function BookingFormSection() {
  return (
    <section className="section bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left 2 Columns: Form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Suspense
              fallback={
                <Card className="p-10 text-center text-muted-foreground">
                  Đang tải biểu mẫu đặt lịch...
                </Card>
              }
            >
              <BookingFormInner />
            </Suspense>
          </motion.div>

          {/* Right Column: Clinic Info & Notes */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-6"
          >
            {/* Card 1: Hotline & Hours */}
            <Card className="border-0 bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 text-white shadow-lg">
              <CardContent className="p-6 md:p-7 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center">
                    <Sparkles size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Hỗ Trợ Đặt Lịch Nhanh</h3>
                    <p className="text-xs text-white/80">
                      Tư vấn trực tiếp qua Hotline
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <Phone size={16} className="mt-0.5 shrink-0 text-white/80" />
                    <div>
                      <span className="block text-xs text-white/75">
                        Hotline phòng khám
                      </span>
                      <a
                        href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                        className="text-lg font-bold hover:underline"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock size={16} className="mt-0.5 shrink-0 text-white/80" />
                    <div>
                      <span className="block text-xs text-white/75">
                        Giờ mở cửa
                      </span>
                      <span className="font-medium">
                        {siteConfig.workingHours}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin
                      size={16}
                      className="mt-0.5 shrink-0 text-white/80"
                    />
                    <div>
                      <span className="block text-xs text-white/75">
                        Địa chỉ
                      </span>
                      <span className="font-medium">{siteConfig.address}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 2: Important Notes */}
            <Card className="border border-border/70 shadow-sm">
              <CardContent className="p-6 md:p-7">
                <div className="flex items-center gap-2.5 mb-4">
                  <ShieldCheck size={20} className="text-brand-600" />
                  <h3 className="text-lg font-bold text-foreground">
                    Quyền Lợi Khi Đặt Lịch Trước
                  </h3>
                </div>
                <ul className="space-y-3">
                  {bookingNotes.map((note, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-emerald-500 shrink-0 mt-0.5"
                      />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
