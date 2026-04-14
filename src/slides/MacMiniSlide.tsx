import { motion } from "motion/react";
import { User, FlaskConical, ShieldCheck, GitBranch, Cpu } from "lucide-react";
import CanvasBg from "../components/CanvasBg";
import SlideLayout from "../components/SlideLayout";

function OpenClawIcon() {
  return <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center overflow-hidden flex-shrink-0"><img src="/openclaw-logo.png" alt="OpenClaw" className="w-5 h-5 object-contain" /></div>;
}

function HermesIcon() {
  return (
    <img src="https://hermes-agent.nousresearch.com/icon.png"
      alt="Hermes" className="w-4 h-4 flex-shrink-0 object-contain rounded-sm" />
  );
}

function LogoBadge({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div className="flex items-center gap-1.5 px-2 py-1.5 rounded-xl bg-white/6 border border-white/10">
      {icon}
      <span className="text-[10px] font-body font-medium text-white/55">{name}</span>
    </div>
  );
}

function MacMiniAsset() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.65, delay: 0.45 }}
      className="flex flex-col items-center gap-3 px-4"
    >
      <img
        src="/macmini.png"
        alt="Mac mini M4"
        className="w-32 h-32 lg:w-40 lg:h-40 object-contain drop-shadow-2xl"
      />
      <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-white/25">
        Mac mini M4
      </span>
    </motion.div>
  );
}

const users = [
  {
    label: "User 1",
    title: "Stable",
    subtitle: "Production workflows",
    icon: ShieldCheck,
    color: "text-blue-400",
    glow: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/20",
    logos: [{ icon: <OpenClawIcon />, name: "OpenClaw" }],
    tools: ["OpenClaw (Claude Code)", "Custom skills", "CLAUDE.md config"],
    desc: "Always-on, reliable. No experiments. Runs the harnesses you depend on daily.",
  },
  {
    label: "User 2",
    title: "Experimental",
    subtitle: "Testing & exploration",
    icon: FlaskConical,
    color: "text-violet-400",
    glow: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/20",
    logos: [{ icon: <HermesIcon />, name: "Hermes" }],
    tools: ["OpenClaw + Hermes Agent", "Ollama local LLMs", "New skill prototypes"],
    desc: "Break things here. Experiments never bleed into stable workflows.",
  },
];

export default function MacMiniSlide() {
  return (
    <div className="relative w-full h-full bg-[#020817] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-25">
        <CanvasBg color={[96, 165, 250]} nodeCount={28} />
      </div>
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 45% 65% at 20% 50%, rgba(59,130,246,0.2) 0%, transparent 65%),
            radial-gradient(ellipse 45% 65% at 80% 50%, rgba(139,92,246,0.18) 0%, transparent 65%)
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
              className="block text-white/30 font-body text-[10px] tracking-[0.3em] uppercase mb-3"
            >
              Mac mini Setup
            </motion.span>
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading italic text-white tracking-tight leading-[0.9]"
            >
              One Mac mini. Two worlds.
            </motion.h2>
          </>
        }
      >
        <div className="h-full flex flex-col justify-center gap-4">
          <div className="grid grid-cols-[1fr_auto_1fr] gap-5 lg:gap-8 items-center">

            {/* Left card — Stable */}
            <motion.div
              initial={{ x: -25, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-col"
            >
              <div className={`liquid-glass rounded-2xl p-4 lg:p-5 flex flex-col gap-3 border ${users[0].border}`}>
                {/* Logos */}
                <div className="flex items-center gap-1.5 pb-2.5 border-b border-white/6">
                  {users[0].logos.map((l, i) => (
                    <LogoBadge key={i} icon={l.icon} name={l.name} />
                  ))}
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <span className={`text-[10px] font-body font-semibold uppercase tracking-[0.2em] ${users[0].color}`}>
                      {users[0].label}
                    </span>
                    <p className="text-lg font-heading italic text-white mt-0.5">{users[0].title}</p>
                    <p className="text-[10px] font-body text-white/30">{users[0].subtitle}</p>
                  </div>
                  <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${users[0].glow} flex items-center justify-center flex-shrink-0`}>
                    <ShieldCheck className={`w-4 h-4 ${users[0].color}`} />
                  </div>
                </div>
                <p className="text-xs font-body font-light text-white/40 leading-relaxed">{users[0].desc}</p>
                <div className="space-y-1.5">
                  {users[0].tools.map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-blue-400/60 flex-shrink-0" />
                      <span className="text-[11px] font-body font-light text-white/50">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Center — Mac mini */}
            <MacMiniAsset />

            {/* Right card — Experimental */}
            <motion.div
              initial={{ x: 25, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.42 }}
              className="flex flex-col"
            >
              <div className={`liquid-glass rounded-2xl p-4 lg:p-5 flex flex-col gap-3 border ${users[1].border}`}>
                {/* Logos */}
                <div className="flex items-center gap-1.5 pb-2.5 border-b border-white/6">
                  {users[1].logos.map((l, i) => (
                    <LogoBadge key={i} icon={l.icon} name={l.name} />
                  ))}
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <span className={`text-[10px] font-body font-semibold uppercase tracking-[0.2em] ${users[1].color}`}>
                      {users[1].label}
                    </span>
                    <p className="text-lg font-heading italic text-white mt-0.5">{users[1].title}</p>
                    <p className="text-[10px] font-body text-white/30">{users[1].subtitle}</p>
                  </div>
                  <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${users[1].glow} flex items-center justify-center flex-shrink-0`}>
                    <FlaskConical className={`w-4 h-4 ${users[1].color}`} />
                  </div>
                </div>
                <p className="text-xs font-body font-light text-white/40 leading-relaxed">{users[1].desc}</p>
                <div className="space-y-1.5">
                  {users[1].tools.map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-violet-400/60 flex-shrink-0" />
                      <span className="text-[11px] font-body font-light text-white/50">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Benefits strip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="liquid-glass rounded-2xl px-5 py-3 flex items-center gap-6 flex-wrap"
          >
            {[
              { icon: ShieldCheck, text: "Stability isolation — experiments can't break prod" },
              { icon: GitBranch, text: "Easy to reset the experimental user without affecting stable" },
              { icon: User, text: "Each user has independent harness config, models & skills" },
              { icon: Cpu, text: "M4 handles both Ollama + Claude Code simultaneously" },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center gap-2">
                <Icon className="w-3.5 h-3.5 text-white/30 flex-shrink-0" />
                <span className="text-[11px] font-body font-light text-white/35">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </SlideLayout>
    </div>
  );
}
