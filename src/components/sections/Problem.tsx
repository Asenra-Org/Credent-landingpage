"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const COGNITIVE_LOAD = [
  "READ",
  "EXTRACT",
  "COMPARE",
  "CALCULATE",
  "VERIFY",
  "REVIEW"
];

const RAW_DOCS = [
  "GST",
  "BANK",
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
      { opacity: 1, x: 0, duration: 0.6, stagger: 0.05, ease: "power2.out" },
      "-=0.6"
    );

    tl.fromTo(
      ".load-step",
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.6, stagger: 0.05, ease: "power2.out" },
      "-=0.6"
    );

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-6 bg-white border-t border-border">
      <div className="max-w-6xl mx-auto">
        
        {/* Editorial Headline */}
        <div className="max-w-4xl mb-24">
          <h2 className="problem-text text-3xl md:text-5xl font-light leading-[1.1] tracking-tight text-brand">
            A credit officer doesn't receive a borrower. <br />
            <span className="font-extrabold">They receive a pile of documents.</span>
          </h2>
        </div>

        {/* Asymmetric Split: Fragmented vs Cognitive Load */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative">
          
          {/* Vertical divider */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          {/* LEFT: Fragmented Documents */}
          <div className="flex flex-col gap-4 items-start">
            <div className="problem-text text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-8">
              Raw Information
            </div>
            {RAW_DOCS.map((doc, idx) => (
              <div key={doc} className={`doc-frag border border-border p-4 bg-background w-full max-w-sm flex items-center justify-between ${idx % 2 === 1 ? 'ml-8' : ''}`}>
                <span className="font-mono text-sm font-semibold">{doc}</span>
                <div className="w-1.5 h-1.5 bg-border rounded-full" />
              </div>
            ))}
          </div>

          {/* RIGHT: Cognitive Load */}
          <div className="flex flex-col gap-6 items-start md:items-end text-left md:text-right">
            <div className="problem-text text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-6 md:mb-8">
              Operational Complexity
            </div>
            {COGNITIVE_LOAD.map((step, idx) => (
              <div key={step} className="load-step flex items-center gap-4 group">
                <span className="hidden md:block text-border group-hover:text-primary transition-colors">—</span>
                <span className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand/20 group-hover:text-brand transition-colors cursor-default">
                  {step}
                </span>
                <span className="md:hidden text-border group-hover:text-primary transition-colors">—</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
