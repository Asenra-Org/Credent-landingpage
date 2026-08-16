import React from "react";

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-[#fafafa] py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <h2 className="text-xs font-bold tracking-[0.2em] text-secondary uppercase whitespace-nowrap">
            Built for Credit Teams
          </h2>
          <div className="w-full md:w-px h-px md:h-6 bg-border/80"></div>
          <p className="text-[13px] text-secondary/70 font-semibold tracking-wide uppercase text-center md:text-left">
            Banks &middot; NBFCs &middot; Commercial Lenders &middot; Credit & Risk Teams &middot; Lending Operations
          </p>
        </div>
      </div>
    </section>
  );
}
