'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  
  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100 });
  const mouseRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable on desktop with fine pointer and no reduced motion
    if (
      !window.matchMedia('(pointer: fine)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Check hover targets
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [data-cursor-hover]');
      const textElement = target.closest('[data-cursor-text]') as HTMLElement | null;

      setIsHovered(!!interactive);
      setCursorText(textElement?.dataset?.cursorText || '');
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    let animationFrameId: number;
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const render = () => {
      posRef.current.x = lerp(posRef.current.x, mouseRef.current.x, 0.2);
      posRef.current.y = lerp(posRef.current.y, mouseRef.current.y, 0.2);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-300"
      style={{ willChange: 'transform' }}
    >
      <motion.div
        animate={{
          width: cursorText ? 64 : isHovered ? 40 : 10,
          height: cursorText ? 64 : isHovered ? 40 : 10,
          backgroundColor: cursorText ? 'rgba(34, 211, 238, 0.95)' : isHovered ? 'rgba(34, 211, 238, 0.35)' : 'rgba(255, 255, 255, 0.9)',
          borderColor: isHovered ? 'rgba(34, 211, 238, 0.8)' : 'transparent',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350, mass: 0.5 }}
        className="rounded-full flex items-center justify-center border shadow-[0_0_15px_rgba(34,211,238,0.2)] backdrop-blur-[1px]"
      >
        {cursorText && (
          <span className="text-[10px] font-mono tracking-wider uppercase font-semibold text-neutral-950 select-none">
            {cursorText}
          </span>
        )}
      </motion.div>
    </div>
  );
}
