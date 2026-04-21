import { motion } from "motion/react";
import CanvasBg from "../components/CanvasBg";
import SlideLayout from "../components/SlideLayout";

const categories = [
  {
    label: "Hardware",
    accent: "text-blue-400",
    dot: "bg-blue-400",
    divider: "bg-blue-500/30",
    items: ["Mac mini (one or more)"],
  },
  {
    label: "Settings",
    accent: "text-cyan-400",
    dot: "bg-cyan-400",
    divider: "bg-cyan-500/30",
    items: ["Modify sleep / wake settings", "Fast User Switching", "Full Disk Access"],
  },
  {
    label: "Dev Accounts",
    accent: "text-indigo-400",
    dot: "bg-indigo-400",
    divider: "bg-indigo-500/30",
    items: ["Discord"],
  },
  {
    label: "Open Source Tools & Skills",
    accent: "text-orange-400",
    dot: "bg-orange-400",
    divider: "bg-orange-500/30",
    items: ["QMD", "Defuddle"],
  },
  {
    label: "Infra",
    accent: "text-emerald-400",
    dot: "bg-emerald-400",
    divider: "bg-emerald-500/30",
    items: ["Supabase & Vercel — Next.js + Tailwind + shadcn", "Gadget", "DigitalOcean", "projects.dev"],
  },
  {
    label: "CLI",
    accent: "text-rose-400",
    dot: "bg-rose-400",
    divider: "bg-rose-500/30",
    items: ["Vercel", "Supabase", "Google (gws)", "Obsidian", "shadcn"],
  },
  {
    label: "Models",
    accent: "text-amber-400",
    dot: "bg-amber-400",
    divider: "bg-amber-500/30",
    items: ["Ollama ($20/mth)", "OpenRouter (pay-per-use)", "OpenAI Dev (pay-per-use)", "Anthropic Dev (pay-per-use)"],
  },
  {
    label: "Apps",
    accent: "text-violet-400",
    dot: "bg-violet-400",
    divider: "bg-violet-500/30",
    items: [
      "Tailscale or Astropad Workbench (SSH into Mac mini)",
      "Hyper",
      "Claude Desktop + Claude Code",
      "Cursor",
      "Obsidian (+ Sync $5/mth)",
      "Discord / WhatsApp / Telegram",
      "Superwhisper (voice-to-text)",
    ],
  },
];

export default function MustHavesSlide() {
  return (
    <div className="relative w-full h-full bg-[#020817] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-25">
        <CanvasBg color={[52, 211, 153]} nodeCount={28} />
      </div>
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 55% 60% at 15% 40%, rgba(52,211,153,0.12) 0%, transparent 65%),
            radial-gradient(ellipse 50% 55% at 85% 60%, rgba(139,92,246,0.12) 0%, transparent 65%)
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
              Setup
            </motion.span>
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading italic text-white tracking-tight leading-[0.9]"
            >
              The must-haves.
            </motion.h2>
          </>
        }
      >
        <div className="h-full flex flex-col justify-center pt-16">
          <div className="grid grid-cols-4 gap-x-6 gap-y-5 items-start">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.25 + i * 0.06 }}
                className="flex flex-col gap-2"
              >
                {/* Category header */}
                <div className="flex items-center gap-2 pb-1">
                  <div className={`h-3.5 w-0.5 rounded-full ${cat.divider}`} />
                  <span className={`text-[14px] font-body font-semibold uppercase tracking-[0.2em] ${cat.accent}`}>
                    {cat.label}
                  </span>
                </div>

                {/* Items */}
                <div className="liquid-glass rounded-xl p-3 flex flex-col gap-1.5">
                  {cat.items.map((item, ii) => (
                    <div key={ii} className="flex items-start gap-2">
                      <div className={`w-1 h-1 rounded-full mt-[5px] flex-shrink-0 opacity-40 ${cat.dot}`} />
                      <span className="text-[15px] font-body text-white/50 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SlideLayout>
    </div>
  );
}
