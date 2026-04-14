import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface Props {
  text: string;
  className?: string;
  delay?: number;
}

export default function BlurText({ text, className = "", delay = 100 }: Props) {
  const words = text.split(" ");
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
          animate={
            visible
              ? { filter: "blur(0px)", opacity: 1, y: 0 }
              : { filter: "blur(10px)", opacity: 0, y: 50 }
          }
          transition={{
            duration: 0.7,
            delay: (i * delay) / 1000,
            ease: "easeOut",
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
