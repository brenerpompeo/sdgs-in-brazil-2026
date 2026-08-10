import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // Instant center dot movement
      if (dotRef.current) {
        gsap.to(dotRef.current, {
          x: clientX,
          y: clientY,
          duration: 0,
        });
      }

      // Smooth trailing ring with spring physics
      if (ringRef.current) {
        gsap.to(ringRef.current, {
          x: clientX,
          y: clientY,
          duration: 0.35,
          ease: 'power2.out',
        });
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.bento-card') ||
        target.closest('.interactive-card') ||
        target.closest('.leader-bento-card') ||
        target.closest('.stat-card') ||
        target.closest('.pillar-card')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Center Static Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
      />

      {/* Trailing Spring Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
          isHovered
            ? 'w-12 h-12 border-[#0D6886] bg-[#0D6886]/15 backdrop-blur-[2px] scale-110 shadow-[0_0_20px_rgba(13,104,134,0.4)]'
            : 'w-8 h-8 border-white/30 bg-transparent scale-100'
        }`}
      />
    </div>
  );
};
