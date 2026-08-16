"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Lock, FileKey, History, FileCheck, Users, Search, Network } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SECURITY_FEATURES = [
  { icon: Users, title: "Role-Based Access Control" },
  { icon: Shield, title: "Tenant Isolation" },
  { icon: Lock, title: "Encrypted Document Storage" },
  { icon: History, title: "Immutable Audit Trails" },
  { icon: Search, title: "Evidence Traceability" },
  { icon: FileCheck, title: "Human Approval Workflows" },
  { icon: FileKey, title: "Secure Document Validation" },
  { icon: Network, title: "Deployment Flexibility" }
];

export function Security() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".sec-item",
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="security" className="py-24 px-6 bg-[#fafafa] border-b border-border">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-16 max-w-2xl">
          <div className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase mb-8 border-b border-border pb-4 inline-block">
            Enterprise Grade
          </div>
          <h2 className="text-3xl md:text-4xl font-light leading-[1.2] tracking-tight text-brand">
            Built for sensitive <br />
            <span className="font-extrabold">financial information.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border w-full">
          {SECURITY_FEATURES.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={idx} className="sec-item bg-white p-6 flex flex-col items-start gap-4">
                <Icon className="w-5 h-5 text-secondary" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand">{feat.title}</span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
