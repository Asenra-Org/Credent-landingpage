import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image 
            src="/logo.jpg" 
            alt="Cresem Logo" 
            width={32} 
            height={32} 
            className="w-8 h-8 object-contain"
            priority
          />
          <span className="font-bold uppercase tracking-widest text-brand text-sm sm:text-base">CRESEM</span>
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-secondary">
          <Link href="/features" className="hover:text-brand transition-colors">Platform</Link>
          <Link href="/workflow" className="hover:text-brand transition-colors">How It Works</Link>
          <Link href="/security" className="hover:text-brand transition-colors">Security</Link>
          <Link href="/deployment" className="hover:text-brand transition-colors">Deployment</Link>
          <Link href="/about" className="hover:text-brand transition-colors">About</Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link href="/demo" className="hidden md:flex items-center gap-2 text-sm font-semibold text-brand hover:text-primary transition-colors group">
            Request Early Access
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a href="https://app.cresem.asenra.in" className="hidden sm:inline-flex items-center justify-center bg-brand text-white text-sm font-medium px-5 py-2 rounded-sm hover:bg-brand/90 transition-colors">
            Client Login
          </a>
        </div>

      </div>
    </header>
  );
}
