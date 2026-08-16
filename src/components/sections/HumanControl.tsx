"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FLOW = [
  "DOCUMENTS",
  "CRESEM ANALYSIS",
  "EVIDENCE & VERIFICATION",
  "CREDIT OFFICER REVIEW",
  "FINAL DECISION"
];

export function HumanControl() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
      }
    });

    tl.fromTo(
      ".hc-text",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power3.out" }
    );

    tl.fromTo(
      ".hc-node",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" },
      "-=0.6"
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 px-6 bg-white border-b border-border">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        <div className="max-w-3xl mb-24">
          <div className="hc-text text-[10px] font-bold tracking-[0.2em] text-secondary uppercase mb-8 border-b border-border pb-4 inline-block">
            Institutional Review
          </div>
          <h2 className="hc-text text-3xl md:text-5xl font-light leading-[1.1] tracking-tight text-brand mb-8">
            The system prepares the case. <br />
            <span className="font-extrabold">The credit team makes the decision.</span>
          </h2>
          <p className="hc-text text-lg text-secondary leading-relaxed">
            Cresem is designed to support credit professionals, not replace institutional judgment. It structures the data and verifies the math, handing a clean, auditable file to your authorized personnel for final sign-off.
          </p>
        </div>

        <div className="flex flex-col items-center w-full max-w-lg font-mono text-[11px] font-bold tracking-widest uppercase relative">
          {/* Subtle background line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-border/50 -translate-x-1/2 z-0" />
          
          {FLOW.map((node, idx) => (
            <React.Fragment key={idx}>
              <div className={`hc-node relative z-10 w-full py-5 px-6 border ${
                  idx === 3 
                    ? 'border-brand bg-brand text-white shadow-xl scale-105' 
                    : idx === 4
                    ? 'border-emerald-500/30 bg-emerald-50 text-emerald-800'
                    : 'border-border bg-white text-secondary'
                }`}>
                <div className="flex items-center justify-center gap-3">
                  {node}
                  {idx === 4 && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                </div>
              </div>
              {idx < FLOW.length - 1 && (
                <div className="hc-node relative z-10 py-3 text-border shrink-0 bg-white">
                  <ArrowDown className="w-4 h-4" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}
