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
  title: "Cresem | Decision-Ready Credit Infrastructure",
  description: "Cresem brings document ingestion, financial analysis, verification, evidence and credit review into one structured workflow for modern lenders.",
  openGraph: {
    title: "Cresem | Decision-Ready Credit Infrastructure",
    description: "From borrower documents to a decision-ready credit file.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interTight.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-brand selection:bg-brand selection:text-white">
        {children}
      </body>
    </html>
  );
}
