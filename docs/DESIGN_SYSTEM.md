# 🎨 Design System & UI Conventions

Tài liệu quy định hệ thống màu sắc, typography, bố cục và quy chuẩn thiết kế giao diện cho **Nha Khoa Thu Mảnh** (chuyển thể từ thiết kế Figma *Dental Clinic Website and App*).

---

## 1. Bảng Màu Thương Hiệu (Brand Color Palette)

Định nghĩa trong [`src/app/globals.css`](../src/app/globals.css) và ánh xạ qua `@theme inline` để sử dụng trực tiếp với các class Tailwind như `bg-brand-600`, `text-brand-500`, `border-brand-200`:

| Token | Mã Hex | Mục đích sử dụng |
|---|---|---|
| `--brand-50` | `#EBF2FF` | Nền badge, nền icon box trên các thẻ dịch vụ/giá trị cốt lõi |
| `--brand-100` | `#D6E4FF` | Nền phụ, text selection, viền nhẹ |
| `--brand-200` | `#ADC8FF` | Chữ phụ trên nền tối (`Footer`) |
| `--brand-300` | `#84ADFF` | Chữ mô tả trong `Footer`, điểm nhấn phụ |
| `--brand-400` | `#5B91FF` | Icon trên nền tối, điểm cuối dải gradient sáng |
| `--brand-500` | `#4285F4` | Màu xanh thương hiệu chính (Topbar, badge, icon) |
| `--brand-600` | `#1A56DB` | Màu xanh đậm chủ đạo cho Hero banner, CTA, nút bấm chính |
| `--brand-700` | `#1048B8` | Điểm bắt đầu của Hero gradient (`from-brand-700 via-brand-600 to-brand-500`) |
| `--brand-800` | `#0B3694` | Trạng thái active/hover đậm |
| `--brand-900` | `#072670` | Nền `Footer` |
| `--star` | `#FBBF24` | Màu vàng ngôi sao đánh giá (`text-star`, `fill-star`) và điểm nhấn tia sáng |

---

## 2. Quy Chuẩn Bố Cục (Layout & Spacing)

Các class tiện ích toàn cục được định nghĩa sẵn trong [`src/app/globals.css`](../src/app/globals.css):

- **`.container`**: `max-width: 1280px` (`--container-max`), căn giữa (`margin-inline: auto`), `padding-inline: 1rem`.
- **`.section`**: Khoảng cách dọc tiêu chuẩn giữa các phân vùng (`padding-block: 5rem`).
- **`.section-header`**: Căn giữa tiêu đề phân vùng (`text-align: center; margin-bottom: 3rem`).
- **`.section-title`**: Tiêu đề H2 của section (`2rem`, `font-weight: 700`).
- **`.section-subtitle`**: Phụ đề mô tả dưới H2 (`1.125rem`, `text-muted-foreground`).

---

## 3. Cấu Trúc Hero Banner Của Các Trang Con

Tất cả các trang con (`/gioi-thieu`, `/dich-vu`, `/dat-lich`, `/lien-he`) đều tuân thủ cùng một mẫu Hero Banner đồng nhất:
- **Nền:** `bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500` kèm lớp họa tiết dấu cộng y tế SVG (`opacity-10`).
- **Breadcrumb:** `Trang Chủ (Home icon) > Tên Trang Hiện Tại` nằm phía trên tiêu đề H1.
- **Nội dung:** Tiêu đề `h1` (`text-4xl md:text-5xl font-bold text-white`) và đoạn mô tả ngắn (`text-xl text-white/85`).

---

## 4. Quy Tắc Sử Dụng Component & Animation

1. **Ưu tiên `shadcn/ui`**:
   - Luôn dùng `Button`, `Card`, `CardContent`, `Input`, `Label`, `Textarea`, `Select`, `Dialog`, `Sheet`, `Badge`, `Separator` từ `@/components/ui/*`.
   - Khi bọc `Link` của Next.js bên trong `Button`, luôn sử dụng prop `asChild`:
     ```tsx
     <Button asChild size="lg">
       <Link href="/dat-lich">Đặt Lịch Ngay</Link>
     </Button>
     ```
2. **Hiệu ứng Framer Motion**:
   - Các component có dùng `motion.*` hoặc React hooks phải khai báo `"use client";` ở dòng đầu tiên.
   - Sử dụng `viewport={{ once: true }}` cho tất cả hiệu ứng `whileInView` để tránh chạy lại animation nhiều lần gây rối mắt khi người dùng cuộn lên/xuống.
   - Giữ thời lượng animation mượt và gọn (`duration: 0.4` – `0.6`, độ trễ `delay: index * 0.08` hoặc `0.1`).
