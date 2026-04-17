import { motion } from "motion/react";
import CanvasBg from "../components/CanvasBg";
import SlideLayout from "../components/SlideLayout";

// ── Data — 5 milestones (OpenClaw + Mac mini consolidated) ───────────────────

const milestones: Milestone[] = [
  {
    num: "01",
    date: "Jan 2025",
    title: "Cursor + Supabase + Expo",
    bullets: [
      "Full-stack web with Cursor + Supabase + Vercel",
      "Mobile via Expo + Testflight",
    ],
    color: "rgba(99,179,237,0.85)",
    dot: "bg-blue-400",
    border: "border-blue-500/20",
    visual: "mode" as const,
    link: "https://francovarriano.com/projects/mode-ios-app",
  },
  {
    num: "02",
    date: "May 2025",
    title: "Gadget Adoption",
    bullets: [
      "Full-stack apps and internal tools",
      "Middleware and integrations",
      "Production-grade infra via Gadget",
    ],
    color: "rgba(52,211,153,0.85)",
    dot: "bg-emerald-400",
    border: "border-emerald-500/20",
    visual: "burst" as const,
    link: "https://francovarriano.com/projects/burst-app",
  },
  {
    num: "03",
    date: "Jan 2026",
    title: "GTM Automation",
    bullets: [
      "Prospecting, outreach, and enrichment",
      "Snitcher → Clay → Gadget → HubSpot → Instantly",
    ],
    color: "rgba(251,191,36,0.85)",
    dot: "bg-amber-400",
    border: "border-amber-500/20",
    visual: "pipeline" as const,
  },
  {
    num: "04",
    date: "Jan – Mar 2026",
    title: "OpenClaw + Mac mini",
    bullets: [
      "First open-source agent harness experiments",
      "Dedicated M4 hardware for local AI workflows",
    ],
    color: "rgba(167,139,250,0.85)",
    dot: "bg-violet-400",
    border: "border-violet-500/20",
    visual: "openclaw" as const,
  },
  {
    num: "05",
    date: "Apr 2026",
    title: "Systems Orchestration",
    bullets: [
      "Custom skills and skill chaining",
      "Multiple agents running in parallel",
      "Paperclip orchestration",
    ],
    color: "rgba(248,113,113,0.85)",
    dot: "bg-rose-400",
    border: "border-rose-500/20",
    visual: "systems" as const,
  },
];

type VisualType = "mode" | "burst" | "pipeline" | "openclaw" | "systems" | null;

interface Milestone {
  num: string;
  date: string;
  title: string;
  desc?: string;
  bullets?: string[];
  color: string;
  dot: string;
  border: string;
  visual: VisualType;
  link?: string;
}

// ── Visual slot ───────────────────────────────────────────────────────────────

function VisualSlot({ type, num }: { type: VisualType; num: string }) {
  if (type === "mode") {
    return (
      <div className="w-full h-full overflow-hidden">
        <img
          src="/mode-app-banner.png"
          alt="Mode"
          className="w-full h-full object-cover object-center"
        />
      </div>
    );
  }
  if (type === "burst") {
    return (
      <div className="w-full h-full overflow-hidden">
        <img
          src="/burst-app-banner.png"
          alt="Burst"
          className="w-full h-full object-cover object-center"
        />
      </div>
    );
  }
  if (type === "pipeline") {
    return (
      <div className="w-full h-full overflow-hidden">
        <img
          src="/gtm-pipeline-banner.png"
          alt="GTM pipeline"
          className="w-full h-full object-cover object-center scale-[1.4] translate-y-[5%]"
        />
      </div>
    );
  }
  if (type === "openclaw") {
    return (
      <div className="w-full h-full overflow-hidden">
        <img
          src="/openclaw-macmini-banner.png"
          alt="OpenClaw Mac mini"
          className="w-full h-full object-cover object-center"
        />
      </div>
    );
  }
  if (type === "systems") {
    return (
      <div className="w-full h-full overflow-hidden">
        <img
          src="/systems-orchestration-banner.png"
          alt="Systems Orchestration"
          className="w-full h-full object-cover object-center"
        />
      </div>
    );
  }

  // No visual — ghost step number
  return (
    <div className="flex items-center justify-center h-full">
      <span className="text-white/6 font-heading italic text-5xl select-none">{num}</span>
    </div>
  );
}

