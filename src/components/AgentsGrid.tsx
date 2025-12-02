"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { Boxes, Code2, LayoutTemplate } from "lucide-react";

const agents = [
  {
    title: "CAP Agent",
    description: "Ekspert od Cloud Application Programming Model. Generuje schematy CDS, serwisy i logikę biznesową w Node.js/Java.",
    icon: Code2,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Fiori Agent",
    description: "Specjalista UX/UI. Tworzy responsywne aplikacje SAPUI5, dba o zgodność z Fiori Guidelines i estetykę.",
    icon: LayoutTemplate,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Fiori Elements Agent",
    description: "Mistrz szybkiego wdrażania. Konfiguruje adnotacje, List Reports i Object Pages w mgnieniu oka.",
    icon: Boxes,
    gradient: "from-amber-500 to-orange-500",
  },
];

function AgentCard({ agent }: { agent: typeof agents[0] }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative max-w-md rounded-xl border border-white/10 bg-neutral-900/50 px-8 py-16 shadow-2xl"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative flex flex-col items-center text-center">
        <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${agent.gradient} p-4 shadow-lg`}>
          <agent.icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-white">{agent.title}</h3>
        <p className="text-neutral-400">{agent.description}</p>
      </div>
    </div>
  );
}

export const AgentsGrid = () => {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Trzy Filary <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Nowoczesnego SAP</span>
          </h2>
          <p className="mt-4 text-neutral-400">Wybierz agenta lub pobierz wszystkich naraz.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {agents.map((agent) => (
            <AgentCard key={agent.title} agent={agent} />
          ))}
        </div>
      </div>
    </section>
  );
};

