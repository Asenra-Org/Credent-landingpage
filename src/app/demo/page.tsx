"use client";
import React, { useState } from "react";
import { Nav } from "@/components/Nav";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Terminal, FileText, Loader2, ShieldCheck, Building2, User, Mail, BarChart3 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DemoPage() {
  const [step, setStep] = useState<"form" | "simulating" | "success" | "error">("form");
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  
  // Lead Data disguised as "Appraisal Data"
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    company: "",
    volume: "" 
  });

  const runSimulationAndSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company || !formData.volume) return;
    
    setStep("simulating");
    setTerminalLines([]);

    const lines = [
      "Initializing Cresem Engine v2.1...",
      `Creating secure sandbox for entity: ${formData.company}...`,
      "Configuring AI models for scale...",
      `Validating contact node: ${formData.email}...`,
      `Establishing secure channel for ${formData.name}...`,
      "[Forensics] Security handshake... PASSED",
      "[DataOps] Preparing demo environment... PASSED",
      "Transmitting payload to secure servers...",
    ];

    // Terminal simulation
    for (let i = 0; i < lines.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 700));
      setTerminalLines(prev => [...prev, lines[i]]);
    }

    // Actual API Call
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      await new Promise(resolve => setTimeout(resolve, 800)); // Buffer

      if (response.ok) {
        setTerminalLines(prev => [...prev, "Payload accepted. Connection established."]);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setStep("success");
      } else {
        setTerminalLines(prev => [...prev, "ERR: Connection refused. Please try again."]);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStep("error");
      }
    } catch (error) {
      setTerminalLines(prev => [...prev, "ERR: Network failure. Please try again."]);
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStep("error");
    }
  };

  return (
    <main className="w-full flex flex-col min-h-screen bg-background text-foreground">
      
      <Nav />

      {/* Main Content */}
      <section className="flex-1 w-full flex flex-col lg:flex-row overflow-hidden relative">
        
        {/* Left Side: Context / Copy */}
        <div className="w-full lg:w-5/12 bg-white border-r border-border p-8 md:p-16 flex flex-col justify-center relative z-10 shadow-xl lg:shadow-none">
          <div className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase mb-6">
            Book a Demo
          </div>
          <h1 className="text-4xl font-light tracking-tight text-brand mb-4 leading-[1.1]">
            Experience<br/>
            <span className="font-extrabold">Instant Appraisal.</span>
          </h1>
          <p className="text-sm text-secondary leading-relaxed mb-12">
            Enter your details in our system to schedule a personalized walkthrough. See firsthand how our AI engine eliminates manual data entry and document fraud.
          </p>

          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand border-b border-border pb-2">Live Status</h3>
            <ul className="space-y-4 relative before:absolute before:inset-y-0 before:left-2.5 before:w-px before:bg-border">
              {[
                { 
                  id: "identity", 
                  title: "Identity Verification", 
                  desc: "Validating user Cresemials.",
                  done: formData.name.length > 2 && formData.email.includes('@')
                },
                { 
                  id: "entity", 
                  title: "Entity Assessment", 
                  desc: "Identifying institutional node.",
                  done: formData.company.length > 2
                },
                { 
                  id: "volume", 
                  title: "Capacity Planning", 
                  desc: "Allocating AI processing scale.",
                  done: formData.volume !== ""
                },
                { 
                  id: "secure", 
                  title: "Secure Transmission", 
                  desc: "Establishing encrypted tunnel.",
                  done: step === "success" || step === "simulating" 
                }
              ].map((item, idx) => {
                const isActive = (!item.done && (
                  (idx === 0) || 
                  (idx === 1 && formData.name.length > 2 && formData.email.includes('@')) ||
                  (idx === 2 && formData.company.length > 2) ||
                  (idx === 3 && formData.volume !== "")
                ));

                return (
                  <li key={item.id} className={`flex items-start gap-4 relative transition-opacity duration-300 ${item.done || isActive ? 'opacity-100' : 'opacity-40'}`}>
                    <div className={`w-5 h-5 shrink-0 rounded-full border-2 flex items-center justify-center bg-white relative z-10 transition-colors duration-300 ${item.done ? 'border-emerald-500 text-emerald-500' : isActive ? 'border-primary text-primary' : 'border-border text-transparent'}`}>
                      {item.done ? <CheckCircle2 className="w-4 h-4" /> : <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-primary' : 'bg-transparent'}`} />}
                    </div>
                    <div className="pt-0.5">
                      <div className="font-bold text-brand text-xs mb-0.5">{item.title}</div>
                      <div className="text-secondary text-[10px]">{item.desc}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Right Side: Interactive Area */}
        <div className="w-full lg:w-7/12 bg-background flex flex-col items-center justify-center p-6 md:p-16 relative overflow-y-auto">
          
          <div className="w-full max-w-lg relative">
            <AnimatePresence mode="wait">
              
              {/* Data Collection Form (Themed as a Credit Case) */}
              {(step === "form" || step === "error") && (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white border border-border p-8 shadow-2xl rounded-sm w-full"
                >
                  <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border">
                    <div className="w-8 h-8 bg-brand/5 text-brand rounded-full flex items-center justify-center">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand text-sm">New Demo Request</h3>
                      <p className="text-[10px] text-secondary font-mono">ID: REQ-9042</p>
                    </div>
                  </div>

                  <form onSubmit={runSimulationAndSubmit} className="space-y-5">
                    
                    <div className="space-y-1.5">
                      <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-brand">
                        <User className="w-3 h-3" /> Requester Name
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-background border border-border p-3 text-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="e.g. Vikram Singhania"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-brand">
                        <Mail className="w-3 h-3" /> Work Email
                      </label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-background border border-border p-3 text-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="e.g. v.singhania@apexcapital.in"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-brand">
                        <Building2 className="w-3 h-3" /> Entity Name
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.company}
                        onChange={e => setFormData({...formData, company: e.target.value})}
                        className="w-full bg-background border border-border p-3 text-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="e.g. Apex Capital Finance Ltd"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-brand">
                        <BarChart3 className="w-3 h-3" /> Processing Volume
                      </label>
                      <select 
                        required
                        className="w-full bg-background border border-border p-3 text-sm focus:outline-none focus:border-primary transition-colors appearance-none"
                        value={formData.volume}
                        onChange={e => setFormData({...formData, volume: e.target.value})}
                      >
                        <option value="" disabled>Select monthly volume...</option>
                        <option value="under_10cr">Under ₹10 Cr</option>
                        <option value="10_50cr">₹10 Cr - ₹50 Cr</option>
                        <option value="50_200cr">₹50 Cr - ₹200 Cr</option>
                        <option value="over_200cr">Over ₹200 Cr</option>
                      </select>
                    </div>

                    {step === "error" && (
                      <div className="text-xs text-red-600 font-bold p-2 bg-red-50 rounded-sm">
                        Connection failed. Please try again.
                      </div>
                    )}

                    <button 
                      type="submit"
                      disabled={!formData.name || !formData.email || !formData.company || !formData.volume}
                      className="w-full bg-brand text-white p-4 text-sm font-bold hover:bg-brand/90 transition-colors flex items-center justify-center gap-2 mt-4 disabled:opacity-50 group"
                    >
                      <ShieldCheck className="w-4 h-4" />
                      Initiate Secure Booking
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-2" />
                    </button>
                  </form>
                </motion.div>
              )}

              {/* Simulation Terminal */}
              {step === "simulating" && (
                <motion.div 
                  key="simulating"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#040d1a] text-emerald-400 p-6 shadow-2xl rounded-sm w-full border border-[#1a3a5c] font-mono text-xs overflow-hidden relative min-h-[350px] flex flex-col"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/20 via-emerald-400 to-emerald-500/20" />
                  
                  <div className="flex items-center gap-2 mb-4 text-[#1a3a5c] border-b border-[#1a3a5c] pb-2">
                    <Terminal className="w-4 h-4" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Cresem Secure Terminal</span>
                  </div>

                  <div className="flex-1 space-y-1.5 overflow-y-auto overflow-x-hidden break-words whitespace-pre-wrap pr-2">
                    {terminalLines.map((line, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`flex gap-2 ${line.includes('ERR') ? 'text-red-400 font-bold' : line.includes('PASSED') ? 'text-emerald-300' : 'text-emerald-500/80'}`}
                      >
                        <span className="text-emerald-700 select-none">{">"}</span>
                        <span>{line}</span>
                      </motion.div>
                    ))}
                    {step === 'simulating' && (
                      <motion.div
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="inline-block w-2 h-3 bg-emerald-400 ml-1"
                      />
                    )}
                  </div>
                </motion.div>
              )}

              {/* Success */}
              {step === "success" && (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white border border-border p-8 shadow-2xl rounded-sm w-full text-center py-12"
                >
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-brand text-2xl mb-3">Booking Confirmed</h3>
                  <p className="text-sm text-secondary leading-relaxed mb-8 px-4">
                    Your request has been securely transmitted. A product expert from Cresem will reach out to <strong>{formData.email}</strong> shortly to schedule your personalized walkthrough.
                  </p>
                  
                  <button 
                    onClick={() => {
                      setFormData({ name: "", email: "", company: "", volume: "" });
                      setStep("form");
                    }}
                    className="text-xs font-bold uppercase tracking-wider text-primary hover:text-brand transition-colors"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
          
        </div>
      </section>

    </main>
  );
}
