"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STAGES = [
  "DOCUMENTS",
  "STRUCTURED FACTS",
  "FINANCIAL ANALYSIS",
  "CROSS-VERIFICATION",
  "EVIDENCE",
  "HUMAN REVIEW"
];

export function Transformation() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 50%",
      }
    });

    tl.fromTo(
      ".trans-head",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    tl.fromTo(
      ".trans-step",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" },
      "-=0.5"
    );

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-6 bg-brand text-white overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        <h2 className="trans-head text-3xl md:text-5xl font-light leading-[1.1] tracking-tight mb-24">
          Turn fragmented financial information into <br />
          <span className="font-extrabold">one reviewable credit case.</span>
        </h2>

        <div className="flex flex-col items-center w-full relative">
          {STAGES.map((stage, idx) => (
            <React.Fragment key={stage}>
              <div className="trans-step w-full py-8 md:py-12 flex justify-center items-center border-t border-white/10 relative group">
                {/* Background hover highlight for editorial feel */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500" />
                
                <span className="relative z-10 text-2xl md:text-5xl font-extrabold tracking-widest uppercase text-white/50 group-hover:text-white transition-colors duration-300">
                  {stage}
                </span>
              </div>
              
              {idx < STAGES.length - 1 && (
                <div className="trans-step relative z-20 -my-4 bg-brand rounded-full p-2 border border-white/10 text-primary">
                  <ArrowDown className="w-5 h-5" />
                </div>
              )}
            </React.Fragment>
          ))}
          {/* Final border */}
          <div className="w-full border-t border-white/10" />
        </div>

      </div>
    </section>
  );
}
