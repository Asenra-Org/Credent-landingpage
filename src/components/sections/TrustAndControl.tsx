"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ARCHITECTURE = [
  "IDENTITY",
  "ACCESS CONTROL",
  "DOCUMENT VALIDATION",
  "DETERMINISTIC CALCULATIONS",
  "EVIDENCE",
  "HUMAN REVIEW",
  "AUDIT TRAIL"
];

export function TrustAndControl() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".arch-layer",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
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
    <section ref={containerRef} id="trust" className="py-16 md:py-24 px-6 bg-brand text-white border-t border-brand">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
        
        <div className="flex-1 w-full flex flex-col font-mono text-sm tracking-widest font-bold">
          <div className="border-t border-white/10" />
          {ARCHITECTURE.map((layer, idx) => (
            <div key={idx} className="arch-layer flex items-center justify-between py-5 border-b border-white/10 group">
              <span className="text-white/30 group-hover:text-primary transition-colors">0{idx + 1}</span>
              <span className="group-hover:text-white transition-colors text-white/80">{layer}</span>
            </div>
          ))}
        </div>

        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-light leading-[1.1] tracking-tight mb-8">
            Trust is built into <br />
            <span className="font-extrabold">the workflow.</span>
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            ACAS's architecture ensures enterprise-grade security and compliance. From strict role-based access control to immutable audit logs, every step of the credit process is secure, traceable, and structurally sound.
          </p>
        </div>

      </div>
    </section>
  );
}
