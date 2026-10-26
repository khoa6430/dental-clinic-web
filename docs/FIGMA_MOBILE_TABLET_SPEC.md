# 📱 Figma Mobile & Tablet Web App Design Specification

Tài liệu thiết kế chuẩn **Modern Web App (Mobile `390px` & Tablet `768px`)** cho **Nha Khoa Thu Mảnh** và hướng dẫn đồng bộ trực tiếp lên **Figma / Figma Make**.

---

## 1. Cấu Trúc Giao Diện Mobile & Tablet Web App (Đã Triển Khai Trong Code)

### 1.1. Breakpoints & Khung Artboard Chuẩn Figma
| Thiết bị | Kích thước Frame Figma | Hệ thống Lưới (Grid) | Điều hướng chính |
|---|---|---|---|
| **Mobile (iPhone 15/16)** | `390 × 844 px` | 4 cột, Margin `16px`, Gutter `12px` | Sticky App Header (`64px`) + **Bottom Tab Bar 5 nút (`64px`)** |
| **Tablet (iPad Mini / Air)** | `768 × 1024 px` | 8 cột, Margin `24px`, Gutter `16px` | Top Info Bar + App Header (`74px`) + **Bottom Tab Bar (`64px`)** |
| **Desktop** | `1440 × 900 px` | 12 cột, Container `1280px`, Gutter `24px` | Top Info Bar + Full Horizontal Navbar (`82px`) |

### 1.2. Các Thành Phần Chuẩn App Hiện Đại (`Mobile & Tablet`)
1. **Compact Glassmorphic App Header (`Header.tsx`)**:
   - Chiều cao `64px` trên Mobile, nền kính mờ `backdrop-blur-xl`.
   - Hiển thị Logo `TM` bo góc `12px`, tên **Nha Khoa Thu Mảnh** kèm huy hiệu trạng thái xanh lá **`● 24/7`** (nhấp nháy).
   - Nút hành động nhanh **Gọi ngay** (`bg-brand-50 text-brand-600`) và nút mở **App Drawer (`Sheet`)** chứa thẻ thông tin địa chỉ `W3RG+CR2`, đánh giá `4.7/5 ★` và nút Chat Zalo OA.
2. **Sticky Bottom Navigation Bar (`MobileBottomNav.tsx`)**:
   - Thanh điều hướng cố định dưới đáy màn hình (`h-16`) gồm 5 tab:
     - `Trang Chủ` (`Home`)
     - `Dịch Vụ` (`Sparkles`)
     - **`Đặt Lịch` (`CalendarPlus` — Nút nổi trung tâm `48×48px` bo góc `16px`, nền gradient xanh thương hiệu `#1A56DB → #4285F4`, nổi cao `-20px`)**
     - `Giới Thiệu` (`UserCheck`)
     - `Liên Hệ` (`MapPin`)
3. **Horizontal Snap Carousels (Vuốt ngang mượt như Native App)**:
   - **Dịch Vụ Nổi Bật (`ServicesSection.tsx`)**: Trên Mobile cho phép vuốt ngang (`snap-x snap-mandatory`, mỗi thẻ rộng `250px`), trên Tablet hiển thị lưới `2×2`.
   - **Đánh Giá Khách Hàng (`TestimonialsSection.tsx`)**: Trên Mobile/Tablet dọc cho phép vuốt ngang (`82vw` / `320px`), tất cả tên khách hàng luôn thẳng hàng sát đáy nhờ `flex-1` + `mt-auto`.
4. **Bento Stats Grid (`StatsSection.tsx`)**:
   - Trên Mobile & Tablet, 4 chỉ số (`15+ Năm`, `3,000+ Khách hàng`, `1 Bác sĩ`, `100% Thiết bị`) hiển thị dạng **Bento 2×2 Cards** nền trắng bo góc `16px`.
5. **PWA Web App Manifest (`public/manifest.webmanifest`)**:
   - Hỗ trợ cài đặt trực tiếp ra màn hình chính iOS/Android ở chế độ `standalone` với màu thanh trạng thái `#1A56DB`.

