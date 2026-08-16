import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Workflow } from "@/components/sections/Workflow";
import { Evidence } from "@/components/sections/Evidence";
import { HumanControl } from "@/components/sections/HumanControl";

export default function WorkflowPage() {
  return (
    <main className="w-full flex flex-col min-h-screen bg-[#fafafa]">
      <Nav />
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-light leading-[1.05] tracking-tight text-brand mb-6">
            How Cresem <span className="font-extrabold">Works.</span>
          </h1>
          <p className="text-lg text-secondary leading-relaxed">
            A step-by-step look into how unstructured documents are transformed into a fully verified, institutional-grade credit case.
          </p>
        </div>
      </div>
      
      <Workflow />
      <Evidence />
      <HumanControl />
      
      <Footer />
    </main>
  );
}
