"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cloud, Server, Webhook } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const DEPLOYMENT_OPTIONS = [
  {
    icon: Cloud,
    title: "PRIVATE MANAGED",
    desc: "Controlled environment managed for the institution."
  },
  {
    icon: Server,
    title: "ON-PREMISE",
    desc: "Deploy within the institution's infrastructure."
  },
  {
    icon: Webhook,
    title: "API / INTEGRATION",
    desc: "Connect Cresem capabilities to existing lending workflows."
  }
];

export function Deployment() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".dep-card",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="deployment" className="py-24 px-6 bg-white border-b border-border">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight text-brand">
            Designed for <span className="font-extrabold">institutional deployment.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DEPLOYMENT_OPTIONS.map((opt, idx) => {
            const Icon = opt.icon;
            return (
              <div key={idx} className="dep-card border border-border p-8 bg-[#fafafa] flex flex-col gap-6">
                <Icon className="w-6 h-6 text-brand/60" />
                <div>
                  <h3 className="text-sm font-bold tracking-widest text-brand uppercase mb-2">
                    {opt.title}
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed font-medium">
                    {opt.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
