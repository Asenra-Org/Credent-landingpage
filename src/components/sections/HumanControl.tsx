"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FLOW = [
  "Cresem Assessment",
  "Credit Review",
  "Credit Officer",
  "Approve / Reject / Send Back",
  "Institutional Decision"
];

export function HumanControl() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".hc-node",
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
    <section ref={containerRef} className="py-16 md:py-24 px-6 bg-white border-t border-border">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        <h2 className="text-3xl md:text-5xl font-light leading-[1.1] tracking-tight text-brand mb-8">
          The system prepares the case. <br />
          <span className="font-extrabold">The institution makes the decision.</span>
        </h2>
        <p className="text-lg text-secondary leading-relaxed max-w-2xl mb-24">
          Cresem is not an autonomous lending system. It structures the data and verifies the math, handing a clean, auditable file to your authorized personnel for final sign-off.
        </p>

        <div className="flex flex-col items-center w-full max-w-sm font-mono text-sm font-bold tracking-widest uppercase">
          {FLOW.map((node, idx) => (
            <React.Fragment key={idx}>
              <div className={`hc-node w-full py-4 px-6 border border-border text-center ${idx === 2 ? 'bg-brand text-white' : 'bg-background text-brand'}`}>
                {node}
              </div>
              {idx < FLOW.length - 1 && (
                <div className="hc-node py-2 text-border">
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
