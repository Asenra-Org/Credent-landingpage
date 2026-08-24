import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ROICaseStudy } from "@/components/sections/ROICaseStudy";

export default function CaseStudyPage() {
  return (
    <main className="w-full flex flex-col min-h-screen bg-[#fafafa]">
      <Nav />
      <div className="flex-1">
        <ROICaseStudy />
      </div>
      <Footer />
    </main>
  );
}
