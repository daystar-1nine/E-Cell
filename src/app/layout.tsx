import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import DayNightBackground from "@/components/DayNightBackground";
import Navigation from "@/components/Navigation";
import Cursor from "@/components/Cursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "E-Cell SJCEM",
  description: "IIC's Entrepreneurship Cell, SJCEM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} antialiased`}>
      <body className="bg-neutral-900 text-white min-h-screen selection:bg-orange-500/30 cursor-none">
        <SmoothScrolling>
          <Cursor />
          <DayNightBackground />
          <Navigation />
          <div className="relative z-10">
            {children}
          </div>
        </SmoothScrolling>
      </body>
    </html>
  );
}
