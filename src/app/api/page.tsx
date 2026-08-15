import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Code2, Webhook, Terminal, CheckCircle2, Server } from "lucide-react";

export default function ApiPage() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      <Nav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-6">
            For Developers & CTOs
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight text-brand mb-8">
            Integrate in hours, <br />
            <span className="font-extrabold">not sprints.</span>
          </h1>
          <p className="text-lg text-secondary leading-relaxed max-w-2xl mx-auto mb-10">
            A beautifully designed REST API built to drop directly into your existing Loan Origination System (LOS). Send us raw PDFs, receive structured intelligence.
          </p>
          <button className="bg-brand text-white px-6 py-3 text-sm font-semibold hover:bg-brand/90 transition-colors inline-flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            Read API Documentation
          </button>
        </div>
      </section>

      {/* API Overview */}
      <section className="py-16 md:py-24 px-6 border-t border-border bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-brand mb-6">
              Developer-Friendly <span className="font-extrabold">REST API.</span>
            </h2>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              No complex SDKs or legacy protocols. Our API is built on modern web standards, returning predictable, strongly-typed JSON. Whether you're building a custom frontend or integrating with a legacy core banking system, Cresm adapts to your stack.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-brand">Simple, token-based Bearer authentication.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-brand">Idempotent endpoints for safe retries.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-brand">Clear, actionable HTTP error codes and messages.</span>
              </li>
            </ul>
          </div>
          <div className="bg-[#0A2540] text-white p-6 rounded-sm shadow-2xl relative overflow-hidden">
            {/* Window controls */}
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <pre className="font-mono text-xs sm:text-sm leading-loose overflow-x-auto text-blue-300">
              <span className="text-pink-400">POST</span> <span className="text-green-300">/v1/cases/analyze</span>
              <br/><br/>
              <span className="text-white/50">// Request payload</span><br/>
              {"{"}
              <br/>
              {"  "}<span className="text-blue-300">"borrower_id"</span>: <span className="text-amber-300">"cus_9s8d7f6g"</span>,
              <br/>
              {"  "}<span className="text-blue-300">"documents"</span>: [
              <br/>
              {"    {"}
              <br/>
              {"      "}<span className="text-blue-300">"type"</span>: <span className="text-amber-300">"bank_statement"</span>,
              <br/>
              {"      "}<span className="text-blue-300">"file_url"</span>: <span className="text-amber-300">"s3://..."</span>
              <br/>
              {"    }"}
              <br/>
              {"  ]"}
              <br/>
              {"}"}
            </pre>
          </div>
        </div>
      </section>

      {/* Webhooks */}
      <section className="py-16 md:py-24 px-6 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 bg-white border border-border p-8 h-[400px] flex items-center justify-center relative overflow-hidden">
             {/* Webhook Visualization */}
             <div className="w-full max-w-sm">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-brand text-white rounded-full flex items-center justify-center z-10 relative">
                      <Code2 className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold mt-2 uppercase tracking-wider text-secondary">Cresm Engine</span>
                  </div>
                  
                  <div className="flex-1 border-t-2 border-dashed border-primary/40 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white px-2">
                      <Webhook className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-border text-secondary rounded-full flex items-center justify-center z-10 relative">
                      <Server className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold mt-2 uppercase tracking-wider text-secondary">Your Backend</span>
                  </div>
                </div>

                <div className="bg-brand text-white p-4 font-mono text-[10px] leading-relaxed shadow-lg">
                  <span className="text-pink-400">event:</span> <span className="text-green-300">case.analysis.completed</span><br/>
                  <span className="text-pink-400">payload:</span> {"{"}<br/>
                  {"  "}<span className="text-blue-300">"status"</span>: <span className="text-amber-300">"success"</span>,<br/>
                  {"  "}<span className="text-blue-300">"cam_url"</span>: <span className="text-amber-300">"https://api..."</span><br/>
                  {"}"}
                </div>
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-brand mb-6">
              Real-time <span className="font-extrabold">Webhook Support.</span>
            </h2>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              Financial document parsing is inherently asynchronous. Instead of forcing your systems to poll our API continuously, Cresm utilizes webhooks and Server-Sent Events (SSE) to notify your backend the exact millisecond a credit file is ready.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-brand">Cryptographically signed webhook payloads for security.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-brand">Automatic retry schedules for failed deliveries (exponential backoff).</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-brand">Detailed event types mapping to every stage of the underwriting pipeline.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
