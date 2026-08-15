"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileText, ShieldAlert, ArrowRight, CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ProductShowcase() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".showcase-ui",
      { opacity: 0, y: 40, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="platform" className="py-16 md:py-24 px-4 md:px-12 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-16">
          <div className="text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-8">
            Platform Capabilities
          </div>
          <h2 className="text-3xl md:text-5xl font-light leading-[1.1] tracking-tight text-brand max-w-4xl mx-auto">
            A serious interface for <br />
            <span className="font-extrabold">institutional underwriting.</span>
          </h2>
        </div>

        {/* The Institutional UI */}
        <div className="showcase-ui w-full max-w-6xl bg-white border border-border shadow-2xl rounded-sm overflow-hidden flex flex-col">
          
          {/* Top Bar */}
          <div className="bg-brand text-white px-4 md:px-6 py-3 flex items-center justify-between text-xs">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 font-bold tracking-widest uppercase">
                <Image src="/logo.jpg" alt="Credent" width={16} height={16} className="w-4 h-4 object-contain grayscale invert brightness-200 mix-blend-screen" />
                Credent
              </div>
              <div className="hidden md:flex gap-4 text-white/50 font-medium">
                <span className="text-white hover:text-white transition-colors cursor-pointer">Credit Case</span>
                <span className="hover:text-white transition-colors cursor-pointer">Documents</span>
                <span className="hover:text-white transition-colors cursor-pointer">Audit Log</span>
              </div>
            </div>
            <div className="font-mono text-white/50">CR-8924 • ACME LOGISTICS</div>
          </div>

          <div className="flex flex-col md:flex-row flex-1">
            
            {/* Sidebar: Documents */}
            <div className="w-full md:w-64 border-r border-border bg-background p-4 flex flex-col gap-6">
              <div>
                <div className="text-[10px] font-bold tracking-widest text-secondary uppercase mb-3">Extracted Documents</div>
                <div className="flex flex-col gap-1">
                  {["GSTR-3B_FY25.pdf", "HDFC_Statement_Q4.pdf", "ITR_AY24.pdf", "Financial_Statements.pdf"].map((doc) => (
                    <div key={doc} className="flex items-center gap-2 text-xs font-mono text-brand p-2 hover:bg-border/50 rounded-sm cursor-pointer transition-colors">
                      <FileText className="w-3 h-3 text-secondary" />
                      <span className="truncate">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-6 border-t border-border">
                <div className="text-[10px] font-bold tracking-widest text-secondary uppercase mb-3">Verification</div>
                <div className="bg-amber-50 border border-amber-200 p-3 flex flex-col gap-2 rounded-sm">
                  <div className="flex justify-between items-center text-[10px] font-bold text-amber-800 uppercase">
                    <span>GST ↔ Bank</span>
                    <ShieldAlert className="w-3 h-3" />
                  </div>
                  <div className="text-xs text-amber-900 font-medium leading-snug">
                    Variance detected in Q4 inflows vs reported sales. Needs review.
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content: Case Data */}
            <div className="flex-1 p-6 md:p-8 bg-white flex flex-col gap-8">
              
              {/* Header */}
              <div className="flex justify-between items-start border-b border-border pb-6">
                <div>
                  <h1 className="text-2xl font-extrabold text-brand tracking-tight mb-1">Acme Logistics Pvt Ltd</h1>
                  <div className="text-sm font-mono text-secondary">CIN: U60232MH2019PTC321456 • Mumbai, MH</div>
                </div>
                <div className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider flex items-center gap-2 border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3" />
                  Data Extracted
                </div>
              </div>

              {/* Financial Metrics */}
              <div>
                <div className="text-[10px] font-bold tracking-widest text-secondary uppercase mb-4">Calculated Metrics</div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border border border-border">
                  <div className="bg-white p-4 hover:bg-background transition-colors cursor-pointer">
                    <div className="text-[10px] font-bold text-secondary uppercase mb-1">Revenue</div>
                    <div className="font-mono text-lg font-bold">₹8.42 Cr</div>
                  </div>
                  <div className="bg-white p-4 hover:bg-background transition-colors cursor-pointer">
                    <div className="text-[10px] font-bold text-secondary uppercase mb-1">EBITDA</div>
                    <div className="font-mono text-lg font-bold">₹1.31 Cr</div>
                  </div>
                  <div className="bg-white p-4 hover:bg-background transition-colors cursor-pointer">
                    <div className="text-[10px] font-bold text-secondary uppercase mb-1">DSCR</div>
                    <div className="font-mono text-lg font-bold">1.72x</div>
                  </div>
                  <div className="bg-white p-4 hover:bg-background transition-colors cursor-pointer">
                    <div className="text-[10px] font-bold text-secondary uppercase mb-1">Current Ratio</div>
                    <div className="font-mono text-lg font-bold">1.48x</div>
                  </div>
                  <div className="bg-white p-4 hover:bg-background transition-colors cursor-pointer">
                    <div className="text-[10px] font-bold text-secondary uppercase mb-1">Debt / Equity</div>
                    <div className="font-mono text-lg font-bold">0.85</div>
                  </div>
                </div>
              </div>

              {/* Evidence Traceability */}
              <div className="flex-1">
                <div className="text-[10px] font-bold tracking-widest text-secondary uppercase mb-4">Evidence Traceability: Revenue</div>
                <div className="border border-border p-4 bg-background flex flex-col md:flex-row items-start md:items-center gap-4 text-xs font-mono">
                  <div className="flex flex-col gap-1">
                    <span className="text-secondary">Fact</span>
                    <span className="font-bold text-brand">₹8,42,10,000</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-border hidden md:block" />
                  <div className="flex flex-col gap-1">
                    <span className="text-secondary">Source Document</span>
                    <span className="font-bold text-brand flex items-center gap-1">
                      <FileText className="w-3 h-3" /> GSTR-3B_FY25.pdf
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-border hidden md:block" />
                  <div className="flex flex-col gap-1">
                    <span className="text-secondary">Location</span>
                    <span className="font-bold text-brand">Page 4, Table 3.1(a)</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Action Bar */}
            <div className="w-full md:w-56 border-l border-border bg-white p-6 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-bold tracking-widest text-secondary uppercase mb-4">Decision Review</div>
                <div className="flex flex-col gap-2">
                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 rounded-sm transition-colors">Approve</button>
                  <button className="w-full bg-background border border-border hover:bg-border/50 text-brand font-bold text-xs py-2.5 rounded-sm transition-colors">Send Back</button>
                  <button className="w-full bg-red-50 text-red-700 hover:bg-red-100 font-bold text-xs py-2.5 rounded-sm transition-colors">Reject</button>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border">
                <div className="text-[10px] font-bold tracking-widest text-secondary uppercase mb-3">Audit Trail</div>
                <div className="flex items-center gap-2 text-xs font-mono text-secondary">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  System extraction verified by Risk Model v2.1
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
