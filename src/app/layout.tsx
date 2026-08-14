import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import Navigation from "@/components/Navigation";
import Cursor from "@/components/Cursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

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
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} antialiased`}>
      <body className="min-h-screen selection:bg-[var(--color-primary)] selection:text-black cursor-none">
        <SmoothScrolling>
          <Cursor />
          <Navigation />
          <div className="relative z-10">
            {children}
          </div>
        </SmoothScrolling>
      </body>
    </html>
  );
}
