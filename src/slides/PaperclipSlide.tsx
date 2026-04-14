import { motion } from "motion/react";
import { Zap, GitFork, Cpu, Globe } from "lucide-react";
import CanvasBg from "../components/CanvasBg";
import SlideLayout from "../components/SlideLayout";

const harnesses = [
  {
    label: "Harness A",
    sublabel: "OpenClaw (Claude)",
    tasks: ["GTM automation", "Outreach drafting"],
    color: "text-blue-400",
    border: "border-blue-500/20",
  },
  {
    label: "Harness B",
    sublabel: "OpenClaw (Ollama)",
    tasks: ["Private research", "Document analysis"],
    color: "text-emerald-400",
    border: "border-emerald-500/20",
  },
  {
    label: "Harness C",
    sublabel: "Hermes Agent",
    tasks: ["Experimental tasks", "Workflow testing"],
    color: "text-violet-400",
    border: "border-violet-500/20",
  },
];

const benefits = [
  { icon: GitFork, text: "Parallel task execution — no queuing" },
  { icon: Cpu, text: "Mix models: Claude for quality, local for privacy" },
  { icon: Globe, text: "Each harness has isolated context & memory" },
  { icon: Zap, text: "Sub-agents spawned on-demand per task" },
];

export default function PaperclipSlide() {
  return (
    <div className="relative w-full h-full bg-[#020817] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <CanvasBg color={[99, 179, 237]} nodeCount={40} />
      </div>
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 40% 50% at 20% 50%, rgba(59,130,246,0.18) 0%, transparent 65%),
            radial-gradient(ellipse 35% 45% at 60% 70%, rgba(139,92,246,0.15) 0%, transparent 60%),
            radial-gradient(ellipse 30% 40% at 85% 25%, rgba(16,185,129,0.12) 0%, transparent 60%)
          `,
        }}
      />

      <SlideLayout
        header={
          <>
            <motion.span
              initial={{ x: -15, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="block text-white/30 font-body text-[10px] tracking-[0.3em] uppercase mb-4"
            >
              Paperclip
            </motion.span>
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading italic text-white tracking-tight leading-[0.9]"
            >
              Advanced: Multi-Agent Orchestration.
            </motion.h2>
          </>
        }
      >
        <div className="flex-1 flex flex-col gap-4 pt-10">

          {/* Browser asset */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="flex flex-col w-[30%] mx-auto"
          >
            {/* Browser chrome */}
            <div className="liquid-glass rounded-t-2xl px-4 py-2.5 flex items-center gap-2.5 border-b border-white/8 flex-shrink-0">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
              </div>
              <div className="flex-1 mx-4 bg-white/8 rounded-md px-3 py-1 flex items-center">
                <span className="text-[10px] font-body text-white/30">Paperclip</span>
              </div>
            </div>
            {/* Screenshot */}
            <div className="overflow-hidden rounded-b-2xl">
              <img
                src="/paperclip-app.png"
                alt="Paperclip app"
                className="w-full h-auto block"
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-sm font-body font-light text-white/45 leading-relaxed flex-shrink-0 text-center"
          >
            <a href="https://paperclip.ing/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-white/60 hover:text-white/90 transition-colors">
              Paperclip
              <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 opacity-60">
                <path d="M2 10 L10 2 M5 2 L10 2 L10 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </a>
            {" "}is the meta-orchestrator. It manages multiple agent harnesses, routes tasks, and enables true parallel AI workflows.
            <br />
            <a href="https://www.youtube.com/watch?v=C3-4llQYT8o&t=2569s" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-white/60 hover:text-white/90 transition-colors mt-1">
              See it in action here (6–36 mins)
              <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 opacity-60">
                <path d="M2 10 L10 2 M5 2 L10 2 L10 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </a>
          </motion.p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="liquid-glass rounded-2xl p-5 lg:p-6"
          >
            <p className="text-[10px] text-white/25 uppercase tracking-[0.2em] font-body mb-4">
              Why Paperclip
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-white/40 flex-shrink-0 mt-0.5" />
                  <span className="text-xs font-body font-light text-white/50 leading-relaxed">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </SlideLayout>
    </div>
  );
}
