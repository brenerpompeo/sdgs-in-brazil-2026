import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Refresh GSAP ScrollTrigger on mount for instant smooth native scrolling
    ScrollTrigger.refresh();
  }, []);

  return <>{children}</>;
};
