"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function DeploymentAndCTA() {
  return (
    <section className="bg-white border-t border-border">
      
      {/* Deployment Section */}
      <div className="py-16 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-24">
          
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-light leading-[1.1] tracking-tight text-brand mb-8">
              Designed for <br />
              <span className="font-extrabold">institutional environments.</span>
            </h2>
            <p className="text-lg text-secondary leading-relaxed max-w-md">
              ACAS is designed to support controlled enterprise deployment models, ensuring your data never leaves a trusted boundary.
            </p>
          </div>
          
          <div className="flex-1 flex flex-col gap-12 font-mono text-sm">
            <div className="border-t-2 border-brand pt-6">
              <h3 className="font-bold tracking-widest text-brand uppercase mb-4">ACAS-Managed</h3>
              <p className="text-secondary mb-2 text-xs uppercase tracking-wide">Private Environment</p>
              <p className="text-secondary leading-relaxed">Dedicated, single-tenant infrastructure managed by our team within a secure VPC.</p>
            </div>
            
            <div className="border-t-2 border-brand pt-6">
              <h3 className="font-bold tracking-widest text-brand uppercase mb-4">Customer-Managed</h3>
              <p className="text-secondary mb-2 text-xs uppercase tracking-wide">On-Premise</p>
              <p className="text-secondary leading-relaxed">Deployed directly into your own infrastructure for absolute data sovereignty.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Final CTA Section */}
      <div id="access" className="py-16 md:py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          <div className="mb-12">
            <Image src="/logo.jpg" alt="ACAS Logo" width={48} height={48} className="w-12 h-12 object-contain" />
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-[5rem] font-light leading-[1.05] tracking-tight text-brand mb-8">
            The credit decision layer <br />
            <span className="font-extrabold">for modern lenders.</span>
          </h2>
          
          <p className="text-xl text-secondary max-w-2xl mx-auto mb-16 leading-relaxed">
            ACAS is being built to turn fragmented borrower information into structured, reviewable credit intelligence.
          </p>
          
          <Link href="/demo" className="bg-brand text-white px-8 py-4 text-base font-semibold hover:bg-brand/90 transition-colors flex items-center gap-2 group">
            Request Early Access
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
        </div>
      </div>
      
    </section>
  );
}
