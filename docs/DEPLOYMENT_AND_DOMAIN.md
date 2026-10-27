# 🌐 Hạ Tầng Tên Miền & Triển Khai (Domain, DNS & Cloudflare Deployment)

Tài liệu lưu trữ toàn bộ thông tin cấu hình tên miền, nhà đăng ký (Registrar), DNS Nameservers, hạ tầng Cloudflare Workers và quy trình CI/CD tự động của dự án **Nha Khoa Thu Mảnh** (`dental-clinic-web`).

---

## 1. Thông Tin Tên Miền Chính Thức (Domain & Registrar)

| Hạng mục | Chi tiết |
|---|---|
| **Tên miền chính (Root Domain)** | [`https://nhakhoathumanh.com`](https://nhakhoathumanh.com) |
| **Tên miền phụ (WWW Subdomain)** | [`https://www.nhakhoathumanh.com`](https://www.nhakhoathumanh.com) |
| **Nhà đăng ký tên miền (Registrar)** | [Spaceship.com](https://www.spaceship.com) (thuộc Namecheap Group) |
| **Quản lý tên miền trên Spaceship** | [Spaceship Domain Manager](https://www.spaceship.com/application/domain-list-application/) |
| **Ngày đăng ký** | 25/10/2026 |
| **Ngày hết hạn (Gia hạn tiếp theo)** | **25/10/2027** *(Đã bật Auto-renew; phí gia hạn ~`$9.98`/năm)* |
| **Bảo mật thông tin (WHOIS Privacy)** | Đã bật miễn phí trọn đời (Spaceship Privacy Protection) |
| **Trạng thái xác minh ICANN** | Đã xác minh (`Verified`) |

---

## 2. Cấu Hình DNS & Cloudflare Nameservers

Tên miền `nhakhoathumanh.com` được mua tại **Spaceship** nhưng sử dụng hệ thống **Cloudflare DNS (Free Plan)** để quản lý bản ghi DNS, cấp chứng chỉ SSL/TLS miễn phí, chống DDoS và kết nối trực tiếp vào **Cloudflare Workers**.

### Cặp Nameservers (Cấu hình tại Spaceship ➔ trỏ về Cloudflare)
- `jasmine.ns.cloudflare.com`
- `leif.ns.cloudflare.com`

### Thông tin Zone trên Cloudflare
- **Domain / Zone Name:** `nhakhoathumanh.com`
- **Zone ID:** `f75bad53ecaa7dafd04e6cf4837b270e`
- **Cloudflare Account ID:** `41585c43eac3147e2626ea5d7001c46b`
- **Trạng thái Zone:** `Active` (Chứng chỉ Universal SSL tự động kích hoạt & gia hạn)
- **Các bản ghi DNS Worker (Tự động quản lý bởi Cloudflare Workers Custom Domains):**
  - `nhakhoathumanh.com` ➔ Worker `dental-clinic-web` (`Production`)
  - `www.nhakhoathumanh.com` ➔ Worker `dental-clinic-web` (`Production`)

---

## 3. Hạ Tầng Hosting & CI/CD (Cloudflare Workers Static Assets)

Website Frontend được xuất tĩnh (`Next.js Static Export` ra thư mục `./out`) và chạy trực tiếp trên mạng lưới Edge toàn cầu của **Cloudflare Workers**.

| Hạng mục | Cấu hình |
|---|---|
| **GitHub Repository** | [`https://github.com/khoa6430/dental-clinic-web`](https://github.com/khoa6430/dental-clinic-web) |
| **Nhánh Production (Branch)** | `main` |
| **Tên dự án Cloudflare Worker** | `dental-clinic-web` |
| **URL mặc định của Worker** | [`https://dental-clinic-web.khoa6430.workers.dev`](https://dental-clinic-web.khoa6430.workers.dev) |
| **Build Command (trên Cloudflare)** | `npm run build` |
| **Deploy Command (trên Cloudflare)** | `npx wrangler deploy` |
| **Thư mục Static Assets** | `./out` (khai báo trong [`next.config.ts`](../next.config.ts) với `output: "export"`) |

### Cấu hình [`wrangler.toml`](../wrangler.toml)
File [`wrangler.toml`](../wrangler.toml) ở thư mục gốc của dự án định nghĩa cả thư mục tài nguyên tĩnh lẫn việc tự động gắn 2 tên miền chính thức (`nhakhoathumanh.com` và `www.nhakhoathumanh.com`) mỗi khi deploy:

```toml
name = "dental-clinic-web"
compatibility_date = "2026-01-01"

routes = [
  { pattern = "nhakhoathumanh.com", custom_domain = true },
  { pattern = "www.nhakhoathumanh.com", custom_domain = true }
]

[assets]
directory = "./out"
not_found_handling = "404-page"
```

> [!IMPORTANT]
> **Không xóa mục `routes` trong `wrangler.toml`:** Khi Cloudflare Workers Builds chạy lệnh `npx wrangler deploy`, Wrangler sẽ đồng bộ danh sách `routes` từ file cấu hình này lên Cloudflare. Giữ nguyên mục `routes` đảm bảo cả `nhakhoathumanh.com` và `www.nhakhoathumanh.com` luôn được gắn cố định vào Worker.

---

## 4. Quy Trình Cập Nhật Website (Workflow Hàng Ngày)

Mỗi khi chỉnh sửa giao diện hoặc nội dung trong source code:

1. **Kiểm tra lỗi TypeScript & Build thử tại máy local:**
   ```bash
   npx tsc --noEmit
   npm run build
   ```
2. **Commit & Push lên nhánh `main` trên GitHub:**
   ```bash
   git add .
   git commit -m "feat: nội dung cập nhật"
   git push origin main
   ```
3. **Tự động Deploy (Zero-downtime):**
   - Ngay khi push lên `main`, **Cloudflare Workers Builds** tự động kéo code mới từ GitHub, chạy `npm run build` và `npx wrangler deploy`.
   - Sau khoảng **1 – 2 phút**, bản cập nhật sẽ tự động hiển thị trên [`https://nhakhoathumanh.com`](https://nhakhoathumanh.com) và [`https://www.nhakhoathumanh.com`](https://www.nhakhoathumanh.com).

---

## 5. Lưu Ý Bảo Trì & Gia Hạn Hàng Năm

1. **Gia hạn tên miền (`nhakhoathumanh.com`):**
   - Kiểm tra thẻ thanh toán trên **Spaceship.com** trước ngày **25/10 hàng năm** để đảm bảo gia hạn tự động (`Auto-renew`) thành công, hoặc có thể vào Spaceship gia hạn sớm nhiều năm bất cứ lúc nào.
2. **Chi phí Hosting & SSL trên Cloudflare:**
   - **Cloudflare DNS, Universal SSL (HTTPS) và Cloudflare Workers Static Assets** hoàn toàn **miễn phí (`$0`/tháng)** cho lưu lượng truy cập website phòng khám thông thường.
3. **Đồng bộ thông tin phòng khám:**
   - Mọi thông tin tên miền (`url`), số điện thoại (`phone`), địa chỉ (`address`), giờ làm việc (`workingHours`) và đường dẫn Zalo (`zaloUrl`) đều nằm tại một nơi duy nhất: [`src/lib/constants/site.ts`](../src/lib/constants/site.ts).
