import { motion } from "motion/react";
import { MessageCircle, Radio, AlertCircle, Hash } from "lucide-react";
import CanvasBg from "../components/CanvasBg";
import SlideLayout from "../components/SlideLayout";

function OpenClawIcon({ size = "w-5 h-5" }: { size?: string }) {
  return (
    <div className={`${size} bg-white rounded-sm flex items-center justify-center overflow-hidden flex-shrink-0`}>
      <img src="/openclaw-logo.png" alt="OpenClaw" className="w-4 h-4 object-contain" />
    </div>
  );
}

function HermesIcon({ size = "w-4 h-4" }: { size?: string }) {
  return (
    <img src="https://hermes-agent.nousresearch.com/icon.png" alt="Hermes" className={`${size} flex-shrink-0 object-contain rounded-sm`} />
  );
}

function ObsidianIcon() {
  return (
    <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center overflow-hidden flex-shrink-0">
      <img src="/obsidian-logo.png" alt="Obsidian" className="w-4 h-4 object-contain" />
    </div>
  );
}

const subChannels = ["general", "socials", "research"];

const features = [
  "Persistent memory across sessions",
  "Tool access: web search, file system, APIs",
  "Single context window shared across conversations",
  "One active context equals one \"train of thought\"",
];

export default function SingleAgentSlide() {
  return (
    <div className="relative w-full h-full bg-[#020817] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <CanvasBg color={[96, 165, 250]} nodeCount={30} />
      </div>
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 70% at 60% 50%, rgba(59,130,246,0.2) 0%, transparent 65%)`,
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
              Single Agent
            </motion.span>
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading italic text-white tracking-tight leading-[0.9] mb-6"
            >
              Simple: One agent, everywhere.
            </motion.h2>
          </>
        }
      >
        {/* Outer: fills content zone height, centers the row block vertically */}
        <div className="h-full flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-20 -mt-5">

            {/* ── Left: description ── */}
            <div className="flex-1 max-w-xl">
              <motion.p
                initial={{ x: -15, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="text-white/40 font-body font-light text-sm md:text-base leading-relaxed mb-4"
              >
                OpenClaw and Hermes both run as persistent agent harnesses reachable via
                multiple front-ends. One brain, multiple access points. You
                can start a task in iMessage and continue it in Discord.
              </motion.p>

              <motion.div
                initial={{ x: -15, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="flex items-center gap-2 mb-8"
              >
                <div className="liquid-glass rounded-full px-3 py-1.5 flex items-center gap-2">
                  <OpenClawIcon size="w-4 h-4" />
                  <span className="text-xs font-body text-white/60">OpenClaw</span>
                </div>
                <div className="liquid-glass rounded-full px-3 py-1.5 flex items-center gap-2">
                  <HermesIcon size="w-4 h-4" />
                  <span className="text-xs font-body text-white/60">Hermes</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -15, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-3"
              >
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <span className="text-sm font-body font-light text-white/50">{f}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="liquid-glass rounded-xl px-4 py-3 mt-[42px] flex items-start gap-3"
              >
                <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs font-body font-light text-white/40">
                  <span className="text-white/60 font-medium">Shared context limit:</span>{" "}
                  Multi-stream conversations share one context window. High
                  conversation volume = context pressure. Solved in slide 7
                  with multiple profiles.
                </p>
              </motion.div>
            </div>

            {/* ── Right: diagram ── */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="w-full lg:w-[400px] flex-shrink-0 flex flex-col lg:ml-20"
            >

              {/* ── Tier 1: OpenClaw ←→ Obsidian ── */}
              {/* items-stretch so both cards share the same row height */}
              <div className="flex items-stretch gap-2.5">
                {/* OpenClaw — compact */}
                <div className="flex-1 liquid-glass rounded-2xl px-3 py-3 flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500/15 to-blue-500/5 flex items-center justify-center flex-shrink-0">
                    <OpenClawIcon />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-body font-semibold text-white whitespace-nowrap">OpenClaw</p>
                    <p className="text-[10px] font-body font-light text-white/40">Agent harness</p>
                  </div>
                </div>

                {/* ←→ */}
                <div className="flex items-center flex-shrink-0">
                  <svg width="20" height="12" viewBox="0 0 20 12" className="text-white/25">
                    <path
                      d="M0 6 L20 6 M3 3 L0 6 L3 9 M17 3 L20 6 L17 9"
                      stroke="currentColor" strokeWidth="1.2"
                      strokeLinecap="round" strokeLinejoin="round" fill="none"
                    />
                  </svg>
                </div>

                {/* Obsidian — wider, same height via items-stretch */}
                <div className="flex-1 liquid-glass rounded-2xl px-3 py-3 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500/15 to-violet-500/5 flex items-center justify-center flex-shrink-0">
                    <ObsidianIcon />
                  </div>
                  <div>
                    <p className="text-xs font-body font-semibold text-white whitespace-nowrap">Obsidian</p>
                    <p className="text-[10px] font-body text-white/30">Memory / Brain</p>
                  </div>
                </div>
              </div>

              {/* ── Branch connector: OpenClaw → iMessage + Discord ── */}
              {/* OpenClaw (compact, ~155px) center ≈ 19% of 400px container.
                  Two-col grid below: iMessage center ≈ 25%, Discord center ≈ 75%. */}
              <div className="relative h-6">
                <div className="absolute top-0 bg-white/15" style={{ left: "calc(19% - 0.5px)", width: "1px", height: "50%" }} />
                <div className="absolute bg-white/15" style={{ left: "19%", right: "25%", top: "50%", height: "1px" }} />
                <div className="absolute bg-white/15" style={{ left: "calc(25% - 0.5px)", top: "50%", bottom: 0, width: "1px" }} />
                <div className="absolute bg-white/15" style={{ right: "calc(25% - 0.5px)", top: "50%", bottom: 0, width: "1px" }} />
              </div>

              {/* ── Tier 2: iMessage + Discord ── */}
              <div className="grid grid-cols-2 gap-3 items-start">

                {/* iMessage */}
                <div className="liquid-glass rounded-2xl p-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500/15 to-blue-500/5 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-4 h-4 text-blue-400" />
                    </div>
                    <p className="text-sm font-body font-semibold text-white">iMessage</p>
                  </div>
                  <p className="text-[11px] font-body font-light text-white/40 leading-relaxed">
                    Personal async comms. Ask questions, trigger workflows, get summaries.
                  </p>
                </div>

                {/* Discord + sub-channels */}
                <div className="flex flex-col">
                  <div className="liquid-glass rounded-2xl p-4 flex flex-col gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500/15 to-indigo-500/5 flex items-center justify-center flex-shrink-0">
                        <Radio className="w-4 h-4 text-indigo-400" />
                      </div>
                      <p className="text-sm font-body font-semibold text-white">Discord</p>
                    </div>
                    <p className="text-[11px] font-body font-light text-white/40 leading-relaxed">
                      Team channels. Shared context, multi-user access to the same agent.
                    </p>
                  </div>

                  {/* Sub-channel connector — stem + T-bar + 3 drops */}
                  <div className="relative h-4">
                    <div className="absolute top-0 bg-white/15" style={{ left: "calc(50% - 0.5px)", width: "1px", height: "50%" }} />
                    <div className="absolute bg-white/15" style={{ left: "17%", right: "17%", top: "50%", height: "1px" }} />
                    <div className="absolute bg-white/15" style={{ left: "calc(17% - 0.5px)", top: "50%", bottom: 0, width: "1px" }} />
                    <div className="absolute bg-white/15" style={{ left: "calc(50% - 0.5px)", top: "50%", bottom: 0, width: "1px" }} />
                    <div className="absolute bg-white/15" style={{ left: "calc(83% - 0.5px)", top: "50%", bottom: 0, width: "1px" }} />
                  </div>

                  {/* Sub-channel chips */}
                  <div className="grid grid-cols-3 gap-1">
                    {subChannels.map((ch) => (
                      <div
                        key={ch}
                        className="liquid-glass rounded-xl py-1.5 px-1 flex items-center justify-center gap-1"
                      >
                        <Hash className="w-2.5 h-2.5 text-indigo-400/50 flex-shrink-0" />
                        <span className="text-[9px] font-body font-medium text-white/35 truncate">{ch}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </SlideLayout>
    </div>
  );
}
