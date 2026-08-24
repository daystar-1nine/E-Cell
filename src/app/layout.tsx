import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import Navigation from "@/components/Navigation";
import Cursor from "@/components/Cursor";

import Preloader from "@/components/Preloader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  title: "E-Cell SJCEM",
  description: "IIC's Entrepreneurship Cell, SJCEM",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrains.variable} antialiased dark`}>
      <head>
      </head>
      <body className="min-h-[100dvh] overflow-x-hidden selection:bg-[var(--color-primary)] selection:text-white dark:selection:text-black cursor-none" style={{ colorScheme: 'dark' }}>
        <Preloader />
        <SmoothScrolling>
          <Cursor />
          <Navigation />
          <div className="relative z-10 w-full overflow-x-hidden">
            {children}
          </div>
        </SmoothScrolling>
      </body>
    </html>
  );
}
