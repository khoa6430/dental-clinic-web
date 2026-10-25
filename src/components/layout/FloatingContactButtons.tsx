"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants/site";

export function ZaloIcon({
  size = 22,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 4C12.954 4 4 12.268 4 22.467c0 5.812 2.912 10.996 7.466 14.377-.326 2.345-1.404 5.016-1.45 5.128-.14.342-.034.736.262.957.157.118.346.177.537.177.145 0 .292-.036.426-.11 2.138-1.174 5.565-2.55 7.725-3.285 1.622.398 3.314.623 5.034.623 11.046 0 20-8.268 20-18.467S35.046 4 24 4z"
        fill="currentColor"
      />
      <text
        x="24"
        y="27"
        textAnchor="middle"
        fill="#0068FF"
        fontSize="13.5"
        fontWeight="800"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="-0.4"
      >
        Zalo
      </text>
    </svg>
  );
}

export default function FloatingContactButtons() {
  const cleanPhone = siteConfig.phone.replace(/\s/g, "");

  return (
    <div
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3.5"
      aria-label="Liên hệ nhanh Zalo OA và Hotline"
    >
      {/* Zalo OA Button */}
      <a
        href={siteConfig.zaloUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat Zalo OA với ${siteConfig.name}`}
        className="group relative flex items-center"
      >
        <span className="mr-3 hidden sm:inline-flex items-center rounded-full bg-foreground/90 px-3.5 py-1.5 text-xs font-semibold text-background shadow-md opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none whitespace-nowrap">
          Chat Zalo OA (24/7)
        </span>
        <span className="relative flex h-13 w-13 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0068FF] opacity-30" />
          <span className="relative flex h-13 w-13 items-center justify-center rounded-full bg-[#0068FF] text-white shadow-lg shadow-[#0068FF]/35 ring-2 ring-white transition-transform duration-200 group-hover:scale-110">
            <ZaloIcon size={28} />
          </span>
        </span>
      </a>

      {/* Phone Hotline Button */}
      <a
        href={`tel:${cleanPhone}`}
        aria-label={`Gọi Hotline ${siteConfig.phone}`}
        className="group relative flex items-center"
      >
        <span className="mr-3 hidden sm:inline-flex items-center rounded-full bg-foreground/90 px-3.5 py-1.5 text-xs font-semibold text-background shadow-md opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none whitespace-nowrap">
          Gọi ngay: {siteConfig.phone}
        </span>
        <span className="relative flex h-13 w-13 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-30" />
          <span className="relative flex h-13 w-13 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-600/35 ring-2 ring-white transition-transform duration-200 group-hover:scale-110">
            <Phone size={22} />
          </span>
        </span>
      </a>
    </div>
  );
}
