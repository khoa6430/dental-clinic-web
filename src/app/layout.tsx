import type { Metadata, Viewport } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";
import { siteConfig, detailedServices } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1A56DB",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  title: {
    default: `${siteConfig.name} | ${siteConfig.slogan}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteConfig.name,
  },
  keywords: [
    "nha khoa",
    "phòng khám nha khoa",
    "nha khoa thu mảnh",
    "niềng răng",
    "implant",
    "bọc răng sứ",
    "tẩy trắng răng",
    "nha khoa đồng nai",
    "nha khoa hưng thịnh",
    "nha khoa 24/7",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteConfig.url,
    title: `${siteConfig.name} | ${siteConfig.slogan}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const clinicJsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${siteConfig.url}/#dentist`,
  name: siteConfig.name,
  slogan: siteConfig.slogan,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  priceRange: "200.000đ - 18.000.000đ",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address,
    addressRegion: "Đồng Nai",
    addressCountry: "VN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: siteConfig.googleRating.split("/")[0],
    bestRating: "5",
    ratingCount: "3",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: `Dịch vụ nha khoa tại ${siteConfig.name}`,
    itemListElement: detailedServices.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "MedicalProcedure",
        name: service.title,
        description: service.description,
      },
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "VND",
        description: service.price,
      },
    })),
  },
  sameAs: [
    siteConfig.social.facebook,
    siteConfig.social.instagram,
    siteConfig.social.youtube,
    siteConfig.social.zalo,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={cn("font-sans", geist.variable, inter.variable)}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContactButtons />
        <MobileBottomNav />
      </body>
    </html>
  );
}
