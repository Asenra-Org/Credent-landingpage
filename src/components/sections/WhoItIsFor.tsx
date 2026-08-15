"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ROLES = [
  { title: "CREDIT ANALYST", desc: "Structured financial review." },
  { title: "CREDIT MANAGER", desc: "Case review and exceptions." },
  { title: "RISK TEAM", desc: "Investigation and verification." },
  { title: "LENDING OPERATIONS", desc: "Consistent credit workflow." }
];

export function WhoItIsFor() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".role-item",
      { opacity: 0, y: 30 },
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
    <section ref={containerRef} id="for-lenders" className="py-16 md:py-24 px-6 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-light leading-[1.1] tracking-tight text-brand mb-24 max-w-2xl">
          Built around the people <br />
          <span className="font-extrabold">who make credit decisions.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {ROLES.map((role, idx) => (
            <div key={idx} className={`role-item border-t-2 border-brand pt-6 ${idx % 2 === 1 ? 'md:mt-24' : ''}`}>
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand mb-4">
                {role.title}
              </h3>
              <p className="text-xl text-secondary">
                {role.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
