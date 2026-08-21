import type { Metadata } from "next";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "YPN — IT Infrastructure & Operations",
  description:
    "IT Infrastructure and Operations portfolio covering enterprise infrastructure, systems administration, network operations, and selected professional work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-[#0b0c0e] text-white antialiased">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