---

## 2. Cách Cập Nhật Lên File Figma Của Bạn (2 Cách Nhanh Nhất)

Vì Figma không cho phép công cụ bên ngoài tự động ghi đè vào tài khoản đám mây cá nhân khi chưa đăng nhập trong ứng dụng Figma, bạn có thể cập nhật file Figma của mình trong **30 giây** bằng 1 trong 2 cách sau:

### Cách 1: Cập nhật bằng **Figma Make** (Khuyên dùng vì file gốc của bạn tạo từ `figma.com/make`)
Mở dự án **Dental Clinic Website and App** trên **Figma Make** và dán (paste) câu lệnh prompt chuẩn dưới đây:

```text
Cập nhật thiết kế responsive cho phiên bản Mobile (390px) và Tablet (768px) theo phong cách Modern Medical Web App cho phòng khám "Nha Khoa Thu Mảnh":
1. Thông tin phòng khám:
   - Địa chỉ: W3RG+CR2, Số 11, Đường số 20, khu phố Hưng Thịnh, Đồng Nai
   - Hotline / Zalo OA: 0941 829 179
   - Giờ mở cửa: Cả tuần, 24 giờ mỗi ngày (24/7)
   - Đánh giá: 4.7/5 sao trên Google Maps
2. Header Mobile/Tablet (cao 64px, glassmorphism):
   - Trái: Logo "TM" bo góc 12px (#1A56DB) + Tên "Nha Khoa Thu Mảnh" + Badge xanh lá "● 24/7".
   - Phải: Nút pill "Gọi ngay" (#EBF2FF, chữ #1A56DB) + Nút Menu icon bo góc 12px.
3. Sticky Bottom Tab Bar cố định dưới đáy màn hình Mobile & Tablet (cao 64px, 5 cột):
   - Tab 1: Trang Chủ (Home icon)
   - Tab 2: Dịch Vụ (Sparkles icon)
   - Tab 3 (Giữa): Đặt Lịch (Nút nổi 48x48px bo góc 16px, nền gradient #1A56DB -> #4285F4, đẩy cao -20px, viền trắng 4px)
   - Tab 4: Giới Thiệu (UserCheck icon)
   - Tab 5: Liên Hệ (MapPin icon)
   - Phía trên góc phải thanh Bottom Bar có 2 nút tròn nổi: Zalo OA (#0068FF) và Gọi điện (#059669).
4. Bố cục trang chủ Mobile/Tablet:
   - Hero Banner: Gọn (cao 430px), phía trên tiêu đề có 2 pill badges "★ 4.7/5 sao Google Maps" và "Phục vụ 24/7". Hai nút CTA "Đặt Lịch Ngay" và "Khám Phá Dịch Vụ" xếp ngang 2 cột bằng nhau (grid-cols-2).
   - Thống kê (Stats): Lưới Bento 2x2 gồm 4 thẻ trắng bo góc 16px trên nền xanh nhạt #EBF2FF.
   - Dịch Vụ & Đánh Giá Khách Hàng (Lê Đăng Khoa, Lê Anh Tuấn, Lục Đan Trân): Trên Mobile hiển thị dạng Horizontal Swipe Carousel (vuốt ngang), trong mỗi thẻ đánh giá phần tên khách hàng luôn căn sát đáy thẻ (mt-auto) để thẳng hàng ngang tuyệt đối.
```

### Cách 2: Import trực tiếp giao diện code thật vào Figma bằng Plugin **`html.to.design`** (Chính xác 100% từng pixel)
1. Trong Figma, mở **Plugins** → tìm và chạy plugin miễn phí **`html.to.design`**.
2. Nhập link website của bạn (hoặc dùng Chrome Extension của `html.to.design` chụp trực tiếp từ `http://localhost:3000`).
3. Chọn tích hợp 2 khung nhìn **`Mobile (390px)`** và **`Tablet (768px)`** → Nhấn **Import** để tạo ngay các Frame Figma có đầy đủ Auto-Layout khớp 100% với code hiện tại.
