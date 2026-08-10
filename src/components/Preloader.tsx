import React, { useEffect } from 'react';
import { gsap } from 'gsap';

interface Props {
  onComplete: () => void;
}

export const Preloader: React.FC<Props> = ({ onComplete }) => {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    // 1. Initial logo & KV entrance
    tl.fromTo('.splash-logo', 
      { scale: 0.85, opacity: 0, y: 15 },
      { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )
    .fromTo('.splash-date', 
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4'
    )
    .fromTo('.splash-progress', 
      { scaleX: 0 },
      { scaleX: 1, duration: 1.0, ease: 'power2.inOut' }, '-=0.2'
    )
    
    // 2. Fade out content & curtain split exit
    .to('.splash-content', {
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      ease: 'power2.inOut',
      delay: 0.3,
    })
    .to('.splash-curtain-top', {
      yPercent: -100,
      duration: 0.8,
      ease: 'power4.inOut',
    }, '-=0.1')
    .to('.splash-curtain-bottom', {
      yPercent: 100,
      duration: 0.8,
      ease: 'power4.inOut',
    }, '<');

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[10000] pointer-events-none flex flex-col overflow-hidden">
      {/* Top Curtain */}
      <div className="splash-curtain-top flex-1 bg-[#05070f] relative flex items-end justify-center pb-2">
        {/* Line field background grid overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.2] mix-blend-screen pointer-events-none"
          style={{ backgroundImage: "url('./assets/line-field.png')" }}
        />
        {/* Top ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#0D6886]/15 blur-[120px] rounded-full pointer-events-none" />
      </div>

      {/* Center Fixed Content Container */}
      <div className="splash-content absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
        {/* Brand Subtitle */}
        <span className="text-[10px] font-mono font-bold tracking-[0.35em] uppercase text-[#0D6886] mb-6">
          Pacto Global da ONU · Rede Brasil
        </span>

        {/* Main Official Logo */}
        <div className="splash-logo mb-6 max-w-[280px] sm:max-w-[360px] w-full">
          <img
            src="./assets/logo.png"
            alt="SDGs in Brazil 2026 Logo"
            className="w-full h-auto object-contain drop-shadow-[0_12px_40px_rgba(13,104,134,0.5)]"
          />
        </div>

        {/* Official Date Badge (data_horizontal) */}
        <div className="splash-date max-w-[240px] sm:max-w-[320px] w-full mb-8">
          <img
            src="./assets/data_horizontal.png"
            alt="18 de Setembro de 2026 · Sede da ONU NY"
            className="w-full h-auto object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
          />
        </div>

        {/* Progress Bar Container */}
        <div className="w-48 sm:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
          <div className="splash-progress w-full h-full bg-gradient-to-r from-[#0D6886] via-white to-[#5F3469] origin-left" />
        </div>
      </div>

      {/* Bottom Curtain */}
      <div className="splash-curtain-bottom flex-1 bg-[#05070f] relative flex items-start justify-center pt-2">
        {/* Line field background grid overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.2] mix-blend-screen pointer-events-none"
          style={{ backgroundImage: "url('./assets/line-field.png')" }}
        />
        {/* Bottom ambient glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#5F3469]/15 blur-[120px] rounded-full pointer-events-none" />
      </div>
    </div>
  );
};
