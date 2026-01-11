import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sameem Qureshi | AI/ML & LLM Engineer",
  description: "Portfolio of Sameem Qureshi, an AI/ML Engineer specializing in LLMs, RAG systems, and full-stack development.",
  keywords: ["AI Engineer", "Machine Learning", "LLM", "RAG", "Next.js", "Portfolio", "Sameem Qureshi"],
  authors: [{ name: "Sameem Qureshi" }],
  openGraph: {
    title: "Sameem Qureshi | AI/ML & LLM Engineer",
    description: "Building practical AI systems and developer tools.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
