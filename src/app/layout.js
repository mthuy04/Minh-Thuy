// src/app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import { profile, seo } from "@/data/portfolio";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: seo.title,
  description: seo.description,
  alternates: { canonical: "/" },
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    url: "/",
    siteName: `${profile.name} — Portfolio`,
    title: seo.title,
    description: seo.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} relative min-h-screen`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-cobalt focus:text-white focus:px-6 focus:py-3 focus:rounded-btn focus:text-[1.5rem] focus:font-bold"
        >
          Skip to content
        </a>
        <MotionProvider>
          <div className="relative z-10">{children}</div>
        </MotionProvider>
      </body>
    </html>
  );
}
