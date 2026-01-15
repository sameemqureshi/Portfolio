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
  metadataBase: new URL("https://sameemqureshi.dev"),
  title: "Sameem Qureshi | AI/ML & LLM Engineer",
  description: "Portfolio of Sameem Qureshi, an AI/ML Engineer specializing in LLMs, RAG systems, and full-stack development at Logitech.",
  keywords: ["AI Engineer", "Machine Learning", "LLM", "RAG", "Next.js", "Portfolio", "Sameem Qureshi", "GenAI", "MLOps", "LangChain"],
  authors: [{ name: "Sameem Qureshi" }],
  creator: "Sameem Qureshi",
  openGraph: {
    title: "Sameem Qureshi | AI/ML & LLM Engineer",
    description: "Building practical AI systems, RAG pipelines, and developer tools. Currently at Logitech.",
    type: "website",
    locale: "en_US",
    url: "https://sameemqureshi.dev",
    siteName: "Sameem Qureshi Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Sameem Qureshi - AI/ML & LLM Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sameem Qureshi | AI/ML & LLM Engineer",
    description: "Building practical AI systems, RAG pipelines, and developer tools.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
