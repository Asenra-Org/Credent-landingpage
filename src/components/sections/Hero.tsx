"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight, FileText, CheckCircle2 } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Text animations
    tl.fromTo(
      ".hero-text",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1 }
    );

    // Visual composition animations
    tl.fromTo(
      ".doc-layer",
      { opacity: 0, y: 40, rotateX: 10 },
      { opacity: 1, y: 0, rotateX: 0, duration: 1, stagger: 0.15 },
      "-=0.6"
    );

    tl.fromTo(
      ".ui-panel",
      { opacity: 0, scale: 0.95, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8 },
      "-=0.4"
    );

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative pt-4 pb-12 md:pt-8 md:pb-16 px-6 overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* LEFT: Editorial Copy (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-start z-10">
          <div className="hero-text text-[10px] sm:text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-6">
            Credit Decision Infrastructure
          </div>
          
          <h1 className="hero-text text-4xl sm:text-5xl lg:text-[3rem] font-light leading-[1.05] tracking-tight text-brand mb-6">
            From borrower documents <br className="hidden sm:block" />
            <span className="font-extrabold">to a decision-ready</span> <br className="hidden sm:block" />
            <span className="font-extrabold">credit file.</span>
          </h1>
          
          <p className="hero-text text-base lg:text-lg text-secondary leading-relaxed mb-8 max-w-md">
            Cresem brings document ingestion, financial analysis, verification, evidence and credit review into one structured workflow for modern lenders.
          </p>
          
          <div className="hero-text flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Link href="/demo" className="bg-brand text-white px-8 py-4 text-base font-semibold hover:bg-brand/90 transition-colors flex items-center gap-2 group">
              Request Early Access
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/features" className="text-base font-semibold text-brand hover:text-primary transition-colors underline underline-offset-4 decoration-border hover:decoration-primary">
              Explore the Platform
            </Link>
          </div>
        </div>

        {/* RIGHT: Visual Composition (7 cols) */}
        <div className="lg:col-span-7 relative h-[400px] sm:h-[450px] lg:h-[500px] w-full perspective-[1000px] z-0">
          
          {/* Background subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#E5E7EB_1px,transparent_1px),linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-30" />

          {/* Annotations */}
          <div className="absolute top-[2%] right-[15%] flex items-center gap-2 opacity-0 animate-[fade-in_1s_ease-out_0.5s_forwards] z-10">
            <div className="w-8 h-[1px] bg-secondary/30" />
            <span className="text-[9px] font-bold tracking-widest text-secondary/60 uppercase">Document Source</span>
          </div>
          
          <div className="absolute bottom-[20%] left-[2%] flex items-center gap-2 opacity-0 animate-[fade-in_1s_ease-out_1s_forwards] z-30">
            <span className="text-[9px] font-bold tracking-widest text-secondary/60 uppercase">Evidence Trace</span>
            <div className="w-8 h-[1px] bg-secondary/30" />
          </div>

          <div className="absolute top-[35%] right-[5%] flex items-center gap-2 opacity-0 animate-[fade-in_1s_ease-out_1.5s_forwards] z-30 hidden sm:flex">
            <div className="w-8 h-[1px] bg-secondary/30" />
            <span className="text-[9px] font-bold tracking-widest text-secondary/60 uppercase">Cross-Document Review</span>
          </div>

          {/* Document Layer 0: ITR */}
          <div className="doc-layer absolute top-[0%] right-[30%] w-64 bg-white/95 border border-border/60 shadow-md p-4 rotate-[9deg] opacity-60 origin-bottom-right transition-transform hover:-translate-y-1">
            <div className="text-[9px] text-secondary/40 font-mono mb-4 border-b border-border/40 pb-2">ITR_AY2025.PDF</div>
            <div className="space-y-2">
              <div className="h-2 bg-border/30 rounded w-full" />
              <div className="h-2 bg-border/30 rounded w-3/4" />
              <div className="h-2 bg-border/30 rounded w-1/2" />
            </div>
          </div>

          {/* Document Layer 1: GSTR-3B */}
          <div className="doc-layer absolute top-[5%] right-[20%] w-64 bg-[#fdfdfd] border border-border shadow-lg p-4 rotate-[6deg] opacity-80 origin-bottom-right transition-transform hover:-translate-y-1">
            <div className="flex justify-between items-center border-b border-border/50 pb-2 mb-4">
              <div className="text-[10px] text-secondary/60 font-mono">GSTR-3B_FY25.PDF</div>
              <div className="text-[8px] bg-secondary/5 text-secondary px-1.5 py-0.5 rounded-sm">PAGE 4</div>
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-border/50 rounded w-full" />
              <div className="h-2 bg-brand/10 rounded w-5/6" /> {/* Highlighted line */}
              <div className="h-2 bg-border/50 rounded w-4/6" />
            </div>
          </div>

          {/* Document Layer 2: Bank Statement */}
          <div className="doc-layer absolute top-[15%] right-[45%] w-72 bg-white border border-border shadow-xl p-4 -rotate-[3deg] opacity-95 origin-bottom-left transition-transform hover:-translate-y-1">
            <div className="flex justify-between items-center border-b border-border/50 pb-2 mb-4">
              <div className="text-[10px] text-secondary/70 font-mono">HDFC_STATEMENT_Q4.PDF</div>
              <div className="text-[8px] bg-secondary/5 text-secondary px-1.5 py-0.5 rounded-sm">PAGE 12</div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center"><div className="h-2 bg-border/70 rounded w-16"/><div className="h-2 bg-border/50 rounded w-12"/></div>
              <div className="flex justify-between items-center"><div className="h-2 bg-border/70 rounded w-20"/><div className="h-2 bg-brand/10 rounded w-10"/></div> {/* Highlighted line */}
              <div className="flex justify-between items-center"><div className="h-2 bg-border/70 rounded w-14"/><div className="h-2 bg-border/50 rounded w-16"/></div>
            </div>
          </div>

          {/* Core UI Panel: Cresem Credit Case */}
          <div className="ui-panel absolute top-[30%] left-[5%] right-[5%] sm:left-[15%] sm:right-[15%] bg-white border border-border shadow-2xl rounded-sm overflow-hidden z-20">
            {/* Header */}
            <div className="bg-brand text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image src="/logo.jpg" alt="Cresem" width={16} height={16} className="w-4 h-4 object-contain grayscale invert brightness-200 mix-blend-screen" />
                <span className="text-xs font-bold tracking-widest uppercase">Cresem Credit Case</span>
              </div>
              <span className="font-mono text-[10px] text-white/50">ID: CR-8924</span>
            </div>
            
            {/* Body */}
            <div className="p-6">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <div className="text-[10px] font-bold tracking-wider text-secondary uppercase mb-1">Borrower</div>
                  <div className="text-xl font-bold">Acme Logistics Pvt Ltd</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-bold tracking-wider text-secondary uppercase mb-1">Financial Overview</div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-px bg-border border border-border mb-8">
                <div className="bg-white p-4">
                  <div className="text-[9px] font-bold text-secondary uppercase mb-1">Revenue</div>
                  <div className="font-mono text-sm font-semibold">₹8.42 Cr</div>
                </div>
                <div className="bg-white p-4">
                  <div className="text-[9px] font-bold text-secondary uppercase mb-1">EBITDA</div>
                  <div className="font-mono text-sm font-semibold">₹1.31 Cr</div>
                </div>
                <div className="bg-white p-4">
                  <div className="text-[9px] font-bold text-secondary uppercase mb-1">DSCR</div>
                  <div className="font-mono text-sm font-semibold">1.72x</div>
                </div>
                <div className="bg-white p-4 hidden sm:block">
                  <div className="text-[9px] font-bold text-secondary uppercase mb-1">Current Ratio</div>
                  <div className="font-mono text-sm font-semibold">1.48x</div>
                </div>
                <div className="bg-white p-4 hidden sm:block">
                  <div className="text-[9px] font-bold text-secondary uppercase mb-1">Debt / Equity</div>
                  <div className="font-mono text-sm font-semibold">1.36x</div>
                </div>
              </div>

              {/* Verification & Evidence trace */}
              <div className="flex flex-col gap-3">
                {/* Trace 1 */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="w-full sm:w-1/3 border border-border p-3 flex flex-col justify-center bg-[#fafafa]">
                    <span className="text-[10px] font-bold text-secondary mb-1">GST ↔ BANK</span>
                    <span className="self-start text-[9px] font-bold bg-amber-100/50 text-amber-800 px-1.5 py-0.5 rounded-sm uppercase tracking-wide">
                      Review
                    </span>
                  </div>
                  <div className="w-full sm:w-2/3 border border-border p-3 flex items-center gap-3 bg-white">
                    <FileText className="w-4 h-4 text-brand/40" />
                    <div className="flex flex-col">
                      <span className="text-[9px] font-bold text-secondary uppercase tracking-wider mb-0.5">Evidence: Revenue</span>
                      <span className="font-mono text-[10px] text-brand font-medium">GSTR-3B_FY25.pdf (Page 4)</span>
                    </div>
                  </div>
                </div>
                
                {/* Trace 2 */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="w-full sm:w-1/3 border border-border p-3 flex flex-col justify-center bg-[#fafafa]">
                    <span className="text-[10px] font-bold text-secondary mb-1">BANK ↔ ITR</span>
                    <span className="self-start text-[9px] font-bold bg-emerald-100/50 text-emerald-700 px-1.5 py-0.5 rounded-sm uppercase tracking-wide">
                      Matched
                    </span>
                  </div>
                  <div className="w-full sm:w-2/3 border border-border p-3 flex items-center gap-3 bg-white">
                    <FileText className="w-4 h-4 text-brand/40" />
                    <div className="flex flex-col">
                      <span className="text-[9px] font-bold text-secondary uppercase tracking-wider mb-0.5">Evidence: EBITDA</span>
                      <span className="font-mono text-[10px] text-brand font-medium">P&L_FY25.pdf (Page 2)</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
