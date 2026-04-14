import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  current: number;
  total: number;
  labels: string[];
  onPrev: () => void;
  onNext: () => void;
}

export default function SlideControls({
  current,
  total,
  labels,
  onPrev,
  onNext,
}: Props) {
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-8 lg:px-12 pb-6 flex items-end justify-between">
      {/* Left: counter + label */}
      <div className="flex items-center gap-3">
        <span className="text-white/30 text-xs tracking-[0.2em] uppercase font-body">
          {pad(current + 1)} / {pad(total)}
        </span>
        <div className="w-px h-4 bg-white/15" />
        <div className="overflow-hidden h-4 flex items-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={current}
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-white/40 text-xs font-body tracking-wide"
            >
              {labels[current]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* Right: dots + nav */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === current
                  ? "w-6 bg-white"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
        <div className="w-px h-4 bg-white/15" />
        <button
          onClick={onPrev}
          disabled={current === 0}
          className="w-8 h-8 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 disabled:opacity-20 transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={onNext}
          disabled={current === total - 1}
          className="w-8 h-8 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 disabled:opacity-20 transition-all"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
