"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WORKFLOW = [
  { num: "01", title: "INGEST", desc: "Bring borrower documents into one credit case." },
  { num: "02", title: "UNDERSTAND", desc: "Extract relevant financial information." },
  { num: "03", title: "CALCULATE", desc: "Generate deterministic financial metrics." },
  { num: "04", title: "VERIFY", desc: "Cross-check information across sources." },
  { num: "05", title: "TRACE", desc: "Connect important facts to their source." },
  { num: "06", title: "REVIEW", desc: "Give the credit team a structured case for decisioning." },
];

export function Workflow() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".wf-item",
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
    <section ref={containerRef} id="workflow" className="py-16 px-6 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-16 border-b border-border pb-4">
          How Cresm Works
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {WORKFLOW.map((item) => (
            <div key={item.num} className="wf-item flex flex-col gap-4 group">
              <div className="font-mono text-sm text-border group-hover:text-primary transition-colors duration-300">
                {item.num}
              </div>
              <h3 className="text-xl font-extrabold tracking-tight text-brand uppercase">
                {item.title}
              </h3>
              <p className="text-secondary leading-relaxed max-w-sm">
                {item.desc}
              </p>
              {/* Subtle underline expanding on hover */}
              <div className="h-[1px] w-full bg-border mt-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
