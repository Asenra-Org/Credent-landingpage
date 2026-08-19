import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cresem | Enterprise Credit Decision Platform",
    template: "%s | Cresem",
  },
  description: "Cresem brings document ingestion, financial analysis, verification, evidence, and credit review into one structured workflow for modern lenders.",
  keywords: ["credit decision platform", "lending infrastructure", "credit workflows", "financial analysis software", "B2B lending"],
  authors: [{ name: "Cresem" }],
  creator: "Cresem",
  publisher: "Cresem",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Cresem | Enterprise Credit Decision Platform",
    description: "From borrower documents to a decision-ready credit file. Built for modern lending teams.",
    url: "https://cresem.com",
    siteName: "Cresem",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cresem | Enterprise Credit Decision Platform",
    description: "From borrower documents to a decision-ready credit file. Built for modern lending teams.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cresem",
  url: "https://cresem.com",
  logo: "https://cresem.com/logo.jpg",
  description: "Enterprise Credit Decision Platform",
  founder: {
    "@type": "Person",
    name: "Karan Patil"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interTight.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-brand selection:bg-brand selection:text-white">
        {children}
      </body>
    </html>
  );
}
