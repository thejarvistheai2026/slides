import React from "react";
import { motion } from "motion/react";
import { Layers, BookOpen, Cpu } from "lucide-react";
import CanvasBg from "../components/CanvasBg";
import SlideLayout from "../components/SlideLayout";

// ── Logo components ───────────────────────────────────────────────────────────

function ClaudeIcon() {
  return <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center overflow-hidden flex-shrink-0"><img src="/claude-logo.png" alt="Claude" className="w-5 h-5 object-contain" /></div>;
}

function HermesIcon() {
  return (
    <img src="https://hermes-agent.nousresearch.com/icon.png"
      alt="Hermes" className="w-6 h-6 flex-shrink-0 object-contain rounded-sm" />
  );
}

function OpenClawIcon() {
  return <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center overflow-hidden flex-shrink-0"><img src="/openclaw-logo.png" alt="OpenClaw" className="w-5 h-5 object-contain" /></div>;
}

function ObsidianIcon() {
  return <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center overflow-hidden flex-shrink-0"><img src="/obsidian-logo.png" alt="Obsidian" className="w-5 h-5 object-contain" /></div>;
}

function OllamaIcon() {
  return <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center overflow-hidden flex-shrink-0"><img src="/ollama-logo.png" alt="Ollama" className="w-5 h-5 object-contain" /></div>;
}

function MarkdownIcon() {
  return (
    <svg viewBox="0 0 32 32" className="w-6 h-6 flex-shrink-0">
      <rect width="32" height="32" rx="5" fill="#444" />
      <path d="M5 22V10h3l4 5 4-5h3v12h-3v-7l-4 5-4-5v7z" fill="#eee" />
      <path d="M24 22l-4-5h2.5v-7h3v7H28z" fill="#eee" />
    </svg>
  );
}

// ── Logo badge ────────────────────────────────────────────────────────────────

function LogoBadge({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-xl bg-white/6 border border-white/10">
      {icon}
      <span className="text-[14px] font-body font-medium text-white/55">{name}</span>
    </div>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────

const components = [
  {
    icon: Layers,
    name: "Agent Harness",
    subtitle: "The runtime layer",
    desc: "Wraps the model with tools, memory, and persistence. Handles skill execution, context management, and multi-agent routing.",
    color: "text-cyan-400",
    glow: "from-cyan-500/20 to-cyan-500/5",
    logos: [
      { icon: <OpenClawIcon />, name: "OpenClaw" },
      { icon: <HermesIcon />, name: "Hermes" },
      { icon: <ClaudeIcon />, name: "Claude Code" },
    ],
  },
  {
    icon: BookOpen,
    name: "Brain / Memory",
    subtitle: "The knowledge layer",
    desc: "Markdown files and Obsidian vaults that persist knowledge across sessions. Structured notes, workflows, and context that make your agent smarter over time.",
    color: "text-violet-400",
    glow: "from-violet-500/20 to-violet-500/5",
    logos: [
      { icon: <ObsidianIcon />, name: "Obsidian" },
      { icon: <MarkdownIcon />, name: "Markdown" },
    ],
  },
  {
    icon: Cpu,
    name: "Intelligence / Model",
    subtitle: "The reasoning layer",
    desc: "The actual LLM doing the thinking. Swappable: Claude via API for best quality, or Ollama + local models for privacy and zero cost.",
    color: "text-emerald-400",
    glow: "from-emerald-500/20 to-emerald-500/5",
    logos: [
      { icon: <ClaudeIcon />, name: "Claude" },
      { icon: <OllamaIcon />, name: "Ollama" },
    ],
  },
];

// ── Slide ─────────────────────────────────────────────────────────────────────

export default function ComponentsSlide() {
  return (
    <div className="relative w-full h-full bg-[#020817] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-25">
        <CanvasBg color={[34, 211, 238]} nodeCount={32} />
      </div>
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 55% at 50% 20%, rgba(34,211,238,0.18) 0%, transparent 70%)`,
        }}
      />

      <SlideLayout
        header={
          <>
            <motion.span
              initial={{ x: -15, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="block text-white/30 font-body text-[14px] tracking-[0.3em] uppercase mb-2 md:mb-3"
            >
              The Stack
            </motion.span>
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-3xl lg:text-5xl font-heading italic text-white tracking-tight leading-[0.9]"
            >
              Three layers. One system.
            </motion.h2>
          </>
        }
      >
        {/* Vertically centered, cards with connectors */}
        <div className="h-full flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row lg:items-stretch gap-3 md:gap-0">
            {components.map((c, i) => {
              const Icon = c.icon;
              return (
                <React.Fragment key={i}>
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.55, delay: 0.35 + i * 0.12 }}
                    className="liquid-glass rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-5 flex flex-col gap-2 md:gap-3 flex-1"
                  >
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${c.glow} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-4 h-4 ${c.color}`} />
                    </div>

                    <div>
                      <p className={`text-[14px] font-body font-semibold uppercase tracking-[0.2em] mb-1 ${c.color}`}>
                        {c.subtitle}
                      </p>
                      <h3 className="text-lg lg:text-lg font-heading italic text-white leading-tight">
                        {c.name}
                      </h3>
                    </div>

                    <p className="text-base font-body text-white/40 leading-relaxed flex-1">
                      {c.desc}
                    </p>

                    {/* Logo badges — bottom of card */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-white/6">
                      {c.logos.map((l, li) => (
                        <LogoBadge key={li} icon={l.icon} name={l.name} />
                      ))}
                    </div>
                  </motion.div>

                  {/* Connector between cards (not after last) */}
                  {i < components.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.5, delay: 0.65 + i * 0.1 }}
                      className="hidden lg:flex items-center justify-center flex-shrink-0 w-12"
                    >
                      <div className="relative w-full flex items-center gap-0">
                        <div className="flex-1 h-[2px] bg-white/30" />
                        <div className="w-4 h-4 rounded-full border-2 border-white/40 bg-[#020817] flex-shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.15)]" />
                        <div className="flex-1 h-[2px] bg-white/30" />
                      </div>
                    </motion.div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

      </SlideLayout>
    </div>
  );
}
