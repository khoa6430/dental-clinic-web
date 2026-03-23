import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/constants/site";

const serviceLinks = [
  "Tẩy Trắng Răng",
  "Niềng Răng Invisalign",
  "Cấy Ghép Implant",
  "Bọc Răng Sứ",
  "Nhổ Răng Khôn",
];

export default function Footer() {
  return (
    <footer className="bg-[var(--gray-900)] text-[var(--gray-300)]">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3">
              {siteConfig.name}
            </h3>
            <p className="text-sm leading-relaxed">
              Phòng khám nha khoa uy tín với hơn 15 năm kinh nghiệm, BS. Thu
              Mảnh tận tâm chăm sóc sức khỏe răng miệng cho cộng đồng.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3">
              Liên Kết Nhanh
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white hover:pl-1 transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3">Dịch Vụ</h3>
            <ul className="space-y-2">
              {serviceLinks.map((name) => (
                <li key={name}>
                  <Link
                    href="/dich-vu"
                    className="text-sm hover:text-white hover:pl-1 transition-all"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3">Liên Hệ</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-[var(--primary-400)] mt-0.5 shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <Phone size={18} className="text-[var(--primary-400)] shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <Mail size={18} className="text-[var(--primary-400)] shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[var(--gray-700)] text-center text-sm text-[var(--gray-500)]">
          © {new Date().getFullYear()} {siteConfig.name}. Tất cả quyền được bảo
          lưu.
        </div>
      </div>
    </footer>
  );
}
