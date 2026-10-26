"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Menu,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  CalendarPlus,
  MapPin,
  Star,
} from "lucide-react";
import { siteConfig, navLinks } from "@/lib/constants/site";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const cleanPhone = siteConfig.phone.replace(/\s/g, "");

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar (Desktop / Tablet landscape) */}
      <div className="hidden md:block bg-brand-600 text-white">
        <div className="container flex items-center justify-between py-2">
          <div className="flex items-center gap-6 text-xs lg:text-sm text-white/90">
            <a
              href={`tel:${cleanPhone}`}
              className="flex items-center gap-1.5 hover:text-white transition font-medium"
            >
              <Phone size={13} />
              {siteConfig.phone}
            </a>
            <a
              href={siteConfig.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition font-medium"
            >
              <MessageCircle size={13} />
              Chat Zalo OA
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hidden lg:flex items-center gap-1.5 hover:text-white transition"
            >
              <Mail size={13} />
              {siteConfig.email}
            </a>
          </div>
          <div className="flex items-center gap-4 text-xs lg:text-sm text-white/90">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-medium text-white">
              <Star size={12} className="fill-star text-star" />
              {siteConfig.googleRating} Google Maps
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {siteConfig.workingHours}
            </span>
          </div>
        </div>
      </div>

      {/* Main App Bar / Navigation */}
      <nav className="bg-background/92 backdrop-blur-xl border-b border-border/70 shadow-xs">
        <div className="container flex items-center justify-between h-16 md:h-[74px] lg:h-[82px]">
          {/* Logo + Live Status Badge */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-brand-600 to-brand-500 text-white font-bold text-base sm:text-lg shadow-sm shadow-brand-600/25">
              TM
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg lg:text-xl font-bold text-primary leading-tight">
                  {siteConfig.name}
                </span>
                <span className="inline-flex md:hidden items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  24/7
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-muted-foreground line-clamp-1">
                {siteConfig.slogan}
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-primary" />
                  )}
                </Link>
              );
            })}
            <Button asChild size="default" className="rounded-xl px-5 shadow-xs">
              <Link href="/dat-lich">
                <CalendarPlus size={16} />
                Đặt Lịch Ngay
              </Link>
            </Button>
          </div>

          {/* Mobile & Tablet Actions + Drawer */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${cleanPhone}`}
              aria-label={`Gọi ${siteConfig.phone}`}
              className="inline-flex items-center gap-1.5 rounded-xl bg-brand-50 px-3 py-2 text-xs font-semibold text-brand-600 active:scale-95 transition"
            >
              <Phone size={14} className="fill-brand-600/15" />
              <span className="hidden xs:inline sm:inline">Gọi ngay</span>
            </a>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 rounded-xl border-border/80"
                >
                  <Menu size={20} />
                  <span className="sr-only">Mở menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[310px] sm:w-[350px] p-0 flex flex-col"
              >
                <div className="bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 p-5 text-white">
                  <SheetHeader>
                    <SheetTitle className="text-left text-white text-lg font-bold flex items-center gap-2.5">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-sm font-bold">
                        TM
                      </span>
                      <div>
                        <span className="block leading-tight">
                          {siteConfig.name}
                        </span>
                        <span className="block text-xs font-normal text-white/80">
                          {siteConfig.slogan}
                        </span>
                      </div>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 font-medium">
                      <Clock size={12} /> Mở cửa 24/7
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 font-medium">
                      <Star size={12} className="fill-star text-star" />{" "}
                      {siteConfig.googleRating} Google Maps
                    </span>
                  </div>
                </div>

                <div className="p-4 flex-1 overflow-y-auto space-y-1">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition ${
                          isActive
                            ? "bg-brand-50 text-brand-600 font-semibold"
                            : "text-foreground/80 hover:bg-muted"
                        }`}
                      >
                        <span>{link.name}</span>
                        {isActive && (
                          <span className="h-2 w-2 rounded-full bg-brand-600" />
                        )}
                      </Link>
                    );
                  })}

                  <Separator className="my-4" />

                  <div className="rounded-2xl bg-muted/60 p-3.5 space-y-2.5 text-xs text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <MapPin
                        size={14}
                        className="text-brand-600 shrink-0 mt-0.5"
                      />
                      <span>
                        {siteConfig.plusCode}, {siteConfig.address}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={14} className="text-brand-600 shrink-0" />
                      <span className="font-semibold text-foreground">
                        {siteConfig.phone}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t bg-background space-y-2.5">
                  <Button asChild className="w-full rounded-xl" size="lg">
                    <Link href="/dat-lich" onClick={() => setMobileOpen(false)}>
                      <CalendarPlus size={16} />
                      Đặt Lịch Khám Ngay
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-xl border-[#0068FF]/30 text-[#0068FF] hover:bg-[#0068FF]/10 hover:text-[#0068FF]"
                    size="lg"
                  >
                    <a
                      href={siteConfig.zaloUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileOpen(false)}
                    >
                      <MessageCircle size={16} />
                      Chat Zalo OA (24/7)
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
