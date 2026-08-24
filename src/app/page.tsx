import { ROICaseStudy } from "@/components/sections/ROICaseStudy";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Problem } from "@/components/sections/Problem";
import { Transformation } from "@/components/sections/Transformation";
import { Workflow } from "@/components/sections/Workflow";
import { Evidence } from "@/components/sections/Evidence";
import { HumanControl } from "@/components/sections/HumanControl";
import { Security } from "@/components/sections/Security";
import { Deployment } from "@/components/sections/Deployment";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen bg-[#fafafa]">
      <Nav />
      <Hero />
      <TrustStrip />
      <Problem />
      <Transformation />
      <Workflow />
      <ROICaseStudy />
      <Evidence />
      <HumanControl />
      <Security />
      <Deployment />
      <FinalCTA />
      <Footer />
    </main>
  );
}
