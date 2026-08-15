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
            alt="ACAS Logo" 
            width={32} 
            height={32} 
            className="w-8 h-8 object-contain"
            priority
          />
          <span className="font-bold tracking-tight text-brand">ACAS</span>
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-secondary">
          <Link href="/features" className="hover:text-brand transition-colors">Features</Link>
          <Link href="/security" className="hover:text-brand transition-colors">Security</Link>
          <Link href="/api" className="hover:text-brand transition-colors">API</Link>
          <Link href="/about" className="hover:text-brand transition-colors">About Us</Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center">
          <Link href="/demo" className="flex items-center gap-2 text-sm font-semibold text-brand hover:text-primary transition-colors group">
            Book a Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </header>
  );
}
