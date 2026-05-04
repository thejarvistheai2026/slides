import { motion } from "motion/react";
import { BookOpen, FileText, Upload, Library } from "lucide-react";
import CanvasBg from "../components/CanvasBg";
import SlideLayout from "../components/SlideLayout";

const skills = [
  {
    icon: BookOpen,
    title: "Content-capture",
    color: "text-cyan-400",
    glow: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/20",
    workflow: "drop link into chat, Agent runs workflow:",
    bullets: [
      "Step 1: use defuddle/etc to extract raw content outline (tweets, posts, transcript)",
      "Step 2: create summary (what are the 10 key points I need to know to walk away with full understanding in 5mins?)",
      "Step 3: (optional) extract any diagrams/frameworks/images",
    ],
  },
  {
    icon: FileText,
    title: "Content-create",
    color: "text-violet-400",
    glow: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/20",
    workflow: "ask to draft blog post, Agent runs workflow:",
    bullets: [
      "Use all Obsidian notes, keywords, ideas to propose & draft multiple angles of a blog post",
      "Run through humanizer + voice guide for style",
    ],
  },
  {
    icon: Upload,
    title: "Content-publish",
    color: "text-emerald-400",
    glow: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/20",
    workflow: "ask to publish blog post, Agent runs workflow:",
    bullets: [
      "Automatically create a cover image with Images 2.0, store in Cloudinary, add URL back to Obsidian article",
      "Run through all the other steps to move the post into production on my site",
    ],
  },
];

const librarian = {
  icon: Library,
  title: "The-librarian",
  color: "text-amber-400",
  glow: "from-amber-500/20 to-amber-500/5",
  border: "border-amber-500/20",
  description: "A special skill, the guardian of knowledge in the Obsidian vault — runs once per day to clean, tag, establish backlinks, and condense content.",
};

export default function SkillsSlide() {
  return (
    <div className="relative w-full h-full bg-[#020817] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-25">
        <CanvasBg color={[139, 92, 246]} nodeCount={28} />
      </div>
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 55% 60% at 20% 30%, rgba(34,211,238,0.12) 0%, transparent 65%),
            radial-gradient(ellipse 50% 55% at 80% 70%, rgba(139,92,246,0.12) 0%, transparent 65%)
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
              className="block text-white/30 font-body text-[14px] tracking-[0.3em] uppercase mb-2 md:mb-3"
            >
              Content Workflow
            </motion.span>
            <motion.h2
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-3xl lg:text-5xl font-heading italic text-white tracking-tight leading-[0.9]"
            >
              Skills
            </motion.h2>
          </>
        }
      >
        <div className="h-full flex flex-col justify-center gap-4 md:gap-6">
          {/* Top row - 3 cards */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-5">
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className={`liquid-glass rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-5 flex flex-col gap-2 md:gap-3 border ${skill.border}`}
                >
                  {/* Icon and Title */}
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className={`w-8 h-8 md:w-9 md:h-9 rounded-xl bg-gradient-to-br ${skill.glow} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-4 h-4 md:w-5 md:h-5 ${skill.color}`} />
                    </div>
                    <h3 className="text-sm md:text-base lg:text-lg font-heading italic text-white leading-tight">
                      {skill.title}
                    </h3>
                  </div>

                  {/* Workflow label */}
                  <p className={`text-[11px] md:text-[12px] font-body font-medium uppercase tracking-[0.15em] ${skill.color} opacity-80`}>
                    {skill.workflow}
                  </p>

                  {/* Bullets */}
                  <div className="space-y-1.5 md:space-y-2 mt-1">
                    {skill.bullets.map((bullet, bi) => (
                      <div key={bi} className="flex items-start gap-2">
                        <div className={`w-1 h-1 rounded-full mt-1.5 flex-shrink-0 ${skill.color} opacity-60`} />
                        <p className="text-[11px] md:text-[13px] lg:text-[14px] font-body text-white/45 leading-relaxed">
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom row - Librarian card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className={`liquid-glass rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-5 border ${librarian.border} max-w-2xl mx-auto w-full`}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              {/* Icon and Title */}
              <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
                <div className={`w-8 h-8 md:w-9 md:h-9 rounded-xl bg-gradient-to-br ${librarian.glow} flex items-center justify-center`}>
                  <Library className={`w-4 h-4 md:w-5 md:h-5 ${librarian.color}`} />
                </div>
                <h3 className="text-sm md:text-base lg:text-lg font-heading italic text-white">
                  {librarian.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-[11px] md:text-[13px] font-body text-white/50 italic leading-relaxed">
                {librarian.description}
              </p>
            </div>
          </motion.div>
        </div>
      </SlideLayout>
    </div>
  );
}
