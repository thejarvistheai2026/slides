import { motion } from "motion/react";
import CanvasBg from "../components/CanvasBg";

const events = [
  {
    date: "Jan 2025",
    title: "Cursor + Supabase + Expo",
    desc: "Building fullstack web apps with Cursor, Supabase, Vercel. Mobile via Expo + Testflight.",
    color: "rgba(99,179,237,0.8)",
    dot: "bg-blue-400",
  },
  {
    date: "May 2025",
    title: "Gadget Adoption",
    desc: "Fullstack apps, internal tools, middleware with production-grade infra via Gadget.",
    color: "rgba(52,211,153,0.8)",
    dot: "bg-emerald-400",
  },
  {
    date: "Jan 2026",
    title: "GTM Automation",
    desc: "Prospecting, outreach, enrichment, process automation. Snitcher → Clay → Gadget → HubSpot → Instantly.",
    color: "rgba(251,191,36,0.8)",
    dot: "bg-amber-400",
  },
  {
    date: "Jan 2026",
    title: "OpenClaw Experiments",
    desc: "First experiments with open-source agent harnesses. Exploring local LLM workflows.",
    color: "rgba(167,139,250,0.8)",
    dot: "bg-violet-400",
  },
  {
    date: "Feb – Mar 2026",
    title: "Dedicated Mac Mini",
    desc: "Dedicated hardware for experimentation + codification of personal AI workflows.",
    color: "rgba(251,146,60,0.8)",
    dot: "bg-orange-400",
  },
  {
    date: "Apr 2026",
    title: "Full Orchestration",
    desc: "Custom skills, skill chaining, multiple agents, Paperclip orchestration. Current state.",
    color: "rgba(248,113,113,0.8)",
    dot: "bg-rose-400",
  },
];

