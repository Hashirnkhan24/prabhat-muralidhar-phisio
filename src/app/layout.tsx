import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Prabhat Mudhaliar's Physiotherapy Centre | Orthopedic Care, Sion, Mumbai",
  description: "Experience premium orthopedic care, physical therapy, and rehabilitation at Dr. Prabhat Mudhaliar's Centre in Sion, Mumbai. Book consultations instantly.",
  keywords: ["Dr Prabhat Mudhaliar", "physiotherapy Mumbai", "physiotherapy Sion", "orthopedic care", "joint rehab", "spine clinic", "injury recovery", "Sion physiotherapist"],
  authors: [{ name: "Dr. Prabhat Mudhaliar's Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-light-blue text-dark-text font-sans selection:bg-primary-blue/20 selection:text-dark-blue">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
