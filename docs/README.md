# 🦷 Nha Khoa Thu Mảnh — Project Documentation Index

Tài liệu kỹ thuật và nghiệp vụ dành cho Developers & AI Coding Agents làm việc trên dự án **Nha Khoa Thu Mảnh** (`dental-clinic-web`).

---

## 📌 1. Thông Tin Phòng Khám (Business Context)

Mọi thông tin liên hệ và nội dung hiển thị trên website được quản lý tập trung tại [`src/lib/constants/site.ts`](../src/lib/constants/site.ts):

| Thuộc tính | Giá trị chính thức |
|---|---|
| **Tên phòng khám** | Nha Khoa Thu Mảnh |
| **Bác sĩ phụ trách** | BS. Thu Mảnh (Hơn 15 năm kinh nghiệm) |
| **Slogan** | Nụ cười tự tin - Sức khỏe trọn vẹn |
| **Địa chỉ** | Số 11, Đường số 20, khu phố Hưng Thịnh, Đồng Nai |
| **Mã Google Maps (Plus Code)** | `W3RG+CR2` |
| **Hotline** | `0941 829 179` (`tel:0941829179`) |
| **Zalo OA / Chat Zalo** | `https://zalo.me/0941829179` (hoặc `https://zalo.me/<NEXT_PUBLIC_ZALO_OA_ID>`) |
| **Email** | `nhakhoathumanh@gmail.com` |
| **Thời gian mở cửa** | Cả tuần, 24 giờ mỗi ngày (`24/7`) |
| **Đánh giá Google Maps** | `4.7/5` sao |

---

## 🗺️ 2. Danh Mục Tài Liệu (`docs/`)

1. **[`ARCHITECTURE.md`](./ARCHITECTURE.md)**
   - Kiến trúc tổng thể Frontend (Next.js 16) & Backend (ASP.NET Core 9).
   - Cấu trúc thư mục chi tiết và sơ đồ các trang/routes.
2. **[`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md)**
   - Bảng màu thương hiệu (`--brand-50` → `--brand-900`), biến `shadcn/ui`, typography, utility classes và chuẩn animation.
3. **[`API_SPEC.md`](./API_SPEC.md)**
   - Đặc tả REST API giữa Next.js (`apiClient`) và C# ASP.NET Core 9 Web API.
   - Cấu trúc TypeScript interfaces, DTOs và thiết kế bảng cơ sở dữ liệu (SQL Server / PostgreSQL).

---

## ✅ 3. Trạng Thái Triển Khai & Lộ Trình (Roadmap)

### Đã hoàn thành (Phases 1–3: Frontend Public Pages)
- [x] **Foundation & UI System:** Next.js 16.2.1 (App Router), React 19, TypeScript 5, Tailwind CSS v4, `shadcn/ui`, Framer Motion, bộ favicon riêng (`favicon.ico`, `icon.svg`, `apple-icon.png`).
- [x] **Layout:** `Header` (Topbar hiển thị Hotline + Email + Giờ mở cửa 24/7, Main Nav, Mobile Sheet Menu) và `Footer` 4 cột.
- [x] **Trang Chủ (`/`)**: 7 sections (`HeroSection`, `StatsSection`, `WhyChooseUsSection`, `ServicesSection`, `ProcessSection`, `TestimonialsSection`, `CTASection`).
- [x] **Trang Giới Thiệu (`/gioi-thieu`)**: `AboutHero`, `OurStory`, `CoreValues`, `DoctorProfile`, `Timeline`, `MissionVision`, `AboutStats`, `CTASection`.
- [x] **Trang Dịch Vụ (`/dich-vu`)**: `ServicesHero`, `ServicesGrid` (8 dịch vụ nha khoa chi tiết kèm giá tham khảo & link đặt lịch tự động chọn dịch vụ `/dat-lich?service=<id>`), `QualityCommitment`, `ServicesCTA`.
- [x] **Trang Đặt Lịch (`/dat-lich`)**: `BookingHero`, `BookingFormSection` (React Hook Form + Zod validation, tự động nhận query param `?service=`, chọn khung giờ, modal xác nhận).
- [x] **Trang Liên Hệ (`/lien-he`)**: `ContactHero`, `ContactInfoCards`, `ContactFormMap` (Form gửi lời nhắn + Google Maps embed tại `W3RG+CR2`, Hưng Thịnh, Đồng Nai).

### Kế hoạch tiếp theo (Phases 4–6: Backend & Admin)
- [ ] **Phase 4 — Backend API:** Khởi tạo solution C# ASP.NET Core 9 Web API, Entity Framework Core 9, SQL Server / PostgreSQL, AutoMapper, FluentValidation, Serilog, Swagger.
- [ ] **Phase 5 — Full Integration & SEO:** Kết nối thực tế các endpoints `/api/services`, `/api/appointments`, `/api/contacts` qua TanStack Query hooks; bổ sung `sitemap.ts`, `robots.ts` và JSON-LD (`Dentist` schema).
- [ ] **Phase 6 — Admin Dashboard:** Trang quản trị (`/admin`) xác thực JWT để quản lý lịch hẹn khách hàng, tin nhắn liên hệ và danh mục dịch vụ.
