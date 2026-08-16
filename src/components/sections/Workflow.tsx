"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Database, FileCode2, Search, UserCheck } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WORKFLOW = [
  { 
    num: "01", 
    title: "INGEST", 
    desc: "Borrower documents are collected and organized into a persistent credit case.",
    icon: Database
  },
  { 
    num: "02", 
    title: "STRUCTURE", 
    desc: "Financial and business information is extracted into structured data.",
    icon: FileCode2
  },
  { 
    num: "03", 
    title: "VERIFY", 
    desc: "Financial values are calculated deterministically and checked across source documents.",
    icon: Search
  },
  { 
    num: "04", 
    title: "REVIEW", 
    desc: "Credit teams receive an evidence-backed case for human review and decisioning.",
    icon: UserCheck
  }
];

export function Workflow() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
      }
    });

    tl.fromTo(
      ".wf-item",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
    );
    
    tl.fromTo(
      ".wf-connector",
      { scaleX: 0, transformOrigin: "left" },
      { scaleX: 1, duration: 0.8, stagger: 0.2, ease: "power2.inOut" },
      "-=1.2"
    );

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="workflow" className="py-24 px-6 bg-white border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase mb-24 border-b border-border pb-4 inline-block">
          How Cresem Works
        </div>
        
        <div className="flex flex-col md:flex-row relative">
          {WORKFLOW.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={item.num} className="wf-item flex-1 relative group md:px-6 first:pl-0 last:pr-0 pb-12 md:pb-0">
                
                {/* Horizontal Connector (Desktop) */}
                {idx < WORKFLOW.length - 1 && (
                  <div className="hidden md:block wf-connector absolute top-6 left-[calc(50%+24px)] right-[calc(-50%+24px)] h-px bg-border z-0" />
                )}
                
                {/* Vertical Connector (Mobile) */}
                {idx < WORKFLOW.length - 1 && (
                  <div className="md:hidden wf-connector absolute top-12 bottom-0 left-6 w-px bg-border z-0" style={{ transformOrigin: "top" }} />
                )}

                <div className="relative z-10 flex md:flex-col gap-6 md:gap-8">
                  {/* Node */}
                  <div className="w-12 h-12 rounded-sm border border-border bg-[#fafafa] flex items-center justify-center shrink-0 group-hover:border-brand/30 group-hover:bg-brand/5 transition-colors">
                    <Icon className="w-5 h-5 text-secondary group-hover:text-brand transition-colors" />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <div className="font-mono text-[10px] text-secondary mb-2">
                      {item.num}
                    </div>
                    <h3 className="text-base font-bold tracking-widest text-brand uppercase mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-secondary leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
