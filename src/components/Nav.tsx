"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

export function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-secondary">
          <Link href="/features" className="hover:text-brand transition-colors">Platform</Link>
          <Link href="/workflow" className="hover:text-brand transition-colors">How It Works</Link>
          <Link href="/security" className="hover:text-brand transition-colors">Security</Link>
          <Link href="/deployment" className="hover:text-brand transition-colors">Deployment</Link>
          <Link href="/about" className="hover:text-brand transition-colors">About</Link>
          <Link href="/case-study" className="hover:text-brand transition-colors">Case Study</Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4 lg:gap-6">
          <Link href="/demo" className="flex items-center gap-2 text-sm font-semibold text-brand hover:text-primary transition-colors group">
            Request Early Access
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a href="https://app.cresem.asenra.in" className="inline-flex items-center justify-center bg-brand text-white text-sm font-medium px-5 py-2 rounded-sm hover:bg-brand/90 transition-colors">
            Client Login
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-secondary hover:text-brand transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white border-b border-border px-6 py-6 flex flex-col gap-5 shadow-xl">
          <Link href="/features" className="text-base font-medium text-secondary hover:text-brand" onClick={() => setIsMobileMenuOpen(false)}>Platform</Link>
          <Link href="/workflow" className="text-base font-medium text-secondary hover:text-brand" onClick={() => setIsMobileMenuOpen(false)}>How It Works</Link>
          <Link href="/security" className="text-base font-medium text-secondary hover:text-brand" onClick={() => setIsMobileMenuOpen(false)}>Security</Link>
          <Link href="/deployment" className="text-base font-medium text-secondary hover:text-brand" onClick={() => setIsMobileMenuOpen(false)}>Deployment</Link>
          <Link href="/about" className="text-base font-medium text-secondary hover:text-brand" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link href="/case-study" className="text-base font-medium text-secondary hover:text-brand" onClick={() => setIsMobileMenuOpen(false)}>Case Study</Link>
          
          <hr className="border-border my-2" />
          
          <Link href="/demo" className="text-base font-semibold text-brand flex items-center justify-between w-full" onClick={() => setIsMobileMenuOpen(false)}>
            Request Early Access
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="https://app.cresem.asenra.in" className="inline-flex items-center justify-center bg-brand text-white text-sm font-medium px-5 py-3 rounded-sm w-full text-center mt-2">
            Client Login
          </a>
        </div>
      )}
    </header>
  );
}
