import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YPN — IT Infrastructure & Operations",
  description:
    "IT Infrastructure and Operations portfolio covering enterprise infrastructure, systems administration, network operations, and IT operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
