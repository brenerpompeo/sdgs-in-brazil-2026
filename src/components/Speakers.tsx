import React, { useState } from 'react';
import { SPEAKERS_DATA, Speaker } from '../data/speakersData';
import { Building, Sparkles, X } from 'lucide-react';

interface SpeakersProps {
  onSelectSpeaker?: (speaker: Speaker) => void;
}

export const Speakers: React.FC<SpeakersProps> = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = ['todos', 'Keynote', 'Painelista', 'Liderança Institucional'];

  const filteredSpeakers = SPEAKERS_DATA.filter(sp => {
    if (activeCategory === 'todos') return true;
    return sp.category === activeCategory;
  });

  return (
    <section id="palestrantes" className="py-24 relative z-10 border-t border-slate-800/80 bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Autoridades & Lideranças Globais</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Palestrantes em Destaque
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-900 border border-slate-800">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold capitalize transition-colors ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpeakers.map(speaker => (
            <div
              key={speaker.id}
              onClick={() => setSelectedSpeaker(speaker)}
              className="glass-panel p-6 rounded-3xl border border-slate-800/90 glass-panel-hover flex flex-col justify-between cursor-pointer group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 via-blue-500 to-emerald-400 flex items-center justify-center text-white font-extrabold text-2xl shadow-xl shadow-blue-950/50 group-hover:scale-105 transition-transform">
                    {speaker.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-900 border border-slate-800 text-blue-400 mb-1">
                      {speaker.category}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors truncate">
                      {speaker.name}
                    </h3>
                    <p className="text-xs text-slate-400 truncate">{speaker.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-4 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                  <Building className="w-4 h-4 shrink-0" />
                  <span className="truncate">{speaker.company}</span>
                </div>

                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed font-light mb-4">
                  {speaker.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-blue-400 font-semibold group-hover:underline">
                <span>Ver biografia completa</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {selectedSpeaker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#0A1628] border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-100">
            
            <button
              onClick={() => setSelectedSpeaker(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-400 flex items-center justify-center text-white font-black text-2xl shadow-xl">
                {selectedSpeaker.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
              </div>

              <div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-blue-950 text-blue-400 border border-blue-800">
                  {selectedSpeaker.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">{selectedSpeaker.name}</h3>
                <p className="text-xs text-slate-400">{selectedSpeaker.role}</p>
                <p className="text-xs text-emerald-400 font-semibold">{selectedSpeaker.company}</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Biografia & Trajetória</h4>
              <p className="text-sm text-slate-300 leading-relaxed font-light bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                {selectedSpeaker.bio}
              </p>
            </div>

            <button
              onClick={() => setSelectedSpeaker(null)}
              className="w-full py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-semibold text-sm hover:bg-slate-800"
            >
              Fechar
            </button>

          </div>
        </div>
      )}

    </section>
  );
};
