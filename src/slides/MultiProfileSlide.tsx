import { motion } from "motion/react";
import { Crown, Code2, Search, PenLine, BarChart2, Megaphone, AlertCircle } from "lucide-react";
import CanvasBg from "../components/CanvasBg";
import SlideLayout from "../components/SlideLayout";

function OpenClawIcon() {
  return (
    <img src="/openclaw-logo.png" alt="OpenClaw" className="w-4 h-4 flex-shrink-0 object-contain rounded-sm" />
  );
}

function HermesIcon() {
  return (
    <img src="https://hermes-agent.nousresearch.com/icon.png" alt="Hermes" className="w-4 h-4 flex-shrink-0 object-contain rounded-sm" />
  );
}

const personas = [
  { icon: Code2,     name: "Dev",      color: "text-cyan-400",    bg: "from-cyan-500/15 to-cyan-500/5",    border: "border-cyan-500/20",    desc: "Code gen, debugging, refactoring" },
  { icon: Search,    name: "Research", color: "text-blue-400",    bg: "from-blue-500/15 to-blue-500/5",    border: "border-blue-500/20",    desc: "Web search, summarization" },
  { icon: PenLine,   name: "Writer",   color: "text-violet-400",  bg: "from-violet-500/15 to-violet-500/5", border: "border-violet-500/20",  desc: "Copy, emails, docs" },
  { icon: BarChart2, name: "Analyst",  color: "text-emerald-400", bg: "from-emerald-500/15 to-emerald-500/5", border: "border-emerald-500/20", desc: "Data, reports, insights" },
  { icon: Megaphone, name: "GTM",      color: "text-amber-400",   bg: "from-amber-500/15 to-amber-500/5",   border: "border-amber-500/20",   desc: "Outreach, enrichment, HubSpot" },
];

// Fan connector: orchestrator at center (50%), persona columns at ~10 30 50 70 90%
const personaCenters = [10, 30, 50, 70, 90];

export default function MultiProfileSlide() {
  return (
    <div className="relative w-full h-full bg-[#020817] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-25">
        <CanvasBg color={[167, 139, 250]} nodeCount={28} />
      </div>
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 50% 60% at 25% 40%, rgba(139,92,246,0.2) 0%, transparent 65%),
            radial-gradient(ellipse 40% 40% at 80% 70%, rgba(99,179,237,0.12) 0%, transparent 60%)
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
              Multi-Profile
            </motion.span>
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading italic text-white tracking-tight leading-[0.9]"
            >
              Medium: One Agent Orchestrator, Multiple Agent Profiles.
            </motion.h2>
          </>
        }
      >
        <div className="h-full flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">

            {/* ── Left: text ── */}
            <div className="flex-1 max-w-xs flex flex-col gap-6">
              <motion.p
                initial={{ x: -15, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="text-sm font-body font-light text-white/40 leading-relaxed"
              >
                OpenClaw and Hermes both support multiple named agent profiles. A main orchestrator routes tasks, while specialist personas handle execution — each with their own system prompt, tools, and context budget.
              </motion.p>

              <motion.div
                initial={{ x: -15, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-2"
              >
                <div className="liquid-glass rounded-full px-3 py-1.5 flex items-center gap-2">
                  <OpenClawIcon />
                  <span className="text-xs font-body text-white/60">OpenClaw</span>
                </div>
                <div className="liquid-glass rounded-full px-3 py-1.5 flex items-center gap-2">
                  <HermesIcon />
                  <span className="text-xs font-body text-white/60">Hermes</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -15, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.45 }}
              >
                <p className="text-[10px] text-white/25 uppercase tracking-[0.2em] font-body mb-2">
                  Why this matters
                </p>
                <p className="text-xs font-body font-light text-white/40 leading-relaxed">
                  Each persona has isolated context and tailored instructions. Your Dev agent doesn't muddy its context with GTM tasks. Cleaner outputs, better focus.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="liquid-glass rounded-xl px-4 py-3 mt-[10px] flex items-start gap-3"
              >
                <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs font-body font-light text-white/40">
                  <span className="text-white/60 font-medium">Orchestrator context limit:</span>{" "}
                  All routing still passes through one orchestrator window. For true parallel execution, see Paperclip.
                </p>
              </motion.div>
            </div>

            {/* ── Right: diagram ── */}
            <div className="lg:w-[62%] flex-shrink-0 flex flex-col items-center">

              {/* Tier 1: Orchestrator */}
              <motion.div
                initial={{ y: -15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.55, delay: 0.3 }}
                className="liquid-glass rounded-2xl px-5 py-3.5 flex items-center gap-3 w-[52%]"
              >
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-500/5 flex items-center justify-center flex-shrink-0">
                  <Crown className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm font-body font-semibold text-white">Main Orchestrator</p>
                  <p className="text-[10px] font-body text-white/30 uppercase tracking-wider mt-0.5">
                    Routes · Delegates · Synthesizes
                  </p>
                </div>
              </motion.div>

              {/* Fan connector */}
              <div className="relative h-8 w-full">
                <div className="absolute top-0 bg-white/15" style={{ left: "calc(50% - 0.5px)", width: "1px", height: "50%" }} />
                <div className="absolute bg-white/15" style={{ left: `${personaCenters[0]}%`, right: `${100 - personaCenters[4]}%`, top: "50%", height: "1px" }} />
                {personaCenters.map((pct) => (
                  <div key={pct} className="absolute bg-white/15" style={{ left: `calc(${pct}% - 0.5px)`, top: "50%", bottom: 0, width: "1px" }} />
                ))}
              </div>

              {/* Tier 2: Personas */}
              <div className="grid grid-cols-5 gap-2 w-full">
                {personas.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.45, delay: 0.4 + i * 0.07 }}
                      className={`liquid-glass rounded-2xl p-3 flex flex-col gap-2 border ${p.border}`}
                    >
                      <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${p.bg} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-3.5 h-3.5 ${p.color}`} />
                      </div>
                      <div>
                        <p className={`text-[10px] font-body font-semibold uppercase tracking-[0.15em] mb-0.5 ${p.color}`}>
                          {p.name}
                        </p>
                        <p className="text-[10px] font-body font-light text-white/35 leading-relaxed">
                          {p.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </SlideLayout>
    </div>
  );
}
