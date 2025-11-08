// app/layout.tsx
import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // <-- BARIS BARU: Mengimpor komponen Navbar
import CustomCursor from "@/components/CustomCursor";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Dena Surya Gumilah | PRODUCT LEAD | AI & EDUTECH SPECIALIST",
  description: "Portfolio Dena Surya Gumilah, seorang Product Lead yang memimpin 2 produk AI Edutech dari 0 ke 1 dengan dampak terukur (menghemat >95% waktu administrasi guru).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <head>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      
      <body className={`${poppins.variable} ${spaceGrotesk.variable}`}>
        <CustomCursor />
        <Navbar /> {/* <-- BARIS BARU: Menampilkan komponen Navbar */}
        {children}
      </body>
    </html>
  );
}