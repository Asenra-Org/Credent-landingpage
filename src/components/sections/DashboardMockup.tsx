"use client";

import React from "react";
import { AlertCircle, CheckCircle2, ChevronRight, FileSpreadsheet, ShieldAlert, FileText, CornerDownRight } from "lucide-react";

export function DashboardMockup() {
  return (
    <section id="platform" className="py-16 md:py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-[clamp(2.5rem,4vw,4rem)] uppercase font-extrabold text-brand leading-[1.1] tracking-tight max-w-4xl mx-auto">
            Institutional credibility. <br />
            <span className="text-primary">Decision-ready clarity.</span>
          </h2>
        </div>

        {/* Dashboard DOM Mockup */}
        <div className="w-full bg-[#fcfcfc] border border-border rounded-2xl shadow-[0_32px_64px_-12px_rgba(10,37,64,0.15)] overflow-hidden flex flex-col h-[800px]">
          
          {/* Header */}
          <header className="h-14 border-b border-border bg-white flex items-center justify-between px-6 shrink-0">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-primary" />
                <span className="font-bold tracking-tight text-brand">ACAS</span>
              </div>
              <div className="h-4 w-[1px] bg-border" />
              <div className="flex items-center gap-2 text-sm text-secondary font-medium">
                <span>Acme Corp</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
                <span className="text-brand">Case #8429</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="px-3 py-1 rounded bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wider">
                Needs Review
              </div>
              <div className="w-8 h-8 rounded-full bg-border" />
            </div>
          </header>

          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar (Documents & Steps) */}
            <aside className="w-64 border-r border-border bg-white/50 hidden lg:flex flex-col p-4 gap-6 shrink-0">
              <div>
                <h3 className="text-xs font-semibold text-secondary uppercase tracking-wider mb-3">Sources</h3>
                <ul className="flex flex-col gap-1">
                  <li className="flex items-center gap-2 text-sm px-3 py-2 rounded bg-brand/5 text-brand font-medium">
                    <FileSpreadsheet className="w-4 h-4 text-primary" /> GSTR-3B
                  </li>
                  <li className="flex items-center gap-2 text-sm px-3 py-2 rounded text-secondary hover:bg-gray-50 cursor-pointer transition-colors">
                    <FileText className="w-4 h-4" /> Bank Statement
                  </li>
                  <li className="flex items-center gap-2 text-sm px-3 py-2 rounded text-secondary hover:bg-gray-50 cursor-pointer transition-colors">
                    <FileSpreadsheet className="w-4 h-4" /> P&L FY24
                  </li>
                  <li className="flex items-center gap-2 text-sm px-3 py-2 rounded text-secondary hover:bg-gray-50 cursor-pointer transition-colors">
                    <FileSpreadsheet className="w-4 h-4" /> Balance Sheet
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-secondary uppercase tracking-wider mb-3">Integrity Checks</h3>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-sm text-brand">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Identity Verified
                  </div>
                  <div className="flex items-center gap-2 text-sm text-brand">
                    <ShieldAlert className="w-4 h-4 text-amber-500" /> GST Mismatch Detected
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto p-6 md:p-10 bg-[#f8f9fa] flex flex-col gap-8">
              
              {/* Financial Metrics Bento */}
              <div>
                <h3 className="text-lg font-bold text-brand mb-4">Financial Analysis</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 grid-flow-dense">
                  <div className="bg-white p-5 rounded-xl border border-border shadow-sm flex flex-col gap-1 col-span-1">
                    <span className="text-sm text-secondary">Revenue (TTM)</span>
                    <span className="text-2xl font-bold text-brand">₹8.42 Cr</span>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-border shadow-sm flex flex-col gap-1 col-span-1">
                    <span className="text-sm text-secondary">EBITDA</span>
                    <span className="text-2xl font-bold text-brand">₹1.15 Cr</span>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-border shadow-sm flex flex-col gap-1 col-span-1">
                    <span className="text-sm text-secondary">DSCR</span>
                    <span className="text-2xl font-bold text-brand">1.45x</span>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-border shadow-sm flex flex-col gap-1 col-span-1">
                    <span className="text-sm text-secondary">Debt / Equity</span>
                    <span className="text-2xl font-bold text-brand">1.2</span>
                  </div>
                </div>
              </div>

              {/* Cross-Verification & Evidence */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Findings */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-bold text-brand">Risk Findings</h3>
                  <div className="bg-white rounded-xl border border-border shadow-sm divide-y divide-border">
                    <div className="p-5 flex gap-4 items-start">
                      <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-brand text-sm mb-1">GST vs Bank Inflow Variance</h4>
                        <p className="text-sm text-secondary leading-relaxed">
                          Reported GST sales (₹8.42 Cr) exceed total identified banking inflows (₹7.95 Cr) by 5.5%. Requires investigation.
                        </p>
                      </div>
                    </div>
                    <div className="p-5 flex gap-4 items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-brand text-sm mb-1">Tax Payments Verified</h4>
                        <p className="text-sm text-secondary leading-relaxed">
                          Challan payments match bank statement debits for the fiscal year.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Evidence Traceability */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-bold text-brand">Evidence Trace</h3>
                  <div className="bg-brand text-white rounded-xl shadow-sm p-6 flex flex-col gap-6">
                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-white/70">Selected Value</span>
                      <span className="font-bold text-xl">₹8.42 Cr</span>
                    </div>
                    <div className="flex flex-col gap-3 font-mono text-sm">
                      <div className="flex items-center gap-3">
                        <span className="text-primary">→</span>
                        <span className="text-white/50">Source:</span>
                        <span>GSTR-3B_FY24.pdf</span>
                      </div>
                      <div className="flex items-center gap-3 ml-4 text-white/70">
                        <CornerDownRight className="w-4 h-4" />
                        <span className="text-white/50">Page:</span>
                        <span>4</span>
                      </div>
                      <div className="flex items-center gap-3 ml-8 text-white/70">
                        <CornerDownRight className="w-4 h-4" />
                        <span className="text-white/50">Field:</span>
                        <span className="bg-white/10 px-2 py-0.5 rounded">3.1 (a) Outward taxable supplies</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </main>
          </div>

          {/* Action Footer */}
          <footer className="h-20 border-t border-border bg-white flex items-center justify-between px-6 shrink-0 z-10">
            <div className="text-sm text-secondary font-medium flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              Calculations deterministic. Zero hallucinations.
            </div>
            <div className="flex items-center gap-3">
              <button className="px-5 py-2.5 rounded-md text-sm font-medium text-brand hover:bg-gray-50 border border-transparent transition-colors">
                Send Back
              </button>
              <button className="px-5 py-2.5 rounded-md text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 transition-colors">
                Reject
              </button>
              <button className="px-5 py-2.5 rounded-md text-sm font-medium bg-brand text-white hover:bg-brand/90 transition-colors shadow-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Approve Case
              </button>
            </div>
          </footer>

        </div>
      </div>
    </section>
  );
}
