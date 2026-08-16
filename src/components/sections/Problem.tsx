"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, FileText } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const RAW_DOCS = [
  "BANK STATEMENT",
  "GST RETURN",
  "ITR",
  "P&L",
  "BALANCE SHEET"
];

export function Problem() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
      }
    });

    tl.fromTo(
      ".problem-text",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
    );

    tl.fromTo(
      ".doc-frag",
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" },
      "-=0.6"
    );

    tl.fromTo(
      ".connector-arrow",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.5)" },
      "-=0.2"
    );

    tl.fromTo(
      ".structured-case",
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    );

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-20 md:py-32 px-6 bg-[#fafafa] border-y border-border overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Editorial Headline */}
        <div className="max-w-3xl mb-24">
          <div className="problem-text text-[10px] font-bold tracking-[0.2em] text-secondary uppercase mb-8 border-b border-border pb-4 inline-block">
            The Credit Workflow
          </div>
          <h2 className="problem-text text-3xl md:text-5xl font-light leading-[1.1] tracking-tight text-brand mb-8">
            A credit officer doesn't receive a borrower. <br />
            <span className="font-extrabold">They receive a pile of documents.</span>
          </h2>
          <p className="problem-text text-base md:text-lg text-secondary leading-relaxed max-w-2xl">
            Bank statements, GST returns, ITRs, financial statements and supporting documents arrive across formats and sources. The challenge is not simply extracting information. It is turning fragmented evidence into a coherent credit case.
          </p>
        </div>

        {/* Visual Composition: Horizontal Transition */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative w-full">
          
          {/* LEFT: Fragmented Documents */}
          <div className="flex-1 w-full relative">
            <div className="flex flex-col gap-3">
              {RAW_DOCS.map((doc, idx) => (
                <div 
                  key={doc} 
                  className="doc-frag border border-border p-4 bg-white shadow-sm flex items-center justify-between relative z-10"
                  style={{ transform: `translateX(${idx % 2 === 0 ? 0 : 20}px)` }}
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-secondary/40" />
                    <span className="font-mono text-[11px] font-semibold text-secondary tracking-widest">{doc}</span>
                  </div>
                  <div className="w-1.5 h-1.5 bg-border rounded-full" />
                </div>
              ))}
            </div>
            {/* Visual connecting lines behind documents */}
            <div className="absolute top-1/2 -right-8 w-16 h-px bg-border -translate-y-1/2 z-0 hidden lg:block" />
          </div>

          {/* CENTER: Transition Connector */}
          <div className="connector-arrow flex-shrink-0 bg-white border border-border p-4 shadow-sm z-10 rotate-90 lg:rotate-0">
            <ArrowRight className="w-6 h-6 text-brand" />
          </div>

          {/* RIGHT: Structured Credit Case */}
          <div className="flex-1 w-full structured-case">
            <div className="border border-brand/20 bg-white shadow-xl p-8 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-brand" />
              
              <div className="flex justify-between items-start mb-8 border-b border-border pb-4">
                <div>
                  <div className="text-[9px] font-bold tracking-widest text-secondary uppercase mb-1">Output</div>
                  <div className="font-bold text-brand tracking-tight">Structured Credit Case</div>
                </div>
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-[10px] font-bold text-secondary uppercase mb-2">Deterministic Extraction</div>
                  <div className="h-1.5 bg-border/60 rounded w-full mb-1" />
                  <div className="h-1.5 bg-border/60 rounded w-4/5" />
                </div>
                
                <div>
                  <div className="text-[10px] font-bold text-secondary uppercase mb-2">Cross-Verified Evidence</div>
                  <div className="flex gap-2">
                    <div className="h-6 w-1/3 bg-emerald-50 border border-emerald-100 rounded-sm" />
                    <div className="h-6 w-1/3 bg-emerald-50 border border-emerald-100 rounded-sm" />
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-bold text-secondary uppercase mb-2">Decision Ready</div>
                  <div className="h-1.5 bg-border/60 rounded w-2/3" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
