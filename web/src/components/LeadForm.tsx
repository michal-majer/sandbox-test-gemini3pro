"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ShinyButton } from "@/components/ui/shiny-button";

export const LeadForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setStatus("success");
    // In a real app, you'd trigger the download or redirect here
  };

  return (
    <section id="lead-form" className="relative w-full py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
        
      <div className="container mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl md:p-12"
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Gotowy na transformację?</h2>
            <p className="text-neutral-400">Wpisz swój email, aby otrzymać natychmiastowy dostęp do paczki agentów.</p>
          </div>

          <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-4">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col items-center justify-center gap-4 rounded-lg bg-green-500/10 p-6 text-green-400"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
                    <Check className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">Sukces!</p>
                    <p className="text-sm opacity-80">Link do pobrania został wysłany na {email}</p>
                  </div>
                  <button 
                    type="button"
                    className="mt-2 text-sm underline decoration-dotted underline-offset-4 hover:text-green-300"
                    onClick={() => setStatus("idle")}
                  >
                    Pobierz ponownie
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col gap-4"
                >
                  <div className="text-left">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-300">
                        Email służbowy
                    </label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="imie@firma.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12 border-neutral-700 bg-neutral-900/50 text-lg transition-colors focus:border-blue-500"
                    />
                  </div>
                  
                  <ShinyButton 
                    type="submit" 
                    className="h-12 w-full justify-center text-base"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                        <span className="flex items-center gap-2">
                            <Loader2 className="h-4 w-4 animate-spin" /> Przetwarzanie...
                        </span>
                    ) : (
                        <span className="flex items-center gap-2">
                            <Download className="h-4 w-4" /> Pobierz Agentów
                        </span>
                    )}
                  </ShinyButton>
                  <p className="text-xs text-neutral-500">
                    Szumujemy Twoje dane tak samo jak Ty SAP. Zero spamu.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

