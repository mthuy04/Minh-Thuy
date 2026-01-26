// src/app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";
import TechBackground from "@/components/TechBackground";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} relative min-h-screen`}>
        <TechBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}