import { motion } from "motion/react";
import { Zap, Server, RefreshCw, Layers } from "lucide-react";
import CanvasBg from "../components/CanvasBg";
import SlideLayout from "../components/SlideLayout";

const shifts = [
  {
    icon: Zap,
    label: "Automation",
    color: "text-cyan-400",
    glow: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/20",
    before: "I do x, y, z — should I automate this?",
    after: "Skill chain it. Bundle the steps into a reusable agent skill.",
  },
  {
    icon: Server,
    label: "Service, Not UI",
    color: "text-violet-400",
    glow: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/20",
    before: "I want a UI or website that lets me do x, y, z.",
    after: "I need a service my agent can call and get x, y, z back. Skip the interface.",
  },
  {
    icon: RefreshCw,
    label: "Self-Reinforcing Loop",
    color: "text-emerald-400",
    glow: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
    before: "I have a few processes I run for sales, outreach, etc.",
    after: "Build a system where x feeds into y, which inevitably leads to more z, which you turn back into x — and the loop compounds.",
  },
  {
    icon: Layers,
    label: "Remix",
    color: "text-amber-400",
    glow: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-500/20",
    before: "Start from scratch",
    after: "Research, remix, build on existing content from the internet and let the AI generate multiple directions and first drafts. The cost of getting started, exploring more options or going 10% further is now zero.",
  },
];

export default function MindsetSlide() {
  return (
    <div className="relative w-full h-full bg-[#020817] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-25">
        <CanvasBg color={[34, 211, 238]} nodeCount={28} />
      </div>
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 55% 60% at 15% 50%, rgba(34,211,238,0.12) 0%, transparent 65%),
            radial-gradient(ellipse 50% 55% at 85% 50%, rgba(139,92,246,0.14) 0%, transparent 65%)
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
              className="block text-white/30 font-body text-[14px] tracking-[0.3em] uppercase mb-4"
            >
              Framework
            </motion.span>
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading italic text-white tracking-tight leading-[0.9]"
            >
              Mindset shift.
            </motion.h2>
          </>
        }
      >
        <div className="h-full flex flex-col justify-center pt-16 xl:pt-20">
          <div className="grid grid-cols-4 gap-4 xl:gap-6">
            {shifts.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                  className={`liquid-glass rounded-2xl p-4 lg:p-5 xl:p-6 flex flex-col gap-4 xl:gap-5 border ${s.border}`}
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 xl:gap-4">
                    <div className={`w-9 h-9 xl:w-10 xl:h-10 rounded-xl bg-gradient-to-br ${s.glow} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-4 h-4 xl:w-5 xl:h-5 ${s.color}`} />
                    </div>
                    <span className={`text-[14px] xl:text-base font-body font-semibold uppercase tracking-[0.2em] ${s.color}`}>
                      {s.label}
                    </span>
                  </div>

                  {/* Before */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[15px] xl:text-base font-body font-semibold uppercase tracking-[0.2em] text-white/20">Before</span>
                    <p className="text-sm xl:text-base font-body text-white/35 leading-relaxed italic">
                      "{s.before}"
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-px bg-white/10" />
                    <svg width="16" height="10" viewBox="0 0 16 10" className="text-white/20 flex-shrink-0">
                      <path d="M0 5 L16 5 M11 1 L16 5 L11 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                    <div className="flex-1 h-px bg-white/10" />
                  </div>

                  {/* After */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[15px] xl:text-base font-body font-semibold uppercase tracking-[0.2em] text-white/20">Shift</span>
                    <p className="text-sm xl:text-base font-body text-white/60 leading-relaxed">
                      {s.after}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </SlideLayout>
    </div>
  );
}
