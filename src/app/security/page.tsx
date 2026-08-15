import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Server, Trash2, Cpu } from "lucide-react";

export default function SecurityPage() {
  return (
    <main className="w-full flex flex-col min-h-screen bg-brand text-white">
      <Nav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-50" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-sm text-[10px] sm:text-xs font-bold tracking-[0.2em] text-white uppercase mb-8">
            <Shield className="w-3 h-3 text-primary" />
            Security & Compliance
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight mb-8">
            Bank-grade security, <br />
            <span className="font-extrabold text-white">zero compromises.</span>
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Cresm is built for institutional finance. We operate under strict data handling protocols designed to meet and exceed regulatory requirements for Banks and NBFCs.
          </p>
        </div>
      </section>

      {/* The NO AI TRAINING Promise */}
      <section className="py-16 md:py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/5 border border-white/10 p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
            <Cpu className="w-12 h-12 text-primary mx-auto mb-6 opacity-80" />
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4 uppercase">
              The "No Training" Guarantee
            </h2>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed">
              We DO NOT train our foundational AI models on your customers' financial data. Your data is used exclusively for your underwriting workflows and is never absorbed into shared intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Features */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Data Sandboxing */}
          <div className="bg-background text-brand border border-border p-10 flex flex-col justify-between group hover:border-primary/50 transition-colors">
            <div>
              <div className="w-12 h-12 bg-brand text-white flex items-center justify-center rounded-sm mb-8">
                <Trash2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4">Data Sandboxing & Ephemeral Processing</h3>
              <p className="text-secondary leading-relaxed mb-8">
                Every financial document uploaded to Cresm is processed inside a securely isolated, ephemeral container environment. Once the structured data (CAM) is generated and returned to your systems, the raw document and its trace are immediately wiped from working memory. 
              </p>
            </div>
            <div className="font-mono text-xs text-primary font-semibold uppercase tracking-wider">
              Stateless Infrastructure
            </div>
          </div>

          {/* Encryption */}
          <div className="bg-background text-brand border border-border p-10 flex flex-col justify-between group hover:border-primary/50 transition-colors">
            <div>
              <div className="w-12 h-12 bg-brand text-white flex items-center justify-center rounded-sm mb-8">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4">Enterprise-Grade AES-256 Encryption</h3>
              <p className="text-secondary leading-relaxed mb-8">
                All data is encrypted both in transit (using TLS 1.3) and at rest (using AES-256 block-level encryption). We maintain strict key rotation policies and role-based access controls (RBAC) to ensure only authorized endpoints can retrieve parsed financial data.
              </p>
            </div>
            <div className="font-mono text-xs text-primary font-semibold uppercase tracking-wider">
              Military-Grade Cryptography
            </div>
          </div>

        </div>
      </section>

      {/* Compliance Certs Mockup */}
      <section className="py-16 md:py-24 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xs font-bold tracking-widest uppercase text-white/50 mb-12">Built to comply with global standards</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 grayscale">
            {/* Placeholder certs */}
            <div className="flex items-center gap-3">
              <Server className="w-8 h-8" />
              <div className="text-left">
                <div className="font-bold text-lg">ISO 27001</div>
                <div className="text-[10px] uppercase tracking-wider text-white/50">Ready</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8" />
              <div className="text-left">
                <div className="font-bold text-lg">SOC 2 Type II</div>
                <div className="text-[10px] uppercase tracking-wider text-white/50">Compliant</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Lock className="w-8 h-8" />
              <div className="text-left">
                <div className="font-bold text-lg">GDPR / DPDP</div>
                <div className="text-[10px] uppercase tracking-wider text-white/50">Framework</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
