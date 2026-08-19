import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MoveRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="w-full flex flex-col min-h-screen bg-white text-brand">
      <Nav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-6">
            About Asenra
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight text-brand mb-8">
            Building the modern <br />
            <span className="font-extrabold">credit engine.</span>
          </h1>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-24 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase mb-8">Our Mission</h2>
          <p className="text-2xl md:text-4xl font-light leading-snug tracking-tight text-brand">
            To eliminate friction in underwriting and give credit teams superhuman analytical abilities using AI. We believe that access to capital should not be bottlenecked by manual document processing.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 px-6 border-t border-border bg-background">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase">Our Story</h2>
          </div>
          <div className="md:col-span-2 space-y-6 text-lg text-secondary leading-relaxed">
            <p>
              The underwriting process at most financial institutions is broken. Despite the digital revolution, the actual work of assessing a borrower's creditworthiness involves downloading PDFs, manually typing numbers into Excel sheets, and visually scanning for inconsistencies.
            </p>
            <p>
              This manual appraisal process is not only painfully slow but highly susceptible to human error and fraud. Credit analysts spend 80% of their time on data entry and only 20% on actual risk assessment.
            </p>
            <p>
              <strong className="text-brand font-semibold">Asenra built Cresem to flip that ratio.</strong>
            </p>
            <p>
              By leveraging deterministic AI and advanced computer vision, Cresem automates the extraction, verification, and cross-referencing of complex financial documents. We turn hours of manual grunt work into two minutes of automated intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-16 md:py-24 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-sm font-bold tracking-[0.2em] text-secondary uppercase">Leadership</h2>
          </div>
          <div className="md:col-span-2">
            <div className="border border-border bg-background relative group flex flex-col sm:flex-row">
              <div className="w-full sm:w-2/5 h-72 sm:h-auto shrink-0 relative overflow-hidden bg-gray-100 border-b sm:border-b-0 sm:border-r border-border">
                <Image src="/karanpatil.png" alt="Karan Patil" fill className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="p-8 sm:p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-1 text-brand">Karan Patil</h3>
                <div className="text-primary font-mono text-xs uppercase tracking-widest mb-6">Founder & CEO</div>
                <p className="text-secondary leading-relaxed mb-6">
                  Bridging the gap between deep technical infrastructure and institutional finance. With a background rooted in building scalable software systems and understanding complex credit workflows, Karan leads Asenra's vision to modernize the lending stack.
                </p>
                <a href="https://www.linkedin.com/in/karan-patill/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-primary transition-colors">
                  Connect on LinkedIn <MoveRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