export default function TimelineSlide() {
  return (
    <div className="relative w-full h-full bg-[#020817] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-25">
        <CanvasBg color={[52, 211, 153]} nodeCount={30} />
      </div>
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 60% at 10% 30%, rgba(16,185,129,0.18) 0%, transparent 70%),
            radial-gradient(ellipse 50% 50% at 90% 80%, rgba(59,130,246,0.15) 0%, transparent 65%)
          `,
        }}
      />

      <div className="relative z-10 flex flex-col h-full px-10 lg:px-20 py-10 lg:py-12">
        {/* Header */}
        <div className="mb-4">
          <motion.span
            initial={{ x: -15, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="block text-white/30 font-body text-[10px] tracking-[0.3em] uppercase mb-4"
          >
            The Journey
          </motion.span>
          <motion.h2
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading italic text-white tracking-tight leading-[0.9]"
          >
            18 months of building with AI.
          </motion.h2>
        </div>

        {/* Alternating timeline */}
        <div className="flex-1 flex flex-col justify-center">

          {/* Top row — even-indexed events (cols 0, 2, 4) */}
          <div className="grid grid-cols-6 gap-3 lg:gap-4">
            {events.map((ev, i) =>
              i % 2 === 0 ? (
                <motion.div
                  key={i}
                  initial={{ y: -25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.55, delay: 0.3 + i * 0.08 }}
                  className="liquid-glass rounded-xl p-3 lg:p-4 flex flex-col gap-2"
                >
                  <div className="flex items-center gap-1.5">
                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${ev.dot}`} />
                    <span
                      className="text-[9px] font-body font-semibold uppercase tracking-[0.15em]"
                      style={{ color: ev.color }}
                    >
                      {ev.date}
                    </span>
                  </div>
                  <p className="text-xs lg:text-sm font-heading italic text-white leading-tight">
                    {ev.title}
                  </p>
                  <p className="text-[10px] font-body font-light text-white/40 leading-relaxed">
                    {ev.desc}
                  </p>
                </motion.div>
              ) : i === 1 ? (
                /* May 2025 — Burst app */
                <motion.div
                  key={i}
                  initial={{ y: -25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.55, delay: 0.38 }}
                  className="flex flex-col items-center justify-center gap-2"
                >
                  <a
                    href="https://francovarriano.com/projects/burst-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2"
                  >
                    <img
                      src="/burst-app-icon.png"
                      alt="Burst app"
                      className="w-14 h-14 rounded-2xl drop-shadow-lg group-hover:scale-105 transition-transform duration-200"
                    />
                    <span className="text-[9px] font-body font-semibold tracking-[0.18em] uppercase text-emerald-400/60 group-hover:text-emerald-400 transition-colors flex items-center gap-1">
                      Burst
                      <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100 transition-opacity">
                        <path d="M2 10 L10 2 M5 2 L10 2 L10 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                    </span>
                  </a>
                </motion.div>
              ) : (
                <div key={i} />
              )
            )}
          </div>

          {/* Timeline axis */}
          <div className="relative grid grid-cols-6 gap-3 lg:gap-4 h-12">
            {/* Horizontal line */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            {/* Dots + connectors per column */}
            {events.map((ev, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.55 + i * 0.08 }}
                className="relative flex items-center justify-center z-10"
              >
                {/* Stem going up (for top-row cards) */}
                {i % 2 === 0 && (
                  <div className="absolute top-0 left-1/2 w-px h-1/2 bg-white/20" />
                )}
                {/* Dot */}
                <div
                  className={`w-2.5 h-2.5 rounded-full ${ev.dot} ring-[3px] ring-[#020817]`}
                />
                {/* Stem going down (for bottom-row cards) */}
                {i % 2 !== 0 && (
                  <div className="absolute bottom-0 left-1/2 w-px h-1/2 bg-white/20" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom row — odd-indexed events (cols 1, 3, 5) + project showcases for even cols */}
          <div className="grid grid-cols-6 gap-3 lg:gap-4">
            {events.map((ev, i) =>
              i % 2 !== 0 ? (
                <motion.div
                  key={i}
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.55, delay: 0.3 + i * 0.08 }}
                  className="liquid-glass rounded-xl p-3 lg:p-4 flex flex-col gap-2"
                >
                  <div className="flex items-center gap-1.5">
                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${ev.dot}`} />
                    <span
                      className="text-[9px] font-body font-semibold uppercase tracking-[0.15em]"
                      style={{ color: ev.color }}
                    >
                      {ev.date}
                    </span>
                  </div>
                  <p className="text-xs lg:text-sm font-heading italic text-white leading-tight">
                    {ev.title}
                  </p>
                  <p className="text-[10px] font-body font-light text-white/40 leading-relaxed">
                    {ev.desc}
                  </p>
                </motion.div>
              ) : i === 0 ? (
                /* Jan 2025 — Mode app */
                <motion.div
                  key={i}
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.55, delay: 0.38 }}
                  className="flex flex-col items-center justify-center gap-2"
                >
                  <a
                    href="https://francovarriano.com/projects/mode-ios-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2"
                  >
                    <img
                      src="/mode-app-icon.png"
                      alt="Mode iOS app"
                      className="w-14 h-14 rounded-2xl drop-shadow-lg group-hover:scale-105 transition-transform duration-200"
                    />
                    <span className="text-[9px] font-body font-semibold tracking-[0.18em] uppercase text-[#3ECFF0]/60 group-hover:text-[#3ECFF0] transition-colors flex items-center gap-1">
                      Mode
                      <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100 transition-opacity">
                        <path d="M2 10 L10 2 M5 2 L10 2 L10 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                    </span>
                  </a>
                </motion.div>
              ) : i === 2 ? (
                /* Jan 2026 GTM — agent pipeline screenshot */
                <motion.div
                  key={i}
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.55, delay: 0.46 }}
                  className="flex flex-col items-center justify-center"
                >
                  <img
                    src="/agent-pipeline.png"
                    alt="Agent pipeline dashboard"
                    className="w-full rounded-xl drop-shadow-lg object-cover object-top"
                    style={{ maxHeight: "85px" }}
                  />
                </motion.div>
              ) : (
                <div key={i} />
              )
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
