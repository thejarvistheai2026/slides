import { motion } from "motion/react";
import BlurText from "../components/BlurText";
import CanvasBg from "../components/CanvasBg";

const tools = ["OpenClaw", "Hermes", "Claude Code", "Gadget", "Paperclip"];

export default function TitleSlide() {
  return (
    <div className="relative w-full h-full bg-[#020817] overflow-hidden">
      {/* Neural canvas */}
      <div className="absolute inset-0 z-0 opacity-40">
        <CanvasBg color={[96, 165, 250]} nodeCount={42} />
      </div>

      {/* Gradient blobs */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 15% 70%, rgba(59,130,246,0.22) 0%, transparent 70%),
            radial-gradient(ellipse 50% 50% at 85% 20%, rgba(139,92,246,0.18) 0%, transparent 65%)
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full px-6 md:px-10 lg:px-20 py-8 md:py-12 pb-16 md:pb-20">
        {/* Center content */}
        <div className="flex-1 flex flex-col justify-center max-w-4xl">
          {/* Eyebrow */}
          <motion.span
            initial={{ x: -15, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="block text-white/30 font-body text-[14px] tracking-[0.3em] uppercase mb-5"
          >
            A Founder's Field Guide
          </motion.span>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[6.5rem] font-heading italic text-white leading-[0.85] tracking-[-2px] mb-8">
            <BlurText
              text="AI Agents in Practice"
              delay={60}
            />
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-xl md:text-2xl text-white/50 font-body leading-relaxed max-w-2xl"
          >
            90 Days of Experiments &amp; System Building (Q1 2026)
          </motion.p>
        </div>

        {/* Bottom: tools bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex items-center gap-6"
        >
          <span className="text-white/20 text-sm font-body uppercase tracking-[0.2em]">
            Covers
          </span>
          <div className="w-px h-4 bg-white/10" />
          {tools.map((t) => (
            <span
              key={t}
              className="text-lg md:text-xl font-heading italic text-white/25"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
