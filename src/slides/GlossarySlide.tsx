import { motion } from "motion/react";
import {
  Layers, Brain, Wrench, Plug, ScrollText,
  RefreshCw, Database, Users, GitBranch,
} from "lucide-react";
import CanvasBg from "../components/CanvasBg";
import SlideLayout from "../components/SlideLayout";

const groups = [
  {
    label: "Foundation",
    subtitle: "What the model sees & remembers",
    accent: "text-blue-400",
    divider: "bg-blue-500/30",
    terms: [
      {
        icon: Brain,
        term: "Context Window",
        def: "The maximum tokens an LLM can 'see' in one interaction. Everything outside this window is invisible — managing it is a core harness concern.",
        color: "text-blue-400",
        bg: "from-blue-500/15 to-blue-500/5",
      },
      {
        icon: ScrollText,
        term: "System Prompt",
        def: "The persistent instructions that define an agent's identity, behavior, and constraints. Sets the rules before the user ever says a word.",
        color: "text-blue-400",
        bg: "from-blue-500/15 to-blue-500/5",
      },
      {
        icon: Database,
        term: "Memory",
        def: "Short-term memory lives in the context window. Long-term memory is written to files or databases and retrieved across sessions.",
        color: "text-blue-400",
        bg: "from-blue-500/15 to-blue-500/5",
      },
    ],
  },
  {
    label: "Agent",
    subtitle: "How a single agent thinks & acts",
    accent: "text-emerald-400",
    divider: "bg-emerald-500/30",
    terms: [
      {
        icon: Layers,
        term: "Agent Harness",
        def: "The runtime that wraps an LLM with persistent memory, tools, and context management. It's the layer between you and the raw model.",
        color: "text-emerald-400",
        bg: "from-emerald-500/15 to-emerald-500/5",
      },
      {
        icon: RefreshCw,
        term: "Agentic Loop",
        def: "The perceive → think → act → observe cycle an agent runs continuously until the task is complete. The heartbeat of any autonomous agent.",
        color: "text-emerald-400",
        bg: "from-emerald-500/15 to-emerald-500/5",
      },
      {
        icon: Wrench,
        term: "Skill / Tool",
        def: "A function the agent can invoke — search the web, write a file, send a message, query a database. Defines what the agent can actually do.",
        color: "text-emerald-400",
        bg: "from-emerald-500/15 to-emerald-500/5",
      },
    ],
  },
  {
    label: "System",
    subtitle: "How agents connect & coordinate",
    accent: "text-fuchsia-400",
    divider: "bg-fuchsia-500/30",
    terms: [
      {
        icon: GitBranch,
        term: "Orchestrator",
        def: "A parent agent that receives tasks, breaks them down, and delegates to specialized sub-agents. The manager in your AI org chart.",
        color: "text-fuchsia-400",
        bg: "from-fuchsia-500/15 to-fuchsia-500/5",
      },
      {
        icon: Users,
        term: "Multi-agent",
        def: "Multiple specialized agents running in parallel, each handling a slice of a larger task and reporting back to a coordinating orchestrator.",
        color: "text-fuchsia-400",
        bg: "from-fuchsia-500/15 to-fuchsia-500/5",
      },
      {
        icon: Plug,
        term: "MCP / CLI",
        def: "Model Context Protocol. An open standard for connecting LLMs to external tools and data sources — like USB-C for AI integrations. Exposed via CLI or server.",
        color: "text-fuchsia-400",
        bg: "from-fuchsia-500/15 to-fuchsia-500/5",
      },
    ],
  },
];

export default function GlossarySlide() {
  return (
    <div className="relative w-full h-full bg-[#020817] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-25">
        <CanvasBg color={[139, 92, 246]} nodeCount={28} />
      </div>
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 55% 65% at 70% 40%, rgba(139,92,246,0.22) 0%, transparent 70%)`,
        }}
      />

      <SlideLayout
        header={
          <>
            <motion.span
              initial={{ x: -15, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="block text-white/30 font-body text-[10px] tracking-[0.3em] uppercase mb-3"
            >
              Glossary
            </motion.span>
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading italic text-white tracking-tight leading-[0.9]"
            >
              Key concepts &amp; terminology.
            </motion.h2>
          </>
        }
      >
        {/* 3 grouped columns */}
        <div className="flex-1 grid grid-cols-3 gap-5 min-h-0 content-center pt-16">
          {groups.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 + gi * 0.1 }}
              className="flex flex-col gap-2.5"
            >
              {/* Group header */}
              <div className="flex items-center gap-2.5 pb-2">
                <div className={`h-4 w-0.5 rounded-full ${group.divider}`} />
                <div>
                  <span className={`text-[11px] font-body font-semibold uppercase tracking-[0.2em] ${group.accent}`}>
                    {group.label}
                  </span>
                  <p className="text-[10px] font-body text-white/25 mt-0.5">{group.subtitle}</p>
                </div>
              </div>

              {/* Cards */}
              {group.terms.map((t, ti) => {
                const Icon = t.icon;
                return (
                  <motion.div
                    key={ti}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.45, delay: 0.35 + gi * 0.1 + ti * 0.07 }}
                    className="liquid-glass rounded-2xl p-3 lg:p-4 flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${t.bg} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-3.5 h-3.5 ${t.color}`} />
                      </div>
                      <span className="text-sm font-body font-semibold text-white whitespace-nowrap">
                        {t.term}
                      </span>
                    </div>
                    <p className="text-[11px] font-body font-light text-white/40 leading-relaxed pl-[42px]">
                      {t.def}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          ))}
        </div>
      </SlideLayout>
    </div>
  );
}
