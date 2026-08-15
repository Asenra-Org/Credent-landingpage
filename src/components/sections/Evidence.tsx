"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TRACE_STEPS = [
  { label: "Fact", value: "₹8.42 Cr" },
  { label: "Document", value: "GSTR-3B_FY2025.pdf" },
  { label: "Page", value: "Page 4" },
  { label: "Field", value: "Table 3.1(a) Outward taxable supplies" },
  { label: "Value", value: "8,42,10,000" }
];

export function Evidence() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".trace-step",
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <div>
          <h2 className="text-3xl md:text-5xl font-light leading-[1.1] tracking-tight text-brand mb-8">
            Every important fact <br />
            <span className="font-extrabold">should have a source.</span>
          </h2>
          <p className="text-lg text-secondary leading-relaxed mb-12">
            Cresm is designed around evidence-backed credit review. Every extracted data point is explicitly mapped back to the underlying financial document, page, and exact field coordinate.
          </p>
        </div>

        <div className="bg-background border border-border p-8 md:p-12 relative">
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 to-transparent pointer-events-none" />

          <div className="flex flex-col relative z-10 font-mono">
            {TRACE_STEPS.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="trace-step flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 hover:bg-white border border-transparent hover:border-border transition-colors">
                  <span className="text-xs font-bold text-secondary tracking-widest uppercase">{step.label}</span>
                  <span className="text-sm font-bold text-brand bg-white sm:bg-transparent px-2 sm:px-0 py-1 sm:py-0 border border-border sm:border-transparent rounded-sm">{step.value}</span>
                </div>
                {idx < TRACE_STEPS.length - 1 && (
                  <div className="trace-step ml-4 sm:ml-auto sm:mr-4 my-1 text-border">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
