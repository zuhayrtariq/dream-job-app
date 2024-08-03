import Header from "@/app/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dream Jobs",
  description: "Dream Jobs is a dynamic job portal built with Next.js, designed to connect job seekers with their ideal opportunities. With a sleek, responsive interface and lightning-fast performance, Dream Jobs makes job searching and recruitment easier than ever",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <footer className="container py-8 text-gray-600">
          Dream Job App &copy; 2024 - All rights reserved
        </footer>
      
      </body>
      <SpeedInsights/>
    </html>
  );
}
