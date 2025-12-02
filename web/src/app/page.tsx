import { Hero } from "@/components/Hero";
import { AgentsGrid } from "@/components/AgentsGrid";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Pobierz Agentów SAP - MajerSolutions",
  description: "Zautomatyzuj swoje środowisko SAP dzięki agentom CAP, Fiori i Fiori Elements.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <nav className="absolute top-0 left-0 z-50 w-full px-6 py-6">
        <div className="flex items-center justify-between">
            <div className="text-xl font-bold tracking-tighter text-white">
                Geminie<span className="text-blue-500">.</span>
            </div>
            <a href="#lead-form" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
                Dostęp
            </a>
        </div>
      </nav>
      
      <Hero />
      <AgentsGrid />
      <LeadForm />
      <Footer />
    </main>
  );
}
