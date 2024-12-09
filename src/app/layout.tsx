import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";

import "./globals.css";
import Header from "@/app/(sections)/header";
import SideNav from "@/components/side-nav";
import { cn } from "@/lib/utils";

import GoogleCaptchaWrapper from "./providers/GoogleCaptchaWrapper";
import Providers from "./providers/Toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Michael Wood | Full Stack Developer",
    default: "Michael Wood | Full Stack Developer",
  },
  description:
    "Michael Wood is a Full Stack Developer based in the United Kingdom. He specialises in Next.js, React, TypeScript, and Tailwind CSS.",
  metadataBase: new URL("https://mgmwood.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="icon"
        type="image/png"
        href="/favicon-96x96.png"
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <meta name="apple-mobile-web-app-title" content="mgmwood.com" />
      <link rel="manifest" href="/site.webmanifest" />
      <body className={cn(inter.className)}>
        <GoogleCaptchaWrapper>
          <Header />
          <div className="flex">
            <div className="absolute inset-0 -z-10">
              <Image
                src="/background.jpg"
                alt="grey background"
                fill={true}
                className="object-cover"
              />
            </div>
            <SideNav />
            <div className="w-full overflow-x-hidden">
              <div className="h-[calc(100vh-64px)] overflow-auto">
                <div className="relative mx-auto flex h-[calc(100vh-64px)] w-full justify-center overflow-y-auto">
                  <div className="w-full md:max-w-6xl">
                    <Providers>
                      {children}
                      <Analytics />
                      <SpeedInsights />
                    </Providers>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GoogleCaptchaWrapper>
      </body>
    </html>
  );
}
