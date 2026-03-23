"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone, Mail, Clock } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/constants/site";
import Button from "@/components/ui/Button";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div
        style={{ backgroundColor: "var(--primary-500)" }}
        className="hidden md:block"
      >
        <div className="container flex items-center justify-between py-2">
          <div className="flex items-center gap-6 text-sm text-white/90">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 hover:text-white transition"
            >
              <Phone size={14} />
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 hover:text-white transition"
            >
              <Mail size={14} />
              {siteConfig.email}
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/90">
            <Clock size={14} />
            {siteConfig.workingHours}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className="bg-white/95 backdrop-blur-md border-b border-[var(--gray-200)]"
        style={{ boxShadow: "var(--shadow-md)" }}
      >
        <div className="container flex items-center justify-between h-[84px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
              style={{ backgroundColor: "var(--primary-500)" }}
            >
              TM
            </div>
            <div>
              <h1 className="text-xl font-bold" style={{ color: "var(--primary-600)" }}>
                {siteConfig.name}
              </h1>
              <p className="text-xs" style={{ color: "var(--gray-500)" }}>
                {siteConfig.slogan}
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? "text-[var(--primary-600)]"
                      : "text-[var(--gray-600)] hover:text-[var(--primary-500)]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                      style={{ backgroundColor: "var(--primary-500)" }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-[var(--gray-100)] transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[var(--gray-200)] bg-white">
            <div className="container py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition ${
                      isActive
                        ? "bg-[var(--primary-50)] text-[var(--primary-600)]"
                        : "text-[var(--gray-600)] hover:bg-[var(--gray-50)]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-3 px-4">
                <Button href="/dat-lich" size="md" className="w-full">
                  <Phone size={16} />
                  Đặt Lịch Ngay
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
