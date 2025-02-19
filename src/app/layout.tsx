import "./globals.css";
import type { Metadata } from "next";
import { cn } from "@/libs/utils";
import { myFont } from "@/config/font";
import { siteConfig } from "@/config/site";
import MainLayout from "@/components/layout/main-layout";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["multi-step-form"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased min-h-screen", myFont.className)}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
