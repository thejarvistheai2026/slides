import { motion } from "motion/react";
import { ShieldCheck, RefreshCw, Repeat2, Target, AlertCircle } from "lucide-react";
import CanvasBg from "../components/CanvasBg";
import SlideLayout from "../components/SlideLayout";

const principles = [
  {
    num: "I",
    title: "Trust, but Verify.",
    icon: ShieldCheck,
    color: "text-blue-400",
    glow: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/20",
    bullets: [
      "AI cheats — trust but verify often",
      "Bake in evaluation: define what \"good\" looks like; have another model review the work",
      "Bake in evolution: monitor gaps, trends, and changes in the landscape",
    ],
  },
  {
    num: "II",
    title: "Relentless Refinement.",
    icon: RefreshCw,
    color: "text-violet-400",
    glow: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/20",
    bullets: [
      "First time with AI on a task? Push relentlessly — inspect every detail, over and over",
      "Ask it to explain back to you; define what \"good\" or \"done\" looks like",
      "Benchmark output against another agent",
      "Codify the process into a prompt → make it a skill",
    ],
  },
  {
    num: "III",
    title: "Reinforcement Loops.",
    icon: Repeat2,
    color: "text-emerald-400",
    glow: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
    bullets: [
      "Review everything from last week & month",
      "How can we do better?",
    ],
  },
  {
    num: "IV",
    title: "Eliminate Gaps.",
    icon: Target,
    color: "text-amber-400",
    glow: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-500/20",
    bullets: [
      "Is this process helpful to us?",
      "What gaps in our workflow does this expose?",
    ],
  },
];

export default function PrinciplesSlide() {
  return (
    <div className="relative w-full h-full bg-[#020817] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-25">
        <CanvasBg color={[248, 113, 113]} nodeCount={28} />
      </div>
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 55% 60% at 20% 40%, rgba(59,130,246,0.15) 0%, transparent 65%),
            radial-gradient(ellipse 50% 55% at 80% 65%, rgba(139,92,246,0.15) 0%, transparent 65%)
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
              Principles for working with AI.
            </motion.h2>
          </>
        }
      >
        <div className="h-full flex flex-col justify-center pt-16 xl:pt-20">
          <div className="grid grid-cols-2 gap-4 xl:gap-6 2xl:gap-8">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className={`liquid-glass rounded-2xl p-4 lg:p-5 xl:p-6 flex flex-col gap-3 xl:gap-4 border ${p.border}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3 xl:gap-4">
                      <div className={`w-9 h-9 xl:w-10 xl:h-10 rounded-xl bg-gradient-to-br ${p.glow} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-4 h-4 xl:w-5 xl:h-5 ${p.color}`} />
                      </div>
                      <h3 className="text-base xl:text-lg font-heading italic text-white leading-tight">
                        {p.title}
                      </h3>
                    </div>
                    <span className={`text-[14px] font-body font-semibold uppercase tracking-[0.2em] ${p.color} flex-shrink-0 ml-3 mt-1`}>
                      {p.num}
                    </span>
                  </div>
                  <div className="space-y-1.5 xl:space-y-2">
                    {p.bullets.map((b, bi) => (
                      <div key={bi} className="flex items-start gap-2">
                        <div className={`w-1 h-1 rounded-full mt-1.5 flex-shrink-0 ${p.color} opacity-60`} />
                        <p className="text-sm xl:text-base font-body text-white/45 leading-relaxed">{b}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Callout */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="liquid-glass rounded-xl px-4 xl:px-6 py-3 xl:py-4 mt-4 xl:mt-6 flex items-start gap-3 w-fit mx-auto"
          >
            <AlertCircle className="w-4 h-4 xl:w-5 xl:h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm xl:text-base font-body text-white/40">
              <span className="text-white/60 font-medium">Principles for working with a personal agent:</span>{" "}
              Treat like a hire — onboard for a specific role and function. Does take some initial time and energy investment.
            </p>
          </motion.div>

        </div>
      </SlideLayout>
    </div>
  );
}
