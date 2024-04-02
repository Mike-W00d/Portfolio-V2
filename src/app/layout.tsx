import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_sections/header";
import SideNav from "@/components/side-nav";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Michael Wood | Full Stack Developer",
    default: "Michael Wood | Full Stack Developer",
  },
  description:
    "Michael Wood is a Full Stack Developer based in the United Kingdom. He specialises in Next.js, React, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("bg-background", inter.className)}>
        <Header />
        <div className="flex">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/background.jpg"
              alt="grey background"
              className="z-negative"
              fill={true}
            />
          </div>
          <SideNav />
          <div className="w-full overflow-x-auto">
            <div className="h-[calc(99vh-60px)] overflow-auto ">
              <div className="w-full flex justify-center mx-auto   overflow-auto h-[calc(100vh - 120px)] overflow-y-auto relative">
                <div className="w-full md:max-w-6xl">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
