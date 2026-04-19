import { useState, useEffect } from "react";
import { Monitor, Smartphone, RotateCcw } from "lucide-react";

export default function MobileOverlay() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || (window.innerWidth < 1024 && window.innerHeight > window.innerWidth);

      const landscape = window.innerWidth > window.innerHeight;
      setIsLandscape(landscape);
      setIsVisible(isMobileDevice && !landscape);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("orientationchange", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("orientationchange", checkMobile);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#020817] flex flex-col items-center justify-center p-8 text-center">
      <div className="max-w-sm">
        <div className="flex items-center justify-center gap-4 mb-8">
          <Monitor className="w-8 h-8 text-blue-400" />
          <span className="text-white/30 text-sm">or</span>
          <div className="relative">
            <Smartphone className="w-8 h-8 text-violet-400" />
            <RotateCcw className="w-4 h-4 text-white/50 absolute -right-1 -bottom-1" />
          </div>
        </div>

        <h2 className="text-2xl font-heading italic text-white mb-4">
          Best viewed on desktop
        </h2>

        <p className="text-white/60 font-body text-sm leading-relaxed mb-6">
          These slides are optimized for larger screens. For the best experience,
          please view on a desktop or laptop computer.
        </p>

        <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6">
          <p className="text-white/80 font-body text-sm">
            Alternatively, rotate your device to
            <span className="text-blue-400 font-medium"> landscape mode </span>
            to continue viewing.
          </p>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="text-white/40 text-xs hover:text-white/60 transition-colors underline underline-offset-2"
        >
          Continue anyway
        </button>
      </div>
    </div>
  );
}
