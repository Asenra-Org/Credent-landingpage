import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-brand text-white py-12 px-6 border-t border-white/10 font-mono text-[10px] tracking-widest uppercase">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-3">
          <Image 
            src="/logo.jpg" 
            alt="ACAS Logo" 
            width={32} 
            height={32} 
            className="w-8 h-8 object-contain grayscale invert brightness-200 mix-blend-screen"
          />
          <span className="font-bold">ACAS</span>
          <span className="text-white/40 ml-4 hidden sm:block">Intelligent Credit Decision Platform</span>
        </div>

        <div className="flex items-center gap-8 text-white/50">
          <Link href="/features" className="hover:text-white transition-colors">Platform</Link>
          <Link href="/security" className="hover:text-white transition-colors">Security</Link>
          <Link href="/api" className="hover:text-white transition-colors">API</Link>
          <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
        </div>

      </div>
    </footer>
  );
}
