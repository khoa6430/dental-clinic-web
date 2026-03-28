"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone, Mail, Clock } from "lucide-react";
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

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="hidden md:block bg-brand-500">
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
      <nav className="bg-background/95 backdrop-blur-md border-b shadow-sm">
        <div className="container flex items-center justify-between h-[84px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary text-primary-foreground font-bold text-lg">
              TM
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">
                {siteConfig.name}
              </h1>
              <p className="text-xs text-muted-foreground">
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
                      ? "text-primary"
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
          </div>

          {/* Mobile - Sheet */}
          <div className="lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu size={24} />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <SheetHeader>
                  <SheetTitle className="text-left text-primary">
                    {siteConfig.name}
                  </SheetTitle>
                </SheetHeader>
                <Separator className="my-4" />
                <div className="space-y-1">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-4 py-3 rounded-lg text-sm font-medium transition ${
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-muted"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
                <Separator className="my-4" />
                <Button asChild className="w-full" size="lg">
                  <Link href="/dat-lich">
                    <Phone size={16} />
                    Đặt Lịch Ngay
                  </Link>
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
