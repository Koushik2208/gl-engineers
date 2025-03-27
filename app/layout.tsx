import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const jost = localFont({
  src: "./fonts/Jost-VariableFont_wght.ttf",
  variable: "--font-jost",
  weight: "400",
});

export const metadata: Metadata = {
  title: "GL Engineers",
  description: "A Construction Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} ${jost.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
