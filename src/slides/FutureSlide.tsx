import { motion } from "motion/react";
import { Network, Terminal } from "lucide-react";
import CanvasBg from "../components/CanvasBg";
import SlideLayout from "../components/SlideLayout";

const tools = [
  {
    icon: Network,
    label: "Tailscale",
    title: "Zero-config VPN",
    desc: "Secure mesh network gives the Mac mini a stable private IP anywhere — no port forwarding, no dynamic DNS. Access from any device on the tailnet.",
    color: "text-blue-400",
    glow: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/20",
    dot: "bg-blue-400",
    tags: ["SSH", "Private IP", "MagicDNS"],
  },
  {
    icon: Terminal,
    label: "Astropad Workbench",
    title: "Headless control",
    desc: "Remote display + input for the Mac mini over the tailnet. Full GUI access without a monitor attached — manage agents, inspect logs, adjust configs.",
    color: "text-violet-400",
    glow: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/20",
    dot: "bg-violet-400",
    tags: ["Remote display", "Headless", "Full control"],
  },
];

export default function FutureSlide() {
  return (
    <div className="relative w-full h-full bg-[#020817] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-25">
        <CanvasBg color={[139, 92, 246]} nodeCount={28} />
      </div>
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 55% 55% at 15% 40%, rgba(59,130,246,0.18) 0%, transparent 65%),
            radial-gradient(ellipse 50% 60% at 85% 60%, rgba(139,92,246,0.18) 0%, transparent 65%)
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
              Headless. Always on. Always yours.
            </motion.span>
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading italic text-white tracking-tight leading-[1]"
            >
              Access from anywhere.
            </motion.h2>
          </>
        }
        footer={
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-xs font-body text-white/40"
          >
            Video demo on the right.{" "}
            <a
              href="https://x.com/mronge/status/2044074913749983444"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              See source here
            </a>
          </motion.p>
        }

      >
        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-4 items-stretch h-full pt-3">
          {/* Left: tool cards */}
          <div className="flex flex-col gap-3 lg:w-[38%] min-h-0">
            {tools.map((t, i) => {
              const Icon = t.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ x: -25, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.35 + i * 0.15 }}
                  className={`liquid-glass rounded-2xl p-3.5 flex-1 flex flex-col border ${t.border} min-h-0`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className={`text-[10px] font-body font-semibold uppercase tracking-[0.2em] ${t.color}`}>
                        {t.label}
                      </span>
                      <p className="text-base font-heading italic text-white mt-0.5">
                        {t.title}
                      </p>
                    </div>
                    <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${t.glow} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-4 h-4 ${t.color}`} />
                    </div>
                  </div>
                  <p className="text-xs font-body font-light text-white/40 leading-relaxed flex-1 overflow-hidden">
                    {t.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right: video — stretches to match left column height */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex-1 liquid-glass rounded-2xl overflow-hidden"
          >
            <video
              src="/paperclip-demo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </SlideLayout>
    </div>
  );
}
