import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
