"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Sparkles,
  CalendarPlus,
  UserCheck,
  MapPin,
} from "lucide-react";

const mobileTabs = [
  {
    name: "Trang Chủ",
    href: "/",
    icon: Home,
    isCenter: false,
  },
  {
    name: "Dịch Vụ",
    href: "/dich-vu",
    icon: Sparkles,
    isCenter: false,
  },
  {
    name: "Đặt Lịch",
    href: "/dat-lich",
    icon: CalendarPlus,
    isCenter: true,
  },
  {
    name: "Giới Thiệu",
    href: "/gioi-thieu",
    icon: UserCheck,
    isCenter: false,
  },
  {
    name: "Liên Hệ",
    href: "/lien-he",
    icon: MapPin,
    isCenter: false,
  },
] as const;

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Điều hướng di động"
      className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-background/92 backdrop-blur-xl border-t border-border/80 shadow-[0_-8px_30px_rgba(15,23,42,0.08)] pb-[env(safe-area-inset-bottom)]"
    >
      <div className="grid grid-cols-5 items-center h-16 max-w-lg mx-auto px-1.5">
        {mobileTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = pathname === tab.href;

          if (tab.isCenter) {
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className="group flex flex-col items-center justify-center -mt-5 active:scale-95 transition-transform"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg ring-4 ring-background transition-all ${
                    isActive
                      ? "bg-brand-700 shadow-brand-700/40 scale-105"
                      : "bg-gradient-to-tr from-brand-600 to-brand-500 shadow-brand-600/35 group-hover:scale-105"
                  }`}
                >
                  <Icon size={22} strokeWidth={2.2} />
                </span>
                <span
                  className={`mt-1 text-[11px] leading-none font-semibold ${
                    isActive ? "text-brand-600" : "text-foreground/85"
                  }`}
                >
                  {tab.name}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className="relative flex flex-col items-center justify-center h-full py-1.5 active:scale-95 transition-all"
            >
              {isActive && (
                <span className="absolute top-0 inset-x-5 h-0.5 rounded-b-full bg-brand-600" />
              )}
              <span
                className={`flex h-7 w-10 items-center justify-center rounded-xl transition-colors ${
                  isActive
                    ? "bg-brand-50 text-brand-600"
                    : "text-muted-foreground"
                }`}
              >
                <Icon size={19} strokeWidth={isActive ? 2.4 : 2} />
              </span>
              <span
                className={`mt-1 text-[11px] leading-none transition-colors ${
                  isActive
                    ? "font-semibold text-brand-600"
                    : "font-medium text-muted-foreground"
                }`}
              >
                {tab.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
