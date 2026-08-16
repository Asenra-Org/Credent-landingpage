"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, FileText } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Evidence() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
      }
    });

    tl.fromTo(
      ".ev-header",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    tl.fromTo(
      ".ev-trace",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.3, ease: "power2.out" },
      "-=0.5"
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 px-6 bg-[#fafafa] border-b border-border">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <div className="ev-header text-center mb-24 max-w-3xl">
          <div className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase mb-8 border-b border-border pb-4 inline-block">
            Evidence Traceability
          </div>
          <h2 className="text-3xl md:text-5xl font-light leading-[1.1] tracking-tight text-brand mb-8">
            Every important number <br />
            <span className="font-extrabold">should have a source.</span>
          </h2>
          <p className="text-lg text-secondary leading-relaxed">
            Cresem does not hide the evidence behind the output. Every extracted data point is explicitly mapped back to the underlying financial document and cross-verified automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl">
          
          {/* Example 1: REVENUE */}
          <div className="ev-trace flex flex-col items-center relative">
            
            {/* VALUE */}
            <div className="bg-white border border-border shadow-sm p-6 w-full text-center z-10">
              <div className="text-[10px] font-bold tracking-widest text-secondary uppercase mb-2">Revenue</div>
              <div className="font-mono text-3xl font-semibold text-brand">₹8.42 Cr</div>
            </div>

            <ArrowDown className="w-5 h-5 text-border my-3 shrink-0" />

            {/* SOURCE */}
            <div className="bg-white border border-brand/20 p-4 w-full flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-brand/40" />
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-bold tracking-widest text-secondary uppercase mb-1">Source</span>
                  <span className="font-mono text-xs text-brand font-medium">GSTR-3B_FY25.pdf</span>
                </div>
              </div>
              <div className="bg-secondary/5 text-[10px] font-bold text-secondary px-2 py-1">PAGE 4</div>
            </div>

            <ArrowDown className="w-5 h-5 text-border my-3 shrink-0" />

            {/* VERIFICATION */}
            <div className="bg-white border border-border p-4 w-full flex items-center justify-between z-10">
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-bold tracking-widest text-secondary uppercase mb-1">Verification</span>
                <span className="font-mono text-xs text-brand font-semibold">GST ↔ Bank</span>
              </div>
              <div className="bg-amber-100/50 text-amber-800 text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                Review
              </div>
            </div>

            {/* Background connection line */}
            <div className="absolute top-10 bottom-10 left-1/2 w-px bg-border -translate-x-1/2 z-0" />
          </div>

          {/* Example 2: EBITDA */}
          <div className="ev-trace flex flex-col items-center relative">
            
            {/* VALUE */}
            <div className="bg-white border border-border shadow-sm p-6 w-full text-center z-10">
              <div className="text-[10px] font-bold tracking-widest text-secondary uppercase mb-2">EBITDA</div>
              <div className="font-mono text-3xl font-semibold text-brand">₹1.31 Cr</div>
            </div>

            <ArrowDown className="w-5 h-5 text-border my-3 shrink-0" />

            {/* SOURCE */}
            <div className="bg-white border border-brand/20 p-4 w-full flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-brand/40" />
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-bold tracking-widest text-secondary uppercase mb-1">Source</span>
                  <span className="font-mono text-xs text-brand font-medium">P&L_FY25.pdf</span>
                </div>
              </div>
              <div className="bg-secondary/5 text-[10px] font-bold text-secondary px-2 py-1">PAGE 2</div>
            </div>

            <ArrowDown className="w-5 h-5 text-border my-3 shrink-0" />

            {/* VERIFICATION */}
            <div className="bg-white border border-border p-4 w-full flex items-center justify-between z-10">
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-bold tracking-widest text-secondary uppercase mb-1">Verification</span>
                <span className="font-mono text-xs text-brand font-semibold">P&L ↔ ITR</span>
              </div>
              <div className="bg-emerald-100/50 text-emerald-700 text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                Matched
              </div>
            </div>

            {/* Background connection line */}
            <div className="absolute top-10 bottom-10 left-1/2 w-px bg-border -translate-x-1/2 z-0" />
          </div>

        </div>

      </div>
    </section>
  );
}
