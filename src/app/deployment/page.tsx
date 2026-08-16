import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Deployment as DeploymentSection } from "@/components/sections/Deployment";

export default function DeploymentPage() {
  return (
    <main className="w-full flex flex-col min-h-screen bg-[#fafafa]">
      <Nav />
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-light leading-[1.05] tracking-tight text-brand mb-6">
            Institutional <span className="font-extrabold">Deployment.</span>
          </h1>
          <p className="text-lg text-secondary leading-relaxed">
            Integrate Cresem into your existing infrastructure with flexible deployment options designed for enterprise security and scale.
          </p>
        </div>
      </div>
      
      <DeploymentSection />
      
      <Footer />
    </main>
  );
}
