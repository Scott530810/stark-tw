import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Stark Future 台灣 | 電動越野車",
  description: "Stark Future 台灣官方代理 - VARG 電動越野摩托車系列。最強電動越野車，由 Lapspeed Trading 獨家代理。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
