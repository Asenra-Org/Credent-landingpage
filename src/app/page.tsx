import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Transformation } from "@/components/sections/Transformation";
import { Workflow } from "@/components/sections/Workflow";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Evidence } from "@/components/sections/Evidence";
import { Verification } from "@/components/sections/Verification";
import { HumanControl } from "@/components/sections/HumanControl";
import { TrustAndControl } from "@/components/sections/TrustAndControl";
import { WhoItIsFor } from "@/components/sections/WhoItIsFor";
import { DeploymentAndCTA } from "@/components/sections/DeploymentAndCTA";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      <Nav />
      <Hero />
      <Problem />
      <Transformation />
      <Workflow />
      <ProductShowcase />
      <Evidence />
      <Verification />
      <HumanControl />
      <TrustAndControl />
      <WhoItIsFor />
      <DeploymentAndCTA />
      <Footer />
    </main>
  );
}
