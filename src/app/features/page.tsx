import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Search, ArrowLeftRight, FileText, CheckCircle2 } from "lucide-react";

export default function FeaturesPage() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      <Nav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-6">
            Platform Capabilities
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight text-brand mb-8">
            Underwriting precision, <br />
            <span className="font-extrabold">at machine speed.</span>
          </h1>
          <p className="text-lg text-secondary leading-relaxed max-w-2xl mx-auto">
            A deep dive into how Cresem processes, verifies, and analyzes financial documents to give credit teams superhuman analytical abilities.
          </p>
        </div>
      </section>

      {/* Feature 1: Forensics */}
      <section className="py-16 md:py-24 px-6 border-t border-border bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative bg-background border border-border p-8 h-[400px] flex items-center justify-center">
            {/* Visual Mockup */}
            <div className="bg-white border border-border shadow-xl w-full max-w-sm p-6 relative">
              <div className="flex items-center gap-3 mb-6 border-b border-border pb-4">
                <Search className="w-5 h-5 text-red-500" />
                <span className="text-xs font-bold text-brand uppercase tracking-wider">Metadata Anomaly Detected</span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-secondary font-mono">Creation Tool</span>
                  <span className="text-red-600 font-mono font-medium">Adobe Illustrator CS6</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-secondary font-mono">Font Subsetting</span>
                  <span className="text-red-600 font-mono font-medium">Mismatched (Arial/Helvetica)</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-secondary font-mono">Modification Date</span>
                  <span className="text-red-600 font-mono font-medium">After statement period</span>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-brand mb-6">
              Document <span className="font-extrabold">Forensics.</span>
            </h2>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              Fraudulent financial documents are becoming increasingly sophisticated. Cresem's AI goes beyond OCR, analyzing file metadata, font subsetting anomalies, and hidden layer manipulations to detect tampered bank statements and tax returns instantly.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-brand">Detects PDF editing software traces (Illustrator, Photoshop, Acrobat).</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-brand">Identifies mismatched typography and copy-paste manipulation.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-brand">Flags metadata anomalies in creation vs. modification timestamps.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Feature 2: Cross-Validation */}
      <section className="py-16 md:py-24 px-6 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-brand mb-6">
              GST & Bank <span className="font-extrabold">Cross-Validation.</span>
            </h2>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              Never rely on isolated data points again. The system automatically triangulates bank statement inflows against reported GST returns, instantly flagging discrepancies in reported turnover.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-brand">Automated reconciliation of Bank Credits vs GSTR-3B Outward Supplies.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-brand">Detects circular transactions and intra-company transfers.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-brand">Highlights seasonal revenue manipulation.</span>
              </li>
            </ul>
          </div>
          <div className="relative bg-white border border-border p-8 h-[400px] flex items-center justify-center">
            {/* Visual Mockup */}
            <div className="w-full max-w-md space-y-4">
              <div className="bg-background border border-border p-4 flex justify-between items-center">
                <span className="font-mono text-xs text-secondary">Q3 Bank Inflows (Adjusted)</span>
                <span className="font-mono font-medium">₹12.4 Cr</span>
              </div>
              <div className="flex justify-center text-border">
                <ArrowLeftRight className="w-6 h-6 rotate-90" />
              </div>
              <div className="bg-background border border-border p-4 flex justify-between items-center">
                <span className="font-mono text-xs text-secondary">Q3 GSTR-3B Turnover</span>
                <span className="font-mono font-medium">₹12.1 Cr</span>
              </div>
              <div className="mt-6 bg-green-50 border border-green-200 p-4 text-center">
                <span className="text-xs font-bold text-green-800 uppercase tracking-widest">Variance: 2.4% (Acceptable)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Automated CAM */}
      <section className="py-16 md:py-24 px-6 border-t border-border bg-brand text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative border border-white/10 bg-white/5 p-8 h-[400px] flex items-center justify-center">
             {/* Visual Mockup */}
             <div className="bg-brand border border-white/20 shadow-2xl w-full max-w-sm p-6 relative">
              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <span className="text-xs font-bold text-white uppercase tracking-wider">Credit Appraisal Memo</span>
                <span className="font-mono text-[10px] text-primary">Generated in 1m 42s</span>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-3">
                    <div className="text-[10px] text-white/50 font-mono mb-1">DSCR</div>
                    <div className="font-semibold text-white">1.85x</div>
                  </div>
                  <div className="bg-white/5 p-3">
                    <div className="text-[10px] text-white/50 font-mono mb-1">Debt/Equity</div>
                    <div className="font-semibold text-white">0.42</div>
                  </div>
                  <div className="bg-white/5 p-3">
                    <div className="text-[10px] text-white/50 font-mono mb-1">Current Ratio</div>
                    <div className="font-semibold text-white">1.2x</div>
                  </div>
                  <div className="bg-white/5 p-3">
                    <div className="text-[10px] text-white/50 font-mono mb-1">Net Margin</div>
                    <div className="font-semibold text-white">14.2%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-white mb-6">
              Automated <span className="font-extrabold">CAM Generation.</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              Turn a pile of raw, unstructured PDFs into a structured, human-readable Credit Appraisal Memo (CAM) in under two minutes. Pre-calculated financial ratios, cash flow modeling, and risk summaries ready for the credit committee.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-white/90">Instant calculation of DSCR, Current Ratios, and leverage metrics.</span>
              </li>
              <li className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-white/90">Standardized formatting across all borrower profiles.</span>
              </li>
              <li className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-white/90">Directly exportable to your internal LOS or PDF formats.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