// ── Slide ─────────────────────────────────────────────────────────────────────

export default function TimelineSlideV2() {
  return (
    <div className="relative w-full h-full bg-[#020817] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-25">
        <CanvasBg color={[52, 211, 153]} nodeCount={30} />
      </div>
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 60% at 10% 30%, rgba(16,185,129,0.18) 0%, transparent 70%),
            radial-gradient(ellipse 50% 50% at 90% 80%, rgba(59,130,246,0.15) 0%, transparent 65%)
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
              The Journey
            </motion.span>
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading italic text-white tracking-tight leading-[0.9]"
            >
              18 months of building with AI.
            </motion.h2>
          </>
        }
      >
        {/* Visual → Timeline → Cards — vertically centered in remaining space */}
        <div className="flex-1 flex flex-col justify-start gap-0 pt-16">

        <motion.div
          initial={{ x: -15, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-4 flex flex-col gap-1"
        >
          <p className="text-sm font-body font-light text-white/40">As a non-technical vibe coder:</p>
          <ul className="flex flex-col gap-0.5">
            {[
              "Full-stack web and mobile apps with a variety of technologies",
              "GTM, sales and internal dashboards with Gadget",
              "Personal agent configuration with a variety of skills powering workflows",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm font-body font-light text-white/40">
                <span className="mt-[5px] w-1 h-1 rounded-full bg-white/25 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Visual row */}
        <div className="grid grid-cols-5 gap-3 lg:gap-4">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
              className={`h-32 lg:h-36 liquid-glass rounded-2xl border ${m.border} overflow-hidden`}
            >
              <VisualSlot type={m.visual} num={m.num} />
            </motion.div>
          ))}
        </div>

        {/* Timeline axis */}
        <div className="relative grid grid-cols-5 gap-3 lg:gap-4 my-3">
          {/* Horizontal line */}
          <div className="absolute left-0 right-0 top-[11px] h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.45 + i * 0.08 }}
              className="relative flex flex-col items-center gap-2 z-10"
            >
              <div className={`w-[9px] h-[9px] rounded-full flex-shrink-0 ${m.dot} ring-[3px] ring-[#020817]`} />
              <span
                className="text-[8px] lg:text-[9px] font-body font-semibold uppercase tracking-[0.14em] text-center leading-tight"
                style={{ color: m.color }}
              >
                {m.date}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Card row */}
        <div className="grid grid-cols-5 gap-3 lg:gap-4">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 + i * 0.08 }}
              className={`liquid-glass rounded-2xl border ${m.border} p-3 lg:p-4 flex flex-col gap-1.5`}
            >
              <p className="text-sm font-heading italic text-white leading-tight">{m.title}</p>
              {m.bullets ? (
                <ul className="flex flex-col gap-0.5">
                  {m.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-1.5 text-[10px] font-body font-light text-white/40 leading-relaxed">
                      <span className="mt-[5px] w-1 h-1 rounded-full bg-white/25 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-[10px] font-body font-light text-white/40 leading-relaxed">{m.desc}</p>
              )}
              {m.link && (
                <a
                  href={m.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-body text-white/30 hover:text-white/70 transition-colors mt-0.5 flex items-center gap-1 w-fit"
                >
                  Learn more here
                  <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 flex-shrink-0">
                    <path d="M2 10 L10 2 M5 2 L10 2 L10 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </a>
              )}
            </motion.div>
          ))}
        </div>

        </div>{/* end centered wrapper */}
      </SlideLayout>
    </div>
  );
}
