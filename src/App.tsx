import { useState, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import SlideControls from "./components/SlideControls";
import MobileOverlay from "./components/MobileOverlay";
import TitleSlide from "./slides/TitleSlide";
import TimelineSlideV2 from "./slides/TimelineSlideV2";
import GlossarySlide from "./slides/GlossarySlide";
import ClaudeVsOpenSourceSlide from "./slides/ClaudeVsOpenSourceSlide";
import FutureSlide from "./slides/FutureSlide";
import ComponentsSlide from "./slides/ComponentsSlide";
import SingleAgentSlide from "./slides/SingleAgentSlide";
import MultiProfileSlide from "./slides/MultiProfileSlide";
import PaperclipSlide from "./slides/PaperclipSlide";
import MacMiniSlide from "./slides/MacMiniSlide";
import PrinciplesSlide from "./slides/PrinciplesSlide";
import MindsetSlide from "./slides/MindsetSlide";
import JarvisSlide from "./slides/JarvisSlide";
import MustHavesSlide from "./slides/MustHavesSlide";

const SLIDES = [
  { component: TitleSlide, label: "Introduction" },
  { component: GlossarySlide, label: "Glossary" },
  { component: TimelineSlideV2, label: "The Journey" },
  { component: ClaudeVsOpenSourceSlide, label: "Claude vs Open Source" },
  { component: ComponentsSlide, label: "The Stack" },
  { component: SingleAgentSlide, label: "Single Agent" },
  { component: MultiProfileSlide, label: "Multi-Profile" },
  { component: PaperclipSlide, label: "Paperclip" },
  { component: MacMiniSlide, label: "Mac mini Setup" },
  { component: FutureSlide, label: "Remote Access" },
  { component: PrinciplesSlide, label: "Principles" },
  { component: MindsetSlide, label: "Mindset Shift" },
  { component: JarvisSlide, label: "Meet Jarvis" },
  { component: MustHavesSlide, label: "Must-Haves" },
];

const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.95,
  }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir: number) => ({
    x: dir > 0 ? "-30%" : "30%",
    opacity: 0,
    scale: 0.95,
  }),
};

export default function App() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const lock = useRef(false);
  const touchStart = useRef<number | null>(null);

  const navigate = useCallback(
    (delta: number) => {
      if (lock.current) return;
      const next = index + delta;
      if (next < 0 || next >= SLIDES.length) return;
      lock.current = true;
      setDir(delta);
      setIndex(next);
      setTimeout(() => {
        lock.current = false;
      }, 800);
    },
    [index]
  );

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        if (Math.abs(e.deltaX) < 30) return;
        navigate(e.deltaX > 0 ? 1 : -1);
      } else {
        if (Math.abs(e.deltaY) < 30) return;
        navigate(e.deltaY > 0 ? 1 : -1);
      }
    },
    [navigate]
  );

  const handleKey = useCallback(
    (e: React.KeyboardEvent) => {
      if (
        e.key === "ArrowRight" ||
        e.key === "ArrowDown" ||
        e.key === " "
      ) {
        e.preventDefault();
        navigate(1);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        navigate(-1);
      }
    },
    [navigate]
  );

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStart.current === null) return;
      const dx = touchStart.current - e.changedTouches[0].clientX;
      if (Math.abs(dx) > 60) navigate(dx > 0 ? 1 : -1);
      touchStart.current = null;
    },
    [navigate]
  );

  const CurrentSlide = SLIDES[index].component;

  return (
    <div
      className="w-screen h-screen overflow-hidden relative outline-none"
      tabIndex={0}
      onWheel={handleWheel}
      onKeyDown={handleKey}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence custom={dir} mode="wait">
        <motion.div
          key={index}
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <CurrentSlide />
        </motion.div>
      </AnimatePresence>

      <SlideControls
        current={index}
        total={SLIDES.length}
        labels={SLIDES.map((s) => s.label)}
        onPrev={() => navigate(-1)}
        onNext={() => navigate(1)}
      />

      <MobileOverlay />
    </div>
  );
}
