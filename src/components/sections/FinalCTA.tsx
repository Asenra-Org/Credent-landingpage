"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-32 px-6 bg-brand text-white text-center relative overflow-hidden">
      {/* Editorial texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-30" />
      
      <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-light leading-[1.2] tracking-tight mb-8">
          Turn fragmented borrower documents <br />
          <span className="font-extrabold">into a decision-ready credit case.</span>
        </h2>
        
        <p className="text-lg text-white/70 mb-12 max-w-lg">
          Explore how Cresem can fit into your credit appraisal workflow.
        </p>
        
        <Link 
          href="/demo" 
          className="bg-white text-brand px-8 py-4 text-base font-bold tracking-wide hover:bg-gray-100 transition-colors flex items-center gap-2 group"
        >
          Request Early Access
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
