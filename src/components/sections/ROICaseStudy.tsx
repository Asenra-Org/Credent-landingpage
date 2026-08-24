import React from 'react';

export function ROICaseStudy() {
  return (
    <section className="w-full bg-white border-b border-border py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[10px] font-bold tracking-widest text-secondary uppercase mb-4">
            ROI CASE STUDY: SME UNDERWRITING
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-brand mb-6">
            Redefining the Velocity of Credit
          </h2>
          <p className="text-secondary max-w-2xl text-sm leading-relaxed">
            Traditional manual underwriting for SME loans is highly labor-intensive, fragmented, and prone to bottlenecks. Credent condenses the entire end-to-end process into minutes, eliminating human fatigue and subjectivity.
          </p>
        </div>

        <div className="border border-border">
          {/* TAT Comparison Table */}
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border bg-[#fafafa]">
            <div className="p-8 flex flex-col justify-center">
              <span className="font-mono text-[10px] uppercase tracking-widest text-secondary mb-2">Public Sector Banks</span>
              <span className="text-xl text-brand font-medium">8 to 45 Days</span>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="font-mono text-[10px] uppercase tracking-widest text-secondary mb-2">Private Sector Banks</span>
              <span className="text-xl text-brand font-medium">5 to 10 Days</span>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="font-mono text-[10px] uppercase tracking-widest text-secondary mb-2">Digital NBFCs</span>
              <span className="text-xl text-brand font-medium">24 to 72 Hours</span>
            </div>
            <div className="p-8 flex flex-col justify-center bg-brand text-white">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-2">Credent AI Engine</span>
              <span className="text-2xl text-white font-semibold">20-25 Minutes</span>
            </div>
          </div>

          {/* Deep Dive Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border bg-white border-t border-border">
            
            {/* Manual Process */}
            <div className="p-10 md:p-12">
              <h3 className="text-lg font-medium text-brand mb-8 flex items-center justify-between">
                <span>Traditional Manual Process</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-secondary border border-border px-2 py-1 bg-[#fafafa]">24-40 Hrs Active Work</span>
              </h3>
              <ul className="space-y-6">
                {[
                  { title: "Data Entry & Spreading (1-2 Days)", desc: "Manually re-keying balance sheets, P&L, and tax data into internal software." },
                  { title: "Ratio & Trend Analysis (1 Day)", desc: "Calculating current ratios, DSCR, and analyzing YoY trends manually." },
                  { title: "Qualitative Research (1 Day)", desc: "Checking MCA, GST, market position, and management background." },
                  { title: "Drafting CAM Report (1 Day)", desc: "Synthesizing findings into a subjective, manually formatted memo." }
                ].map((item, i) => (
                  <li key={i} className="flex flex-col">
                    <span className="text-sm font-semibold text-brand">{item.title}</span>
                    <span className="text-sm text-secondary mt-1">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Credent Advantage */}
            <div className="p-10 md:p-12 bg-white">
              <h3 className="text-lg font-medium text-brand mb-8 flex items-center justify-between">
                <span>The Credent Advantage</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-700 border border-emerald-200 bg-emerald-50 px-2 py-1">99.5% TAT Reduction</span>
              </h3>
              <div className="space-y-8">
                <div className="border-l-2 border-brand pl-4">
                  <h4 className="text-sm font-semibold text-brand">Massive Cost Reduction (OpEx)</h4>
                  <p className="text-sm text-secondary mt-2">Elevate highly skilled credit managers from data-entry clerks to strategic reviewers. Process 100x more loan applications without hiring 100x more underwriters.</p>
                </div>
                <div className="border-l-2 border-brand pl-4">
                  <h4 className="text-sm font-semibold text-brand">Faster Time-to-Yes</h4>
                  <p className="text-sm text-secondary mt-2">In SME lending, the first institution to issue a sanction letter wins the business. Reducing turnaround from 10 days to 25 minutes fundamentally increases conversion rates.</p>
                </div>
                <div className="border-l-2 border-brand pl-4">
                  <h4 className="text-sm font-semibold text-brand">Standardized Risk Assessment</h4>
                  <p className="text-sm text-secondary mt-2">Manual appraisals suffer from human fatigue. Credent applies the exact same rigorous analytical standard to file #1 and file #10,000.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
