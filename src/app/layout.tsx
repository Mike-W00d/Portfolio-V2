import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import HeaderMobile from "../components/header-mobile";
import SideNav from "../components/side-nav";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Michael Wood | Full Stack Developer',
    default: 'Michael Wood | Full Stack Developer'
  },
description: 'Michael Wood is a Full Stack Developer based in the United Kingdom. He specialises in Next.js, React, TypeScript, and Tailwind CSS.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-white ${inter.className} antialiased`}>
          <div className="flex">
          <SideNav />
            <main className="flex-1">
          <Header />
          <HeaderMobile />
          {children}
          </main>
          </div>
        </body>
    </html>
  );
}
