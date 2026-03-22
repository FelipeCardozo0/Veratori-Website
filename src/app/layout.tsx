import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Veratori — Automated Inventory for Food Service",
  description:
    "Veratori installs computer vision hardware in commercial kitchens and walk-in coolers, delivering real-time inventory tracking, daily manager digests, and automated anomaly alerts — no manual counts required.",
  icons: {
    icon: "/images/Logos/Brand Identity/Logos/Logo_dark.png",
    apple: "/images/Logos/Brand Identity/Logos/Logo_dark.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
