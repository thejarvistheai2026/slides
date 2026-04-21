import { motion } from "motion/react";
import { Zap } from "lucide-react";
import CanvasBg from "../components/CanvasBg";
import SlideLayout from "../components/SlideLayout";

// ── Logo components ──────────────────────────────────────────────────────────

function ClaudeIcon() {
  return <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center overflow-hidden flex-shrink-0"><img src="/claude-logo.png" alt="Claude" className="w-4 h-4 object-contain" /></div>;
}

function ChatGPTIcon() {
  return <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center overflow-hidden flex-shrink-0"><img src="/chatgpt-logo.png" alt="ChatGPT" className="w-4 h-4 object-contain" /></div>;
}

function OpenClawIcon() {
  return <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center overflow-hidden flex-shrink-0"><img src="/openclaw-logo.png" alt="OpenClaw" className="w-4 h-4 object-contain" /></div>;
}

function HermesIcon() {
  return (
    <img
      src="https://hermes-agent.nousresearch.com/icon.png"
      alt="Hermes"
      className="w-5 h-5 flex-shrink-0 object-contain rounded-sm"
    />
  );
}

// ── Logo badge pill ───────────────────────────────────────────────────────────

function LogoBadge({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/6 border border-white/10">
      {icon}
      <span className="text-[15px] font-body font-medium text-white/55">{name}</span>
    </div>
  );
}

// ── Point list ────────────────────────────────────────────────────────────────

const closedPoints = [
  "Best-in-class reasoning & coding",
  "Rich MCP ecosystem, huge tool library",
  "Skills, hooks & sub-agents built in",
  "Maintained and updated by providers like Anthropic and OpenAI",
];

const ossPoints = [
  "Runs 100% locally — fully private",
  "Free inference via Ollama, zero API cost",
  "Offline-capable, fully customizable",
  "Same harness. Swap the underlying model anytime.",
];


// ── Slide ─────────────────────────────────────────────────────────────────────

export default function ClaudeVsOpenSourceSlide() {
  return (
    <div className="relative w-full h-full bg-[#020817] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <CanvasBg color={[96, 165, 250]} nodeCount={25} />
      </div>
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 45% 70% at 15% 50%, rgba(59,130,246,0.18) 0%, transparent 70%),
            radial-gradient(ellipse 45% 70% at 85% 50%, rgba(16,185,129,0.15) 0%, transparent 70%)
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
              className="block text-white/30 font-body text-[14px] tracking-[0.3em] uppercase mb-3"
            >
              Claude vs Open Source
            </motion.span>
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading italic text-white tracking-tight leading-[0.9]"
            >
              Apple vs Android for AI agents.
            </motion.h2>
          </>
        }
      >
        <div className="flex-1 flex flex-col gap-2 min-h-0 pt-16">
          {/* ── Two cards ── */}
          <div className="flex-[3] min-h-0 grid grid-cols-2 gap-4">
            {/* Left — Closed / Cloud */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex-1 liquid-glass rounded-2xl p-4 lg:p-5 border border-blue-500/15 flex flex-col gap-2.5"
            >
              <div className="flex items-center justify-between">
                <p className="text-[14px] font-body font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Closed · Polished
                </p>
                <div className="flex items-center gap-1.5">
                  <LogoBadge icon={<ClaudeIcon />} name="Claude" />
                  <LogoBadge icon={<ChatGPTIcon />} name="ChatGPT" />
                </div>
              </div>
              <div className="space-y-2">
                {closedPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-1 h-1 rounded-full bg-blue-400/60 mt-2 flex-shrink-0" />
                    <span className="text-base font-body text-white/60 leading-relaxed">{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Open Source */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.42 }}
              className="flex-1 liquid-glass rounded-2xl p-4 lg:p-5 border border-emerald-500/15 flex flex-col gap-2.5"
            >
              <div className="flex items-center justify-between">
                <p className="text-[14px] font-body font-semibold uppercase tracking-[0.2em] text-emerald-400">
                  Open · Local · Private
                </p>
                <div className="flex items-center gap-1.5">
                  <LogoBadge icon={<OpenClawIcon />} name="OpenClaw" />
                  <LogoBadge icon={<HermesIcon />} name="Hermes" />
                </div>
              </div>
              <div className="space-y-2">
                {ossPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-1 h-1 rounded-full bg-emerald-400/60 mt-2 flex-shrink-0" />
                    <span className="text-base font-body text-white/60 leading-relaxed">{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Bottom row: Why invest + Callout ── */}
          <div className="flex-[2] min-h-0 grid grid-cols-2 gap-4">

            {/* Bottom left — Why invest */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="liquid-glass-strong rounded-2xl p-4 lg:p-5 flex flex-col gap-3 border border-white/10"
            >
              <h3 className="text-base lg:text-lg font-heading italic text-white leading-tight">
                Why invest in a personal agent?
              </h3>

              {/* Quote */}
              <div className="border-l-2 border-white/15 pl-3">
                <p className="text-[15px] font-body text-white/40 leading-relaxed italic">
                  "Crypto: Not your keys, not your crypto.
                  <br />
                  AI: Not your memory, not your agent."
                </p>
              </div>

              {/* Reasons */}
              <div className="space-y-1.5">
                {[
                  { label: "Personalized", desc: "Knows your context, your voice, and your workflows" },
                  { label: "Proactive", desc: "Acts on your behalf without being asked" },
                  { label: "The future", desc: "Intelligence is rapidly becoming inexpensive. Proprietary systems and process will remain the competitive advantage." },
                ].map(({ label, desc }, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-white/25 mt-1.5 flex-shrink-0" />
                    <p className="text-[15px] font-body text-white/45 leading-relaxed">
                      <span className="text-white/60 font-medium">{label}</span>
                      {" — "}
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bottom right — Trend callout */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="liquid-glass rounded-2xl p-4 lg:p-5 flex flex-col justify-between border border-amber-500/15 relative overflow-hidden"
              style={{ background: "rgba(251,191,36,0.04)" }}
            >
              {/* Terminal screenshot — bottom half only */}
              <img
                src="/ollama-terminal.png"
                alt=""
                aria-hidden="true"
                className="absolute bottom-0 right-0 w-[80%] h-1/2 opacity-[0.08] object-cover object-top pointer-events-none select-none"
              />
              <div className="flex items-start gap-3 relative z-10">
                <div className="w-8 h-8 rounded-xl bg-amber-500/15 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div>
                  <p className="text-[14px] font-body font-semibold uppercase tracking-[0.25em] text-amber-400/60 mb-1">
                    Trend to watch
                  </p>
                  <h3 className="text-base font-heading italic text-white leading-tight mb-2">
                    Local LLMs are closing the gap fast.
                  </h3>
                  <div className="space-y-1.5 mt-0.5">
                    {[
                      "Enables cutting-edge models to run on consumer hardware — a Mac mini, a laptop",
                      "Previously inaccessible state-of-the-art models can now run locally by anyone, from anywhere",
                      "The model is no longer the primary moat",
                    ].map((pt, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-amber-400/50 mt-1.5 flex-shrink-0" />
                        <p className="text-sm font-body text-white/45 leading-relaxed">{pt}</p>
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
