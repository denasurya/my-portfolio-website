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
  title: "Dena Surya Gumilah | Full-Stack AI & Web3 Developer",
  description: "Portfolio Dena Surya, seorang developer yang membangun aplikasi web cerdas dan terdesentralisasi dari konsep hingga deployment.",
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
      
      <body>
        <CustomCursor />
        <Navbar /> {/* <-- BARIS BARU: Menampilkan komponen Navbar */}
        {children}
      </body>
    </html>
  );
}