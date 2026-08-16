"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, X } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const BEFORE_ITEMS = [
  "Multiple disorganized documents",
  "Manual data extraction",
  "Spreadsheet-based calculations",
  "Manual cross-document checking",
  "Scattered, untraceable evidence",
  "Manual report preparation"
];

const AFTER_ITEMS = [
  "Structured document ingestion",
  "Deterministic financial extraction",
  "Automated cross-document verification",
  "Persistent evidence traceability",
  "Centralized credit case",
  "Human-controlled review"
];

export function Transformation() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });

    tl.fromTo(
      ".split-card",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
    );

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 px-6 bg-white border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          
          {/* BEFORE CARD */}
          <div className="split-card border border-border bg-[#fafafa] p-8 lg:p-12">
            <div className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase mb-8 border-b border-border pb-4">
              Status Quo
            </div>
            
            <div className="space-y-6">
              {BEFORE_ITEMS.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-0.5 bg-red-100 text-red-700 p-1 rounded-sm shrink-0">
                    <X className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-secondary/80 font-medium text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CRESEM CARD */}
          <div className="split-card border border-brand/20 bg-brand text-white p-8 lg:p-12 relative overflow-hidden">
            {/* Subtle background texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-50" />
            
            <div className="relative z-10">
              <div className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase mb-8 border-b border-white/10 pb-4">
                The Cresem Standard
              </div>
              
              <div className="space-y-6">
                {AFTER_ITEMS.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-0.5 bg-white text-brand p-1 rounded-sm shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-white font-medium text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
