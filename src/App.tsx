import React, { useState } from 'react';
import { SmoothScroll } from './components/SmoothScroll';
import { CustomCursor } from './components/CustomCursor';
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
import { RsvpModal } from './components/RsvpModal';
import { SessionModal } from './components/SessionModal';
import { SessionItem } from './data/scheduleData';

export function App() {
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [activeSession, setActiveSession] = useState<SessionItem | null>(null);
  const [loading, setLoading] = useState(true);

  return (
    <SmoothScroll>
      <CustomCursor />
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <div className="bg-[#05070f] text-white min-h-screen">
        <Header onOpenRsvp={() => setRsvpOpen(true)} />
        <Hero onOpenRsvp={() => setRsvpOpen(true)} />
        <About />
        <Gallery2025 />
        <Schedule onSelectSession={setActiveSession} />
        <Speakers />
        <PastLeaders />
        <Sponsors />
        <Venue />
        <CtaBanner onOpenRsvp={() => setRsvpOpen(true)} />
        <Footer />
        <RsvpModal isOpen={rsvpOpen} onClose={() => setRsvpOpen(false)} />
        <SessionModal session={activeSession} onClose={() => setActiveSession(null)} />
      </div>
    </SmoothScroll>
  );
}
