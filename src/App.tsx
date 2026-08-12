import React, { useState } from 'react';
import { SmoothScroll } from './components/SmoothScroll';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gallery2025 } from './components/Gallery2025';
import { Schedule } from './components/Schedule';
import { Speakers } from './components/Speakers';
import { PastLeaders } from './components/PastLeaders';
import { Sponsors } from './components/Sponsors';
import { Venue } from './components/Venue';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { SessionModal } from './components/SessionModal';
import { SessionItem } from './data/scheduleData';

export function App() {
  const [activeSession, setActiveSession] = useState<SessionItem | null>(null);
  const [loading, setLoading] = useState(true);

  return (
    <SmoothScroll>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <div className="bg-black text-white min-h-screen">
        <Header />
        <Hero />
        <About />
        <Gallery2025 />
        <Schedule onSelectSession={setActiveSession} />
        <Speakers />
        <PastLeaders />
        <Venue />
        <Sponsors />
        <CtaBanner />
        <Footer />
        <SessionModal session={activeSession} onClose={() => setActiveSession(null)} />
      </div>
    </SmoothScroll>
  );
}
