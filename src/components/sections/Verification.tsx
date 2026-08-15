"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, AlertCircle, X } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CHECKS = [
  {
    sources: ["GST Reported Sales", "Bank Inflows"],
    status: "REVIEW REQUIRED",
    variance: "5.5%",
    state: "amber"
  },
  {
    sources: ["Financial Statements", "ITR Filings"],
    status: "CONSISTENT",
    variance: "0.0%",
    state: "emerald"
  },
  {
    sources: ["Bank Debits", "Tax Challans"],
    status: "MISMATCH",
    variance: "Missing",
    state: "red"
  }
];

export function Verification() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".check-row",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-6 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
        
        <div className="flex-1 w-full order-2 md:order-1">
          <div className="flex flex-col border border-border bg-white p-6 md:p-10 font-mono text-sm">
            
            <div className="grid grid-cols-12 gap-4 pb-4 border-b border-border text-[10px] font-bold tracking-widest text-secondary uppercase">
              <div className="col-span-6">Cross-Check Target</div>
              <div className="col-span-3 text-right">Variance</div>
              <div className="col-span-3 text-right">Status</div>
            </div>

            <div className="flex flex-col">
              {CHECKS.map((check, idx) => (
                <div key={idx} className="check-row grid grid-cols-12 gap-4 py-6 border-b border-border last:border-0 last:pb-0 items-center">
                  <div className="col-span-6 flex flex-col gap-1">
                    <span className="font-semibold text-brand">{check.sources[0]}</span>
                    <span className="text-secondary text-xs">↔ {check.sources[1]}</span>
                  </div>
                  <div className="col-span-3 text-right font-bold text-brand">
                    {check.variance}
                  </div>
                  <div className="col-span-3 flex justify-end">
                    <div className={`
                      flex items-center gap-1.5 px-2 py-1 rounded-sm text-[10px] font-bold tracking-wide uppercase
                      ${check.state === 'amber' ? 'bg-amber-50 text-amber-800 border border-amber-200' : ''}
                      ${check.state === 'emerald' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : ''}
                      ${check.state === 'red' ? 'bg-red-50 text-red-800 border border-red-200' : ''}
                    `}>
                      {check.state === 'emerald' && <Check className="w-3 h-3" />}
                      {check.state === 'amber' && <AlertCircle className="w-3 h-3" />}
                      {check.state === 'red' && <X className="w-3 h-3" />}
                      {check.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        <div className="flex-1 order-1 md:order-2">
          <h2 className="text-3xl md:text-5xl font-light leading-[1.1] tracking-tight text-brand mb-8">
            Don't just extract. <br />
            <span className="font-extrabold">Cross-check.</span>
          </h2>
          <p className="text-lg text-secondary leading-relaxed max-w-md">
            Surface inconsistencies for review. Cresm automatically compares financial metrics across different documents to identify structural risks before manual human review even begins.
          </p>
        </div>

      </div>
    </section>
  );
}
