import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { FreelancerFilterProvider } from "./contexts/FilterContext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Freelancer Hub",
  description: "Find the next talent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en">
      <body className="bg-white text-gray-900">
        <FreelancerFilterProvider>
        <Header />
        <main className="min-h-screen max-w-7xl mx-auto px-6">{children}</main>
        <Footer />
        </FreelancerFilterProvider>
      </body>
    </html>
  );
}
