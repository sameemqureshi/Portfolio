import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sameemqureshi.dev"),
  title: "Sameem Qureshi | Generative AI · Agentic Systems · MLOps",
  description: "Portfolio of Sameem Qureshi, AI/ML & GenAI Engineer at Logitech building governed LLM platform infrastructure, agentic workflows, MCP integrations, and developer tools.",
  keywords: [
    "Sameem Qureshi",
    "Generative AI",
    "Agentic Systems",
    "MLOps",
    "Logitech",
    "Model Context Protocol",
    "MCP",
    "LangChain",
    "LangGraph",
    "FastAPI",
    "RAG",
    "IIT Madras"
  ],
  authors: [{ name: "Sameem Qureshi" }],
  creator: "Sameem Qureshi",
  openGraph: {
    title: "Sameem Qureshi | Generative AI · Agentic Systems · MLOps",
    description: "Building production-grade AI infrastructure, agentic workflows, and developer tools at Logitech.",
    type: "website",
    locale: "en_US",
    url: "https://sameemqureshi.dev",
    siteName: "Sameem Qureshi",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Sameem Qureshi - Generative AI · Agentic Systems · MLOps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sameem Qureshi | Generative AI · Agentic Systems · MLOps",
    description: "Building production-grade AI infrastructure, agentic workflows, and developer tools at Logitech.",
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
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sameem Qureshi",
              "jobTitle": "AI/ML/GenAI Engineer",
              "worksFor": { "@type": "Organization", "name": "Logitech" },
              "url": "https://sameemqureshi.dev",
              "sameAs": [
                "https://github.com/sameemqureshi",
                "https://www.linkedin.com/in/sameemqureshi/"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-neutral-100 selection:bg-cyan-500/30 selection:text-cyan-200`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <CustomCursor />
      </body>
    </html>
  );
}
