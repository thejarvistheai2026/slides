import { motion } from "motion/react";
import { Mic, FileText, Search, BookMarked, Newspaper, Library, Hash } from "lucide-react";
import CanvasBg from "../components/CanvasBg";
import SlideLayout from "../components/SlideLayout";

const skills = [
  {
    icon: Mic,
    label: "Voice → iMessage",
    desc: "Superflow voice-to-text into iMessage. Reminders, draft emails, calendar invites, ad-hoc tasks — hands-free.",
    color: "text-blue-400",
  },
  {
    icon: FileText,
    label: "Content Creation",
    desc: "Draft blog posts in my style → save to Obsidian → commit to GitHub → auto-deploy to DigitalOcean.",
    color: "text-violet-400",
  },
  {
    icon: Search,
    label: "SEO / GEO Audit",
    desc: "Runs automatically on a schedule, surfaces issues, and builds a prioritized fix queue.",
    color: "text-cyan-400",
  },
  {
    icon: BookMarked,
    label: "Content Capture",
    desc: "Captures and tags content from across the web into structured Obsidian notes.",
    color: "text-emerald-400",
  },
  {
    icon: Newspaper,
    label: "Newsletter Curation",
    desc: "Aggregates, summarizes, and formats weekly reading into a ready-to-send newsletter.",
    color: "text-amber-400",
  },
  {
    icon: Library,
    label: "The Librarian",
    desc: "Indexes and retrieves knowledge across all vaults — surfaces the right note at the right time.",
    color: "text-rose-400",
  },
];

export default function JarvisSlide() {
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
              className="block text-white/30 font-body text-[14px] tracking-[0.3em] uppercase mb-4"
            >
              In Practice
            </motion.span>
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading italic text-white tracking-tight leading-[0.9] mb-6 xl:mb-8"
            >
              Meet Jarvis.
            </motion.h2>
          </>
        }
      >
        <div className="h-full flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16 xl:gap-24 2xl:gap-32 -mt-5 xl:-mt-8">

            {/* ── Left: description ── */}
            <div className="flex-1 max-w-xl xl:max-w-2xl">
              <motion.p
                initial={{ x: -15, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="text-white/40 font-body text-base md:text-lg xl:text-xl leading-relaxed mb-8 xl:mb-10"
              >
                My main OpenClaw agent. Jarvis runs as a persistent harness, reachable via iMessage and Discord, with a growing library of skills that automate the workflows I do most.
              </motion.p>

              <motion.div
                initial={{ x: -15, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="grid grid-cols-2 gap-x-6 xl:gap-x-10 gap-y-4 xl:gap-y-6"
              >
                {skills.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <div key={i} className="flex items-start gap-2.5 xl:gap-3">
                      <Icon className={`w-3.5 h-3.5 xl:w-4 xl:h-4 flex-shrink-0 mt-0.5 ${s.color}`} />
                      <div>
                        <p className={`text-[15px] xl:text-base font-body font-semibold ${s.color}`}>{s.label}</p>
                        <p className="text-[15px] xl:text-base font-body text-white/40 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* ── Right: images ── */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="w-full lg:w-[400px] xl:w-[480px] flex-shrink-0 flex flex-col items-center gap-6 xl:gap-8 lg:ml-20"
            >
              {/* Jarvis — circle masked with glow */}
              <div
                className="w-56 h-56 lg:w-64 lg:h-64 xl:w-80 xl:h-80 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-blue-500/20"
                style={{
                  boxShadow: "0 0 60px rgba(59,130,246,0.25), 0 0 120px rgba(139,92,246,0.15)",
                }}
              >
                <img
                  src="/jarvis.png"
                  alt="Jarvis"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Discord — The Lab server + sub-channels */}
              <div className="w-full flex flex-col">
                <div className="liquid-glass rounded-2xl p-4 lg:p-5 flex flex-col gap-3 border border-indigo-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <img src="/the-lab.png" alt="The Lab" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-lg font-body font-semibold text-white leading-tight">The Lab</p>
                      <p className="text-[15px] font-body text-indigo-400/70">Discord server</p>
                    </div>
                  </div>
                  <p className="text-base font-body text-white/40 leading-relaxed">
                    Shared server for multi-user access to Jarvis — start tasks, check outputs, collaborate.
                  </p>
                </div>

                {/* Connector */}
                <div className="relative h-5">
                  <div className="absolute top-0 bg-white/15" style={{ left: "calc(50% - 0.5px)", width: "1px", height: "50%" }} />
                  <div className="absolute bg-white/15" style={{ left: "17%", right: "17%", top: "50%", height: "1px" }} />
                  <div className="absolute bg-white/15" style={{ left: "calc(17% - 0.5px)", top: "50%", bottom: 0, width: "1px" }} />
                  <div className="absolute bg-white/15" style={{ left: "calc(50% - 0.5px)", top: "50%", bottom: 0, width: "1px" }} />
                  <div className="absolute bg-white/15" style={{ left: "calc(83% - 0.5px)", top: "50%", bottom: 0, width: "1px" }} />
                </div>

                {/* Sub-channel chips */}
                <div className="grid grid-cols-3 gap-1.5">
                  {["general", "content", "seo"].map((ch) => (
                    <div key={ch} className="liquid-glass rounded-xl py-2 px-2 flex items-center justify-center gap-1">
                      <Hash className="w-3 h-3 text-indigo-400/50 flex-shrink-0" />
                      <span className="text-[14px] font-body font-medium text-white/35 truncate">{ch}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </SlideLayout>
    </div>
  );
}
