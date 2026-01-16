import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import MessengerRedirect from "@/components/MessengerRedirect";

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', 
});

export const metadata: Metadata = {
  title: "Dispû Dining",
  description: "Authentic Kapampangan Dining in San Fernando",
  icons: {
    icon: [
      { url: '/Dispu.png', href: '/Dispu.png' },
    ],
    shortcut: ['/Dispu.png'],
    apple: [
      { url: '/Dispu.png' },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Dispû Dining",
  "image": "https://dispudining.com/Dispu.png", 
  "description": "Authentic Kapampangan Dining in San Fernando. A revival of the culinary golden age.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "MacArthur Highway",
    "addressLocality": "San Fernando",
    "addressRegion": "Pampanga",
    "postalCode": "2000",
    "addressCountry": "PH"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 15.0298, 
    "longitude": 120.6868 
  },
  "url": "https://dispudining.com",
  "telephone": "+639000000000",
  "servesCuisine": "Kapampangan, Filipino",
  "priceRange": "₱₱₱",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "11:00",
      "closes": "22:00"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-[#22264b] text-[#e6e2d3] font-[family-name:var(--font-inter)] selection:bg-[#e6e2d3] selection:text-[#22264b]`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MessengerRedirect />
        {children}
      </body>
    </html>
  );
}
