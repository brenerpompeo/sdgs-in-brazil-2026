import React, { useState } from 'react';
import { SCHEDULE_DATA, SessionItem } from '../data/scheduleData';
import { Clock, Filter, Sparkles, Download, Search } from 'lucide-react';
import { downloadICS } from '../utils/icsGenerator';

interface ScheduleProps {
  onSelectSession: (session: SessionItem) => void;
}

export const Schedule: React.FC<ScheduleProps> = ({ onSelectSession }) => {
  const [activePeriod, setActivePeriod] = useState<'todos' | 'manhã' | 'tarde' | 'noite'>('todos');
  const [selectedOds, setSelectedOds] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const odsList = [5, 6, 8, 10, 12, 13, 16, 17, 18];

  const filteredSessions = SCHEDULE_DATA.filter(session => {
    const matchesPeriod = activePeriod === 'todos' || session.period === activePeriod;
    const matchesOds = selectedOds === null || session.ods.includes(selectedOds);
    const matchesSearch = 
      searchTerm === '' ||
      session.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      session.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      session.speakerNamesRaw?.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesPeriod && matchesOds && matchesSearch;
  });

  const handleDownloadFullSchedule = () => {
    downloadICS({
      title: 'Agenda Completa - SDGs in Brazil 2026',
      description: 'Evento oficial do Pacto Global da ONU - Rede Brasil na Sede das Nações Unidas em Nova York.',
      location: 'Sede da ONU - 405 E 45th St, New York, NY 10017',
      startTime: '10:00',
      endTime: '18:30'
    });
  };

  return (
    <section id="programacao" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Sexta-feira, 18 de Setembro de 2026</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Programação Oficial
            </h2>
          </div>

          <button
            onClick={handleDownloadFullSchedule}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-medium text-sm transition-all shadow-md"
          >
            <Download className="w-4 h-4 text-emerald-400" />
            <span>Baixar Agenda Completa (.ics)</span>
          </button>
        </div>

        <div className="glass-panel p-4 sm:p-6 rounded-3xl border border-slate-800/90 mb-10 space-y-4">
          
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-950/80 border border-slate-800">
              {(['todos', 'manhã', 'tarde', 'noite'] as const).map(period => (
                <button
                  key={period}
                  onClick={() => setActivePeriod(period)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold capitalize transition-all ${
                    activePeriod === period
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  {period === 'todos' ? 'Dia Inteiro' : period}
                </button>
              ))}
            </div>

            <div className="relative flex-1 min-w-[240px] max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por tema, palestra ou palestrante..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 overflow-x-auto pb-2">
            <span className="text-xs font-bold uppercase text-slate-400 flex items-center gap-1 shrink-0 mr-2">
              <Filter className="w-3.5 h-3.5 text-blue-400" />
              Filtro ODS:
            </span>
            <button
              onClick={() => setSelectedOds(null)}
              className={`px-3 py-1 rounded-full text-xs font-medium shrink-0 transition-colors ${
                selectedOds === null
                  ? 'bg-blue-600/30 text-blue-300 border border-blue-500/50'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              Todos os ODS
            </button>
            {odsList.map(ods => (
              <button
                key={ods}
                onClick={() => setSelectedOds(selectedOds === ods ? null : ods)}
                className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 transition-colors ${
                  selectedOds === ods
                    ? 'bg-emerald-500/30 text-emerald-300 border border-emerald-500/50'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                ODS {ods}
              </button>
            ))}
          </div>

        </div>

        <div className="space-y-4">
          {filteredSessions.length > 0 ? (
            filteredSessions.map((session) => (
              <div
                key={session.id}
                onClick={() => onSelectSession(session)}
                className={`glass-panel p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6 group ${
                  session.highlight
                    ? 'border-blue-500/40 bg-blue-950/20 hover:border-blue-400 hover:bg-blue-950/40'
                    : 'border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/40'
                }`}
              >
                <div className="flex items-center gap-3 shrink-0">
                  <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2 text-blue-400 font-mono text-sm font-bold shadow-inner">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    <span>{session.timeStart} - {session.timeEnd}</span>
                  </div>
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                    session.type === 'Keynote' ? 'bg-purple-950/80 text-purple-300 border border-purple-800' :
                    session.type === 'Painel' ? 'bg-blue-950/80 text-blue-300 border border-blue-800' :
                    session.type === 'Abertura' ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800' :
                    'bg-slate-900 text-slate-400 border border-slate-800'
                  }`}>
                    {session.type}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                    {session.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 font-light mb-3">
                    {session.description}
                  </p>
                </div>

                <div className="flex flex-row md:flex-col items-end justify-between md:justify-center gap-3 shrink-0">
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    {session.ods.map(o => (
                      <span key={o} className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-950 text-blue-400 border border-slate-800">
                        ODS {o}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-semibold text-blue-400 group-hover:underline flex items-center gap-1">
                    <span>Ver detalhes</span>
                    <span>→</span>
                  </span>
                </div>

              </div>
            ))
          ) : (
            <div className="text-center py-16 glass-panel rounded-2xl border border-slate-800">
              <p className="text-slate-400 text-base">Nenhuma sessão encontrada para os filtros selecionados.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
