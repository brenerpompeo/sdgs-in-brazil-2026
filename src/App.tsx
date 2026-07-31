import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MetricStats } from './components/MetricStats';
import { GlobalForces } from './components/GlobalForces';
import { FourPillars } from './components/FourPillars';
import { Schedule } from './components/Schedule';
import { Speakers } from './components/Speakers';
import { VenueLocation } from './components/VenueLocation';
import { AboutPacto } from './components/AboutPacto';
import { Footer } from './components/Footer';
import { RsvpModal } from './components/RsvpModal';
import { SessionModal } from './components/SessionModal';
import { SessionItem } from './data/scheduleData';

export function App() {
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const [selectedSession, setSelectedSession] = useState<SessionItem | null>(null);

  return (
    <div className="min-h-screen bg-[#050B14] text-slate-100 selection:bg-blue-600 selection:text-white font-sans antialiased relative">
      
      {/* Header Fixo */}
      <Header onOpenRsvp={() => setIsRsvpOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenRsvp={() => setIsRsvpOpen(true)} />
        <MetricStats />
        <GlobalForces />
        <FourPillars />
        <Schedule onSelectSession={(session) => setSelectedSession(session)} />
        <Speakers />
        <VenueLocation />
        <AboutPacto />
      </main>

      {/* Footer */}
      <Footer />

      {/* RSVP Modal */}
      <RsvpModal 
        isOpen={isRsvpOpen} 
        onClose={() => setIsRsvpOpen(false)} 
      />

      {/* Session Details Modal */}
      <SessionModal 
        session={selectedSession} 
        onClose={() => setSelectedSession(null)} 
      />

    </div>
  );
}

export default App;
