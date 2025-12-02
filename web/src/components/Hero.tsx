"use client";

import { motion } from "framer-motion";
import { ShinyButton } from "@/components/ui/shiny-button";

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-24 text-center md:px-8">
      <div className="absolute inset-0 -z-10 h-full w-full bg-black [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] opacity-50" />
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 inline-flex items-center justify-center rounded-full border border-neutral-800 bg-neutral-900/50 px-3 py-1 text-sm text-neutral-300 backdrop-blur-xl"
      >
        <span className="mr-2 flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
        </span>
        Dostępne dla SAP S/4HANA
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-7xl lg:text-8xl"
      >
        Zrewolucjonizuj <br /> Swoje Środowisko SAP
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 max-w-2xl text-lg text-neutral-400 md:text-xl"
      >
        Pobierz zestaw 3 inteligentnych agentów: CAP, Fiori oraz Fiori Elements.
        Przyspiesz development, popraw UX i zautomatyzuj procesy.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
      >
        <ShinyButton onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}>
            Pobierz Agentów
        </ShinyButton>
      </motion.div>
    </section>
  );
};

