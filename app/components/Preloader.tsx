'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsFinished(true);
      onComplete?.();
      return;
    }

    const duration = 1600; // ~1.6s
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out curve for natural deceleration towards 100
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(eased * 100);
      
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(100);
        setTimeout(() => {
          setIsFinished(true);
          onComplete?.();
        }, 300);
      }
    };

    const frameId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(frameId);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const }
          }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-black text-white p-8 md:p-14 select-none pointer-events-auto"
        >
          {/* Top Brand / Coordinates */}
          <div className="flex justify-between items-center text-xs tracking-widest uppercase font-mono text-neutral-500">
            <span>SQ — AI &amp; MLOps</span>
            <span>Pune, IN</span>
          </div>

          {/* Center Counter */}
          <div className="flex items-baseline justify-center">
            <span className="font-mono text-7xl md:text-9xl font-bold tracking-tighter">
              {count.toString().padStart(2, '0')}
            </span>
            <span className="font-mono text-2xl md:text-3xl text-neutral-500 ml-2">%</span>
          </div>

          {/* Bottom Progress Bar & Status */}
          <div className="w-full max-w-md mx-auto flex flex-col gap-2">
            <div className="w-full h-[1px] bg-neutral-900 overflow-hidden relative">
              <motion.div
                className="h-full bg-cyan-400"
                style={{ width: `${count}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono tracking-widest uppercase text-neutral-500">
              <span>Initializing workspace</span>
              <span>{count < 100 ? 'Loading assets' : 'Ready'}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
